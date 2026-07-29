import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Signature } from './Signature';

interface FooterProps {
  onReplaySplash?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplaySplash }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10 bg-[#040404] text-slate-400 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-display font-bold text-white text-xs">
              M
            </div>
            <div>
              <p className="font-display font-bold text-white text-sm">Manoj M S</p>
              <p className="text-[11px] text-slate-500 font-mono">Computer Science & AI Developer</p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Email Manoj"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-blue-600/80 hover:bg-blue-600 text-white transition-colors cursor-pointer shadow-lg shadow-blue-500/20"
              aria-label="Back to Top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Animated Thank You Signature at the end of the portfolio */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="my-10 pt-10 border-t border-white/10 flex flex-col items-center justify-center text-center space-y-4"
        >
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-semibold">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300" />
            <span>Thank You For Visiting!</span>
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300" />
          </div>

          <div 
            onClick={onReplaySplash}
            className="py-2 flex flex-col items-center justify-center cursor-pointer group transition-all transform hover:scale-105"
            title="Click to replay opening splash signature animation"
          >
            <Signature size="lg" showPenTip={true} />
            <span className="text-[11px] font-mono text-slate-400 group-hover:text-blue-400 transition-colors pt-2 flex items-center gap-1.5 bg-white/5 group-hover:bg-blue-500/10 px-3 py-1 rounded-full border border-white/10 group-hover:border-blue-500/30">
              <span>Exit Portfolio & Replay Splash</span>
              <span className="text-sm">↺</span>
            </span>
          </div>

          <p className="text-xs text-slate-400 font-mono italic max-w-md">
            "Building intelligent, secure, and intuitive digital experiences for tomorrow."
          </p>
        </motion.div>

        {/* Bottom Copyright */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
          <p>© {currentYear} Manoj M S. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for AI & Security Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};
