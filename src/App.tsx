import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navigation } from '@/components/layout/Navigation';
import { LineSidebar } from '@/components/layout/LineSidebar';
import { PageTransition } from '@/components/layout/PageTransition';
import { siteConfig } from '@/data/site-config';

// Lazy load pages for pristine bundle performance (< 300KB initial chunk)
const HomePage = React.lazy(() => import('@/pages/HomePage').then((module) => ({ default: module.HomePage })));
const ProjectDetailPage = React.lazy(() => import('@/pages/ProjectDetailPage').then((module) => ({ default: module.ProjectDetailPage })));

// Loading fallback spinner during code-split chunk resolution
const PageLoader: React.FC = () => (
  <div className="w-full min-h-screen bg-[#FAFAFF] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="w-12 h-12 rounded-full border-2 border-[#4F46E5] border-t-transparent shadow-lg shadow-[#4F46E5]/20"
      />
      <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#4F46E5] animate-pulse">
        Initializing Case Study...
      </span>
    </div>
  </div>
);

// Inner component to access useLocation for AnimatePresence keying
const AppRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="/projects/:slug"
            element={
              <PageTransition>
                <ProjectDetailPage />
              </PageTransition>
            }
          />
          {/* Legacy singular route redirect/support for backward compatibility */}
          <Route
            path="/project/:slug"
            element={
              <PageTransition>
                <ProjectDetailPage />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export const App: React.FC = () => {
  React.useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // If there is no hash in the URL on initial mount, force scroll to top
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#FAFAFF] text-[#09090F] font-sans antialiased selection:bg-[#4F46E5]/15 selection:text-[#09090F] relative overflow-x-hidden">
        {/* Persistent Top Pill Navigation */}
        <Navigation />
        <LineSidebar />

        {/* Main Application Routes */}
        <AppRoutes />

        {/* Minimalist Editorial Luxury Footer */}
        <footer className="w-full py-12 px-6 border-t border-[#DDE0F0] bg-[#F2F3FC] text-center text-sm text-[#2D2B4A] relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-medium">
              © {new Date().getFullYear()} {siteConfig.name}. Built with intention.
            </div>
            <div className="flex items-center space-x-6 font-semibold">
              {siteConfig.socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2D2B4A] hover:text-[#4F46E5] transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
