import React from 'react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

export default function Button({ 
  children, 
  variant = 'solid', 
  className, 
  href, 
  onClick, 
  type = 'button',
  target 
}) {
  const baseStyles = "inline-flex items-center justify-center px-[28px] py-[14px] rounded-btn font-heading font-bold transition-all duration-300";
  
  const variants = {
    solid: "bg-background-dark text-text-light hover:bg-brand-yellow hover:text-text-dark",
    outline: "bg-transparent text-text-light border-2 border-text-light hover:bg-brand-yellow hover:text-text-dark hover:border-brand-yellow",
  };

  const combinedClassName = cn(baseStyles, variants[variant], className);

  if (href) {
    // If it's an external link
    if (href.startsWith('http') || target === '_blank') {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClassName}>
          {children}
        </a>
      );
    }
    // Internal link
    return (
      <Link to={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
