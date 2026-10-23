import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconDeviceLaptop, IconPalette } from '@tabler/icons-react';
import { cn } from '../../lib/utils';
import AnimatedSection from './AnimatedSection';

// Convert hex to rgb string for rgba
function hexToRgb(hex) {
  if (!hex) return '251, 176, 59'; // Default Brand Yellow
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 
    `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` 
    : '251, 176, 59';
}

export default function InteractiveTeamSection({ 
  id, 
  title, 
  mainDescription,
  teams, // Array of { name, desc, image, color }
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
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 relative group aspect-[4/3] bg-neutral-900">
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

              {/* Floating Portal Badge on Image */}
              {teams[activeTeamIndex].portal && (
                <div className="absolute top-4 right-4 z-20">
                  {teams[activeTeamIndex].portal.type === 'tech' ? (
                    <a
                      href={teams[activeTeamIndex].portal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F7B519] hover:bg-[#FACC15] text-[#121212] border-2 border-[#121212] shadow-[3px_3px_0px_#F5F5F0] font-mono text-xs font-black uppercase tracking-wider transition-all duration-150 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
                    >
                      <IconDeviceLaptop size={15} stroke={2.5} className="shrink-0" />
                      <span>tech.johiacubao.com</span>
                      <span className="font-bold">↗</span>
                    </a>
                  ) : (
                    <a
                      href={teams[activeTeamIndex].portal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FAF7F2]/95 hover:bg-white text-[#121316] border border-[#121316]/30 rounded-full shadow-[2px_2px_0px_rgba(18,19,22,0.2)] hover:shadow-[3px_3px_0px_rgba(18,19,22,0.3)] font-mono text-xs font-bold tracking-tight transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
                    >
                      <IconPalette size={15} stroke={2} className="text-[#FF5A1F] shrink-0" />
                      <span>creatives.johiacubao.com</span>
                      <span className="hidden sm:inline-flex items-center gap-1 pl-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]"></span>
                      </span>
                      <span className="text-[#121316]/70">↗</span>
                    </a>
                  )}
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent group-hover:from-black/40 transition-colors duration-500 z-10 pointer-events-none flex items-end p-8">
                <motion.h4 
                  key={`title-${activeTeamIndex}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-3xl font-heading font-extrabold text-white drop-shadow-md"
                  style={{ color: teams[activeTeamIndex].color || '#FBB03B' }}
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
                  const teamColor = team.color || '#FBB03B';
                  const rgb = hexToRgb(teamColor);
                  
                  return (
                    <div 
                      key={team.name}
                      onClick={() => setActiveTeamIndex(idx)}
                      className={cn(
                        "p-4 rounded-xl cursor-pointer transition-all duration-300 border-l-4",
                        isActive 
                          ? "border-transparent" 
                          : "border-transparent hover:bg-black/5 dark:hover:bg-white/5"
                      )}
                      style={isActive ? { 
                        backgroundColor: `rgba(${rgb}, 0.1)`, 
                        borderLeftColor: teamColor,
                        boxShadow: `0 4px 20px rgba(${rgb}, 0.15)`
                      } : { borderLeftColor: 'transparent' }}
                    >
                      <h4 className={cn(
                        "font-bold text-xl mb-1 transition-colors",
                        isActive ? "text-brand-yellow" : ""
                      )}>
                        {team.name}
                      </h4>
                      <p className="opacity-80 text-base">{team.desc}</p>

                      {/* Personalized External Portal Link */}
                      {isActive && team.portal && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25 }}
                          className="pt-3"
                        >
                          {team.portal.type === 'tech' ? (
                            <div className="flex items-center gap-2">
                              <a
                                href={team.portal.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="group/portal inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F7B519] hover:bg-[#FACC15] text-[#121212] border-2 border-[#121212] shadow-[3px_3px_0px_#F5F5F0] dark:shadow-[3px_3px_0px_#F5F5F0] font-mono text-xs font-black uppercase tracking-wider transition-all duration-150 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
                              >
                                <span className="bg-[#121212] text-[#F7B519] px-1 py-0.2 text-[9px] font-mono font-black">
                                  HUD
                                </span>
                                <span>{team.portal.label}</span>
                                <span className="font-bold">↗</span>
                              </a>
                              <a
                                href={team.portal.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                title="Technicals Live Booth (tech.johiacubao.com)"
                                aria-label="Technicals Live Booth"
                                className="inline-flex items-center justify-center w-8 h-8 bg-[#F5F5F0] dark:bg-[#121212] text-[#121212] dark:text-[#F7B519] border-2 border-[#121212] dark:border-[#F7B519]/70 shadow-[2px_2px_0px_#121212] dark:shadow-[2px_2px_0px_#F5F5F0] transition-all duration-150 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 hover:bg-[#F7B519] hover:text-[#121212]"
                              >
                                <IconDeviceLaptop size={17} stroke={2.4} />
                              </a>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <a
                                href={team.portal.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="group/portal inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FAF7F2] hover:bg-white text-[#121316] border border-[#121316]/30 rounded-md shadow-[3px_3px_0px_rgba(18,19,22,0.18)] hover:shadow-[4px_4px_0px_rgba(18,19,22,0.25)] transition-all duration-200 hover:-translate-y-0.5"
                              >
                                <span className="inline-flex items-center gap-1 font-mono text-[9px] font-bold text-[#121316] bg-white border border-[#121316]/20 px-1 py-0.2 rounded-xs uppercase">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]"></span>
                                  FIG. 01
                                </span>
                                <span className="font-sans text-xs font-black tracking-tight text-[#121316]">
                                  {team.portal.label}
                                </span>
                                <div className="hidden sm:flex items-center gap-1 pl-1 border-l border-[#121316]/15">
                                  <span className="w-2 h-2 rounded-full bg-[#FF5A1F]"></span>
                                  <span className="w-2 h-2 rounded-full bg-[#EC4899]"></span>
                                  <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
                                  <span className="w-2 h-2 rounded-full bg-[#FACC15]"></span>
                                  <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span>
                                </div>
                                <span className="font-mono text-xs font-bold text-[#FF5A1F]">↗</span>
                              </a>
                              <a
                                href={team.portal.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                title="Creatives Studio (creatives.johiacubao.com)"
                                aria-label="Creatives Studio"
                                className="inline-flex items-center justify-center w-8 h-8 bg-[#FAF7F2] dark:bg-[#121316] text-[#FF5A1F] border border-[#121316]/30 dark:border-[#FAF7F2]/30 rounded-md shadow-[2px_2px_0px_rgba(18,19,22,0.18)] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 hover:bg-white"
                              >
                                <IconPalette size={17} stroke={2} />
                              </a>
                            </div>
                          )}
                        </motion.div>
                      )}
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
