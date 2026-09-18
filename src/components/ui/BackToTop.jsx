import React from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { IconArrowUp } from '@tabler/icons-react';

export default function BackToTop() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 600);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/[0.08] text-gray-300 hover:text-brand-yellow hover:border-brand-yellow/50 shadow-lg flex items-center justify-center transition-colors duration-300"
          aria-label="Back to top"
        >
          <IconArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
