import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const internships = [
  {
    role: "Web Development Intern",
    company: "Tamizhan Skills by AICTE",
    duration: "Jun 2025 – Jul 2025",
    location: "Chennai",
    points: [
      "Developed responsive web application features",
      "Assisted in frontend and backend integration",
      "Worked on debugging and UI improvements",
      "Collaborated with developers on project deliverables"
    ],
    tech: ["React", "JavaScript", "HTML", "CSS"]
  },
  {
    role: "AI & Prompt Engineering Intern",
    company: "Vault of Codes by AICTE",
    duration: "Jun 2025 – Jul 2025",
    location: "Remote",
    points: [
      "Worked on AI-based workflows and prompt engineering",
      "Developed structured prompts for real-world AI tasks",
      "Improved understanding of NLP and LLM applications",
      "Collaborated on AI implementation projects"
    ],
    tech: ["Prompt Engineering", "NLP", "AI Workflows"]
  },
  {
    role: "Web Development Intern",
    company: "AICL Learning Simplified",
    duration: "Jun 2024 – Jul 2024",
    location: "Remote",
    points: [
      "Built responsive frontend modules with React.js",
      "Designed user-friendly interfaces",
      "Participated in testing and deployment",
      "Gained full stack development experience"
    ],
    tech: ["React.js", "JavaScript", "CSS"]
  }
];

const InternshipCard = ({ exp, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-center justify-between mb-12 w-full ${isEven ? 'flex-row-reverse' : ''}`}>
      <div className="hidden md:block w-5/12"></div>
      
      {/* Timeline Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary z-10 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
        <Briefcase size={16} className="text-primary" />
      </div>

      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="w-full md:w-5/12 glass-card p-6 rounded-3xl relative"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
            {exp.role}
          </span>
          <div className="flex items-center gap-1 text-gray-400 text-xs font-medium uppercase tracking-widest leading-none">
            <Calendar size={12} className="shrink-0" />
            {exp.duration}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
        <div className="flex items-center gap-1 text-secondary text-sm font-medium mb-4">
          <MapPin size={14} />
          {exp.location}
        </div>

        <ul className="space-y-2 mb-6">
          {exp.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
              <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
              {point}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {exp.tech.map((t, i) => (
            <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-white/5 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>

        {/* Pointer Arrow */}
        <div className={`hidden md:block absolute top-10 w-4 h-4 bg-primary rotate-45 z-0 ${isEven ? '-left-2' : '-right-2'}`}></div>
      </motion.div>
    </div>
  );
};

const Internships = () => {
  return (
    <section id="internships" className="py-24 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Professional <span className="text-gradient">Journey</span>
          </motion.h2>
          <p className="text-gray-400">My industry experience and professional growth</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-20"></div>

          <div className="relative z-10">
            {internships.map((exp, index) => (
              <InternshipCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
