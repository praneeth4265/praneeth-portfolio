import React from 'react';
import clsx from 'clsx';

interface SectionWrapperProps {
  id: string;
  theme: 'dark' | 'light';
  children: React.ReactNode;
  className?: string;
  withTopBorder?: boolean;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  theme,
  children,
  className,
  withTopBorder = true
}) => {
  const isDark = theme === 'dark';

  return (
    <section
      id={id}
      className={clsx(
        "relative w-full py-24 md:py-32 transition-colors duration-700 ease-in-out overflow-hidden",
        isDark 
          ? "dark bg-[#0A0A0E] text-[#F3F4F6]" 
          : "bg-[#F8FAFC] text-[#0F172A]",
        className
      )}
    >
      {/* Subtle border/glow separator between alternating sections */}
      {withTopBorder && (
        <div 
          className={clsx(
            "absolute top-0 left-0 right-0 h-[1px] w-full pointer-events-none",
            isDark
              ? "bg-gradient-to-r from-transparent via-white/10 to-transparent"
              : "bg-gradient-to-r from-transparent via-black/10 to-transparent"
          )}
        />
      )}

      {/* Ambient background glow for dark sections */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[120px]" />
        </div>
      )}

      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};
