import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Globe,
  BrainCircuit,
  ShieldCheck,
  Database,
  Wrench,
  Sparkles,
  CheckCircle2,
  Layers,
  Search
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Programming Languages':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Web Development':
        return <Globe className="w-5 h-5 text-purple-400" />;
      case 'AI & Machine Learning':
        return <BrainCircuit className="w-5 h-5 text-emerald-400" />;
      case 'Cybersecurity':
        return <ShieldCheck className="w-5 h-5 text-red-400" />;
      case 'Databases':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'Tools & Platforms':
        return <Wrench className="w-5 h-5 text-cyan-400" />;
      default:
        return <Layers className="w-5 h-5 text-slate-400" />;
    }
  };

  const filteredCategories = skillCategories.map((cat) => {
    const matchingSkills = cat.skills.filter(
      (s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.description && s.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (matchingSkills.length === 0) return null;

    return {
      ...cat,
      skills: matchingSkills,
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Skills & <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Tech Stack</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl"
          >
            A curated inventory of programming frameworks, AI integration libraries, cybersecurity tools, and database technologies.
          </motion.p>
        </div>

        {/* Quick Search Bar */}
        <div className="flex items-center justify-end mb-10">
          <div className="relative w-full max-w-xs">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search skills (e.g., Python, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0b0b0b] border border-white/10 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors shadow-lg"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-10">
          {filteredCategories.map((categoryObj, catIdx) => {
            if (!categoryObj) return null;
            return (
              <motion.div
                key={categoryObj.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                className="space-y-4"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/10">
                    {getCategoryIcon(categoryObj.category)}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white tracking-tight">
                    {categoryObj.category}
                  </h3>
                  <span className="text-xs font-mono text-slate-500 ml-auto">
                    {categoryObj.skills.length} skills
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryObj.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -4, scale: 1.01 }}
                      className="glass-card p-5 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 relative group overflow-hidden"
                    >
                      {/* Hover Subtle Glow Accent */}
                      <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all duration-500" />

                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs font-mono">
                            {skill.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-white text-sm tracking-tight">{skill.name}</h4>
                            {skill.description && (
                              <p className="text-[11px] text-slate-400 line-clamp-1">{skill.description}</p>
                            )}
                          </div>
                        </div>
                        <span className="text-xs font-mono font-semibold text-blue-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden mt-3 border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + skillIdx * 0.05 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
