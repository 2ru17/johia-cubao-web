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

const lifeMinistries = [
  { 
    name: "Couples", 
    desc: "Strengthening marriages and families through Christ-centered guidance.", 
    color: "#ff0000", 
    image: "/images/ministries/ministry-couples-group.jpg",
    gallery: [
      "/images/ministries/ministry-couples-group.jpg",
      "/images/ministries/ministry-couples-celebration.jpg",
      "/images/ministries/ministry-couples-embrace.jpg",
      "/images/ministries/ministry-couples-game.jpg"
    ]
  },
  { 
    name: "Wildfire (Youth)", 
    desc: "Empowering the next generation to live boldly for Jesus.", 
    color: "#003314", 
    image: "/images/ministries/ministry-wildfire-youth.jpg",
    gallery: [
      "/images/ministries/ministry-wildfire-youth.jpg",
      "/images/ministries/ministry-wildfire-dance.jpg",
      "/images/ministries/ministry-wildfire-drummer.jpg",
      "/images/ministries/ministry-wildfire-guitarist.jpg",
      "/images/ministries/ministry-wildfire-recital.jpg"
    ]
  },
  { 
    name: "LinC (Young Adults)", 
    desc: "Life in Christ - Navigating career and faith together.", 
    color: "#E5B53B", 
    image: "/images/ministries/ministry-linc-logo.png",
    gallery: [
      "/images/ministries/ministry-linc-logo.png",
      "/images/ministries/ministry-linc-meeting-1.jpg",
      "/images/ministries/ministry-linc-meeting-2.jpg",
      "/images/ministries/ministry-linc-meeting-3.jpg"
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
              Ready to serve? There is always a place for you here.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* TRACK A: Demographics (Life Ministries) */}
      <LayoutGroup>
        <section id="ministries-demographics" className="relative pt-32 pb-32 overflow-hidden">
          
          {/* The vibrant paint stroke frame background */}
          <PaintFrameBackground />

          <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
            <AnimatedSection variant="fade" className="text-center mb-16 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg py-10 px-8 rounded-[2.5rem] w-full max-w-3xl shadow-xl border border-white/40 dark:border-white/10">
              <h2 className="text-5xl font-extrabold font-heading text-text-dark dark:text-text-light mb-6">Life Ministries</h2>
              <p className="text-gray-700 dark:text-gray-300 font-sans text-xl font-medium leading-relaxed">Do life together. Connect with people in the same season of life and grow spiritually in a close-knit community.</p>
            </AnimatedSection>

            <AnimatedSection variant="fade" className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16 w-full">
              {lifeMinistries.map((group, idx) => (
                <div 
                  key={group.name} 
                  className={`w-full h-full ${idx === 2 ? 'md:col-span-2 md:max-w-[480px] md:mx-auto' : ''}`}
                >
                  <TiltCard className="w-full h-full">
                    <div 
                      className="group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] h-full bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800"
                    >
                      {/* Top: Image Section (Clickable for Gallery) */}
                      <div 
                        className="relative w-full h-56 md:h-64 overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-pointer"
                        onClick={() => setActiveGallery(group)}
                      >
                        <motion.img 
                          src={group.image} 
                          alt={`${group.name} Ministry - JOHIA Cubao`} 
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
                      <div className="flex flex-col flex-grow p-6 md:p-8 bg-white dark:bg-neutral-900 relative z-10 border-t border-gray-100 dark:border-neutral-800">
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
                </div>
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

      {/* TRACK B: Volunteer Teams */}
      <section id="ministries-serve" className="bg-background-light dark:bg-background-dark relative">
        
        {/* Intro to Volunteer Teams */}
        <div className="py-24 text-center border-y border-gray-100 bg-white dark:bg-background-dark">
          <AnimatedSection variant="fade">
            <h2 className="text-5xl md:text-6xl font-extrabold font-heading text-text-dark dark:text-text-light mb-6">Volunteer Teams</h2>
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
            { name: "Worship Team", desc: "Musicians and vocalists leading the congregation in praise.", image: "/images/ministries/ministry-worship-team.jpg", color: "#550000" },
            { name: "Technicals", desc: "Sound engineers, lighting, and stage setup ensuring a distraction-free environment.", image: "/images/ministries/ministry-technicals-team.jpg", color: "#434343" },
            { name: "Creatives", desc: "Media, livestream, photography, and social media capturing the life of the church.", image: "/images/placeholder-team.jpg", color: "#ff9900" },
            { name: "Engineering", desc: "Facilities management, stage construction, and venue maintenance.", image: "/images/ministries/ministry-engineering-team.jpg", color: "#305cde" }
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
            { name: "Consolidation", desc: "Welcoming guests, helping others in finding their way to a new church family.", image: "/images/placeholder-team.jpg", color: "#FBB03B" },
            { name: "Marshalls", desc: "Ensuring safety, traffic control and a healthy worship environment.", image: "/images/placeholder-team.jpg", color: "#01153e" },
            { name: "Brews", desc: "In-house baristas to foster fellowship before and after service.", image: "/images/ministries/ministry-brews-team.jpg", color: "#6f4e37" },
            { name: "Ushers", desc: "Deliver a welcoming atmosphere, managing offerings and providing immediate help to worshippers.", image: "/images/ministries/ministry-ushers-team.jpg", color: "#fd3db5" }
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
            { name: "Sunday School", desc: "Translating the Sunday's preaching into a language that our kids will understand.", image: "/images/ministries/sundayschl.jpg", color: "#6633cc" },
            { name: "Prayer Warriors", desc: "Dedicated intercessors winning wars for our community and our nation.", image: "/images/ministries/ministry-prayer-warriors-team.jpg", color: "#ffd3ac" }
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
