import React from 'react';
import { FileDown, Sparkles, MessageSquare } from 'lucide-react';

export function PdfModal({ onClose, userName, userEmail, userPhone }: { onClose: () => void, userName: string, userEmail: string, userPhone: string }) {
  const handleWhatsAppRedirect = () => {
    if (!userEmail || !userPhone || !userName) {
      alert("Please ensure your contact details are filled out first.");
      onClose();
      return;
    }

    const message = `Hello CRID team! I just made a payment of ₹49 for the Formatted PDF Copy.\n\nName: ${userName}\nEmail: ${userEmail}\nPhone: ${userPhone}\n\nAttached is my payment screenshot.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917092884311?text=${encodedMessage}`, '_blank');
    
    onClose();
    alert("Thank you! Once we verify your screenshot on WhatsApp, we will email your formatted PDF immediately!");
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
        
        <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4">Scan to Pay ₹49</p>
          <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=8130330373@ibl%26pn=CRID%26am=49%26cu=INR" 
            alt="UPI QR Code"
            className="w-40 h-40 mx-auto mb-4 rounded-xl border-4 border-white shadow-xl"
          />
          <p className="text-xs font-mono text-emerald-400">8130330373@ibl</p>
        </div>

        <p className="text-white/60 mb-6 text-sm leading-relaxed">
          Pay <strong className="text-emerald-400">₹49</strong> via UPI and send the screenshot on WhatsApp. We'll email your beautifully formatted, ready-to-submit PDF immediately!
        </p>

        <button 
          onClick={handleWhatsAppRedirect}
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <MessageSquare size={20} />
          I've Paid - Send Screenshot
        </button>
      </div>
    </div>
  );
}
