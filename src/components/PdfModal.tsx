import React, { useState } from 'react';
import { FileDown, Sparkles, MessageSquare, Copy, Check } from 'lucide-react';

export function PdfModal({ onClose, userName, userEmail, userPhone }: { onClose: () => void, userName: string, userEmail: string, userPhone: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText("8130330373@ibl");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppRedirect = () => {
    if (!userEmail || !userPhone || !userName) {
      onClose();
      return;
    }

    const message = `Hello CRID team! I just made a payment of ₹100 for the Research Proposal & Formatted PDF Copy.\n\nName: ${userName}\nEmail: ${userEmail}\nPhone: ${userPhone}\nPaid to UPI: 8130330373@ibl\n\nAttached is my payment screenshot.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918130330373?text=${encodedMessage}`, '_blank');
    onClose();
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
        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <FileDown size={32} className="text-emerald-500 animate-bounce" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white">Unlock Formatted PDF & Proposal 📄</h3>
        <p className="text-white/60 mb-5 text-xs leading-relaxed">
          Pay <strong className="text-emerald-400">₹100</strong> via UPI and message your payment confirmation on WhatsApp to unlock and receive the full proposal document.
        </p>
        
        <div className="bg-white/5 rounded-2xl p-5 mb-5 border border-white/10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3">Scan with GPay / PhonePe / Paytm / BHIM</p>
          <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=8130330373@ibl&pn=CRID%20Research&am=100&cu=INR" 
            alt="UPI QR Code"
            className="w-36 h-36 mx-auto mb-3 rounded-xl border-2 border-white/20 shadow-xl"
          />
          <div className="flex items-center justify-center gap-2">
            <span className="font-mono text-emerald-400 font-bold text-sm tracking-wider">8130330373@ibl</span>
            <button 
              onClick={handleCopyUpi}
              className="p-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-xs flex items-center gap-1"
              title="Copy UPI ID"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span className="text-[10px]">{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        <button 
          onClick={handleWhatsAppRedirect}
          className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3.5 rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-green-500/10 text-sm mb-3"
        >
          <MessageSquare size={18} />
          I've Paid — Message on WhatsApp (+91 8130330373)
        </button>

        <button
          onClick={onClose}
          className="text-xs text-white/40 hover:text-white transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
