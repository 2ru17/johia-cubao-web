import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IconCookie } from '@tabler/icons-react';
import Button from './Button';

export default function UserPreferences() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let consent = null;
    try {
      consent = localStorage.getItem('johia_cookie_consent');
    } catch (e) {
      console.warn('localStorage is restricted.');
    }

    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    } else if (consent === 'granted') {
      try {
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('consent', 'update', {
            'analytics_storage': 'granted',
            'ad_storage': 'granted'
          });
        }
      } catch (e) {
        // Ignore tracker blockers
      }
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('johia_cookie_consent', 'granted');
    } catch (e) {
      // Ignore
    }
    setIsVisible(false);
    
    try {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted',
          'ad_storage': 'granted'
        });
      }
    } catch (e) {
      // Ignore tracker blockers
    }
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('johia_cookie_consent', 'denied');
    } catch (e) {
      // Ignore
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="cookie-banner"
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none flex justify-center"
        >
          <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 shadow-2xl rounded-2xl p-6 md:p-8 max-w-4xl w-full pointer-events-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 relative overflow-hidden">
            <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-brand-yellow/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex-1 flex items-start gap-4">
              <div className="bg-brand-yellow/10 text-brand-yellow p-3 rounded-full shrink-0">
                <IconCookie size={28} />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-xl text-text-dark dark:text-text-light mb-2">We value your privacy</h4>
                <p className="text-gray-600 dark:text-gray-400 font-sans text-sm md:text-base leading-relaxed">
                  We use cookies to analyze website traffic and optimize your experience. By accepting our use of cookies, your data will be aggregated with all other user data. 
                  Read our <Link to="/privacy" className="text-brand-yellow hover:underline">Privacy Policy</Link> for more information.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto shrink-0 mt-4 md:mt-0">
              <button 
                onClick={handleDecline}
                className="flex-1 md:flex-none px-6 py-3 rounded-full font-bold text-sm bg-gray-100 dark:bg-white/5 text-text-dark dark:text-text-light hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
              >
                Decline
              </button>
              <Button 
                onClick={handleAccept}
                variant="solid" 
                className="flex-1 md:flex-none px-8 py-3 text-sm shadow-md"
              >
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
