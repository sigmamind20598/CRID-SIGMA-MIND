import Razorpay from 'razorpay';

export default async function handler(req: any, res: any) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { amount, currency = "INR" } = req.body;
    
    const keyId = process.env.RAZORPAY_KEY_ID?.trim();
    const keySecret = process.env.RAZORPAY_KEY_SECRET?.trim();

    if (!keyId || !keySecret) {
      console.error("Razorpay keys missing in environment");
      return res.status(500).json({ error: "Razorpay keys not configured on server. Please check Vercel environment variables." });
    }

    // Handle potential default export issues in different environments
    const RazorpayClass = (Razorpay as any).default || Razorpay;
    const instance = new RazorpayClass({
      key_id: keyId,
      key_secret: keySecret,
    });

    const options = {
      amount: Math.floor(Number(amount) * 100), // amount in paise
      currency,
      receipt: `receipt_order_${Date.now()}`,
    };

    const order = await instance.orders.create(options);
    res.status(200).json(order);
  } catch (error: any) {
    console.error("Razorpay Order Error:", error);
    res.status(500).json({ error: error.message || "Failed to create order" });
  }
}
