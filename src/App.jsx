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

// Extract routes to use useLocation hook
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/programs" element={<PageTransition><Programs /></PageTransition>} />
        <Route path="/ministries" element={<PageTransition><Ministries /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/give" element={<PageTransition><Give /></PageTransition>} />
        <Route path="/media" element={<PageTransition><Media /></PageTransition>} />
        <Route path="/posts" element={<PageTransition><Posts /></PageTransition>} />
        <Route path="/journals" element={<PageTransition><Journals /></PageTransition>} />
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
