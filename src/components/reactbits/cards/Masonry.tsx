import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ShieldCheck, ArrowUpRight, X } from 'lucide-react';

export type MasonryItemDef = {
  id: string;
  title: string;
  category: string;
  level?: number;
  highlighted?: boolean;
  icon?: React.ReactNode;
  description: string;
  size?: 'normal' | 'large' | 'featured';
};

export type MasonryProps = {
  items: MasonryItemDef[];
  columns?: {
    default: number;
    1280?: number;
    1024?: number;
    768?: number;
    640?: number;
  };
  gap?: number;
  onItemClick?: (item: MasonryItemDef) => void;
};

export const Masonry: React.FC<MasonryProps> = ({
  items,
  columns = {
    default: 3,
    1280: 3,
    1024: 2,
    768: 2,
    640: 1
  },
  gap = 20
}) => {
  const [columnCount, setColumnCount] = useState<number>(columns.default);
  const [selectedItem, setSelectedItem] = useState<MasonryItemDef | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive column count calculation
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width <= 640 && columns[640]) {
        setColumnCount(columns[640]!);
      } else if (width <= 768 && columns[768]) {
        setColumnCount(columns[768]!);
      } else if (width <= 1024 && columns[1024]) {
        setColumnCount(columns[1024]!);
      } else if (width <= 1280 && columns[1280]) {
        setColumnCount(columns[1280]!);
      } else {
        setColumnCount(columns.default);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, [columns]);

  // Distribute items across columns using shortest-column / staggered height logic
  const columnItems = useMemo(() => {
    const cols: MasonryItemDef[][] = Array.from({ length: columnCount }, () => []);
    const colWeights: number[] = Array.from({ length: columnCount }, () => 0);

    items.forEach((item) => {
      let minColIdx = 0;
      let minWeight = colWeights[0];
      for (let i = 1; i < columnCount; i++) {
        if (colWeights[i] < minWeight) {
          minWeight = colWeights[i];
          minColIdx = i;
        }
      }

      cols[minColIdx].push(item);

      const weight = item.size === 'featured' ? 3 : item.size === 'large' ? 2 : 1;
      colWeights[minColIdx] += weight;
    });

    return cols;
  }, [items, columnCount]);

  return (
    <div ref={containerRef} className="relative w-full py-4">
      {/* Masonry Columns Layout */}
      <div
        className="grid w-full items-start"
        style={{
          gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
          gap: `${gap}px`
        }}
      >
        {columnItems.map((col, colIdx) => (
          <div
            key={`col-${colIdx}`}
            className="flex flex-col w-full"
            style={{ gap: `${gap}px` }}
          >
            {col.map((item, idx) => {
              const isFeatured = item.size === 'featured';
              const isLarge = item.size === 'large';

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.45,
                    delay: (colIdx * col.length + idx) * 0.04,
                    type: 'spring',
                    stiffness: 100,
                    damping: 18
                  }}
                  onClick={() => setSelectedItem(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedItem(item);
                    }
                  }}
                  className={`group relative rounded-3xl p-6 sm:p-7 text-left cursor-pointer overflow-hidden transition-all duration-300 border hover:-translate-y-1.5 ${
                    isFeatured
                      ? 'bg-gradient-to-br from-[#EEF2FF] via-[#E0E7FF] to-[#C7D2FE] border-[#4F46E5]/40 shadow-2xl shadow-[#4F46E5]/12 hover:border-[#4F46E5] hover:shadow-[#4F46E5]/20'
                      : isLarge
                      ? 'bg-[#FAFAFF] border-[#DDE0F0] hover:border-[#4F46E5]/60 shadow-lg hover:shadow-[#4F46E5]/8'
                      : 'bg-[#FAFAFF] border-[#DDE0F0] hover:border-[#6B6880]/60 shadow-md'
                  }`}
                >
                  {/* Ambient corner glow */}
                  <div className={`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-2xl pointer-events-none transition-all duration-500 ${
                    isFeatured
                      ? 'bg-[#4F46E5]/15 group-hover:bg-[#4F46E5]/25'
                      : 'bg-[#4F46E5]/5 group-hover:bg-[#4F46E5]/12'
                  }`} />

                  {/* Header Row: Icon + Mastery Level Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5 relative z-10">
                    <div
                      className={`rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md ${
                        isFeatured
                          ? 'w-14 h-14 bg-[#4F46E5] text-white shadow-[#4F46E5]/25'
                          : 'w-12 h-12 bg-[#4F46E5]/10 border border-[#4F46E5]/25 text-[#4F46E5] group-hover:bg-[#4F46E5] group-hover:text-white group-hover:border-transparent'
                      }`}
                    >
                      {item.icon || <Sparkles className="w-6 h-6" />}
                    </div>

                    <div className="flex items-center gap-2">
                      {item.level && (
                        <span className={`text-xs font-black font-mono px-3 py-1.5 rounded-full border transition-colors ${
                          isFeatured
                            ? 'bg-[#4F46E5]/10 border-[#4F46E5]/30 text-[#1E1B4B] group-hover:border-[#4F46E5]/60'
                            : 'bg-[#F2F3FC] border-[#DDE0F0] text-[#1E1B4B] group-hover:border-[#4F46E5]/40'
                        }`}>
                          {item.level}% MASTERY
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Category Pill */}
                  <div className="mb-2 relative z-10">
                    <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider font-mono block ${
                      isFeatured ? 'text-[#4F46E5]' : 'text-[#6B6880]'
                    }`}>
                      {item.category}
                    </span>
                  </div>

                  {/* Capability Title */}
                  <h3
                    className={`font-black tracking-tight relative z-10 mb-3 transition-colors ${
                      isFeatured
                        ? 'text-xl sm:text-2xl leading-snug text-[#1E1B4B] group-hover:text-[#4F46E5]'
                        : 'text-base sm:text-lg leading-tight text-[#09090F] group-hover:text-[#4F46E5]'
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Strategic Description */}
                  <p
                    className={`leading-relaxed font-sans relative z-10 text-[#2D2B4A] ${
                      isFeatured ? 'text-sm sm:text-base' : 'text-xs sm:text-sm line-clamp-3'
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Footer Action Indicator */}
                  <div className="mt-6 pt-4 border-t border-[#DDE0F0] flex items-center justify-between text-xs font-mono text-[#6B6880] relative z-10">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-[#4F46E5]" />
                      <span>Verified Expertise</span>
                    </span>
                    <span className="text-[#4F46E5] font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0 duration-300">
                      <span>View Details</span>
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Scrim backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-[#09090F]/60 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Card — light Indigo Precision theme */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
              className="relative w-full max-w-2xl bg-[#FAFAFF] border-2 border-[#4F46E5]/40 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-[#4F46E5]/15 text-left z-10 overflow-y-auto max-h-[90vh]"
            >
              {/* Ambient glow top-right */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#4F46E5]/8 rounded-full blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#F2F3FC] border border-[#DDE0F0] hover:border-[#4F46E5] text-[#2D2B4A] hover:text-[#4F46E5] flex items-center justify-center transition-all duration-300 z-20"
                aria-label="Close details"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-6 pr-12">
                <div className="w-16 h-16 rounded-2xl bg-[#4F46E5]/10 border border-[#4F46E5]/30 flex items-center justify-center text-[#4F46E5] shrink-0 shadow-lg shadow-[#4F46E5]/10">
                  {selectedItem.icon || <Sparkles className="w-8 h-8" />}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5] font-mono block mb-1">
                    {selectedItem.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[#6B6880] font-mono">CORE DISCIPLINE</span>
                    <span className="text-[#DDE0F0]">●</span>
                    <span className="text-sm font-black font-mono text-[#4F46E5]">
                      {selectedItem.level || 94}% MASTERY
                    </span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#09090F] tracking-tight leading-snug mb-5">
                {selectedItem.title}
              </h2>

              {/* Mastery Gauge Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs font-mono text-[#6B6880] mb-2">
                  <span>Proficiency Gauge</span>
                  <span className="text-[#1E1B4B] font-bold">{selectedItem.level || 94}% Verified</span>
                </div>
                <div className="w-full bg-[#F2F3FC] h-3 rounded-full overflow-hidden border border-[#DDE0F0]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedItem.level || 94}%` }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                    className="bg-gradient-to-r from-[#4F46E5] via-[#6D6AFF] to-[#A5B4FC] h-full rounded-full"
                  />
                </div>
              </div>

              {/* Full Description */}
              <div className="space-y-4 text-sm sm:text-base text-[#2D2B4A] leading-relaxed font-sans mb-8 bg-[#F2F3FC] p-5 rounded-2xl border border-[#DDE0F0]">
                <h4 className="text-xs font-bold uppercase font-mono text-[#4F46E5] tracking-wider mb-2">
                  Strategic Engineering & Copywriting Impact
                </h4>
                <p>{selectedItem.description}</p>
              </div>

              {/* Footer Actions */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-[#DDE0F0] font-mono text-xs">
                <span className="flex items-center gap-2 text-[#6B6880]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4F46E5] animate-ping" />
                  <span>Deployed in 14+ Production Projects</span>
                </span>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#4F46E5] text-white font-bold uppercase hover:bg-[#3730A3] transition-colors shadow-md shadow-[#4F46E5]/20"
                >
                  Return to Gallery
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Masonry;
