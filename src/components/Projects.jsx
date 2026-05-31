import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Globe, Cpu, Smartphone, Brain } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "ReMind",
    date: "Jan 2025 – Present",
    desc: "Wearable IoT device for Alzheimer's patients with real-time tracking, safety alerts, and caregiver support via a connected mobile app.",
    tech: ["IoT", "Firebase", "Mobile App", "React Native"],
    tags: ["IoT", "Mobile"],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Lost & Found Application",
    date: "Feb 2026",
    desc: "Secure full-stack web system for reporting and recovering lost items with item tracking and verification workflows.",
    tech: ["React.js", "Spring Boot", "MySQL", "REST APIs"],
    tags: ["Web"],
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Peer-to-Peer Learning Platform",
    date: "Jan–Feb 2026",
    desc: "Real-time collaborative learning platform with WebSocket-powered live peer interaction and seamless communication.",
    tech: ["React.js", "Spring Boot", "WebSockets", "MongoDB"],
    tags: ["Web"],
    github: "#",
    live: "#"
  },
  {
    id: 4,
    title: "GPS Women Safety Tracker",
    date: "Feb–Apr 2025",
    desc: "GPS emergency alert system with real-time location sharing and Telegram bot integration for rapid response.",
    tech: ["JavaScript", "GPS API", "Telegram API", "Firebase"],
    tags: ["Web", "AI"],
    github: "#",
    live: "#"
  }
];

const categories = ["All", "Web", "IoT", "AI", "Mobile"];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="group relative h-full glass-card rounded-[2rem] overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500"
    >
      {/* Card Header Gradient */}
      <div className="h-32 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
           {/* Geometric shapes pattern could go here */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
        <div className="absolute bottom-4 left-6 flex gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-background/80 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-tighter text-secondary flex items-center gap-1 border border-secondary/20 shadow-lg shadow-black/50">
              {tag === 'Web' && <Globe size={10} />}
              {tag === 'IoT' && <Cpu size={10} />}
              {tag === 'AI' && <Brain size={10} />}
              {tag === 'Mobile' && <Smartphone size={10} />}
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-8 pb-32">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors tracking-tight">
            {project.title}
          </h3>
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{project.date}</span>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => (
            <span key={t} className="text-[10px] font-bold text-gray-300 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons anchored to bottom */}
      <div className="absolute bottom-6 left-6 right-6 flex gap-3">
        <motion.a
          href={project.github}
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 py-3 glass rounded-xl flex items-center justify-center gap-2 text-white border border-white/10 hover:border-primary/50 transition-all"
        >
          <Github size={18} />
          <span className="text-sm font-bold">GitHub</span>
        </motion.a>
        <motion.a
          href={project.live}
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 py-3 bg-primary rounded-xl flex items-center justify-center gap-2 text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
        >
          <ExternalLink size={18} />
          <span className="text-sm font-bold">Live Demo</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(p => 
    activeFilter === "All" ? true : p.tags.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div>
            <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Featured Work</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Innovation in <span className="text-gradient">Every Pixel.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 p-1.5 glass rounded-2xl border border-white/5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeFilter === cat 
                  ? "bg-primary text-white shadow-lg shadow-primary/30" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
