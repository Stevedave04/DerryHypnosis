import { marked } from 'marked';
import DOMPurify from 'dompurify';

export interface PostMeta {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  metaDescription: string;
  ogImage: string;
  readingTime: number;
}

export interface Post extends PostMeta {
  content: string;
}

// Simple frontmatter parser — handles the key: value pairs we use in posts.
// Avoids a gray-matter dependency; adequate for author-controlled content.
function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, unknown> = {};
  match[1].split('\n').forEach(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) return;
    const key = line.slice(0, colonIdx).trim();
    const raw = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, '');
    // Cast numeric strings (readingTime) to number
    data[key] = raw !== '' && !isNaN(Number(raw)) ? Number(raw) : raw;
  });

  return { data, content: match[2] };
}

// Import all markdown files as raw strings at build time
const rawFiles = import.meta.glob('../content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export function getAllPosts(): Post[] {
  return Object.entries(rawFiles)
    .map(([, raw]) => {
      const { data, content } = parseFrontmatter(raw);
      return { ...data, content } as Post;
    })
    .filter(p => p.slug && p.title)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find(p => p.slug === slug);
}

export function renderMarkdown(content: string): string {
  const html = marked(content, { gfm: true }) as string;
  return DOMPurify.sanitize(html);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
