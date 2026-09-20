import React, { useState } from 'react';
import PageMeta from '../components/seo/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import InteractiveTeamSection from '../components/ui/InteractiveTeamSection';
import Button from '../components/ui/Button';
import TiltCard from '../components/ui/TiltCard';
import PaintFrameBackground from '../components/ui/PaintFrameBackground';
import ImageLightbox from '../components/ui/ImageLightbox';
import { motion, LayoutGroup } from 'framer-motion';

const lifeGroups = [
  { 
    name: "Couples", 
    desc: "Strengthening marriages and families through Christ-centered guidance.", 
    color: "#ff0000", 
    image: "/images/general/CoreValues.png",
    gallery: [
      "/images/general/CoreValues.png",
      "/images/general/retreat-pic.jpg",
      "/images/ministries/creatives.jpg"
    ]
  },
  { 
    name: "Wildfire (Youth)", 
    desc: "Empowering the next generation to live boldly for Jesus.", 
    color: "#003314", 
    image: "/images/general/retreat-pic.jpg",
    gallery: [
      "/images/general/retreat-pic.jpg",
      "/images/ministries/worship.jpg",
      "/images/general/outside.png"
    ]
  },
  { 
    name: "LinC (Young Adults)", 
    desc: "Life in Christ - Navigating career and faith together.", 
    color: "#E5B53B", 
    image: "/images/ministries/sundayschl.jpg",
    gallery: [
      "/images/ministries/sundayschl.jpg",
      "/images/ministries/tech.jpg",
      "/images/general/retreat-pic.jpg"
    ]
  },
  { 
    name: "YaH (Seniors)", 
    desc: "Young at Heart - Wisdom, fellowship, and continued purpose.", 
    color: "#008080", 
    image: "/images/general/outside.png",
    gallery: [
      "/images/general/outside.png",
      "/images/ministries/prayer.jpg",
      "/images/general/CoreValues.png"
    ]
  }
];

