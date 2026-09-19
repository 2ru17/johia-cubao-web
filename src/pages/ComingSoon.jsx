import React from 'react';
import { motion } from 'framer-motion';
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react';
import PageMeta from '../components/seo/PageMeta';
import PaintFrameBackground from '../components/ui/PaintFrameBackground';

export default function ComingSoon() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f9f9f9] dark:bg-gray-900 relative overflow-hidden font-sans">
      <PageMeta title="Coming Soon" description="We are preparing something special. Jesus Our Hope International Assemblies." />
      
      {/* Background */}
      <PaintFrameBackground />
      
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-[150px] z-0 pointer-events-none"></div>

      <div className="flex-grow flex flex-col items-center justify-center relative z-10 px-6 text-center">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 bg-gray-900/40 p-4 md:p-6 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl"
        >
          <img 
            src="/images/general/banner-white.svg" 
            alt="JOHIA Cubao Logo" 
            className="w-48 md:w-72 h-auto"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold font-heading text-text-dark dark:text-text-light leading-tight mb-6 tracking-tight drop-shadow-md">
            Coming Soon
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto">
            We are building a new digital home for our church family. We can't wait to share it with you soon!
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex gap-6 items-center justify-center"
        >
          <a href="https://www.facebook.com/johiacubao" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:text-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_20px_rgba(24,119,242,0.3)] transition-all duration-300 transform hover:-translate-y-1">
            <IconBrandFacebook size={28} />
          </a>
          <a href="https://www.instagram.com/johiacubao/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:text-[#E4405F] hover:border-[#E4405F] hover:shadow-[0_0_20px_rgba(228,64,95,0.3)] transition-all duration-300 transform hover:-translate-y-1">
            <IconBrandInstagram size={28} />
          </a>
          <a href="https://www.youtube.com/@johiacubao" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:text-[#FF0000] hover:border-[#FF0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-1">
            <IconBrandYoutube size={28} />
          </a>
        </motion.div>

      </div>
    </div>
  );
}
