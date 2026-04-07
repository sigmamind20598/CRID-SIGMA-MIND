import React from 'react';
import { FileDown, Sparkles } from 'lucide-react';
import { loadRazorpay } from '../utils/razorpay';

export function PdfModal({ onClose, userName, userEmail, userPhone }: { onClose: () => void, userName: string, userEmail: string, userPhone: string }) {
  const handlePayment = () => {
    if (!userEmail || !userPhone || !userName) {
      alert("Please ensure your contact details are filled out first.");
      onClose();
      return;
    }

    onClose();

    loadRazorpay(
      49,
      'PDF Download of Research Proposal',
      userName,
      userEmail,
      userPhone,
      (response) => {
        // On Success
        alert(`Payment successful! (ID: ${response.razorpay_payment_id}). Please send this ID to sigmamind20598@gmail.com and we will email your formatted PDF immediately!`);
      }
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#111] border border-white/10 rounded-3xl p-8 max-w-md w-full relative text-center">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white"
        >
          ✕
        </button>
        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <FileDown size={40} className="text-emerald-500 animate-bounce" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Get a Formatted PDF! 📄</h3>
        <p className="text-white/60 mb-6 leading-relaxed">
          Let's be honest, copying and pasting this text into Word is going to mess up the formatting. 
          For just <strong className="text-emerald-400">₹49</strong>, we'll send you a beautifully formatted, ready-to-submit PDF! 
          <br /><br />
          Plus, your ₹49 helps us keep the servers running (and buys our dev team a much-needed cup of chai ☕).
        </p>
        <button 
          onClick={handlePayment}
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Pay ₹49 Securely
        </button>
      </div>
    </div>
  );
}