export default function Ministries() {
  const [activeGallery, setActiveGallery] = useState(null);

  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark overflow-x-hidden">
      <PageMeta title="Ministries" description="Find Your People. Find Your Purpose." />

      {/* Hero */}
      <section className="relative pt-40 pb-32 flex items-center justify-center overflow-hidden bg-aurora border-b border-white/5">
        <div className="absolute inset-0 bg-overlay-dark/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection variant="blur">
            <h1 className="text-fluid-h1 font-extrabold font-heading text-shimmer mb-6">
              Find Your People.<br/>
              <span className="text-shimmer">Find Your Purpose.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-sans font-medium max-w-3xl mx-auto drop-shadow-sm leading-relaxed mb-8">
              Whether you're looking for community or ready to serve, there is a place for you here.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* TRACK A: Demographics (Life Groups) */}
      <LayoutGroup>
        <section id="ministries-demographics" className="relative pt-32 pb-32 overflow-hidden">
          
          {/* The vibrant paint stroke frame background */}
          <PaintFrameBackground />

          <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
            <AnimatedSection variant="fade" className="text-center mb-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg py-10 px-8 rounded-[2.5rem] w-full max-w-3xl shadow-xl border border-white/40 dark:border-white/10">
              <h2 className="text-5xl font-extrabold font-heading text-text-dark dark:text-text-light mb-6">Life Groups</h2>
              <p className="text-gray-700 dark:text-gray-300 font-sans text-xl font-medium leading-relaxed">Do life together. Connect with people in the same season of life and grow spiritually in a close-knit community.</p>
            </AnimatedSection>

            <AnimatedSection variant="fade" className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16 w-full">
              {lifeGroups.map((group) => (
                <TiltCard key={group.name} className="w-full h-full">
                  <div 
                    className="group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] h-full bg-white dark:bg-black/60 dark:backdrop-blur-xl border border-gray-100 dark:border-white/10"
                  >
                    {/* Top: Image Section (Clickable for Gallery) */}
                    <div 
                      className="relative w-full h-56 md:h-64 overflow-hidden bg-gray-100 dark:bg-black/40 cursor-pointer"
                      onClick={() => setActiveGallery(group)}
                    >
                      <motion.img 
                        src={group.image} 
                        alt={group.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-110" 
                      />
                      
                      {/* View Gallery Overlay Hint */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="bg-white/90 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                          View Gallery
                        </span>
                      </div>
                    </div>
                    
                    {/* Bottom: Text Section */}
                    <div className="flex flex-col flex-grow p-6 md:p-8 bg-white dark:bg-gray-900 relative z-10 border-t border-gray-100 dark:border-gray-800">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-4 h-4 rounded-full shadow-sm" style={{ backgroundColor: group.color }}></span>
                        <h3 className="text-2xl md:text-3xl font-extrabold font-heading text-text-dark dark:text-white">
                          {group.name}
                        </h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 font-sans text-base md:text-lg font-medium leading-relaxed">{group.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </AnimatedSection>

            <div className="text-center relative z-20">
              <Button variant="solid" href="https://forms.google.com" target="_blank" className="transition-all shadow-xl px-12 py-5 text-xl bg-text-dark text-white hover:bg-black dark:bg-brand-yellow dark:text-text-dark dark:hover:bg-brand-yellow/90 rounded-full border-none">
                Join a Group
              </Button>
            </div>
          </div>
        </section>
        
        {/* Gallery Lightbox */}
        <ImageLightbox 
          isOpen={!!activeGallery} 
          images={activeGallery?.gallery || []} 
          onClose={() => setActiveGallery(null)} 
          layoutId={activeGallery ? `gallery-${activeGallery.name}` : null}
        />
      </LayoutGroup>

      {/* TRACK B: Service Teams */}
      <section id="ministries-serve" className="bg-background-light dark:bg-background-dark relative">
        
        {/* Intro to Service Teams */}
        <div className="py-24 text-center border-y border-gray-100 bg-white dark:bg-background-dark">
          <AnimatedSection variant="fade">
            <h2 className="text-5xl md:text-6xl font-extrabold font-heading text-text-dark dark:text-text-light mb-6">Service Teams</h2>
            <p className="text-gray-500 dark:text-gray-400 font-sans text-xl max-w-3xl mx-auto">
              Use your gifts to build the church. We have various volunteer teams that make Sunday worship and our weekly programs happen.
            </p>
          </AnimatedSection>
        </div>

        {/* Group 1: Worship & Tech */}
        <InteractiveTeamSection 
          id="team-worship-tech"
          title="Worship & Tech Arts"
          mainDescription="Lead the congregation in powerful encounters with God through music, media, and technical excellence."
          teams={[
            { name: "Worship Team", desc: "Musicians and vocalists leading the congregation in praise.", image: "/images/ministries/worship.jpg", color: "#550000" },
            { name: "Technicals", desc: "Sound engineers, lighting, and stage setup ensuring a distraction-free environment.", image: "/images/ministries/tech.jpg", color: "#434343" },
            { name: "Creatives", desc: "Media, livestream, photography, and social media capturing the life of the church.", image: "/images/ministries/creatives.jpg", color: "#ff9900" },
            { name: "Engineering", desc: "Facilities management, stage construction, and venue maintenance.", image: "/images/placeholder-ministry.png", color: "#305cde" }
          ]}
          reverse={false}
          texture="light"
        />

        {/* Group 2: Hospitality & Care */}
        <InteractiveTeamSection 
          id="team-hospitality"
          title="Hospitality & Care"
          mainDescription="Be the welcoming hands and feet of Jesus. Ensure every person who walks through our doors feels at home and safe."
          teams={[
            { name: "Consolidation", desc: "Welcoming guests, distributing materials, and assisting with seating.", image: "/images/general/outside.png", color: "#FBB03B" },
            { name: "Marshalls", desc: "Providing security, traffic control, and ensuring a safe worship environment.", image: "/images/placeholder-ministry.png", color: "#01153e" },
            { name: "Brews", desc: "Serving coffee and refreshments to foster fellowship before and after service.", image: "/images/general/retreat-pic.jpg", color: "#6f4e37" },
            { name: "Ushers", desc: "Assisting attendees, managing offerings, and maintaining order.", image: "/images/placeholder-ministry.png", color: "#fd3db5" }
          ]}
          reverse={true}
          texture="light"
        />

        {/* Group 3: Next Gen & Prayer */}
        <InteractiveTeamSection 
          id="team-foundation"
          title="Foundations"
          mainDescription="Build the spiritual backbone of our church by investing in the next generation and waging war in the spiritual realm."
          teams={[
            { name: "Sunday School", desc: "Teaching and caring for children, laying a strong biblical foundation.", image: "/images/ministries/sundayschl.jpg", color: "#6633cc" },
            { name: "Prayer Warriors", desc: "Dedicated intercessors standing in the gap for the church and community.", image: "/images/ministries/prayer.jpg", color: "#ffd3ac" }
          ]}
          reverse={false}
          texture="light"
        />

        {/* Consolidated Apply Button */}
        <div className="py-24 text-center bg-white dark:bg-background-dark border-t border-gray-100">
           <AnimatedSection variant="fade">
              <h3 className="text-3xl font-heading font-extrabold text-text-dark dark:text-text-light mb-8">Ready to serve the Lord?</h3>
              <Button variant="solid" href="https://forms.google.com" target="_blank" className="px-12 py-5 text-xl shadow-md transition-all">
                Learn More
              </Button>
           </AnimatedSection>
        </div>

      </section>
    </div>
  );
}
