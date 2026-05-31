import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Star, TrendingUp } from 'lucide-react';

const achievements = [
  {
    title: "3rd Place — CodeBeat Hackathon",
    domain: "Web Development domain",
    org: "BITS Pilani Hyderabad",
    date: "March 2025",
    icon: "🥉",
    color: "from-orange-400 to-orange-700"
  },
  {
    title: "2nd Prize — Build Beyond the Box Hackathon 2025",
    domain: "Built 'EcoRace' AI-powered campus energy saver",
    org: "Hackathon 2025",
    date: "September 2025",
    icon: "🥈",
    color: "from-gray-300 to-gray-500"
  },
  {
    title: "3rd Place — IDEATHON 2K26-V1",
    domain: "Peer-to-Peer Learning Platform",
    org: "Sathyabama CSE Dept",
    date: "January 2026",
    icon: "🥉",
    color: "from-orange-400 to-orange-700"
  },
  {
    title: "Cognizant Technoverse Hackathon 2026",
    domain: "Advanced to Agent Builder Round",
    org: "Top 8 college teams",
    date: "March–April 2026",
    icon: "🏅",
    color: "from-yellow-300 to-yellow-600"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/30"
          >
            <Trophy className="text-primary" size={32} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Hall of <span className="text-gradient">Fame</span>
          </motion.h2>
          <p className="text-gray-400 max-w-xl mx-auto">Achievements and recognitions from hackathons and technical competitions across India.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 rounded-3xl flex items-start gap-6 relative group border border-white/5 overflow-hidden"
            >
              {/* Animated corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="text-5xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                   <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 font-medium">
                  {item.domain}
                </p>

                <div className="flex flex-wrap gap-y-2 gap-x-4 pt-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <Star size={14} className="text-accent" />
                    {item.org}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp size={14} className="text-secondary" />
                    {item.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
