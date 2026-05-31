import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const stats = [
    { label: 'Projects', value: '4+', suffix: '' },
    { label: 'Internships', value: '3', suffix: '' },
    { label: 'Hackathon Wins', value: '3×', suffix: '' },
    { label: 'CGPA', value: '8.48', suffix: '' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 bg-white/5 rounded-full border border-white/10 text-[#8B5CF6] text-sm font-medium">
            Available for SDE Roles
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase text-white">
            DEENPRASATH <span className="text-[#8B5CF6]">S</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-400 font-medium mb-8">
            Aspiring Software Development Engineer
          </h2>

          <div className="text-2xl md:text-4xl font-mono text-gray-300 mb-12 h-12">
            Build Something Incredible
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="px-8 py-4 bg-[#8B5CF6] rounded-xl font-bold text-white shadow-lg shadow-[#8B5CF6]/20 transition-all hover:scale-105 active:scale-95"
            >
              Download Resume
            </a>
            <a 
              href="#projects"
              className="px-8 py-4 bg-white/5 rounded-xl font-bold text-white border border-white/10 hover:border-[#8B5CF6]/50 transition-all hover:scale-105 active:scale-95"
            >
              View Projects
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 p-6 rounded-2xl border border-white/5"
              >
                <div className="text-3xl md:text-4xl font-black text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
