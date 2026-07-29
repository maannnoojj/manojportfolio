import React from 'react';
import { motion } from 'motion/react';

interface SignatureProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showPenTip?: boolean;
}

export const Signature: React.FC<SignatureProps> = ({
  className = '',
  size = 'md',
  showPenTip = true
}) => {
  const dimensions = {
    sm: { width: 180, height: 55, strokeWidth: 2.2 },
    md: { width: 260, height: 75, strokeWidth: 2.8 },
    lg: { width: 340, height: 95, strokeWidth: 3.2 },
    xl: { width: 440, height: 120, strokeWidth: 3.8 }
  }[size];

  // Highly legible, elegant cursive signature paths for "Manoj M S"
  // Path 1: "M" - First Name Capital M
  const pathM1 = "M 15,58 C 15,26 28,16 32,16 C 38,16 42,42 45,58 C 48,34 58,16 64,16 C 70,16 72,42 74,58";
  
  // Path 2: "a-n-o-j" - Fluid readable cursive letters
  const pathAnoj = "M 74,58 C 78,44 88,44 88,52 C 88,58 80,58 80,52 C 80,46 88,46 92,54 M 92,46 C 96,44 100,44 102,58 M 102,46 C 106,44 110,44 112,58 M 112,50 C 112,44 122,44 122,50 C 122,58 112,58 112,50 M 122,46 L 124,70 C 124,80 112,82 108,74";
  
  // Dot on the 'j'
  const dotJ = "M 123,36 A 2.5,2.5 0 1,1 123,35.9";

  // Path 3: "M" - Middle Name Capital M
  const pathM2 = "M 142,58 C 142,26 152,16 156,16 C 160,16 164,42 167,58 C 170,34 178,16 182,16 C 186,16 188,42 190,58";
  
  // Path 4: "S" - Perfectly shaped, distinct Capital S
  const pathS = "M 216,22 C 206,16 198,22 198,30 C 198,38 214,40 214,48 C 214,56 200,60 194,54 C 192,52 198,60 208,58";
  
  // Path 5: Underline accent flourish
  const pathUnderline = "M 15,70 C 80,76 150,76 218,68";

  return (
    <div className={`relative inline-block select-none ${className}`}>
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 230 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible drop-shadow-[0_0_14px_rgba(59,130,246,0.6)]"
      >
        <defs>
          <linearGradient id="sigGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#C084FC" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>
        </defs>

        {/* Ambient neon glow underlay */}
        <motion.path
          d={`${pathM1} ${pathAnoj} ${pathM2} ${pathS} ${pathUnderline}`}
          stroke="url(#sigGrad)"
          strokeWidth={dimensions.strokeWidth + 2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-30 blur-[2.5px]"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.6, ease: "easeInOut" }}
        />

        {/* 1. First Name M */}
        <motion.path
          d={pathM1}
          stroke="url(#sigGrad)"
          strokeWidth={dimensions.strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* 2. anoj */}
        <motion.path
          d={pathAnoj}
          stroke="url(#sigGrad)"
          strokeWidth={dimensions.strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.55, ease: "easeInOut" }}
        />

        {/* Dot on j */}
        <motion.path
          d={dotJ}
          fill="#60A5FA"
          stroke="url(#sigGrad)"
          strokeWidth={1}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: 1.25 }}
        />

        {/* 3. Middle Initial M */}
        <motion.path
          d={pathM2}
          stroke="url(#sigGrad)"
          strokeWidth={dimensions.strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.3, ease: "easeInOut" }}
        />

        {/* 4. Last Initial S */}
        <motion.path
          d={pathS}
          stroke="url(#sigGrad)"
          strokeWidth={dimensions.strokeWidth + 0.3}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 1.75, ease: "easeInOut" }}
        />

        {/* 5. Underline flourish */}
        <motion.path
          d={pathUnderline}
          stroke="url(#sigGrad)"
          strokeWidth={dimensions.strokeWidth * 0.85}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
        />

        {/* Writing Pen Tip Sparkle Glow */}
        {showPenTip && (
          <motion.circle
            r="3.5"
            fill="#FFFFFF"
            className="shadow-[0_0_10px_#FFFFFF]"
            initial={{ opacity: 1 }}
            animate={{
              cx: [15, 74, 124, 142, 190, 216, 218, 15],
              cy: [58, 58, 74, 58, 58, 22, 58, 70],
              opacity: [1, 1, 1, 1, 1, 1, 1, 0]
            }}
            transition={{
              duration: 2.7,
              times: [0, 0.22, 0.48, 0.58, 0.72, 0.84, 0.94, 1],
              ease: "easeInOut"
            }}
          />
        )}
      </svg>
    </div>
  );
};
