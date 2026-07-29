import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Award, CheckCircle, ExternalLink, Sparkles, Trophy, BookOpen, X, ShieldCheck, CheckCircle2, Eye } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { Certification } from '../types';

export const Certifications: React.FC = () => {
  const [activeCertModal, setActiveCertModal] = useState<Certification | null>(null);

  useEffect(() => {
    if (activeCertModal) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setActiveCertModal(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeCertModal]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Certification':
        return <Award className="w-5 h-5 text-amber-400" />;
      case 'Hackathon':
        return <Trophy className="w-5 h-5 text-emerald-400" />;
      case 'Coursework':
        return <BookOpen className="w-5 h-5 text-purple-400" />;
      default:
        return <Award className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#070707]">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400"
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>ACCOLADES & CREDENTIALS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Certifications & <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">Hackathons</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base max-w-2xl"
          >
            Validated technical competency across Microsoft Azure AI, Databricks Digital Edge 401, competitive hackathons, and multi-course computer science tracks. Click any item to inspect full credentials.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveCertModal(cert)}
              className="glass-card p-6 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between cursor-pointer group relative overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              {/* Corner Accent Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full blur-xl group-hover:bg-teal-500/20 transition-all duration-500" />

              <div className="space-y-4">
                {/* Header Category Pill & Icon */}
                <div className="flex items-center justify-between gap-2">
                  <div className="p-2.5 rounded-2xl bg-white/[0.04] border border-white/10">
                    {getCategoryIcon(cert.category)}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-gradient-to-r border ${cert.badgeColor}`}>
                    {cert.category}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div className="space-y-1">
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>{cert.issuer}</span>
                    {cert.date && <span className="text-slate-500">{cert.date}</span>}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 font-sans">
                  {cert.description}
                </p>

                {/* Skills tags preview */}
                {cert.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.slice(0, 3).map((sk, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                        {sk}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-slate-400">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Action Link Footer */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400 font-mono font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified Credential
                </span>
                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 border border-emerald-500/30">
                  <Eye className="w-3.5 h-3.5" /> Inspect Details
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Certification Detail Inspection Modal via React Portal */}
      {activeCertModal && createPortal(
        <AnimatePresence>
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveCertModal(null)}
              className="fixed inset-0 bg-black/90 cursor-pointer z-0"
            />

            {/* Modal Window Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-[#090b10] border border-emerald-500/40 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[85vh] sm:max-h-[88vh]"
            >
              {/* Header Image Banner with Gradient Fallback */}
              <div className="relative h-44 sm:h-56 w-full overflow-hidden shrink-0 bg-gradient-to-r from-slate-950 via-emerald-950 to-slate-950">
                {activeCertModal.image && (
                  <img
                    src={activeCertModal.image}
                    alt={activeCertModal.title}
                    className="w-full h-full object-cover relative z-0 opacity-80"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-[#090b10]/60 to-transparent z-10" />
                
                {/* Close Button */}
                <button
                  onClick={() => setActiveCertModal(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/80 border border-white/20 text-slate-200 hover:text-white hover:bg-black transition-all cursor-pointer z-30 shadow-xl hover:scale-110"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Category & Verified Badge */}
                <div className="absolute bottom-4 left-6 flex flex-wrap items-center gap-2 pr-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold bg-gradient-to-r border shadow-lg ${activeCertModal.badgeColor}`}>
                    {activeCertModal.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-mono font-bold border border-emerald-400/40 shadow-lg flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" /> Verified Achievement
                  </span>
                </div>
              </div>

              {/* Modal Content Scrollable Area */}
              <div
                data-lenis-prevent="true"
                data-lenis-prevent-wheel="true"
                data-lenis-prevent-touch="true"
                className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 modal-scroll overscroll-contain bg-[#090b10] text-slate-100"
              >
                {/* Title & Issuer */}
                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    {activeCertModal.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-emerald-400 font-semibold">
                    <span>Issued by {activeCertModal.issuer}</span>
                    {activeCertModal.date && <span className="text-slate-400">{activeCertModal.date}</span>}
                  </div>
                  {activeCertModal.credentialId && (
                    <p className="text-[11px] font-mono text-slate-400 pt-1">
                      Credential ID: <span className="text-slate-300 font-semibold">{activeCertModal.credentialId}</span>
                    </p>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-2 bg-white/[0.02] p-4 rounded-2xl border border-white/10">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" /> Credential Scope & Impact
                  </h4>
                  <p className="text-sm text-slate-200 leading-relaxed font-sans">
                    {activeCertModal.description}
                  </p>
                </div>

                {/* Key Highlights Checklist */}
                {activeCertModal.keyHighlights && activeCertModal.keyHighlights.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-teal-400" /> Core Competencies & Deliverables
                    </h4>
                    <div className="space-y-2">
                      {activeCertModal.keyHighlights.map((hl, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-normal">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills Tags */}
                {activeCertModal.skills && activeCertModal.skills.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-amber-400" /> Mastered Skills & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeCertModal.skills.map((sk, idx) => (
                        <span key={idx} className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 font-medium">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer Action */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs font-mono text-slate-400">
                    Candidate: <strong className="text-white">Manoj M S</strong>
                  </div>
                  <button
                    onClick={() => setActiveCertModal(null)}
                    className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors cursor-pointer font-semibold"
                  >
                    Close Inspection
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

