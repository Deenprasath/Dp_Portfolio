import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Laptop, Settings, Database, Terminal, Cpu, Braces
} from 'lucide-react';
import { 
  SiReact, SiJavascript, SiHtml5, SiSpringboot, 
  SiMysql, SiMongodb, SiFirebase, SiGit, SiGithub 
} from 'react-icons/si';
import { FaJava, FaMicrochip, FaRobot, FaCss3Alt } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Languages",
    icon: <Terminal className="text-blue-400" />,
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <SiJavascript /> }
    ]
  },
  {
    title: "Frontend",
    icon: <Code className="text-primary" />,
    skills: [
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "React.js", icon: <SiReact /> }
    ]
  },
  {
    title: "Backend",
    icon: <Settings className="text-green-400" />,
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "REST APIs", icon: <Braces /> }
    ]
  },
  {
    title: "Databases",
    icon: <Database className="text-yellow-400" />,
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> }
    ]
  },
  {
    title: "Tools & DevOps",
    icon: <Laptop className="text-secondary" />,
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> }
    ]
  },
  {
    title: "AI & Others",
    icon: <Cpu className="text-accent" />,
    skills: [
      { name: "Prompt Engineering", icon: <FaRobot /> },
      { name: "IoT", icon: <FaMicrochip /> },
      { name: "WebSockets", icon: <Terminal /> }
    ]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Technical <span className="text-gradient">Arsenal</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-3xl group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-primary/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIndex) => (
                  <motion.div
                    key={sIndex}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: 'rgba(139, 92, 246, 0.3)',
                      borderColor: 'rgba(139, 92, 246, 0.6)'
                    }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-gray-200 text-sm font-medium transition-all"
                  >
                    <span className="text-primary">{skill.icon}</span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
