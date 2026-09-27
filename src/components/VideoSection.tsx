import React, { useState, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  MessageSquare, 
  Instagram, 
  CheckCircle2, 
  Award, 
  Phone, 
  Maximize2
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';
import { RevealOnScroll } from './RevealOnScroll';

interface VideoSectionProps {
  onBookClick?: (service?: string) => void;
  onOpenAi?: () => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onBookClick }) => {
  const videoUrl = '/apex-clinic-official-video.mp4';
  const remoteVideoUrl = 'https://videotourl.com/videos/1790480401230-2c73eb10-83af-4903-b9c5-8e0dfaa77aaa.mp4';
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'braces' | 'pediatric' | 'clinic'>('braces');

  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="videos" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-teal-950 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold tracking-wide uppercase">
            <Play className="w-3.5 h-3.5 fill-teal-300" />
            <span>Clinical Video & Treatment Reels</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            See Apex Dental Care in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-200">
              Real Motion
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Watch Dr. Darshak Vaghani performing precision braces wire adjustments, gentle pediatric procedures, and digital diagnostic examinations at our modern clinic in Mota Varachha, Surat.
          </p>

          {/* Gujarati highlight badge */}
          <div className="inline-block px-4 py-1.5 rounded-lg bg-teal-900/60 border border-teal-500/40 text-xs text-teal-200 font-medium">
            દાંત ને લગતી કોઈ પણ સમસ્યા માટે વિડિઓ અને સારવાર ડેમો જુઓ · +91 79846 77833
          </div>
        </div>

        {/* Video Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Interactive Video Player */}
          <div className="lg:col-span-6 flex justify-center">
            <RevealOnScroll variant="fade-up" duration={600}>
              <div className="relative group max-w-sm sm:max-w-md w-full mx-auto">
                {/* Smartphone / Tablet Bezel Frame */}
                <div className="relative rounded-[2.5rem] p-3 sm:p-4 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 border-4 border-slate-700/80 shadow-2xl ring-1 ring-white/10">
                  {/* Top speaker notch */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-full z-20 flex items-center justify-center">
                    <div className="w-8 h-1 bg-slate-700 rounded-full" />
                  </div>

                  {/* Video Screen Container */}
                  <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden bg-black shadow-inner">
                    <video
                      ref={videoRef}
                      playsInline
                      loop
                      muted={isMuted}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      poster="/apex-video-poster.jpg"
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={togglePlay}
                    >
                      <source src={videoUrl} type="video/mp4" />
                      <source src={remoteVideoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Gradient overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                    {/* Top Watermark Badge */}
                    <div className="absolute top-6 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                      <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                        <img 
                          src="/apex-logo.png" 
                          alt="Apex Dental Logo" 
                          className="w-4 h-4 rounded-full bg-white p-0.5"
                        />
                        <span className="text-[11px] font-bold text-white tracking-wide">
                          Apex Dental Clinic
                        </span>
                      </div>
                      <span className="text-[10px] bg-red-600/90 text-white font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                        Clinic Reel
                      </span>
                    </div>

                    {/* Center Big Play Button Overlay (when paused) */}
                    {!isPlaying && (
                      <button
                        onClick={togglePlay}
                        className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-teal-500/90 hover:bg-teal-400 text-slate-950 flex items-center justify-center shadow-xl transition-all transform hover:scale-110 active:scale-95 cursor-pointer z-10"
                        title="Click to play video"
                      >
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-slate-950 ml-1" />
                      </button>
                    )}

                    {/* Bottom Controls & Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 space-y-2.5">
                      <div className="flex items-center justify-between text-white text-xs">
                        <div>
                          <p className="font-bold text-sm text-white drop-shadow-md">
                            Dr. Darshak Vaghani
                          </p>
                          <p className="text-[11px] text-teal-300 drop-shadow-sm">
                            B.D.S., M.D.S. (Orthodontist) · Surat
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={toggleMute}
                            className="p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-colors cursor-pointer"
                            title={isMuted ? 'Unmute video' : 'Mute video'}
                          >
                            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                          </button>
                          <button
                            onClick={handleFullscreen}
                            className="p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-colors cursor-pointer"
                            title="Fullscreen"
                          >
                            <Maximize2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Video Quick Play / Pause Button inside player */}
                      <button
                        onClick={togglePlay}
                        className="w-full py-2.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                        <span>{isPlaying ? 'Pause Video' : 'Play Official Clinic Reel'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Video Highlights & Clinical Information */}
          <div className="lg:col-span-6 space-y-6">
            <RevealOnScroll variant="fade-left" duration={700}>
              {/* Feature Tabs */}
              <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-800/80 rounded-2xl border border-slate-700/80 max-w-md">
                <button
                  onClick={() => setActiveTab('braces')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'braces'
                      ? 'bg-teal-600 text-white shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  Orthodontic Wire & Braces
                </button>
                <button
                  onClick={() => setActiveTab('pediatric')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'pediatric'
                      ? 'bg-teal-600 text-white shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  Pediatric Care
                </button>
                <button
                  onClick={() => setActiveTab('clinic')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'clinic'
                      ? 'bg-teal-600 text-white shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  Clinic & X-Ray Tour
                </button>
              </div>

              {/* Tab 1 Content: Orthodontics & Braces */}
              {activeTab === 'braces' && (
                <div className="space-y-4 bg-slate-800/50 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-slate-700/70">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span>Specialist Clinical Reel</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Orthodontic Wire Bending & Bracket Placement
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-300 font-semibold">
                    વાંકાચૂકા દાંત ની સારવાર માટે સ્પેશિયાલિસ્ટ સંપર્ક
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Watch Dr. Darshak Vaghani (M.D.S. Orthodontics) in action, customizing delicate archwires with precision pliers and applying brackets for seamless, painless teeth alignment.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-700/50">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-semibold">Custom Arch Mechanics</strong>
                        <span className="text-slate-400">Tailored tooth movement plans for rapid straightening.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-700/50">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-semibold">Digital OPG Diagnosis</strong>
                        <span className="text-slate-400">Full jaw X-ray analysis to inspect root parallelism.</span>
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact Banner from Video */}
                  <div className="bg-teal-900/40 border border-teal-500/30 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="text-xs text-teal-200 font-medium">Direct Doctor Hotline:</div>
                      <div className="text-sm sm:text-base font-black text-white flex items-center gap-2">
                        <Phone className="w-4 h-4 text-teal-400" />
                        <span>+91 79846 77833 / 98241 57534</span>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/${CLINIC_CONTACT.phoneRaw}?text=${encodeURIComponent(
                        'Hello Dr. Darshak Vaghani, I watched your orthodontic braces treatment video and would like to consult for teeth alignment.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
                      <span>Consult on WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Tab 2 Content: Pediatric Care */}
              {activeTab === 'pediatric' && (
                <div className="space-y-4 bg-slate-800/50 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-slate-700/70">
                  <div className="flex items-center gap-2 text-pink-400 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-pink-400" />
                    <span>Gentle Young Smile Care</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Gentle, Fear-Free Pediatric Dentistry
                  </h3>
                  <p className="text-xs sm:text-sm text-pink-300 font-semibold">
                    બાળકો માટે સ્નેહપૂર્ણ અને દર્દમુક્ત સારવાર
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Children and teenagers receive gentle, encouraging care in our state-of-the-art operatory chair. Dr. Darshak ensures every visit feels comfortable, friendly, and completely tear-free.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-700/50">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-semibold">Growth Interception</strong>
                        <span className="text-slate-400">Early jaw guidance prevents complex future surgeries.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-700/50">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-semibold">Positive Experience</strong>
                        <span className="text-slate-400">Warm chairside manners with zero treatment anxiety.</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onBookClick?.('Pediatric dental services')}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Book Child Dental Consultation</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 3 Content: Clinic & X-Ray Tour */}
              {activeTab === 'clinic' && (
                <div className="space-y-4 bg-slate-800/50 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-slate-700/70">
                  <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
                    <Award className="w-4 h-4 text-teal-400" />
                    <span>Clinic Tour & Safety Standards</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Advanced Dental Operatory & Sterilization
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-300 font-semibold">
                    બીજો માળ, કાહન વેડિંગ પેલેસ ઉપર, મહાદેવ ચોક પાસે, મોટા વરાછા, સુરત
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Equipped with motorized dental operatory chairs, class-B autoclave sterilization, digital sensor X-rays, and rotary endodontics for hospital-grade safety.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2 text-center text-xs">
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <div className="text-xl font-black text-teal-400">100%</div>
                      <div className="text-[11px] text-slate-400">Autoclaved Instruments</div>
                    </div>
                    <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <div className="text-xl font-black text-teal-400">5.0 ★</div>
                      <div className="text-[11px] text-slate-400">Google Verified Trust</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* Instagram Reels Link */}
                <a
                  href={CLINIC_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 hover:from-pink-500 hover:to-amber-500 text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  title="Follow Apex Dental Clinic on Instagram for all video reels"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Watch All Reels on Instagram {CLINIC_CONTACT.instagramHandle}</span>
                </a>

                {/* WhatsApp Booking Direct CTA */}
                <a
                  href={`https://wa.me/${CLINIC_CONTACT.phoneRaw}?text=${encodeURIComponent(
                    'Hello Dr. Darshak Vaghani, I would like to book a dental appointment at Apex Dental Clinic, Mota Varachha, Surat.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Book Appointment on WhatsApp</span>
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
