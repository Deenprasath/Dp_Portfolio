import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, ExternalLink } from 'lucide-react';

import profileImg from '../assets/profile.jpg';

const traits = [
  "🛠 Full Stack Dev", "☕ Java Dev", "🤖 Prompt Engineer",
  "🏆 Hackathon Winner", "🔗 Team Player", "🚀 Fast Learner"
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Glow Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              <div className="glass-card p-4 rounded-[2rem] max-w-sm relative z-10">
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative">
                  <img 
                    src={profileImg} 
                    alt="Deenprasath" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">Online</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-1">Deenprasath S</h3>
                  <p className="text-primary font-medium mb-4">SDE Aspirant</p>
                  
                  <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-6">
                    <MapPin size={16} className="text-secondary" />
                    Chennai, India 🇮🇳
                  </div>

                  <div className="flex justify-center gap-4">
                    {[
                      { icon: <Github size={20} />, href: "https://github.com/Deenprasath" },
                      { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/deenprasaths090705" },
                      { icon: <Mail size={20} />, href: "mailto:sdeenprasath@gmail.com" }
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        whileHover={{ y: -3, color: '#8B5CF6' }}
                        className="text-gray-400 transition-colors"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
              <span className="w-10 h-1px bg-primary"></span>
              About Me
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Driven by curiosity, <br />
              <span className="text-gradient">Defined by code.</span>
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
              <p>
                I'm a Computer Science Engineering student at <span className="text-white font-semibold">Sathyabama Institute of Science and Technology</span>, Chennai, with a CGPA of <span className="text-primary font-bold">8.48</span>.
              </p>
              <p>
                I'm passionate about building full-stack web apps, IoT systems, and AI-powered solutions. 
                I've interned at 3 companies, won multiple national hackathons, and built projects that tackle real problems.
              </p>
              <p>
                I'm actively seeking <span className="text-white border-b-2 border-primary/30">SDE roles</span> where I can ship impactful products and contribute to meaningful technological advancement.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {traits.map((trait, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
                  className="px-4 py-2 glass border border-primary/20 rounded-xl text-sm font-medium text-gray-200"
                >
                  {trait}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
