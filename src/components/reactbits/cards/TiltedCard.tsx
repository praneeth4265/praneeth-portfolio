import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  tiltSpeed?: number;
  maxTilt?: number;
  glareOpacity?: number;
}

export const TiltedCard: React.FC<TiltedCardProps> = ({
  children,
  className = '',
  maxTilt = 12,
  glareOpacity = 0.15,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const prefersReducedMotion = useReducedMotion();

  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || prefersReducedMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;

    rotateX.set(-yPct * maxTilt);
    rotateY.set(xPct * maxTilt);

    setGlarePos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        prefersReducedMotion
          ? {}
          : {
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }
      }
      className={`relative rounded-2xl overflow-hidden transition-shadow duration-300 ${
        isHovered ? 'shadow-2xl shadow-cyan-500/10' : 'shadow-lg'
      } ${className}`}
    >
      <div style={{ transform: 'translateZ(20px)' }} className="w-full h-full">
        {children}
      </div>

      {!prefersReducedMotion && isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-20"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glareOpacity}) 0%, transparent 80%)`,
          }}
        />
      )}
    </motion.div>
  );
};
