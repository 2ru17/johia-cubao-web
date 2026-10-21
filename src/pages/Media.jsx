import React, { useState } from 'react';
import PageMeta from '../components/seo/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import TiltCard from '../components/ui/TiltCard';
import { IconBrandYoutube, IconZoomIn, IconBrandInstagram, IconBrandFacebook, IconBrandTiktok } from '@tabler/icons-react';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Photos with assigned categories (50 curated items)
const communityPhotos = [
  // Sundays (16)
  { src: "/images/gallery/service-congregation-listening.jpg", category: "Sundays", alt: "Congregation Seated and Listening Attentively to Sunday Preaching" },
  { src: "/images/gallery/worship-leader-solo-stage.jpg", category: "Sundays", alt: "Worship Leader Ministering with Passion on Stage" },
  { src: "/images/gallery/preaching-pastor-chips.jpg", category: "Sundays", alt: "Pastor Chips Preaching God's Word" },
  { src: "/images/gallery/worship-service-atmosphere.jpg", category: "Sundays", alt: "Worship Service Sanctuary Atmosphere and Lighting" },
  { src: "/images/gallery/friday-alive-acoustic-worship.jpg", category: "Sundays", alt: "Friday Alive Acoustic Worship Night Gathering" },
  { src: "/images/gallery/preaching-pastor-ken.jpg", category: "Sundays", alt: "Pastor Ken Preaching to the Church Congregation" },
  { src: "/images/gallery/service-personal-worship-moment.jpg", category: "Sundays", alt: "Personal Prayer and Worship Moment during Sunday Service" },
  { src: "/images/gallery/preaching-pastor-docdek.jpg", category: "Sundays", alt: "Pastor Docdek Sharing God's Word" },
  { src: "/images/gallery/service-holy-communion.jpg", category: "Sundays", alt: "Solemn Observation of Holy Communion during Worship" },
  { src: "/images/gallery/service-congregation-worship-moment.jpg", category: "Sundays", alt: "Worshipper in Reverent Prayer and Praise during Sunday Gathering" },
  { src: "/images/gallery/service-sanctuary-wide.jpg", category: "Sundays", alt: "Wide View of JOHIA Sanctuary During Sunday Worship Gathering" },
  { src: "/images/gallery/service-preaching-pastor-arken.jpg", category: "Sundays", alt: "Pastor Arken Sharing Scripture from the Sanctuary Pulpit" },
  { src: "/images/gallery/service-preaching-pulpit.jpg", category: "Sundays", alt: "Sunday Exhortation Delivered from the Sanctuary Pulpit" },
  { src: "/images/gallery/preaching-pastor-jess.jpg", category: "Sundays", alt: "Pastor Jess Leading Couples Discipleship and Discussion" },
  { src: "/images/gallery/service-preaching-pastor-jun.jpg", category: "Sundays", alt: "Pastor Jun Inspiring the Church with Biblical Message" },
  { src: "/images/gallery/service-preaching-pastor-marc.jpg", category: "Sundays", alt: "Pastor Marc Sharing Powerful Scriptural Exhortation" },

  // Community (18)
  { src: "/images/gallery/community-outreach-service-1.jpg", category: "Community", alt: "JOHIA Community Outreach Ministry Volunteers Serving the Neighborhood" },
  { src: "/images/gallery/community-outreach-service-2.jpg", category: "Community", alt: "Community Outreach Fellowship and Care Distribution" },
  { src: "/images/community/community-outreach-bjmp-worship.jpg", category: "Community", alt: "Outreach Ministry Praise and Worship Gathering" },
  { src: "/images/community/community-outreach-bjmp-team.jpg", category: "Community", alt: "JOHIA Outreach Ministry Volunteers and Leaders" },
  { src: "/images/gallery/church-community-couples-celebration.jpg", category: "Community", alt: "JOHIA Couples and Church Family Fellowship Stage Celebration" },
  { src: "/images/leadership/leaders-council-stage.jpg", category: "Community", alt: "JOHIA Church Leadership Council on Stage" },
  { src: "/images/leadership/leaders-council-wacky.jpg", category: "Community", alt: "Leadership Team Joyful Fellowship Gathering" },
  { src: "/images/gallery/community-congregation-smiles.jpg", category: "Community", alt: "Church Congregation Members Sharing Joyful Smiles" },
  { src: "/images/gallery/community-prayer-embrace.jpg", category: "Community", alt: "Congregation Members Praying and Embracing in Fellowship" },
  { src: "/images/gallery/community-brews-fellowship.jpg", category: "Community", alt: "JOHIA Brews Fellowship and Ministry Service" },
  { src: "/images/gallery/programs-soc-cohort.jpg", category: "Community", alt: "School of Champions Discipleship Cohort" },
  { src: "/images/gallery/community-couples-gathering.jpg", category: "Community", alt: "Couples Ministry Fellowship Gathering" },
  { src: "/images/gallery/community-fathers-blessing-line.jpg", category: "Community", alt: "Fathers Blessing Line During Sunday Service" },
  { src: "/images/gallery/community-kids-peace-smiles.jpg", category: "Community", alt: "Sunday School Teacher and Child Sharing Smiles" },
  { src: "/images/gallery/community-youth-fellowship-table.jpg", category: "Community", alt: "Youth and Children Fellowship Gathering" },
  { src: "/images/gallery/community-outreach-new-1.jpg", category: "Community", alt: "Community Outreach Volunteer Team Serving Food and Hope" },
  { src: "/images/gallery/community-discipleship-smallgroup.jpg", category: "Community", alt: "Discipleship Small Group Study and Heartfelt Discussion" },
  { src: "/images/gallery/community-kids-sunday-school.jpg", category: "Community", alt: "Children Joyfully Participating in Sunday School Activities" },

  // Events (16)
  { src: "/images/gallery/kids-presentation-linggo-ng-wika.jpg", category: "Events", alt: "Sunday School Children Cultural Presentation" },
  { src: "/images/gallery/kids-presentation-salamat.jpg", category: "Events", alt: "Kids Pasasalamat Stage Presentation" },
  { src: "/images/gallery/event-recital-church-family-stage.jpg", category: "Events", alt: "Church Family Recital on Sanctuary Stage" },
  { src: "/images/gallery/event-live-worship-stage.jpg", category: "Events", alt: "Live Worship Band Leading Congregation in Praise" },
  { src: "/images/gallery/event-altar-call-prayer.jpg", category: "Events", alt: "Altar Call and Corporate Intercessory Prayer" },
  { src: "/images/gallery/event-ushers-ministry-team.jpg", category: "Events", alt: "Ushering Ministry Team Serving during Event" },
  { src: "/images/gallery/service-congregation-prayer.jpg", category: "Events", alt: "Congregational United Prayer Gathering" },
  { src: "/images/gallery/programs-retreat-water-baptism-2.jpg", category: "Events", alt: "Life Retreat Water Baptism Ceremony" },
  { src: "/images/gallery/event-guitar-recital-1.jpg", category: "Events", alt: "Youth Guitar Recital Performance on Stage" },
  { src: "/images/gallery/event-guitar-recital-2.jpg", category: "Events", alt: "Guitar Recital Ensemble Musical Presentation" },
  { src: "/images/gallery/event-guitar-workshop-1.jpg", category: "Events", alt: "Music Workshop Training for Young Instrumentalists" },
  { src: "/images/gallery/event-guitar-workshop-2.jpg", category: "Events", alt: "Hands-On Guitar Workshop Teaching Session" },
  { src: "/images/gallery/event-voice-recital-1.jpg", category: "Events", alt: "Vocal Recital Solo Performance in the Sanctuary" },
  { src: "/images/gallery/event-wildfire-youth-stage.jpg", category: "Events", alt: "Wildfire Youth Fellowship Stage Event and Praise Gathering" },
  { src: "/images/gallery/programs-soc-book2-graduates.jpg", category: "Events", alt: "School of Champions Book 2 Graduation Celebration" },
  { src: "/images/gallery/programs-retreat-water-baptism.jpg", category: "Events", alt: "Candidate Baptism in the Lake during Life Retreat" },
];

