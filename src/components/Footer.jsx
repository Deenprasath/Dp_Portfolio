import React from 'react';
import { Github, Linkedin, Mail, Twitter, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#8B5CF6] rounded-lg"></div>
              <span className="text-2xl font-black text-white uppercase tracking-tighter">DEENPRASATH S</span>
            </div>
            <p className="text-gray-400 max-w-xs mb-8 leading-relaxed">
              Building solutions, one line of code at a time. Specializing in high-performance full-stack applications and IoT systems.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, href: "https://github.com/Deenprasath" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/deenprasaths090705" },
                { icon: <Mail size={20} />, href: "mailto:sdeenprasath@gmail.com" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#8B5CF6] transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-mono">
              <li>Chennai, TN, India</li>
              <li>sdeenprasath@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest">
            © 2025 Deenprasath S. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
          >
            Back to top
            <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#8B5CF6] transition-all">
              <ChevronUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
