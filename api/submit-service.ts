import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  // CORS headers just in case
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
    const { serviceType, userEmail, userPhone, details } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions: any = {
      from: process.env.SMTP_USER || 'noreply@crid.app',
      to: 'manusingh20598@gmail.com, sigmamind20598@gmail.com',
      subject: `New Service Request: ${serviceType}`,
      text: `
        New request for ${serviceType}
        
        Contact Info:
        Email: ${userEmail}
        Phone: ${userPhone}
        
        Details:
        ${JSON.stringify(details, null, 2)}
      `,
    };

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
      console.log(`Email sent successfully for ${serviceType}`);
    } else {
      console.log('SMTP not configured. Mocking email send:', mailOptions);
    }

    res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send request' });
  }
}
