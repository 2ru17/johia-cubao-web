import React from 'react';
import PageMeta from '../components/seo/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import { IconBuildingBank, IconQrcode, IconHeartHandshake } from '@tabler/icons-react';

export default function Give() {
  return (
    <div className="flex flex-col w-full bg-background-light">
      <PageMeta title="Give" description="Partner with us in advancing the Kingdom through generous giving." />

      {/* Hero */}
      <section className="relative pt-40 pb-32 flex items-center justify-center overflow-hidden bg-aurora border-b border-white/5">
        <div className="absolute inset-0 bg-overlay-dark/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection variant="scale">
            <span className="text-brand-yellow font-bold tracking-widest text-sm uppercase mb-4 block">/ OUR COMMITMENT</span>
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading text-shimmer mb-6 drop-shadow-md">
              2026 Impact Vision
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Ways to Give - Dark Textured Background with Glass Cards */}
      <SectionWrapper className="bg-texture-dark border-t border-white/5 py-24">
        <AnimatedSection variant="rise" className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-brand-yellow mb-6 drop-shadow-md">Ways to Give</h2>
          <p className="text-white font-sans max-w-2xl mx-auto text-xl opacity-90 leading-relaxed drop-shadow-sm mb-4">
            Stewardship for our Sanctuary. Your generosity fuels the mission and builds the house.
          </p>
          <p className="text-gray-300 font-sans max-w-2xl mx-auto">
            We offer multiple secure and convenient ways for you to give your tithes and offerings.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Option 1: GCash */}
          <AnimatedSection variant="slide-left" delay={0.1} className="group relative bg-[#212528]/80 backdrop-blur-xl rounded-[30px] p-8 text-center border border-white/10 hover:border-brand-yellow/50 hover:shadow-[0_0_30px_rgba(251,176,59,0.15)] transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="w-20 h-20 bg-brand-yellow/10 text-brand-yellow rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
              <IconQrcode size={40} />
            </div>
            <h3 className="text-3xl font-bold font-heading text-white mb-4 drop-shadow-sm">GCash</h3>
            <p className="text-gray-400 font-sans mb-8">
              Scan the QR code or send directly to our official GCash account.
            </p>
            <div className="bg-black/40 aspect-square rounded-2xl flex items-center justify-center text-gray-500 border border-white/5 shadow-inner">
              <p className="font-medium text-sm tracking-wider uppercase">QR Code Placeholder</p>
            </div>
          </AnimatedSection>

          {/* Option 2: Bank Transfer */}
          <AnimatedSection variant="rise" delay={0.2} className="group relative bg-[#212528]/80 backdrop-blur-xl rounded-[30px] p-8 text-center border border-white/10 hover:border-brand-yellow/50 hover:shadow-[0_0_30px_rgba(251,176,59,0.15)] transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="w-20 h-20 bg-brand-yellow/10 text-brand-yellow rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
              <IconBuildingBank size={40} />
            </div>
            <h3 className="text-3xl font-bold font-heading text-white mb-4 drop-shadow-sm">Bank Transfer</h3>
            <p className="text-gray-400 font-sans mb-8">
              Transfer funds directly to our bank account.
            </p>
            <div className="text-left bg-black/40 p-6 rounded-2xl border border-white/5 space-y-4 shadow-inner">
              <div>
                <p className="text-xs text-brand-yellow font-bold uppercase tracking-wider mb-1">Bank Name</p>
                <p className="font-medium text-white text-lg">BDO Unibank</p>
              </div>
              <div>
                <p className="text-xs text-brand-yellow font-bold uppercase tracking-wider mb-1">Account Name</p>
                <p className="font-medium text-white text-lg">Jesus Our Hope Int'l</p>
              </div>
              <div>
                <p className="text-xs text-brand-yellow font-bold uppercase tracking-wider mb-1">Account Number</p>
                <p className="font-medium text-white text-lg">0012-3456-7890</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Option 3: In Person */}
          <AnimatedSection variant="slide-right" delay={0.3} className="group relative bg-[#212528]/80 backdrop-blur-xl rounded-[30px] p-8 text-center border border-white/10 hover:border-brand-yellow/50 hover:shadow-[0_0_30px_rgba(251,176,59,0.15)] transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="w-20 h-20 bg-brand-yellow/10 text-brand-yellow rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
              <IconHeartHandshake size={40} />
            </div>
            <h3 className="text-3xl font-bold font-heading text-white mb-4 drop-shadow-sm">In Person</h3>
            <p className="text-gray-400 font-sans mb-8">
              Give during our Sunday worship services using the offering envelopes.
            </p>
            <div className="bg-black/40 h-48 rounded-2xl overflow-hidden relative border border-white/5 shadow-inner">
               <div className="absolute inset-0 bg-overlay-dark/40 z-10 group-hover:bg-overlay-dark/10 transition-colors duration-500"></div>
               <img src="/images/general/New Core values.png" alt="In person giving" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 z-20 flex items-center justify-center text-brand-yellow font-extrabold tracking-widest text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                 OFFERING BOX
               </div>
            </div>
          </AnimatedSection>

        </div>
      </SectionWrapper>
    </div>
  );
}
