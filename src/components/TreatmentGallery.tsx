import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  ZoomIn, 
  X, 
  Check, 
  ArrowRight, 
  Building2
} from 'lucide-react';
import { GALLERY_ITEMS, FEATURED_GALLERY_CASE, GalleryItem } from '../data/galleryData';
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

  const filteredItems = activeTab === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll variant="fade-up" duration={700}>
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
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
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm shrink-0">
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

        {/* Top Featured Clinical Case Banner */}
        <div className="mb-12 bg-gradient-to-br from-[#0F1E36] via-[#16243E] to-[#0A1424] rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-amber-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Case Image Showcase */}
            <div 
              onClick={() => setSelectedItem(FEATURED_GALLERY_CASE)}
              className="lg:col-span-5 relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black aspect-[3/4] max-h-[460px] mx-auto w-full max-w-sm lg:max-w-none"
            >
              <img 
                src={FEATURED_GALLERY_CASE.imageUrl} 
                alt={FEATURED_GALLERY_CASE.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#0F1E36]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Featured Clinical Case
              </div>
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <span className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white shadow-lg">
                  <ZoomIn className="w-6 h-6 text-white" />
                </span>
                <span className="text-white text-sm font-bold">Click to Expand Case</span>
              </div>
            </div>

            {/* Right Clinical Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Dr. Darshak Vaghani · M.D.S. Orthodontist
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {FEATURED_GALLERY_CASE.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {FEATURED_GALLERY_CASE.details}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {FEATURED_GALLERY_CASE.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setSelectedItem(FEATURED_GALLERY_CASE)}
                  className="px-5 py-2.5 bg-[#0F1E36] hover:bg-[#1a2e4d] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg hover:shadow-amber-500/25 flex items-center gap-2 cursor-pointer"
                >
                  <ZoomIn className="w-4 h-4" />
                  View High-Res Photo
                </button>

                <a
                  href={`https://wa.me/917984677833?text=${encodeURIComponent('Hello Dr. Darshak Vaghani, I saw your featured deep bite clinical transformation photo on the Apex Dental website and would like to consult about teeth alignment.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-xl transition-all border border-white/20 flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  Consult Dr. Darshak on WhatsApp
                </a>
              </div>
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
                  ? 'bg-white text-amber-900 shadow-xs'
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
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-xl hover:border-amber-400 transition-all cursor-pointer flex flex-col"
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
                <div className="absolute inset-0 bg-[#0F1E36]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                  <span className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </span>
                  <span className="text-xs font-bold">View Details</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="text-[11px] font-semibold text-amber-700">
                    {item.treatmentTag}
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-amber-800 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-amber-700 font-semibold">
                  <span>Explore procedure</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
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
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
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
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
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
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-amber-50 hover:bg-amber-100 text-amber-900 font-semibold text-xs sm:text-sm rounded-xl border border-amber-200 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-600" />
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
