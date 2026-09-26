import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  ZoomIn, 
  X, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Sliders, 
  ChevronLeft, 
  ChevronRight,
  Eye,
  CheckCircle2,
  Clock,
  Building2
} from 'lucide-react';
import { GALLERY_ITEMS, BEFORE_AFTER_CASES, GalleryItem, BeforeAfterCase } from '../data/galleryData';
import { CLINIC_CONTACT } from '../data/clinicData';
import { RevealOnScroll } from './RevealOnScroll';

interface TreatmentGalleryProps {
  onBookService: (serviceName?: string) => void;
  onAskAi: (query: string) => void;
}

export const TreatmentGallery: React.FC<TreatmentGalleryProps> = ({
  onBookService,
  onAskAi,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'clinic' | 'orthodontics' | 'implants' | 'treatment' | 'pediatric'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  
  // Close modal on Escape key and prevent background body scrolling
  useEffect(() => {
    if (!selectedItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedItem]);
  
  // Before & After Interactive State
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const [viewMode, setViewMode] = useState<'full' | 'slider'>('full');

  const filteredItems = activeTab === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  const currentCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const handleNextCase = () => {
    setActiveCaseIndex((prev) => (prev + 1) % BEFORE_AFTER_CASES.length);
    setSliderPosition(50);
  };

  const handlePrevCase = () => {
    setActiveCaseIndex((prev) => (prev - 1 + BEFORE_AFTER_CASES.length) % BEFORE_AFTER_CASES.length);
    setSliderPosition(50);
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll variant="fade-up" duration={700}>
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-700">
            Clinic Tour & Clinical Visuals
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Treatment Gallery & Clinic Tour
          </h2>
          <p className="text-base text-slate-600">
            Take a visual tour inside Apex Dental Clinic in Mota Varachha, Surat. Explore our dual modern operatory, child-friendly pediatric setup, clear aligners, and real smile transformations.
          </p>
        </div>

        {/* Real Clinic Facilities Highlight Strip (Reflecting the uploaded clinic setup) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-sm shrink-0">
              01
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-slate-900">Dual Dental Chairs</div>
              <div className="text-[11px] text-slate-500">Computerized ergonomic operatories</div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-sm shrink-0">
              02
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-slate-900">Pediatric Care Zone</div>
              <div className="text-[11px] text-slate-500">Fear-free gentle kids dentistry</div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0">
              03
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-slate-900">M.D.S. Specialist</div>
              <div className="text-[11px] text-slate-500">Orthodontics & Clear Aligners</div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm shrink-0">
              04
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-slate-900">Hospital Sterilization</div>
              <div className="text-[11px] text-slate-500">Autoclave 100% sterile guarantee</div>
            </div>
          </div>
        </div>

        {/* Section Tabs (Zero-pill button controls) */}
        <div className="flex items-center justify-center flex-wrap gap-1.5 p-1.5 bg-slate-100 rounded-xl max-w-xl mx-auto mb-10">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'clinic', label: 'Operatory & Clinic Tour' },
            { id: 'pediatric', label: 'Pediatric Care' },
            { id: 'orthodontics', label: 'Doctor Profile' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white text-teal-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        </RevealOnScroll>

        {/* Gallery Image Grid (Balanced 3-column layout for 6 photos) */}
        <RevealOnScroll variant="fade-up" delay={100} duration={700}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-xl hover:border-teal-400 transition-all cursor-pointer flex flex-col"
            >
              {/* Image Container with Fallback */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.currentTarget;
                    // If local fails, try external high-res CDN
                    if (!target.src.includes('unsplash.com')) {
                      target.src = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80';
                    }
                  }}
                />

                {/* Category Badge on Image */}
                <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                  {item.categoryLabel}
                </div>

                {/* Hover Quick Action Indicator */}
                <div className="absolute inset-0 bg-teal-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                  <span className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </span>
                  <span className="text-xs font-bold">View Details</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="text-[11px] font-semibold text-teal-700">
                    {item.treatmentTag}
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-teal-800 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-teal-700 font-semibold">
                  <span>Explore procedure</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
        </RevealOnScroll>

        {/* INTERACTIVE BEFORE & AFTER SMILE MAKEOVER SHOWCASE */}
        <RevealOnScroll variant="fade-up" delay={150} duration={700}>
        <div className="bg-slate-50 rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/60 inline-block">
                Verified Clinical Results
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Before & After Transformations
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Actual clinical photo cases treated by Dr. Darshak Vaghani at Apex Dental Clinic in Mota Varachha, Surat.
              </p>
            </div>

            {/* Quick Case Switcher Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-2xs">
              {BEFORE_AFTER_CASES.map((c, idx) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveCaseIndex(idx);
                    setSliderPosition(50);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeCaseIndex === idx
                      ? 'bg-teal-700 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Case {idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            {/* Before & After Comparison Viewer */}
            <div className="lg:col-span-7 space-y-3">
              {/* View Mode Toggle Controls */}
              <div className="flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-slate-200 text-xs">
                <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Clinical Photo View:
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setViewMode('full')}
                    className={`px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer text-xs ${
                      viewMode === 'full'
                        ? 'bg-teal-100 text-teal-900'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Side-by-Side Photo
                  </button>
                  <button
                    onClick={() => setViewMode('slider')}
                    className={`px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer text-xs ${
                      viewMode === 'slider'
                        ? 'bg-teal-100 text-teal-900'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Interactive Slider
                  </button>
                </div>
              </div>

              {viewMode === 'full' ? (
                /* Full Side-by-Side Clinical Image (Direct from user upload) */
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-300 bg-slate-900 flex items-center justify-center p-2 sm:p-4 min-h-[320px]">
                  <img
                    src={currentCase.fullImg}
                    alt={currentCase.title}
                    className="max-h-[380px] w-auto max-w-full rounded-lg object-contain shadow-md"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/10 shadow-xs">
                    {currentCase.beforeLabel}
                  </div>
                  <div className="absolute top-4 right-4 bg-emerald-700/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/10 shadow-xs">
                    {currentCase.afterLabel}
                  </div>
                </div>
              ) : (
                /* Interactive Split Drag Comparison */
                <div className="relative aspect-16/10 rounded-2xl overflow-hidden shadow-lg border border-slate-300 bg-slate-900 select-none">
                  {/* After Image (Background) */}
                  <img
                    src={currentCase.afterImg}
                    alt={currentCase.afterLabel}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Before Image (Clipped by slider position) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <img
                      src={currentCase.beforeImg}
                      alt={currentCase.beforeLabel}
                      className="absolute inset-0 w-full h-full object-cover max-w-none"
                      style={{ width: '100%', height: '100%' }}
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                      {currentCase.beforeLabel}
                    </div>
                  </div>

                  {/* After Label */}
                  <div className="absolute top-3 right-3 bg-teal-800/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {currentCase.afterLabel}
                  </div>

                  {/* Drag Handle Divider */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-md"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-teal-800 shadow-xl flex items-center justify-center font-bold text-xs border-2 border-teal-600">
                      <Sliders className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={(e) => setSliderPosition(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                    aria-label="Drag before and after comparison"
                  />
                </div>
              )}

              <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                <span>
                  {viewMode === 'full'
                    ? '✦ High-definition verified clinical outcome'
                    : '◀ Slide left / right to compare transformation ▶'}
                </span>
                <span className="font-semibold text-teal-700">Case {activeCaseIndex + 1} of 3</span>
              </div>
            </div>

            {/* Case Details & Booking Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-block px-3 py-1 bg-teal-100/80 text-teal-900 rounded-full text-xs font-bold">
                {currentCase.treatment}
              </div>

              <h4 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                {currentCase.title}
              </h4>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <Clock className="w-4 h-4 text-teal-600" />
                <span>Total Timeline: {currentCase.duration}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentCase.description}
              </p>

              {/* Case Highlights */}
              <div className="space-y-1.5 pt-2">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Clinical Outcomes:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                  {currentCase.highlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs with Direct WhatsApp Redirection */}
              <div className="pt-4 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={`https://wa.me/${CLINIC_CONTACT.phoneRaw}?text=${encodeURIComponent(
                    `Hello Dr. Darshak Vaghani, I saw the clinical result for "${currentCase.title}" (${currentCase.treatment}) on your website and would like to book a consultation.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                  title="Book this treatment on WhatsApp"
                >
                  <MessageSquare className="w-4 h-4 fill-white/20" />
                  <span>Book on WhatsApp</span>
                </a>

                <button
                  onClick={() => onAskAi(`Tell me about ${currentCase.treatment} and results like ${currentCase.title}`)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white hover:bg-teal-50 text-teal-900 font-semibold text-xs rounded-xl border border-teal-200 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                  <span>Ask AI Details</span>
                </button>
              </div>
            </div>
          </div>

          {/* Verified Clinical Cases Mini Grid */}
          <div className="pt-6 border-t border-slate-200/80">
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Eye className="w-4 h-4 text-teal-600" />
              <span>All {BEFORE_AFTER_CASES.length} Verified Clinical Cases (Click to view):</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {BEFORE_AFTER_CASES.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setActiveCaseIndex(idx);
                    setSliderPosition(50);
                  }}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    activeCaseIndex === idx
                      ? 'bg-teal-50/70 border-teal-500 shadow-md ring-2 ring-teal-500/20'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-sm'
                  }`}
                >
                  <div className="aspect-16/10 rounded-xl overflow-hidden bg-slate-900 mb-2.5 relative">
                    <img
                      src={item.fullImg}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-1.5 left-1.5 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      Case {idx + 1}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-slate-900 line-clamp-1">{item.title}</h5>
                    <p className="text-[11px] text-teal-700 font-semibold mt-0.5">{item.treatment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </RevealOnScroll>
      </div>

      {/* Lightbox / Image Detail Modal */}
      {selectedItem && (
        <div 
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
        >
          {/* Always-visible screen corner close button */}
          <button
            onClick={() => setSelectedItem(null)}
            className="fixed top-3 right-3 sm:top-5 sm:right-6 z-60 p-2.5 sm:p-3 rounded-full bg-slate-900/90 hover:bg-rose-600 text-white shadow-2xl border border-white/20 transition-all cursor-pointer hover:scale-105 active:scale-95 flex items-center gap-1.5"
            aria-label="Close photo preview"
            title="Close preview (Esc)"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="hidden sm:inline text-xs font-semibold pr-1">Close</span>
          </button>

          {/* Modal Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl sm:rounded-3xl max-w-xl sm:max-w-2xl w-full max-h-[88vh] flex flex-col shadow-2xl border border-slate-200/90 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-150"
          >
            {/* Modal Image Header with Controlled Height */}
            <div className="relative h-48 sm:h-60 md:h-68 w-full bg-slate-950 shrink-0 overflow-hidden flex items-center justify-center">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/80 hover:bg-rose-600 text-white transition-colors shadow-md cursor-pointer"
                title="Close"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <div className="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] sm:text-xs font-bold px-3 py-1 rounded-md border border-white/10">
                {selectedItem.treatmentTag}
              </div>
            </div>

            {/* Modal Content - Scrollable if screen height is constrained */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1">
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                  {selectedItem.categoryLabel}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mt-1">
                  {selectedItem.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedItem.details}
              </p>

              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Key Features & Protocols:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {selectedItem.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => {
                    const tag = selectedItem.treatmentTag || selectedItem.title;
                    setSelectedItem(null);
                    onBookService(tag);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Book Appointment on WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    const tag = selectedItem.treatmentTag || selectedItem.title;
                    setSelectedItem(null);
                    onAskAi(`Tell me about ${tag} at Apex Dental Clinic`);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-teal-50 hover:bg-teal-100 text-teal-900 font-semibold text-xs sm:text-sm rounded-xl border border-teal-200 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-teal-600" />
                  <span>Ask AI</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
