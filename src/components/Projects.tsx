import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Sparkles, FolderCode, ArrowRight, Eye } from 'lucide-react';
import { projectsList } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400"
          >
            <FolderCode className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Featured <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl"
          >
            Intelligent chatbots, OCR processing applications, productivity assistants, and hardware-software integration solutions built for real-world impact.
          </motion.p>
        </div>

        {/* Projects Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col group relative"
            >
              {/* Project Card Image Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/30 to-transparent" />
                
                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono border border-white/10">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-full bg-blue-600/80 backdrop-blur-md text-white text-[11px] font-mono border border-blue-400/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-blue-200" /> Featured
                    </span>
                  )}
                </div>

                {/* Quick View Trigger on Hover */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-blue-600/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl cursor-pointer hover:scale-110"
                  aria-label="Quick inspect project"
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>

              {/* Project Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-2">
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-xl font-display font-bold text-white group-hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-xs font-mono text-purple-400 font-semibold">
                      {project.subtitle}
                    </p>
                  )}
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed pt-1">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-lg bg-white/[0.03] border border-white/10 text-[11px] font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 rounded-lg bg-white/[0.03] text-[10px] font-mono text-slate-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Links Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-xs font-mono"
                        title="View source code"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.demoUrl && project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 text-xs font-mono"
                        title="Launch live application"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 group/btn cursor-pointer"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Details Popup Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
