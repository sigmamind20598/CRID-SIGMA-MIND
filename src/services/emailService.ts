import emailjs from '@emailjs/browser';

// To make this work, the user needs to set up EmailJS (https://www.emailjs.com/)
// and add these variables to their Vercel Environment Variables.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'default_service';
const TEMPLATE_ID_USER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER || 'default_template';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'default_public_key';

export const sendProposalEmails = async (
  userEmail: string,
  userPhone: string,
  userName: string,
  proposalContent: string,
  topicTitle: string,
  isPaidRequest: boolean = false
) => {
  try {
    // 1. Send to Admin (sigmamind20598@gmail.com)
    // We can use formsubmit.co as a reliable fallback for the admin if EmailJS isn't set up yet!
    await fetch("https://formsubmit.co/ajax/sigmamind20598@gmail.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          _subject: isPaidRequest ? `PAID Proposal Request: ${topicTitle}` : `New FREE Proposal Generated: ${topicTitle}`,
          userName,
          userEmail,
          userPhone,
          topicTitle,
          isPaidRequest: isPaidRequest ? "YES - Awaiting Rs 150 Payment Screenshot" : "NO - Free Proposal",
          proposalContent: proposalContent
      })
    });

    // 2. Send to User (via EmailJS)
    // We only try this if they have configured EmailJS, otherwise it will fail gracefully.
    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID_USER,
        {
          to_email: userEmail,
          to_name: userName,
          topic_title: topicTitle,
          proposal_content: proposalContent,
          // Include services list
          services_list: `
Here are our other services to help you conquer your research goals:
1. Expert Human Review of your Proposal
2. Mock PhD Interviews
3. End-to-End Admission Guidance
Visit our website to learn more!
          `
        },
        PUBLIC_KEY
      );
    } else {
      console.warn("EmailJS is not configured. User email was not sent, but Admin was notified via FormSubmit.");
    }

    return true;
  } catch (error) {
    console.error("Error sending emails:", error);
    return false;
  }
};
