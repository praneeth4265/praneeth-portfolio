import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ScrollRevealProps {
  children: string;
  className?: string;
}

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [8, 0]);

  return (
    <span className="inline-block mr-2 relative">
      <motion.span style={{ opacity, y }} className="inline-block">
        {children}
      </motion.span>
    </span>
  );
};

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  if (prefersReducedMotion) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  const words = children.split(' ');

  return (
    <div ref={containerRef} className={`flex flex-wrap leading-relaxed ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </div>
  );
};
