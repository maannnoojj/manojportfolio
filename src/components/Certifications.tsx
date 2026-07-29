import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, CheckCircle, ExternalLink, Sparkles, Trophy, BookOpen, X } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { Certification } from '../types';

export const Certifications: React.FC = () => {
  const [activeCertModal, setActiveCertModal] = useState<Certification | null>(null);

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
            className="text-slate-400 text-sm sm:text-base max-w-2xl"
          >
            Validated technical competency across Microsoft Azure AI, Databricks Digital Edge 401, competitive hackathons, and multi-course computer science certifications.
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
              whileHover={{ y: -5 }}
              onClick={() => setActiveCertModal(cert)}
              className="glass-card p-6 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
            >
              {/* Subtle Corner Accent Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full blur-xl group-hover:bg-teal-500/20 transition-all duration-500" />

              <div className="space-y-4">
                {/* Header Category Pill & Icon */}
                <div className="flex items-center justify-between gap-2">
                  <div className="p-2.5 rounded-2xl bg-white/[0.03] border border-white/10">
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
                  <p className="text-xs text-slate-400 font-mono">
                    {cert.issuer}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
              </div>

              {/* Action Link Footer */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400 font-mono font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified Credential
                </span>
                <span className="group-hover:translate-x-1 transition-transform">Inspect →</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Certification Detail Popup Modal */}
      <AnimatePresence>
        {activeCertModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCertModal(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-[#0e0e0e] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-6"
            >
              <button
                onClick={() => setActiveCertModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  {getCategoryIcon(activeCertModal.category)}
                </div>
                <div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-gradient-to-r border ${activeCertModal.badgeColor}`}>
                    {activeCertModal.category}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white mt-1">
                    {activeCertModal.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">{activeCertModal.issuer}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <h4 className="text-xs font-mono font-semibold uppercase text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Certificate Overview
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeCertModal.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-white/10">
                <span>Candidate: <strong className="text-white">Manoj M S</strong></span>
                <span className="text-emerald-400 font-semibold">B.E. Computer Science</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
