import React from 'react';

const BrainBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      {/* Complex Neural Network Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          {/* Neural Connections (Live Wirings) */}
          {[...Array(60)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke={`hsl(${Math.random() * 360}, 70%, 50%)`}
              strokeWidth="0.5"
              strokeOpacity="0.4"
              className="animate-pulse"
              style={{ 
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s` 
              }}
            />
          ))}
          
          {/* Neuronal Nodes */}
          {[...Array(40)].map((_, i) => (
            <circle
              key={i}
              r={Math.random() * 1.5 + 0.5}
              fill="white"
              className="animate-pulse"
              style={{
                animationDelay: `${Math.random() * 2}s`,
                cx: `${Math.random() * 100}%`,
                cy: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Full Screen Brain Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2000&auto=format&fit=crop')] bg-center bg-no-repeat bg-cover opacity-30 animate-pulse" style={{ animationDuration: '6s' }} />
      
      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
    </div>
  );
};

export default React.memo(BrainBackground);
