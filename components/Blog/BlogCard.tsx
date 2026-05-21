import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { PostMeta, formatDate } from '../../lib/blog';

interface BlogCardProps {
  post: PostMeta;
}

const CATEGORY_COLOURS: Record<string, string> = {
  Smoking:      'bg-teal/10 text-teal',
  'Weight Loss': 'bg-gold/10 text-gold-dark',
  Anxiety:      'bg-teal/10 text-teal',
  Sleep:        'bg-gold/10 text-gold-dark',
  General:      'bg-cream-dark text-slate-600',
};

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const categoryClass = CATEGORY_COLOURS[post.category] ?? CATEGORY_COLOURS.General;

  return (
    <article className="group bg-white rounded-2xl shadow-soft border border-cream overflow-hidden hover:shadow-premium transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <Link to={`/blog/${post.slug}`} className="block overflow-hidden h-52 relative flex-shrink-0">
        <img
          src={post.ogImage}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full ${categoryClass}`}>
          {post.category}
        </span>
      </Link>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-slate-400 text-xs mb-3">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} />
            {post.readingTime} min read
          </span>
        </div>

        <h2 className="font-heading text-lg font-bold text-teal mb-2 leading-snug group-hover:text-gold transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>

        <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">
          {post.excerpt}
        </p>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-[0.2em] group-hover:gap-3 transition-all mt-auto"
          aria-label={`Read: ${post.title}`}
        >
          Read Article <ArrowRight size={13} />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
