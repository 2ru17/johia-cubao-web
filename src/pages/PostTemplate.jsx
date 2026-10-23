import React, { Suspense, useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import PageMeta from '../components/seo/PageMeta';
import SectionWrapper from '../components/ui/SectionWrapper';
import AnimatedSection from '../components/ui/AnimatedSection';
import TiltCard from '../components/ui/TiltCard';
import Button from '../components/ui/Button';
import { cn } from '../lib/utils';
import { IconArrowLeft, IconArrowRight, IconBrandFacebook, IconBrandInstagram, IconLink, IconCode, IconCheck, IconClock, IconCalendar, IconPin } from '@tabler/icons-react';

// Dynamically import all MDX posts
const mdxModules = import.meta.glob('../content/posts/*.mdx');
const mdxPosts = import.meta.glob('../content/posts/*.mdx', { eager: true });

// --- Helpers ---
function formatDate(dateVal) {
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
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return String(dateVal || '');
  }
}

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

function estimateReadingTime(text) {
  if (!text) return 1;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}



export default function PostTemplate() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text, id) => {
    const triggerSuccess = () => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(triggerSuccess).catch(() => {
        fallbackCopy(text);
        triggerSuccess();
      });
    } else {
      fallbackCopy(text);
      triggerSuccess();
    }
  };

  const fallbackCopy = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Fallback copy failed', err);
    }
    document.body.removeChild(textarea);
  };

  // Find the exact post module path based on the slug
  let targetPath = null;
  let frontmatter = null;
  let rawContent = '';

  for (const path in mdxPosts) {
    const mod = mdxPosts[path];
    const fm = mod?.frontmatter || mod?.default?.frontmatter;
    if (!fm) continue;
    const inferredSlug = path.split('/').pop().replace('.mdx', '');
    const currentSlug = fm.slug || inferredSlug;

    if (currentSlug === slug) {
      targetPath = path;
      frontmatter = fm;
      // Grab raw source for reading time estimate
      rawContent = typeof mod?.default === 'string' ? mod.default : '';
      break;
    }
  }

  // Lazy load the specific MDX component, memoized to prevent remounting
  const PostContent = useMemo(() => {
    return targetPath && mdxModules[targetPath] ? React.lazy(mdxModules[targetPath]) : null;
  }, [targetPath]);

  // Find related posts (same category, excluding current). Fallback to any post if same-category pool is too small.
  const relatedPosts = useMemo(() => {
    if (!frontmatter) return [];
    const all = Object.keys(mdxPosts)
      .map(p => {
        const fm = mdxPosts[p].frontmatter;
        if (!fm) return null;
        const inferredSlug = p.split('/').pop().replace('.mdx', '');
        return { ...fm, slug: fm.slug || inferredSlug };
      })
      .filter(p => p && p.slug !== slug);

    // Same category first
    let pool = all.filter(p => p.category === frontmatter.category);
    // Fallback to all posts if less than 3 in the same category
    if (pool.length < 3) {
      pool = all;
    }
    // Stable shuffle using slug as seed
    pool.sort((a, b) => a.slug.localeCompare(b.slug));
    return pool.slice(0, 3);
  }, [slug, frontmatter?.category]);

  if (!targetPath || !PostContent) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background-light dark:bg-background-dark text-text-dark dark:text-text-light">
        <h1 className="text-4xl font-bold font-heading mb-4">Post Not Found</h1>
        <Button variant="solid" onClick={() => navigate('/posts')}>Back to Posts</Button>
      </div>
    );
  }

  const readTime = estimateReadingTime(rawContent) || 4; // fallback 4 min

  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark min-h-screen">
      <PageMeta 
        title={frontmatter.title} 
        description={frontmatter.excerpt} 
        image={frontmatter.thumbnail} 
      />

      {/* Breadcrumb Bar — pushed below fixed navbar */}
      <div className="pt-20 bg-white/5 dark:bg-white/[0.02] border-b border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-sm font-sans text-gray-400">
          <Link to="/" className="hover:text-brand-yellow transition-colors">Home</Link>
          <span>/</span>
          <Link to="/posts" className="hover:text-brand-yellow transition-colors">Journals</Link>
          <span>/</span>
          <span className="text-gray-600 dark:text-gray-300 truncate max-w-[200px] md:max-w-none">{frontmatter.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-16 pb-20 bg-aurora border-b border-white/5 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-overlay-dark/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <AnimatedSection variant="fade">
            <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
              {frontmatter.pinned && (
                <span className="text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-brand-yellow text-text-dark flex items-center gap-1.5 shadow-sm">
                  <IconPin size={14} className="rotate-45" /> Pinned Event
                </span>
              )}
              <span className="text-sm font-bold uppercase tracking-wider text-brand-yellow bg-brand-yellow/10 px-4 py-2 rounded-full">
                {frontmatter.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-text-light mb-6 tracking-tight drop-shadow-md">
              {frontmatter.title}
            </h1>
            {frontmatter.excerpt && (
              <p className="text-lg md:text-xl text-gray-300/90 font-sans font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
                {frontmatter.excerpt}
              </p>
            )}
            <div className="flex items-center justify-center gap-6 text-gray-400 font-sans text-sm">
              <span className="flex items-center gap-2">
                <IconCalendar size={16} />
                {formatDate(frontmatter.date)}
              </span>
              <span className="flex items-center gap-2">
                <IconClock size={16} />
                {readTime} min read
              </span>
            </div>
            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {frontmatter.tags.map(tag => (
                  <span key={tag} className="text-xs font-bold uppercase tracking-wider text-white/70 bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Article Body */}
      <SectionWrapper className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        <AnimatedSection variant="fade">
          {/* Clean & Minimal Article Content */}
          <article className="prose prose-lg md:prose-xl dark:prose-invert prose-headings:font-heading prose-headings:font-extrabold prose-h1:text-brand-yellow prose-h2:text-brand-yellow/90 prose-blockquote:border-brand-yellow prose-blockquote:bg-brand-yellow/5 prose-blockquote:rounded-r-lg prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:font-medium prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300 prose-a:text-brand-yellow hover:prose-a:text-yellow-400 prose-img:rounded-3xl prose-img:shadow-2xl mx-auto max-w-3xl leading-loose">
            <Suspense fallback={<div className="text-center py-20 text-gray-500 animate-pulse">Loading content...</div>}>
              <PostContent />
            </Suspense>
          </article>

          {/* Article Footer - Share Buttons */}
          <div className="max-w-3xl mx-auto mt-20 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 relative">
            <div className="text-gray-500 dark:text-gray-400 font-bold font-sans uppercase tracking-widest text-sm">
              Share this post
            </div>

            <div className="flex items-center gap-3">
              <button
                className="w-11 h-11 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2]/10 transition-all cursor-pointer"
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                aria-label="Share on Facebook"
                title="Share on Facebook"
              >
                <IconBrandFacebook size={18} />
              </button>

              <button
                className="w-11 h-11 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[#E1306C] hover:border-[#E1306C] hover:bg-[#E1306C]/10 transition-all cursor-pointer"
                onClick={() => window.open(`https://www.instagram.com/johiacubao`, '_blank')}
                aria-label="Visit Instagram"
                title="Visit Instagram (@johiacubao)"
              >
                <IconBrandInstagram size={18} />
              </button>

              <div className="w-px h-6 bg-gray-200 dark:bg-white/10 mx-1"></div>

              <button
                className={cn(
                  "w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300",
                  copiedId === 'link'
                    ? "text-green-500 border-green-500 bg-green-500/10"
                    : "border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-brand-yellow hover:border-brand-yellow hover:bg-brand-yellow/10"
                )}
                onClick={() => handleCopy(window.location.href, 'link')}
                title="Copy Link"
              >
                {copiedId === 'link' ? <IconCheck size={18} /> : <IconLink size={18} />}
              </button>

              <button
                className={cn(
                  "w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300",
                  copiedId === 'embed'
                    ? "text-green-500 border-green-500 bg-green-500/10"
                    : "border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-brand-yellow hover:border-brand-yellow hover:bg-brand-yellow/10"
                )}
                onClick={() => handleCopy(`<iframe src="${window.location.href}" width="100%" height="600" style="border:none; border-radius:12px;"></iframe>`, 'embed')}
                title="Copy Embed Code"
              >
                {copiedId === 'embed' ? <IconCheck size={18} /> : <IconCode size={18} />}
              </button>
            </div>
          </div>

          {/* Back to Journals */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <button
              onClick={() => navigate('/posts')}
              className="group inline-flex items-center text-sm font-bold font-sans uppercase tracking-widest text-gray-400 hover:text-brand-yellow transition-colors"
            >
              <IconArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to all posts
            </button>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-gray-100 dark:border-white/5 bg-[#fafafa] dark:bg-[#111]">
          <SectionWrapper className="max-w-7xl mx-auto px-6 py-20">
            <AnimatedSection variant="fade">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold font-heading text-text-dark dark:text-text-light mb-3">Read Next</h2>
                <p className="text-gray-500 dark:text-gray-400 font-sans">More from our church family</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((post) => (
                  <TiltCard key={post.slug} className="h-full">
                    <Link to={`/posts/${post.slug}`} className="block h-full">
                      <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 border border-gray-100 dark:border-white/5 hover:border-brand-yellow/50 transition-all duration-500 group flex flex-col h-full relative overflow-hidden">
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-yellow/10 rounded-full blur-2xl group-hover:bg-brand-yellow/20 transition-all duration-700"></div>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow bg-brand-yellow/10 px-3 py-1 rounded-full mb-4 w-max">
                          {post.category}
                        </span>
                        <h3 className="font-bold font-heading text-text-dark dark:text-text-light text-xl mb-3 group-hover:opacity-80 transition-opacity relative z-10">
                          {post.title}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 font-sans text-sm mb-6 flex-grow line-clamp-3 relative z-10">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto relative z-10">
                          <span className="text-xs text-gray-400 font-sans">{formatDateShort(post.date)}</span>
                          <div className="flex items-center font-bold font-sans text-xs uppercase tracking-wider text-brand-yellow group-hover:translate-x-1 transition-transform">
                            Read <IconArrowRight size={14} className="ml-1" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </TiltCard>
                ))}
              </div>
            </AnimatedSection>
          </SectionWrapper>
        </section>
      )}
    </div>
  );
}