const categories = ['All', 'Sundays', 'Community', 'Events'];

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
                      alt={photo.alt || `JOHIA Cubao Community Photo ${idx + 1}`} 
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

      {/* SECTION 2: SOCIAL MEDIA / STAY CONNECTED */}
      <section className="bg-white dark:bg-[#111] py-24 relative overflow-hidden border-b border-gray-100 dark:border-white/5">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection variant="fade" className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-text-dark dark:text-text-light mb-4">
                Stay Connected
              </h2>
              <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">Follow us on our official social media channels for daily encouragement, live updates, and community news.</p>
            </div>
            
            {/* First Row: 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 max-w-5xl mx-auto">
              {/* Facebook Card - Main */}
              <a href="https://facebook.com/johiacubaoph" target="_blank" rel="noopener noreferrer" className="group block bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-3xl p-6 hover:shadow-2xl hover:border-[#1877F2]/50 transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="mx-auto w-16 h-16 bg-[#1877F2]/10 rounded-full flex items-center justify-center text-[#1877F2] mb-4 group-hover:bg-[#1877F2] group-hover:text-white transition-colors duration-300">
                  <IconBrandFacebook size={32} />
                </div>
                <h3 className="text-xl font-bold font-heading text-text-dark dark:text-text-light mb-1 group-hover:text-[#1877F2] transition-colors">JOHIA Cubao</h3>
                <p className="text-gray-500 mb-4 font-medium text-sm">Main FB Page</p>
                <span className="inline-flex font-bold text-[#1877F2] group-hover:underline text-sm">Follow @johiacubaoph</span>
              </a>

              {/* Instagram Card */}
              <a href="https://www.instagram.com/johiacubao" target="_blank" rel="noopener noreferrer" className="group block bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-3xl p-6 hover:shadow-2xl hover:border-[#E4405F]/50 transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="mx-auto w-16 h-16 bg-[#E4405F]/10 rounded-full flex items-center justify-center text-[#E4405F] mb-4 group-hover:bg-[#E4405F] group-hover:text-white transition-colors duration-300">
                  <IconBrandInstagram size={32} />
                </div>
                <h3 className="text-xl font-bold font-heading text-text-dark dark:text-text-light mb-1 group-hover:text-[#E4405F] transition-colors">Instagram</h3>
                <p className="text-gray-500 mb-4 font-medium text-sm">Photos and stories</p>
                <span className="inline-flex font-bold text-[#E4405F] group-hover:underline text-sm">Follow @JOHIA_Cubao</span>
              </a>

              {/* YouTube Card */}
              <a href="https://youtube.com/@JOHIA_Cubao" target="_blank" rel="noopener noreferrer" className="group block bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-3xl p-6 hover:shadow-2xl hover:border-[#FF0000]/50 transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="mx-auto w-16 h-16 bg-[#FF0000]/10 rounded-full flex items-center justify-center text-[#FF0000] mb-4 group-hover:bg-[#FF0000] group-hover:text-white transition-colors duration-300">
                  <IconBrandYoutube size={32} />
                </div>
                <h3 className="text-xl font-bold font-heading text-text-dark dark:text-text-light mb-1 group-hover:text-[#FF0000] transition-colors">YouTube</h3>
                <p className="text-gray-500 mb-4 font-medium text-sm">Sermons & Livestreams</p>
                <span className="inline-flex font-bold text-[#FF0000] group-hover:underline text-sm">Watch @JOHIA_Cubao</span>
              </a>
            </div>
            
            {/* Second Row: 2 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Wildfire FB Card */}
              <a href="https://www.facebook.com/WildfireJOHIA" target="_blank" rel="noopener noreferrer" className="group block bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-3xl p-6 hover:shadow-2xl hover:border-[#003314]/50 transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="mx-auto w-16 h-16 bg-[#003314]/10 rounded-full flex items-center justify-center text-[#003314] mb-4 group-hover:bg-[#003314] group-hover:text-white transition-colors duration-300">
                  <IconBrandFacebook size={32} />
                </div>
                <h3 className="text-xl font-bold font-heading text-text-dark dark:text-text-light mb-1 group-hover:text-[#003314] transition-colors">Wildfire</h3>
                <p className="text-gray-500 mb-4 font-medium text-sm">Youth Ministry</p>
                <span className="inline-flex font-bold text-[#003314] group-hover:underline text-sm">Follow @WildfireJOHIA</span>
              </a>

              {/* LinC FB Card */}
              <a href="https://www.facebook.com/linc.johia" target="_blank" rel="noopener noreferrer" className="group block bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-3xl p-6 hover:shadow-2xl hover:border-[#E5B53B]/50 transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="mx-auto w-16 h-16 bg-[#E5B53B]/10 rounded-full flex items-center justify-center text-[#E5B53B] mb-4 group-hover:bg-[#E5B53B] group-hover:text-white transition-colors duration-300">
                  <IconBrandFacebook size={32} />
                </div>
                <h3 className="text-xl font-bold font-heading text-text-dark dark:text-text-light mb-1 group-hover:text-[#E5B53B] transition-colors">LinC</h3>
                <p className="text-gray-500 mb-4 font-medium text-sm">Young Adults</p>
                <span className="inline-flex font-bold text-[#E5B53B] group-hover:underline text-sm">Follow @linc.johia</span>
              </a>
            </div>

          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
