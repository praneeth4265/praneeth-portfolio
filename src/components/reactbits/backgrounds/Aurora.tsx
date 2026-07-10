import React from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import clsx from 'clsx';

interface AuroraProps {
  colorStops?: string[];
  amplitude?: number;
  className?: string;
}

export const Aurora: React.FC<AuroraProps> = ({
  className
}) => {
  const reducedMotion = useReducedMotion();

  return (
    <div 
      className={clsx(
        "absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-[#0A0A0E]",
        className
      )}
    >
      {/* Background radial dark vignette */}
      <div className="absolute inset-0 bg-radial-vignette opacity-80 z-10" />

      {/* Aurora Layer 1 - Neon Cyan */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0.6, scale: 1 }}
        animate={
          reducedMotion
            ? { opacity: 0.5, scale: 1 }
            : {
                opacity: [0.4, 0.75, 0.4],
                scale: [1, 1.15, 1],
                x: ['-5%', '10%', '-5%'],
                y: ['-10%', '5%', '-10%'],
                rotate: [0, 15, 0]
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-[30%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tr from-[#00F0FF]/30 via-[#00F0FF]/15 to-transparent blur-[140px]"
      />

      {/* Aurora Layer 2 - Electric Violet */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0.5, scale: 1 }}
        animate={
          reducedMotion
            ? { opacity: 0.5, scale: 1 }
            : {
                opacity: [0.35, 0.65, 0.35],
                scale: [1, 1.2, 1],
                x: ['10%', '-15%', '10%'],
                y: ['15%', '-5%', '15%'],
                rotate: [0, -20, 0]
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-[10%] -right-[20%] w-[65vw] h-[65vw] rounded-full bg-gradient-to-tl from-[#8B5CF6]/35 via-[#8B5CF6]/15 to-transparent blur-[150px]"
      />

      {/* Aurora Layer 3 - Deep Emerald/Teal Accent */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0.4, scale: 1 }}
        animate={
          reducedMotion
            ? { opacity: 0.3 }
            : {
                opacity: [0.25, 0.5, 0.25],
                scale: [1, 1.25, 1],
                x: ['-15%', '5%', '-15%'],
                y: ['20%', '-10%', '20%']
              }
        }
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-t from-[#10B981]/25 via-[#00F0FF]/10 to-transparent blur-[160px]"
      />

      {/* Subtle tech grid overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.035] z-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};
