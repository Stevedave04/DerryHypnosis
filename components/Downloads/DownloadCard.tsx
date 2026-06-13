import React from 'react';
import { CheckCircle2, Headphones, BookOpen, ShoppingBag } from 'lucide-react';
import type { DownloadProduct } from '../../types';

interface DownloadCardProps {
  product: DownloadProduct;
}

const DownloadCard: React.FC<DownloadCardProps> = ({ product }) => {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-1 group flex flex-col border border-cream">

      {/* Cover image */}
      <div className="relative overflow-hidden h-52 flex-shrink-0">
        <img
          src={product.coverImage}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
          width={400}
          height={208}
        />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 bg-teal/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full">
            {product.type === 'audio' ? (
              <><Headphones size={11} /> Audio &middot; {product.duration}</>
            ) : (
              <><BookOpen size={11} /> PDF Guide</>
            )}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-2">
          {product.subtitle}
        </p>
        <h3 className="font-heading text-xl font-bold text-teal mb-3 leading-snug">
          {product.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">
          {product.description}
        </p>

        {/* Benefits */}
        <ul className="space-y-2 mb-6">
          {product.benefits.slice(0, 3).map((benefit, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <CheckCircle2 size={14} className="text-gold mt-0.5 flex-shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>

        {/* Footer: price + buy button */}
        <div className="flex items-center justify-between pt-4 border-t border-cream mt-auto gap-3">
          <span className="font-heading text-2xl font-bold text-teal">
            £{product.price}
          </span>
          <a
            href={`https://payhip.com/b/${product.payhipCode}`}
            className="payhip-buy-button inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-bold text-sm py-3 px-6 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-md flex-shrink-0"
            data-theme="none"
            data-product={product.payhipCode}
          >
            Buy Now <ShoppingBag size={14} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default DownloadCard;
