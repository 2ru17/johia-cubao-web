import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageMeta from '../components/seo/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import TiltCard from '../components/ui/TiltCard';
import { IconBuildingBank, IconQrcode, IconHeartHandshake, IconZoomIn, IconX, IconDownload, IconCopy, IconCheck } from '@tabler/icons-react';

export default function Give() {
  const [showGcash, setShowGcash] = useState(false);
  const [showBank, setShowBank] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark transition-colors duration-500">
      <PageMeta title="Brew with Us" description="Partner with us in advancing the Kingdom through generous giving." />

      {/* Hero: Brew with Us */}
      <section className="relative pt-40 pb-32 flex items-center justify-center overflow-hidden bg-aurora border-b border-white/5">
        <div className="absolute inset-0 bg-overlay-dark/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection variant="fade">
            <h1 className="text-fluid-h1 font-extrabold font-heading text-shimmer mb-6">
              Brew with Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-sans font-medium max-w-3xl mx-auto drop-shadow-sm leading-relaxed mb-8">
              Pull up a chair and partner with us in funding the ministry, outreach, and mission of JOHIA Cubao.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Cards Section */}
      <SectionWrapper className="bg-background-light dark:bg-background-dark py-24 transition-colors duration-500">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto -mt-10">
          
          {/* Option 1: GCash */}
          <AnimatedSection variant="fade" delay={0.1}>
            <TiltCard>
              <div className="group relative bg-white dark:bg-background-footer rounded-2xl p-8 text-center border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-[0_10px_40px_rgba(251,176,59,0.15)] hover:border-brand-yellow/30 transition-all duration-500 overflow-hidden h-full flex flex-col">
                <div>
                  <div className="w-20 h-20 bg-brand-yellow/10 text-brand-yellow rounded-2xl flex items-center justify-center mx-auto mb-8 transition-colors duration-500 group-hover:bg-brand-yellow group-hover:text-white">
                    <IconQrcode size={40} />
                  </div>
                  <h3 className="text-3xl font-bold font-heading text-text-dark dark:text-text-light dark:text-white mb-4 transition-colors">GCash</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-sans mb-8">
                    Scan the QR code or send directly to our official GCash account.
                  </p>
                </div>
                <div className="mt-auto pt-4 flex flex-col gap-4">
                  {showGcash && (
                    <div 
                      onClick={() => setShowQrModal(true)}
                      className="bg-gray-50 dark:bg-gray-900 aspect-square rounded-2xl flex items-center justify-center text-gray-400 border border-brand-yellow/30 shadow-[0_0_15px_rgba(251,176,59,0.1)] transition-all cursor-pointer relative group overflow-hidden"
                    >
                      {/* Temporary placeholder image, waiting for official QR code */}
                      <img src="/images/general/outside.png" alt="GCash QR Code" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <IconZoomIn size={48} className="text-white drop-shadow-md" />
                      </div>
                    </div>
                  )}
                  <button 
                    onClick={() => setShowGcash(!showGcash)}
                    className="w-full py-4 rounded-xl font-bold tracking-wider uppercase text-sm border-2 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-brand-yellow hover:text-brand-yellow transition-all"
                  >
                    {showGcash ? 'Hide QR Code' : 'View QR Code'}
                  </button>
                </div>
              </div>
            </TiltCard>
          </AnimatedSection>

          {/* Option 2: Bank Transfer */}
          <AnimatedSection variant="fade" delay={0.2}>
            <TiltCard>
              <div className="group relative bg-white dark:bg-background-footer rounded-2xl p-8 text-center border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-[0_10px_40px_rgba(251,176,59,0.15)] hover:border-brand-yellow/30 transition-all duration-500 overflow-hidden h-full flex flex-col">
                <div>
                  <div className="w-20 h-20 bg-brand-yellow/10 text-brand-yellow rounded-2xl flex items-center justify-center mx-auto mb-8 transition-colors duration-500 group-hover:bg-brand-yellow group-hover:text-white">
                    <IconBuildingBank size={40} />
                  </div>
                  <h3 className="text-3xl font-bold font-heading text-text-dark dark:text-text-light dark:text-white mb-4 transition-colors">Bank Transfer</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-sans mb-8">
                    Transfer funds directly to our bank account.
                  </p>
                </div>
                <div className="mt-auto pt-4 flex flex-col gap-4">
                  {showBank && (
                    <div className="text-left bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-brand-yellow/30 shadow-[0_0_15px_rgba(251,176,59,0.1)] space-y-4 transition-all">
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Bank Name</p>
                        <p className="font-medium text-text-dark dark:text-text-light dark:text-white text-lg transition-colors">BDO Unibank</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Account Name</p>
                        <p className="font-medium text-text-dark dark:text-text-light dark:text-white text-lg transition-colors">Jesus Our Hope Int'l</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Account Number</p>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-text-dark dark:text-text-light dark:text-white text-lg transition-colors">0012-3456-7890</p>
                          <button 
                            onClick={() => copyToClipboard('001234567890')}
                            className="p-1.5 rounded-lg bg-brand-yellow/10 text-brand-yellow hover:bg-brand-yellow hover:text-white transition-all duration-300"
                            title="Copy account number"
                          >
                            {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  <button 
                    onClick={() => setShowBank(!showBank)}
                    className="w-full py-4 rounded-xl font-bold tracking-wider uppercase text-sm border-2 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-brand-yellow hover:text-brand-yellow transition-all"
                  >
                    {showBank ? 'Hide Account Details' : 'View Account Details'}
                  </button>
                </div>
              </div>
            </TiltCard>
          </AnimatedSection>

          {/* Option 3: In Person */}
          <AnimatedSection variant="fade" delay={0.3}>
            <TiltCard>
              <div className="group relative bg-white dark:bg-background-footer rounded-2xl p-8 text-center border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-[0_10px_40px_rgba(251,176,59,0.15)] hover:border-brand-yellow/30 transition-all duration-500 overflow-hidden h-full flex flex-col">
                <div>
                  <div className="w-20 h-20 bg-brand-yellow/10 text-brand-yellow rounded-2xl flex items-center justify-center mx-auto mb-8 transition-colors duration-500 group-hover:bg-brand-yellow group-hover:text-white">
                    <IconHeartHandshake size={40} />
                  </div>
                  <h3 className="text-3xl font-bold font-heading text-text-dark dark:text-text-light dark:text-white mb-4 transition-colors">In Person</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-sans mb-8">
                    Give during our Sunday worship services using the offering envelopes.
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <div className="w-full py-4 rounded-xl font-bold tracking-wider uppercase text-sm border-2 border-brand-yellow/30 bg-brand-yellow/5 text-brand-yellow shadow-[0_0_15px_rgba(251,176,59,0.1)]">
                    Offering Box
                  </div>
                </div>
              </div>
            </TiltCard>
          </AnimatedSection>

        </div>
      </SectionWrapper>

      {/* Faithful Stewardship & Impact Vision */}
      <section className="py-32 bg-texture-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left: Faithful Stewardship */}
            <AnimatedSection variant="slide-right" className="flex flex-col items-start">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-brand-yellow mb-8 leading-tight drop-shadow-md">
                Faithful<br />Stewardship
              </h2>
              <p className="text-gray-300 font-sans text-xl leading-relaxed max-w-lg">
                Your generosity is the engine that drives our local and global outreach. We are committed to complete financial transparency, ensuring every gift is stewarded faithfully to build God's house and serve our city.
              </p>
            </AnimatedSection>

            {/* Right: Impact Vision Card */}
            <AnimatedSection variant="slide-left" className="relative">
              <TiltCard>
                <div className="bg-background-dark/80 backdrop-blur-md rounded-2xl p-10 md:p-14 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                  {/* Clean Yellow Accent Line instead of dotted */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-yellow group-hover:shadow-[0_0_20px_#FBB03B] transition-shadow duration-500"></div>
                  
                  <h3 className="text-4xl md:text-5xl font-extrabold font-heading text-white mb-4 drop-shadow-sm">
                    2026 Impact Vision
                  </h3>
                  <p className="text-gray-300 font-sans text-lg mb-8">
                    Thank you for partnering with us to build a legacy of hope.
                  </p>
                  
                  <hr className="border-white/10 mb-8" />
                  
                  <p className="text-brand-yellow/90 font-sans text-lg leading-relaxed font-medium">
                    Your tithes and offerings directly fuel our mission. This year, your faithful giving is funding essential sanctuary upgrades to welcome more families, expanding our outreach through dedicated hospital and jail ministries, and empowering the next generation through Wildfire Youth.
                  </p>
                </div>
              </TiltCard>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* QR Code Fullscreen Modal */}
      <AnimatePresence>
        {showQrModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowQrModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
              className="relative max-w-md w-full bg-white dark:bg-background-dark p-2 rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Prevent clicking modal from closing it
            >
              {/* Close Button */}
              <button 
                onClick={() => setShowQrModal(false)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black p-2 rounded-full text-white transition-colors z-10"
              >
                <IconX size={24} />
              </button>
              
              {/* Image */}
              <img 
                src="/images/general/outside.png" 
                alt="GCash QR Code Zoomed" 
                className="w-full h-auto aspect-square object-cover rounded-2xl" 
              />
              
              <div className="p-6 pb-2 text-center">
                <h3 className="text-xl font-bold font-heading text-text-dark dark:text-white mb-2">Official GCash QR</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Scan this code using your GCash app to send your tithes and offerings.</p>
              </div>
              
              <div className="px-6 pb-6 pt-4 text-center">
                <a 
                  href="/images/general/outside.png" 
                  download="johia-gcash-qr.png"
                  className="inline-flex items-center justify-center gap-2 bg-brand-yellow text-white font-bold tracking-wide uppercase text-sm px-6 py-3 rounded-full hover:bg-brand-yellow/90 hover:shadow-lg hover:scale-105 transition-all"
                >
                  <IconDownload size={20} />
                  Save QR Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
