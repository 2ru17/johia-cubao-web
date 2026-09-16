import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/seo/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import TiltCard from '../components/ui/TiltCard';
import EmptyState from '../components/ui/EmptyState';
import Button from '../components/ui/Button';
import { IconArrowRight, IconSearch, IconChevronLeft, IconChevronRight, IconChevronDown } from '@tabler/icons-react';
import { cn } from '../lib/utils';

// Dynamically load all MDX posts and their frontmatter
const mdxPosts = import.meta.glob('../content/posts/*.mdx', { eager: true });
const allPosts = Object.keys(mdxPosts)
  .map(path => {
    const fm = mdxPosts[path].frontmatter;
    if (!fm) return null;
    const inferredSlug = path.split('/').pop().replace('.mdx', '');
    return { ...fm, slug: fm.slug || inferredSlug };
  })
  .filter(Boolean)
  // Optionally sort by date here if needed
  .sort((a, b) => new Date(b.date) - new Date(a.date)); 

const moodStyles = {
  joy: {
    bg: "bg-white dark:bg-[#1a1a1a]",
    border: "border-yellow-100 dark:border-yellow-900/30 hover:border-yellow-300 dark:hover:border-yellow-500/50",
    glow: "bg-yellow-400/30 dark:bg-yellow-500/10",
    badge: "text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30",
    readMore: "text-yellow-500 dark:text-yellow-400"
  },
  peace: {
    bg: "bg-white dark:bg-[#1a1a1a]",
    border: "border-blue-100 dark:border-blue-900/30 hover:border-blue-300 dark:hover:border-blue-500/50",
    glow: "bg-blue-400/30 dark:bg-blue-500/10",
    badge: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30",
    readMore: "text-blue-500 dark:text-blue-400"
  },
  fire: {
    bg: "bg-white dark:bg-[#1a1a1a]",
    border: "border-red-100 dark:border-red-900/30 hover:border-red-300 dark:hover:border-red-500/50",
    glow: "bg-red-400/30 dark:bg-red-500/10",
    badge: "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30",
    readMore: "text-red-500 dark:text-red-400"
  },
  reflection: {
    bg: "bg-white dark:bg-[#1a1a1a]",
    border: "border-purple-100 dark:border-purple-900/30 hover:border-purple-300 dark:hover:border-purple-500/50",
    glow: "bg-purple-400/30 dark:bg-purple-500/10",
    badge: "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30",
    readMore: "text-purple-500 dark:text-purple-400"
  },
  default: {
    bg: "bg-white dark:bg-[#1a1a1a]",
    border: "border-gray-100 dark:border-white/5 hover:border-brand-yellow/50",
    glow: "bg-brand-yellow/20 dark:bg-brand-yellow/5",
    badge: "text-brand-yellow bg-brand-yellow/10",
    readMore: "text-brand-yellow"
  }
};

