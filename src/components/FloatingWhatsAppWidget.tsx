import React, { useState } from 'react';
import { MessageSquare, Sparkles, X, ChevronUp } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface FloatingWhatsAppWidgetProps {
  onOpenBooking: () => void;
  onOpenAi: () => void;
}

export const FloatingWhatsAppWidget: React.FC<FloatingWhatsAppWidgetProps> = ({
  onOpenBooking,
  onOpenAi,
}) => {
  const [showQuickOptions, setShowQuickOptions] = useState(false);

  const quickMessages = [
    { label: 'Book Appointment', text: 'Hello Dr. Darshak, I want to book a dental appointment at Apex Dental Clinic.' },
    { label: 'Invisalign / Aligners Info', text: 'Hi Dr. Darshak, I want to know about Invisalign and clear aligners treatment at Apex Dental Clinic.' },
    { label: 'Tooth Pain / Emergency', text: 'Emergency: Hello Doctor, I am experiencing severe tooth pain and need an urgent consultation.' },
    { label: 'Clinic Timings & Fees', text: 'Hello, please share Apex Dental Clinic consultation timings and available slots for this week.' },
  ];

  const defaultWhatsAppUrl = `https://wa.me/${CLINIC_CONTACT.phoneRaw}?text=${encodeURIComponent(
    'Hello Dr. Darshak Vaghani, I would like to book an appointment at Apex Dental Clinic, Mota Varachha, Surat.'
  )}`;

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col items-end gap-2.5">
      {/* Quick Questions Flyout */}
      {showQuickOptions && (
        <div className="w-80 bg-white rounded-2xl border-2 border-emerald-500/30 shadow-2xl p-4 space-y-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                A
              </div>
              <div>
                <h4 className="font-extrabold text-xs text-slate-900 uppercase">Apex Dental Clinic</h4>
                <p className="text-[10px] text-emerald-700 font-semibold">Dr. Darshak Vaghani (Orthodontist)</p>
              </div>
            </div>
            <button
              onClick={() => setShowQuickOptions(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 leading-snug">
            Choose a quick topic to <strong>open WhatsApp directly</strong>:
          </p>

          <div className="space-y-1.5">
            {quickMessages.map((item, idx) => (
              <a
                key={idx}
                href={`https://wa.me/${CLINIC_CONTACT.phoneRaw}?text=${encodeURIComponent(item.text)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowQuickOptions(false)}
                className="w-full text-left text-xs p-2.5 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-950 rounded-xl border border-slate-200/80 transition-all font-medium text-slate-700 flex items-center justify-between group"
              >
                <span>{item.label}</span>
                <span className="text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                  →
                </span>
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowQuickOptions(false)}
              className="text-emerald-700 hover:text-emerald-800 font-bold text-[11px] flex items-center gap-1 hover:underline"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Direct WhatsApp Chat
            </a>
            <button
              onClick={() => {
                setShowQuickOptions(false);
                onOpenAi();
              }}
              className="text-amber-700 hover:text-amber-800 font-bold text-[11px] flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-amber-600" />
              Ask AI
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Bar */}
      <div className="flex items-center gap-2">
        {/* Toggle options mini arrow button */}
        <button
          onClick={() => setShowQuickOptions(!showQuickOptions)}
          className="w-9 h-9 rounded-full bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-300 shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-105"
          title="Quick WhatsApp options"
          aria-label="Toggle WhatsApp options"
        >
          <ChevronUp className={`w-4 h-4 transition-transform duration-200 ${showQuickOptions ? 'rotate-180' : ''}`} />
        </button>

        {/* AI Guide Bubble */}
        <button
          onClick={onOpenAi}
          className="hidden sm:flex items-center gap-1.5 px-3 py-2.5 bg-white text-amber-900 rounded-full shadow-lg border border-amber-200 hover:bg-amber-50 text-xs font-bold transition-all cursor-pointer hover:scale-105"
          title="Ask Dental AI Guide"
        >
          <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
          <span>Ask Dental AI</span>
        </button>

        {/* Direct WhatsApp Action Button */}
        <a
          href={defaultWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl hover:shadow-emerald-600/40 transition-all cursor-pointer hover:scale-105 active:scale-95 border border-white/20"
          title="Click to redirect to WhatsApp and chat with Dr. Darshak Vaghani"
          aria-label="Direct WhatsApp Redirect"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 fill-white/20" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white" />
          </div>
          <span className="font-extrabold text-xs sm:text-sm tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
};
