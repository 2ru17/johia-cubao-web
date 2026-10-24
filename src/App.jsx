import { ThemeProvider } from "./components/ui/ThemeProvider";
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Layout from './components/layout/Layout';
import PageTransition from './components/ui/PageTransition';
import PageSkeleton from './components/ui/PageSkeleton';
import ComingSoon from './pages/ComingSoon';

// Pages - Core (Immediate Load)
import Home from './pages/Home';

// Pages - Lazy Loaded to reduce bundle size
const About = lazy(() => import('./pages/About'));
const Programs = lazy(() => import('./pages/Programs'));
const Ministries = lazy(() => import('./pages/Ministries'));
const Contact = lazy(() => import('./pages/Contact'));
const Give = lazy(() => import('./pages/Give'));
const Media = lazy(() => import('./pages/Media'));
const Posts = lazy(() => import('./pages/Posts'));
const PostTemplate = lazy(() => import('./pages/PostTemplate'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PrivacyPolicy = lazy(() => import('./pages/Privacy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

import UserPreferences from './components/ui/UserPreferences';
import SiteMetrics from './components/seo/SiteMetrics';
import ErrorBoundary from './components/ui/ErrorBoundary';

// Extract routes to use useLocation hook
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <ErrorBoundary>
      <AnimatePresence 
        mode="wait"
        onExitComplete={() => {
          if (location.hash) {
            setTimeout(() => {
              const element = document.getElementById(location.hash.replace('#', ''));
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          } else {
            window.scrollTo(0, 0);
          }
        }}
      >
        <Suspense fallback={<PageSkeleton />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/programs" element={<PageTransition><Programs /></PageTransition>} />
          <Route path="/ministries" element={<PageTransition><Ministries /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/give" element={<PageTransition><Give /></PageTransition>} />
          <Route path="/media" element={<PageTransition><Media /></PageTransition>} />
          <Route path="/posts" element={<PageTransition><Posts /></PageTransition>} />
          <Route path="/posts/:slug" element={<PageTransition><PostTemplate /></PageTransition>} />
          <Route path="/post/:slug" element={<PageTransition><PostTemplate /></PageTransition>} />
          <Route path="/journals" element={<Navigate to="/posts" replace />} />
          <Route path="/privacy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
          <Route path="/terms" element={<PageTransition><TermsOfService /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  </ErrorBoundary>
  );
}

// Global feature flag - Set to false when ready to officially launch!
export const IS_COMING_SOON_MODE = false;

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // Check local storage
    if (localStorage.getItem('bypassComingSoon') === 'true') {
      setIsUnlocked(true);
    }

    // Check URL parameters for bypass codes
    const params = new URLSearchParams(window.location.search);
    
    // Secret unlock code
    if (params.get('preview') === 'johia') {
      localStorage.setItem('bypassComingSoon', 'true');
      setIsUnlocked(true);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
    
    // Secret lock code
    if (params.get('lock') === 'true') {
      localStorage.removeItem('bypassComingSoon');
      setIsUnlocked(false);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  // Intercept all traffic if maintenance mode is ON and user is NOT unlocked
  if (IS_COMING_SOON_MODE && !isUnlocked) {
    return (
      <ThemeProvider>
        <HelmetProvider>
          <ComingSoon />
        </HelmetProvider>
      </ThemeProvider>
    );
  }

  // Normal App Rendering
  return (
    <ThemeProvider>
      <HelmetProvider>
        <BrowserRouter>
          <SiteMetrics />
          <Layout>
            <AnimatedRoutes />
            <UserPreferences />
          </Layout>
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
