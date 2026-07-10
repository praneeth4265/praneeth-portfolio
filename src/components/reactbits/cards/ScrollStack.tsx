import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScrollStackProps {
  items: Array<{
    id: string;
    content: React.ReactNode;
  }>;
  className?: string;
}

export const ScrollStack: React.FC<ScrollStackProps> = ({
  items,
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className={`relative w-full max-w-4xl mx-auto ${className}`}>
      <div className="relative h-[340px] md:h-[280px] flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => {
            const offset = (index - activeIndex + items.length) % items.length;
            if (offset > 2 && offset !== items.length - 1) return null;

            let scale = 1 - offset * 0.05;
            let y = offset * 18;
            let zIndex = items.length - offset;
            let opacity = 1 - offset * 0.25;

            if (offset === items.length - 1) {
              // previous item just behind slightly to the left
              scale = 0.92;
              y = -10;
              zIndex = 1;
              opacity = 0;
            }

            return (
              <motion.div
                key={item.id}
                initial={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { scale: 0.8, y: 50, opacity: 0 }
                }
                animate={{
                  scale,
                  y,
                  opacity,
                  zIndex,
                }}
                exit={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { scale: 1.05, y: -40, opacity: 0 }
                }
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 25,
                }}
                className="absolute inset-0 w-full p-6 md:p-8 rounded-2xl bg-card border border-border/60 shadow-xl flex flex-col justify-between"
              >
                {item.content}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="flex justify-between items-center mt-8 px-2">
        <div className="flex gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? 'w-8 bg-primary shadow-sm shadow-primary/50'
                  : 'w-2.5 bg-muted/60 hover:bg-muted'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="p-2.5 rounded-xl border border-border bg-card/80 hover:bg-card hover:border-primary/50 text-foreground transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2.5 rounded-xl border border-border bg-card/80 hover:bg-card hover:border-primary/50 text-foreground transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
