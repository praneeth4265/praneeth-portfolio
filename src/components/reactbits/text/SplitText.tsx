import React from 'react';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
  splitBy?: 'words' | 'characters';
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0,
  wordDelay = 0.04,
  splitBy = 'words',
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  const items = splitBy === 'words' ? text.split(' ') : text.split('');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: wordDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -45,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 18,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`inline-block ${className}`}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className="inline-block mr-[0.25em] last:mr-0"
        >
          {item}
        </motion.span>
      ))}
    </motion.span>
  );
};
