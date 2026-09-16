import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTheme } from '../ui/ThemeProvider';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Ministries', path: '/ministries' },
  { name: 'Support Us', path: '/give' },
  { 
    name: 'Media', 
    path: '/media',
    subLinks: [
      { name: 'Posts', path: '/posts' }
    ]
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const { theme, toggleTheme } = useTheme();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // Check if scrolled past top
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide logic
    if (latest > 150 && latest > previous) {
      setHidden(true); // scrolling down
    } else {
      setHidden(false); // scrolling up
    }
  });

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled 
          ? "bg-black/60 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/[0.06]" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="z-50 relative flex items-center gap-2" onClick={closeMenu}>
          <img src="/images/general/banner-white.svg" alt="JOHIA Cubao Logo" className="w-[86px] md:w-[220px] h-auto transition-all" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link 
                to={link.path}
                className={cn(
                  "font-sans text-sm font-semibold transition-all duration-300 hover:text-brand-yellow hover:-translate-y-0.5 flex items-center gap-1",
                  location.pathname === link.path ? "text-brand-yellow" : "text-text-light"
                )}
              >
                {link.name}
                {link.subLinks && <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-300" />}
              </Link>
              
              {/* Dropdown */}
              {link.subLinks && (
                <div className="absolute left-0 top-full pt-4 w-40 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-black/70 backdrop-blur-xl rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] flex flex-col py-2 border border-white/[0.08] overflow-hidden">
                    {link.subLinks.map(sub => (
                      <Link key={sub.name} to={sub.path} className="px-5 py-3 text-sm text-gray-300 hover:bg-brand-yellow/10 hover:text-brand-yellow transition-colors font-sans font-medium">
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <button onClick={toggleTheme} className="text-text-light hover:text-brand-yellow transition-colors p-2 rounded-full hover:bg-white/10">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Toggle & Theme */}
        <div className="flex items-center gap-4 lg:hidden z-50 relative">
          <button onClick={toggleTheme} className="text-text-light hover:text-brand-yellow transition-colors p-2">
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button 
            className="focus:outline-none transition-colors" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} className="text-text-dark dark:text-text-light dark:text-white" /> : <Menu size={32} className="text-text-light hover:text-brand-yellow" />}
          </button>
        </div>

        {/* Mobile Overlay */}
        <div 
          className={cn(
            "fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 lg:hidden",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          onClick={closeMenu}
        ></div>

        {/* Mobile Nav Slide-out Drawer */}
        <div className={cn(
          "fixed top-0 right-0 h-[100vh] w-[80%] max-w-sm bg-white dark:bg-background-dark shadow-2xl z-40 flex flex-col pt-32 px-10 space-y-6 transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col border-b border-gray-100 pb-4">
              <Link 
                to={link.path}
                onClick={closeMenu}
                className={cn(
                  "font-heading font-extrabold text-2xl tracking-wide transition-all duration-300 hover:text-brand-yellow",
                  location.pathname === link.path ? "text-brand-yellow" : "text-text-dark dark:text-text-light"
                )}
              >
                {link.name}
              </Link>
              {link.subLinks && (
                <div className="flex flex-col pl-4 mt-4 space-y-4 border-l-2 border-brand-yellow">
                  {link.subLinks.map(sub => (
                    <Link key={sub.name} to={sub.path} onClick={closeMenu} className="font-heading font-bold text-lg text-gray-500 dark:text-gray-400 hover:text-brand-yellow transition-colors">
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </motion.header>
  );
}
