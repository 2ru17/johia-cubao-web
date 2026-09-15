import React, { useState } from 'react';
import PageMeta from '../components/seo/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import { IconBrandYoutube, IconZoomIn } from '@tabler/icons-react';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const communityPhotos = [
  { src: "/images/general/New Core values.png" },
  { src: "/images/general/retreat-pic.jpg" },
  { src: "/images/ministries/sundayschl.jpg" },
  { src: "/images/ministries/prayer.jpg" },
  { src: "/images/general/outside.png" },
  { src: "/images/general/CoreValues.png" },
];

export default function Media() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="flex flex-col w-full bg-background-light">
      <PageMeta title="Media" description="Watch our latest sermons and see life in community." />

      {/* Hero / Watch & Listen */}
      <section className="relative pt-40 pb-32 flex items-center justify-center overflow-hidden bg-aurora border-b border-white/5">
        <div className="absolute inset-0 bg-overlay-dark/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection variant="scale">
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading text-shimmer mb-6 drop-shadow-md">
              Watch & Listen
            </h1>
            <p className="text-xl text-gray-300 font-sans max-w-2xl mx-auto mb-10 drop-shadow-sm">
              Catch up on the latest messages, worship moments, and inspiring stories from our community.
            </p>
            <Button variant="solid" href="https://youtube.com/@JOHIA_Cubao" target="_blank" className="bg-[#FF0000] text-white hover:bg-white hover:text-[#FF0000] border-none inline-flex gap-2 shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:scale-105 transition-all">
              <IconBrandYoutube /> Subscribe on YouTube
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Life in Community Masonry Gallery */}
      <SectionWrapper className="bg-texture-dark border-t border-white/5 py-24">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-brand-yellow mb-4 drop-shadow-md">Life in Community</h2>
          <p className="text-gray-300 font-sans max-w-2xl mx-auto text-lg drop-shadow-sm">
            A glimpse of our church family worshiping, serving, and doing life together.
          </p>
        </AnimatedSection>

        {/* Scrollable Container with Masonry Grid */}
        <AnimatedSection variant="rise" className="max-w-7xl mx-auto bg-black/20 rounded-[30px] p-6 md:p-10 border border-white/10 shadow-inner">
          <div className="max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-brand-yellow/50 scrollbar-track-white/5">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {communityPhotos.map((photo, idx) => (
                <div 
                  key={idx} 
                  className="group relative overflow-hidden rounded-[20px] bg-gray-900 border border-white/5 cursor-pointer hover:border-brand-yellow/50 transition-all duration-300 break-inside-avoid shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_40px_rgba(251,176,59,0.2)] hover:-translate-y-1"
                  onClick={() => setIndex(idx)}
                >
                  {/* Removed grayscale, added dynamic overlay */}
                  <div className="absolute inset-0 bg-brand-yellow/0 group-hover:bg-brand-yellow/20 transition-colors duration-500 z-10 flex items-center justify-center">
                    <IconZoomIn size={48} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100 drop-shadow-lg" />
                  </div>
                  <img 
                    src={photo.src} 
                    alt={`Community ${idx + 1}`} 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy"
                  />
                </div>
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
