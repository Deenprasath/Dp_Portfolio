import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, GitBranch, Star, Activity } from 'lucide-react';

const GitHub = () => {
  const stats = [
    {
      url: "https://github-readme-stats.vercel.app/api?username=Deenprasath&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=8B5CF6&icon_color=06B6D4&text_color=ffffff&border_radius=12",
      title: "General Stats"
    },
    {
      url: "https://github-readme-stats.vercel.app/api/top-langs/?username=Deenprasath&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=8B5CF6&text_color=ffffff&border_radius=12",
      title: "Top Languages"
    }
  ];

  const streakUrl = "https://streak-stats.demolab.com?user=Deenprasath&theme=tokyonight-duo&hide_border=true&background=0D1117&ring=8B5CF6&fire=EC4899&currStreakLabel=8B5CF6&border_radius=12";

  return (
    <section id="github" className="py-24 bg-background/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 text-primary mb-4">
              <Github size={32} />
              <h4 className="font-bold tracking-widest uppercase text-sm">Open Source Contributions</h4>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              My Code <span className="text-gradient">Footprint.</span>
            </h2>
          </div>
          <motion.a
            href="https://github.com/Deenprasath"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 glass rounded-xl flex items-center gap-2 text-white border border-white/10 hover:border-primary/50 transition-all font-bold"
          >
            Visit Profile <ExternalLink size={18} />
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card p-2 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center min-h-[200px]"
            >
              <img 
                src={stat.url} 
                alt={stat.title} 
                className="w-full h-auto object-contain pointer-events-none"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-2 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center min-h-[150px]"
        >
          <img 
            src={streakUrl} 
            alt="GitHub Streak" 
            className="w-full h-auto object-contain pointer-events-none"
            loading="lazy"
          />
        </motion.div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-500 font-mono text-sm uppercase tracking-widest">
            <div className="flex items-center gap-2"><GitBranch size={16} /> 50+ Repositories</div>
            <div className="flex items-center gap-2"><Star size={16} /> 100+ Stars</div>
            <div className="flex items-center gap-2"><Activity size={16} /> Consistent Coder</div>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
