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
      {/* Desktop Floating Pill Nav */}
      <header 
        className={clsx(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out hidden md:block",
          scrolled ? "top-4 scale-95" : "top-6 scale-100"
        )}
      >
        <nav 
          aria-label="Main Navigation"
          className="relative flex items-center px-3 py-1.5 bg-[#FAFAFF]/92 backdrop-blur-xl border border-[#DDE0F0] rounded-full shadow-lg shadow-[#4F46E5]/8"
        >
          <ul className="flex items-center space-x-1 font-mono text-sm">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="relative">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={clsx(
                      "relative px-4 py-2 transition-colors duration-300 rounded-full block select-none",
                      isActive 
                        ? "text-white font-semibold" 
                        : "text-[#2D2B4A] hover:text-[#09090F]"
                    )}
                  >
                    {/* Animated Pill Background */}
                    {isActive && (
                      <motion.div
                        layoutId="active-pill-bg"
                        className="absolute inset-0 bg-[#4F46E5] rounded-full -z-10 shadow-md shadow-[#4F46E5]/30"
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
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#FAFAFF]/92 backdrop-blur-lg border-b border-[#DDE0F0] md:hidden">
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="text-lg font-bold tracking-tighter text-[#09090F]"
        >
          Compulsion.
        </a>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="p-2 text-[#2D2B4A] hover:text-[#09090F] transition-colors focus:outline-none rounded-lg hover:bg-[#F2F3FC]"
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
            className="fixed inset-x-0 top-[61px] z-40 bg-[#F2F3FC]/95 backdrop-blur-2xl border-b border-[#DDE0F0] p-6 md:hidden shadow-2xl"
          >
            <ul className="flex flex-col space-y-3 font-mono">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={clsx(
                        "flex items-center justify-between px-4 py-3 rounded-xl text-base transition-all duration-200",
                        isActive
                          ? "bg-[#4F46E5] text-white font-semibold shadow-md shadow-[#4F46E5]/20"
                          : "text-[#2D2B4A] hover:bg-[#FAFAFF] hover:text-[#09090F]"
                      )}
                    >
                      <span>{item.label}</span>
                      {isActive && <div className="w-2 h-2 rounded-full bg-white" />}
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
