import React from 'react';
import { FileDown, Sparkles } from 'lucide-react';

export function PdfModal({ onClose }: { onClose: () => void }) {
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
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 text-left">
          <p className="text-sm text-white/80 mb-2">1. Pay ₹49 via UPI to:</p>
          <p className="text-lg font-mono text-emerald-400 font-bold mb-4 text-center bg-black/50 py-2 rounded-lg">8130330373@ibl</p>
          <p className="text-sm text-white/80 mb-2">2. Send a screenshot of your payment to <strong className="text-white">sigmamind20598@gmail.com</strong> or WhatsApp us.</p>
          <p className="text-sm text-white/80">3. We will email you the formatted PDF within a few hours!</p>
        </div>
        <button 
          onClick={() => {
            alert("Awesome! Please send the screenshot to sigmamind20598@gmail.com. We'll send your PDF soon!");
            onClose();
          }}
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        >
          I've Paid! Send me the PDF 📩
        </button>
      </div>
    </div>
  );
}
