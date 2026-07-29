import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, Sparkles, CheckCircle2, Copy, MapPin, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    // Construct mailto parameters for iammanojms2006@gmail.com
    const targetEmail = 'iammanojms2006@gmail.com';
    const emailSubject = encodeURIComponent(formData.subject.trim() ? formData.subject : `Portfolio Message from ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Hi Manoj,\n\nYou received a new message from your portfolio website:\n\n` +
      `Name: ${formData.name}\n` +
      `Sender Email: ${formData.email}\n` +
      `Subject: ${formData.subject || 'N/A'}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `---\nSent via Manoj M S Portfolio`
    );

    const mailtoUrl = `mailto:${targetEmail}?subject=${emailSubject}&body=${emailBody}`;

    setTimeout(() => {
      setStatus('success');
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3B82F6', '#8B5CF6', '#10B981'],
      });

      // Launch email client
      window.location.href = mailtoUrl;

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

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
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Get In <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-xl"
          >
            Whether you have a project in mind, an AIML opportunity, or just want to discuss cybersecurity & technology—reach out!
          </motion.p>
        </div>

        {/* Modern Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Contact Details & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-white">
                Let's discuss how we can build something incredible together.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                I am actively seeking software engineering internships, AI/ML research collaborations, and open-source opportunities.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              
              {/* Email Card with Copy Toast */}
              <div className="p-4 rounded-2xl glass-card border border-white/10 flex items-center justify-between group hover:border-blue-500/40 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-400 uppercase">Email Address</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl glass-card border border-white/10 flex items-center gap-3">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase">Phone Number</p>
                  <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold text-white">
                    +91 {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl glass-card border border-white/10 flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase">Location & University</p>
                  <p className="text-sm font-semibold text-white">Jawahar Navodaya Vidyalaya • India</p>
                </div>
              </div>

            </div>

            {/* Social Links Row */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Follow & Connect
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3.5 rounded-2xl glass-card border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-white flex items-center justify-center gap-2 text-xs font-semibold transition-all group"
                >
                  <Github className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3.5 rounded-2xl glass-card border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-white flex items-center justify-center gap-2 text-xs font-semibold transition-all group"
                >
                  <Linkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column - Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative">
              
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Send a Direct Message
              </h3>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Message prepared! Opening your mail client to send directly to iammanojms2006@gmail.com.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="e.g. AIML Internship Inquiry / Project Request"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your request, inquiry, or project specs..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 transition-colors resize-none"
                  />
                </div>

                {/* Large Animated Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 shadow-xl shadow-blue-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2.5 disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 text-blue-200" />
                    </>
                  )}
                </button>
              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
