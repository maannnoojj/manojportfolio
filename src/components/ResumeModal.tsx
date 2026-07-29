import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Copy, CheckCircle2, FileText, Download, Loader2, Phone, Mail, Linkedin } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { personalInfo, educationList, experiences, projectsList, certifications } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  // Lock body scroll and attach Esc key handler when open
  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);
    try {
      const sourceEl = document.getElementById('ats-resume-doc');
      if (!sourceEl) {
        window.print();
        setIsGeneratingPdf(false);
        return;
      }

      // Create temporary offscreen container to avoid modal scroll clipping
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '0';
      tempContainer.style.width = '800px';
      tempContainer.style.backgroundColor = '#ffffff';
      tempContainer.style.color = '#000000';
      tempContainer.style.padding = '32px';
      tempContainer.style.fontFamily = 'Arial, sans-serif';
      tempContainer.style.boxSizing = 'border-box';

      // Copy ATS document HTML structure
      tempContainer.innerHTML = sourceEl.innerHTML;

      // Ensure crisp high contrast print text colors in cloned node
      const allNodes = tempContainer.querySelectorAll('*');
      allNodes.forEach((node) => {
        const el = node as HTMLElement;
        el.style.color = '#000000';
        if (el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3') {
          el.style.color = '#1e3a8a'; // Deep indigo blue for major headers
        } else if (el.classList.contains('text-blue-400') || el.classList.contains('text-purple-400')) {
          el.style.color = '#2563eb';
        } else if (el.classList.contains('text-emerald-400')) {
          el.style.color = '#059669';
        } else if (el.classList.contains('text-slate-400') || el.classList.contains('text-slate-300')) {
          el.style.color = '#374151';
        }

        if (el.classList.contains('border-white/10') || el.classList.contains('border-blue-500/20')) {
          el.style.borderColor = '#d1d5db';
        }
      });

      document.body.appendChild(tempContainer);

      const canvas = await html2canvas(tempContainer, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: 800,
        windowWidth: 800
      });

      document.body.removeChild(tempContainer);

      const imgData = canvas.toDataURL('image/jpeg', 0.98);
      const pdf = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const margin = 10;
      const printWidth = pdfWidth - margin * 2;
      const printHeight = (canvas.height * printWidth) / canvas.width;

      let heightLeft = printHeight;
      let position = margin;

      pdf.addImage(imgData, 'JPEG', margin, position, printWidth, printHeight);
      heightLeft -= (pdfHeight - margin * 2);

      while (heightLeft > 0) {
        position = heightLeft - printHeight + margin;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', margin, position, printWidth, printHeight);
        heightLeft -= (pdfHeight - margin * 2);
      }

      pdf.save('Manoj_MS_Resume.pdf');
    } catch (err) {
      console.error('PDF export failed, falling back to browser print:', err);
      window.print();
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handleCopyText = () => {
    const resumePlainText = `
MANOJ M S
${personalInfo.phone} | ${personalInfo.email} | ${personalInfo.linkedin} | ${personalInfo.github}

PROFESSIONAL SUMMARY
${personalInfo.bio}

EDUCATION
${educationList.map((e) => `${e.degree} | ${e.institution} (${e.period}) - ${e.grade}`).join('\n')}

EXPERIENCE
${experiences.map((e) => `${e.role} - ${e.company} (${e.period})\n${e.responsibilities.map((r) => `• ${r}`).join('\n')}`).join('\n\n')}

PROJECTS
${projectsList.map((p) => `• ${p.title}: ${p.description} [Tech: ${p.tags.join(', ')}]`).join('\n')}

CERTIFICATIONS & HACKATHONS
${certifications.map((c) => `• ${c.title} - ${c.issuer}`).join('\n')}

SKILLS
Programming Languages: Java, Python, C, C++
Web Development: HTML, CSS, JavaScript, React, Tailwind CSS
AI & ML: Machine Learning, Deep Learning, NLP, OCR, OpenAI API, Google Gemini API
Cybersecurity: Network Security, Linux, OWASP Basics, TryHackMe
Databases: MySQL, SQLite, Supabase
Tools: Git, GitHub, VS Code, Vercel, Netlify, Figma

LANGUAGES
${personalInfo.languages.map((l) => `${l.name} (${l.level})`).join(' | ')}
    `.trim();

    navigator.clipboard.writeText(resumePlainText);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-4xl bg-[#0f0f12] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[88vh] sm:max-h-[92vh]"
        >
          {/* Modal Header Toolbar */}
          <div className="p-4 sm:p-6 bg-[#09090b] border-b border-white/10 flex flex-wrap items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-base">Curriculum Vitae — Manoj M S</h3>
                <p className="text-xs text-slate-400 font-mono">ATS-Optimized Master Resume • 2026</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyText}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                {copiedText ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-purple-400" />}
                <span className="hidden sm:inline">{copiedText ? 'Copied' : 'Copy Text'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
                title="Print Document"
              >
                <Printer className="w-4 h-4" />
              </button>

              <button
                onClick={handleDownloadPdf}
                disabled={isGeneratingPdf}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-xs font-semibold text-white flex items-center gap-1.5 shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
                title="Download ATS Resume as PDF file"
              >
                {isGeneratingPdf ? (
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
                <span>{isGeneratingPdf ? 'Downloading PDF...' : 'Download Resume (PDF)'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document View */}
          <div
            id="ats-resume-doc"
            data-lenis-prevent
            className="printable-resume p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0b0b0d] text-slate-200 font-sans text-sm selection:bg-blue-500/20 flex-1 overscroll-contain"
          >
            
            {/* ATS Document Header */}
            <div className="text-center space-y-2 pb-6 border-b border-white/10">
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-wide">
                MANOJ M S
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-blue-400" /> {personalInfo.phone}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-purple-400" /> {personalInfo.email}</span>
                <span>•</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center gap-1">
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 border-b border-blue-500/20 pb-1">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 border-b border-blue-500/20 pb-1">
                EDUCATION
              </h2>
              <div className="space-y-2.5">
                {educationList.map((edu, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs gap-1">
                    <div>
                      <span className="font-bold text-white text-sm">{edu.degree}</span>
                      <span className="text-slate-400"> — {edu.institution}</span>
                    </div>
                    <div className="font-mono text-right shrink-0">
                      <span className="text-emerald-400 font-semibold">{edu.grade}</span>
                      <span className="text-slate-500 ml-2">({edu.period})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 border-b border-blue-500/20 pb-1">
                EXPERIENCE
              </h2>
              {experiences.map((exp, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs gap-1">
                    <div>
                      <span className="font-bold text-white text-sm">{exp.company}</span>
                      <span className="text-purple-400 font-semibold"> | {exp.role}</span>
                    </div>
                    <span className="font-mono text-slate-400 shrink-0">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pl-1">
                    {exp.responsibilities.map((r, idx) => (
                      <li key={idx} className="leading-relaxed">{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Featured Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 border-b border-blue-500/20 pb-1">
                PROJECTS
              </h2>
              <div className="space-y-2.5">
                {projectsList.map((proj, i) => (
                  <div key={i} className="text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">{proj.title} <span className="font-normal text-slate-400">({proj.subtitle})</span></span>
                      <span className="font-mono text-[10px] text-purple-400">{proj.category}</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{proj.description}</p>
                    <p className="font-mono text-[11px] text-slate-400">
                      <strong className="text-slate-300">Stack:</strong> {proj.tags.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Hackathons */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 border-b border-blue-500/20 pb-1">
                CERTIFICATIONS & HACKATHONS
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                {certifications.map((c, i) => (
                  <li key={i}>
                    <strong className="text-white">{c.title}</strong> — {c.issuer}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 border-b border-blue-500/20 pb-1">
                TECHNICAL SKILLS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <p><strong className="text-slate-300">Programming:</strong> Java, Python, C, C++</p>
                <p><strong className="text-slate-300">Web Stack:</strong> HTML, CSS, JavaScript, React, Tailwind CSS</p>
                <p><strong className="text-slate-300">AI & ML:</strong> Machine Learning, Deep Learning, NLP, OCR, OpenAI API, Gemini API</p>
                <p><strong className="text-slate-300">Cybersecurity:</strong> Network Security, Linux, OWASP Basics, TryHackMe</p>
                <p><strong className="text-slate-300">Databases:</strong> MySQL, SQLite, Supabase</p>
                <p><strong className="text-slate-300">Tools:</strong> Git, GitHub, VS Code, Vercel, Netlify, Figma</p>
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-1 pt-2 border-t border-white/10 text-xs">
              <span className="font-mono text-slate-400 uppercase font-bold">Languages: </span>
              <span className="text-slate-300">Tamil (Native), Kannada (Fluent), English (Intermediate), Hindi (Intermediate)</span>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
