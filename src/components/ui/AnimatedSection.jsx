import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export default function AnimatedSection({ 
  children, 
  className, 
  delay = 0,
  id,
  variant = 'rise' // rise, scale, slide-left, slide-right, blur
}) {
  
  const variants = {
    rise: {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 }
    },
    'slide-left': {
      initial: { opacity: 0, x: -40 },
      whileInView: { opacity: 1, x: 0 }
    },
    'slide-right': {
      initial: { opacity: 0, x: 40 },
      whileInView: { opacity: 1, x: 0 }
    },
    blur: {
      initial: { opacity: 0, filter: 'blur(10px)' },
      whileInView: { opacity: 1, filter: 'blur(0px)' }
    }
  };

  const selectedVariant = variants[variant] || variants.rise;

  return (
    <motion.section
      id={id}
      className={cn("", className)}
      initial={selectedVariant.initial}
      whileInView={selectedVariant.whileInView}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] // Custom spring-like cubic bezier
      }}
    >
      {children}
    </motion.section>
  );
}
