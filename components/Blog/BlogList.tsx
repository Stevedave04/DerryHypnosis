import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getAllPosts, PostMeta } from '../../lib/blog';
import BlogCard from './BlogCard';
import { BookOpen } from 'lucide-react';

const CATEGORIES = ['All', 'Smoking', 'Weight Loss', 'Anxiety', 'Sleep', 'General'] as const;
type Filter = typeof CATEGORIES[number];

const BlogList: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('All');
  const allPosts = getAllPosts() as PostMeta[];

  const posts = filter === 'All'
    ? allPosts
    : allPosts.filter(p => p.category === filter);

  return (
    <>
      <Helmet>
        <title>Hypnotherapy Blog | Derry Hypnosis</title>
        <meta
          name="description"
          content="Expert articles on hypnotherapy for weight loss, quitting smoking, anxiety, and more — from Tracey McGill, Clinical Hypnotherapist in Derry/Londonderry."
        />
        <link rel="canonical" href="https://derryhypnosis.co.uk/blog" />
      </Helmet>

      <section className="py-24 bg-cream-light min-h-screen pt-40">
        <div className="container mx-auto px-6">

          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4">
              <BookOpen size={14} />
              From the Practice
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-teal mb-6">
              Hypnotherapy Insights
            </h1>
            <p className="font-body text-xl text-slate-800/60 leading-relaxed">
              Evidence-based articles on the power of clinical hypnotherapy — written by Tracey McGill for the people of Derry/Londonderry.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-all border ${
                  filter === cat
                    ? 'bg-teal text-white border-teal shadow-md'
                    : 'bg-white text-slate-500 border-cream hover:border-teal/40 hover:text-teal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 text-slate-400">
              <BookOpen size={40} className="mx-auto mb-4 opacity-30" />
              <p className="font-body">No articles in this category yet — check back soon.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogList;
