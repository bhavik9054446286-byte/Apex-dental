import React from 'react';
import { Star, CheckCircle, Quote, MessageSquare } from 'lucide-react';
import { REVIEWS, CLINIC_CONTACT } from '../data/clinicData';
import { RevealOnScroll } from './RevealOnScroll';

interface GoogleReviewsProps {
  onBookClick: () => void;
}

export const GoogleReviews: React.FC<GoogleReviewsProps> = ({ onBookClick }) => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll variant="fade-up" duration={700}>
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Real Patient Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted with 5.0 Stars Across Surat
          </h2>
          <p className="text-base text-slate-600">
            Read what patients say about Dr. Darshak Vaghani’s orthodontic transformations, gentle single-sitting root canals, and pediatric care.
          </p>

          {/* Rating Summary Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 shrink-0" />
              ))}
            </div>
            <span className="text-lg font-black text-slate-900">5.0 / 5.0</span>
            <span className="text-slate-400 text-sm hidden sm:inline">·</span>
            <span className="text-slate-600 text-sm font-semibold">150+ Verified Google Reviews</span>
          </div>
        </div>
        </RevealOnScroll>

        {/* Reviews Grid */}
        <RevealOnScroll variant="fade-up" delay={150} duration={700}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                {/* Review Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{review.date}</span>
                </div>

                {/* Treatment Tag as clean unboxed text */}
                <div className="text-xs font-semibold text-amber-700">
                  Treatment: {review.treatment}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-xs">
                    {review.author[0]}
                  </div>
                  <span className="font-bold text-slate-900">{review.author}</span>
                </div>

                {review.verified && (
                  <span className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Patient</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        </RevealOnScroll>

        {/* Bottom CTA */}
        <RevealOnScroll variant="fade-up" delay={200} duration={700}>
        <div className="mt-12 text-center">
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Join 100+ Happy Patients · Book on WhatsApp</span>
          </button>
        </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
