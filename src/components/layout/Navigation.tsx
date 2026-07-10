import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { navigationItems } from '@/data/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

export const Navigation: React.FC = () => {
  const activeSection = useActiveSection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <>
      {/* Desktop Floating Pill Nav (Gooey/PillNav inspired) */}
      <header 
        className={clsx(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out hidden md:block",
          scrolled ? "top-4 scale-95" : "top-6 scale-100"
        )}
      >
        <nav 
          aria-label="Main Navigation"
          className="relative flex items-center px-4 py-2 bg-[#12121A]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50"
        >
          <ul className="flex items-center space-x-1">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="relative">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={clsx(
                      "relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full block select-none",
                      isActive 
                        ? "text-white font-semibold" 
                        : "text-gray-400 hover:text-white"
                    )}
                  >
                    {/* Animated Pill Background */}
                    {isActive && (
                      <motion.div
                        layoutId="active-pill-bg"
                        className="absolute inset-0 bg-gradient-to-r from-[#00F0FF]/20 via-[#8B5CF6]/30 to-[#00F0FF]/20 border border-[#00F0FF]/40 rounded-full -z-10 shadow-[0_0_15px_rgba(0,240,255,0.25)]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30
                        }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      {/* Mobile Sticky Bar & Hamburger */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0A0A0E]/85 backdrop-blur-lg border-b border-white/10 md:hidden">
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="text-lg font-bold tracking-tighter bg-gradient-to-r from-[#00F0FF] to-[#8B5CF6] bg-clip-text text-transparent"
        >
          Compulsion.
        </a>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="p-2 text-gray-300 hover:text-white transition-colors focus:outline-none rounded-lg hover:bg-white/5"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-x-0 top-[61px] z-40 bg-[#12121A]/95 backdrop-blur-2xl border-b border-white/10 p-6 md:hidden shadow-2xl"
          >
            <ul className="flex flex-col space-y-3">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={clsx(
                        "flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                        isActive
                          ? "bg-gradient-to-r from-[#00F0FF]/15 to-[#8B5CF6]/15 border border-[#00F0FF]/30 text-white font-semibold"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      <span>{item.label}</span>
                      {isActive && <div className="w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
