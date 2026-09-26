import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle, MessageSquare } from 'lucide-react';
import { FREQUENT_QUESTIONS } from '../data/clinicData';
import { RevealOnScroll } from './RevealOnScroll';

interface FaqSectionProps {
  onOpenAi: () => void;
  onBookClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenAi, onBookClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll variant="fade-up" duration={700}>
        <div className="text-center space-y-3 mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-700">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600">
            Clear answers about orthodontic consultations, root canal comfort, treatments, and clinic appointments.
          </p>
        </div>
        </RevealOnScroll>

        {/* FAQ Accordion */}
        <RevealOnScroll variant="fade-up" delay={150} duration={700}>
        <div className="space-y-3">
          {FREQUENT_QUESTIONS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/60 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-teal-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        </RevealOnScroll>

        {/* AI Prompt Help Box */}
        <RevealOnScroll variant="fade-up" delay={200} duration={700}>
        <div className="mt-10 p-6 bg-gradient-to-r from-teal-50 via-cyan-50 to-slate-50 rounded-2xl border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">Have a specific or medical question?</h4>
              <p className="text-xs text-slate-600">
                Ask our 24/7 AI Dental Assistant for instant, detailed treatment guidance.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenAi}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>Ask Dental AI Now</span>
          </button>
        </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
