import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Sparkles, Brain, Search, Zap } from 'lucide-react';

interface BrainMapAnimationProps {
  professorName: string;
  keywords: string[];
  publications?: string[];
  specialization?: string;
  onComplete: () => void;
}

export const BrainMapAnimation: React.FC<BrainMapAnimationProps> = ({ 
  professorName, 
  keywords, 
  publications = [], 
  specialization = "Neuroscience",
  onComplete 
}) => {
  const [step, setStep] = useState(0);
  const [gapTimer, setGapTimer] = useState(5);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1500), // Step 1: Flying Papers
      setTimeout(() => setStep(2), 4500), // Step 2: Finding Literature Gaps + Star Animation
      setTimeout(() => setStep(3), 9000), // Step 3: Show 5 Topics
      setTimeout(() => onComplete(), 14000) // Finish
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  useEffect(() => {
    if (step === 2 && gapTimer > 0) {
      const t = setInterval(() => setGapTimer(prev => Math.max(0, prev - 1)), 1000);
      return () => clearInterval(t);
    }
  }, [step, gapTimer]);

  const displayPapers = publications.length > 0 
    ? publications.slice(0, 10) 
    : [...Array(6)].map((_, i) => `${professorName}'s Research Paper #${i + 1}`);

  // Ensure we have at least 6 keywords for a good star
  const defaultKeywords = ["Research", "Innovation", "Methodology", "Analysis", "Theory", "Empirical"];
  const displayKeywords = [...new Set([...(keywords || []), ...defaultKeywords])].slice(0, 6);

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex items-center justify-center overflow-hidden perspective-1000">
      <div className="relative w-full max-w-5xl h-[700px] flex flex-col items-center justify-center transform-style-3d">
        
        {/* Step 0: Analyzing Professor */}
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, scale: 0.8, translateZ: -100 }}
              animate={{ opacity: 1, scale: 1, translateZ: 0 }}
              exit={{ opacity: 0, scale: 1.2, translateZ: 100 }}
              className="text-center"
            >
              <div className="w-32 h-32 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                <Search size={50} className="text-emerald-400 animate-pulse" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">Analyzing Research DNA</h2>
              <p className="text-emerald-400 font-mono tracking-[0.3em] uppercase text-sm font-semibold">{professorName}</p>
            </motion.div>
          )}

          {/* Step 1: Papers Flying In */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative w-full h-full transform-style-3d"
            >
              <div className="absolute top-10 left-0 right-0 text-center">
                <h2 className="text-2xl font-bold text-white mb-2">{professorName}</h2>
                <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase">Scanning Publications...</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1], 
                    opacity: [0.2, 0.4, 0.2],
                    rotateY: [0, 10, 0, -10, 0]
                  }}
                  transition={{ repeat: Infinity, duration: 5 }}
                >
                  <Brain size={180} className="text-emerald-500/30" />
                </motion.div>
              </div>
              {displayPapers.map((title, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: i % 2 === 0 ? -1000 : 1000, 
                    y: (Math.random() - 0.5) * 800,
                    z: Math.random() * -500,
                    opacity: 0,
                    rotateX: (Math.random() - 0.5) * 90,
                    rotateY: (Math.random() - 0.5) * 90,
                    scale: 0.5
                  }}
                  animate={{ 
                    x: (Math.random() - 0.5) * 500, 
                    y: (Math.random() - 0.5) * 500, 
                    z: 0,
                    opacity: 0.8,
                    rotateX: (Math.random() - 0.5) * 20,
                    rotateY: (Math.random() - 0.5) * 20,
                    scale: 1
                  }}
                  transition={{ 
                    duration: 2, 
                    delay: i * 0.15,
                    type: "spring",
                    stiffness: 40
                  }}
                  className="absolute left-1/2 top-1/2 -ml-32 -mt-16 bg-white/5 border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-xl w-72"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0">
                      <FileText size={16} className="text-emerald-400" />
                    </div>
                    <p className="text-[11px] text-white font-bold line-clamp-3 leading-tight">
                      {title}
                    </p>
                  </div>
                  <div className="mt-3 h-1 w-full bg-emerald-500/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: i * 0.15 + 0.5 }}
                      className="h-full bg-emerald-500/40"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Step 2: Gap Analysis + Star Animation */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative w-full h-full flex flex-col items-center justify-center transform-style-3d"
            >
              <div className="absolute top-10 left-0 right-0 text-center z-30">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Finding Literature Gaps based on Professor's work</h3>
                <div className="flex items-center justify-center gap-4">
                  <div className="font-mono text-emerald-500 text-4xl font-bold bg-emerald-500/10 px-6 py-2 rounded-xl border border-emerald-500/20">
                    {gapTimer}s
                  </div>
                </div>
              </div>

              {/* 3D Star Animation */}
              <div className="relative w-full h-full transform-style-3d">
                <svg className="absolute inset-0 w-full h-full">
                  {displayKeywords.map((_, i) => {
                    const angle = (i / displayKeywords.length) * Math.PI * 2;
                    const x2 = 512 + Math.cos(angle) * 380;
                    const y2 = 350 + Math.sin(angle) * 320;
                    return (
                      <motion.line
                        key={i}
                        x1="512"
                        y1="350"
                        x2={x2}
                        y2={y2}
                        stroke="#10b981"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.4 }}
                        transition={{ duration: 1, delay: 1 + i * 0.1 }}
                      />
                    );
                  })}
                </svg>
                
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: 1,
                      rotateY: [0, 360],
                      boxShadow: ["0 0 20px rgba(16,185,129,0.2)", "0 0 80px rgba(16,185,129,0.6)", "0 0 20px rgba(16,185,129,0.2)"]
                    }}
                    transition={{ 
                      scale: { type: "spring", damping: 12 },
                      rotateY: { duration: 10, ease: "linear", repeat: Infinity }
                    }}
                    className="w-48 h-24 bg-black border-2 border-emerald-500 rounded-xl flex items-center justify-center backdrop-blur-xl z-10 relative"
                  >
                    <span className="text-emerald-500 font-black text-2xl tracking-widest">CRID</span>
                    
                    {/* Star Shape Background */}
                    <div className="absolute inset-0 -z-10 opacity-10">
                      <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                        <polygon points="50,5 63,35 95,35 70,55 80,85 50,65 20,85 30,55 5,35 37,35" fill="#10b981" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                {displayKeywords.map((word, i) => {
                  const angle = (i / displayKeywords.length) * Math.PI * 2;
                  const targetX = Math.cos(angle) * 380;
                  const targetY = Math.sin(angle) * 320;
                  
                  return (
                    <motion.div
                      key={i}
                      initial={{ x: 0, y: 0, z: -500, opacity: 0, scale: 0 }}
                      animate={{ 
                        x: targetX,
                        y: targetY,
                        z: 0,
                        opacity: 1,
                        scale: 1
                      }}
                      transition={{ 
                        duration: 2, 
                        delay: 2 + i * 0.3,
                        type: "spring",
                        stiffness: 50
                      }}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500/10 border border-emerald-500/30 px-6 py-3 rounded-2xl backdrop-blur-2xl shadow-[0_0_30px_rgba(16,185,129,0.1)] z-20"
                    >
                      <span className="text-emerald-400 text-sm font-bold whitespace-nowrap tracking-wide">{word}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Step 3: Final 5 Topics */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="w-full max-w-4xl px-8"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-2">Research Topics Identified</h3>
                <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase">Synthesized for {professorName}</p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {displayKeywords.slice(0, 5).map((topic, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-6 group hover:bg-emerald-500/5 hover:border-emerald-500/20 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-xl border border-emerald-500/20 group-hover:scale-110 transition-transform">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1 group-hover:text-emerald-400 transition-colors">
                        {topic.toLowerCase() === specialization.toLowerCase() || specialization.toLowerCase().includes(topic.toLowerCase()) 
                          ? `${topic} Research` 
                          : `${topic} in ${specialization}`}
                      </h4>
                      <p className="text-white/40 text-xs uppercase tracking-widest">Potential Research Gap Detected</p>
                    </div>
                    <Sparkles className="ml-auto text-emerald-500/40 group-hover:text-emerald-500 transition-colors" size={20} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: `${(step / 3) * 100}%` }}
            className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
          />
        </div>

        {/* Skip Button */}
        <button 
          onClick={onComplete}
          className="absolute bottom-8 right-8 text-white/30 hover:text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] border border-white/10 px-4 py-2 rounded-full transition-all"
        >
          Skip Animation
        </button>
      </div>
    </div>
  );
};
