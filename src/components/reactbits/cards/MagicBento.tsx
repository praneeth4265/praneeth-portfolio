import React from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MagicBentoItemProps {
  children: React.ReactNode;
  span?: string;
  className?: string;
  index?: number;
}

export const MagicBentoItem: React.FC<MagicBentoItemProps> = ({
  children,
  span = 'col-span-1 row-span-1',
  className = '',
  index = 0,
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className={`${span} group relative rounded-2xl border border-[#DDE0F0] bg-[#FAFAFF] overflow-hidden transition-all duration-300 hover:border-[#4F46E5]/50 hover:shadow-xl hover:shadow-[#4F46E5]/8 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/4 via-transparent to-[#3730A3]/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
      <div className="relative z-10 h-full w-full">{children}</div>
    </motion.div>
  );
};

interface MagicBentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export const MagicBentoGrid: React.FC<MagicBentoGridProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(320px,auto)] gap-6 ${className}`}
    >
      {children}
    </div>
  );
};
