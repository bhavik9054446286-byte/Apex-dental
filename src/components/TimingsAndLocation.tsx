import React from 'react';
import { 
  Clock, 
  MapPin, 
  Phone, 
  MessageSquare, 
  ExternalLink, 
  Navigation, 
  Building2,
  Calendar,
  CheckCircle2,
  Mail,
  Instagram
} from 'lucide-react';
import { CLINIC_CONTACT, CLINIC_TIMINGS } from '../data/clinicData';
import { ClinicStatusBanner } from './ClinicStatusBanner';
import { RevealOnScroll } from './RevealOnScroll';

interface TimingsAndLocationProps {
  onBookClick: () => void;
}

export const TimingsAndLocation: React.FC<TimingsAndLocationProps> = ({ onBookClick }) => {
  // Current day index
  const todayIndex = new Date().getDay();

  return (
    <section id="timings" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll variant="fade-up" duration={700}>
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-700">
            Visit & Schedule
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clinic Timings & Location
          </h2>
          <p className="text-base text-slate-600">
            Conveniently located at Mahadev Chowk in Mota Varachha, Surat with 7-day accessibility including Sunday mornings and Saturday evenings.
          </p>
          <div className="pt-2 flex justify-center">
            <div className="bg-slate-100 px-4 py-2 rounded-xl inline-block">
              <ClinicStatusBanner />
            </div>
          </div>
        </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Weekly Schedule Card */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-right" delay={100} duration={700}>
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Weekly Consultation Hours</h3>
                  <p className="text-xs text-slate-500">Dr. Darshak Vaghani (Orthodontist)</p>
                </div>
              </div>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2.5 py-1 rounded-full">
                7 Days Open
              </span>
            </div>

            {/* Timings List */}
            <div className="space-y-2.5">
              {CLINIC_TIMINGS.map((item) => {
                const isToday = item.dayIndex === todayIndex;
                const isSunday = item.dayIndex === 0;

                return (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                      isToday
                        ? 'bg-teal-700 text-white font-semibold shadow-xs'
                        : 'bg-white border border-slate-200/80 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{item.day}</span>
                      {isToday && (
                        <span className="text-[10px] bg-teal-500 text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                          Today
                        </span>
                      )}
                      {isSunday && !isToday && (
                        <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full font-medium">
                          Morning Only
                        </span>
                      )}
                    </div>
                    <span className={`text-xs sm:text-sm font-mono shrink-0 ml-2 ${isToday ? 'text-teal-100' : 'text-slate-600'}`}>
                      {item.formatted}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Note on appointments */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
              <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Zero Waiting Policy</span>
              </div>
              <p className="text-slate-500">
                To minimize your waiting time, prior booking via WhatsApp is recommended. Walk-ins are always welcomed for emergencies.
              </p>
            </div>
            </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Address & Map Info Card */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-left" delay={150} duration={700}>
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-700 text-white flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Clinic Location in Surat</h3>
                  <p className="text-xs text-slate-500">Mota Varachha, Surat, Gujarat</p>
                </div>
              </div>
            </div>

            {/* Exact Landmark Address Details */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Full Postal Address
                </div>
                <p className="text-sm font-semibold text-slate-900 leading-snug">
                  Apex Dental Clinic
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  2nd Floor, near Mahadev Chowk, Opp. Dharmnandan Row House Society, Mota Varachha, Surat, Gujarat – 395006
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="font-semibold text-slate-800 block">Key Landmarks:</span>
                  <span className="text-slate-500">Mahadev Chowk & Opp. Dharmnandan Row House</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-800 block">Accessibility:</span>
                  <span className="text-slate-500">2nd Floor (Elevator & Staircase available)</span>
                </div>
              </div>

              {/* Direct Maps Navigation Button */}
              <div className="pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    'Apex Dental Clinic Mahadev Chowk Opp Dharmnandan Row House Mota Varachha Surat'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-teal-800 hover:bg-teal-900 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer shadow-2xs"
                >
                  <Navigation className="w-4 h-4 text-cyan-300" />
                  <span>Open in Google Maps & Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-teal-300" />
                </a>
              </div>
            </div>

            {/* Quick Contact & WhatsApp Box */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-center sm:text-left">
                <div className="text-xs font-bold text-emerald-950 flex items-center justify-center sm:justify-start gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  Direct Phone & WhatsApp
                </div>
                <div className="text-base font-extrabold text-emerald-800">
                  {CLINIC_CONTACT.phone}
                </div>
              </div>

              <a
                href={`https://wa.me/${CLINIC_CONTACT.phoneRaw}?text=${encodeURIComponent(
                  'Hello Dr. Darshak, I want to book an appointment slot at Apex Dental Clinic, Mota Varachha, Surat.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Email & Instagram Quick Connect Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`mailto:${CLINIC_CONTACT.email}`}
                className="bg-white border border-slate-200 hover:border-teal-400 rounded-xl p-3.5 flex items-center gap-3 transition-all hover:shadow-md group"
              >
                <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Official Gmail</span>
                  <span className="block text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-teal-700 transition-colors truncate">
                    {CLINIC_CONTACT.email}
                  </span>
                </div>
              </a>

              <a
                href={CLINIC_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-200 hover:border-pink-400 rounded-xl p-3.5 flex items-center gap-3 transition-all hover:shadow-md group"
              >
                <div className="w-10 h-10 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Instagram ID</span>
                  <span className="block text-xs sm:text-sm font-bold text-slate-900 group-hover:text-pink-600 transition-colors truncate">
                    {CLINIC_CONTACT.instagramHandle}
                  </span>
                </div>
              </a>
            </div>
          </div>
          </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
