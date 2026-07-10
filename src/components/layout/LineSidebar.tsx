import React from 'react';
import { motion } from 'motion/react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export const LineSidebar: React.FC = () => {
  const scrollProgress = useScrollProgress();

  return (
    <aside 
      aria-label="Page Scroll Progress"
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center select-none pointer-events-none"
    >
      {/* Top track / label */}
      <div className="text-[10px] uppercase font-mono tracking-widest text-gray-500 -rotate-90 mb-8">
        Progress
      </div>

      {/* Progress Track */}
      <div className="relative w-[2px] h-48 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#00F0FF] via-[#8B5CF6] to-[#10B981] rounded-full shadow-[0_0_10px_#00F0FF]"
          style={{ height: `${scrollProgress}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>

      {/* Percentage readout */}
      <div className="mt-4 text-[11px] font-mono font-semibold text-[#00F0FF]">
        {Math.round(scrollProgress)}%
      </div>
    </aside>
  );
};
