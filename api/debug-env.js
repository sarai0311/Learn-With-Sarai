export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check environment variables (without exposing sensitive data)
  const envCheck = {
    GOOGLE_SERVICE_ACCOUNT_EMAIL: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_PRIVATE_KEY: !!process.env.GOOGLE_PRIVATE_KEY,
    GOOGLE_CALENDAR_ID: !!process.env.GOOGLE_CALENDAR_ID,
    GOOGLE_SERVICE_ACCOUNT_EMAIL_VALUE: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ? 'sarai-spanish-calendar@...' : 'NOT_SET',
    GOOGLE_CALENDAR_ID_VALUE: process.env.GOOGLE_CALENDAR_ID || 'NOT_SET',
    PRIVATE_KEY_LENGTH: process.env.GOOGLE_PRIVATE_KEY ? process.env.GOOGLE_PRIVATE_KEY.length : 0,
    PRIVATE_KEY_STARTS_WITH: process.env.GOOGLE_PRIVATE_KEY ? process.env.GOOGLE_PRIVATE_KEY.substring(0, 25) : 'NOT_SET'
  };

  res.json({ 
    status: 'debug', 
    timestamp: new Date().toISOString(),
    environment: envCheck
  });
}