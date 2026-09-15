import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Ministries', path: '/ministries' },
  { name: 'Give', path: '/give' },
  { name: 'Media', path: '/media' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="absolute top-0 w-full z-50 bg-transparent transition-all">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="z-50 relative flex items-center gap-2" onClick={closeMenu}>
          <img src="/images/general/Banner default home-white.svg" alt="JOHIA Cubao Logo" className="w-[86px] md:w-[275px] h-auto transition-all" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={cn(
                "font-sans text-sm font-semibold transition-all duration-300 hover:text-brand-yellow hover:-translate-y-0.5",
                location.pathname === link.path ? "text-brand-yellow" : "text-text-light"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-text-light z-50 relative focus:outline-none hover:text-brand-yellow transition-colors" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Nav Drawer */}
        <div className={cn(
          "fixed inset-0 bg-background-dark/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 transition-all duration-500 lg:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={closeMenu}
              className={cn(
                "font-heading font-extrabold text-3xl tracking-wider transition-all duration-300 hover:text-brand-yellow hover:scale-110",
                location.pathname === link.path ? "text-brand-yellow" : "text-text-light"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

      </div>
    </header>
  );
}
