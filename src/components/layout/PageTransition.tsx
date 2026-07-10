import React from 'react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { springSlow } from '@/utils/animation-variants';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={springSlow}
      className="w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
};
