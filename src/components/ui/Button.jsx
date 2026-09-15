import React, { useRef, useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

export default function Button({ 
  children, 
  variant = 'solid', 
  className, 
  href, 
  onClick, 
  type = 'button',
  target,
  disabled
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState([]);

  // Magnetic effect
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    // 0.2 is the magnetic strength
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  // Ripple effect
  const handleClick = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create new ripple
    const newRipple = {
      x,
      y,
      id: Date.now(),
    };
    
    setRipples((prev) => [...prev, newRipple]);
    
    if (onClick) onClick(e);
  };

  // Clean up ripples
  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples((prev) => prev.slice(1));
      }, 600); // match animation duration
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center px-[28px] py-[14px] rounded-btn font-heading font-bold transition-colors duration-300";
  
  const variants = {
    solid: "bg-background-dark dark:bg-white text-text-light dark:text-text-dark hover:bg-brand-yellow dark:hover:bg-brand-yellow hover:text-text-dark dark:hover:text-text-dark shadow-sm",
    outline: "bg-transparent text-text-dark dark:text-text-light border-2 border-text-dark dark:border-text-light hover:bg-brand-yellow dark:hover:bg-brand-yellow hover:text-text-dark dark:hover:text-text-dark hover:border-brand-yellow dark:hover:border-brand-yellow",
  };

  const combinedClassName = cn(baseStyles, variants[variant], className);

  const innerContent = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </>
  );

  const motionProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick,
    animate: { x: position.x, y: position.y },
    transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
    whileTap: { scale: 0.95 },
    className: combinedClassName
  };

  if (href) {
    if (href.startsWith('http') || target === '_blank') {
      return (
        <motion.a href={href} target="_blank" rel="noopener noreferrer" {...motionProps}>
          {innerContent}
        </motion.a>
      );
    }
    // Cannot directly wrap Link in motion if it doesn't forward ref properly,
    // but motion(Link) usually works in newer framer-motion.
    const MotionLink = motion(Link);
    return (
      <MotionLink to={href} {...motionProps}>
        {innerContent}
      </MotionLink>
    );
  }

  return (
    <motion.button type={type} disabled={disabled} {...motionProps}>
      {innerContent}
    </motion.button>
  );
}
