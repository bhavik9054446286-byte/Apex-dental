export type ServiceCategory = 
  | 'all'
  | 'orthodontics'
  | 'implants'
  | 'cosmetic'
  | 'general'
  | 'surgery'
  | 'pediatric'
  | 'periodontal';

export interface DentalService {
  id: string;
  name: string;
  category: ServiceCategory;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  idealFor: string;
  benefits: string[];
  popular?: boolean;
  imageUrl?: string;
}

export interface DayTiming {
  day: string;
  dayIndex: number; // 0 for Sunday, 1 for Monday...
  openTime: string;
  closeTime: string;
  formatted: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  treatment: string;
  comment: string;
  verified: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
  suggestedAction?: {
    type: 'whatsapp_book' | 'explore_service';
    serviceName?: string;
  };
}

export interface AppointmentFormData {
  patientName: string;
  phoneNumber: string;
  selectedService: string;
  preferredDate: string;
  preferredTimeSlot: string;
  notes: string;
}
