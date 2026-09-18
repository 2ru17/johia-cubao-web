import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconCheck, IconX } from '@tabler/icons-react';

export default function Toast({ message, type = 'success', isVisible, onClose, duration = 5000 }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const styles = {
    success: 'bg-green-500/90 text-white',
    error: 'bg-red-500/90 text-white',
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", bounce: 0.4 }}
          className={`fixed bottom-24 right-8 z-[60] px-6 py-4 rounded-2xl backdrop-blur-md shadow-2xl flex items-center gap-3 ${styles[type]}`}
        >
          {type === 'success' ? <IconCheck size={20} /> : <IconX size={20} />}
          <span className="font-sans font-semibold text-sm">{message}</span>
          <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100 transition-opacity">
            <IconX size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
