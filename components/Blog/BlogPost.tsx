import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ArrowLeft, ArrowRight, Award } from 'lucide-react';
import { getPostBySlug, renderMarkdown, formatDate } from '../../lib/blog';
import { SITE_INFO } from '../../constants';

// Map blog category → closest service route
const CATEGORY_SERVICE: Record<string, { label: string; to: string }> = {
  Smoking:       { label: 'Quit Smoking Service', to: '/services/quit-smoking' },
  'Weight Loss': { label: 'Weight Loss Service',  to: '/services/weight-loss' },
  Anxiety:       { label: 'Anxiety Relief Service', to: '/services/anxiety-stress' },
  Sleep:         { label: 'Sleep & Insomnia Service', to: '/services/sleep-insomnia' },
  General:       { label: 'All Services', to: '/services' },
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug ?? '');

  if (!post) return <Navigate to="/blog" replace />;

  const html = renderMarkdown(post.content);
  const service = CATEGORY_SERVICE[post.category] ?? CATEGORY_SERVICE.General;

  return (
    <>
      <Helmet>
        <title>{post.title} | Derry Hypnosis</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`https://derryhypnosis.co.uk/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={post.ogImage} />
        <meta property="og:url" content={`https://derryhypnosis.co.uk/blog/${post.slug}`} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={SITE_INFO.owner} />
      </Helmet>

      <article className="bg-white min-h-screen pt-32 pb-24">

        {/* Hero image */}
        <div className="w-full h-72 md:h-96 overflow-hidden relative mb-0">
          <img
            src={post.ogImage}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">

            {/* Back link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-[0.2em] hover:gap-3 transition-all mb-8 mt-4 block"
            >
              <ArrowLeft size={13} /> Back to Blog
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-teal/10 text-teal px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-slate-400 text-xs">
                <Calendar size={12} />{formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5 text-slate-400 text-xs">
                <Clock size={12} />{post.readingTime} min read
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-teal mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Lead excerpt */}
            <p className="text-xl text-slate-600 leading-relaxed mb-8 font-body border-l-4 border-gold pl-5">
              {post.excerpt}
            </p>

            <hr className="border-cream-dark mb-10" />

            {/* Markdown content */}
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-heading prose-headings:text-teal prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-5
                prose-a:text-teal prose-a:font-semibold hover:prose-a:text-gold
                prose-strong:text-slate-800 prose-strong:font-bold
                prose-ul:my-5 prose-li:text-slate-700 prose-li:mb-1
                prose-blockquote:border-gold prose-blockquote:text-slate-600 prose-blockquote:italic"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            <hr className="border-cream-dark mt-12 mb-10" />

            {/* Author bio */}
            <div className="bg-cream-light rounded-2xl p-6 flex gap-5 items-start mb-10">
              <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                <Award className="text-gold" size={24} />
              </div>
              <div>
                <p className="font-bold text-teal text-sm mb-1">{SITE_INFO.owner}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-2">
                  Clinical Hypnotherapist · EAPH Accredited
                </p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Tracey McGill is a fully accredited Clinical Hypnotherapist practising in Derry/Londonderry. She specialises in helping clients break free from habits that no longer serve them using evidence-based clinical techniques.
                </p>
              </div>
            </div>

            {/* Related service CTA */}
            <div className="bg-teal rounded-2xl p-8 text-white text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-3">
                Ready to take the first step?
              </p>
              <h3 className="font-heading text-2xl font-bold mb-3">
                Book a Free Discovery Call
              </h3>
              <p className="text-cream/70 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                Tracey offers a free 15-minute call to discuss your goals and answer any questions before you commit to a session.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg"
                >
                  Book Free Call <ArrowRight size={16} />
                </Link>
                <Link
                  to={service.to}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-full transition-all text-sm"
                >
                  {service.label}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
