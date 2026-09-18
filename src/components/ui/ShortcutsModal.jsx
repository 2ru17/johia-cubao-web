import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconX, IconKeyboard } from '@tabler/icons-react';

const shortcuts = [
  { key: 'D', action: 'Toggle Dark / Light Mode' },
  { key: 'H', action: 'Go to Home' },
  { key: '?', action: 'Show / Hide this panel' },
];

export default function ShortcutsModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", bounce: 0.3 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-[#111] rounded-2xl shadow-2xl border border-gray-200 dark:border-white/[0.08] max-w-sm w-full p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <IconKeyboard size={24} className="text-brand-yellow" />
                  <h3 className="font-heading font-extrabold text-xl text-text-dark dark:text-text-light">Keyboard Shortcuts</h3>
                </div>
                <button onClick={onClose} className="text-gray-400 hover:text-brand-yellow transition-colors">
                  <IconX size={20} />
                </button>
              </div>
              <div className="space-y-4">
                {shortcuts.map((s) => (
                  <div key={s.key} className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400 font-sans text-sm">{s.action}</span>
                    <kbd className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-text-dark dark:text-text-light font-mono font-bold text-sm">
                      {s.key}
                    </kbd>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-6 text-center font-sans">Press <kbd className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/10 text-xs font-mono">?</kbd> to toggle</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
