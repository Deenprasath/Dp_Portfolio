import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onFinished }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinished, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, [onFinished]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase mb-2">
          DEENPRASATH<span className="text-[#8B5CF6]">.S</span>
        </div>
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mx-auto mt-6">
          <div 
            className="h-full bg-[#8B5CF6] transition-all duration-150"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="mt-4 text-gray-500 font-mono text-xs tracking-widest uppercase">
          Loading Portfolio {percent}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
