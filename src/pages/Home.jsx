import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import PageMeta from '../components/seo/PageMeta';

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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
             <p className="text-lg md:text-xl text-brand-yellow font-sans font-bold uppercase tracking-widest border border-brand-yellow/30 rounded-full px-6 py-2 bg-brand-yellow/10 backdrop-blur-sm shadow-[0_0_15px_rgba(251,176,59,0.2)]">
              Sundays @ 10:15 AM
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ASYMMETRIC GRID PORTAL */}
      <SectionWrapper id="home-portal" className="bg-texture-dark relative z-30 pt-32">
        <AnimatedSection variant="rise">
          {/* Free-form asymmetric grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 max-w-7xl mx-auto">
            
            {/* Card 1: Wide & Heroic (Worship) */}
            <Link to="/programs#programs-sunday-service" className="md:col-span-8 group relative min-h-[400px] md:min-h-[500px] overflow-hidden rounded-[40px] bg-gray-900 border border-white/5 hover:border-brand-yellow/50 transition-all duration-500 shadow-2xl hover:shadow-[0_0_40px_rgba(251,176,59,0.3)]">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>
              <img src="/images/general/CoreValues.png" alt="Worship Service" className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-1000" />
              <div className="absolute inset-0 z-20 flex flex-col items-start justify-end p-10 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-brand-yellow font-bold tracking-widest text-sm uppercase mb-2">&gt; Join Us</span>
                <h3 className="text-4xl md:text-5xl font-extrabold font-heading text-text-light group-hover:text-brand-yellow transition-colors duration-300">Sunday Worship</h3>
              </div>
            </Link>

            {/* Card 2: Tall (Life Groups) */}
            <Link to="/ministries#ministries-demographics" className="md:col-span-4 md:row-span-2 group relative min-h-[400px] md:min-h-full overflow-hidden rounded-[20px] bg-gray-900 border border-white/5 hover:border-brand-yellow/50 transition-all duration-500 shadow-2xl hover:shadow-[0_0_40px_rgba(251,176,59,0.3)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-500 z-10"></div>
              {/* Fallback image if Life Groups specific image isn't there */}
              <img src="/images/general/retreat-pic.jpg" alt="Life Groups" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-3xl md:text-4xl font-bold font-heading text-text-light group-hover:text-brand-yellow transition-colors duration-300 mb-4">Life Groups</h3>
                <p className="text-gray-300 font-sans text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">Find your people.</p>
              </div>
            </Link>

            {/* Card 3: Square/Standard (SOC) */}
            <Link to="/programs#programs-soc" className="md:col-span-4 group relative min-h-[300px] md:min-h-[350px] overflow-hidden rounded-[50px] bg-gray-900 border border-white/5 hover:border-brand-yellow/50 transition-all duration-500 shadow-2xl hover:shadow-[0_0_30px_rgba(251,176,59,0.3)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>
              <img src="/images/ministries/sundayschl.jpg" alt="School of Champions" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 z-20 flex items-center justify-center p-6 text-center">
                <h3 className="text-2xl font-bold font-heading text-text-light group-hover:text-brand-yellow transition-colors duration-300">School of Champions</h3>
              </div>
            </Link>

            {/* Card 4: Standard (Prayer) */}
            <Link to="/programs#programs-prayer" className="md:col-span-4 group relative min-h-[300px] md:min-h-[350px] overflow-hidden rounded-[30px] bg-gray-900 border border-white/5 hover:border-brand-yellow/50 transition-all duration-500 shadow-2xl hover:shadow-[0_0_30px_rgba(251,176,59,0.3)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-500 z-10"></div>
              <img src="/images/ministries/prayer.jpg" alt="Prayer Gatherings" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 z-20 flex items-center justify-center p-6 text-center">
                <h3 className="text-2xl font-bold font-heading text-text-light group-hover:text-brand-yellow transition-colors duration-300">Prayer Gatherings</h3>
              </div>
            </Link>

          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* SECTION 3: ACTION ROW */}
      <section id="home-action" className="relative py-32 bg-texture-light overflow-hidden">
        <AnimatedSection variant="scale" className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-text-dark mb-16 tracking-tight">
            Find Your Place in the Family
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Button variant="solid" className="hover:scale-105 transition-transform shadow-xl" href="/ministries#ministries-demographics">I want to get connected</Button>
            <Button variant="solid" className="bg-text-dark text-text-light hover:bg-brand-yellow hover:text-text-dark hover:scale-105 transition-all shadow-xl" href="/contact#contact-main-form">I need a prayer</Button>
            <Button variant="outline" className="border-text-dark text-text-dark hover:bg-text-dark hover:text-text-light hover:scale-105 transition-all" href="/ministries#ministries-serve">I want to volunteer</Button>
            <Button variant="outline" className="border-text-dark text-text-dark hover:bg-text-dark hover:text-text-light hover:scale-105 transition-all" href="/programs#programs-soc">Ready to take the next step</Button>
          </div>
        </AnimatedSection>
      </section>

      {/* SECTION 4: LOGO MARQUEE */}
      <section className="bg-background-footer py-16 overflow-hidden border-y border-white/5">
        <div className="flex whitespace-nowrap animate-marquee items-center">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-center mx-16 opacity-40 hover:opacity-100 transition-opacity duration-500 hover:scale-110 transform">
              <img src="/images/general/Logo Gray.svg" alt="JOHIA" className="h-16 w-auto" />
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: VISIT US / MAP */}
      <SectionWrapper id="home-map" className="bg-texture-dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <AnimatedSection variant="slide-left" className="order-2 lg:order-1 flex flex-col items-start">
            <span className="text-brand-yellow font-bold tracking-widest text-sm mb-4 uppercase flex items-center gap-2">
              <span className="w-8 h-1 bg-brand-yellow inline-block"></span>
              Visit Us
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold font-heading text-text-light mb-8 leading-tight">
              The table is set.
            </h2>
            <p className="text-gray-400 font-sans text-xl mb-10 max-w-md leading-relaxed">
              Join our community this Sunday. We've saved a seat just for you.
            </p>
            <Button variant="outline" href="/contact" className="hover:animate-pulse hover:bg-brand-yellow hover:border-brand-yellow hover:text-text-dark transition-all duration-300 px-10 py-4 text-lg">
              Contact Us
            </Button>
          </AnimatedSection>
          
          <AnimatedSection variant="slide-right" className="order-1 lg:order-2 h-[500px] w-full rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group relative">
            <div className="absolute inset-0 bg-brand-yellow/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-10"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x3397b7afbd1516e5%3A0x89b02cc607996c5f!2sJesus%20Our%20Hope%20International%20Assemblies%20(JOHIA)%20Main!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JOHIA Cubao Map"
              className="grayscale-[80%] invert-[90%] group-hover:grayscale-0 group-hover:invert-0 transition-all duration-1000 z-0 relative"
            ></iframe>
          </AnimatedSection>
        </div>
      </SectionWrapper>

    </div>
  );
}
