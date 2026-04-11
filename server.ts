import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { z } from "zod";
import { GoogleGenAI } from "@google/genai";
import Groq from "groq-sdk";
import Razorpay from "razorpay";
import crypto from "crypto";
import nodemailer from "nodemailer";
import { PROPOSAL_SYSTEM_INSTRUCTIONS } from "./src/services/proposalInstructions.ts";

import helmet from "helmet";
import { rateLimit } from "express-rate-limit";

import PDFDocument from "pdfkit";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Rate limiting
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: { error: "Too many requests" },
    standardHeaders: true,
    legacyHeaders: false,
  });
  app.use("/api/", limiter);

  app.use(express.json());

  // Basic health check
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      time: new Date().toISOString(),
      env: process.env.NODE_ENV || 'development'
    });
  });

  // AI Proxy
  app.post("/api/ai", async (req, res) => {
    try {
      const { task, ...params } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) throw new Error("Missing GEMINI_API_KEY");
      
      const genAI = new GoogleGenAI({ apiKey });
      
      let prompt = "";
      switch (task) {
        case 'news':
          prompt = `Provide 3-4 recent news items or breakthroughs in Cognitive Science and Psychology relevant to Indian research institutes (IITs, IISc, CBCS). Format as JSON array: [{title, excerpt, date, source}].`;
          break;
        case 'faculty':
          prompt = `List 5 prominent faculty members in Cognitive Science at ${params?.instituteName || 'top Indian institutes'}. Include their research interests and lab names. Format as JSON array: [{name, institute, interests, lab}].`;
          break;
        case 'publications':
          prompt = `List 5 recent high-impact publications (2023-2024) from Indian Cognitive Science labs. Format as JSON array: [{title, authors, journal, year, link}].`;
          break;
        case 'topics':
          prompt = `Suggest 5 trending PhD research topics in Cognitive Science specifically for the Indian academic landscape. Format as JSON array: [{title, description, relevance}].`;
          break;
        case 'proposal':
          prompt = `${PROPOSAL_SYSTEM_INSTRUCTIONS}\n\nGenerate a full proposal based on:\nProfessor: ${params?.professorName}\nInstitute: ${params?.instituteName}\nResearch Area: ${params?.specialization}`;
          break;
        case 'extract-institute':
          prompt = `Extract the most likely Indian research institute name from this text: "${params?.url}". Return only the name.`;
          break;
      }

      const modelName = 'gemini-3.1-flash';

      try {
        const response = await genAI.models.generateContent({
          model: modelName,
          contents: prompt,
        });
        res.json({ text: response.text });
      } catch (geminiError: any) {
        console.warn(`Gemini failed for ${task}, trying Groq...`, geminiError);
        
        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || '' });
        const groqModel = task === 'proposal' ? 'llama-3.3-70b-versatile' : 'llama-3.1-8b-instant';
        const chatCompletion = await groq.chat.completions.create({
          messages: [{ role: 'user', content: prompt }],
          model: groqModel,
        });
        
        res.json({ text: chatCompletion.choices[0]?.message?.content || "" });
      }
    } catch (error: any) {
      console.error("AI Error:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // New route to send proposal as PDF
  app.post("/api/send-proposal-pdf", async (req, res) => {
    try {
      const { userName, userEmail, userPhone, topicTitle, proposalContent } = req.body;
      
      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        throw new Error("SMTP credentials not configured");
      }

      // Create PDF
      const doc = new PDFDocument();
      let buffers: any[] = [];
      doc.on('data', buffers.push.bind(buffers));
      
      // Add content to PDF
      doc.fontSize(20).text('Research Proposal', { align: 'center' });
      doc.moveDown();
      doc.fontSize(14).text(`Topic: ${topicTitle}`);
      doc.moveDown();
      doc.fontSize(12).text(`Generated for: ${userName} (${userEmail})`);
      doc.text(`Phone: ${userPhone}`);
      doc.moveDown();
      doc.text('------------------------------------------------------------');
      doc.moveDown();
      doc.fontSize(11).text(proposalContent);
      doc.end();

      doc.on('end', async () => {
        const pdfData = Buffer.concat(buffers);

        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: Number(process.env.SMTP_PORT) || 587,
          secure: false,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"CRID Research Assistant" <${process.env.SMTP_USER}>`,
          to: "sigmamind20598@gmail.com",
          subject: `PDF Proposal: ${topicTitle}`,
          text: `Attached is the generated PDF proposal for ${userName}.\n\nTopic: ${topicTitle}\nEmail: ${userEmail}\nPhone: ${userPhone}`,
          attachments: [
            {
              filename: `${topicTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_proposal.pdf`,
              content: pdfData
            }
          ]
        });

        res.json({ status: "success" });
      });
    } catch (error: any) {
      console.error("PDF Email Error:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Razorpay
  app.post("/api/create-razorpay-order", async (req, res) => {
    try {
      const { amount } = req.body;
      const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID || '',
        key_secret: process.env.RAZORPAY_KEY_SECRET || '',
      });
      const order = await razorpay.orders.create({
        amount: amount * 100,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
      });
      res.json(order);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/verify-payment", async (req, res) => {
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
      const secret = process.env.RAZORPAY_KEY_SECRET || '';
      const hmac = crypto.createHmac("sha256", secret);
      hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
      const generated_signature = hmac.digest("hex");
      if (generated_signature === razorpay_signature) {
        res.json({ status: "success" });
      } else {
        res.status(400).json({ error: "Invalid signature" });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Email
  app.post("/api/submit-service", async (req, res) => {
    try {
      const { name, email, phone, service, details } = req.body;
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: "sigmamind20598@gmail.com",
        subject: `New Service Request: ${service}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nDetails: ${details}`,
      });
      res.json({ status: "success" });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Vite
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
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer().catch(console.error);
