import React from 'react';
import PageMeta from '../components/seo/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import InteractiveTeamSection from '../components/ui/InteractiveTeamSection';
import Button from '../components/ui/Button';

const lifeGroups = [
  { name: "Couples", desc: "Strengthening marriages and families through Christ-centered guidance." },
  { name: "Wildfire (Youth)", desc: "Empowering the next generation to live boldly for Jesus." },
  { name: "LinC (Young Adults)", desc: "Life in Christ - Navigating career and faith together." },
  { name: "YaH (Seniors)", desc: "Young at Heart - Wisdom, fellowship, and continued purpose." }
];

export default function Ministries() {
  return (
    <div className="flex flex-col w-full bg-background-light">
      <PageMeta title="Ministries" description="Find Your People. Find Your Purpose." />

      {/* Hero */}
      <section className="relative pt-40 pb-32 flex items-center justify-center overflow-hidden bg-aurora border-b border-white/5">
        <div className="absolute inset-0 bg-overlay-dark/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection variant="blur">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-heading text-text-light mb-6">
              Find Your People.<br/>
              <span className="text-shimmer">Find Your Purpose.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
              Whether you're looking for community or ready to serve, there is a place for you here.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* TRACK A: Demographics (Life Groups) - Kept as grid but enhanced */}
      <SectionWrapper id="ministries-demographics" className="bg-texture-dark pt-32 pb-32">
        <AnimatedSection variant="rise" className="text-center mb-20">
          <span className="text-brand-yellow font-bold tracking-widest text-sm uppercase mb-4 block">&gt; Connect</span>
          <h2 className="text-5xl font-extrabold font-heading text-text-light mb-6 drop-shadow-md">Life Groups</h2>
          {/* Changed text-gray-300 to text-white for better contrast */}
          <p className="text-white font-sans text-xl max-w-2xl mx-auto drop-shadow-sm">Do life together. Connect with people in the same season of life and grow spiritually in a close-knit community.</p>
        </AnimatedSection>

        <AnimatedSection variant="scale" className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {lifeGroups.map((group, idx) => (
            <div key={group.name} className="group relative aspect-[16/9] md:aspect-[4/3] rounded-[30px] overflow-hidden bg-gray-900 border border-white/10 hover:border-brand-yellow/50 transition-all duration-500 shadow-2xl hover:shadow-[0_10px_40px_rgba(251,176,59,0.2)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/80 transition-colors duration-500 z-10"></div>
              <img src="/images/general/retreat-pic.jpg" alt={group.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 z-20 flex flex-col items-start justify-end p-8 md:p-10 text-left">
                <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-brand-yellow mb-3 drop-shadow-md">{group.name}</h3>
                <p className="text-text-light font-sans text-lg opacity-90">{group.desc}</p>
              </div>
            </div>
          ))}
        </AnimatedSection>

        <div className="text-center">
          <Button variant="solid" href="https://forms.google.com" target="_blank" className="bg-brand-yellow text-text-dark hover:bg-white hover:scale-105 transition-all shadow-xl px-10 py-4 text-lg">
            Join a Group
          </Button>
        </div>
      </SectionWrapper>

      {/* TRACK B: Service Teams - Replaced Grid with Grouped Z-Layouts per Plan */}
      <section id="ministries-serve" className="bg-background-footer relative">
        
        {/* Intro to Service Teams */}
        <div className="py-24 text-center border-y border-brand-yellow/20 bg-background-dark">
          <AnimatedSection variant="rise">
            <span className="text-brand-yellow font-bold tracking-widest text-sm uppercase mb-4 block">&gt; Serve</span>
            <h2 className="text-5xl md:text-6xl font-extrabold font-heading text-text-light mb-6 drop-shadow-md">Service Teams</h2>
            <p className="text-white font-sans text-xl max-w-3xl mx-auto drop-shadow-sm">
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
            { name: "Worship Team", desc: "Musicians and vocalists leading the congregation in praise.", image: "/images/ministries/worship.jpg" },
            { name: "Technicals", desc: "Sound engineers, lighting, and stage setup ensuring a distraction-free environment.", image: "/images/ministries/tech.jpg" },
            { name: "Creatives", desc: "Media, livestream, photography, and social media capturing the life of the church.", image: "/images/ministries/creatives.jpg" }
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
            { name: "Ushers & Greeters", desc: "Welcoming guests, distributing materials, and assisting with seating.", image: "/images/general/outside.png" },
            { name: "Marshalls", desc: "Providing security, traffic control, and ensuring a safe worship environment.", image: "/images/placeholder-ministry.png" },
            { name: "Brews", desc: "Serving coffee and refreshments to foster fellowship before and after service.", image: "/images/general/retreat-pic.jpg" }
          ]}
          reverse={true}
          texture="dark"
        />

        {/* Group 3: Next Gen & Prayer */}
        <InteractiveTeamSection 
          id="team-foundation"
          title="Foundations"
          mainDescription="Build the spiritual backbone of our church by investing in the next generation and waging war in the spiritual realm."
          teams={[
            { name: "Sunday School", desc: "Teaching and caring for children, laying a strong biblical foundation.", image: "/images/ministries/sundayschl.jpg" },
            { name: "Prayer Warriors", desc: "Dedicated intercessors standing in the gap for the church and community.", image: "/images/ministries/prayer.jpg" }
          ]}
          reverse={false}
          texture="light"
        />

        {/* Consolidated Apply Button */}
        <div className="py-24 text-center bg-background-dark border-t border-white/5">
           <AnimatedSection variant="scale">
              <h3 className="text-3xl font-heading font-extrabold text-white mb-8 drop-shadow-md">Ready to serve the house?</h3>
              <Button variant="solid" href="https://forms.google.com" target="_blank" className="bg-brand-yellow text-text-dark hover:bg-white px-12 py-5 text-xl shadow-[0_0_20px_rgba(251,176,59,0.3)] hover:scale-105 transition-transform">
                Apply to Serve
              </Button>
           </AnimatedSection>
        </div>

      </section>
    </div>
  );
}
