import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import AnimatedSection from './AnimatedSection';

export default function InteractiveTeamSection({ 
  id, 
  title, 
  mainDescription,
  teams, // Array of { name, desc, image }
  reverse = false, 
  texture = 'none' 
}) {
  
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);

  const textureClass = 
    texture === 'dark' ? 'bg-texture-dark text-text-light' : 
    texture === 'light' ? 'bg-background-light dark:bg-background-dark bg-texture-light dark:bg-texture-dark text-text-dark dark:text-text-light' : 
    'bg-background-dark text-text-light';

  return (
    <section id={id} className={cn("flex items-center py-12 transition-colors duration-500", textureClass)}>
      <div className="container mx-auto px-6 w-full">
        <AnimatedSection variant={reverse ? "slide-right" : "slide-left"} className="w-full">
          <div className={cn(
            "flex flex-col gap-12 lg:gap-20 items-center w-full",
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          )}>
            
            {/* Image Side (Carousel) */}
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 relative group aspect-[4/3] bg-gray-900">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTeamIndex}
                  src={teams[activeTeamIndex].image}
                  alt={teams[activeTeamIndex].name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none flex items-end p-8">
                <motion.h4 
                  key={`title-${activeTeamIndex}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-3xl font-heading font-extrabold text-white drop-shadow-md"
                >
                  {teams[activeTeamIndex].name}
                </motion.h4>
              </div>
            </div>
            
            {/* Text Side (Accordion/List) */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-brand-yellow mb-8 tracking-tight drop-shadow-md">
                {title}
              </h2>
              <div className="font-sans text-lg md:text-xl leading-relaxed mb-8 opacity-90 transition-colors duration-500">
                {mainDescription}
              </div>
              
              <div className="flex flex-col space-y-4">
                {teams.map((team, idx) => {
                  const isActive = idx === activeTeamIndex;
                  return (
                    <div 
                      key={team.name}
                      onClick={() => setActiveTeamIndex(idx)}
                      className={cn(
                        "p-4 rounded-xl cursor-pointer transition-all duration-300 border",
                        isActive 
                          ? "bg-brand-yellow/10 border-brand-yellow shadow-[0_0_15px_rgba(251,176,59,0.2)]" 
                          : "border-transparent hover:bg-black/5 dark:hover:bg-white/5"
                      )}
                    >
                      <h4 className={cn(
                        "font-bold text-xl mb-1 transition-colors",
                        isActive ? "text-brand-yellow" : ""
                      )}>
                        {team.name}
                      </h4>
                      <p className="opacity-80 text-base">{team.desc}</p>
                    </div>
                  );
                })}
              </div>
              
            </div>
            
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