export default function Posts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All Tags');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7; // Mathematically perfect for our Bento grid

  // Extract all unique tags from posts
  const allTags = ['All Tags', ...new Set(allPosts.flatMap(post => post.tags || []))];

  // Filter posts based on search term and selected tag
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.category?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'All Tags' || (post.tags && post.tags.includes(selectedTag));
    return matchesSearch && matchesTag;
  });

  const hasPosts = filteredPosts.length > 0;
  
  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 7-Post Bento Box Layout Engine
  const getBentoStyles = (index) => {
    const layoutIndex = index % 7;
    switch (layoutIndex) {
      case 0: return { gridClass: "md:col-span-2 lg:col-span-2 row-span-2", size: "large" };
      case 1: return { gridClass: "col-span-1 row-span-1", size: "normal" };
      case 2: return { gridClass: "col-span-1 row-span-1", size: "normal" };
      case 3: return { gridClass: "col-span-1 row-span-1", size: "normal" };
      case 4: return { gridClass: "md:col-span-2 lg:col-span-2 row-span-1", size: "wide" };
      case 5: return { gridClass: "col-span-1 row-span-2", size: "tall" };
      case 6: return { gridClass: "md:col-span-2 lg:col-span-2 row-span-2", size: "large" };
      default: return { gridClass: "col-span-1 row-span-1", size: "normal" };
    }
  };

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

            {/* Search & Filter Bar */}
            <div className="max-w-3xl mx-auto relative mt-10 flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 z-10">
                  <IconSearch size={20} />
                </div>
                <input
                  type="text"
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all backdrop-blur-sm shadow-xl"
                  placeholder="Search posts or categories..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); // Reset to first page on search
                  }}
                />
              </div>
              <div className="relative min-w-[200px]">
                <select
                  value={selectedTag}
                  onChange={(e) => {
                    setSelectedTag(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full appearance-none px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all backdrop-blur-sm shadow-xl cursor-pointer"
                >
                  {allTags.map(tag => (
                    <option key={tag} value={tag} className="bg-gray-900 text-white">{tag}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-brand-yellow z-10">
                  <IconChevronDown size={20} />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Posts Bento Box Grid */}
      <SectionWrapper className="bg-background-light dark:bg-background-dark py-24 flex-grow">
        <div className="max-w-7xl mx-auto px-6">
          {!hasPosts ? (
            <EmptyState title="No Posts Found" message="Try adjusting your search criteria, or check back later for new content!" />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
                {currentPosts.map((post, idx) => {
                  
                  // Apply mathematical bento layout
                  const { gridClass, size } = getBentoStyles(idx);
                  
                  // Apply mood colors (fallback to cycling through moods if none specified)
                  const fallbackMoods = ['joy', 'peace', 'fire', 'reflection'];
                  const assignedMood = post.mood || fallbackMoods[idx % fallbackMoods.length];
                  const style = moodStyles[assignedMood] || moodStyles.default;

                  return (
                    <AnimatedSection 
                      key={post.slug || idx} 
                      variant="scale" 
                      delay={(idx % postsPerPage) * 0.1} 
                      className={cn("w-full h-full", gridClass)}
                    >
                      <TiltCard className="w-full h-full">
                        <Link to={`/posts/${post.slug}`} className="block w-full h-full">
                          <div className={cn(
                            "rounded-3xl p-8 transition-all duration-500 group flex flex-col h-full overflow-hidden relative border",
                            style.bg, style.border,
                            (size === "large" || size === "wide") ? "md:p-12" : ""
                          )}>
                            {/* Decorative aura glow */}
                            <div className={cn("absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-3xl opacity-30 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none z-0", style.glow)}></div>
                            
                            <div className="flex justify-between items-center mb-6 relative z-10">
                              <span className={cn("text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full", style.badge)}>
                                {post.category || "General"}
                              </span>
                              <span className="text-sm font-sans text-gray-400 font-medium">{post.date}</span>
                            </div>
                            
                            <h3 className={cn(
                              "font-bold font-heading text-text-dark dark:text-text-light mb-4 group-hover:opacity-80 transition-opacity relative z-10",
                              size === "large" ? "text-3xl lg:text-4xl" : "text-2xl"
                            )}>
                              {post.title}
                            </h3>
                            
                            <p className={cn(
                              "text-gray-500 dark:text-gray-400 font-sans mb-8 flex-grow leading-relaxed relative z-10",
                              size === "large" ? "text-lg max-w-xl" : "text-base line-clamp-3"
                            )}>
                              {post.excerpt}
                            </p>
                            
                            <div className={cn("flex items-center font-bold font-sans text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform w-max relative z-10 mt-auto", style.readMore)}>
                              Read More <IconArrowRight size={16} className="ml-2" />
                            </div>
                          </div>
                        </Link>
                      </TiltCard>
                    </AnimatedSection>
                  );
                })}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-20 space-x-4">
                  <Button 
                    variant="outline" 
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={currentPage === 1 ? 'opacity-50 pointer-events-none' : ''}
                  >
                    <IconChevronLeft size={20} className="mr-2" /> Prev
                  </Button>
                  
                  <span className="font-sans font-bold text-gray-500 dark:text-gray-400 bg-white dark:bg-background-dark border border-gray-100 dark:border-white/10 px-6 py-3 rounded-full shadow-sm">
                    Page {currentPage} of {totalPages}
                  </span>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={currentPage === totalPages ? 'opacity-50 pointer-events-none' : ''}
                  >
                    Next <IconChevronRight size={20} className="ml-2" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </SectionWrapper>
    </div>
  );
}
