import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // --- API ROUTES ---
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/submit-service", async (req, res) => {
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

      res.json({ success: true });
    } catch (error: any) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send request' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
