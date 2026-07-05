import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { getAllPosts } from '../../lib/blog';
import BlogCard from './BlogCard';

// Rendered on the home page via React.lazy so the blog bundle
// (markdown content, marked, DOMPurify) stays out of the home chunk.
const LatestPosts: React.FC = () => {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4">
            <BookOpen size={14} />
            From the Blog
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-teal mb-4">
            Understand How Your Mind Works
          </h2>
          <p className="font-body text-lg text-slate-800/60 leading-relaxed">
            Honest, evidence-based articles by Tracey on habits, anxiety, and what actually changes them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-teal font-bold text-sm uppercase tracking-[0.15em] hover:text-gold transition-colors"
          >
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
