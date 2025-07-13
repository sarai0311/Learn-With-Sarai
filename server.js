import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import Stripe from 'stripe';

// Load environment variables
config({ path: '.env.local' });

const app = express();
const PORT = 3001;

// Initialize Stripe with secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Create payment intent endpoint
app.post('/api/create-payment-intent', async (req, res) => {
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
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
  console.log(`Stripe integration ${process.env.STRIPE_SECRET_KEY ? 'configured' : 'NOT configured'}`);
}); 