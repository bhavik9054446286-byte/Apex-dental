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
  const [activeNav, setActiveNav] = useState('Home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#doctor' },
    { label: 'Contact', href: '#timings' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200/80 shadow-xs transition-all">
      {/* Main Navigation Bar Matching the Reference Theme */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Left: Brand Identity with Golden Tooth Icon */}
          <a href="#home" className="flex items-center gap-3 group shrink-0">
            {/* Stylized Tooth Outline Logo Icon */}
            <div className="relative flex items-center justify-center shrink-0">
              <svg 
                className="w-10 h-10 sm:w-11 sm:h-11 text-amber-600 transition-transform group-hover:scale-105" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Tooth outline path in warm gold */}
                <path 
                  d="M50 12C36 12 22 22 22 42C22 56 27 68 33 88C35 94 40 94 43 86C46 78 48 70 50 70C52 70 54 78 57 86C60 94 65 94 67 88C73 68 78 56 78 42C78 22 64 12 50 12Z" 
                  stroke="#C88A1E" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="fill-amber-50/50"
                />
                {/* Modern curving smile swoosh in navy */}
                <path 
                  d="M32 46C38 56 62 56 68 46" 
                  stroke="#0F1E36" 
                  strokeWidth="4.5" 
                  strokeLinecap="round" 
                />
                {/* Delicate spark accent */}
                <path 
                  d="M50 22V28M47 25H53" 
                  stroke="#D99B26" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                />
              </svg>
            </div>

            <div className="flex flex-col justify-center">
              <span className="font-extrabold text-lg sm:text-xl lg:text-2xl text-slate-900 tracking-tight leading-tight whitespace-nowrap">
                Apex Dental <span className="text-amber-600">Clinic</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-500 uppercase whitespace-nowrap">
                Dental Clinic &amp; Implant Center · Surat
              </span>
              <span className="text-[9px] sm:text-[10px] italic font-medium text-amber-700 whitespace-nowrap hidden sm:inline">
                Your smile deserves expert care
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Exact matching: Home has dark outline box) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeNav === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveNav(link.label)}
                  className={`text-sm font-semibold transition-all ${
                    isActive
                      ? 'border border-slate-900 rounded-md px-3.5 py-1 text-slate-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-950 px-1 py-1'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right: Phone Number + Book Appointment (Navy Button) + Ask AI */}
          <div className="hidden sm:flex items-center gap-4 lg:gap-6 shrink-0">
            {/* Phone Link */}
            <a 
              href={`tel:${CLINIC_CONTACT.phone}`}
              className="flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-amber-600 transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-slate-700" />
              <span>{CLINIC_CONTACT.phone}</span>
            </a>

            {/* AI Assistant Pill Button */}
            <button
              onClick={onOpenAi}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-amber-50 hover:bg-amber-100 hover:text-amber-900 rounded-lg border border-amber-200/80 transition-all cursor-pointer whitespace-nowrap"
              title="Ask AI Dental Assistant"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              <span>Ask AI</span>
            </button>

            {/* Book Appointment CTA (Solid Deep Midnight Navy matching reference) */}
            <button
              onClick={() => onBookClick()}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-[#0F1E36] hover:bg-[#1a2e4d] active:bg-[#0a1526] rounded-lg shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap"
            >
              Book appointment
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenAi}
              className="p-2 text-amber-700 bg-amber-50 rounded-lg border border-amber-200"
              title="Ask Dental AI"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg border border-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-5 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="space-y-1 divide-y divide-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActiveNav(link.label);
                  setMobileMenuOpen(false);
                }}
                className={`block py-2.5 text-sm font-semibold ${
                  activeNav === link.label ? 'text-amber-600 font-bold' : 'text-slate-700'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3 text-sm font-bold text-white bg-[#0F1E36] rounded-lg text-center shadow-md"
            >
              Book appointment
            </button>

            <a
              href={`https://wa.me/${CLINIC_CONTACT.phoneRaw}?text=${encodeURIComponent(
                'Hello Dr. Darshak Vaghani, I would like to book an appointment at Apex Dental Clinic, Mota Varachha, Surat.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-white bg-emerald-600 rounded-lg shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              Chat on WhatsApp
            </a>

            <div className="pt-2 text-xs text-slate-600 space-y-1.5 border-t border-slate-100">
              <p className="font-semibold text-slate-900">Dr. Darshak Vaghani · M.D.S. Orthodontist</p>
              <p>📞 {CLINIC_CONTACT.phone}</p>
              <p>📍 Near Mahadev Chowk, Mota Varachha, Surat</p>
              <p>🕒 Mon–Sat: 9am–8:30pm | Sun: 9am–1pm</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
