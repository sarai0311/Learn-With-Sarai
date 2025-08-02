// Test if googleapis package loads in Vercel environment

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

  try {
    console.log('🧪 Testing googleapis package import...');
    
    // Test 1: Try to import googleapis
    const googleapisModule = await import('googleapis');
    console.log('✅ googleapis import successful');
    
    // Test 2: Check if google object exists
    const google = googleapisModule.google;
    console.log('✅ google object exists:', !!google);
    
    // Test 3: Try to create GoogleAuth (without credentials)
    try {
      const GoogleAuth = google.auth.GoogleAuth;
      console.log('✅ GoogleAuth constructor exists:', !!GoogleAuth);
    } catch (authError) {
      console.log('❌ GoogleAuth error:', authError.message);
    }
    
    // Test 4: Check Node.js version
    const nodeVersion = process.version;
    console.log('🚀 Node.js version:', nodeVersion);
    
    // Test 5: Check environment variables
    const envCheck = {
      hasServiceAccountEmail: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
      hasCalendarId: !!process.env.GOOGLE_CALENDAR_ID,
    };
    
    const response = {
      status: 'success',
      nodeVersion,
      googleapisImported: true,
      googleObjectExists: !!google,
      environmentVariables: envCheck,
      timestamp: new Date().toISOString()
    };
    
    console.log('📊 Test results:', response);
    res.json(response);
    
  } catch (error) {
    console.error('❌ Error in googleapis test:', error);
    res.status(500).json({ 
      error: 'Failed to test googleapis',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      timestamp: new Date().toISOString()
    });
  }
}