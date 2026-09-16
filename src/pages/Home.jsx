import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import TiltCard from '../components/ui/TiltCard';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import PageMeta from '../components/seo/PageMeta';
import ParallaxDivider from '../components/ui/ParallaxDivider';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <PageMeta title="Home" />

      {/* SECTION 1: HERO */}
      {/* Replaced static image with the premium animated aurora gradient per Phase 1/2 */}
      <section id="home-hero" className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-aurora">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-overlay-dark z-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center mt-20">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold font-heading text-shimmer mb-6 tracking-tighter"
          >
            This is your Home.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-3xl text-gray-300 font-sans max-w-3xl mx-auto mb-8 font-light"
          >
            A welcoming community where faith meets purpose.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: ASYMMETRIC GRID PORTAL */}
      <SectionWrapper id="home-portal" className="bg-texture-dark relative z-30 pt-32">
        <AnimatedSection variant="rise">
          {/* Free-form asymmetric grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 max-w-7xl mx-auto">
            
            {/* Card 1: Wide & Heroic (Church Programs) */}
            <TiltCard className="md:col-span-8">
              <Link to="/programs" className="block w-full h-full group relative min-h-[400px] md:min-h-[500px] overflow-hidden rounded-2xl bg-gray-900 border border-white/5 hover:border-brand-yellow/50 transition-all duration-500 shadow-2xl hover:shadow-[0_0_40px_rgba(251,176,59,0.3)]">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>
                <img src="/images/general/CoreValues.png" alt="Church Programs" className="w-full h-full object-cover animate-slow-zoom grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 z-20 flex flex-col items-start justify-end p-10 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-4xl md:text-5xl font-extrabold font-heading text-text-light group-hover:text-brand-yellow transition-colors duration-300">Church Programs</h3>
                  <p className="text-gray-300 font-sans text-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">Sunday Worship, School of Champions, and more.</p>
                </div>
              </Link>
            </TiltCard>

            {/* Card 2: Tall (Ministries) */}
            <TiltCard className="md:col-span-4 md:row-span-2">
              <Link to="/ministries" className="block w-full h-full group relative min-h-[400px] md:min-h-full overflow-hidden rounded-2xl bg-gray-900 border border-white/5 hover:border-brand-yellow/50 transition-all duration-500 shadow-2xl hover:shadow-[0_0_40px_rgba(251,176,59,0.3)] ">
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-500 z-10"></div>
                <img src="/images/general/retreat-pic.jpg" alt="Ministries" className="w-full h-full object-cover animate-slow-zoom grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-3xl md:text-4xl font-bold font-heading text-text-light group-hover:text-brand-yellow transition-colors duration-300 mb-4">Ministries</h3>
                  <p className="text-gray-300 font-sans text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">Find your people.</p>
                </div>
              </Link>
            </TiltCard>

            {/* Card 3: Wide (Latest News) */}
            <TiltCard className="md:col-span-8">
              <Link to="/posts" className="block w-full h-full group relative min-h-[300px] md:min-h-[350px] overflow-hidden rounded-2xl bg-gray-900 border border-white/5 hover:border-brand-yellow/50 transition-all duration-500 shadow-2xl hover:shadow-[0_0_30px_rgba(251,176,59,0.3)] ">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>
                <img src="/images/ministries/sundayschl.jpg" alt="Latest News" className="w-full h-full object-cover animate-slow-zoom grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 z-20 flex flex-col items-start justify-end p-10 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-4xl md:text-5xl font-extrabold font-heading text-text-light group-hover:text-brand-yellow transition-colors duration-300">Latest News</h3>
                  <p className="text-gray-300 font-sans text-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">Stay encouraged with devotionals and updates.</p>
                </div>
              </Link>
            </TiltCard>

          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* Parallax Divider */}
      <ParallaxDivider imageSrc="/images/ministries/prayer.jpg" alt="Church Community" height="h-[350px]" />

      {/* SECTION 3: ACTION ROW */}
      <section id="home-action" className="relative py-32 bg-texture-light dark:bg-texture-dark overflow-hidden transition-colors duration-500">
        <AnimatedSection variant="scale" className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-text-dark dark:text-text-light mb-16 tracking-tight">
            Find Your Place in the Family
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Button variant="solid" className="transition-transform shadow-xl" href="/ministries#ministries-demographics">I want to get connected</Button>
            <Button variant="solid" className="transition-transform shadow-xl" href="/contact#contact-main-form">I need a prayer</Button>
            <Button variant="outline" className="transition-all" href="/ministries#ministries-serve">I want to volunteer</Button>
            <Button variant="outline" className="transition-all" href="/programs#programs-soc">Ready to take the next step</Button>
          </div>
        </AnimatedSection>
      </section>

      {/* SECTION 4: LOGO MARQUEE */}
      <section className="bg-background-footer py-8 overflow-hidden border-y border-white/5">
        <div className="flex whitespace-nowrap animate-marquee items-center">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex-shrink-0 flex items-center mx-12 opacity-40 hover:opacity-100 transition-opacity duration-500">
              <img src="/images/general/banner-white.svg" alt="JOHIA" className="h-12 md:h-16 w-auto object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: VISIT US / MAP */}
      <SectionWrapper id="home-map" className="bg-background-light dark:bg-background-dark py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <AnimatedSection variant="slide-left" className="order-2 lg:order-1 flex flex-col items-start">
            <h2 className="text-5xl md:text-6xl font-extrabold font-heading text-text-dark dark:text-text-light mb-8 leading-tight">
              The table is set.
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-sans text-xl mb-10 max-w-md leading-relaxed">
              Join our community this Sunday. We've saved a seat just for you.
            </p>
            <Button variant="solid" href="/contact" className="transition-all duration-300 px-10 py-4 text-lg">
              Contact Us
            </Button>
          </AnimatedSection>
          
          <AnimatedSection variant="slide-right" className="order-1 lg:order-2 h-[500px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 group relative">
            <iframe
              src="https://maps.google.com/maps?q=Jesus%20Our%20Hope%20International%20Assemblies%20Cubao&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JOHIA Cubao Map"
              className="    transition-all duration-1000 z-0 relative"
            ></iframe>
          </AnimatedSection>
        </div>
      </SectionWrapper>

    </div>
  );
}
