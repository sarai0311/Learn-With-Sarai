export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  res.json({
    STRIPE_SECRET_KEY_PRESENT: !!process.env.STRIPE_SECRET_KEY,
    STRIPE_SECRET_KEY_START: process.env.STRIPE_SECRET_KEY ? process.env.STRIPE_SECRET_KEY.slice(0,8) : null,
    NODE_ENV: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
}