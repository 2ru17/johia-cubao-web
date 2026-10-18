import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageMeta from '../components/seo/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import Toast from '../components/ui/Toast';
import { IconMapPin, IconClock, IconPhone, IconBrandFacebook } from '@tabler/icons-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [botcheck, setBotcheck] = useState(false);
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Honeypot triggered: simulate success to thwart bots without consuming API quota
    if (botcheck) {
      setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);
    
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "e9ab44a9-991f-4643-b646-167c3c6075a8";
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          subject: "New Contact Form Submission - JOHIA Cubao Website"
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
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
      <section id="contact-main-form" className="py-24 bg-[#eaeaea] dark:bg-background-dark relative z-20">
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
                  <div className="bg-white dark:bg-background-dark p-4 rounded-full text-brand-yellow shadow-lg group-hover:bg-brand-yellow group-hover:text-white transition-all duration-300">
                    <IconMapPin size={28} />
                  </div>
                  <div className="flex flex-col justify-center pt-1">
                    <h4 className="font-heading font-extrabold text-xl mb-1">Our Location</h4>
                    <p className="text-gray-600 dark:text-gray-300 font-sans text-lg">#15 Cambridge St. Cubao, Quezon City, Philippines</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 text-text-dark dark:text-text-light group">
                  <div className="bg-white dark:bg-background-dark p-4 rounded-full text-brand-yellow shadow-lg group-hover:bg-brand-yellow group-hover:text-white transition-all duration-300">
                    <IconClock size={28} />
                  </div>
                  <div className="flex flex-col justify-center pt-1">
                    <h4 className="font-heading font-extrabold text-xl mb-1">Office Hours</h4>
                    <p className="text-gray-600 dark:text-gray-300 font-sans text-lg">Tuesdays to Thursdays (9AM to 6PM)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 text-text-dark dark:text-text-light group">
                  <div className="bg-white dark:bg-background-dark p-4 rounded-full text-brand-yellow shadow-lg group-hover:bg-brand-yellow group-hover:text-white transition-all duration-300">
                    <IconPhone size={28} />
                  </div>
                  <div className="flex flex-col justify-center pt-1">
                    <h4 className="font-heading font-extrabold text-xl mb-1">Phone Number</h4>
                    <p className="text-gray-600 dark:text-gray-300 font-sans text-lg">270018356</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 text-text-dark dark:text-text-light group">
                  <div className="bg-white dark:bg-background-dark p-4 rounded-full text-brand-yellow shadow-lg group-hover:bg-[#1877F2] group-hover:text-white transition-all duration-300">
                    <IconBrandFacebook size={28} />
                  </div>
                  <div className="flex flex-col justify-center pt-1">
                    <h4 className="font-heading font-extrabold text-xl mb-1">Message Us</h4>
                    <p className="text-gray-600 dark:text-gray-300 font-sans text-lg">
                      <a href="https://facebook.com/johiacubaoph" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] hover:underline transition-colors">
                        JOHIA Cubao Facebook Page
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 text-text-dark dark:text-text-light group">
                  <div className="bg-white dark:bg-background-dark p-4 rounded-full text-brand-yellow shadow-lg group-hover:bg-brand-yellow group-hover:text-white transition-all duration-300">
                    <IconClock size={28} />
                  </div>
                  <div className="flex flex-col justify-center pt-1">
                    <h4 className="font-heading font-extrabold text-xl mb-1">Service Schedule</h4>
                    <p className="text-gray-600 dark:text-gray-300 font-sans text-lg">Sundays, 10AM</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Column: Contact Form */}
            <AnimatedSection variant="rise" delay={0.2} className="bg-white dark:bg-white/5 dark:backdrop-blur-md p-10 md:p-14 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-white/[0.08]">
              <h3 className="text-3xl font-extrabold font-heading text-text-dark dark:text-text-light mb-10 tracking-tight">Get in Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Honeypot field for anti-bot protection */}
                <input 
                  type="checkbox" 
                  name="botcheck" 
                  className="hidden" 
                  style={{ display: 'none' }} 
                  checked={botcheck} 
                  onChange={(e) => setBotcheck(e.target.checked)} 
                  tabIndex="-1" 
                  autoComplete="off" 
                  aria-hidden="true"
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-800 dark:text-gray-200 mb-3 font-sans uppercase tracking-wider">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    maxLength={100}
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all bg-gray-50 dark:bg-white/5 text-text-dark dark:text-text-light text-lg"
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
                    maxLength={100}
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all bg-gray-50 dark:bg-white/5 text-text-dark dark:text-text-light text-lg"
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
                    maxLength={2000}
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all bg-gray-50 dark:bg-white/5 text-text-dark dark:text-text-light text-lg resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <Button type="submit" variant="solid" className="w-full text-xl py-5 shadow-xl transition-all" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {status && (
                  <Toast 
                    message={status.message}
                    type={status.type}
                    isVisible={!!status}
                    onClose={() => setStatus(null)}
                  />
                )}
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 3: MAP SECTION */}
      <section className="bg-[#111] py-24 border-t border-white/5 relative">
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
