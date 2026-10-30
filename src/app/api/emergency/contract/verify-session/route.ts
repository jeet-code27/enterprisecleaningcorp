import { NextRequest, NextResponse } from 'next/server';
import { getStripe, hasValidStripeKey } from '@/lib/stripe';
import dbConnect from '@/lib/mongoose';
import EmergencySubmission from '@/models/EmergencySubmission';
import { sendEmail } from '@/lib/nodemailer';
import {
  getEmergencyContractAdminEmailHtml,
  getEmergencyContractUserEmailHtml,
  EmergencyContractEmailData,
} from '@/lib/emailTemplates';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get('session_id');
    const submissionId = searchParams.get('submission_id');

    if (!sessionId && !submissionId) {
      return NextResponse.json(
        { error: 'Session ID or Submission ID is required' },
        { status: 400 }
      );
    }

    // Find submission
    let submission = null;
    if (submissionId) {
      submission = await EmergencySubmission.findById(submissionId);
    } else if (sessionId) {
      submission = await EmergencySubmission.findOne({ stripePaymentIntentId: sessionId });
    }

    if (!submission) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
    }

    // If already verified and marked paid, return immediately
    if (submission.contractSigned && submission.paymentStatus === 'paid') {
      return NextResponse.json({ success: true, submission });
    }

    let isPaid = false;
    let paymentIntentId = submission.stripePaymentIntentId || sessionId || '';
    let receiptUrl = '';

    // Verify with Stripe if real keys configured
    const stripeInstance = getStripe();
    if (hasValidStripeKey() && stripeInstance && sessionId && !sessionId.startsWith('demo_')) {
      try {
        const session = await stripeInstance.checkout.sessions.retrieve(sessionId, {
          expand: ['payment_intent'],
        });

        if (session.payment_status === 'paid') {
          isPaid = true;
          if (typeof session.payment_intent === 'object' && session.payment_intent) {
            paymentIntentId = session.payment_intent.id;
            receiptUrl = (session.payment_intent as any).charges?.data?.[0]?.receipt_url || '';
          } else if (typeof session.payment_intent === 'string') {
            paymentIntentId = session.payment_intent;
          }
        }
      } catch (stripeErr) {
        console.error('Error verifying Stripe session:', stripeErr);
      }
    } else {
      // In demo/sandbox mode
      isPaid = true;
    }

    if (isPaid) {
      submission.contractSigned = true;
      submission.paymentStatus = 'paid';
      submission.status = 'Dispatched';
      submission.signedAt = new Date();
      submission.stripePaymentIntentId = paymentIntentId;
      if (receiptUrl) {
        submission.stripeReceiptUrl = receiptUrl;
      }
      await submission.save();

      // Trigger high-priority email alerts to Alex & Julio, and customer receipt
      try {
        const shiftLabel =
          submission.shiftType === 'after_hours'
            ? 'After 8 PM & Weekends'
            : 'Weekday (until 10 PM)';

        const emailData: EmergencyContractEmailData = {
          submissionId: submission._id.toString(),
          companyName: submission.companyName || '',
          name: submission.name,
          signerTitle: submission.signerTitle || 'Authorized Representative',
          phone: submission.phone,
          email: submission.email || '',
          propertyAddress: submission.propertyAddress,
          town: submission.town,
          emergencyType: submission.emergencyType || 'Emergency Extraction & Rapid Cleanup',
          description: submission.description || 'Online Dispatch Authorization',
          shiftLabel,
          technicianCount: submission.technicianCount,
          baseRate: submission.baseRate,
          overtimeRatePerTech:
            submission.overtimeRatePerTech || (submission.shiftType === 'after_hours' ? 95 : 75),
          paymentMethod: submission.paymentMethod,
          processingFee: submission.processingFee,
          totalAmount: submission.totalAmount,
          paymentStatus: 'paid',
          stripePaymentIntentId: submission.stripePaymentIntentId,
          signatureData: submission.signatureData,
          signedAt: submission.signedAt
            ? submission.signedAt.toLocaleString('en-US')
            : new Date().toLocaleString('en-US'),
          signerIp: submission.signerIp || 'Recorded',
        };

        const adminHtml = getEmergencyContractAdminEmailHtml(emailData);

        const notifyRecipients = Array.from(
          new Set(
            [
              'alex@enterprisecleaningcorp.com',
              'jbiage@enterprisecleaningcorp.com',
              process.env.ADMIN_EMAIL,
              process.env.SMTP_EMAIL,
            ].filter(Boolean) as string[]
          )
        );

        // Send to admin team
        await sendEmail({
          to: notifyRecipients.join(', '),
          subject: `DISPATCH AUTHORIZATION: Emergency Contract Signed & Paid ($${submission.totalAmount.toFixed(
            2
          )}) - Dispatch ${submission.technicianCount} Techs to ${submission.town}`,
          html: adminHtml,
        });

        // Send customer confirmation receipt if email was provided
        if (submission.email && submission.email.includes('@')) {
          const userHtml = getEmergencyContractUserEmailHtml(emailData);

          await sendEmail({
            to: submission.email,
            subject: `Emergency Services Dispatch Confirmation & Payment Receipt #${submission._id
              .toString()
              .slice(-8)
              .toUpperCase()} - Enterprise Cleaning Corp`,
            html: userHtml,
          });
        }
      } catch (emailErr) {
        console.error('Failed to dispatch emergency contract emails:', emailErr);
      }
    }

    return NextResponse.json({
      success: isPaid,
      submission,
    });
  } catch (error: any) {
    console.error('Error verifying emergency session:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error verifying session' },
      { status: 500 }
    );
  }
}
