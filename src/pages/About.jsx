import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import PageMeta from '../components/seo/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import ZLayoutSection from '../components/ui/ZLayoutSection';
import Button from '../components/ui/Button';

const pastors = [
  { name: "Ptr. Jun", image: "/images/pastors/ptr jun.jpg", bio: "Short write-up intro for Ptr. Jun will be placed here.", position: "object-top" },
  { name: "Ptr. Jess", image: "/images/pastors/Jess.jpg", bio: "Short write-up intro for Ptr. Jess will be placed here.", position: "object-top" },
  { name: "Ptr. Dek", image: "/images/pastors/docdek.jpg", bio: "Short write-up intro for Ptr. Dek will be placed here.", position: "object-top" },
  { name: "Ptr. Ken", image: "/images/pastors/ken.jpg", bio: "Short write-up intro for Ptr. Ken will be placed here.", position: "object-top" },
  { name: "Ptr. Marc", image: "/images/pastors/marc.jpg", bio: "Short write-up intro for Ptr. Marc will be placed here.", position: "object-top" },
  { name: "Ptr. Chips", image: "/images/pastors/chips.jpg", bio: "Short write-up intro for Ptr. Chips will be placed here.", position: "object-center" },
];

// Animated counter hook
function useAnimatedCounter(target, duration = 2000, shouldAnimate) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!shouldAnimate) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, shouldAnimate]);
  
  return count;
}

const stats = [
  { value: 30, suffix: '+', label: 'Years of Ministry' },
  { value: 6, suffix: '', label: 'Pastors & Leaders' },
  { value: 10, suffix: '+', label: 'Active Ministries' },
  { value: 1, suffix: '', label: 'United Family' },
];

function StatCountersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="bg-background-dark py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-20 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection variant="rise">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-text-light text-center mb-16 tracking-tight">
            JOHIA by the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} isInView={isInView} delay={i * 200} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function StatCard({ stat, isInView, delay }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const count = useAnimatedCounter(stat.value, 2000, shouldAnimate);
  
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShouldAnimate(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);
  
  return (
    <div className="text-center group">
      <div className="text-5xl md:text-7xl font-extrabold font-heading text-brand-yellow mb-3 tabular-nums">
        {shouldAnimate ? count : 0}{stat.suffix}
      </div>
      <p className="text-gray-400 font-sans text-sm md:text-base uppercase tracking-wider font-semibold">
        {stat.label}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark">
      <PageMeta title="About Us" />

      {/* Hero */}
      <section id="about-us-header" className="relative pt-40 pb-32 flex items-center justify-center overflow-hidden bg-aurora border-b border-white/5">
        <div className="absolute inset-0 bg-overlay-dark/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-fluid-h1 font-extrabold font-heading text-text-light mb-6 drop-shadow-md">
              Our Culture
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-sans font-medium max-w-3xl mx-auto drop-shadow-sm leading-relaxed mb-8">
              Rooted in Christ, Growing in Community
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Identity */}
      <SectionWrapper id="about-us-identity" className="bg-background-light dark:bg-background-dark text-text-dark dark:text-text-light text-center py-24">
        <AnimatedSection className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-12">
            A family of believers dedicated to advancing God's Kingdom in Cubao and beyond.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left w-full mt-12 px-4 md:px-0">
            <div className="border-l-4 border-brand-yellow pl-8 py-2">
              <h3 className="font-heading font-extrabold text-2xl text-brand-yellow mb-4 tracking-wider uppercase">Mission</h3>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-sans leading-relaxed font-light">
                To Love and Honor God, Raise Christ-Committed Followers, and Live on Purpose
              </p>
            </div>
            
            <div className="border-l-4 border-brand-yellow pl-8 py-2">
              <h3 className="font-heading font-extrabold text-2xl text-brand-yellow mb-4 tracking-wider uppercase">Vision</h3>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-sans leading-relaxed font-light">
                People Loving God. People Inspiring Change. People With Hope
              </p>
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* Core Values */}
      <section id="about-us-core-values" className="bg-[#111] py-24 relative border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <img src="/images/general/New Core values.png" alt="Core Values" className="w-full max-w-5xl mx-auto rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" />
          </AnimatedSection>
        </div>
      </section>

      {/* JOHIA by the Numbers */}
      <StatCountersSection />

      {/* Meet Our Pastors */}
      <section id="about-us-meet-pastor-header" className="bg-background-dark py-24 border-t border-white/5">
        <div className="container mx-auto px-6 text-center mb-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-text-light mb-4 drop-shadow-md">Meet Our Pastors</h2>
            <p className="text-gray-400 font-sans text-xl max-w-2xl mx-auto">
              Dedicated servant-leaders guiding our church family with biblical truth and pastoral care.
            </p>
          </AnimatedSection>
        </div>

        <div className="flex flex-col">
          {pastors.map((pastor, index) => (
            <ZLayoutSection 
              key={pastor.name}
              id={`pastor-${index}`}
              title={pastor.name}
              description={<p>{pastor.bio}</p>}
              imageSrc={pastor.image}
              imageAlt={pastor.name}
              reverse={index % 2 !== 0}
              texture={index % 2 === 0 ? 'dark' : 'none'}
              imageClassName={pastor.position}
              className="min-h-[50vh] py-16"
            />
          ))}
        </div>
      </section>

      {/* Our Journey */}
      <section id="about-us-history" className="bg-[#eaeaea] dark:bg-background-dark py-24 text-center border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
        <AnimatedSection className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-shimmer-dark mb-8 drop-shadow-sm">
            Our Journey
          </h2>
          <p className="text-text-dark dark:text-text-light font-sans text-xl max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to a thriving spiritual family, God's faithfulness has been the anchor of JOHIA Cubao. We continue to build upon the legacy of faith, looking forward to the greater things He has in store for our community.
          </p>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section id="about-us-cta-programs" className="bg-background-footer py-24 text-center border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora opacity-30 z-0"></div>
        <AnimatedSection className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-text-light mb-10 drop-shadow-md">Ready to take the next step?</h2>
          <Button variant="solid" href="/programs" className="!bg-brand-yellow !text-text-dark hover:!bg-white px-10 py-4 text-lg shadow-[0_0_20px_rgba(251,176,59,0.3)] transition-all">
            Explore Programs
          </Button>
        </AnimatedSection>
      </section>
      
    </div>
  );
}
