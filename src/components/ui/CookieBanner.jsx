import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconX } from '@tabler/icons-react';

const COOKIE_CONSENT_KEY = 'johia_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay so the page loads first before showing the banner
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-4xl mx-auto bg-[#1a1a1a] border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-grow">
          <p className="text-sm text-gray-300 font-sans leading-relaxed">
            We use essential cookies to make this site work. By continuing to browse, you agree to our{' '}
            <Link to="/cookies" className="text-brand-yellow hover:underline font-medium">Cookie Policy</Link>.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-5 py-2.5 rounded-full border border-white/10 text-sm font-bold text-gray-400 hover:text-white hover:border-white/30 transition-all"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2.5 rounded-full bg-brand-yellow text-text-dark text-sm font-bold hover:bg-yellow-400 transition-all"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
