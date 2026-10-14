import { NextRequest, NextResponse } from 'next/server';
import { getStripe, hasValidStripeKey } from '@/lib/stripe';
import dbConnect from '@/lib/mongoose';
import EmergencySubmission from '@/models/EmergencySubmission';

// Rates matching the executed client contract
const RATES = {
  weekday: {
    2: 475.0,
    3: 713.0,
    4: 950.0,
  },
  after_8pm_weekend: {
    2: 575.0,
    3: 863.0,
    4: 1150.0,
  },
};

const OVERTIME_RATES = {
  weekday: 75.0,
  after_8pm_weekend: 95.0,
};

function calculateEmergencyTotals(
  shiftType: 'weekday' | 'after_8pm_weekend',
  technicianCount: 2 | 3 | 4,
  paymentMethod: 'credit_card' | 'debit_card' | 'ach'
) {
  const baseRate = RATES[shiftType]?.[technicianCount] || RATES.weekday[2];
  let feePercentage = 0.035; // Default Credit Card 3.5%
  let processingFee = 0;

  if (paymentMethod === 'debit_card') {
    feePercentage = 0.015; // 1.5%
    processingFee = baseRate * feePercentage;
  } else if (paymentMethod === 'ach') {
    feePercentage = 0.008; // 0.8% capped at $5
    processingFee = Math.min(baseRate * feePercentage, 5.0);
  } else {
    processingFee = baseRate * feePercentage;
  }

  const totalAmount = Math.round((baseRate + processingFee) * 100) / 100;
  return {
    baseRate,
    processingFee,
    totalAmount,
    overtimeRatePerTech: OVERTIME_RATES[shiftType] || 75.0,
  };
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();

    const {
      companyName,
      name,
      phone,
      email,
      propertyAddress,
      town,
      shiftType = 'weekday',
      paymentMethod = 'credit_card',
      signerTitle = 'Authorized Representative',
      signatureData,
      emergencyType = 'Water Extraction & Rapid Emergency Cleanup',
      description = 'Emergency Dispatch Authorization Form (Online Signed & Paid)',
    } = body;

    // Initial booking deposit is strictly for 2 technicians ($475 weekday / $575 after-hours)
    const technicianCount = 2;

    if (!name || !phone || !propertyAddress || !town) {
      return NextResponse.json(
        { error: 'Customer Name, Callback Phone, Property Address, and Town are required.' },
        { status: 400 }
      );
    }

    if (!signatureData) {
      return NextResponse.json(
        { error: 'Digital signature is required before dispatch authorization.' },
        { status: 400 }
      );
    }

    const { baseRate, processingFee, totalAmount, overtimeRatePerTech } = calculateEmergencyTotals(
      shiftType,
      technicianCount,
      paymentMethod
    );

    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0] || req.headers.get('x-real-ip') || 'Recorded';
    const origin = req.headers.get('origin') || process.env.NEXTAUTH_URL || 'https://www.enterprisecleaningcorp.com';

    // 1. Create preliminary database record with status 'pending'
    const newSubmission = await EmergencySubmission.create({
      name: name.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : '',
      companyName: companyName ? companyName.trim() : '',
      propertyAddress: propertyAddress.trim(),
      town: town.trim(),
      emergencyType,
      description,
      status: 'New',
      contractSigned: false, // Will become true upon Stripe confirmation
      signedBy: name.trim(),
      signerTitle: signerTitle.trim(),
      signatureData,
      signerIp: clientIp,
      shiftType: shiftType === 'weekday' ? 'weekday' : 'after_hours',
      technicianCount,
      baseRate,
      overtimeRatePerTech,
      paymentMethod,
      processingFee,
      totalAmount,
      paymentStatus: 'pending',
    });

    const shiftLabel = shiftType === 'weekday' ? 'Weekday Shift (until 10 PM)' : 'Overnight / Weekend Shift (After 8 PM)';

    // 2. If valid Stripe Secret Key is present, initiate Stripe Hosted Checkout Session
    const stripeInstance = getStripe();
    if (hasValidStripeKey() && stripeInstance) {
      const lineItems: any[] = [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Emergency Crew Initial Deposit (2 Technicians • 4-Hr Minimum)`,
              description: `2 Certified Technicians — ${shiftLabel}. Central MA Portal-to-Portal Dispatch from 99 Hartwell St, West Boylston.`,
            },
            unit_amount: Math.round(baseRate * 100),
          },
          quantity: 1,
        },
      ];

      if (processingFee > 0) {
        lineItems.push({
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${paymentMethod === 'ach' ? 'ACH Bank Transfer' : paymentMethod === 'debit_card' ? 'Debit Card' : 'Credit Card'} Processing Surcharge`,
              description: 'Pass-through payment processing fee',
            },
            unit_amount: Math.round(processingFee * 100),
          },
          quantity: 1,
        });
      }

      const session = await stripeInstance.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        customer_email: email && email.includes('@') ? email : undefined,
        client_reference_id: newSubmission._id.toString(),
        metadata: {
          submissionId: newSubmission._id.toString(),
          companyName: companyName || '',
          customerPhone: phone,
          technicianCount: technicianCount.toString(),
          shiftType,
        },
        success_url: `${origin}/emergency-authorization?session_id={CHECKOUT_SESSION_ID}&submission_id=${newSubmission._id.toString()}`,
        cancel_url: `${origin}/emergency-authorization?cancelled=true`,
      });

      // Update submission with checkout session ID
      await EmergencySubmission.findByIdAndUpdate(newSubmission._id, {
        stripePaymentIntentId: session.id,
      });

      return NextResponse.json({
        url: session.url,
        sessionId: session.id,
        isDemo: false,
        submissionId: newSubmission._id.toString(),
      });
    }

    // 3. Sandbox / Demo Fallback (if real Stripe keys not added in .env yet)
    const demoSessionId = `demo_cs_${Date.now()}`;
    await EmergencySubmission.findByIdAndUpdate(newSubmission._id, {
      stripePaymentIntentId: demoSessionId,
    });

    return NextResponse.json({
      url: `${origin}/emergency-authorization?session_id=${demoSessionId}&submission_id=${newSubmission._id.toString()}&demo=true`,
      sessionId: demoSessionId,
      isDemo: true,
      submissionId: newSubmission._id.toString(),
    });
  } catch (error: any) {
    console.error('Error creating Stripe Checkout Session:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
