import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School, Users, Heart } from 'lucide-react';

const educationData = [
  {
    type: 'edu',
    title: "B.E. Computer Science & Engineering",
    institution: "Sathyabama Institute of Science and Technology, Chennai",
    date: "Aug 2023 – Present",
    score: "CGPA: 8.48 / 10",
    icon: <GraduationCap size={20} />,
    color: "bg-primary"
  },
  {
    type: 'milestone',
    title: "Tech-Synergy FDP Coordinator",
    institution: "150+ participants, 5-day programme",
    date: "Co-curricular Milestone",
    score: "Organized Faculty Development Programme",
    icon: <Users size={20} />,
    color: "bg-secondary"
  },
  {
    type: 'edu',
    title: "HSC (Class XII) — CBSE",
    institution: "Alwin Memorial Public School",
    date: "Jun 2022 – May 2023",
    score: "Result: 73.2%",
    icon: <BookOpen size={20} />,
    color: "bg-accent"
  },
  {
    type: 'milestone',
    title: "Adopt-a-School Initiative",
    institution: "Chennai",
    date: "Community Engagement",
    score: "Donation drives & educational support",
    icon: <Heart size={20} />,
    color: "bg-pink-500"
  },
  {
    type: 'edu',
    title: "SSLC (Class X) — CBSE",
    institution: "MAV Vidyashram",
    date: "Jun 2020 – Aug 2021",
    score: "Result: 67.3%",
    icon: <School size={20} />,
    color: "bg-gray-600"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Education & <span className="text-gradient">Milestones</span>
          </motion.h2>
          <p className="text-gray-400">Academic foundation and leadership journeys</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-20"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } flex-row`}
              >
                <div className="hidden md:block w-[45%]"></div>
                
                {/* Dot */}
                <div className={`absolute left-[14px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full ${item.color} z-10 flex items-center justify-center shadow-lg shadow-black/50 border-4 border-background`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>

                <div className="w-[85%] md:w-[45%] ml-12 md:ml-0 glass-card p-6 rounded-3xl border border-white/5 hover:border-primary/30 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <span className="text-xs font-mono text-primary font-bold uppercase tracking-wider">{item.date}</span>
                  </div>
                  <p className="text-gray-400 font-medium mb-3">{item.institution}</p>
                  <div className="inline-block px-3 py-1 bg-white/5 rounded-lg border border-white/10 text-sm font-bold text-secondary">
                    {item.score}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
