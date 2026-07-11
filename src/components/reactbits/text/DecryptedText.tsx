import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import clsx from 'clsx';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  className?: string;
  encryptedClassName?: string;
}

const CHARS = '01#$@&*<>?/%^!=+~';

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 45,
  maxIterations = 15,
  className,
  encryptedClassName = 'text-[#E8A020]/60 font-mono'
}) => {
  const [displayText, setDisplayText] = useState('');
  const [revealedCount, setRevealedCount] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setDisplayText(text);
      setRevealedCount(text.length);
      return;
    }

    let iteration = 0;
    const length = text.length;

    const interval = setInterval(() => {
      setDisplayText(() => {
        return text
          .split('')
          .map((char, idx) => {
            if (char === ' ') return ' ';
            if (idx < iteration) return text[idx];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('');
      });

      if (iteration >= length) {
        clearInterval(interval);
      }

      iteration += length / maxIterations;
      setRevealedCount(Math.floor(iteration));
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, maxIterations, reducedMotion]);

  return (
    <motion.span 
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      className={clsx("inline-block", className)}
    >
      {displayText.split('').map((char, index) => {
        const isRevealed = index < revealedCount || char === ' ';
        return (
          <span
            key={index}
            className={isRevealed ? '' : encryptedClassName}
          >
            {char}
          </span>
        );
      })}
    </motion.span>
  );
};
