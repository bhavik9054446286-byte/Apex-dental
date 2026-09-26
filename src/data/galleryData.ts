export interface GalleryItem {
  id: string;
  title: string;
  category: 'clinic' | 'treatment' | 'orthodontics' | 'implants' | 'pediatric';
  categoryLabel: string;
  imageUrl: string;
  fallbackGradient: string;
  description: string;
  details: string;
  treatmentTag?: string;
  features: string[];
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  treatment: string;
  duration: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  fullImg: string;
  beforeLabel: string;
  afterLabel: string;
  highlights: string[];
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'clinic-operatory-main',
    title: 'Apex Dental Clinic – Main Operatory & Branding',
    category: 'clinic',
    categoryLabel: 'Clinic Interior',
    imageUrl: '/clinic-photo-3-clean.jpg',
    fallbackGradient: 'from-teal-800 to-cyan-900',
    description: 'Modern computerized dental chair, official Apex Dental Clinic wall branding, surgical LED lighting, and sterile instrument console.',
    details: 'Located in Mota Varachha, Surat, Apex Dental Clinic features state-of-the-art dental operatories equipped with computerized ergonomic chairs, shadowless surgical lighting, and integrated suction systems for stress-free treatment.',
    treatmentTag: 'Clinic Infrastructure',
    features: ['Computerized ergonomic chair', 'Shadowless LED surgical light', 'Dust-free aseptic flooring', 'Integrated air-cooling'],
  },
  {
    id: 'doctor-pediatric-patient',
    title: 'Dr. Darshak Vaghani with Happy Young Patient',
    category: 'pediatric',
    categoryLabel: 'Pediatric Care',
    imageUrl: '/clinic-photo-2.png',
    fallbackGradient: 'from-emerald-800 to-teal-900',
    description: 'Dr. Darshak Vaghani in clinical scrubs and mask sharing double thumbs-up with a smiling pediatric champion in the dental chair.',
    details: 'Fear-free gentle dentistry tailored for children and adolescents. Dr. Darshak specializes in early growth modification, thumb-sucking habit correction, and pediatric behavioral management in a warm, welcoming environment.',
    treatmentTag: 'Gentle Kids Dentistry',
    features: ['Pain-free anesthesia technique', 'Child-friendly explanations', 'Thumb-sucking habit correction', 'Preventive fluoridation'],
  },
  {
    id: 'clinic-operatory-dual',
    title: 'Dual Modern Dental Operatory & Care Setup',
    category: 'clinic',
    categoryLabel: 'Clinic Interior',
    imageUrl: '/clinic-photo-1-clean.jpg',
    fallbackGradient: 'from-teal-900 to-slate-900',
    description: 'Modern computerized dual dental operatory featuring ergonomic patient chairs, welcoming celebration balloons, and sterile treatment setup.',
    details: 'Equipped with dual computerized patient chairs allowing smooth simultaneous procedures, sterile airflow, and a cheerful welcoming environment for patients of all ages in Mota Varachha, Surat.',
    treatmentTag: 'Dual Operatory Setup',
    features: ['Dual computerized operatory chairs', 'Welcoming child-friendly ambiance', 'Hospital-grade autoclave sterilization', 'Shadowless surgical LED lighting'],
  },
  {
    id: 'clinic-chair-monitor',
    title: 'Computerized Operatory Chair & Live HD Monitor',
    category: 'clinic',
    categoryLabel: 'Clinic Interior',
    imageUrl: '/clinic-photo-4-clean.jpg',
    fallbackGradient: 'from-cyan-800 to-blue-900',
    description: 'High-definition intraoral patient display monitor, ergonomic hydraulic chair, and wooden divider partition with certifications.',
    details: 'Patients can view digital intraoral scans and high-magnification x-rays in real time right from the comfortable treatment chair, allowing transparent consultation before any procedure starts.',
    treatmentTag: 'Advanced Equipment',
    features: ['Intraoral live camera display', 'Ergonomic hydraulic chair', 'Autoclave wrapped tools', 'Whisper-quiet suction'],
  },
  {
    id: 'clinic-bay-corridor',
    title: 'Modern Treatment Bay & Clinic Corridor View',
    category: 'clinic',
    categoryLabel: 'Clinic Interior',
    imageUrl: '/clinic-photo-5-clean.jpg',
    fallbackGradient: 'from-slate-800 to-teal-950',
    description: 'Spacious treatment operatory with ergonomic patient chair, multi-axis overhead surgical illumination, and clinic corridor.',
    details: 'Designed with clean hospital-grade asepsis, dust-free medical flooring, and soothing warm wooden paneling to provide a tranquil, anxiety-free clinical atmosphere.',
    treatmentTag: 'Sterile Operatory',
    features: ['Spacious treatment bay', 'Shadowless surgical beam', 'Clean sterilization corridor', 'Zero contamination airflow'],
  },
  {
    id: 'clinic-degrees-consultation',
    title: 'Academic Degrees, Credentials Wall & Consultation Suite',
    category: 'orthodontics',
    categoryLabel: 'Doctor Credentials',
    imageUrl: '/clinic-photo-6-clean.jpg',
    fallbackGradient: 'from-amber-900 to-slate-900',
    description: 'Aesthetic wooden slatted partition wall featuring Dr. Darshak’s university degrees, orthodontic skull models, and patient counseling desk.',
    details: 'A showcase of clinical excellence featuring Dr. Darshak Vaghani’s M.D.S. Orthodontics degree, professional memberships, dental anatomy models, and patient consultation area.',
    treatmentTag: 'Doctor Credentials',
    features: ['Recognized Dental Degrees', 'Orthodontic 3D Models', 'Dedicated Counseling Bay', 'Patient Transparency'],
  },
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'case-1-openbite',
    title: 'Severe Open Bite & Occlusion Alignment',
    treatment: 'Orthodontic Braces & Aligners',
    duration: '10 Months Active Treatment',
    description: 'Patient presented with severe anterior open bite, irregular tooth spacing, and incomplete incisal contact. Dr. Darshak Vaghani planned customized orthodontic realignment to restore normal functional bite and an aligned smile.',
    beforeImg: '/case-1-before.jpg',
    afterImg: '/case-1-after.jpg',
    fullImg: '/case-1.jpg',
    beforeLabel: 'Before: Open Bite & Irregular Spacing',
    afterLabel: 'After: Corrected Occlusion & Alignment',
    highlights: ['Functional occlusion restored', 'Closed anterior open bite', 'Proper arch contour', 'Confidence restored'],
  },
  {
    id: 'case-2-diastema',
    title: 'Midline Diastema (Tooth Gap) & Crowding Closure',
    treatment: 'Orthodontic Gap Closure & Smile Design',
    duration: '6 Months Realignment',
    description: 'Patient presented with a prominent central midline gap (diastema) and irregular lateral tooth alignment. Dr. Darshak achieved complete seamless space closure with symmetrical tooth contact.',
    beforeImg: '/case-2-before.jpg',
    afterImg: '/case-2-after.jpg',
    fullImg: '/case-2.jpg',
    beforeLabel: 'Before: Wide Midline Gap & Spacing',
    afterLabel: 'After: Seamless Gap Closure',
    highlights: ['100% Midline gap closed', 'Symmetrical tooth contact', 'Zero surgical intervention', 'Lifelong retention plan'],
  },
  {
    id: 'case-3-whitening',
    title: 'Deep Stain Removal & Clinical Laser Whitening',
    treatment: 'Professional Dental Whitening & Scaling',
    duration: 'Single 45-Minute Session',
    description: 'Patient presented with heavy extrinsic yellow stains, tartar accumulation, and enamel discoloration. Underwent complete ultrasonic scaling followed by clinic-grade bleaching with gum isolation.',
    beforeImg: '/case-3-before.jpg',
    afterImg: '/case-3-after.jpg',
    fullImg: '/case-3.jpg',
    beforeLabel: 'Before: Yellowed Enamel & Stains',
    afterLabel: 'After: 8 Shades Brighter White',
    highlights: ['Instant single-visit transformation', 'Zero enamel damage or erosion', 'Gum barrier protection applied', 'Noticeably radiant bright smile'],
  },
  {
    id: 'case-4-crowding',
    title: 'Anterior Crowding & Smile Esthetics Realignment',
    treatment: 'Orthodontic Aligners & Arch Expansion',
    duration: '8 Months Treatment',
    description: 'Patient presented with severe maxillary anterior crowding, rotated incisors, and uneven smile arc. Dr. Darshak Vaghani designed customized aligner staged mechanics to expand the dental arch and align all front teeth into harmonious symmetry.',
    beforeImg: '/case-4-before.jpg',
    afterImg: '/case-4-after.jpg',
    fullImg: '/case-4-full.jpg',
    beforeLabel: 'Before: Severe Front Crowding & Rotations',
    afterLabel: 'After: Symmetrical Aligned Smile Arc',
    highlights: ['Harmonious arch expansion', 'Corrected rotated incisors', 'Zero tooth extraction needed', 'Discreet aligner treatment'],
  },
  {
    id: 'case-5-malocclusion',
    title: 'Severe Malocclusion & Canine Alignment',
    treatment: 'Comprehensive Fixed Orthodontics',
    duration: '11 Months Orthodontic Correction',
    description: 'Patient presented with severe rotational irregularity, ectopic high canine position, and irregular bite occlusion. Dr. Darshak achieved ideal Class I canine intercuspation with complete arch leveling and aesthetic alignment.',
    beforeImg: '/case-5-before.jpg',
    afterImg: '/case-5-after.jpg',
    fullImg: '/case-5-full.jpg',
    beforeLabel: 'Before: Ectopic Canine & Severe Misalignment',
    afterLabel: 'After: Perfect Class I Canine & Arch Alignment',
    highlights: ['Ectopic canine brought into arch', 'Rotations completely unraveled', 'Balanced bite occlusion', 'Long-term retention planned'],
  },
];

