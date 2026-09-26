import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Sparkles, 
  Menu, 
  X, 
  MessageSquare,
  Mail,
  Instagram
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface HeaderProps {
  onOpenAi: () => void;
  onBookClick: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAi, onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Doctor', href: '#doctor' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Services', href: '#services' },
    { label: 'Smile Advisor', href: '#quiz' },
    { label: 'Timings', href: '#timings' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          {/* Clinic Brand Identity - Never Truncated, Always Full Name */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <img 
              src="/apex-logo.png" 
              alt="Apex Dental Clinic Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-xl p-1 bg-white border border-teal-200/90 shadow-2xs group-hover:shadow-md group-hover:scale-105 transition-all shrink-0" 
            />
            <div className="flex flex-col justify-center shrink-0">
              <span className="font-black text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-900 tracking-tight group-hover:text-teal-700 transition-colors uppercase leading-snug whitespace-nowrap">
                Apex Dental <span className="text-teal-600">Clinic</span>
              </span>
              <div className="text-[10px] sm:text-xs text-slate-600 font-medium flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                <span className="text-slate-900 font-bold shrink-0">Dr. Darshak Vaghani</span>
                <span className="text-slate-300 shrink-0">·</span>
                <span className="text-teal-700 font-bold shrink-0">Orthodontist</span>
                <span className="hidden sm:inline text-teal-700 font-bold shrink-0">(M.D.S.)</span>
                <span className="hidden md:inline text-slate-300 shrink-0">·</span>
                <span className="hidden md:inline text-slate-500 font-medium shrink-0">Surat</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-slate-600 hover:text-teal-700 transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-teal-600 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-3 shrink-0">
            {/* Ask AI Assistant Button */}
            <button
              onClick={onOpenAi}
              className="inline-flex items-center gap-1.5 lg:gap-2 px-3 py-2 lg:px-3.5 lg:py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-teal-50 hover:text-teal-800 rounded-xl border border-slate-200 transition-all hover:border-teal-200 cursor-pointer shadow-2xs whitespace-nowrap"
              title="Ask AI Dental Assistant about treatments, doctor, and clinic"
            >
              <Sparkles className="w-4 h-4 text-teal-600 animate-pulse" />
              <span>Ask Dental AI</span>
            </button>

            {/* Instagram Link */}
            <a
              href={CLINIC_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 lg:p-2.5 text-pink-600 hover:text-pink-700 bg-pink-50 hover:bg-pink-100 rounded-xl border border-pink-200/80 transition-all shadow-2xs group shrink-0"
              title="Follow Apex Dental Clinic on Instagram (@apexdentalclinic16)"
            >
              <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>

            {/* Direct WhatsApp Redirection Button */}
            <a
              href={`https://wa.me/${CLINIC_CONTACT.phoneRaw}?text=${encodeURIComponent(
                'Hello Dr. Darshak Vaghani, I would like to book a dental appointment at Apex Dental Clinic, Mota Varachha, Surat.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 lg:px-4 lg:py-2.5 text-xs lg:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
              title="Click to chat directly with Apex Dental Clinic on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>WhatsApp Booking</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-1.5 shrink-0">
            <a
              href={`https://wa.me/${CLINIC_CONTACT.phoneRaw}?text=${encodeURIComponent(
                'Hello Dr. Darshak Vaghani, I would like to book an appointment at Apex Dental Clinic.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-emerald-600 rounded-lg shadow-2xs hover:bg-emerald-700 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
            </a>
            <button
              onClick={onOpenAi}
              className="p-2 text-teal-700 bg-teal-50 rounded-lg border border-teal-200 hover:bg-teal-100 transition-colors"
              aria-label="Ask AI Assistant"
              title="Ask Dental AI"
            >
              <Sparkles className="w-4 h-4 text-teal-600" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg border border-slate-200 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAi();
              }}
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-teal-50 text-teal-800 text-xs font-semibold border border-teal-200"
            >
              <Sparkles className="w-4 h-4 text-teal-600" />
              Ask Dental AI
            </button>
            <a
              href={`https://wa.me/${CLINIC_CONTACT.phoneRaw}?text=${encodeURIComponent(
                'Hello Dr. Darshak Vaghani, I would like to book a dental appointment at Apex Dental Clinic, Mota Varachha.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-emerald-600 text-white text-xs font-bold shadow-xs"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              WhatsApp Book
            </a>
          </div>

          <div className="space-y-1 divide-y divide-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-sm font-medium text-slate-700 hover:text-teal-700"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 text-xs text-slate-500 border-t border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-slate-800 font-semibold">
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <a href={`tel:${CLINIC_CONTACT.phone}`}>{CLINIC_CONTACT.phone}</a>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Mail className="w-3.5 h-3.5 text-rose-500" />
              <a href={`mailto:${CLINIC_CONTACT.email}`} className="hover:text-teal-700">{CLINIC_CONTACT.email}</a>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Instagram className="w-3.5 h-3.5 text-pink-500" />
              <a href={CLINIC_CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 font-semibold">
                {CLINIC_CONTACT.instagramHandle}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
              <span>2nd Floor, Near Mahadev Chowk, Mota Varachha, Surat</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
