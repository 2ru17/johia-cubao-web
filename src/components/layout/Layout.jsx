import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToHash from './ScrollToHash';
import PageMeta from '../seo/PageMeta';
import FloatingActionMenu from '../ui/FloatingActionMenu';
import ScrollProgressBar from '../ui/ScrollProgressBar';
import BackToTop from '../ui/BackToTop';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-text-dark dark:text-text-light font-sans selection:bg-brand-yellow selection:text-text-dark dark:text-text-light">
      <PageMeta />
      <ScrollToHash />
      <ScrollProgressBar />
      <Navbar />
      
      {/* 
        Removed pt-[72px] to allow Hero sections to be full-bleed 
        and sit underneath the transparent absolute Navbar.
      */}
      <main className="flex-grow">
        {children}
      </main>

      <FloatingActionMenu />
      <BackToTop />
      <Footer />
    </div>
  );
}
