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
  const isAlternate = theme === 'dark';

  return (
    <section
      id={id}
      className={clsx(
        "relative w-full py-24 md:py-32 transition-colors duration-700 ease-in-out overflow-hidden",
        isAlternate 
          ? "bg-[#F2F3FC] text-[#09090F]" 
          : "bg-[#FAFAFF] text-[#09090F]",
        className
      )}
    >
      {/* Subtle hairline separator between alternating sections */}
      {withTopBorder && (
        <div 
          className={clsx(
            "absolute top-0 left-0 right-0 h-[1px] w-full pointer-events-none bg-gradient-to-r from-transparent via-[#DDE0F0] to-transparent"
          )}
        />
      )}

      {/* Ambient background glow in cool indigo tones */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#4F46E5]/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#1E1B4B]/4 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};
