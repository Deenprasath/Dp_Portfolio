import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-4 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#8B5CF6] rounded-xl flex items-center justify-center">
              <span className="text-white font-black">D</span>
            </div>
            <span className="text-xl font-bold tracking-tighter text-white uppercase">
              DEENPRASATH<span className="text-[#8B5CF6] italic">.S</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-gray-400 text-xs font-bold uppercase tracking-widest">
            <a href="#home" className="hover:text-[#8B5CF6] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#8B5CF6] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#8B5CF6] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#8B5CF6] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#8B5CF6] transition-colors border-l border-white/10 pl-8">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
