/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { TreatmentGallery } from './components/TreatmentGallery';
import { DoctorProfile } from './components/DoctorProfile';
import { SmileAdvisorQuiz } from './components/SmileAdvisorQuiz';
import { AiAssistant } from './components/AiAssistant';
import { TimingsAndLocation } from './components/TimingsAndLocation';
import { GoogleReviews } from './components/GoogleReviews';
import { FaqSection } from './components/FaqSection';
import { FloatingWhatsAppWidget } from './components/FloatingWhatsAppWidget';
import { Footer } from './components/Footer';
import { Sparkles, MessageSquare, Phone, MapPin, Calendar, Clock, Star } from 'lucide-react';
import { CLINIC_CONTACT } from './data/clinicData';

export default function App() {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  // Close AI modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isAiModalOpen) {
        setIsAiModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAiModalOpen]);

  // Direct WhatsApp booking redirection
  const handleBookService = (serviceName?: string) => {
    const text = serviceName
      ? `Hello Dr. Darshak Vaghani, I would like to book a dental appointment for ${serviceName} at Apex Dental Clinic, Mota Varachha, Surat.`
      : `Hello Dr. Darshak Vaghani, I would like to book a dental appointment at Apex Dental Clinic, Mota Varachha, Surat.`;
    const url = `https://wa.me/${CLINIC_CONTACT.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Trigger AI assistant
  const handleOpenAi = (initialPrompt?: string) => {
    setIsAiModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-teal-200 selection:text-teal-900">
      {/* Top Header */}
      <Header 
        onOpenAi={() => setIsAiModalOpen(true)}
        onBookClick={(service) => handleBookService(service)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenAi={() => setIsAiModalOpen(true)}
          onBookClick={(service) => handleBookService(service)}
        />

        {/* Doctor Spotlight */}
        <DoctorProfile 
          onBookClick={() => handleBookService()}
          onOpenAi={() => setIsAiModalOpen(true)}
        />

        {/* Treatment & Clinic Image Showcase Section (Clinic Tour & Real Cases) */}
        <TreatmentGallery 
          onBookService={(svc) => handleBookService(svc)}
          onAskAi={(q) => setIsAiModalOpen(true)}
        />

        {/* Services Section (All 24 Services with filters and instant booking) */}
        <ServicesSection 
          onBookService={(svc) => handleBookService(svc)}
          onAskAiAboutService={(svc) => {
            setIsAiModalOpen(true);
          }}
        />

        {/* Interactive Smile Advisor Quiz */}
        <SmileAdvisorQuiz 
          onBookService={(svc) => handleBookService(svc)}
          onAskAi={(q) => setIsAiModalOpen(true)}
        />

        {/* Clinic Timings & Location (Surat) */}
        <TimingsAndLocation 
          onBookClick={() => handleBookService()}
        />

        {/* Patient Reviews & Google 5.0 Rating */}
        <GoogleReviews 
          onBookClick={() => handleBookService()}
        />

        {/* FAQ Section */}
        <FaqSection 
          onOpenAi={() => setIsAiModalOpen(true)}
          onBookClick={() => handleBookService()}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenAi={() => setIsAiModalOpen(true)}
        onBookClick={() => handleBookService()}
      />

      {/* Floating WhatsApp & AI Quick Access Widget */}
      <FloatingWhatsAppWidget 
        onOpenBooking={() => handleBookService()}
        onOpenAi={() => setIsAiModalOpen(true)}
      />

      {/* Floating AI Modal / Box */}
      {isAiModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
          onClick={() => setIsAiModalOpen(false)}
        >
          <div 
            className="max-w-2xl w-full animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <AiAssistant 
              isModal={true}
              onCloseModal={() => setIsAiModalOpen(false)}
              onBookTreatment={(treatment) => {
                setIsAiModalOpen(false);
                handleBookService(treatment);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
