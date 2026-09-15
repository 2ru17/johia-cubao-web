import React from 'react';
import PageMeta from '../components/seo/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import ZLayoutSection from '../components/ui/ZLayoutSection';
import Button from '../components/ui/Button';

const pastors = [
  { name: "Ptr. Jun", image: "/images/pastors/ptr jun.jpg", bio: "Short write-up intro for Ptr. Jun will be placed here." },
  { name: "Ptr. Jess", image: "/images/pastors/Jess.jpg", bio: "Short write-up intro for Ptr. Jess will be placed here." },
  { name: "Ptr. Dek", image: "/images/pastors/docdek.jpg", bio: "Short write-up intro for Ptr. Dek will be placed here." },
  { name: "Ptr. Ken", image: "/images/pastors/ken.jpg", bio: "Short write-up intro for Ptr. Ken will be placed here." },
  { name: "Ptr. Marc", image: "/images/pastors/marc.jpg", bio: "Short write-up intro for Ptr. Marc will be placed here." },
  { name: "Ptr. Chips", image: "/images/pastors/chips.jpg", bio: "Short write-up intro for Ptr. Chips will be placed here." },
];

export default function About() {
  return (
    <div className="flex flex-col w-full bg-background-light">
      <PageMeta title="About Us" />

      {/* Hero */}
      <section id="about-us-header" className="relative pt-40 pb-32 flex items-center justify-center overflow-hidden bg-aurora border-b border-white/5">
        <div className="absolute inset-0 bg-overlay-dark/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading text-text-light mb-4 text-shimmer">
              Our Culture
            </h1>
            <p className="text-xl text-brand-yellow font-medium max-w-2xl mx-auto drop-shadow-md">
              Rooted in Christ, Growing in Community
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Identity */}
      <SectionWrapper id="about-us-identity" className="bg-background-light text-text-dark text-center py-24">
        <AnimatedSection className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-brand-yellow font-bold tracking-widest text-sm uppercase mb-4 block">We are...</span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-12">
            A family of believers dedicated to advancing God's Kingdom in Cubao and beyond.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left w-full mt-8">
            <div className="bg-white p-10 rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="font-heading font-extrabold text-2xl text-brand-yellow mb-4 tracking-wider uppercase">Mission</h3>
              <p className="text-lg text-gray-700 font-sans leading-relaxed">
                To exalt Jesus Christ, equip the saints for the work of the ministry, and evangelize the lost through the empowering presence of the Holy Spirit.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="font-heading font-extrabold text-2xl text-brand-yellow mb-4 tracking-wider uppercase">Vision</h3>
              <p className="text-lg text-gray-700 font-sans leading-relaxed">
                To be a vibrant, Spirit-filled church multiplying disciples and transforming communities across the nation.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* Core Values */}
      <section id="about-us-core-values" className="bg-[#212528] py-24 relative border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-brand-yellow mb-12 drop-shadow-md">Core Values</h2>
            <img src="/images/general/New Core values.png" alt="Core Values" className="w-full max-w-5xl mx-auto rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" />
          </AnimatedSection>
        </div>
      </section>

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
              className="min-h-[50vh] py-16"
            />
          ))}
        </div>
      </section>

      {/* Our Journey */}
      <section id="about-us-history" className="bg-[#eaeaea] py-24 text-center border-t border-gray-200">
        <AnimatedSection className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-shimmer-dark mb-8 drop-shadow-sm">
            Our Journey
          </h2>
          <p className="text-text-dark font-sans text-xl max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to a thriving spiritual family, God's faithfulness has been the anchor of JOHIA Cubao. We continue to build upon the legacy of faith, looking forward to the greater things He has in store for our community.
          </p>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section id="about-us-cta-programs" className="bg-background-footer py-24 text-center border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora opacity-30 z-0"></div>
        <AnimatedSection className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-text-light mb-10 drop-shadow-md">Ready to take the next step?</h2>
          <Button variant="solid" href="/programs#programs-soc" className="bg-brand-yellow text-text-dark hover:bg-white px-10 py-4 text-lg shadow-[0_0_20px_rgba(251,176,59,0.3)] hover:scale-105 transition-all">
            Explore Programs
          </Button>
        </AnimatedSection>
      </section>
      
    </div>
  );
}
