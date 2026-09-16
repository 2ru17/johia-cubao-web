import { ThemeProvider } from "./components/ui/ThemeProvider";
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Layout from './components/layout/Layout';
import PageTransition from './components/ui/PageTransition';

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
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}


function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <BrowserRouter>
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
