import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, currency, serviceType, customerInfo } = req.body;

    // Validate the request
    if (!amount || !currency || !serviceType || !customerInfo) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents and ensure integer
      currency: currency.toLowerCase(),
      metadata: {
        serviceType,
        customerName: customerInfo.name,
        customerEmail: customerInfo.email,
        customerLevel: customerInfo.level,
        customerGoals: customerInfo.goals.substring(0, 500), // Stripe metadata has character limits
      },
      description: `Spanish Class: ${serviceType}`,
      receipt_email: customerInfo.email,
    });

    console.log('Payment intent created:', paymentIntent.id);

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
} 