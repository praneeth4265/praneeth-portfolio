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
        // Cool pearl — a whisper of blue, editorial and precise
        "absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-[#FAFAFF]",
        className
      )}
    >
      {/* Very subtle directional vignette for depth */}
      <div
        className="absolute inset-0 opacity-15 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, transparent 50%, rgba(26,35,50,0.04) 100%)'
        }}
      />

      {/* Aurora Layer 1 — Signal Amber, top-left (the marketing signal) */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0.4, scale: 1 }}
        animate={
          reducedMotion
            ? { opacity: 0.3, scale: 1 }
            : {
                opacity: [0.2, 0.45, 0.2],
                scale: [1, 1.2, 1],
                x: ['-5%', '10%', '-5%'],
                y: ['-10%', '6%', '-10%'],
                rotate: [0, 8, 0]
              }
        }
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-[20%] -left-[5%] w-[60vw] h-[60vw] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(232,160,32,0.10) 0%, rgba(232,160,32,0.04) 55%, transparent 100%)',
          filter: 'blur(120px)'
        }}
      />

      {/* Aurora Layer 2 — Carbon Navy, top-right (the engineering precision) */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0.3, scale: 1 }}
        animate={
          reducedMotion
            ? { opacity: 0.2, scale: 1 }
            : {
                opacity: [0.12, 0.30, 0.12],
                scale: [1, 1.18, 1],
                x: ['8%', '-8%', '8%'],
                y: ['6%', '-4%', '6%'],
                rotate: [0, -12, 0]
              }
        }
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute top-[5%] -right-[10%] w-[55vw] h-[55vw] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(26,35,50,0.06) 0%, rgba(26,35,50,0.02) 55%, transparent 100%)',
          filter: 'blur(140px)'
        }}
      />

      {/* Aurora Layer 3 — Warm Amber, bottom (the conversion heat map) */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0.25, scale: 1 }}
        animate={
          reducedMotion
            ? { opacity: 0.15 }
            : {
                opacity: [0.10, 0.25, 0.10],
                scale: [1, 1.25, 1],
                x: ['-8%', '5%', '-8%'],
                y: ['12%', '-5%', '12%']
              }
        }
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
        className="absolute -bottom-[10%] left-[15%] w-[55vw] h-[55vw] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(196,127,21,0.07) 0%, rgba(196,127,21,0.02) 55%, transparent 100%)',
          filter: 'blur(150px)'
        }}
      />

      {/* Ultra-subtle print grain — carbon fibre texture feel */}
      <div
        className="absolute inset-0 opacity-[0.022] z-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px'
        }}
      />
    </div>
  );
};
