import { DentalService, DayTiming, ReviewItem } from '../types/dental';

export const CLINIC_CONTACT = {
  name: 'Apex Dental Clinic',
  tagline: 'Advanced Orthodontic, Implant & Family Dentistry',
  doctorName: 'Dr. Darshak Vaghani',
  degrees: 'B.D.S., M.D.S. (Orthodontics & Dentofacial Orthopedics)',
  specialty: 'Specialist Orthodontist & Dental Surgeon',
  phone: '+91 79846 77833',
  phoneRaw: '917984677833',
  email: 'vaghanidarshak@gmail.com',
  instagram: 'apexdentalclinic16',
  instagramHandle: '@apexdentalclinic16',
  instagramUrl: 'https://instagram.com/apexdentalclinic16',
  address: '2nd Floor, near Mahadev Chowk, Opp. Dharmnandan Row House Society, Mota Varachha, Surat, Gujarat - 395006',
  googleMapsUrl: 'https://maps.google.com/?q=Apex+Dental+Clinic+Mahadev+Chowk+Mota+Varachha+Surat',
  rating: 5.0,
  reviewCount: '150+ Google Reviews',
};

export const CLINIC_TIMINGS: DayTiming[] = [
  { day: 'Monday', dayIndex: 1, openTime: '09:00', closeTime: '20:30', formatted: '9:00 am – 8:30 pm' },
  { day: 'Tuesday', dayIndex: 2, openTime: '09:00', closeTime: '20:30', formatted: '9:00 am – 8:30 pm' },
  { day: 'Wednesday', dayIndex: 3, openTime: '09:00', closeTime: '20:30', formatted: '9:00 am – 8:30 pm' },
  { day: 'Thursday', dayIndex: 4, openTime: '09:00', closeTime: '20:30', formatted: '9:00 am – 8:30 pm' },
  { day: 'Friday', dayIndex: 5, openTime: '09:00', closeTime: '20:30', formatted: '9:00 am – 8:30 pm' },
  { day: 'Saturday', dayIndex: 6, openTime: '09:00', closeTime: '20:30', formatted: '9:00 am – 8:30 pm' },
  { day: 'Sunday', dayIndex: 0, openTime: '09:00', closeTime: '13:00', formatted: '9:00 am – 1:00 pm' },
];

