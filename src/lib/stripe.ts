import Stripe from 'stripe';

export const getStripe = (): Stripe | null => {
  const key = process.env.STRIPE_SECRET_KEY || '';
  if (
    key &&
    (key.startsWith('sk_test_') ||
      key.startsWith('sk_live_') ||
      key.startsWith('rk_live_') ||
      key.startsWith('rk_test_'))
  ) {
    return new Stripe(key);
  }
  return null;
};

export const hasValidStripeKey = (): boolean => {
  const key = process.env.STRIPE_SECRET_KEY || '';
  return Boolean(
    key &&
      !key.includes('placeholder') &&
      (key.startsWith('sk_test_') ||
        key.startsWith('sk_live_') ||
        key.startsWith('rk_live_') ||
        key.startsWith('rk_test_'))
  );
};

export const stripe = getStripe();
