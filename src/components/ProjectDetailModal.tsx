import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  // Lock body scroll and handle Escape key press when modal is visible
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

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Solid High-Contrast Dark Overlay Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 cursor-pointer z-0"
        />

        {/* High-Contrast Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-3xl bg-[#090b10] border border-blue-500/40 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[85vh] sm:max-h-[88vh]"
        >
          {/* Header Image Banner with Gradient Fallback */}
          <div className="relative h-48 sm:h-60 w-full overflow-hidden shrink-0 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover relative z-0"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-[#090b10]/50 to-transparent z-10" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/80 border border-white/20 text-slate-200 hover:text-white hover:bg-black transition-all cursor-pointer z-30 shadow-xl hover:scale-110"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category & Metrics Badges */}
            <div className="absolute bottom-4 left-6 flex flex-wrap items-center gap-2 pr-4 z-20">
              <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-mono font-bold border border-blue-400/40 shadow-lg">
                {project.category}
              </span>
              {project.metrics && (
                <span className="px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-mono font-bold border border-purple-400/40 shadow-lg">
                  ⚡ {project.metrics}
                </span>
              )}
            </div>
          </div>

          {/* Modal Content Scrollable Area */}
          <div
            data-lenis-prevent="true"
            data-lenis-prevent-wheel="true"
            data-lenis-prevent-touch="true"
            className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 modal-scroll overscroll-contain bg-[#090b10] text-slate-100"
          >
            {/* Title & Subtitle */}
            <div className="space-y-1.5">
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                {project.title}
              </h2>
              {project.subtitle && (
                <p className="text-xs sm:text-sm font-semibold text-purple-400 font-mono flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-amber-400" />
                  <span>{project.subtitle}</span>
                </p>
              )}
            </div>

            {/* Long Description */}
            <div className="space-y-2.5 bg-white/[0.02] p-4 rounded-2xl border border-white/10">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" /> System Architecture & Overview
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Features List */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Core Capabilities & Innovations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 shadow-sm"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-normal">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" /> Tech Stack & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-200 font-medium"
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
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white flex items-center gap-2 transition-all cursor-pointer shadow-md"
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
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-xs font-semibold text-white flex items-center gap-2 shadow-lg shadow-blue-500/25 hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 font-semibold"
              >
                Close Window
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};