export const ALL_SERVICES: DentalService[] = [
  {
    id: 'root-canals',
    name: 'Root Canal Treatment',
    category: 'surgery',
    popular: true,
    imageUrl: '/service-root-canal-official.webp',
    shortDesc: 'When a tooth is deeply infected or causing persistent pain, a root canal treatment helps preserve it rather than remove it.',
    fullDesc: 'Modern single-sitting rotary endodontics to eliminate toothache gently and efficiently. We carefully cleanse infected dental pulp, disinfect root canals with digital apex locators, and hermetically seal the tooth to preserve your natural smile for a lifetime.',
    duration: '45 to 60 minutes',
    idealFor: 'Severe tooth pain, sensitivity to hot/cold, deep decay, or abscesses.',
    benefits: ['Preserves your natural tooth', 'Immediate relief from deep infection', 'Single-sitting painless option', 'Digital apex precision']
  },
  {
    id: 'dental-implants',
    name: 'Dental Implants',
    category: 'implants',
    popular: true,
    imageUrl: '/service-dental-implants-official.webp',
    shortDesc: 'Replace missing teeth with a permanent, natural-looking solution that lets you smile, eat, and speak with confidence.',
    fullDesc: 'The gold standard in tooth replacement. Medical-grade titanium implant roots integrate securely with your jawbone, restoring 100% chewing efficiency, halting bone loss, and providing a lifelike aesthetic foundation.',
    duration: '3 to 6 months healing & crown placement',
    idealFor: 'Patients missing one or multiple teeth seeking a lifetime permanent solution.',
    benefits: ['Lifetime durability with proper care', 'Preserves jawbone density & contours', 'No reduction of adjacent teeth', '100% natural chewing strength']
  },
  {
    id: 'implant-supported-dentures',
    name: 'Implant Supported Dentures',
    category: 'implants',
    popular: true,
    imageUrl: '/service-implant-dentures-official.webp',
    shortDesc: 'Enjoy a secure, comfortable smile with dentures designed for enhanced stability and everyday confidence.',
    fullDesc: 'Say goodbye to loose, slipping false teeth and messy adhesives. Implant-supported overdentures snap firmly onto titanium implants in your jaw, delivering unwavering stability, powerful biting capability, and renewed youthful confidence.',
    duration: '2 to 4 months',
    idealFor: 'Individuals with loose conventional dentures or complete tooth loss.',
    benefits: ['Zero slipping, clicking, or shifting', 'Enhanced taste & palate freedom', 'Greatly improved chewing power', 'Restores natural facial fullness']
  },
  {
    id: 'removable-dentures',
    name: 'Removable Dentures & Prosthetics',
    category: 'implants',
    popular: true,
    imageUrl: '/service-removable-dentures-official.webp',
    shortDesc: 'Custom-crafted complete and partial removable dentures engineered for optimal comfort, natural appearance, and clear speech.',
    fullDesc: 'Precision-fitted conventional and flexible dentures that restore your chewing function and natural facial contours comfortably, tailored to your exact bite and aesthetic smile profile.',
    duration: '3 to 4 appointments',
    idealFor: 'Patients with multiple missing teeth seeking a reliable, time-tested restorative solution.',
    benefits: ['Comfortable precision fit', 'Restores natural facial fullness', 'High-grade durable acrylic', 'Affordable tooth restoration']
  },
  {
    id: 'teeth-cleaning',
    name: 'Teeth Cleaning & Prevention',
    category: 'general',
    popular: true,
    imageUrl: '/service-teeth-cleaning.jpg',
    shortDesc: 'Professional ultrasonic cleaning and plaque removal to prevent gum infections, eliminate bad breath, and protect enamel.',
    fullDesc: 'Gentle ultrasonic scaling dislodges stubborn calculus and bacterial biofilm from hard-to-reach pockets, followed by smooth prophylactic polishing for a sparkling clean, fresh mouth.',
    duration: '30 to 45 minutes',
    idealFor: 'Routine preventive care every 6 months to maintain pristine oral health.',
    benefits: ['Removes tough tartar & tea stains', 'Eliminates persistent bad breath', 'Protects against gingivitis & bone loss', 'Smoothens tooth enamel']
  },
  {
    id: 'invisalign-aligners',
    name: 'Clear Aligners & Orthodontics',
    category: 'orthodontics',
    popular: true,
    imageUrl: '/service-clear-aligners.jpg',
    shortDesc: 'Discreet transparent aligners and braces designed by Dr. Darshak Vaghani (M.D.S.) for a straighter, confident smile.',
    fullDesc: 'Custom-engineered digital clear aligners and modern aesthetic braces crafted with 3D intraoral scans. Gently moves teeth with millimeter precision, offering zero dietary restrictions and invisible comfort.',
    duration: '6 to 18 months',
    idealFor: 'Teens and adults looking for discreet, effective teeth alignment.',
    benefits: ['100% Removable for eating & brushing', 'Virtually invisible aesthetics', 'M.D.S. Orthodontist supervision', 'Fewer clinic check-in visits']
  },
  {
    id: 'fillings-sealants',
    name: 'Tooth Colored Fillings',
    category: 'general',
    popular: true,
    imageUrl: '/service-fillings.jpg',
    shortDesc: 'Durable, shade-matched composite restorations to repair cavities, restore damaged enamel, and preserve natural appearance.',
    fullDesc: 'Biomimetic tooth-colored composite resins that bond directly to your tooth structure, invisibly fixing cavities and chips without dark amalgam or mercury.',
    duration: '30 minutes',
    idealFor: 'Cavities, chipped tooth edges, and worn enamel.',
    benefits: ['Zero metal or mercury', 'Exact shade matching', 'Strong adhesive micro-bonding', 'Preserves natural healthy tooth']
  },
  {
    id: 'crown-bridges',
    name: 'Crown and Bridges',
    category: 'implants',
    imageUrl: '/service-crown-bridges.jpg',
    shortDesc: 'High-strength Zirconia, E-Max, and ceramic crowns to restore broken, weakened, or missing teeth seamlessly.',
    fullDesc: 'Custom-crafted CAD/CAM crowns and bridges reinforce compromised teeth after root canal therapy or bridge the gap of missing teeth with unmatched fracture resistance and aesthetic beauty.',
    duration: '2 appointments (3-5 days turnaround)',
    idealFor: 'Fractured teeth, post-root canal protection, or bridging missing teeth.',
    benefits: ['CAD/CAM computerized precision', 'High fracture resistance', 'Translucent lifelike ceramic shades', 'Full chewing force restoration']
  },
  {
    id: 'teeth-whitening',
    name: 'Teeth Whitening',
    category: 'cosmetic',
    popular: true,
    imageUrl: '/service-teeth-whitening-official.jpg',
    shortDesc: 'Professional in-clinic chairside bleaching lifting stubborn coffee and tea stains by 5–8 shades in a single session.',
    fullDesc: 'Medical-grade bleaching under controlled clinical supervision. Quickly and safely brightens dull, yellowed teeth while protecting delicate enamel with anti-sensitivity formulation.',
    duration: '45 to 60 minutes',
    idealFor: 'Stained or discolored teeth before weddings, events, or smile rejuvenation.',
    benefits: ['5-8 shades whiter in 1 visit', 'Enamel-safe clinical formula', 'Low sensitivity guarantee', 'Instant radiant confidence']
  },
  {
    id: 'pediatric-dental-services',
    name: 'Pediatric Dental Services',
    category: 'pediatric',
    imageUrl: '/service-pediatric.jpg',
    shortDesc: 'Gentle, child-friendly oral health care, painless cavity treatments, and preventive sealants in a cheerful setting.',
    fullDesc: 'Our friendly team makes dental visits fear-free and enjoyable for children. Includes painless cavity fillings, pit & fissure sealants, fluoride treatments, and habit-breaking guidance.',
    duration: '30 to 45 minutes',
    idealFor: 'Toddlers, children, and adolescents needing gentle, compassionate dental care.',
    benefits: ['Child-friendly relaxed environment', 'Prevents childhood decay & cavities', 'Habit-correction guidance', 'Painless gentle techniques']
  },
  {
    id: 'veneers-crowns',
    name: 'Veneers & Cosmetic Crowns',
    category: 'cosmetic',
    imageUrl: '/service-veneers-official.jpg',
    shortDesc: 'Ultra-thin porcelain laminates to conceal chips, gaps, and discolorations for a Hollywood smile makeover.',
    fullDesc: 'Custom handcrafted porcelain veneers that mask imperfections, close uneven gaps, and achieve balanced smile symmetry with minimal tooth reduction.',
    duration: '2 to 3 appointments',
    idealFor: 'Patients seeking Hollywood smile symmetry, gap closure, and permanent brightness.',
    benefits: ['Natural translucency & shine', 'Stain-resistant porcelain', 'Minimal tooth preparation', 'Customized smile design']
  },
  {
    id: 'gingivitis-periodontitis',
    name: 'Treatment of Gingivitis & Periodontitis',
    category: 'periodontal',
    popular: true,
    imageUrl: '/service-teeth-cleaning.jpg',
    shortDesc: 'Advanced deep cleaning, ultrasonic scaling, and gum pocket therapy for bleeding and swollen gums.',
    fullDesc: 'Comprehensive periodontal therapy to halt gum recession, stop bleeding, eliminate deep-seated tartar, and preserve jawbone stability.',
    duration: '30 to 60 minutes',
    idealFor: 'Bleeding gums when brushing, red swollen gums, halitosis, and mobile teeth.',
    benefits: ['Stops bleeding and swelling', 'Eliminates chronic bad breath', 'Protects jawbone from bone loss', 'Restores firm, pink, healthy gums']
  },
  {
    id: 'extractions',
    name: 'Oral Surgery & Extractions',
    category: 'surgery',
    imageUrl: '/service-surgery.jpg',
    shortDesc: 'Gentle, minimally traumatic tooth removals including impacted wisdom teeth under local anesthesia.',
    fullDesc: 'When a tooth is non-restorable or wisdom teeth cause severe crowding and pain, our gentle extraction protocol minimizes tissue trauma for rapid recovery and minimal swelling.',
    duration: '20 to 40 minutes',
    idealFor: 'Severely broken teeth, advanced periodontitis, or impacted wisdom teeth.',
    benefits: ['Completely painless local anesthesia', 'Minimally traumatic technique', 'Detailed post-op comfort care', 'Swift recovery timeline']
  },
  {
    id: 'orthodontic-growth',
    name: 'Orthodontic Growth Modification',
    category: 'orthodontics',
    imageUrl: '/service-clear-aligners.jpg',
    shortDesc: 'Early jaw guidance for children & teens, plus comprehensive braces for all age groups.',
    fullDesc: 'As an M.D.S. Orthodontist, Dr. Darshak Vaghani specializes in growth modification appliances for developing children to guide jaw relationships, prevent severe crowding, alongside traditional metal, ceramic, and self-ligating braces.',
    duration: '12 to 24 months',
    idealFor: 'Growing children (ages 7-14) with jaw discrepancies and individuals with bite irregularities.',
    benefits: ['Early correction of jaw imbalances', 'Prevents future surgical needs', 'Enhances facial aesthetics & profile', 'Customized appliance therapy']
  },
  {
    id: 'digital-xray',
    name: 'Digital Radiography (X-Ray)',
    category: 'general',
    imageUrl: '/clinic-photo-4-clean.jpg',
    shortDesc: 'Low-radiation digital radiography for instant, crystal-clear diagnostic imaging.',
    fullDesc: 'Instant digital sensor X-rays with up to 90% less radiation than traditional film. Reveals hidden interdental decay, root health, bone levels, and impacted teeth within seconds on our chairside monitors.',
    duration: '5 minutes',
    idealFor: 'Diagnostic precision before fillings, root canals, braces, or extractions.',
    benefits: ['90% lower radiation exposure', 'Immediate high-res screen display', 'Pinpoint root & bone accuracy', 'Eco-friendly chemical-free']
  },
  {
    id: 'check-ups',
    name: 'Comprehensive Dental Check-ups',
    category: 'general',
    imageUrl: '/clinic-photo-3-clean.jpg',
    shortDesc: 'Comprehensive oral examination, intraoral camera screening, and dental evaluation.',
    fullDesc: 'Detailed inspection of teeth, gums, tongue, bite alignment, and oral tissues using modern intraoral visualization to catch tiny concerns before they turn into costly problems.',
    duration: '20 to 30 minutes',
    idealFor: 'Everyone every 6 months for proactive preventive health.',
    benefits: ['Early problem detection', 'Intraoral camera view for patients', 'Personalized treatment roadmap', 'Oral cancer screening']
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Pooja Patel',
    rating: 5,
    date: '1 week ago',
    treatment: 'Clear Aligners & Orthodontics',
    comment: 'Dr. Darshak Vaghani is truly an orthodontic genius! I was nervous about getting braces in my late 20s, but he suggested clear aligners. Within 8 months my smile changed completely. Clinic is clean and staff is very polite. Highly recommended in Mota Varachha!',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Jignesh Kanani',
    rating: 5,
    date: '3 weeks ago',
    treatment: 'Dental Implant & Crown',
    comment: 'Got my lower molar dental implant done here. The whole procedure was completely painless. Dr. Darshak explained every step so patiently. 5/5 stars for Apex Dental Clinic!',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Bhavna Dhameliya',
    rating: 5,
    date: '1 month ago',
    treatment: 'Single-Sitting Root Canal',
    comment: 'I had severe throbbing tooth pain on a Saturday evening. Apex Dental Clinic attended to me right away. Painless root canal and ceramic crown. Very hygienic setup near Mahadev Chowk.',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Mehul Vora',
    rating: 5,
    date: '2 months ago',
    treatment: 'Teeth Whitening & Scaling',
    comment: 'Got professional teeth cleaning and whitening before my sister’s wedding. The results were amazing! White sparkling smile in just an hour. Fair pricing and top-notch equipment.',
    verified: true
  },
  {
    id: 'rev-5',
    author: 'Kavita Gondaliya',
    rating: 5,
    date: '2 months ago',
    treatment: 'Pediatric Care & Child Braces',
    comment: 'My 10-year-old daughter was afraid of dentists, but Dr. Darshak was so gentle and friendly. Her growth modification appliance has worked wonders for her front teeth protrusion.',
    verified: true
  }
];

