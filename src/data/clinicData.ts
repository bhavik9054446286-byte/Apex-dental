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
    id: 'invisalign-aligners',
    name: 'Invisalign and Clear aligners',
    category: 'orthodontics',
    popular: true,
    shortDesc: 'Discreet, removable custom transparent aligners for perfectly straight teeth without metallic brackets.',
    fullDesc: 'Custom-designed digital transparent aligners created using high-resolution 3D intraoral scans. Under Dr. Darshak Vaghani’s orthodontic expertise, clear aligners gently shift your teeth with near-invisible precision, zero dietary restrictions, and comfortable daily wear.',
    duration: '6 to 18 months',
    idealFor: 'Teens and adults looking for virtually invisible teeth straightening.',
    benefits: ['100% Removable for eating & brushing', 'Virtually invisible look', 'Fewer clinic check-in visits', 'Custom 3D computerized staging']
  },
  {
    id: 'orthodontic-growth',
    name: 'Orthodontic treatment and growth modification',
    category: 'orthodontics',
    popular: true,
    shortDesc: 'Early jaw guidance for children & teens, plus comprehensive braces for all age groups.',
    fullDesc: 'As an M.D.S. Orthodontist, Dr. Darshak Vaghani specializes in growth modification appliances for developing children to guide jaw relationships, prevent severe crowding, alongside traditional metal, ceramic, and self-ligating braces.',
    duration: '12 to 24 months',
    idealFor: 'Growing children (ages 7-14) with jaw discrepancies and individuals with bite irregularities.',
    benefits: ['Early correction of jaw imbalances', 'Prevents future surgical needs', 'Enhances facial aesthetics & profile', 'Customized appliance therapy']
  },
  {
    id: 'dental-implants',
    name: 'Dental implants',
    category: 'implants',
    popular: true,
    shortDesc: 'Permanent, titanium tooth roots topped with lifelike ceramic crowns for missing teeth.',
    fullDesc: 'The gold standard in tooth replacement. Dental implants integrate securely with your jawbone, restoring 100% chewing efficiency, stopping bone loss, and mimicking the exact aesthetics of natural teeth.',
    duration: '3 to 6 months total healing & crown placement',
    idealFor: 'Patients missing one or multiple teeth seeking a lifetime permanent solution.',
    benefits: ['Lifetime durability with proper care', 'Preserves jawbone density', 'No damage to adjacent teeth', 'Natural look and chewing feel']
  },
  {
    id: 'root-canals',
    name: 'Root canals',
    category: 'surgery',
    popular: true,
    shortDesc: 'Painless single-sitting rotary endodontics to save badly infected or aching teeth.',
    fullDesc: 'Modern rotary endodontics eliminates toothache gently and efficiently. We carefully cleanse infected dental pulp, disinfect the root canals with apex locators, and hermetically seal the tooth to preserve your natural smile.',
    duration: '45 to 60 minutes per sitting',
    idealFor: 'Severe tooth pain, sensitivity to hot/cold, deep decay, or abscesses.',
    benefits: ['Saves your natural tooth', 'Immediate relief from severe pain', 'Single-sitting option available', 'Digital apex precision']
  },
  {
    id: 'denture-implant-overdenture',
    name: 'Denture and implant overdenture',
    category: 'implants',
    popular: true,
    shortDesc: 'Implant-supported stable overdentures that eliminate loose, slipping false teeth.',
    fullDesc: 'Say goodbye to loose dentures and messy adhesives. Implant overdentures securely snap onto 2 or 4 titanium implants in your jaw, delivering rock-solid stability, improved chewing power, and youthful facial support.',
    duration: '2 to 4 months',
    idealFor: 'Individuals with loose conventional dentures or complete tooth loss.',
    benefits: ['Zero slipping or clicking', 'Enhanced taste & roof-of-mouth freedom', 'Drastically improved chewing power', 'Boosted speech clarity & confidence']
  },
  {
    id: 'teeth-whitening',
    name: 'Teeth whitening',
    category: 'cosmetic',
    popular: true,
    shortDesc: 'Professional in-clinic chairside bleaching and take-home systems for a radiant smile.',
    fullDesc: 'Safely brighten your teeth by up to 5-8 shades in just a single 45-minute clinical session. Our medical-grade whitening lifts stubborn coffee, tea, and aging stains with specialized enamel-safe formulations.',
    duration: '45 to 60 minutes',
    idealFor: 'Stained, yellowed, or discolored teeth before weddings, events, or smile renewal.',
    benefits: ['Instantly noticeable brightness', 'Enamel-safe clinically monitored formula', 'Low sensitivity guarantee', 'Long-lasting radiant results']
  },
  {
    id: 'crown-bridges',
    name: 'Crown and bridges',
    category: 'implants',
    shortDesc: 'High-strength Zirconia, E-Max, and ceramic crowns to restore broken or missing teeth.',
    fullDesc: 'Custom-crafted dental crowns reinforce cracked, weakened, or root-canal-treated teeth, while dental bridges span gaps created by missing teeth for a smooth, cohesive bite.',
    duration: '2 appointments (3-5 days turnaround)',
    idealFor: 'Cracked teeth, post-root canal protection, or bridging 1-2 missing teeth.',
    benefits: ['Computer-milled CAD/CAM precision', 'High fracture resistance', 'Exact shade matching', 'Restores full biting force']
  },
  {
    id: 'veneers-crowns',
    name: 'Veneers & crowns',
    category: 'cosmetic',
    shortDesc: 'Ultra-thin porcelain laminates for Hollywood smile makeovers and chipped teeth.',
    fullDesc: 'Porcelain and composite veneers conceal chipped edges, gaps between teeth, permanent discolorations, and slight misalignments with minimal enamel preparation.',
    duration: '2 to 3 appointments',
    idealFor: 'Patients seeking a harmonious, symmetry-aligned dream smile makeover.',
    benefits: ['Natural translucency and luster', 'Stain-resistant porcelain', 'Minimal tooth reduction', 'Customized tooth contours']
  },
  {
    id: 'gingivitis-periodontitis',
    name: 'Treatment of gingivitis and periodontitis',
    category: 'periodontal',
    popular: true,
    shortDesc: 'Advanced deep cleaning, ultrasonic scaling, and gum pocket therapy for bleeding gums.',
    fullDesc: 'Healthy gums are the foundation of your teeth. We provide ultrasonic tartar removal, subgingival scaling, root planing, and antimicrobial irrigation to stop gum bleeding, bad breath, and bone loss.',
    duration: '30 to 60 minutes',
    idealFor: 'Bleeding gums when brushing, red swollen gums, halitosis, and mobile teeth.',
    benefits: ['Stops bleeding and swelling', 'Eliminates stubborn bad breath', 'Protects jawbone from deterioration', 'Freshens mouth ecosystem']
  },
  {
    id: 'pediatric-dental-services',
    name: 'Pediatric dental services',
    category: 'pediatric',
    shortDesc: 'Gentle, child-friendly oral health care, cavity fillings, and preventive sealants.',
    fullDesc: 'We make visits enjoyable and fearless for young champions. Services include gentle cavity care, pit & fissure sealants, fluoride treatments, and habit-breaking appliances (for thumb sucking or tongue thrusting).',
    duration: '30 to 45 minutes',
    idealFor: 'Toddlers, kids, and adolescents needing fear-free dental care.',
    benefits: ['Friendly and cheerful environment', 'Prevents early childhood cavities', 'Habit-correction guidance', 'Painless gentle techniques']
  },
  {
    id: 'paediatrics',
    name: 'Paediatrics',
    category: 'pediatric',
    shortDesc: 'Comprehensive preventive care, fluoride varnish, and early orthodontic guidance for kids.',
    fullDesc: 'Focuses on infant and child oral growth, monitoring tooth eruption stages, and preventing dental crowding through early intervention and education.',
    duration: '30 minutes',
    idealFor: 'Children of all ages for routine monitoring and cavity-proofing.',
    benefits: ['Gentle preventive checkups', 'Fluoride enamel strengthening', 'Early orthodontic interception', 'Parental oral care coaching']
  },
  {
    id: 'check-ups',
    name: 'Check-ups',
    category: 'general',
    shortDesc: 'Comprehensive oral examination, intraoral camera screening, and dental evaluation.',
    fullDesc: 'Detailed inspection of teeth, gums, tongue, bite alignment, and oral tissues using modern intraoral visualization to catch tiny concerns before they turn into costly problems.',
    duration: '20 to 30 minutes',
    idealFor: 'Everyone every 6 months for proactive preventive health.',
    benefits: ['Early problem detection', 'Intraoral camera view for patients', 'Personalized treatment roadmap', 'Oral cancer screening']
  },
  {
    id: 'teeth-cleaning',
    name: 'Teeth cleaning',
    category: 'general',
    shortDesc: 'Professional ultrasonic scaling and polishing to remove plaque, calculus, and stains.',
    fullDesc: 'Gentle ultrasonic vibrations dislodge hard tartar and bacterial biofilm from hard-to-reach crevices, followed by smooth prophylactic polishing for glassy-smooth, fresh teeth.',
    duration: '30 to 45 minutes',
    idealFor: 'Routine oral hygiene maintenance every 6 months.',
    benefits: ['Removes tough tartar & tea/tobacco stains', 'Fresh clean breath', 'Smoothens tooth surfaces', 'Prevents cavities and gum disease']
  },
  {
    id: 'fillings-sealants',
    name: 'Fillings and sealants',
    category: 'general',
    shortDesc: 'Tooth-colored composite resin fillings and protective groove sealants for cavities.',
    fullDesc: 'Invisible, biomimetic composite restorations that blend seamlessly with your natural tooth shade, alongside resin sealants that lock deep grooves in molars to protect from decay.',
    duration: '30 minutes',
    idealFor: 'Minor to moderate cavities, worn teeth, and children’s chewing surfaces.',
    benefits: ['Zero mercury or dark metal', 'Exact tooth shade match', 'Strong adhesive bonding', 'Preserves natural tooth structure']
  },
  {
    id: 'digital-xray',
    name: 'X-ray',
    category: 'general',
    shortDesc: 'Low-radiation digital radiography for instant, crystal-clear diagnostic imaging.',
    fullDesc: 'Instant digital sensor X-rays with up to 90% less radiation than traditional film. Reveals hidden interdental decay, root health, bone levels, and impacted teeth within seconds on our chairside monitors.',
    duration: '5 minutes',
    idealFor: 'Diagnostic precision before fillings, root canals, braces, or extractions.',
    benefits: ['90% lower radiation exposure', 'Immediate high-res screen display', 'Pinpoint root & bone accuracy', 'Eco-friendly chemical-free']
  },
  {
    id: 'teeth-reshaping',
    name: 'Teeth reshaping',
    category: 'orthodontics',
    shortDesc: 'Conservative enameloplasty to soften sharp edges, smooth uneven lengths, and improve bite.',
    fullDesc: 'A gentle, painless cosmetic procedure where tiny amounts of tooth enamel are sculpted to improve the contour, balance proportions, and eliminate minor overlaps or jagged edges.',
    duration: '20 to 30 minutes',
    idealFor: 'Minor chips, irregular tooth heights, or pointed canines.',
    benefits: ['No anesthesia required', 'Immediate one-visit results', 'Smooth, balanced smile line', 'Painless and non-invasive']
  },
  {
    id: 'bonding',
    name: 'Bonding',
    category: 'cosmetic',
    shortDesc: 'Direct composite artistry to fix small chips, close minor gaps, and restore tooth symmetry.',
    fullDesc: 'Direct chairside composite bonding applies tooth-matched resin to fix chipped corners, close diastemas (gaps), or conceal localized stains in a single convenient visit.',
    duration: '30 to 45 minutes per tooth',
    idealFor: 'Chipped front teeth, minor spacing, and quick smile touch-ups.',
    benefits: ['Affordable cosmetic enhancement', 'Single-visit transformation', 'Completely painless', 'Easily repairable']
  },
  {
    id: 'cosmetic-procedures',
    name: 'Cosmetic procedures',
    category: 'cosmetic',
    shortDesc: 'Comprehensive smile design, gingival recontouring, and aesthetic facial harmony.',
    fullDesc: 'Holistic smile rejuvenation combining digital smile planning, gum depigmentation/sculpting, and aesthetic restorations tailored to your facial features and lip dynamics.',
    duration: 'Tailored per case',
    idealFor: 'Anyone desiring a confident, photogenic, harmonious smile.',
    benefits: ['Comprehensive digital planning', 'Tailored to your facial contours', 'Natural harmonious outcome', 'Boosts self-esteem']
  },
  {
    id: 'extractions',
    name: 'Extractions',
    category: 'surgery',
    shortDesc: 'Gentle, minimally traumatic tooth removals including wisdom teeth under local anesthesia.',
    fullDesc: 'When a tooth cannot be saved or causes severe impaction, our gentle extraction protocol minimizes tissue trauma, ensuring rapid healing, minimal swelling, and smooth recovery.',
    duration: '20 to 40 minutes',
    idealFor: 'Severely broken teeth, advanced periodontitis, or impacted wisdom teeth.',
    benefits: ['Completely painless local anesthesia', 'Minimally invasive preservation of bone', 'Detailed post-op care guidance', 'Quick recovery time']
  },
  {
    id: 'oral-surgery',
    name: 'Oral surgery',
    category: 'surgery',
    shortDesc: 'Surgical extraction of impacted teeth, frenectomies, and alveolar bone contouring.',
    fullDesc: 'Comprehensive minor oral surgical procedures performed under strict aseptic hospital-grade sterilization protocols to address impacted molars, cysts, or prepare jaws for prosthetics.',
    duration: '30 to 60 minutes',
    idealFor: 'Impacted third molars, frenum restrictions, or pre-prosthetic needs.',
    benefits: ['Strict sterile environment', 'Specialist surgical precision', 'Low post-procedure discomfort', 'Rapid healing protocols']
  },
  {
    id: 'emergency-care',
    name: 'Emergency care',
    category: 'surgery',
    popular: true,
    shortDesc: 'Priority relief for severe toothaches, chipped teeth, knocked-out teeth, and facial trauma.',
    fullDesc: 'Sudden toothaches, knocked-out teeth, broken braces, or sports injuries receive immediate priority attention at Apex Dental Clinic to quickly alleviate distress and protect your smile.',
    duration: 'Immediate triage',
    idealFor: 'Acute throbbing pain, facial swelling, broken teeth, or dental trauma.',
    benefits: ['Same-day emergency slots', 'Rapid pain relief protocols', 'Trauma tooth preservation', 'Direct doctor phone support']
  },
  {
    id: 'dentures-bridges',
    name: 'Dentures & bridges',
    category: 'implants',
    shortDesc: 'Flexible dentures, cast partials, and precision-fitted fixed ceramic bridges.',
    fullDesc: 'From lightweight flexible Valplast dentures to full acrylic sets and fixed dental bridges, we restore your chewing ability, facial fullness, and confidence comfortably.',
    duration: '3 to 5 appointments',
    idealFor: 'Multiple missing teeth requiring practical, time-tested restorative solutions.',
    benefits: ['Lightweight and comfortable fit', 'Restores natural facial contours', 'Custom shade & tooth arrangement', 'Affordable tooth replacement']
  },
  {
    id: 'mouth-guards',
    name: 'Mouth guards',
    category: 'general',
    shortDesc: 'Custom-fitted night guards for bruxism (teeth grinding) and athletic sports guards.',
    fullDesc: 'Custom-molded protective appliances that shield teeth from nocturnal grinding, morning jaw soreness, TMJ strain, and high-impact sports collisions.',
    duration: '2 quick visits (impressions & delivery)',
    idealFor: 'Night teeth grinders, clenchers, TMJ pain sufferers, and active athletes.',
    benefits: ['Prevents tooth wear and fractures', 'Relieves morning jaw and temple aches', 'Exact custom-fit comfort', 'Protects orthodontic braces']
  },
  {
    id: 'online-dentist-booking',
    name: 'Online dentist booking',
    category: 'general',
    shortDesc: 'Convenient 24/7 direct WhatsApp and digital appointment scheduling.',
    fullDesc: 'Skip the wait and telephone tag. Schedule your consultation with Dr. Darshak Vaghani directly with instant WhatsApp confirmation, tailored time slots, and smart calendar reminders.',
    duration: 'Instant (1 minute)',
    idealFor: 'Busy professionals and families who prefer effortless digital scheduling.',
    benefits: ['Direct WhatsApp confirmation', 'Zero waiting room hassle', 'Choose your preferred day & slot', '24/7 round-the-clock availability']
  },
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
