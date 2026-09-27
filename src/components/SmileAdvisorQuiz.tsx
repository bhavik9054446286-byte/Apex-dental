import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  MessageSquare,
  HelpCircle
} from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface SmileAdvisorQuizProps {
  onBookService: (serviceName: string) => void;
  onAskAi: (query: string) => void;
}

export const SmileAdvisorQuiz: React.FC<SmileAdvisorQuizProps> = ({ 
  onBookService,
  onAskAi 
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [concern, setConcern] = useState('');
  const [duration, setDuration] = useState('');

  const concerns = [
    {
      id: 'crooked',
      title: 'Crooked or Crowded Teeth',
      desc: 'Looking for discreet braces or clear aligners to fix alignment.',
      recommended: 'Invisalign and Clear aligners',
      category: 'Orthodontics',
    },
    {
      id: 'pain',
      title: 'Severe Toothache or Sensitivity',
      desc: 'Sharp throbbing pain or sensitivity to hot/cold beverages.',
      recommended: 'Root canals',
      category: 'Endodontics',
    },
    {
      id: 'missing',
      title: 'Missing Tooth or Loose Denture',
      desc: 'Want a permanent tooth replacement or sturdy overdenture.',
      recommended: 'Dental implants',
      category: 'Implantology',
    },
    {
      id: 'yellow',
      title: 'Yellow, Stained, or Chipped Teeth',
      desc: 'Desire a brighter, confident white smile for an upcoming event.',
      recommended: 'Teeth whitening',
      category: 'Cosmetic Dentistry',
    },
    {
      id: 'gums',
      title: 'Bleeding Gums or Bad Breath',
      desc: 'Gums bleed when brushing, red swelling, or tartar buildup.',
      recommended: 'Treatment of gingivitis and periodontitis',
      category: 'Gum Care',
    },
    {
      id: 'child',
      title: 'Child’s Teeth or Jaw Development',
      desc: 'Cavity checkup, preventive fluoride, or early braces evaluation.',
      recommended: 'Pediatric dental services',
      category: 'Pediatric Dentistry',
    },
  ];

  const handleReset = () => {
    setCurrentStep(1);
    setConcern('');
    setDuration('');
  };

  const selectedConcernObj = concerns.find((c) => c.id === concern);

  return (
    <section id="quiz" className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll variant="fade-up" duration={700}>
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Interactive Dental Assessment
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Find the Right Dental Treatment for You
          </h2>
          <p className="text-sm text-slate-600">
            Not sure whether you need clear aligners, scaling, a root canal, or an implant? Answer 2 quick questions to get an instant clinical recommendation.
          </p>
        </div>
        </RevealOnScroll>

        <RevealOnScroll variant="fade-up" delay={150} duration={700}>
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg p-6 sm:p-8">
          {/* Step Indicators */}
          <div className="flex items-center justify-between max-w-xs mx-auto mb-8 text-xs font-semibold">
            <div className={`flex items-center gap-1.5 ${currentStep >= 1 ? 'text-amber-700 font-bold' : 'text-slate-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${currentStep >= 1 ? 'bg-[#0F1E36] text-white' : 'bg-slate-200 text-slate-500'}`}>
                1
              </span>
              <span>Primary Goal</span>
            </div>
            <div className="w-8 h-0.5 bg-slate-200" />
            <div className={`flex items-center gap-1.5 ${currentStep >= 2 ? 'text-amber-700 font-bold' : 'text-slate-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${currentStep >= 2 ? 'bg-[#0F1E36] text-white' : 'bg-slate-200 text-slate-500'}`}>
                2
              </span>
              <span>Timeline</span>
            </div>
            <div className="w-8 h-0.5 bg-slate-200" />
            <div className={`flex items-center gap-1.5 ${currentStep === 3 ? 'text-amber-700 font-bold' : 'text-slate-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${currentStep === 3 ? 'bg-[#0F1E36] text-white' : 'bg-slate-200 text-slate-500'}`}>
                3
              </span>
              <span>Advice</span>
            </div>
          </div>

          {/* STEP 1: Select Main Dental Goal / Symptom */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 text-center">
                What is your primary dental concern or smile goal?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                {concerns.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setConcern(item.id);
                      setCurrentStep(2);
                    }}
                    className="p-4 text-left rounded-xl border border-slate-200 hover:border-amber-500 hover:bg-amber-50/50 transition-all group cursor-pointer shadow-2xs space-y-1.5"
                  >
                    <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                      {item.category}
                    </div>
                    <div className="font-bold text-sm text-slate-900 group-hover:text-amber-900">
                      {item.title}
                    </div>
                    <p className="text-xs text-slate-500 leading-normal">
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Duration / Severity */}
          {currentStep === 2 && (
            <div className="space-y-6 max-w-lg mx-auto text-center">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                  Question 2 of 2
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  How long have you had this concern?
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Just started (Less than 1 week)',
                  'A few weeks (1 to 4 weeks)',
                  'Several months (Persistent)',
                  'Planning for an upcoming event / wedding',
                ].map((timeOption, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDuration(timeOption);
                      setCurrentStep(3);
                    }}
                    className="p-4 text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-amber-50 hover:text-amber-900 rounded-xl border border-slate-200 hover:border-amber-400 transition-all cursor-pointer"
                  >
                    {timeOption}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentStep(1)}
                className="text-xs text-slate-500 hover:text-slate-700 underline"
              >
                Back to previous question
              </button>
            </div>
          )}

          {/* STEP 3: Results & Recommendation */}
          {currentStep === 3 && selectedConcernObj && (
            <div className="space-y-6 max-w-xl mx-auto text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                  Recommended Treatment by Dr. Darshak Vaghani
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  {selectedConcernObj.recommended}
                </h3>
                <p className="text-xs text-slate-500">
                  Based on: {selectedConcernObj.title} ({duration})
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed text-left space-y-2">
                <p>
                  At Apex Dental Clinic, Dr. Darshak Vaghani evaluates your bite, jaw structure, and teeth with high-definition digital imaging to customize this exact procedure for long-term comfort and optimal aesthetics.
                </p>
                <div className="text-xs text-slate-500 font-medium">
                  • Available in Mota Varachha, Surat
                  <br />
                  • Same-day consultation slots available
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => onBookService(selectedConcernObj.recommended)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Book {selectedConcernObj.recommended} on WhatsApp</span>
                </button>

                <button
                  onClick={() => onAskAi(`Tell me more about ${selectedConcernObj.recommended} at Apex Dental Clinic`)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-amber-50 hover:bg-amber-100 text-amber-900 font-semibold text-sm rounded-xl border border-amber-200 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Ask AI Details</span>
                </button>
              </div>

              <div>
                <button
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-slate-600 inline-flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Restart assessment</span>
                </button>
              </div>
            </div>
          )}
        </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
