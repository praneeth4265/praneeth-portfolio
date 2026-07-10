import React, { useState, useEffect } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ShuffleProps {
  text: string;
  className?: string;
  duration?: number;
  triggerOnHover?: boolean;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

export const Shuffle: React.FC<ShuffleProps> = ({
  text,
  className = '',
  duration = 600,
  triggerOnHover = true,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isShuffling, setIsShuffling] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const startShuffle = () => {
    if (prefersReducedMotion || isShuffling) return;
    setIsShuffling(true);

    const length = text.length;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = elapsed / duration;

      if (progress >= 1) {
        clearInterval(interval);
        setDisplayText(text);
        setIsShuffling(false);
        return;
      }

      const resolvedCount = Math.floor(progress * length);
      let newStr = '';

      for (let i = 0; i < length; i++) {
        if (text[i] === ' ') {
          newStr += ' ';
        } else if (i < resolvedCount) {
          newStr += text[i];
        } else {
          newStr += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      setDisplayText(newStr);
    }, 30);
  };

  useEffect(() => {
    setDisplayText(text);
  }, [text]);

  return (
    <span
      className={`inline-block font-mono ${className}`}
      onMouseEnter={triggerOnHover ? startShuffle : undefined}
    >
      {displayText}
    </span>
  );
};
