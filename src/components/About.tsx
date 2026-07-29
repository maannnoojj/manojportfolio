import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, User, Languages, CheckCircle, ShieldAlert, Cpu, Sparkles } from 'lucide-react';
import { personalInfo, educationList } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    "Computer Science Engineering Student (2024 - 2028)",
    "CGPA: 8.0 / 10 (80% Academic Performance)",
    "Solid Foundation in Java, C, Python, Data Structures & Algorithms",
    "Passionate AI & Machine Learning Enthusiast",
    "Cybersecurity Aspirant (Network Security & OWASP Basics)",
    "Driven by Solving Real-World Problems through Code",
    "Collaborative Team Player & Rapid Technology Learner"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070707]">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400"
          >
            <User className="w-3.5 h-3.5" />
            <span>DISCOVER MY BACKGROUND</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Manoj M S</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl"
          >
            Engineered with a passion for high-impact software, intelligent neural solutions, and robust cybersecurity architectures.
          </motion.p>
        </div>

        {/* Large Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photo / Styled Portrait Frame + Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Glowing Photo Frame */}
            <div className="relative group mx-auto max-w-sm">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative rounded-2xl bg-[#0e0e0e] border border-white/10 p-4 space-y-4 shadow-2xl">
                
                {/* Stylized Developer Avatar Visual */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-900 flex flex-col justify-between p-6 bg-gradient-to-br from-slate-900 via-[#0b0b14] to-slate-950 border border-white/5">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      CGPA {personalInfo.cgpa}
                    </span>
                    <Sparkles className="w-5 h-5 text-purple-400" />
                  </div>

                  <div className="my-auto text-center space-y-3 py-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-blue-600 via-purple-600 to-indigo-600 p-1 shadow-xl">
                      <div className="w-full h-full rounded-full bg-[#0b0b0b] flex items-center justify-center font-display text-3xl font-bold text-white tracking-wider">
                        MS
                      </div>
                    </div>
                    <h3 className="text-xl font-display font-bold text-white">Manoj M S</h3>
                    <p className="text-xs text-slate-400 font-mono">B.E. Computer Science Engineering</p>
                  </div>

                  <div className="pt-3 border-t border-white/10 space-y-1.5 text-[11px] font-mono">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="truncate pr-1 font-semibold">SNS College of Engineering</span>
                      <span className="text-blue-400 shrink-0 font-semibold">2024 - 2028</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="truncate pr-1">JNV Mysore</span>
                      <span className="text-emerald-400 shrink-0">2020 - 2024</span>
                    </div>
                  </div>
                </div>

                {/* Stat Grid inside Photo Column */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {personalInfo.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center"
                    >
                      <span className="text-xl font-display font-extrabold text-blue-400">
                        {stat.value}
                      </span>
                      <span className="text-[11px] text-slate-400">{stat.label}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Languages Badge Grid */}
            <div className="p-5 rounded-2xl glass-card space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 uppercase tracking-wider">
                <Languages className="w-4 h-4 text-purple-400" />
                <span>Languages Spoken</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3 text-xs"
                  >
                    <span className="font-semibold text-white">{lang.name}</span>
                    <span className="text-[10px] text-blue-400 font-mono">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Narrative & Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <h3 className="text-2xl font-display font-bold text-white">
                Passionate about engineering smart, scalable & secure digital solutions.
              </h3>
              <p>
                {personalInfo.aboutDetailed}
              </p>
              <p className="text-slate-400 text-sm">
                With a strong foundational grasp in Java, C, and Python, I continuously push the boundaries of modern web development and AI pipelines. From OCR-driven handwritten note processing to agricultural multilingual assistants and sensor-based telemetry systems, I build software that translates raw complexity into seamless user experiences.
              </p>
            </div>

            {/* Bullet Points List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Education Sub-Section */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <h4 className="text-lg font-display font-bold text-white">Education History</h4>
              </div>

              <div className="space-y-3">
                {educationList.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl glass-card hover:border-blue-500/30 transition-all space-y-1.5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h5 className="font-bold text-white text-sm">{edu.degree}</h5>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {edu.period}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                      <span>{edu.institution}</span>
                      <span className="font-semibold text-emerald-400">{edu.grade}</span>
                    </div>
                    {edu.details && (
                      <p className="text-xs text-slate-400 pt-1 border-t border-white/5 mt-2">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
