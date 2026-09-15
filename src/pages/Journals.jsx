import React from 'react';
import PageMeta from '../components/seo/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';

const journals = [
  {
    title: "Exploring the Heart of Community",
    excerpt: "What does it truly mean to live in a biblical community? A look into how small groups can transform your walk with Christ.",
    date: "October 12, 2026",
    tag: "Fellowship",
    image: "/images/general/retreat-pic.jpg"
  },
  {
    title: "The Power of Dawn Watch Prayers",
    excerpt: "Starting the day seeking His face shifts our perspective. Here is a reflection from our recent corporate prayer gathering.",
    date: "September 28, 2026",
    tag: "Prayer",
    image: "/images/ministries/prayer.jpg"
  },
  {
    title: "Building the Next Generation",
    excerpt: "Insights from the Wildfire Youth Ministry on engaging today's generation with the timeless truth of the Gospel.",
    date: "September 15, 2026",
    tag: "Youth",
    image: "/images/ministries/sundayschl.jpg"
  }
];

export default function Journals() {
  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark text-text-dark dark:text-text-light">
      <PageMeta title="Journals" description="Read our latest articles and reflections." />

      {/* Hero */}
      <section className="relative py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-fluid-h1 font-extrabold font-heading text-text-light mb-6 drop-shadow-md">
              Our Journals
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-sans font-medium max-w-3xl mx-auto drop-shadow-sm leading-relaxed mb-8">
              Reflections, testimonies, and updates from the JOHIA Cubao family.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <SectionWrapper className="bg-background-light dark:bg-background-dark">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {journals.map((post, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1} className="bg-white dark:bg-background-dark rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full group">
              <div className="aspect-[16/9] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group- transition-transform duration-700" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-brand-yellow uppercase tracking-wider">{post.tag}</span>
                  <span className="text-xs text-gray-400 font-sans">{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold font-heading mb-3 text-text-dark dark:text-text-light group-hover:text-brand-yellow transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-sans text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <a href="#read-more" className="text-sm font-bold font-sans text-text-dark dark:text-text-light border-b-2 border-brand-yellow pb-1 self-start hover:text-brand-yellow transition-colors">
                  Read Article →
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
