import React from 'react';
import { 
  Award, 
  GraduationCap, 
  CheckCircle, 
  Star, 
  Sparkles, 
  MessageSquare, 
  Phone, 
  ShieldCheck,
  MapPin,
  HeartHandshake,
  Mail,
  Instagram
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';
import { RevealOnScroll } from './RevealOnScroll';

interface DoctorProfileProps {
  onBookClick: () => void;
  onOpenAi: () => void;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ onBookClick, onOpenAi }) => {
  return (
    <section id="doctor" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Doctor Visual & Credentials Badge Column */}
          <div className="lg:col-span-5 space-y-6">
            <RevealOnScroll variant="fade-right" duration={700}>
            <div className="relative">
              {/* Doctor Avatar / Visual Card */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-teal-800 via-teal-900 to-slate-950 p-8 sm:p-10 text-white shadow-2xl border border-teal-700/50">
                <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Doctor Portrait Image - Square Shape & HD Half-Body */}
                  <div className="w-48 h-48 sm:w-56 sm:h-56 aspect-square rounded-2xl overflow-hidden border-4 border-teal-400/90 shadow-2xl relative bg-slate-900 ring-4 ring-teal-500/25 group">
                    <img
                      src="/dr-darshak-square.jpg"
                      alt="Dr. Darshak Vaghani (Orthodontist) - Apex Dental Clinic"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-slate-950/85 backdrop-blur-xs text-[10px] font-black text-cyan-300 border border-teal-500/40 tracking-wider shadow-xs">
                      HD
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      Dr. Darshak Vaghani
                    </h3>
                    <div className="inline-block mt-1 px-3 py-1 bg-teal-500/20 border border-teal-400/30 rounded-full text-xs font-semibold text-cyan-200">
                      B.D.S., M.D.S. (Orthodontist)
                    </div>
                  </div>

                  <p className="text-xs text-teal-100/90 leading-relaxed max-w-sm">
                    Master of Dental Surgery (M.D.S.) in Orthodontics & Dentofacial Orthopedics. Dedicated to gentle, patient-first clinical excellence in Surat.
                  </p>

                  {/* Rating Badge */}
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-xs">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="font-bold text-white">5.0 / 5.0</span>
                    <span className="text-teal-200 text-[11px]">Google Reviews</span>
                  </div>
                </div>

                {/* Quick Doctor Stats Row */}
                <div className="grid grid-cols-2 gap-3 mt-8 pt-6 border-t border-teal-800 text-center text-xs">
                  <div>
                    <div className="text-xl font-black text-white">100%</div>
                    <div className="text-[11px] text-teal-300">Painless Care Protocol</div>
                  </div>
                  <div>
                    <div className="text-xl font-black text-white">Surat</div>
                    <div className="text-[11px] text-teal-300">Mota Varachha Clinic</div>
                  </div>
                </div>
              </div>
            </div>
            </RevealOnScroll>
          </div>

          {/* Doctor Details & Clinical Specialization Column */}
          <div className="lg:col-span-7 space-y-6">
            <RevealOnScroll variant="fade-left" delay={150} duration={700}>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Lead Specialist & Dental Surgeon
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Meet Dr. Darshak Vaghani
              </h2>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-slate-600 font-medium mt-1">
                <span>B.D.S.</span>
                <span className="text-slate-300">·</span>
                <span className="text-teal-700 font-semibold">M.D.S. (Orthodontics & Dentofacial Orthopedics)</span>
              </div>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              At Apex Dental Clinic, Dr. Darshak Vaghani combines advanced post-graduate orthodontic expertise with modern painless dentistry. Having treated hundreds of patients for crooked teeth, jaw discrepancies, missing teeth, and severe dental pain, he ensures every visit is welcoming, transparent, and completely comfortable.
            </p>

            {/* Doctor's Core Areas of Expertise */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Specialized Clinical Competencies:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span>Invisalign & Clear Aligners</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Custom digital computerized aligners for discreet, comfortable teeth straightening.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span>Pediatric Growth Modification</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Guiding jaw growth in children and young teens to prevent future complex surgeries.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span>Dental Implants & Overdentures</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Lifetime tooth replacements and implant-supported overdentures for full chewing power.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span>Single-Sitting Painless Root Canals</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Rotary endodontics to eliminate severe toothache while saving your natural tooth.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote / Philosophy Box */}
            <div className="p-4 bg-teal-50 rounded-xl border border-teal-200/80 flex items-start gap-3">
              <HeartHandshake className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-teal-900 italic leading-relaxed">
                "Our clinic philosophy is simple: Treat every patient like family with absolute gentleness, utilize high-grade digital diagnostics, and never compromise on hygiene and sterilization."
                <span className="block mt-1 font-bold not-italic text-teal-950 text-xs">— Dr. Darshak Vaghani</span>
              </p>
            </div>

            {/* Direct Doctor Channels: Phone, Email & Instagram */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs">
              <a
                href={`tel:${CLINIC_CONTACT.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold hover:bg-emerald-100 transition-colors"
                title="Call Dr. Darshak Vaghani"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>{CLINIC_CONTACT.phone}</span>
              </a>

              <a
                href={`mailto:${CLINIC_CONTACT.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 text-rose-800 border border-rose-200 font-semibold hover:bg-rose-100 transition-colors"
                title="Email Dr. Darshak Vaghani"
              >
                <Mail className="w-3.5 h-3.5 text-rose-600" />
                <span>{CLINIC_CONTACT.email}</span>
              </a>

              <a
                href={CLINIC_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-50 text-pink-800 border border-pink-200 font-semibold hover:bg-pink-100 transition-colors"
                title="Follow on Instagram"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-600" />
                <span>{CLINIC_CONTACT.instagramHandle}</span>
              </a>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${CLINIC_CONTACT.phoneRaw}?text=${encodeURIComponent(
                  'Hello Dr. Darshak Vaghani, I would like to consult you regarding dental treatment at Apex Dental Clinic, Mota Varachha.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                title="Direct WhatsApp Consultation with Dr. Darshak Vaghani"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>Consult Dr. Darshak on WhatsApp</span>
              </a>

              <a
                href="#gallery"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl shadow-2xs transition-colors cursor-pointer"
              >
                <span>View Treatment Photos & Clinic Tour</span>
              </a>

              <button
                onClick={onOpenAi}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-teal-900 bg-white hover:bg-teal-50 border border-teal-200 rounded-xl shadow-2xs transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span>Ask AI About Doctor's Experience</span>
              </button>
            </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
