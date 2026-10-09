import React from 'react';
import { motion } from 'framer-motion';

export default function PageSkeleton() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background-light dark:bg-background-dark p-6 md:p-12 lg:p-24 overflow-hidden pt-32">
      {/* Title Skeleton */}
      <div className="w-full max-w-7xl mx-auto space-y-4 mb-16">
        <motion.div 
          className="h-12 md:h-20 w-3/4 md:w-1/2 bg-gray-200 dark:bg-neutral-800 rounded-2xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="h-4 md:h-6 w-1/2 md:w-1/3 bg-gray-200 dark:bg-neutral-800 rounded-full"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
      </div>

      {/* Bento Grid Skeleton */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
        {/* Large Block */}
        <motion.div 
          className="md:col-span-2 md:row-span-2 bg-gray-200 dark:bg-neutral-800 rounded-3xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
        />
        {/* Side Block */}
        <motion.div 
          className="bg-gray-200 dark:bg-neutral-800 rounded-3xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.div 
          className="bg-gray-200 dark:bg-neutral-800 rounded-3xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        {/* Bottom wide block */}
        <motion.div 
          className="md:col-span-3 bg-gray-200 dark:bg-neutral-800 rounded-3xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}
