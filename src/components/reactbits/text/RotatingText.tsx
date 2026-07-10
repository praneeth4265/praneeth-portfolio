import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import clsx from 'clsx';

interface RotatingTextProps {
  items: string[];
  interval?: number; // ms between rotations
  className?: string;
  itemClassName?: string;
}

export const RotatingText: React.FC<RotatingTextProps> = ({
  items,
  interval = 3500,
  className,
  itemClassName
}) => {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (items.length <= 1 || reducedMotion) return;

    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items, interval, reducedMotion]);

  if (items.length === 0) return null;

  return (
    <span className={clsx("inline-flex items-center overflow-hidden relative align-top", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={items[index]}
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 25, rotateX: -60 }}
          animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, rotateX: 0 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -25, rotateX: 60 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            mass: 0.8
          }}
          className={clsx("inline-block transform-gpu font-bold", itemClassName)}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
