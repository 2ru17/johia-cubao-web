import React from 'react';
import { cn } from '../../lib/utils';
import AnimatedSection from './AnimatedSection';

export default function ZLayoutSection({ 
  id, 
  title, 
  badge,
  description, 
  imageSrc, 
  imageAlt, 
  reverse = false, 
  className,
  texture = 'none', // 'dark', 'light', 'none'
  actionButton = null,
  imageClassName = 'object-center'
}) {
  
  // Map texture prop to the global CSS classes we created in Phase 1
  const textureClass = 
    texture === 'dark' ? 'bg-texture-dark' : 
    texture === 'light' ? 'bg-background-light dark:bg-background-dark bg-texture-light dark:bg-texture-dark' : 
    'bg-background-dark';

  return (
    <section id={id} className={cn("flex items-center py-12", textureClass, className)}>
      <div className="container mx-auto px-6 w-full">
        <AnimatedSection variant={reverse ? "slide-right" : "slide-left"} className="w-full">
          <div className={cn(
            "flex flex-col gap-12 lg:gap-20 items-center w-full",
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          )}>
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 relative group">
              <div className="absolute inset-0 bg-overlay-dark/40 group-hover:bg-overlay-dark/10 transition-colors duration-500 z-10 pointer-events-none"></div>
              <img 
                src={imageSrc} 
                alt={imageAlt} 
                className={cn("w-full h-full object-cover aspect-[4/3] grayscale-[50%] group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700", imageClassName)} 
              />
            </div>
            
            {/* Text Side - Left aligned text per reference */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
              {badge && (
                <div className="mb-4">
                  <span className="inline-flex items-center px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/30">
                    {badge}
                  </span>
                </div>
              )}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-brand-yellow mb-6 md:mb-8 tracking-tight">
                {title}
              </h2>
              <div className={cn("font-sans text-lg md:text-xl leading-relaxed space-y-6", 
                texture === 'light' ? 'text-gray-600 dark:text-gray-300' : 'text-gray-300'
              )}>
                {description}
              </div>
              {actionButton && (
                <div className="mt-10">
                  {actionButton}
                </div>
              )}
            </div>
            
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
