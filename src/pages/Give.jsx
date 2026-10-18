import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageMeta from '../components/seo/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import TiltCard from '../components/ui/TiltCard';
import { 
  IconBuildingBank, 
  IconSchool, 
  IconCurrencyDollar, 
  IconCoins, 
  IconCopy, 
  IconCheck,
  IconX,
  IconDownload
} from '@tabler/icons-react';

export default function Give() {
  const [copiedAccount, setCopiedAccount] = useState(null);
  const [showQrModal, setShowQrModal] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const copyToClipboard = (rawNumber) => {
    navigator.clipboard.writeText(rawNumber);
    setCopiedAccount(rawNumber);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  const donationCards = [
    {
      id: "tithes-current",
      title: "Tithes & Offerings",
      badge: "Current Account",
      currency: "PHP",
      icon: IconBuildingBank,
      desc: "Support our ongoing ministry, Sunday gatherings, and general operations.",
      bank: "BPI",
      accountName: "Jesus Our Hope International Assemblies",
      accountType: "Current Account",
      accountNumber: "0120-1245-28",
      rawNumber: "0120124528",
    },
    {
      id: "tugon-ng-puso",
      title: "Tugon ng Puso",
      badge: "Youth Scholars",
      currency: "PHP",
      icon: IconSchool,
      desc: "Our scholarship fund dedicated to empowering deserving youth scholars through tuition assistance and mentorship.",
      bank: "BPI",
      accountName: "Jesus Our Hope International Assemblies",
      accountType: "Savings Account",
      accountNumber: "0123-4711-48",
      rawNumber: "0123471148",
    },
    {
      id: "tithes-dollar",
      title: "Tithes & Offerings",
      badge: "Dollar Account",
      currency: "USD",
      icon: IconCurrencyDollar,
      desc: "For global mission partners, overseas members, and international supporters giving in US Dollars.",
      bank: "BPI",
      accountName: "Jesus Our Hope International Assemblies",
      accountType: "Dollar Account",
      accountNumber: "0124-0324-07",
      rawNumber: "0124032407",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark transition-colors duration-500">
      <PageMeta title="Brew with Us" description="Partner with us in reaching others through your generous giving." />

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

      {/* Cards Section: 4 Cards */}
      <SectionWrapper className="bg-background-light dark:bg-background-dark py-24 transition-colors duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto -mt-10">
          
          {/* Bank Cards (1 to 3) */}
          {donationCards.map((card, idx) => {
            const Icon = card.icon;
            const isCopied = copiedAccount === card.rawNumber;
            const isExpanded = !!expandedCards[card.id];

            return (
              <AnimatedSection key={card.id} variant="fade" delay={(idx + 1) * 0.1}>
                <TiltCard className="h-full">
                  <div className="group relative bg-white dark:bg-background-footer rounded-2xl p-6 sm:p-7 text-center border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-[0_10px_40px_rgba(251,176,59,0.15)] hover:border-brand-yellow/30 transition-all duration-500 overflow-hidden h-full flex flex-col">
                    <div className="flex justify-between items-center mb-5">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/30">
                        {card.badge}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        {card.currency}
                      </span>
                    </div>

                    <div className="w-16 h-16 bg-brand-yellow/10 text-brand-yellow rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors duration-500 group-hover:bg-brand-yellow group-hover:text-white shadow-sm">
                      <Icon size={32} />
                    </div>

                    <h3 className="text-2xl font-bold font-heading text-text-dark dark:text-text-light dark:text-white mb-2 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 font-sans text-xs sm:text-sm mb-6 flex-grow leading-relaxed">
                      {card.desc}
                    </p>

                    <div className="mt-auto pt-2 space-y-3">
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="text-left bg-gray-50 dark:bg-neutral-900/90 p-4 rounded-xl border border-gray-200/80 dark:border-white/10 space-y-2 text-xs mb-3">
                              <div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Bank</p>
                                <p className="font-semibold text-text-dark dark:text-white text-sm">{card.bank}</p>
                              </div>
                              <div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Account Name</p>
                                <p className="font-medium text-text-dark dark:text-white text-xs leading-snug">
                                  {card.accountName}
                                </p>
                              </div>
                              <div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Account Number</p>
                                <div className="flex items-center justify-between gap-2 mt-0.5">
                                  <p className="font-mono font-bold text-text-dark dark:text-brand-yellow text-sm">
                                    {card.accountNumber}
                                  </p>
                                  <button 
                                    onClick={() => copyToClipboard(card.rawNumber)}
                                    className="p-1.5 rounded-lg bg-brand-yellow/10 text-brand-yellow hover:bg-brand-yellow hover:text-text-dark transition-all cursor-pointer"
                                    title="Copy account number"
                                  >
                                    {isCopied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <button 
                        onClick={() => toggleCard(card.id)}
                        className="w-full py-3 px-4 rounded-xl font-bold tracking-wider uppercase text-xs border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-brand-yellow hover:text-brand-yellow transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isExpanded ? 'Hide Info' : 'Show Info'}
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </AnimatedSection>
            );
          })}

          {/* Option 4: In Person (Offering Box) */}
          <AnimatedSection variant="fade" delay={0.4}>
            <TiltCard className="h-full">
              <div className="group relative bg-white dark:bg-background-footer rounded-2xl p-6 sm:p-7 text-center border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-[0_10px_40px_rgba(251,176,59,0.15)] hover:border-brand-yellow/30 transition-all duration-500 overflow-hidden h-full flex flex-col">
                <div className="flex justify-between items-center mb-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/30">
                    Sunday Gathering
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">In Person</span>
                </div>

                <div className="w-16 h-16 bg-brand-yellow/10 text-brand-yellow rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors duration-500 group-hover:bg-brand-yellow group-hover:text-white shadow-sm">
                  <IconCoins size={32} />
                </div>

                <h3 className="text-2xl font-bold font-heading text-text-dark dark:text-text-light dark:text-white mb-2 transition-colors">
                  In Person
                </h3>
                <p className="text-gray-500 dark:text-gray-400 font-sans text-xs sm:text-sm mb-6 flex-grow leading-relaxed">
                  Give during our Sunday worship gatherings using the designated offering envelopes and boxes.
                </p>

                <div className="mt-auto pt-2 space-y-3">
                  <AnimatePresence>
                    {expandedCards['in-person'] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="text-left bg-gray-50 dark:bg-neutral-900/90 p-4 rounded-xl border border-gray-200/80 dark:border-white/10 space-y-2 text-xs mb-3">
                          <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Venue</p>
                            <p className="font-semibold text-text-dark dark:text-white text-sm">JOHIA Center, Cubao</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Schedule</p>
                            <p className="font-medium text-text-dark dark:text-white text-xs leading-snug">
                              Every Sunday Worship Service
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Channel</p>
                            <p className="font-medium text-text-dark dark:text-brand-yellow text-sm">
                              Offering Box & Envelopes
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button 
                    onClick={() => toggleCard('in-person')}
                    className="w-full py-3 px-4 rounded-xl font-bold tracking-wider uppercase text-xs border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-brand-yellow hover:text-brand-yellow transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {expandedCards['in-person'] ? 'Hide Info' : 'Show Info'}
                  </button>
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
                    Your tithes and offerings directly fuel our mission. This year, your faithful giving is funding essential sanctuary upgrades to welcome more families, expanding our outreach through dedicated hospital and jail ministries, youth scholarships, and empowering the next generation through Wildfire Youth.
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
              <img loading="lazy" 
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
