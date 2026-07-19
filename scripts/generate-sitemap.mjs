// Regenerates public/sitemap.xml from the route list and content/posts frontmatter.
// Runs automatically before every build (see package.json). No dependencies.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE_URL = 'https://derryhypnosis.co.uk';
const today = new Date().toISOString().slice(0, 10);

// Static routes. Service slugs must match SERVICES in constants.ts.
const STATIC_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0', lastmod: today },
  { path: '/services', changefreq: 'monthly', priority: '0.9' },
  { path: '/services/weight-loss', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/quit-smoking', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/anxiety-stress', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/sleep-insomnia', changefreq: 'monthly', priority: '0.7' },
  { path: '/services/phobia-release', changefreq: 'monthly', priority: '0.7' },
  { path: '/services/sports-performance', changefreq: 'monthly', priority: '0.7' },
  { path: '/services/ibs-management', changefreq: 'monthly', priority: '0.7' },
  { path: '/services/public-speaking', changefreq: 'monthly', priority: '0.7' },
  { path: '/stop-smoking', changefreq: 'monthly', priority: '0.9' },
  { path: '/downloads', changefreq: 'weekly', priority: '0.8' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/testimonials', changefreq: 'weekly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.9' },
  { path: '/blog', changefreq: 'weekly', priority: '0.8' },
  { path: '/useful-numbers', changefreq: 'monthly', priority: '0.5' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
];

function frontmatterField(raw, key) {
  const m = raw.match(new RegExp(`^${key}:\\s*["']?([^"'\\n]+)["']?\\s*$`, 'm'));
  return m ? m[1].trim() : null;
}

const postsDir = join(root, 'content', 'posts');
const posts = readdirSync(postsDir)
  .filter(f => f.endsWith('.md'))
  .map(f => {
    const raw = readFileSync(join(postsDir, f), 'utf8');
    return { slug: frontmatterField(raw, 'slug'), date: frontmatterField(raw, 'date') };
  })
  .filter(p => p.slug)
  .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));

const urls = [
  ...STATIC_ROUTES,
  ...posts.map(p => ({
    path: `/blog/${p.slug}`,
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: p.date ?? undefined,
  })),
];

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map(u => [
    '  <url>',
    `    <loc>${BASE_URL}${u.path === '/' ? '/' : u.path}</loc>`,
    `    <changefreq>${u.changefreq}</changefreq>`,
    `    <priority>${u.priority}</priority>`,
    ...(u.lastmod ? [`    <lastmod>${u.lastmod}</lastmod>`] : []),
    '  </url>',
  ].join('\n')),
  '</urlset>',
  '',
].join('\n');

writeFileSync(join(root, 'public', 'sitemap.xml'), xml);
console.log(`sitemap.xml written: ${urls.length} URLs (${posts.length} blog posts)`);
