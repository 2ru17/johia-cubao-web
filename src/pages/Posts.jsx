import React from 'react';
import PageMeta from '../components/seo/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import TiltCard from '../components/ui/TiltCard';
import EmptyState from '../components/ui/EmptyState';
import { IconArrowRight } from '@tabler/icons-react';
import { cn } from '../lib/utils';

const samplePosts = [
  {
    title: "Understanding Grace in Everyday Life",
    date: "September 12, 2026",
    excerpt: "A deep dive into how God's grace transforms our daily routines and interactions with others in our community.",
    category: "Devotional",
    size: "large" // Spans 2 cols, 2 rows
  },
  {
    title: "Youth Camp Highlights",
    date: "August 28, 2026",
    excerpt: "What an amazing weekend! Relive the best moments from our summer youth retreat up in the mountains.",
    category: "Events",
    size: "tall" // Spans 1 col, 2 rows
  },
  {
    title: "The Power of Corporate Prayer",
    date: "August 15, 2026",
    excerpt: "Why do we gather to pray? Pastor Neil explains the biblical foundation for coming together in prayer.",
    category: "Sermon Notes",
    size: "normal" // Spans 1 col, 1 row
  },
  {
    title: "Serving the City",
    date: "July 30, 2026",
    excerpt: "A recap of our recent outreach program in the heart of Cubao.",
    category: "Outreach",
    size: "normal"
  }
];

export default function Posts() {
  const hasPosts = samplePosts && samplePosts.length > 0;

  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark min-h-screen">
      <PageMeta title="Posts" description="Read our latest blog posts, updates, and devotionals." />

      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-aurora border-b border-white/5 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-overlay-dark/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection variant="fade">
            <h1 className="text-fluid-h1 font-extrabold font-heading text-text-light mb-6 drop-shadow-md">
              Latest Posts
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-sans font-medium max-w-3xl mx-auto drop-shadow-sm leading-relaxed mb-8">
              Stay encouraged with our latest devotionals, event recaps, and sermon notes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Posts Bento Box Grid */}
      <SectionWrapper className="bg-white dark:bg-background-dark py-24 flex-grow">
        <div className="max-w-7xl mx-auto">
          {!hasPosts ? (
            <EmptyState title="No Posts Yet" message="We are currently writing some amazing content for you. Check back soon!" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {samplePosts.map((post, idx) => {
                
                // Determine CSS classes for Bento Box sizing
                let gridClass = "col-span-1";
                if (post.size === "large") {
                  gridClass = "md:col-span-2 lg:col-span-2"; // Span 2 columns, but let height be natural
                }

                return (
                  <AnimatedSection 
                    key={idx} 
                    variant="scale" 
                    delay={idx * 0.1} 
                    className={cn("w-full h-full", gridClass)}
                  >
                    <TiltCard className="w-full h-full">
                      <div className="bg-background-light dark:bg-background-dark border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:border-brand-yellow/50 transition-all duration-300 group flex flex-col h-full overflow-hidden relative">
                        {/* Decorative hover glow for all cards */}
                        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
                        
                        <div className="flex justify-between items-center mb-6 relative z-10">
                          <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow bg-brand-yellow/10 px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-sm font-sans text-gray-400 font-medium">{post.date}</span>
                        </div>
                        
                        <h3 className={cn(
                          "font-bold font-heading text-text-dark dark:text-text-light mb-4 group-hover:text-brand-yellow transition-colors relative z-10",
                          post.size === "large" ? "text-3xl lg:text-4xl" : "text-2xl"
                        )}>
                          {post.title}
                        </h3>
                        
                        <p className={cn(
                          "text-gray-500 dark:text-gray-400 font-sans mb-8 flex-grow leading-relaxed relative z-10",
                          post.size === "large" ? "text-lg max-w-xl" : "text-base"
                        )}>
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center text-brand-yellow font-bold font-sans text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform cursor-pointer w-max relative z-10 mt-auto">
                          Read More <IconArrowRight size={16} className="ml-2" />
                        </div>
                      </div>
                    </TiltCard>
                  </AnimatedSection>
                );
              })}
            </div>
          )}
        </div>
      </SectionWrapper>
    </div>
  );
}
