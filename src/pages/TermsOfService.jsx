import React from 'react';
import PageMeta from '../components/seo/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark min-h-screen">
      <PageMeta title="Terms of Service | JOHIA Cubao" description="Terms and conditions for using the JOHIA Cubao website." />

      <section className="relative pt-40 pb-16 bg-aurora border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-overlay-dark/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <AnimatedSection variant="fade">
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-shimmer mb-4 tracking-tight">Terms of Service</h1>
            <p className="text-lg text-gray-300 font-sans">Last updated: September 17, 2026</p>
          </AnimatedSection>
        </div>
      </section>

      <SectionWrapper className="max-w-4xl mx-auto px-6 py-16">
        <AnimatedSection variant="fade">
          <article className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:font-extrabold prose-h2:text-brand-yellow/90 prose-a:text-brand-yellow mx-auto max-w-3xl leading-relaxed">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using the JOHIA Cubao website (<strong>johiacubao.com</strong>), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.
            </p>

            <h2>Use of Website</h2>
            <p>You agree to use this website only for lawful purposes and in a manner that does not:</p>
            <ul>
              <li>Infringe on the rights of others.</li>
              <li>Restrict or inhibit other users from using the website.</li>
              <li>Attempt to gain unauthorized access to the website or its systems.</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, images, sermon notes, and devotionals — is the property of JOHIA Cubao or its content creators and is protected by applicable copyright laws.
            </p>
            <p>
              You may share our content for personal, non-commercial, and ministry purposes with proper attribution. Reproduction for commercial use requires written permission.
            </p>

            <h2>Artificial Intelligence (AI) & Creative Usage Policy</h2>
            <p>
              To uphold integrity and spiritual authenticity across our digital platforms:
            </p>
            <ul>
              <li><strong>Visual Design Exclusivity:</strong> Generative AI technologies are employed strictly for visual styling, digital textures, and atmospheric abstract illustrations (e.g., thumbnail backgrounds for devotional and sermon posts).</li>
              <li><strong>Human-Authored Spiritual Content:</strong> We strictly prohibit AI generation of pastoral sermons, devotionals, theology, ministry teachings, or prayers. Every message published is prayerfully authored and reviewed by human pastoral leadership.</li>
            </ul>

            <h2>User-Submitted Content</h2>
            <p>
              When you submit content through our contact form or any other means, you grant JOHIA Cubao the right to use, store, and respond to that content as necessary for church operations.
            </p>

            <h2>External Links</h2>
            <p>
              Our website may contain links to external websites (YouTube, social media, payment platforms). We are not responsible for the content or privacy practices of these external sites.
            </p>

            <h2>Disclaimer</h2>
            <p>
              This website and its content are provided "as is" without warranties of any kind, either express or implied. JOHIA Cubao does not guarantee the accuracy, completeness, or reliability of any content on this website.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              JOHIA Cubao shall not be liable for any damages arising from your use of this website, including but not limited to direct, indirect, incidental, or consequential damages.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, contact us at{' '}
              <a href="mailto:johiacubao.info@gmail.com">johiacubao.info@gmail.com</a> or visit our{' '}
              <Link to="/contact">Contact page</Link>.
            </p>
          </article>
        </AnimatedSection>
      </SectionWrapper>
    </div>
  );
}
