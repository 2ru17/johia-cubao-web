import React, { useState } from 'react';
import PageMeta from '../components/seo/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import { IconMapPin, IconClock, IconPhone, IconMail } from '@tabler/icons-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for Web3Forms integration
    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark">
      <PageMeta title="Contact" description="Get in touch with JOHIA Cubao." />

      {/* SECTION 1: HERO */}
      <section className="relative pt-40 pb-32 flex items-center justify-center overflow-hidden bg-aurora">
        <div className="absolute inset-0 bg-overlay-dark/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection variant="scale">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-heading text-shimmer mb-4">
              This is your Home.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-sans max-w-2xl mx-auto font-light">
              A sanctuary in the heart of Quezon City.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2: FORM SECTION */}
      <section id="contact-main-form" className="py-24 bg-[#eaeaea] relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
            
            {/* Left Column: Info */}
            <AnimatedSection variant="slide-right" className="flex flex-col">
              <h2 className="text-5xl md:text-6xl font-extrabold font-heading text-shimmer-dark mb-6 tracking-tight">Let's Connect</h2>
              <p className="text-gray-700 dark:text-gray-300 font-sans text-xl mb-12 leading-relaxed">
                Whether you need prayer, have questions about our ministries, or want to plan your visit, we're here for you. Reach out to us using the form or the details below.
              </p>

              <div className="space-y-8 mb-10">
                <div className="flex items-start space-x-6 text-text-dark dark:text-text-light group">
                  <div className="bg-white dark:bg-background-dark p-4 rounded-full text-brand-yellow shadow-lg group- group-hover:bg-brand-yellow group-hover:text-white transition-all duration-300">
                    <IconMapPin size={28} />
                  </div>
                  <div className="flex flex-col justify-center pt-1">
                    <h4 className="font-heading font-extrabold text-xl mb-1">Visit Us</h4>
                    <p className="text-gray-600 dark:text-gray-300 font-sans text-lg">#15 Cambridge St. Cubao, Quezon City, Philippines</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 text-text-dark dark:text-text-light group">
                  <div className="bg-white dark:bg-background-dark p-4 rounded-full text-brand-yellow shadow-lg group- group-hover:bg-brand-yellow group-hover:text-white transition-all duration-300">
                    <IconClock size={28} />
                  </div>
                  <div className="flex flex-col justify-center pt-1">
                    <h4 className="font-heading font-extrabold text-xl mb-1">Service Times</h4>
                    <p className="text-gray-600 dark:text-gray-300 font-sans text-lg">Sundays @ 10:15 AM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 text-text-dark dark:text-text-light group">
                  <div className="bg-white dark:bg-background-dark p-4 rounded-full text-brand-yellow shadow-lg group- group-hover:bg-brand-yellow group-hover:text-white transition-all duration-300">
                    <IconMail size={28} />
                  </div>
                  <div className="flex flex-col justify-center pt-1">
                    <h4 className="font-heading font-extrabold text-xl mb-1">Email Us</h4>
                    <p className="text-gray-600 dark:text-gray-300 font-sans text-lg">johiacubao.info@gmail.com</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Column: Contact Form */}
            <AnimatedSection variant="rise" delay={0.2} className="bg-white dark:bg-background-dark p-10 md:p-14 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
              <h3 className="text-3xl font-extrabold font-heading text-text-dark dark:text-text-light mb-10 tracking-tight">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-800 dark:text-gray-200 mb-3 font-sans uppercase tracking-wider">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all bg-gray-50 text-text-dark dark:text-text-light text-lg"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Juan Dela Cruz"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-800 dark:text-gray-200 mb-3 font-sans uppercase tracking-wider">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all bg-gray-50 text-text-dark dark:text-text-light text-lg"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="juan@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-800 dark:text-gray-200 mb-3 font-sans uppercase tracking-wider">Message *</label>
                  <textarea 
                    id="message" 
                    required 
                    rows="6"
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all bg-gray-50 text-text-dark dark:text-text-light text-lg resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <Button type="submit" variant="solid" className="w-full text-xl py-5 shadow-xl  transition-all">
                  Send Message
                </Button>

                {status && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-green-50 text-green-700 border border-green-200 rounded-xl text-center font-bold font-sans"
                  >
                    {status}
                  </motion.div>
                )}
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 3: MAP SECTION */}
      <section className="bg-[#212528] py-24 border-t border-white/5 relative">
        <AnimatedSection variant="rise" className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-brand-yellow mb-6 drop-shadow-md">Plan Your Visit</h2>
          <p className="text-gray-400 font-sans text-xl max-w-2xl mx-auto">
            We are conveniently located in the heart of Cubao. Use the map below to find directions.
          </p>
        </AnimatedSection>
        
        <div className="container mx-auto px-6">
          <AnimatedSection variant="scale" className="h-[600px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 group relative max-w-6xl mx-auto">
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
      </section>

    </div>
  );
}
