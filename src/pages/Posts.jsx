import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import PageMeta from '../components/seo/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import TiltCard from '../components/ui/TiltCard';
import EmptyState from '../components/ui/EmptyState';
import Button from '../components/ui/Button';
import { IconArrowRight, IconSearch, IconChevronLeft, IconChevronRight, IconChevronDown, IconClock, IconPin } from '@tabler/icons-react';
import { cn } from '../lib/utils';

// --- Helpers ---
function formatDateShort(dateVal) {
  if (!dateVal) return '';
  try {
    let d;
    if (dateVal instanceof Date) {
      d = dateVal;
    } else {
      const str = String(dateVal).trim();
      d = new Date(str.includes('T') ? str : `${str}T00:00:00`);
    }
    if (isNaN(d.getTime())) return String(dateVal);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch {
    return String(dateVal || '');
  }
}

// Dynamically load all MDX posts and their frontmatter
const mdxPosts = import.meta.glob('../content/posts/*.mdx', { eager: true });
const allPosts = Object.keys(mdxPosts)
  .map(path => {
    const mod = mdxPosts[path];
    const fm = mod?.frontmatter || mod?.default?.frontmatter;
    if (!fm) return null;
    const inferredSlug = path.split('/').pop().replace('.mdx', '');
    return { ...fm, slug: fm.slug || inferredSlug };
  })
  .filter(Boolean)
  .sort((a, b) => {
    if (a?.pinned && !b?.pinned) return -1;
    if (!a?.pinned && b?.pinned) return 1;
    const timeA = a?.date ? new Date(a.date).getTime() || 0 : 0;
    const timeB = b?.date ? new Date(b.date).getTime() || 0 : 0;
    return timeB - timeA;
  });

const moodStyles = {
  joy: {
    bg: "bg-white dark:bg-[#1a1a1a]",
    border: "border-yellow-100 dark:border-yellow-900/30 group-hover:border-yellow-300 dark:group-hover:border-yellow-500/50",
    glow: "bg-yellow-400/30 dark:bg-yellow-500/10",
    badge: "text-yellow-900 bg-yellow-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 group-hover:bg-yellow-100 dark:group-hover:bg-yellow-900/30 transition-colors duration-500",
    readMore: "group-hover:text-yellow-500 dark:group-hover:text-yellow-400",
    fallbackGradient: "from-yellow-400/80 to-orange-500/80",
  },
  peace: {
    bg: "bg-white dark:bg-[#1a1a1a]",
    border: "border-blue-100 dark:border-blue-900/30 group-hover:border-blue-300 dark:group-hover:border-blue-500/50",
    glow: "bg-blue-400/30 dark:bg-blue-500/10",
    badge: "text-blue-900 bg-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-500",
    readMore: "group-hover:text-blue-500 dark:group-hover:text-blue-400",
    fallbackGradient: "from-blue-500/80 to-cyan-500/80",
  },
  fire: {
    bg: "bg-white dark:bg-[#1a1a1a]",
    border: "border-red-100 dark:border-red-900/30 group-hover:border-red-300 dark:group-hover:border-red-500/50",
    glow: "bg-red-400/30 dark:bg-red-500/10",
    badge: "text-red-900 bg-red-400 group-hover:text-red-600 dark:group-hover:text-red-400 group-hover:bg-red-100 dark:group-hover:bg-red-900/30 transition-colors duration-500",
    readMore: "group-hover:text-red-500 dark:group-hover:text-red-400",
    fallbackGradient: "from-red-500/80 to-rose-600/80",
  },
  reflection: {
    bg: "bg-white dark:bg-[#1a1a1a]",
    border: "border-purple-100 dark:border-purple-900/30 group-hover:border-purple-300 dark:group-hover:border-purple-500/50",
    glow: "bg-purple-400/30 dark:bg-purple-500/10",
    badge: "text-purple-900 bg-purple-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors duration-500",
    readMore: "group-hover:text-purple-500 dark:group-hover:text-purple-400",
    fallbackGradient: "from-purple-500/80 to-indigo-600/80",
  },
  default: {
    bg: "bg-white dark:bg-[#1a1a1a]",
    border: "border-gray-100 dark:border-white/5 group-hover:border-brand-yellow/50",
    glow: "bg-brand-yellow/20 dark:bg-brand-yellow/5",
    badge: "text-brand-yellow bg-neutral-900 group-hover:bg-brand-yellow/10 transition-colors duration-500",
    readMore: "group-hover:text-brand-yellow",
    fallbackGradient: "from-gray-600/80 to-gray-800/80",
  }
};

export default function Posts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);
  const [selectedTag, setSelectedTag] = useState('All Tags');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortOrder, setSortOrder] = useState('desc');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7;

  // Extract all unique tags and categories from posts
  const tagFrequencies = allPosts
    .flatMap(post => Array.isArray(post?.tags) ? post.tags : (post?.tags ? [post.tags] : []))
    .reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {});
  const topTags = Object.entries(tagFrequencies).sort((a, b) => b[1] - a[1]).slice(0, 7).map(entry => entry[0]);
  const allTags = ['All Tags', ...topTags];

  const allCategories = ['All Categories', 'Sermon Notes', 'Events', 'Devotionals'];

  // Filter and sort posts
  const cleanSearchTerm = (debouncedSearchTerm || '').trim().toLowerCase();
  const filteredPosts = allPosts.filter(post => {
    if (!post) return false;
    const searchTarget = `${post.title || ''} ${post.excerpt || ''}`.toLowerCase();
    const matchesSearch = !cleanSearchTerm || searchTarget.includes(cleanSearchTerm);
    const postTags = Array.isArray(post.tags) ? post.tags : (post.tags ? [post.tags] : []);
    const matchesTag = selectedTag === 'All Tags' || postTags.includes(selectedTag);
    const matchesCategory = selectedCategory === 'All Categories' || post.category === selectedCategory;
    return matchesSearch && matchesTag && matchesCategory;
  }).sort((a, b) => {
    if (a?.pinned && !b?.pinned) return -1;
    if (!a?.pinned && b?.pinned) return 1;
    const timeA = a?.date ? new Date(a.date).getTime() || 0 : 0;
    const timeB = b?.date ? new Date(b.date).getTime() || 0 : 0;
    return sortOrder === 'desc' ? timeB - timeA : timeA - timeB;
  });

  const hasPosts = filteredPosts.length > 0;

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  // Active filter count for the badge
  const activeFilterCount = [
    selectedTag !== 'All Tags',
    sortOrder !== 'desc'
  ].filter(Boolean).length;

  // Helper for bento grid layouts
  const getBentoStyles = (index) => {
    const i = index % 7;
    if (i === 0) return { gridClass: "md:col-span-2 md:row-span-2", size: "large" };
    if (i === 1 || i === 2) return { gridClass: "md:col-span-1 md:row-span-1", size: "small" };
    if (i === 3) return { gridClass: "md:col-span-1 md:row-span-2", size: "tall" };
    if (i === 4) return { gridClass: "md:col-span-2 md:row-span-1", size: "wide" };
    if (i === 5 || i === 6) return { gridClass: "md:col-span-1 md:row-span-1", size: "small" };
    return { gridClass: "md:col-span-1 md:row-span-1", size: "small" };
  };

  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark min-h-screen">
      <PageMeta title="Journals | JOHIA Cubao" description="Read our latest sermon notes and devotionals from JOHIA Cubao." />

      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-aurora border-b border-white/5 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-overlay-dark/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection variant="fade">
            <h1 className="text-fluid-h1 font-extrabold font-heading text-shimmer mb-6">
              Journals
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-sans font-medium max-w-3xl mx-auto drop-shadow-sm leading-relaxed mb-8">
              Stay encouraged with our latest sermon notes and devotionals.
            </p>

            {/* Search & Filter Bar */}
            <div className="max-w-4xl mx-auto relative mt-10 flex flex-col gap-4">

              {/* Category Pill Tabs */}
              <div className="flex flex-wrap justify-center gap-3 mb-8 relative z-20">
                {allCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => { setSelectedCategory(category); setCurrentPage(1); }}
                    className={cn(
                      "px-6 py-2 rounded-full font-bold text-sm transition-all shadow-sm backdrop-blur-sm border",
                      selectedCategory === category 
                        ? 'bg-brand-yellow text-text-dark border-brand-yellow' 
                        : 'bg-white/10 text-white border-white/20 hover:border-brand-yellow hover:text-brand-yellow'
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search Bar Row */}
              <div className="flex flex-col md:flex-row gap-4 relative">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 z-10">
                    <IconSearch size={20} />
                  </div>
                  <input
                    type="text"
                    className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all backdrop-blur-sm shadow-xl"
                    placeholder="Search sermon notes and devotionals..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                </div>

                {/* Filter Toggle Button */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={cn(
                    "flex items-center justify-center gap-2 px-8 py-4 rounded-full border transition-all backdrop-blur-sm shadow-xl font-bold tracking-wide",
                    showFilters
                      ? "bg-brand-yellow text-text-dark border-brand-yellow"
                      : "bg-white/10 text-white border-white/20 hover:border-brand-yellow hover:text-brand-yellow"
                  )}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center ml-1">
                      {activeFilterCount}
                    </span>
                  )}
                </button>
              </div>

              {/* Expandable Filter Menu */}
              {showFilters && (
                <AnimatedSection variant="fade" className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-6 md:p-8 mt-2 shadow-2xl relative z-20 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Tag Filter */}
                    <div>
                      <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Topic</label>
                      <div className="relative">
                        <select
                          value={selectedTag}
                          onChange={(e) => { setSelectedTag(e.target.value); setCurrentPage(1); }}
                          className="w-full appearance-none px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white focus:outline-none focus:border-brand-yellow transition-colors cursor-pointer"
                        >
                          {allTags.map(tag => <option key={tag} value={tag} className="bg-neutral-900">{tag}</option>)}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-brand-yellow">
                          <IconChevronDown size={16} />
                        </div>
                      </div>
                    </div>

                    {/* Sort Order */}
                    <div>
                      <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Sort By</label>
                      <div className="relative">
                        <select
                          value={sortOrder}
                          onChange={(e) => { setSortOrder(e.target.value); setCurrentPage(1); }}
                          className="w-full appearance-none px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white focus:outline-none focus:border-brand-yellow transition-colors cursor-pointer"
                        >
                          <option value="desc" className="bg-neutral-900">Newest First</option>
                          <option value="asc" className="bg-neutral-900">Oldest First</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-brand-yellow">
                          <IconChevronDown size={16} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Reset Filters */}
                  <div className="mt-6 flex justify-between items-center">
                    <span className="text-sm text-gray-500 font-sans">
                      Showing {filteredPosts.length} post{filteredPosts.length !== 1 && 's'}
                    </span>
                    <button
                      onClick={() => {
                        setSelectedCategory('All Categories');
                        setSelectedTag('All Tags');
                        setSortOrder('desc');
                        setSearchTerm('');
                      }}
                      className="text-sm font-bold text-gray-400 hover:text-brand-yellow transition-colors tracking-widest uppercase"
                    >
                      Clear Filters
                    </button>
                  </div>
                </AnimatedSection>
              )}

              {/* Match Indicator */}
              {searchTerm && (
                <div className="text-left text-sm text-gray-300 font-sans ml-4 mt-2">
                  Found {filteredPosts.length} post{filteredPosts.length !== 1 && 's'} matching "{searchTerm}"
                </div>
              )}
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

                  // Apply mood colors
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
                            "rounded-3xl p-6 md:p-8 transition-all duration-500 group flex flex-col h-full overflow-hidden relative border shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]",
                            style.bg, style.border,
                            (size === "large" || size === "wide") ? "md:p-12" : ""
                          )}>
                            
                            {/* Decorative aura glow (State 2) */}
                            <div className={cn("absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-3xl opacity-30 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none z-0", style.glow)}></div>

                            {/* The Image Layer (Fades out on hover) */}
                            <div className="absolute inset-0 z-0 transition-opacity duration-500 group-hover:opacity-0">
                              <div 
                                className={cn("absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105", !post.thumbnail ? `bg-gradient-to-br ${style.fallbackGradient}` : "")}
                                style={post.thumbnail ? { backgroundImage: `url(${post.thumbnail})` } : {}}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                            </div>

                            {/* Content Container (z-10) */}
                            <div className="relative z-10 flex flex-col h-full">
                              <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-2 flex-wrap">
                                  {post.pinned && (
                                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-yellow text-text-dark flex items-center gap-1 shadow-sm">
                                      <IconPin size={12} className="rotate-45" /> Pinned
                                    </span>
                                  )}
                                  <span className={cn("text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm", style.badge)}>
                                    {post.category || "General"}
                                  </span>
                                </div>
                                <span className="text-xs font-sans text-gray-200 group-hover:text-gray-400 font-medium whitespace-nowrap ml-4 drop-shadow-sm group-hover:drop-shadow-none transition-colors duration-500">{formatDateShort(post.date)}</span>
                              </div>

                              <h3 className={cn(
                                "font-bold font-heading text-white group-hover:text-text-dark dark:group-hover:text-text-light mb-3 drop-shadow-md group-hover:drop-shadow-none transition-all duration-500",
                                size === "large" ? "text-3xl lg:text-4xl" : "text-2xl"
                              )}>
                                {post.title}
                              </h3>

                              <p className={cn(
                                "text-gray-100 group-hover:text-gray-500 dark:group-hover:text-gray-400 font-sans mb-6 flex-grow leading-relaxed drop-shadow-md group-hover:drop-shadow-none transition-colors duration-500",
                                size === "large" ? "text-lg max-w-xl" : "text-base line-clamp-3"
                              )}>
                                {post.excerpt}
                              </p>

                              <div className="flex items-center justify-between w-full mt-auto">
                                <div className={cn("flex items-center font-bold font-sans text-sm uppercase tracking-wider text-white group-hover:translate-x-2 transition-all duration-500 drop-shadow-sm group-hover:drop-shadow-none", style.readMore)}>
                                  Read More <IconArrowRight size={16} className="ml-2" />
                                </div>
                              </div>
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
