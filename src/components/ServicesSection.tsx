import React, { useState, useMemo } from 'react';
import { 
  Search, 
  MessageSquare, 
  Info, 
  Check, 
  Clock, 
  Sparkles, 
  X,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Layers
} from 'lucide-react';
import { ALL_SERVICES, CLINIC_CONTACT } from '../data/clinicData';
import { DentalService, ServiceCategory } from '../types/dental';
import { RevealOnScroll } from './RevealOnScroll';

interface ServicesSectionProps {
  onBookService: (serviceName: string) => void;
  onAskAiAboutService: (serviceName: string) => void;
}

const INITIAL_SERVICE_LIMIT = 4;

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onBookService,
  onAskAiAboutService,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<DentalService | null>(null);
  const [showAllServices, setShowAllServices] = useState(false);

  const categories: { key: ServiceCategory; label: string; count: number }[] = [
    { key: 'all', label: 'All Services', count: ALL_SERVICES.length },
    { key: 'orthodontics', label: 'Orthodontics & Aligners', count: ALL_SERVICES.filter(s => s.category === 'orthodontics').length },
    { key: 'implants', label: 'Implants & Bridges', count: ALL_SERVICES.filter(s => s.category === 'implants').length },
    { key: 'cosmetic', label: 'Cosmetic Dentistry', count: ALL_SERVICES.filter(s => s.category === 'cosmetic').length },
    { key: 'general', label: 'General & Preventive', count: ALL_SERVICES.filter(s => s.category === 'general').length },
    { key: 'surgery', label: 'Endodontics & Surgery', count: ALL_SERVICES.filter(s => s.category === 'surgery').length },
    { key: 'pediatric', label: 'Pediatric Care', count: ALL_SERVICES.filter(s => s.category === 'pediatric').length },
    { key: 'periodontal', label: 'Gum & Periodontal', count: ALL_SERVICES.filter(s => s.category === 'periodontal').length },
  ];

  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter((svc) => {
      const matchesCategory = activeCategory === 'all' || svc.category === activeCategory;
      const matchesSearch = 
        svc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.fullDesc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const shouldLimit = !showAllServices && activeCategory === 'all' && !searchQuery.trim();
  const displayedServices = shouldLimit 
    ? filteredServices.slice(0, INITIAL_SERVICE_LIMIT) 
    : filteredServices;
  const remainingCount = Math.max(0, filteredServices.length - INITIAL_SERVICE_LIMIT);

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll variant="fade-up" duration={700}>
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-700">
            Comprehensive Dental Specialities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Complete Dental Services at Apex
          </h2>
          <p className="text-base text-slate-600">
            From specialist orthodontic growth modification and clear aligners to digital implants, root canals, and pediatric care — all under one sterile roof in Mota Varachha, Surat.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="space-y-4 mb-8">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search treatments (e.g. Invisalign, Root Canal, Whitening, Implants)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-1.5 p-1.5 bg-slate-100 rounded-xl max-w-4xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key);
                  if (cat.key !== 'all') {
                    setShowAllServices(true);
                  }
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-white text-teal-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>
        </div>
        </RevealOnScroll>

        {/* Services Grid (Shows 4 featured items initially, expands to full directory on See More) */}
        <RevealOnScroll variant="fade-up" delay={150} duration={700}>
        <div className={`grid gap-6 ${shouldLimit ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-teal-300 hover:shadow-lg transition-all group"
            >
              <div>
                {/* Clean unboxed metadata separator */}
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-2">
                  <span className="capitalize text-teal-700 font-semibold">{service.category}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {service.duration}
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                  {service.name}
                </h3>

                {/* Short description */}
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Benefits List */}
                <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-slate-600 hover:text-teal-700 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Details</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onAskAiAboutService(service.name)}
                    className="p-2 text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors cursor-pointer"
                    title={`Ask AI about ${service.name}`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                  </button>

                  <a
                    href={`https://wa.me/${CLINIC_CONTACT.phoneRaw}?text=${encodeURIComponent(
                      `Hello Dr. Darshak Vaghani, I would like to book an appointment for ${service.name} at Apex Dental Clinic, Mota Varachha, Surat.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm hover:shadow transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    title={`Book ${service.name} directly on WhatsApp`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
                    <span>WhatsApp Book</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        </RevealOnScroll>

        {/* View All / See More Action Bar */}
        {activeCategory === 'all' && !searchQuery.trim() && (
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            {shouldLimit ? (
              <button
                onClick={() => setShowAllServices(true)}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-teal-800 hover:bg-teal-900 text-white text-sm sm:text-base font-bold rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <Layers className="w-5 h-5 text-cyan-300" />
                <span>See More Services (View All {ALL_SERVICES.length} Treatments · +{remainingCount} More)</span>
                <ChevronDown className="w-4 h-4 text-cyan-300" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setShowAllServices(false);
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold rounded-xl border border-slate-300 transition-colors cursor-pointer"
              >
                <ChevronUp className="w-4 h-4" />
                <span>Show Fewer Services (Show Only Top 4)</span>
              </button>
            )}
          </div>
        )}

        {/* If no services match search */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-slate-600 text-sm">No treatments matched "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 text-xs font-semibold text-teal-700 hover:underline cursor-pointer"
            >
              Reset search & show all 24 services
            </button>
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                  {selectedService.category} Speciality
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {selectedService.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>{selectedService.fullDesc}</p>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-800 font-semibold">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span>Estimated Duration: {selectedService.duration}</span>
                </div>
                <div className="text-xs text-slate-600">
                  <strong className="text-slate-700">Ideal For:</strong> {selectedService.idealFor}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">
                  Key Patient Benefits:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {selectedService.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-2">
              <a
                href={`https://wa.me/${CLINIC_CONTACT.phoneRaw}?text=${encodeURIComponent(
                  `Hello Dr. Darshak Vaghani, I would like to book an appointment for ${selectedService.name} at Apex Dental Clinic, Mota Varachha, Surat.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedService(null)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>Book this on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  const serviceName = selectedService.name;
                  setSelectedService(null);
                  onAskAiAboutService(serviceName);
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-teal-50 hover:bg-teal-100 text-teal-900 font-semibold text-xs sm:text-sm rounded-xl border border-teal-200 transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span>Ask AI About This</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
