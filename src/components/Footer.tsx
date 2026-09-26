import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star,
  ExternalLink,
  Mail,
  Instagram
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface FooterProps {
  onOpenAi?: () => void;
  onBookClick?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Doctor Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/apex-logo.png" 
                alt="Apex Dental Clinic Logo" 
                className="w-11 h-11 object-contain rounded-xl p-1 bg-white border border-slate-700 shadow-md flex-shrink-0" 
              />
              <div>
                <span className="text-xl font-black text-white tracking-tight uppercase">
                  Apex Dental <span className="text-teal-400">Clinic</span>
                </span>
                <span className="block text-xs text-teal-400 font-semibold">
                  Orthodontics & Advanced Dentistry · Surat
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Led by <strong className="text-slate-200 font-bold">Dr. Darshak Vaghani</strong> (B.D.S., M.D.S. Orthodontist), <strong className="text-teal-300">Apex Dental Clinic</strong> provides comprehensive dental care, Invisalign clear aligners, dental implants, single-sitting root canals, and pediatric treatments in Mota Varachha, Surat.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400 pt-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">5.0 Rating</span>
              <span className="text-slate-500">· Google Reviews</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">
                  All 24 Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-teal-400 transition-colors">
                  Treatment Gallery & Tour
                </a>
              </li>
              <li>
                <a href="#doctor" className="hover:text-teal-400 transition-colors">
                  Dr. Darshak Vaghani
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-teal-400 transition-colors">
                  WhatsApp Booking
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-teal-400 transition-colors">
                  Smile Advisor Quiz
                </a>
              </li>
              <li>
                <a href="#timings" className="hover:text-teal-400 transition-colors">
                  Clinic Timings
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-teal-400 transition-colors">
                  Patient Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-teal-400 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Key Treatments */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Key Specialities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Invisalign & Clear Aligners</li>
              <li>Orthodontics & Growth Modification</li>
              <li>Permanent Dental Implants</li>
              <li>Single-Sitting Painless Root Canals</li>
              <li>Teeth Whitening & Smile Makeover</li>
              <li>Denture & Implant Overdentures</li>
              <li>Pediatric Dental Services</li>
              <li>Treatment of Gingivitis & Periodontitis</li>
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Contact & Hours
            </h4>

            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  2nd Floor, near Mahadev Chowk, Opp. Dharmnandan Row House Society, Mota Varachha, Surat, Gujarat
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${CLINIC_CONTACT.phone}`} className="hover:text-white font-medium">
                  {CLINIC_CONTACT.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-400 shrink-0" />
                <a href={`mailto:${CLINIC_CONTACT.email}`} className="hover:text-white font-medium break-all">
                  {CLINIC_CONTACT.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href={CLINIC_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-300 font-medium inline-flex items-center gap-1 group"
                >
                  <span>{CLINIC_CONTACT.instagramHandle}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-pink-300" />
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <span className="block text-slate-300 font-semibold">Mon – Sat: 9:00 am – 8:30 pm</span>
                  <span className="block text-amber-400 font-semibold">Sunday: 9:00 am – 1:00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Ethical Medical Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Apex Dental Clinic. Dr. Darshak Vaghani (Orthodontist). All rights reserved.
          </p>

          <p className="text-[11px] text-slate-500 text-center sm:text-right max-w-md">
            Informational purposes only. Clinical diagnosis requires an in-person dental consultation & digital imaging.
          </p>
        </div>

        {/* Agency Attribution */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 text-center">
          <p className="text-[11px] text-slate-400 font-medium tracking-wide">
            designed by <span className="text-slate-300 hover:text-teal-400 transition-colors">PixelBite Web Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
