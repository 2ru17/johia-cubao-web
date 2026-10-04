import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconMail } from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer className="bg-background-footer text-text-light relative border-t border-white/[0.06] overflow-hidden">
      {/* Animated Gold Accent Bar */}
      <motion.div 
        animate={{ x: [-100, 2000] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-32 h-[3px] bg-brand-yellow shadow-[0_0_10px_#FBB03B]"
      ></motion.div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column */}
          <div>
            <Link to="/">
              <img loading="lazy" src="/images/general/banner-white.svg" alt="JOHIA Cubao Logo" className="w-[200px] h-auto mb-4 hover:opacity-80 transition-opacity" />
            </Link>
            <p className="font-sans text-gray-400 mb-8 max-w-sm text-lg">
              Jesus Our Hope International Assemblies Cubao.<br />
              This is your Home.
            </p>
            
            <div className="flex space-x-6">
              <a href="https://facebook.com/johiacubaoph" target="_blank" rel="noreferrer" className="text-[#1877F2]  hover:-translate-y-1 transition-all duration-300 drop-shadow-md" aria-label="Facebook">
                <IconBrandFacebook size={28} />
              </a>
              <a href="https://www.instagram.com/johiacubao" target="_blank" rel="noreferrer" className="text-[#E4405F]  hover:-translate-y-1 transition-all duration-300 drop-shadow-md" aria-label="Instagram">
                <IconBrandInstagram size={28} />
              </a>
              <a href="https://youtube.com/@JOHIA_Cubao" target="_blank" rel="noreferrer" className="text-[#FF0000]  hover:-translate-y-1 transition-all duration-300 drop-shadow-md" aria-label="YouTube">
                <IconBrandYoutube size={28} />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:text-right flex flex-col md:items-end">
            <h4 className="font-heading font-bold text-xl mb-6 text-white tracking-wide">Quick Links</h4>
            <nav className="flex flex-col space-y-4 font-sans text-gray-400 font-medium">
              <Link to="/" className="hover:text-brand-yellow hover:-translate-x-2 transition-all duration-300">Home</Link>
              <Link to="/programs" className="hover:text-brand-yellow hover:-translate-x-2 transition-all duration-300">Programs</Link>
              <Link to="/contact" className="hover:text-brand-yellow hover:-translate-x-2 transition-all duration-300">Contact</Link>
              <Link to="/give" className="hover:text-brand-yellow hover:-translate-x-2 transition-all duration-300">Brew with Us</Link>
            </nav>
            
            <a href="mailto:johiacubao.info@gmail.com" className="inline-flex items-center space-x-3 mt-10 text-brand-yellow hover:text-white transition-colors duration-300 group">
              <IconMail size={20} className="group-hover:-translate-y-1 transition-transform" />
              <span className="font-medium">johiacubao.info@gmail.com</span>
            </a>
            
            <a href="tel:270018356" className="inline-flex items-center space-x-3 mt-4 text-brand-yellow hover:text-white transition-colors duration-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span className="font-medium">270018356</span>
            </a>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400 font-sans">
          <p>© 2026 JOHIA - Cubao. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-brand-yellow transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-yellow transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
