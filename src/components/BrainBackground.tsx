import React from 'react';
import { motion } from 'motion/react';

const BrainBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      {/* Complex Neural Network Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          {/* Neural Connections (Live Wirings) */}
          {[...Array(80)].map((_, i) => {
            const x1 = Math.random() * 1000;
            const y1 = Math.random() * 1000;
            const x2 = x1 + (Math.random() - 0.5) * 200;
            const y2 = y1 + (Math.random() - 0.5) * 200;
            return (
              <motion.line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#FFD700" // Gold color
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.4, 0],
                  x1: [x1, x1 + (Math.random() - 0.5) * 50],
                  y1: [y1, y1 + (Math.random() - 0.5) * 50]
                }}
                transition={{ 
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 5
                }}
              />
            );
          })}
          
          {/* Neuronal Nodes (Firing) */}
          {[...Array(50)].map((_, i) => (
            <motion.circle
              key={i}
              r={Math.random() * 2 + 1}
              fill="#FFD700"
              cx={Math.random() * 1000}
              cy={Math.random() * 1000}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
                filter: ["blur(0px)", "blur(2px)", "blur(0px)"]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5
              }}
            />
          ))}
        </svg>
      </div>

      {/* Full Screen Brain Image with Golden Filter */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2000&auto=format&fit=crop')] bg-center bg-no-repeat bg-cover opacity-20 mix-blend-screen grayscale brightness-150 sepia-[.8] hue-rotate-[10deg] saturate-[2]" />
      
      {/* Golden Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-900/10 to-black" />
    </div>
  );
};

export default React.memo(BrainBackground);
