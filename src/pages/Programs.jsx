import React from 'react';
import PageMeta from '../components/seo/PageMeta';
import ZLayoutSection from '../components/ui/ZLayoutSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';

export default function Programs() {
  return (
    <div className="flex flex-col w-full bg-background-dark">
      <PageMeta title="Programs" description="Equip your faith through JOHIA Cubao's programs." />

      {/* Hero */}
      <section className="relative pt-40 pb-32 flex items-center justify-center overflow-hidden bg-aurora border-b border-white/5">
        <div className="absolute inset-0 bg-overlay-dark/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection variant="scale">
            <h1 className="text-fluid-h1 font-extrabold font-heading text-shimmer mb-6">Equip Your Faith</h1>
            <p className="text-xl md:text-2xl text-gray-300 font-sans font-medium max-w-3xl mx-auto drop-shadow-sm leading-relaxed mb-8">
              Discover pathways to grow deeper in your relationship with God through our structured programs.
            </p>
            <Button variant="solid" className="!bg-brand-yellow !text-text-dark hover:!bg-white shadow-xl transition-all" href="/ministries#ministries-serve">Get Involved</Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Z-Layout Sections */}
      <div className="flex flex-col">
        <ZLayoutSection 
          id="programs-sunday-service"
          title="Sunday Worship Service"
          description={<p>Experience the presence of God through passionate worship and transformative preaching. Our Sunday services are the heartbeat of our church family where we gather to seek His face, hear His Word, and build authentic community.</p>}
          imageSrc="/images/general/CoreValues.png"
          imageAlt="Sunday Worship Service"
          reverse={false}
          texture="dark"
        />
        
        <ZLayoutSection 
          id="programs-soc"
          title="School of Champions (SOC)"
          description={<p>A structured discipleship track designed to equip believers with foundational truths, leadership skills, and biblical doctrines to fulfill their God-given destiny. From discovering your spiritual gifts to leading others, SOC is your path to spiritual maturity.</p>}
          imageSrc="/images/general/retreat-pic.jpg"
          imageAlt="School of Champions"
          reverse={true}
          texture="light"
          className="text-text-dark dark:text-text-light" // Ensure body text is dark on light texture
        />
        
        <ZLayoutSection 
          id="programs-prayer"
          title="Dawn Watch & Prayer Gatherings"
          description={<p>We believe in the absolute power of prayer. Join our intercessory team and dawn watch gatherings as we stand in the gap for our city, nation, and church. This is where battles are fought and won before the day even begins.</p>}
          imageSrc="/images/ministries/prayer.jpg"
          imageAlt="Prayer Gatherings"
          reverse={false}
          texture="dark"
        />
        
        <ZLayoutSection 
          id="programs-outreach"
          title="Community Outreach"
          description={<p>Faith in action. Our community outreach programs are dedicated to being the hands and feet of Jesus, providing practical help, resources, and unyielding hope to the marginalized and broken in our city.</p>}
          imageSrc="/images/ministries/sundayschl.jpg"
          imageAlt="Community Outreach"
          reverse={true}
          texture="light"
          className="text-text-dark dark:text-text-light"
        />

        <ZLayoutSection 
          id="programs-retreats"
          title="Life Retreats"
          description={<p>Set aside time to encounter God without distractions. Our annual Life Retreats are immersive weekend experiences focused on spiritual breakthrough, deep fellowship, and profound personal encounters with the Holy Spirit.</p>}
          imageSrc="/images/general/retreat-pic.jpg"
          imageAlt="Life Retreats"
          reverse={false}
          texture="dark"
        />

        <ZLayoutSection 
          id="programs-johia-brews"
          title="JOHIA Brews"
          description={<p>More than just a coffee shop, JOHIA Brews is a hub for connection, fellowship, and discipleship. Grab a cup of freshly brewed coffee, meet new friends, and enjoy heartfelt conversations in a welcoming, faith-filled atmosphere.</p>}
          imageSrc="/images/general/CoreValues.png"
          imageAlt="JOHIA Brews"
          reverse={true}
          texture="light"
          className="text-text-dark dark:text-text-light"
        />
      </div>

      {/* Bottom CTA */}
      <section className="bg-background-light dark:bg-background-dark text-text-dark dark:text-text-light text-center py-16 border-t border-gray-100 transition-colors duration-500">
        <AnimatedSection variant="fade" className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-6 tracking-tight">Support Our Mission</h2>
          <p className="text-xl md:text-2xl font-sans max-w-2xl mx-auto mb-10 font-medium text-gray-500 dark:text-gray-400">
            Partner with us in advancing the Kingdom through your generous giving.
          </p>
          <Button variant="solid" className="px-10 py-4 text-lg shadow-md transition-all animate-glow-pulse" href="/give">
            Brew with Us
          </Button>
        </AnimatedSection>
      </section>
    </div>
  );
}
