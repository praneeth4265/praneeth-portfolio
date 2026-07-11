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
  borderColor = '#4F46E5',
  glowColor = 'rgba(79, 70, 229, 0.2)',
  animationDuration = 0.5,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`relative flex flex-wrap items-center gap-2.5 sm:gap-3.5 py-2 ${className}`}>
      {sentence.map((word, index) => {
        const isFocused = currentIndex === index;

        return (
          <div
            key={index}
            className="relative cursor-pointer select-none px-3.5 py-1.5 rounded-xl transition-all duration-300 flex items-center"
            onMouseEnter={() => setCurrentIndex(index)}
            onMouseLeave={() => {
              if (!manualMode && index === currentIndex) {
                // keep current focused or let it stay
              }
            }}
          >
            <span
              className={`relative z-10 text-lg sm:text-xl md:text-2xl font-black tracking-tight transition-all duration-300 ${
                isFocused
                  ? 'text-[#0A0908] scale-102 font-black'
                  : 'text-[#72706A] hover:text-[#38352E]'
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
                  stiffness: 350,
                  damping: 30,
                  duration: animationDuration,
                }}
                className="absolute inset-0 z-0 rounded-xl border-2 pointer-events-none"
                style={{
                  borderColor,
                  boxShadow: `0 4px 12px ${glowColor}, inset 0 0 12px ${glowColor}`,
                  backgroundColor: 'rgba(232, 160, 32, 0.04)',
                }}
              />
            )}
            {isFocused && prefersReducedMotion && (
              <div
                className="absolute inset-0 z-0 rounded-xl border-2 pointer-events-none bg-[#E8A020]/4"
                style={{ borderColor }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
