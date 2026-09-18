import React, { useState } from 'react';
import PageMeta from '../components/seo/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import TiltCard from '../components/ui/TiltCard';
import { IconBrandYoutube, IconZoomIn, IconBrandInstagram, IconHeartFilled, IconMessageCircleFilled } from '@tabler/icons-react';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Photos with assigned categories
const basePhotos = [
  { src: "/images/general/New Core values.png", category: "Events" },
  { src: "/images/general/retreat-pic.jpg", category: "Youth" },
  { src: "/images/ministries/sundayschl.jpg", category: "Sundays" },
  { src: "/images/ministries/prayer.jpg", category: "Events" },
  { src: "/images/general/outside.png", category: "Sundays" },
  { src: "/images/general/CoreValues.png", category: "Youth" },
];
// Dedicated array for the simulated Instagram feed (9 posts)
const igPhotos = [
  { src: "/images/general/New Core values.png", link: "https://www.instagram.com/johiacubao" },
  { src: "/images/general/retreat-pic.jpg", link: "https://www.instagram.com/johiacubao" },
  { src: "/images/ministries/sundayschl.jpg", link: "https://www.instagram.com/johiacubao" },
  { src: "/images/ministries/prayer.jpg", link: "https://www.instagram.com/johiacubao" },
  { src: "/images/general/outside.png", link: "https://www.instagram.com/johiacubao" },
  { src: "/images/general/CoreValues.png", link: "https://www.instagram.com/johiacubao" },
  { src: "/images/general/retreat-pic.jpg", link: "https://www.instagram.com/johiacubao" },
  { src: "/images/ministries/sundayschl.jpg", link: "https://www.instagram.com/johiacubao" },
  { src: "/images/ministries/prayer.jpg", link: "https://www.instagram.com/johiacubao" },
];

// Duplicated for masonry effect
const communityPhotos = [...basePhotos, ...basePhotos, ...basePhotos, ...basePhotos];

const categories = ['All', 'Sundays', 'Youth', 'Events'];

export default function Media() {
  const [index, setIndex] = useState(-1);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPhotos = activeCategory === 'All' 
    ? communityPhotos 
    : communityPhotos.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark">
      <PageMeta title="Media" description="Watch our latest sermons and see life in community." />

      {/* Hero / Watch & Listen */}
      <section className="relative pt-40 pb-32 flex items-center justify-center overflow-hidden bg-aurora border-b border-white/5">
        <div className="absolute inset-0 bg-overlay-dark/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection variant="scale">
            <h1 className="text-fluid-h1 font-extrabold font-heading text-shimmer mb-6">
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

      {/* Instagram Feed Section */}
      <section className="py-24 bg-white dark:bg-background-dark border-b border-gray-100 dark:border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-text-dark dark:text-text-light mb-4 flex items-center gap-3">
                  <IconBrandInstagram size={40} className="text-pink-500" />
                  Stay Connected
                </h2>
                <p className="text-gray-500 font-medium text-lg">Follow us <a href="https://instagram.com/johiacubao" target="_blank" rel="noreferrer" className="text-brand-yellow hover:underline">@JOHIA_Cubao</a> for daily encouragement and updates.</p>
              </div>
              <Button href="https://instagram.com/johiacubao" target="_blank" className="inline-flex gap-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white border-none shadow-md hover:shadow-lg hover:scale-105 transition-all">
                <IconBrandInstagram size={20} /> Follow on Instagram
              </Button>
            </div>
            
            {/* Instagram 3x3 Grid */}
            <div className="grid grid-cols-3 gap-1 md:gap-4">
              {igPhotos.map((post, i) => (
                <a key={i} href={post.link} target="_blank" rel="noreferrer" className="group relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img src={post.src} alt={`Instagram post ${i+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex items-center gap-6 text-white font-bold text-lg">
                      <span className="flex items-center gap-2"><IconHeartFilled size={24} /> {Math.floor(Math.random() * 50) + 10}</span>
                      <span className="flex items-center gap-2"><IconMessageCircleFilled size={24} /> {Math.floor(Math.random() * 10) + 1}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Categorized Life in Community Masonry Gallery */}
      <SectionWrapper className="bg-background-light dark:bg-background-dark border-b border-gray-100 py-24">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-text-dark dark:text-text-light mb-4">Life in Community</h2>
          <p className="text-text-dark dark:text-text-light font-sans max-w-2xl mx-auto text-lg font-medium">
            A glimpse of our church family worshiping, serving, and doing life together.
          </p>
        </AnimatedSection>

        <AnimatedSection className="max-w-7xl mx-auto px-6 mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all shadow-sm ${
                  activeCategory === category 
                    ? 'bg-brand-yellow text-text-dark' 
                    : 'bg-white dark:bg-gray-800 text-gray-500 hover:text-brand-yellow border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Scrollable Container with Masonry Grid */}
        <AnimatedSection variant="rise" className="max-w-7xl mx-auto bg-white dark:bg-background-dark rounded-2xl p-6 md:p-10 border border-gray-200 shadow-sm">
          <div className="max-h-[700px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-brand-yellow scrollbar-track-gray-100">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {filteredPhotos.map((photo, idx) => (
                <TiltCard key={`${activeCategory}-${idx}`} className="break-inside-avoid mb-6 w-full h-full block">
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
            {filteredPhotos.length === 0 && (
              <div className="py-20 text-center text-gray-500">
                No photos found in this category.
              </div>
            )}
          </div>
        </AnimatedSection>

        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={filteredPhotos}
          className="z-[9999]"
        />
      </SectionWrapper>

    </div>
  );
}
