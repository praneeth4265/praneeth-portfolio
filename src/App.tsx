import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Navigation } from '@/components/layout/Navigation';
import { LineSidebar } from '@/components/layout/LineSidebar';
import { PageTransition } from '@/components/layout/PageTransition';
import { HomePage } from '@/pages/HomePage';
import { ProjectDetailPage } from '@/pages/ProjectDetailPage';
import { siteConfig } from '@/data/site-config';

// Inner component to access useLocation for AnimatePresence keying
const AppRoutes: React.FC = () => {
  const location = useLocation();

  return (
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
          path="/project/:slug" 
          element={
            <PageTransition>
              <ProjectDetailPage />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#0A0A0E] text-[#F3F4F6] font-sans antialiased selection:bg-[#00F0FF]/30 selection:text-white relative">
        {/* Persistent Floating Navigation & Scroll Progress Indicator */}
        <Navigation />
        <LineSidebar />

        {/* Main Application Routes */}
        <AppRoutes />

        {/* Minimalist Global Footer */}
        <footer className="w-full py-12 px-6 border-t border-white/10 bg-[#0A0A0E] text-center text-sm text-gray-500">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              {siteConfig.socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00F0FF] transition-colors"
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
