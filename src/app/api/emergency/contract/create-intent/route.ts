import { NextResponse } from 'next/server';
import { stripe, hasValidStripeKey } from '@/lib/stripe';

// Official Emergency Rates from Client Contract PDF
const RATES: Record<string, Record<number, number>> = {
  weekday: {
    2: 475.00,
    3: 713.00,
    4: 950.00,
  },
  after_8pm_weekend: {
    2: 575.00,
    3: 863.00,
    4: 1150.00,
  },
};

export function calculateEmergencyTotals(
  shiftType: string,
  technicianCount: number,
  paymentMethod: string
) {
  const safeShift = shiftType === 'after_8pm_weekend' ? 'after_8pm_weekend' : 'weekday';
  const safeTechs = [2, 3, 4].includes(Number(technicianCount)) ? Number(technicianCount) : 2;
  const baseRate = RATES[safeShift][safeTechs] || 475.00;

  let feePercentage = 0.035; // default 3.5% credit card
  let fee = 0;

  if (paymentMethod === 'debit_card') {
    feePercentage = 0.015;
    fee = Math.round(baseRate * feePercentage * 100) / 100;
  } else if (paymentMethod === 'ach') {
    feePercentage = 0.008;
    fee = Math.min(5.00, Math.round(baseRate * feePercentage * 100) / 100);
  } else {
    // credit card
    feePercentage = 0.035;
    fee = Math.round(baseRate * feePercentage * 100) / 100;
  }

  const total = Math.round((baseRate + fee) * 100) / 100;

  return {
    shiftType: safeShift,
    technicianCount: safeTechs,
    baseRate,
    processingFee: fee,
    totalAmount: total,
    overtimeRatePerTech: safeShift === 'after_8pm_weekend' ? 95.00 : 75.00,
  };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { shiftType, technicianCount, paymentMethod, companyName, customerEmail } = body;

    const calculation = calculateEmergencyTotals(shiftType, technicianCount, paymentMethod);
    const amountInCents = Math.round(calculation.totalAmount * 100);

    // If real Stripe keys are configured:
    if (hasValidStripeKey() && stripe) {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amountInCents,
        currency: 'usd',
        automatic_payment_methods: { enabled: true },
        description: `Emergency Cleaning Dispatch Authorization - ${calculation.technicianCount} Techs (${calculation.shiftType})`,
        metadata: {
          companyName: companyName || 'Not Provided',
          shiftType: calculation.shiftType,
          technicianCount: calculation.technicianCount.toString(),
          baseRate: calculation.baseRate.toString(),
          processingFee: calculation.processingFee.toString(),
          totalAmount: calculation.totalAmount.toString(),
          email: customerEmail || '',
        },
      });

      return NextResponse.json({
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
        isDemo: false,
        calculation,
      });
    }

    // Demo / Sandbox fallback if live keys are not set yet:
    const demoIntentId = `pi_demo_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    return NextResponse.json({
      clientSecret: `demo_secret_${demoIntentId}`,
      paymentIntentId: demoIntentId,
      isDemo: true,
      calculation,
    });
  } catch (error: any) {
    console.error('Error creating emergency payment intent:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to initialize payment authorization' },
      { status: 500 }
    );
  }
}
