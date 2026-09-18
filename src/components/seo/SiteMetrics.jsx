import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MEASUREMENT_ID = 'G-7TC1M03MZ9';

export default function SiteMetrics() {
  const location = useLocation();

  useEffect(() => {
    // 1. Only initialize if we haven't already
    if (!window.gtag) {
      try {
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
        script.async = true;
        
        // If an adblocker blocks the script from loading, it simply fails gracefully
        script.onerror = () => {
          console.warn('Tracking script blocked by adblocker. Continuing without tracking.');
        };
        
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag() { window.dataLayer.push(arguments); }
        window.gtag = gtag;

        // Default consent to denied until they click accept on the banner
        gtag('consent', 'default', {
          'analytics_storage': 'denied',
          'ad_storage': 'denied'
        });

        gtag('js', new Date());
        gtag('config', MEASUREMENT_ID, {
          send_page_view: false // We handle page views manually below
        });
      } catch (e) {
        console.warn('Tracking setup blocked.');
      }
    }
  }, []);

  // 2. Track route changes dynamically (since it's a React SPA)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      try {
        window.gtag('event', 'page_view', {
          page_path: location.pathname + location.search,
          page_title: document.title,
        });
      } catch (e) {
        // Ignore tracker blockers
      }
    }
  }, [location]);

  return null;
}
