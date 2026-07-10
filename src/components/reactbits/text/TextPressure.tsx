import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TextPressureProps {
  text: string;
  className?: string;
  flex?: boolean;
  alpha?: boolean;
  stroke?: boolean;
  width?: boolean;
  weight?: boolean;
  italic?: boolean;
  textColor?: string;
  strokeColor?: string;
  minFontSize?: number;
}

export const TextPressure: React.FC<TextPressureProps> = ({
  text,
  className = '',
  textColor = 'currentColor',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || prefersReducedMotion) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: -1000, y: -1000 });
    };

    const elem = containerRef.current;
    if (elem && !prefersReducedMotion) {
      elem.addEventListener('mousemove', handleMouseMove);
      elem.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (elem && !prefersReducedMotion) {
        elem.removeEventListener('mousemove', handleMouseMove);
        elem.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [prefersReducedMotion]);

  const characters = text.split('');

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-wrap justify-center items-center py-4 cursor-default select-none ${className}`}
    >
      {characters.map((char, index) => {
        let scale = 1;
        let yOffset = 0;

        if (!prefersReducedMotion && containerRef.current) {
          // Calculate distance from character center
          const charElems = containerRef.current.querySelectorAll('.char-item');
          const charElem = charElems[index] as HTMLElement;
          if (charElem) {
            const rect = charElem.getBoundingClientRect();
            const containerRect = containerRef.current.getBoundingClientRect();
            const charCenter = {
              x: rect.left - containerRect.left + rect.width / 2,
              y: rect.top - containerRect.top + rect.height / 2,
            };

            const dx = mousePos.x - charCenter.x;
            const dy = mousePos.y - charCenter.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 180) {
              const intensity = (1 - dist / 180);
              scale = 1 + intensity * 0.35;
              yOffset = -intensity * 12;
            }
          }
        }

        return (
          <motion.span
            key={index}
            className="char-item inline-block font-extrabold tracking-tight transition-all duration-75"
            style={{
              color: textColor,
              display: char === ' ' ? 'inline-block' : 'inline-block',
              width: char === ' ' ? '0.3em' : 'auto',
            }}
            animate={
              prefersReducedMotion
                ? {}
                : {
                    scale,
                    y: yOffset,
                  }
            }
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          >
            {char}
          </motion.span>
        );
      })}
    </div>
  );
};
