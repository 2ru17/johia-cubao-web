import { ThemeProvider } from "./components/ui/ThemeProvider";
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Layout from './components/layout/Layout';
import PageTransition from './components/ui/PageTransition';
import ComingSoon from './pages/ComingSoon';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Ministries from './pages/Ministries';
import Contact from './pages/Contact';
import Give from './pages/Give';
import Media from './pages/Media';
import Journals from './pages/Journals';
import Posts from './pages/Posts';
import PostTemplate from './pages/PostTemplate';
import NotFound from './pages/NotFound';

import UserPreferences from './components/ui/UserPreferences';
import SiteMetrics from './components/seo/SiteMetrics';

// Legal pages — lazy loaded
const PrivacyPolicy = lazy(() => import('./pages/Privacy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

// Extract routes to use useLocation hook
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
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
        <Route path="/journals" element={<PageTransition><Journals /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><Suspense fallback={null}><PrivacyPolicy /></Suspense></PageTransition>} />
        <Route path="/terms" element={<PageTransition><Suspense fallback={null}><TermsOfService /></Suspense></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

// Global feature flag - Set to false when ready to officially launch!
export const IS_COMING_SOON_MODE = true;

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
