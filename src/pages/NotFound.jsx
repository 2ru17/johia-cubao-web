import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageMeta from '../components/seo/PageMeta';
import Button from '../components/ui/Button';
import { IconHome, IconArrowLeft } from '@tabler/icons-react';

export default function NotFound() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background-dark relative overflow-hidden">
      <PageMeta title="Page Not Found" description="The page you're looking for doesn't exist." />
      
      {/* Aurora background */}
      <div className="absolute inset-0 bg-aurora opacity-40 z-0"></div>
      
      {/* Decorative floating glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-[150px] z-0"></div>

      <div className="flex-grow flex items-center justify-center relative z-10">
        <div className="text-center px-6 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[10rem] md:text-[14rem] font-extrabold font-heading text-brand-yellow leading-none mb-0 drop-shadow-[0_0_60px_rgba(251,176,59,0.3)]">
              404
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-light mb-6 tracking-tight">
              Lost? Let's get you home.
            </h2>
            <p className="text-gray-400 font-sans text-lg mb-12 max-w-md mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved. But don't worry — there's always a seat saved for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="solid" href="/" className="!bg-brand-yellow !text-text-dark hover:!bg-white px-8 py-4 text-lg shadow-[0_0_20px_rgba(251,176,59,0.3)]">
              <IconHome size={20} /> Go Home
            </Button>
            <Button variant="outline" href="/contact" className="px-8 py-4 text-lg">
              <IconArrowLeft size={20} /> Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
