import React from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  Phone, 
  Clock, 
  CheckCircle2, 
  MapPin
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface HeroProps {
  onOpenAi: () => void;
  onBookClick: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAi, onBookClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-slate-50 to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/70">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Trust Pill / Location & Doctor Kicker */}
          {/* Prominent Clinic Name Highlight Badge with Official Logo */}
          <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-950 text-white shadow-md border border-teal-500/40 max-w-full">
            <div className="flex items-center gap-2">
              <img 
                src="/apex-logo.png" 
                alt="Apex Dental Clinic Logo" 
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain rounded-lg p-0.5 bg-white shrink-0" 
              />
              <span className="font-black text-xs sm:text-sm tracking-wider uppercase text-cyan-200">
                Apex Dental Clinic
              </span>
            </div>
            <span className="hidden sm:inline text-teal-400">·</span>
            <span className="text-[11px] sm:text-xs text-teal-200 font-medium">Mota Varachha, Surat</span>
          </div>

          {/* Main Headline with Highlighted Clinic Name */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-snug sm:leading-[1.18]">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-700">
              Apex Dental Clinic
            </span>
            <span className="text-slate-800 text-xl sm:text-3xl lg:text-4xl font-extrabold mt-2 sm:mt-3 block leading-snug">
              Painless, Advanced & Specialist Dental Care
            </span>
          </h1>

          {/* Doctor & Clinic Bio Intro */}
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed max-w-3xl font-normal">
            Led by <strong className="text-slate-900 font-bold">{CLINIC_CONTACT.doctorName}</strong> ({CLINIC_CONTACT.degrees}), <strong className="text-teal-900 font-bold">Apex Dental Clinic</strong> brings world-class Clear Aligners, dental implants, single-sitting root canals, and gentle pediatric care right to Mota Varachha, Surat.
          </p>

          {/* Key Quality Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 py-2 text-xs sm:text-sm text-slate-700 font-medium max-w-3xl">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>M.D.S. Orthodontist</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Invisalign & Clear Aligners</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Single-Visit Root Canals</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Digital Low-Dose X-Rays</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Hospital-Grade Sterilization</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Emergency Dental Relief</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-2">
            {/* Direct WhatsApp Redirection Button */}
            <a
              href={`https://wa.me/${CLINIC_CONTACT.phoneRaw}?text=${encodeURIComponent(
                'Hello Dr. Darshak Vaghani, I would like to book an appointment at Apex Dental Clinic, Mota Varachha, Surat.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer active:translate-y-0 text-center"
              title="Click to redirect to WhatsApp and chat with Dr. Darshak Vaghani"
            >
              <MessageSquare className="w-5 h-5 fill-white/20 shrink-0" />
              <span>Book on WhatsApp</span>
            </a>

            {/* AI Dental Assistant */}
            <button
              onClick={onOpenAi}
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm sm:text-base font-bold text-teal-900 bg-white hover:bg-teal-50/80 rounded-xl border border-teal-200 shadow-sm hover:shadow transition-all cursor-pointer text-center"
            >
              <Sparkles className="w-5 h-5 text-teal-600 animate-pulse shrink-0" />
              <span>Ask AI Dental Assistant</span>
            </button>

            {/* Direct Call Button */}
            <a
              href={`tel:${CLINIC_CONTACT.phone}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors text-center"
              title="Call Apex Dental Clinic"
            >
              <Phone className="w-4 h-4 text-slate-600 shrink-0" />
              <span>Call +91 79846 77833</span>
            </a>
          </div>

          {/* Location & Timings Snippet */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-3 text-xs text-slate-500 border-t border-slate-200/70">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-teal-600" />
              <span>2nd Floor, near Mahadev Chowk, Mota Varachha, Surat</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-600" />
              <span>Open Mon–Sat 9am–8:30pm · Sun 9am–1pm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
