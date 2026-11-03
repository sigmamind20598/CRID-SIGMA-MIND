import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'default_service';
const TEMPLATE_ID_USER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER || 'default_template';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'default_public_key';

export const sendProposalEmails = async (
  userEmail: string,
  userPhone: string,
  userName: string,
  proposalContent: string,
  topicTitle: string,
  isPaidRequest: boolean = true
) => {
  try {
    // 1. Send proposal to Admin email (sigmamind20598@gmail.com) via FormSubmit
    try {
      await fetch("https://formsubmit.co/ajax/sigmamind20598@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `CRID Proposal: ${topicTitle} - [Student: ${userName} | ₹100 Payment Pending to 8130330373@ibl]`,
          studentName: userName,
          studentEmail: userEmail,
          studentPhone: userPhone,
          topic: topicTitle,
          paymentStatus: "AWAITING RS 100 VIA UPI (8130330373@ibl) OR WHATSAPP (+91 8130330373)",
          paymentInstructionsShownToStudent: "Pay ₹100 to 8130330373@ibl and send confirmation screenshot on WhatsApp to +91 8130330373",
          proposalContent: proposalContent,
          timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        })
      });
    } catch (fsErr) {
      console.warn("FormSubmit notice to admin failed:", fsErr);
    }

    // 2. Try to dispatch PDF generation / email through backend API
    try {
      await fetch("/api/send-proposal-pdf", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userName,
          userEmail,
          userPhone,
          topicTitle,
          proposalContent
        })
      });
    } catch (pdfError) {
      console.warn("Backend PDF dispatch notice:", pdfError);
    }

    // 3. User email dispatch (if EmailJS is configured)
    if (!isPaidRequest && import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID_USER,
          {
            to_email: userEmail,
            to_name: userName,
            topic_title: topicTitle,
            proposal_content: proposalContent,
            services_list: `
CRID PhD Services:
1. Expert Human Review of your Proposal
2. Mock PhD Interviews
3. End-to-End Admission Guidance
WhatsApp: +91 8130330373
            `
          },
          PUBLIC_KEY
        );
      } catch (e) {
        console.warn("EmailJS send failed:", e);
      }
    }

    return true;
  } catch (error) {
    console.error("Error in sendProposalEmails:", error);
    return false;
  }
};
