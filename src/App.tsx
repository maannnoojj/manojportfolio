import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { IntroSplash } from './components/IntroSplash';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [splashKey, setSplashKey] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const handleReplaySplash = () => {
    setIsExiting(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      setSplashKey((prev) => prev + 1);
      setIsExiting(false);
    }, 550);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden relative">
        {/* Signature Intro Splash Screen */}
        <IntroSplash key={splashKey} />

        {/* Portfolio Main Content Container with Exit Animation */}
        <motion.div
          animate={{
            opacity: isExiting ? 0 : 1,
            scale: isExiting ? 0.96 : 1,
            filter: isExiting ? 'blur(8px)' : 'blur(0px)'
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Fixed Navigation Bar */}
          <Navbar onOpenResume={() => setIsResumeOpen(true)} />

          {/* Hero Section */}
          <Hero onOpenResume={() => setIsResumeOpen(true)} />

          {/* About Section */}
          <About />

          {/* Skills Section */}
          <Skills />

          {/* Work Experience Section */}
          <Experience />

          {/* Projects Showcase Section */}
          <Projects />

          {/* Certifications & Hackathons Section */}
          <Certifications />

          {/* Contact Form Section */}
          <Contact />

          {/* Footer with Thank You Signature replay trigger */}
          <Footer onReplaySplash={handleReplaySplash} />
        </motion.div>

        {/* Resume Preview Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </SmoothScroll>
  );
}
