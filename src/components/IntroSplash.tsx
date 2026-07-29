import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Signature } from './Signature';

export const IntroSplash: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const hasPlayedRef = useRef(false);

  const playChimeSound = () => {
    // Strictly guard to ensure sound plays ONLY ONE TIME
    if (hasPlayedRef.current) return;
    hasPlayedRef.current = true;

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;

      const triggerAudioNodes = () => {
        const now = ctx.currentTime;
        
        // 1. Crystal clear lead chime (C6 - 1046.5 Hz)
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(1046.5, now);
        gain1.gain.setValueAtTime(0.15, now);
        gain1.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        osc1.start(now);
        osc1.stop(now + 1.5);

        // 2. High metallic shimmer (E6 - 1318.5 Hz)
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(1318.5, now + 0.08);
        gain2.gain.setValueAtTime(0.12, now + 0.08);
        gain2.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start(now + 0.08);
        osc2.stop(now + 1.6);

        // 3. Resonant bell chime (G6 - 1567.98 Hz)
        const osc3 = ctx.createOscillator();
        const gain3 = ctx.createGain();
        osc3.type = 'sine';
        osc3.frequency.setValueAtTime(1567.98, now + 0.16);
        gain3.gain.setValueAtTime(0.1, now + 0.16);
        gain3.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);
        osc3.connect(gain3);
        gain3.connect(ctx.destination);
        osc3.start(now + 0.16);
        osc3.stop(now + 1.8);

        // 4. Sparkle high chime (C7 - 2093 Hz)
        const osc4 = ctx.createOscillator();
        const gain4 = ctx.createGain();
        osc4.type = 'sine';
        osc4.frequency.setValueAtTime(2093, now + 0.25);
        gain4.gain.setValueAtTime(0.08, now + 0.25);
        gain4.gain.exponentialRampToValueAtTime(0.0001, now + 2.0);
        osc4.connect(gain4);
        gain4.connect(ctx.destination);
        osc4.start(now + 0.25);
        osc4.stop(now + 2.0);
      };

      if (ctx.state === 'suspended') {
        ctx.resume().then(() => {
          triggerAudioNodes();
        }).catch(() => {});
      } else {
        triggerAudioNodes();
      }
    } catch {
      // Browser autoplay fallback
    }
  };

  useEffect(() => {
    // Attempt automatic chime play
    playChimeSound();

    // Fallback listeners to unlock audio immediately on any gesture/click/hover
    const handleUnlockAudio = () => {
      playChimeSound();
    };

    window.addEventListener('pointerdown', handleUnlockAudio, { once: true });
    window.addEventListener('click', handleUnlockAudio, { once: true });
    window.addEventListener('keydown', handleUnlockAudio, { once: true });

    // Dismiss splash after 3.2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3200);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('pointerdown', handleUnlockAudio);
      window.removeEventListener('click', handleUnlockAudio);
      window.removeEventListener('keydown', handleUnlockAudio);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="intro-splash"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        onClick={() => {
          playChimeSound();
          setIsVisible(false);
        }}
        className="fixed inset-0 z-[100000] bg-[#030303] flex flex-col items-center justify-center p-6 cursor-pointer select-none"
      >
        {/* Subtle Ambient Background Glow */}
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-emerald-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

        <div className="relative z-10 flex flex-col items-center text-center space-y-5 max-w-md w-full">
          {/* Sparkle Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20 border border-white/15 text-blue-400 shadow-2xl shadow-blue-500/20"
          >
            <Sparkles className="w-9 h-9 animate-pulse" />
          </motion.div>

          {/* Signature Name: Manoj M S with Writing Animation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center space-y-1.5"
          >
            <div className="py-2 flex items-center justify-center">
              <Signature size="xl" showPenTip={true} />
            </div>

            <p className="text-xs text-slate-300 font-mono">
              Full Stack, AI Developer & Cybersecurity Student
            </p>
          </motion.div>

          {/* Smooth 3-Second Loading Progress Bar */}
          <div className="w-full max-w-[240px] space-y-2 pt-2">
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/5">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.2, ease: "linear" }}
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-400 rounded-full shadow-lg shadow-blue-500/50"
              />
            </div>
            
            <div className="flex items-center justify-center text-[10px] font-mono text-slate-400 uppercase tracking-widest px-1">
              <span>Initializing Portfolio...</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

