import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const postsDir = path.join(rootDir, 'src/content/posts');
const siteUrl = 'https://johiacubao.com';

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function parseFrontmatter(content) {
  const match = content.match(/^---\s*([\s\S]*?)\s*---/);
  if (!match) return {};
  const lines = match[1].split('\n');
  const result = {};

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const colonIndex = trimmed.indexOf(':');
    if (colonIndex === -1) continue;
    const key = trimmed.slice(0, colonIndex).trim();
    let val = trimmed.slice(colonIndex + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    result[key] = val;
  }
  return result;
}

function injectMeta(html, meta) {
  let updated = html;
  const pageTitle = meta.title.includes('JOHIA Cubao') ? meta.title : `${meta.title} | JOHIA Cubao`;
  const escapedTitle = escapeHtml(pageTitle);
  const escapedDesc = escapeHtml(meta.description || '');
  const escapedImage = escapeHtml(meta.image || `${siteUrl}/images/general/og-image.png`);
  const escapedUrl = escapeHtml(meta.url || siteUrl);
  const ogType = meta.type || 'website';

  // Title tag
  updated = updated.replace(/<title>.*?<\/title>/i, `<title>${escapedTitle}</title>`);

  // Meta description
  updated = updated.replace(/<meta\s+name=["']description["'][^>]*>/i, `<meta name="description" content="${escapedDesc}" />`);

  // Open Graph
  updated = updated.replace(/<meta\s+property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${escapedTitle}" />`);
  updated = updated.replace(/<meta\s+property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${escapedDesc}" />`);
  updated = updated.replace(/<meta\s+property=["']og:image["'][^>]*>/i, `<meta property="og:image" content="${escapedImage}" />`);
  updated = updated.replace(/<meta\s+property=["']og:image:secure_url["'][^>]*>/i, `<meta property="og:image:secure_url" content="${escapedImage}" />`);
  updated = updated.replace(/<meta\s+property=["']og:type["'][^>]*>/i, `<meta property="og:type" content="${ogType}" />`);

  if (/<meta\s+property=["']og:url["'][^>]*>/i.test(updated)) {
    updated = updated.replace(/<meta\s+property=["']og:url["'][^>]*>/i, `<meta property="og:url" content="${escapedUrl}" />`);
  } else {
    updated = updated.replace(/<meta\s+property=["']og:title["'][^>]*>/i, `$& \n    <meta property="og:url" content="${escapedUrl}" />`);
  }

  // Twitter
  updated = updated.replace(/<meta\s+name=["']twitter:title["'][^>]*>/i, `<meta name="twitter:title" content="${escapedTitle}" />`);
  updated = updated.replace(/<meta\s+name=["']twitter:description["'][^>]*>/i, `<meta name="twitter:description" content="${escapedDesc}" />`);
  updated = updated.replace(/<meta\s+name=["']twitter:image["'][^>]*>/i, `<meta name="twitter:image" content="${escapedImage}" />`);

  return updated;
}

function writePage(routePath, html) {
  const cleanPath = routePath.replace(/^\/+|\/+$/g, '');
  const targetDir = path.join(distDir, cleanPath);
  fs.mkdirSync(targetDir, { recursive: true });
  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, html, 'utf-8');
}

export function runPrerender() {
  const indexHtmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.error('dist/index.html not found. Please run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
  console.log('⚡ Generating static Open Graph shells for social sharing...');

  // 1. Main Website Pages
  const mainPages = [
    {
      route: 'about',
      title: 'About Us | JOHIA Cubao',
      description: 'Rooted in Christ, growing in community. Learn about our mission, vision, core values, and pastoral leadership in Cubao.',
      image: `${siteUrl}/images/leadership/pastors-assembly-stage.jpg`,
      url: `${siteUrl}/about`,
      type: 'website'
    },
    {
      route: 'programs',
      title: 'Church Programs | JOHIA Cubao',
      description: 'Equip your faith through Sunday worship services, School of Champions (SOC), life retreats, and community outreach.',
      image: `${siteUrl}/images/gallery/worship-hands-raised.jpg`,
      url: `${siteUrl}/programs`,
      type: 'website'
    },
    {
      route: 'ministries',
      title: 'Ministries & Volunteer Teams | JOHIA Cubao',
      description: 'Find your people and your purpose. Discover LinC (Young Adults), Wildfire (Youth), Couples, and active volunteer teams.',
      image: `${siteUrl}/images/community/church-family-linggo-ng-wika.jpg`,
      url: `${siteUrl}/ministries`,
      type: 'website'
    },
    {
      route: 'media',
      title: 'Watch & Listen | JOHIA Cubao',
      description: 'Watch Sunday sermons, worship recitals, and glimpse authentic life in community through our media gallery.',
      image: `${siteUrl}/images/gallery/event-live-worship-stage.jpg`,
      url: `${siteUrl}/media`,
      type: 'website'
    },
    {
      route: 'give',
      title: 'Support Our Mission | JOHIA Cubao',
      description: 'Partner with us in advancing God\'s Kingdom through tithes, offerings, and community missions support.',
      image: `${siteUrl}/images/ministries/give-offering-basket-close.jpg`,
      url: `${siteUrl}/give`,
      type: 'website'
    },
    {
      route: 'posts',
      title: 'Devotionals & Sermon Recaps | JOHIA Cubao',
      description: 'Weekly sermon recaps, reflections, and inspirational devotionals from the pulpit of JOHIA Cubao.',
      image: `${siteUrl}/images/general/og-image.png`,
      url: `${siteUrl}/posts`,
      type: 'website'
    },
    {
      route: 'contact',
      title: 'Contact Us | JOHIA Cubao',
      description: 'Get in touch with JOHIA Cubao. Send prayer requests, ministry inquiries, or plan your Sunday visit.',
      image: `${siteUrl}/images/general/og-image.png`,
      url: `${siteUrl}/contact`,
      type: 'website'
    },
    {
      route: 'privacy',
      title: 'Privacy Policy | JOHIA Cubao',
      description: 'Information handling practices, data protection under Republic Act 10173, and transparent AI usage disclosure.',
      image: `${siteUrl}/images/general/og-image.png`,
      url: `${siteUrl}/privacy`,
      type: 'website'
    },
    {
      route: 'terms',
      title: 'Terms of Service | JOHIA Cubao',
      description: 'Terms and conditions for accessing and using the JOHIA Cubao website and digital resources.',
      image: `${siteUrl}/images/general/og-image.png`,
      url: `${siteUrl}/terms`,
      type: 'website'
    }
  ];

  for (const page of mainPages) {
    const pageHtml = injectMeta(baseHtml, page);
    writePage(page.route, pageHtml);
    console.log(`  ✓ Created static shell: /${page.route}/index.html`);
  }

  // 2. Devotional Posts
  if (fs.existsSync(postsDir)) {
    const postFiles = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'));
    for (const file of postFiles) {
      const slug = file.replace(/\.mdx$/, '');
      const content = fs.readFileSync(path.join(postsDir, file), 'utf-8');
      const fm = parseFrontmatter(content);

      const rawTitle = fm.title || slug.replace(/-/g, ' ');
      const cleanTitle = rawTitle.replace(/\s*\[FA\]\s*$/, '').trim();
      const excerpt = fm.excerpt || 'Read this devotional and sermon reflection from JOHIA Cubao.';
      
      let imagePath = fm.thumbnail || '/images/general/og-image.png';
      if (!imagePath.startsWith('http')) {
        imagePath = imagePath.startsWith('/') ? `${siteUrl}${imagePath}` : `${siteUrl}/${imagePath}`;
      }

      const postMeta = {
        title: cleanTitle,
        description: excerpt,
        image: imagePath,
        url: `${siteUrl}/posts/${slug}`,
        type: 'article'
      };

      const postHtml = injectMeta(baseHtml, postMeta);
      writePage(`posts/${slug}`, postHtml);
      console.log(`  ✓ Created post embed shell: /posts/${slug}/index.html (${cleanTitle})`);
    }
  }

  console.log('✅ Static Open Graph pre-rendering complete!');
}

runPrerender();
