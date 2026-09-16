import React from 'react';
import PageMeta from '../components/seo/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import { Link } from 'react-router-dom';

export default function CookiePolicy() {
  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark min-h-screen">
      <PageMeta title="Cookie Policy | JOHIA Cubao" description="How we use cookies on the JOHIA Cubao website." />

      <section className="relative pt-40 pb-16 bg-aurora border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-overlay-dark/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <AnimatedSection variant="fade">
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-text-light mb-4 tracking-tight">Cookie Policy</h1>
            <p className="text-lg text-gray-300 font-sans">Last updated: September 17, 2026</p>
          </AnimatedSection>
        </div>
      </section>

      <SectionWrapper className="max-w-4xl mx-auto px-6 py-16">
        <AnimatedSection variant="fade">
          <article className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:font-extrabold prose-h2:text-brand-yellow/90 prose-a:text-brand-yellow mx-auto max-w-3xl leading-relaxed">
            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.
            </p>

            <h2>How We Use Cookies</h2>
            <p>The JOHIA Cubao website uses the following types of cookies:</p>

            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They include cookies that store your theme preference (light/dark mode) and cookie consent choice. These cannot be disabled.
            </p>

            <h3>Hosting Cookies</h3>
            <p>
              Our hosting provider (Hostinger) may set cookies for security, load balancing, and performance monitoring. These are necessary for the website infrastructure to operate.
            </p>

            <h3>Third-Party Cookies</h3>
            <p>
              When you interact with embedded content (such as YouTube videos on our Media page), those third-party services may set their own cookies. We do not control these cookies.
            </p>

            <h2>Managing Cookies</h2>
            <p>
              You can manage your cookie preferences through our cookie consent banner when you first visit the site. You can also control cookies through your browser settings:
            </p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noreferrer">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noreferrer">Microsoft Edge</a></li>
            </ul>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about our use of cookies, contact us at{' '}
              <a href="mailto:johiacubao.info@gmail.com">johiacubao.info@gmail.com</a> or visit our{' '}
              <Link to="/contact">Contact page</Link>.
            </p>
          </article>
        </AnimatedSection>
      </SectionWrapper>
    </div>
  );
}
