import React from 'react';
import PageMeta from '../components/seo/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark min-h-screen">
      <PageMeta title="Privacy Policy | JOHIA Cubao" description="How we collect, use, and protect your personal information." />

      <section className="relative pt-40 pb-16 bg-aurora border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-overlay-dark/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <AnimatedSection variant="fade">
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-text-light mb-4 tracking-tight">Privacy Policy</h1>
            <p className="text-lg text-gray-300 font-sans">Last updated: September 17, 2026</p>
          </AnimatedSection>
        </div>
      </section>

      <SectionWrapper className="max-w-4xl mx-auto px-6 py-16">
        <AnimatedSection variant="fade">
          <article className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:font-extrabold prose-h2:text-brand-yellow/90 prose-a:text-brand-yellow mx-auto max-w-3xl leading-relaxed">
            <h2>Who We Are</h2>
            <p>
              This website is operated by <strong>Jesus Our Hope International Assemblies (JOHIA) Cubao</strong>, a local church community based in Cubao, Quezon City, Philippines. Our website address is <strong>johiacubao.com</strong>.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect information you voluntarily provide to us, including:</p>
            <ul>
              <li><strong>Contact Form:</strong> When you submit our contact form, we collect your name, email address, and message content.</li>
              <li><strong>Hosting Data:</strong> Our hosting provider (Hostinger) may automatically collect server logs including IP addresses, browser type, and pages visited for security and performance purposes.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>To respond to your inquiries submitted through the contact form.</li>
              <li>To improve and maintain the performance of our website.</li>
              <li>To comply with applicable legal obligations.</li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>Our website may contain embedded content from third-party services:</p>
            <ul>
              <li><strong>YouTube:</strong> Sermon videos embedded on our Media page are served by YouTube and are subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google's Privacy Policy</a>.</li>
              <li><strong>Hostinger:</strong> Our hosting infrastructure is provided by Hostinger, which may process server-level data per their own privacy policy.</li>
            </ul>

            <h2>Data Retention</h2>
            <p>
              Contact form submissions are retained only as long as necessary to respond to your inquiry. We do not store your data indefinitely or sell it to third parties.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to the personal data we hold about you.</li>
              <li>Request deletion of your personal data.</li>
              <li>Withdraw consent at any time.</li>
            </ul>
            <p>To exercise these rights, contact us at <a href="mailto:johiacubao.info@gmail.com">johiacubao.info@gmail.com</a>.</p>

            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date.</p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:johiacubao.info@gmail.com">johiacubao.info@gmail.com</a> or visit our{' '}
              <Link to="/contact">Contact page</Link>.
            </p>
          </article>
        </AnimatedSection>
      </SectionWrapper>
    </div>
  );
}
