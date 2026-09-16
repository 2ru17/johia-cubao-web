import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IconHeart, IconX, IconCurrencyDollar, IconMessageCircle } from '@tabler/icons-react';

const actions = [
  { label: 'Give', icon: IconCurrencyDollar, to: '/give', color: 'bg-green-500 hover:bg-green-400' },
  { label: 'Contact', icon: IconMessageCircle, to: '/contact', color: 'bg-blue-500 hover:bg-blue-400' },
];

export default function FloatingActionMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      {/* Action Items */}
      <AnimatePresence>
        {isOpen && actions.map((action, i) => (
          <motion.div
            key={action.label}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ delay: i * 0.08, duration: 0.2, ease: "easeOut" }}
          >
            <Link
              to={action.to}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-5 py-3 rounded-full text-white font-sans font-semibold text-sm shadow-lg backdrop-blur-md transition-all duration-300 ${action.color}`}
            >
              <action.icon size={18} />
              {action.label}
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-brand-yellow text-text-dark shadow-[0_4px_20px_rgba(251,176,59,0.5)] hover:shadow-[0_4px_30px_rgba(251,176,59,0.7)] flex items-center justify-center transition-all duration-300"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <IconX size={24} /> : <IconHeart size={24} />}
        </motion.div>
      </motion.button>
    </div>
  );
}
