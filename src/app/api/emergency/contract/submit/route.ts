import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import EmergencySubmission from '@/models/EmergencySubmission';
import { sendEmail } from '@/lib/nodemailer';
import {
  getEmergencyContractAdminEmailHtml,
  getEmergencyContractUserEmailHtml,
} from '@/lib/emailTemplates';
import { calculateEmergencyTotals } from '../create-intent/route';

const ALEX_EMAIL = process.env.ADMIN_EMAIL || "alex@enterprisecleaningcorp.com";
const JULIO_EMAIL = "jbiage@enterprisecleaningcorp.com";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();

    // 1. Validate required fields
    if (
      !data.companyName ||
      !data.name ||
      !data.phone ||
      !data.propertyAddress ||
      !data.town ||
      !data.signatureData
    ) {
      return NextResponse.json(
        { error: 'Missing required contract fields (Company, Authorized Signer, Phone, Address, Signature).' },
        { status: 400 }
      );
    }

    // 2. Server-side Rate Verification
    const calculation = calculateEmergencyTotals(
      data.shiftType || 'weekday',
      Number(data.technicianCount) || 2,
      data.paymentMethod || 'credit_card'
    );

    const clientIp =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      'IP Recorded';

    // 3. Save Contract Record to MongoDB
    const newSubmission = new EmergencySubmission({
      name: data.name.trim(),
      phone: data.phone.trim(),
      propertyAddress: data.propertyAddress.trim(),
      town: data.town.trim(),
      emergencyType: data.emergencyType || 'Water / Flood Emergency',
      description: data.description ? data.description.trim() : 'Emergency dispatch authorized via website contract.',
      email: data.email ? data.email.trim() : undefined,
      companyName: data.companyName.trim(),
      status: 'Acknowledged', // Immediately acknowledged since contract is signed!
      priority: 'URGENT',
      
      // Contract & Authorization Fields
      contractSigned: true,
      signedBy: data.name.trim(),
      signerTitle: data.signerTitle ? data.signerTitle.trim() : 'Authorized Representative',
      signatureData: data.signatureData,
      signedAt: new Date(),
      signerIp: clientIp,
      shiftType: calculation.shiftType,
      technicianCount: calculation.technicianCount,
      baseRate: calculation.baseRate,
      overtimeRatePerTech: calculation.overtimeRatePerTech,
      paymentMethod: data.paymentMethod || 'credit_card',
      processingFee: calculation.processingFee,
      totalAmount: calculation.totalAmount,
      paymentStatus: data.paymentStatus || 'authorized',
      stripePaymentIntentId: data.paymentIntentId || '',
      stripeReceiptUrl: data.stripeReceiptUrl || '',
      notes: `[Online Contract Signed & Payment Authorized] Total: $${calculation.totalAmount.toFixed(2)} (${calculation.technicianCount} techs, ${calculation.shiftType}). Dispatch immediately.`,
    });

    await newSubmission.save();

    // 4. Send Instant Alerts
    const shiftLabel =
      calculation.shiftType === 'after_8pm_weekend'
        ? 'After 8 PM / Weekend Job'
        : 'Weekday Job (Until 10 PM)';

    const emailData = {
      companyName: data.companyName.trim(),
      name: data.name.trim(),
      signerTitle: data.signerTitle?.trim(),
      phone: data.phone.trim(),
      email: data.email?.trim() || '',
      propertyAddress: data.propertyAddress.trim(),
      town: data.town.trim(),
      emergencyType: data.emergencyType || 'Emergency Water / Flood',
      description: data.description ? data.description.trim() : 'Emergency response requested.',
      shiftLabel,
      technicianCount: calculation.technicianCount,
      baseRate: calculation.baseRate,
      overtimeRatePerTech: calculation.overtimeRatePerTech,
      paymentMethod: data.paymentMethod || 'credit_card',
      processingFee: calculation.processingFee,
      totalAmount: calculation.totalAmount,
      paymentStatus: data.paymentStatus || 'authorized',
      stripePaymentIntentId: data.paymentIntentId,
      signatureData: data.signatureData,
      signedAt: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }),
      signerIp: clientIp,
      submissionId: newSubmission._id.toString(),
    };

    try {
      // Alert Alex & Julio
      const adminEmailPromise = sendEmail({
        to: `${ALEX_EMAIL}, ${JULIO_EMAIL}`,
        subject: `🚨 [CONTRACT SIGNED & DISPATCH READY] $${calculation.totalAmount.toFixed(2)} - ${data.companyName} (${data.phone})`,
        html: getEmergencyContractAdminEmailHtml(emailData),
        replyTo: data.email || undefined,
      });

      // Customer Confirmation copy
      let customerEmailPromise: Promise<any> | null = null;
      if (data.email && data.email.includes('@')) {
        customerEmailPromise = sendEmail({
          to: data.email,
          subject: `Confirmed: Emergency Services Dispatch Contract - Enterprise Cleaning Corp`,
          html: getEmergencyContractUserEmailHtml(emailData),
        });
      }

      await Promise.all([adminEmailPromise, customerEmailPromise].filter(Boolean));
    } catch (mailErr) {
      console.error('Failed to send contract notification emails:', mailErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Contract successfully executed and payment authorized. Crew has been alerted for immediate dispatch.',
        id: newSubmission._id,
        contract: {
          id: newSubmission._id,
          totalAmount: calculation.totalAmount,
          technicianCount: calculation.technicianCount,
          shiftType: calculation.shiftType,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error submitting emergency contract:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to submit emergency contract' },
      { status: 500 }
    );
  }
}
