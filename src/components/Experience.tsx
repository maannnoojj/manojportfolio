import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Building2, Code2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#070707]">
      {/* Ambient Light Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER MILESTONES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Work <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-xl"
          >
            Hands-on professional engineering experience, building production AI/ML workflows and intelligent automation systems.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-12">
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#050505] border-2 border-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/40 group-hover:scale-125 transition-transform">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 space-y-5">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {exp.type}
                      </span>
                      <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" /> {exp.location}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white tracking-tight">{exp.role}</h3>
                    <p className="text-sm font-semibold text-purple-400 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4" /> {exp.company}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300 self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities Checklist */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Key Deliverables & Achievements
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used Pills */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1 mr-2">
                    <Code2 className="w-3 h-3" /> Tech Stack:
                  </span>
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300 hover:border-blue-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
