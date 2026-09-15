import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageMeta from '../components/seo/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import TiltCard from '../components/ui/TiltCard';
import { IconBrandYoutube, IconZoomIn, IconArrowRight } from '@tabler/icons-react';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Duplicated array to test scrolling heavily
const basePhotos = [
  { src: "/images/general/New Core values.png" },
  { src: "/images/general/retreat-pic.jpg" },
  { src: "/images/ministries/sundayschl.jpg" },
  { src: "/images/ministries/prayer.jpg" },
  { src: "/images/general/outside.png" },
  { src: "/images/general/CoreValues.png" },
];
const communityPhotos = [...basePhotos, ...basePhotos, ...basePhotos, ...basePhotos];

export default function Media() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark">
      <PageMeta title="Media" description="Watch our latest sermons and see life in community." />

      {/* Hero / Watch & Listen */}
      <section className="relative pt-40 pb-32 flex items-center justify-center overflow-hidden bg-aurora border-b border-white/5">
        <div className="absolute inset-0 bg-overlay-dark/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection variant="scale">
            <h1 className="text-fluid-h1 font-extrabold font-heading text-text-light mb-6 drop-shadow-md">
              Watch & Listen
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-sans font-medium max-w-3xl mx-auto drop-shadow-sm leading-relaxed mb-8">
              Catch up on the latest messages, worship moments, and inspiring stories from our community.
            </p>
            <Button variant="solid" href="https://youtube.com/@JOHIA_Cubao" target="_blank" className="!bg-[#FF0000] !text-white hover:!bg-white dark:hover:!bg-white hover:!text-[#FF0000] dark:hover:!text-[#FF0000] border-none inline-flex gap-2 shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all">
              <IconBrandYoutube /> Subscribe on YouTube
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Life in Community Masonry Gallery */}
      <SectionWrapper className="bg-background-light dark:bg-background-dark border-b border-gray-100 py-24">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-text-dark dark:text-text-light mb-4">Life in Community</h2>
          <p className="text-text-dark dark:text-text-light font-sans max-w-2xl mx-auto text-lg font-medium">
            A glimpse of our church family worshiping, serving, and doing life together.
          </p>
        </AnimatedSection>

        {/* Scrollable Container with Masonry Grid */}
        <AnimatedSection variant="rise" className="max-w-7xl mx-auto bg-white dark:bg-background-dark rounded-2xl p-6 md:p-10 border border-gray-200 shadow-sm">
          <div className="max-h-[700px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-brand-yellow scrollbar-track-gray-100">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {communityPhotos.map((photo, idx) => (
                <TiltCard key={idx} className="break-inside-avoid mb-6 w-full h-full block">
                  <div 
                    className="group relative overflow-hidden rounded-xl bg-gray-100 border border-gray-200 cursor-pointer hover:border-brand-yellow transition-all duration-300 shadow-sm hover:shadow-lg w-full h-full block"
                    onClick={() => setIndex(idx)}
                  >
                    <div className="absolute inset-0 bg-brand-yellow/0 group-hover:bg-brand-yellow/30 transition-colors duration-500 z-10 flex items-center justify-center pointer-events-none">
                      <IconZoomIn size={48} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100 drop-shadow-md" />
                    </div>
                    <img 
                      src={photo.src} 
                      alt={`Community ${idx + 1}`} 
                      className="w-full h-auto object-cover transform transition-transform duration-700 block" 
                      loading="lazy"
                    />
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={communityPhotos}
          className="z-[9999]"
        />
      </SectionWrapper>

    </div>
  );
}
