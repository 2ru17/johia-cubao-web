import React, { Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageMeta from '../components/seo/PageMeta';
import SectionWrapper from '../components/ui/SectionWrapper';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { IconArrowLeft } from '@tabler/icons-react';

// Dynamically import all MDX posts
const mdxModules = import.meta.glob('../content/posts/*.mdx');
const mdxPosts = import.meta.glob('../content/posts/*.mdx', { eager: true });

export default function PostTemplate() {
  const { slug } = useParams();
  const navigate = useNavigate();

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

  // Lazy load the specific MDX component
  const PostContent = React.lazy(mdxModules[targetPath]);

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
          <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-500 dark:text-gray-400 font-bold font-sans uppercase tracking-widest text-sm">
              Share this post
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="outline" 
                className="px-6 py-2 rounded-full text-sm font-bold tracking-wider hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]" 
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
              >
                Facebook
              </Button>
              <Button 
                variant="outline" 
                className="px-6 py-2 rounded-full text-sm font-bold tracking-wider hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2]" 
                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(frontmatter.title)}`, '_blank')}
              >
                Twitter
              </Button>
              <Button 
                variant="solid" 
                className="px-6 py-2 rounded-full text-sm font-bold tracking-wider" 
                onClick={() => navigator.clipboard.writeText(window.location.href).then(() => alert("Link copied!"))}
              >
                Copy Link
              </Button>
            </div>
          </div>

        </AnimatedSection>
      </SectionWrapper>
    </div>
  );
}
