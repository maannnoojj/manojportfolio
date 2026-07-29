import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, FileText, Send, Sparkles, Terminal, Code2, Shield, Brain, Cpu, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % personalInfo.subtitles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-160px)]">
          
          {/* Left Column - Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Availability / Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-card border border-blue-500/20 text-xs font-mono text-blue-300 shadow-inner"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for AIML & Software Projects • 2026</span>
            </motion.div>

            {/* Main Greeting & Signature */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-3">
                <p className="text-slate-400 font-mono text-sm tracking-wider uppercase">Hi, I'm</p>
                <div className="h-px bg-white/10 flex-1 max-w-[100px]" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white leading-tight">
                  Manoj M S
                </h1>
              </div>
            </motion.div>

            {/* Dynamic Animated Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap items-center gap-x-3 gap-y-1 min-h-[3.25rem] py-1"
            >
              <span className="text-slate-400 text-lg sm:text-2xl font-mono font-medium shrink-0">I am a</span>
              <div className="relative overflow-hidden min-h-[2.5rem] flex items-center min-w-[260px] sm:min-w-[440px] md:min-w-[500px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={subtitleIndex}
                    initial={{ y: 24, opacity: 0, filter: 'blur(6px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -24, opacity: 0, filter: 'blur(6px)' }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="text-xl sm:text-3xl md:text-3xl font-display font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent whitespace-normal leading-snug"
                  >
                    {personalInfo.subtitles[subtitleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Short Introduction Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2"
              >
                <span>View Projects</span>
                <Sparkles className="w-4 h-4 text-blue-200 group-hover:rotate-12 transition-transform" />
              </button>

              <button
                onClick={onOpenResume}
                className="group px-6 py-3.5 rounded-full text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-md shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="group px-6 py-3.5 rounded-full text-sm font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2"
              >
                <Send className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Quick Metrics Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full border-t border-white/10"
            >
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Developer Visualizer Card & Parallax Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Outer Decorative Ambient Frame */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-blue-500/30 via-purple-500/20 to-transparent shadow-2xl backdrop-blur-2xl">
              
              <div className="w-full h-full rounded-[22px] bg-[#0b0b0b] p-6 flex flex-col justify-between overflow-hidden relative border border-white/10 group">
                
                {/* Background Code Watermark Pattern */}
                <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Card Header - Mock Code Terminal */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-blue-400" /> manoj.ai.ts
                  </span>
                </div>

                {/* Code / Visual Interactive Centerpiece */}
                <div className="my-6 z-10 space-y-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                    <div className="text-blue-400 flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-purple-400" />
                      <span>const developer = &#123;</span>
                    </div>
                    <div className="pl-4 text-slate-300 space-y-1">
                      <p><span className="text-purple-300">name</span>: <span className="text-emerald-300">"Manoj M S"</span>,</p>
                      <p><span className="text-purple-300">degree</span>: <span className="text-emerald-300">"B.E. CSE (2024-2028)"</span>,</p>
                      <p><span className="text-purple-300">cgpa</span>: <span className="text-amber-300">8.0</span>,</p>
                      <p><span className="text-purple-300">focus</span>: [<span className="text-blue-300">"AI"</span>, <span className="text-blue-300">"ML"</span>, <span className="text-blue-300">"Cybersecurity"</span>],</p>
                      <p><span className="text-purple-300">internship</span>: <span className="text-emerald-300">"Codex Technologies"</span></p>
                    </div>
                    <div className="text-blue-400">&#125;;</div>
                  </div>

                  {/* Highlights Grid inside Visualizer */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center gap-2">
                      <Brain className="w-4 h-4 text-blue-400" />
                      <div>
                        <p className="text-[10px] text-slate-400">Core Engine</p>
                        <p className="text-xs font-semibold text-white">Gemini & OpenAI</p>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-purple-400" />
                      <div>
                        <p className="text-[10px] text-slate-400">Security</p>
                        <p className="text-xs font-semibold text-white">OWASP & Linux</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer - Floating Badges */}
                <div className="z-10 flex items-center justify-between pt-3 border-t border-white/10 text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="font-medium">10+ Projects Ready</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">CSE @ SNS College</span>
                </div>

                {/* Floating Glow Accents */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl shadow-xl shadow-blue-500/20 border border-white/20 text-white z-20 flex items-center gap-2"
                >
                  <Cpu className="w-4 h-4" />
                  <span className="text-xs font-bold font-mono">AIML Summer '26</span>
                </motion.div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 text-blue-400" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
