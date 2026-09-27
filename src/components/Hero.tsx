import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  Phone, 
  Clock, 
  CheckCircle2, 
  MapPin,
  ChevronLeft,
  ChevronRight,
  Star,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { CLINIC_CONTACT, CLINIC_TIMINGS } from '../data/clinicData';

interface HeroProps {
  onOpenAi: () => void;
  onBookClick: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAi, onBookClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 'slide-reception',
      title: 'Warm Clinic Reception & Waiting Lounge',
      subtitle: 'Modern wooden reception desk, illuminated dental emblem, and comfortable sunny yellow patient lounge',
      type: 'lounge',
      imgSrc: '/clinic-photo-3-clean.jpg', // fallback image
    },
    {
      id: 'slide-operatory-main',
      title: 'State-of-the-Art Computerized Operatory',
      subtitle: 'Ergonomic hydraulic chair, shadowless LED surgical lighting, and hospital-grade asepsis',
      type: 'photo',
      imgSrc: '/clinic-photo-3-clean.jpg',
    },
    {
      id: 'slide-operatory-dual',
      title: 'Dual Treatment Bays & Welcoming Atmosphere',
      subtitle: 'Comfortable family environment equipped for simultaneous gentle procedures',
      type: 'photo',
      imgSrc: '/clinic-photo-1-clean.jpg',
    },
    {
      id: 'slide-chair-monitor',
      title: 'Digital Intraoral Scans & Live HD Display',
      subtitle: 'Real-time diagnostic clarity and low-dose computerized digital x-rays for transparent care',
      type: 'photo',
      imgSrc: '/clinic-photo-4-clean.jpg',
    },
    {
      id: 'slide-doctor-suite',
      title: 'Dr. Darshak Vaghani Private Consultation Suite',
      subtitle: 'Specialist orthodontics, clear aligners planning, and personalized smile designing',
      type: 'photo',
      imgSrc: '/clinic-photo-5-clean.jpg',
    },
  ];

  // Auto-advance hero slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section id="home" className="relative bg-[#FAF8F5] pt-4 pb-14 sm:pb-20 overflow-hidden">
      
      {/* Top Welcome Micro-Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 bg-white/90 border border-amber-200/60 rounded-xl px-4 py-2.5 shadow-2xs">
          <div className="flex items-center gap-2 font-medium">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-900 font-bold">Apex Dental Clinic & Implant Center</span>
            <span className="text-slate-300 hidden sm:inline">·</span>
            <span className="text-slate-600 hidden sm:inline">Near Mahadev Chowk, Mota Varachha, Surat</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-amber-600 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>5.0 Google Rating (150+ Reviews)</span>
            </div>
            <a 
              href={`tel:${CLINIC_CONTACT.phone}`} 
              className="hidden md:inline font-bold text-slate-800 hover:text-amber-700 transition-colors"
            >
              📞 {CLINIC_CONTACT.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Full-Width Hero Presentation Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container with Rounded Corners & Shadow */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 aspect-[16/9] sm:aspect-[21/9] min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] bg-slate-900 select-none">
          
          {/* SLIDE 1: High-Fidelity Clinic Reception & Waiting Lounge (Exact representation of reference image) */}
          {currentSlide === 0 && (
            <div className="absolute inset-0 w-full h-full">
              {/* Photorealistic Reception Composition matching the user's uploaded reference */}
              <div className="relative w-full h-full overflow-hidden bg-gradient-to-r from-amber-50 via-orange-50 to-stone-100 flex items-center justify-center">
                
                {/* Background Glass Wall with Lush Greenery Outside */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 sm:w-3/5 bg-gradient-to-b from-emerald-100/60 to-slate-200/50 overflow-hidden border-l border-white/60">
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#15803d_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-300/40 via-transparent to-emerald-200/30" />
                </div>

                {/* Left Illuminated Terracotta / Warm Rose Emblem Wall */}
                <div className="absolute left-0 top-0 bottom-0 w-1/2 sm:w-2/5 bg-gradient-to-br from-[#D98A6C] via-[#C8795A] to-[#A85B3F] p-6 sm:p-10 flex flex-col justify-center text-white shadow-2xl">
                  {/* Subtle Wall Glow Border */}
                  <div className="absolute -inset-1 rounded-r-3xl bg-amber-300/20 blur-md pointer-events-none" />
                  
                  {/* Clinic Emblem on Feature Wall */}
                  <div className="relative z-10 space-y-2">
                    <div className="flex items-center gap-2.5">
                      <svg className="w-12 h-12 text-amber-200 drop-shadow-md" viewBox="0 0 100 100" fill="none">
                        <path d="M50 12C36 12 22 22 22 42C22 56 27 68 33 88C35 94 40 94 43 86C46 78 48 70 50 70C52 70 54 78 57 86C60 94 65 94 67 88C73 68 78 56 78 42C78 22 64 12 50 12Z" stroke="#FFE7BA" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="#F59E0B" fillOpacity="0.15" />
                        <path d="M32 46C38 56 62 56 68 46" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
                      </svg>
                      <div>
                        <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight drop-shadow-md">
                          Apex Dental
                        </h2>
                        <p className="text-[11px] sm:text-xs text-amber-200 font-semibold uppercase tracking-wider">
                          Clinic & Implant Center
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-amber-100/90 font-medium italic pt-1">
                      "your smile deserves expert care"
                    </p>

                    <div className="pt-3 hidden sm:block">
                      <p className="text-xs text-white/90 font-semibold">
                        Chief Specialist: Dr. Darshak Vaghani
                      </p>
                      <p className="text-[11px] text-amber-200">
                        B.D.S., M.D.S. (Orthodontics & Dentofacial Orthopedics)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Wood Reception Desk */}
                <div className="absolute left-[28%] sm:left-[24%] bottom-0 top-[28%] w-[42%] sm:w-[38%] rounded-t-2xl bg-gradient-to-b from-[#8C522B] via-[#75411E] to-[#5C3215] border-t-8 border-[#A6673A] shadow-2xl flex flex-col justify-between p-4 z-10">
                  <div className="w-full bg-[#FAF5EE] rounded-xl p-3 shadow-inner border border-amber-900/10 text-center">
                    <p className="text-[10px] sm:text-xs uppercase font-extrabold tracking-widest text-[#75411E]">
                      Reception & Consultation
                    </p>
                  </div>
                  {/* Purple Orchid Floral Vase Element */}
                  <div className="absolute -top-10 left-6 sm:left-10 flex items-center justify-center">
                    <div className="w-8 h-10 sm:w-10 sm:h-12 bg-white rounded-lg shadow-lg border border-amber-200 flex items-center justify-center">
                      <span className="text-base sm:text-lg">🪻</span>
                    </div>
                  </div>
                </div>

                {/* Right Cheerful Sunny Yellow Leather Lounge Couch (Matching Screenshot) */}
                <div className="absolute right-4 sm:right-10 bottom-0 top-[38%] w-[38%] sm:w-[32%] rounded-t-3xl bg-gradient-to-b from-[#FCD34D] via-[#F59E0B] to-[#D97706] p-4 sm:p-6 shadow-2xl border-t-8 border-[#FDE68A] flex flex-col justify-end z-10">
                  <div className="space-y-1">
                    <div className="inline-block px-2.5 py-1 bg-slate-900/80 rounded-md text-[10px] sm:text-xs text-amber-300 font-bold">
                      Luxury Patient Lounge
                    </div>
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                      Comfortable & Anxiety-Free
                    </p>
                    <p className="text-[11px] text-slate-800 hidden sm:block">
                      Spacious seating with chilled waiting lounge
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* SLIDES 2 to 5: High Resolution Actual Clinic Operatories & Facilities */}
          {currentSlide > 0 && (
            <div className="absolute inset-0 w-full h-full">
              <img 
                src={heroSlides[currentSlide].imgSrc} 
                alt={heroSlides[currentSlide].title}
                className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-black/30" />
              
              {/* Slide Caption Overlay */}
              <div className="absolute bottom-16 sm:bottom-20 left-6 sm:left-12 right-6 sm:right-12 z-20 text-white max-w-2xl space-y-1.5">
                <span className="inline-block px-3 py-1 rounded-md bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider">
                  Apex Dental Clinic Tour
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold drop-shadow-md">
                  {heroSlides[currentSlide].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 drop-shadow">
                  {heroSlides[currentSlide].subtitle}
                </p>
              </div>
            </div>
          )}

          {/* Carousel Left Circular Navigation Arrow (White circular button) */}
          <button
            onClick={handlePrevSlide}
            aria-label="Previous slide"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-slate-800 shadow-xl flex items-center justify-center hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all border border-slate-100 cursor-pointer z-30 group"
          >
            <ChevronLeft className="w-6 h-6 text-slate-800 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Carousel Right Circular Navigation Arrow (White circular button) */}
          <button
            onClick={handleNextSlide}
            aria-label="Next slide"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-slate-800 shadow-xl flex items-center justify-center hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all border border-slate-100 cursor-pointer z-30 group"
          >
            <ChevronRight className="w-6 h-6 text-slate-800 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Carousel Slide Indicators */}
          <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx ? 'w-6 bg-amber-400' : 'w-2 bg-white/60 hover:bg-white'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Exact Bottom Centered Floating Hours Badge (from screenshot) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 w-auto max-w-[92%] sm:max-w-none">
            <div className="bg-white text-slate-900 px-5 sm:px-8 py-2.5 sm:py-3 rounded-t-2xl shadow-2xl border-t border-x border-slate-200/90 flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold whitespace-nowrap">
              <Clock className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Monday – Saturday: 9:00 AM – 8:30 PM</span>
              <span className="text-slate-300">|</span>
              <span className="text-amber-800 font-semibold">Sunday: 9:00 AM – 1:00 PM</span>
            </div>
          </div>

        </div>

        {/* Hero Clinical Highlights & Action Banner */}
        <div className="mt-8 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200/80 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Dr. Darshak Vaghani · M.D.S. Orthodontist</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Apex Dental Clinic & Implant Center
                <span className="block text-2xl sm:text-3xl lg:text-3xl font-extrabold text-amber-600 mt-1 sm:mt-2">
                  Your Smile Deserves Expert Care
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
                Surat’s premier center for advanced orthodontic teeth alignment, invisible clear aligners, dental implants, single-sitting painless root canals, and gentle pediatric dentistry in Mota Varachha.
              </p>

              {/* 6 Key Quality Checkpoints */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>M.D.S. Specialist</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Invisalign & Aligners</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Painless Single-Visit RCT</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Low-Dose Digital X-Ray</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Hospital-Grade Sterilization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Emergency Toothache Relief</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                {/* Book Appointment (Solid Deep Midnight Navy) */}
                <button
                  onClick={() => onBookClick()}
                  className="px-6 py-3.5 text-sm font-bold text-white bg-[#0F1E36] hover:bg-[#1a2e4d] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-amber-400" />
                  Book appointment
                </button>

                {/* WhatsApp Chat */}
                <a
                  href={`https://wa.me/${CLINIC_CONTACT.phoneRaw}?text=${encodeURIComponent(
                    'Hello Dr. Darshak Vaghani, I would like to schedule a consultation at Apex Dental Clinic, Mota Varachha, Surat.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white/20" />
                  WhatsApp Consult
                </a>

                {/* Ask AI Assistant */}
                <button
                  onClick={onOpenAi}
                  className="px-5 py-3.5 text-sm font-bold text-slate-800 bg-amber-50 hover:bg-amber-100 rounded-xl border border-amber-200/80 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  Ask Dental AI
                </button>
              </div>
            </div>

            {/* Right Doctor & Trust Card Column */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0F1E36] to-[#16243E] rounded-2xl p-6 sm:p-7 text-white shadow-xl space-y-4 border border-slate-700/50">
              <div className="flex items-center gap-4">
                <img 
                  src="/dr-darshak-square.jpg" 
                  alt="Dr. Darshak Vaghani"
                  className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl object-cover border-2 border-amber-400/80 shadow-md shrink-0" 
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white">
                    Dr. Darshak Vaghani
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-300 font-semibold">
                    B.D.S., M.D.S. (Orthodontist)
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    Specialist in Dentofacial Orthopedics & Smile Designing
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-white/10 rounded-xl border border-white/10 space-y-1.5 text-xs text-slate-200">
                <div className="flex items-center justify-between font-bold text-white">
                  <span>Google Verified Clinic</span>
                  <span className="text-amber-400">★★★★★ 5.0</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  2nd Floor, Near Mahadev Chowk, Opp. Dharmnandan Row House Society, Mota Varachha, Surat.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center text-xs pt-1">
                <div className="p-2.5 bg-white/5 rounded-xl border border-white/5">
                  <p className="text-lg font-black text-amber-400">100%</p>
                  <p className="text-[11px] text-slate-300">Painless Care</p>
                </div>
                <div className="p-2.5 bg-white/5 rounded-xl border border-white/5">
                  <p className="text-lg font-black text-amber-400">150+</p>
                  <p className="text-[11px] text-slate-300">5-Star Reviews</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
