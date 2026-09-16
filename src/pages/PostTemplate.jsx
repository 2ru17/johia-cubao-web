import React, { Suspense, useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import PageMeta from '../components/seo/PageMeta';
import SectionWrapper from '../components/ui/SectionWrapper';
import AnimatedSection from '../components/ui/AnimatedSection';
import TiltCard from '../components/ui/TiltCard';
import Button from '../components/ui/Button';
import { cn } from '../lib/utils';
import { IconArrowLeft, IconArrowRight, IconBrandFacebook, IconBrandX, IconBrandInstagram, IconLink, IconCode, IconCheck } from '@tabler/icons-react';

// Dynamically import all MDX posts
const mdxModules = import.meta.glob('../content/posts/*.mdx');
const mdxPosts = import.meta.glob('../content/posts/*.mdx', { eager: true });

export default function PostTemplate() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  // Find the exact post module path based on the slug
  let targetPath = null;
  let frontmatter = null;

  for (const path in mdxPosts) {
    const fm = mdxPosts[path].frontmatter;
    if (!fm) continue;
    const inferredSlug = path.split('/').pop().replace('.mdx', '');
    const currentSlug = fm.slug || inferredSlug;
    
    if (currentSlug === slug) {
      targetPath = path;
      frontmatter = fm;
      break;
    }
  }

  if (!targetPath) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background-light dark:bg-background-dark text-text-dark dark:text-text-light">
        <h1 className="text-4xl font-bold font-heading mb-4">Post Not Found</h1>
        <Button variant="solid" onClick={() => navigate('/posts')}>Back to Posts</Button>
      </div>
    );
  }

  // Lazy load the specific MDX component, memoized to prevent remounting
  const PostContent = useMemo(() => React.lazy(mdxModules[targetPath]), [targetPath]);

  // Find related posts (same category, excluding current)
  const relatedPosts = useMemo(() => {
    return Object.keys(mdxPosts)
      .map(p => {
        const fm = mdxPosts[p].frontmatter;
        if (!fm) return null;
        const inferredSlug = p.split('/').pop().replace('.mdx', '');
        return { ...fm, slug: fm.slug || inferredSlug };
      })
      .filter(p => p && p.slug !== slug && p.category === frontmatter.category)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
  }, [slug, frontmatter?.category]);

  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark min-h-screen pb-24">
      <PageMeta title={frontmatter.title} description={frontmatter.excerpt} />

      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-aurora border-b border-white/5 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-overlay-dark/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <AnimatedSection variant="fade">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-yellow bg-brand-yellow/10 px-4 py-2 rounded-full mb-6 inline-block">
              {frontmatter.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-text-light mb-6 tracking-tight drop-shadow-md">
              {frontmatter.title}
            </h1>
            <p className="text-xl text-gray-300 font-sans font-medium mb-8">
              {frontmatter.date}
            </p>
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

      <SectionWrapper className="max-w-4xl mx-auto px-6 pt-12">
        <AnimatedSection variant="fade">
          
          <button 
            onClick={() => navigate('/posts')}
            className="group flex items-center text-sm font-bold font-sans uppercase tracking-widest text-gray-500 hover:text-brand-yellow transition-colors mb-12"
          >
            <IconArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to all posts
          </button>

          {/* Clean & Minimal Article Content */}
          <article className="prose prose-lg md:prose-xl dark:prose-invert prose-headings:font-heading prose-headings:font-extrabold prose-h1:text-brand-yellow prose-h2:text-brand-yellow/90 prose-blockquote:border-brand-yellow prose-blockquote:bg-brand-yellow/5 prose-blockquote:rounded-r-lg prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:font-medium prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300 prose-a:text-brand-yellow hover:prose-a:text-yellow-400 prose-img:rounded-3xl prose-img:shadow-2xl mx-auto max-w-3xl leading-loose">
            <Suspense fallback={<div className="text-center py-20 text-gray-500 animate-pulse">Loading content...</div>}>
              <PostContent />
            </Suspense>
          </article>

          {/* Article Footer - Share Buttons */}
          <div className="max-w-3xl mx-auto mt-24 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 relative">
            <div className="text-gray-500 dark:text-gray-400 font-bold font-sans uppercase tracking-widest text-sm">
              Share this post
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2]/10 transition-all"
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                aria-label="Share on Facebook"
              >
                <IconBrandFacebook size={20} />
              </button>
              
              <button 
                className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-white hover:border-white hover:bg-white/10 transition-all"
                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(frontmatter.title)}`, '_blank')}
                aria-label="Share on X"
              >
                <IconBrandX size={20} />
              </button>

              <button 
                className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[#E1306C] hover:border-[#E1306C] hover:bg-[#E1306C]/10 transition-all"
                onClick={() => window.open(`https://instagram.com`, '_blank')}
                aria-label="Share on Instagram"
              >
                <IconBrandInstagram size={20} />
              </button>
              
              <div className="w-px h-8 bg-gray-200 dark:bg-white/10 mx-2"></div>
              
              <button 
                className={cn(
                  "w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300",
                  copiedId === 'link' 
                    ? "text-green-500 border-green-500 bg-green-500/10"
                    : "border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-brand-yellow hover:border-brand-yellow hover:bg-brand-yellow/10"
                )}
                onClick={() => handleCopy(window.location.href, 'link')}
                title="Copy Link"
              >
                {copiedId === 'link' ? <IconCheck size={20} /> : <IconLink size={20} />}
              </button>

              <button 
                className={cn(
                  "w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300",
                  copiedId === 'embed' 
                    ? "text-green-500 border-green-500 bg-green-500/10"
                    : "border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-brand-yellow hover:border-brand-yellow hover:bg-brand-yellow/10"
                )}
                onClick={() => handleCopy(`<iframe src="${window.location.href}" width="100%" height="600" style="border:none; border-radius:12px;"></iframe>`, 'embed')}
                title="Copy Embed Code"
              >
                {copiedId === 'embed' ? <IconCheck size={20} /> : <IconCode size={20} />}
              </button>
            </div>
          </div>

        </AnimatedSection>
      </SectionWrapper>

      {/* Related Posts Section */}
      <SectionWrapper className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-200 dark:border-white/5 mt-12 bg-[#fafafa] dark:bg-transparent">
        <AnimatedSection variant="fade">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold font-heading text-text-dark dark:text-text-light mb-4">Read Next</h2>
            <p className="text-gray-500 dark:text-gray-400 font-sans">More {frontmatter.category} from our church family</p>
          </div>
          
          {relatedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <TiltCard key={post.slug} className="h-full">
                  <Link to={`/posts/${post.slug}`} className="block h-full">
                    <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 border border-gray-100 dark:border-white/5 hover:border-brand-yellow/50 transition-all duration-500 group flex flex-col h-full relative overflow-hidden">
                      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-yellow/10 rounded-full blur-2xl group-hover:bg-brand-yellow/20 transition-all duration-700"></div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow bg-brand-yellow/10 px-3 py-1 rounded-full mb-4 w-max">
                        {post.category}
                      </span>
                      <h3 className="font-bold font-heading text-text-dark dark:text-text-light text-xl mb-4 group-hover:opacity-80 transition-opacity relative z-10">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 font-sans text-sm mb-8 flex-grow line-clamp-3 relative z-10">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center font-bold font-sans text-xs uppercase tracking-wider text-brand-yellow group-hover:translate-x-2 transition-transform mt-auto relative z-10">
                        Read More <IconArrowRight size={14} className="ml-2" />
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12">No related posts found.</div>
          )}
        </AnimatedSection>
      </SectionWrapper>


    </div>
  );
}