export const FREQUENT_QUESTIONS = [
  {
    q: 'How do I book an appointment with Dr. Darshak Vaghani?',
    a: 'You can easily book directly via our WhatsApp appointment box right here on the website! Simply pick your service, preferred date and time, and click "Send on WhatsApp". You can also call us directly at +91 79846 77833.'
  },
  {
    q: 'What makes an Orthodontist (M.D.S.) different from a general dentist?',
    a: 'An Orthodontist completes 3 additional years of specialized master’s training (M.D.S.) focusing exclusively on teeth alignment, jaw growth modification, facial aesthetics, and clear aligners like Invisalign. Dr. Darshak Vaghani holds an M.D.S. in Orthodontics.'
  },
  {
    q: 'Are dental treatments at Apex Dental Clinic painful?',
    a: 'Not at all. We utilize modern computerized local anesthesia techniques, rotary instruments, and gentle clinical protocols so that treatments like root canals, fillings, and extractions are virtually pain-free.'
  },
  {
    q: 'What are the clinic timings on weekends?',
    a: 'On Saturday, we are open full day from 9:00 am to 8:30 pm. On Sunday, we are open for morning consultations from 9:00 am to 1:00 pm.'
  },
  {
    q: 'How long do Clear Aligners take to straighten teeth?',
    a: 'Most clear aligner cases take between 6 to 14 months depending on whether minor spacing or complex bite correction is needed. Dr. Darshak will show you a digital 3D preview of your smile before starting.'
  },
  {
    q: 'Where is the clinic located in Surat?',
    a: 'Apex Dental Clinic is conveniently situated on the 2nd Floor, near Mahadev Chowk, Opposite Dharmnandan Row House Society, in Mota Varachha, Surat.'
  }
];

export const SAMPLE_AI_PROMPTS = [
  'Does a root canal treatment hurt?',
  'What is the difference between clear aligners and regular braces?',
  'How long does a dental implant last and what is the process?',
  'What should I do if my gums bleed when brushing?',
  'What are your Sunday timings and doctor availability?',
  'Which treatment is best for yellow or stained teeth?'
];
