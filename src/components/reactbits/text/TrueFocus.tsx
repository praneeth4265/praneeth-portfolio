import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TrueFocusProps {
  sentence: string[];
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  className?: string;
}

export const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence,
  manualMode = false,
  blurAmount = 4,
  borderColor = '#00F0FF',
  glowColor = 'rgba(0, 240, 255, 0.35)',
  animationDuration = 0.5,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`relative flex flex-wrap items-center gap-3 py-2 ${className}`}>
      {sentence.map((word, index) => {
        const isFocused = currentIndex === index;

        return (
          <div
            key={index}
            className="relative cursor-pointer select-none px-3 py-1 rounded-lg transition-colors duration-300"
            onMouseEnter={() => setCurrentIndex(index)}
            onMouseLeave={() => {
              if (!manualMode && index === currentIndex) {
                // keep current focused or let it stay
              }
            }}
          >
            <span
              className={`relative z-10 text-2xl md:text-3xl font-extrabold tracking-tight transition-all duration-300 ${
                isFocused
                  ? 'text-foreground scale-105'
                  : 'text-muted-foreground/60'
              }`}
              style={{
                filter:
                  !isFocused && !prefersReducedMotion
                    ? `blur(${blurAmount}px)`
                    : 'none',
              }}
            >
              {word}
            </span>

            {isFocused && !prefersReducedMotion && (
              <motion.div
                layoutId="true-focus-box"
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                  duration: animationDuration,
                }}
                className="absolute inset-0 z-0 rounded-lg border-2 pointer-events-none"
                style={{
                  borderColor,
                  boxShadow: `0 0 15px ${glowColor}, inset 0 0 10px ${glowColor}`,
                  backgroundColor: 'rgba(0, 240, 255, 0.05)',
                }}
              />
            )}
            {isFocused && prefersReducedMotion && (
              <div
                className="absolute inset-0 z-0 rounded-lg border-2 pointer-events-none"
                style={{ borderColor }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
