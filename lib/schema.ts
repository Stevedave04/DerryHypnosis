/**
 * JSON-LD schema generators for AI SEO and Google structured data.
 * Each function returns a serialised JSON-LD string ready for injection
 * via a <script type="application/ld+json"> tag inside a <Helmet>.
 */

import { SITE_INFO, FAQS } from '../constants';
import type { Post } from './blog';
import type { FAQItem, DownloadProduct } from '../types';

const BASE_URL = 'https://derryhypnosis.co.uk';

// ─── Organisation / Local Business ──────────────────────────────────────────

export function getOrganizationSchema(): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'MedicalBusiness'],
    '@id': `${BASE_URL}/#organization`,
    name: 'Derry Hypnosis',
    url: BASE_URL,
    email: SITE_INFO.email,
    description:
      'Clinical hypnotherapy in Derry/Londonderry with Tracey McGill. Specialising in weight loss, quit smoking, anxiety relief, sleep, phobia release, and more.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2-4 Foyle Rd',
      addressLocality: 'Londonderry',
      postalCode: 'BT48 6AX',
      addressRegion: 'Northern Ireland',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '54.9966',
      longitude: '-7.3086',
    },
    areaServed: [
      { '@type': 'City', name: 'Derry' },
      { '@type': 'City', name: 'Londonderry' },
      { '@type': 'State', name: 'Northern Ireland' },
    ],
    priceRange: '££',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Clinical Hypnotherapy Services',
      itemListElement: [
        'Weight Loss Hypnotherapy',
        'Quit Smoking Hypnotherapy',
        'Anxiety and Stress Relief',
        'Deep Sleep and Insomnia',
        'Phobia Release',
        'IBS Management',
        'Public Speaking Confidence',
        'Sports Performance',
      ].map(name => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
    },
    founder: {
      '@type': 'Person',
      name: SITE_INFO.owner,
    },
    sameAs: [
      'https://www.facebook.com/derryhypnosis',
    ],
  });
}

// ─── Person (Tracey McGill) ──────────────────────────────────────────────────

export function getPersonSchema(): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE_URL}/about#tracey-mcgill`,
    name: SITE_INFO.owner,
    jobTitle: 'Clinical Hypnotherapist',
    url: `${BASE_URL}/about`,
    worksFor: {
      '@type': 'Organization',
      name: 'Derry Hypnosis',
      url: BASE_URL,
    },
    memberOf: {
      '@type': 'Organization',
      name: 'European Association of Professional Hypnotherapists',
      url: 'https://www.eaph.eu',
    },
    knowsAbout: [
      'Clinical Hypnotherapy',
      'Weight Loss Hypnotherapy',
      'Smoking Cessation',
      'Anxiety Treatment',
      'Virtual Gastric Band Hypnotherapy',
      'CBT-Hypnotherapy',
      'Gut-Directed Hypnotherapy for IBS',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Londonderry',
      addressRegion: 'Northern Ireland',
      addressCountry: 'GB',
    },
  });
}

// ─── FAQ Page ────────────────────────────────────────────────────────────────

export function getFAQSchema(faqs: FAQItem[] = FAQS): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  });
}

// ─── Blog Post ───────────────────────────────────────────────────────────────

export function getBlogPostingSchema(post: Post): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    url: `${BASE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    image: {
      '@type': 'ImageObject',
      url: post.ogImage,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Person',
      name: SITE_INFO.owner,
      url: `${BASE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Derry Hypnosis',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.slug}`,
    },
    inLanguage: 'en-GB',
    keywords: post.category,
  });
}

// ─── Service Page ────────────────────────────────────────────────────────────

export function getServiceSchema(service: {
  slug: string;
  title: string;
  description: string;
}): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: `${BASE_URL}/services/${service.slug}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Derry Hypnosis',
      url: BASE_URL,
    },
    areaServed: 'Derry/Londonderry, Northern Ireland',
    serviceType: 'Clinical Hypnotherapy',
  });
}

// ─── Breadcrumbs ─────────────────────────────────────────────────────────────

export function getBreadcrumbSchema(items: { name: string; path: string }[]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  });
}

// ─── Download Products ───────────────────────────────────────────────────────

export function getProductListSchema(products: DownloadProduct[]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Hypnosis Audio Downloads',
    url: `${BASE_URL}/downloads`,
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: p.title,
        description: p.description,
        image: `${BASE_URL}${p.coverImage}`,
        url: `https://payhip.com/b/${p.payhipCode}`,
        offers: {
          '@type': 'Offer',
          price: p.price.toFixed(2),
          priceCurrency: 'GBP',
          availability: 'https://schema.org/InStock',
          url: `https://payhip.com/b/${p.payhipCode}`,
        },
      },
    })),
  });
}
