import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  // Prevent body scroll when modal is active and attach Esc key listener
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer z-0"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-3xl bg-[#0e0e0e] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[85vh] sm:max-h-[90vh]"
        >
          {/* Header Image Banner (Fixed at top) */}
          <div className="relative h-48 sm:h-64 w-full overflow-hidden shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/40 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 border border-white/20 text-slate-300 hover:text-white hover:bg-black/90 transition-all cursor-pointer z-20 shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category Pill */}
            <div className="absolute bottom-4 left-6 flex flex-wrap items-center gap-2 pr-4 z-10">
              <span className="px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-xs font-mono font-semibold border border-blue-400/30">
                {project.category}
              </span>
              {project.metrics && (
                <span className="px-3 py-1 rounded-full bg-purple-600/90 backdrop-blur-md text-white text-xs font-mono border border-purple-400/30">
                  {project.metrics}
                </span>
              )}
            </div>
          </div>

          {/* Modal Content Scrollable Area */}
          <div
            data-lenis-prevent
            className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 overscroll-contain"
          >
            {/* Title & Subtitle */}
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                {project.title}
              </h2>
              {project.subtitle && (
                <p className="text-sm font-semibold text-purple-400 font-mono">
                  {project.subtitle}
                </p>
              )}
            </div>

            {/* Long Description */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" /> System Architecture & Purpose
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Features List */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Key Features & Innovations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" /> Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons Footer */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-semibold text-white flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repository</span>
                  </a>
                )}
                {project.demoUrl && project.demoUrl !== '#' && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-xs font-semibold text-white flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Application</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
