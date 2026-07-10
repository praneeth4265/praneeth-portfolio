import React, { useState, useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ScrambledTextProps {
  text: string;
  speed?: number; // ms per step
  delay?: number; // ms before start
  chars?: string;
  className?: string;
  onComplete?: () => void;
}

const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';

export const ScrambledText: React.FC<ScrambledTextProps> = ({
  text,
  speed = 40,
  delay = 200,
  chars = DEFAULT_CHARS,
  className,
  onComplete
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isScrambling, setIsScrambling] = useState(false);
  const reducedMotion = useReducedMotion();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (reducedMotion) {
      setDisplayText(text);
      onComplete?.();
      return;
    }

    // Set initial scrambled string or empty
    const length = text.length;
    let currentIteration = 0;

    const startScramble = () => {
      setIsScrambling(true);
      
      intervalRef.current = setInterval(() => {
        setDisplayText(() => {
          return text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < currentIteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
        });

        if (currentIteration >= length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsScrambling(false);
          onComplete?.();
        }

        currentIteration += 1 / 3; // Controls how fast characters resolve relative to scramble speed
      }, speed);
    };

    timeoutRef.current = setTimeout(startScramble, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, speed, delay, chars, reducedMotion]);

  return (
    <span className={className} data-scrambling={isScrambling}>
      {displayText || text.replace(/[a-zA-Z0-9]/g, '_')}
    </span>
  );
};
