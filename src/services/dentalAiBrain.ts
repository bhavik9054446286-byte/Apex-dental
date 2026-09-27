import { CLINIC_CONTACT } from '../data/clinicData';

export const CLINIC_KNOWLEDGE = {
  name: 'Apex Dental Clinic',
  doctor: 'Dr. Darshak Vaghani',
  degrees: 'B.D.S., M.D.S. (Orthodontist & Dentofacial Orthopedics)',
  phone: '+91 79846 77833',
  phoneAlt: '+91 98241 57534',
  whatsappRaw: '917984677833',
  address: '2nd Floor, near Mahadev Chowk, Opp. Dharmnandan Row House Society, Mota Varachha, Surat, Gujarat',
  timings: 'Mon–Sat: 9:00 AM – 8:30 PM | Sun: 9:00 AM – 1:00 PM',
  googleRating: '5.0 Stars (Google Verified)',
};

/**
 * Intelligent Dental Knowledge Response System
 * Ensures 100% availability on Netlify even if backend/serverless environment variables are pending.
 */
export function getSmartDentalFallback(userPrompt: string): string {
  const query = userPrompt.toLowerCase().trim();

  // Detect Gujarati script or Gujarati transliteration
  const isGujarati = /[\u0A80-\u0AFF]/.test(userPrompt) || 
    /kem chho|daant|dant|vankachuka|saras|kharcho|samay|kya chhe|surat|mota varachha|paisa|sarvar/.test(query);

  // Detect Hindi script or Hindi transliteration
  const isHindi = /[\u0900-\u097F]/.test(userPrompt) || 
    /kya|kaise|kitna|dard|kharcha|batao|kripya|daant|kahan|samay|aaj|appointment/.test(query);

  // 1. Orthodontics / Braces / Aligners / Crooked Teeth
  if (
    query.includes('brace') || 
    query.includes('aligner') || 
    query.includes('invisalign') || 
    query.includes('crooked') || 
    query.includes('wire') || 
    query.includes('gap') || 
    query.includes('spacing') || 
    query.includes('overbite') || 
    query.includes('crossbite') || 
    query.includes('crowd') || 
    query.includes('વાંકાચૂકા') || 
    query.includes('તાર') || 
    query.includes('ટેઢે')
  ) {
    if (isGujarati) {
      return `નમસ્તે! **એપેક્સ ડેન્ટલ ક્લિનિક** માં વાંકાચૂકા દાંત ની સારવાર ના નિષ્ણાત **ડો. દર્શક વાઘાણી (M.D.S. ઓર્થોડોન્ટિસ્ટ)** દ્વારા આધુનિક પદ્ધતિથી કરવામાં આવે છે:

**મુખ્ય સારવાર વિકલ્પો:**
1. **ઇનવિઝિબલ ક્લિયર એલાઈનર્સ (Clear Aligners / Invisalign):** કોઈ તાર કે પતરી વગર પારદર્શક ટ્રે, જે દેખાતા નથી અને કાઢી પણ શકાય છે.
2. **મેટલ અને સિરેમિક બ્રેસીસ (Braces):** દાંતના કલરના સિરેમિક બ્રેસીસ અથવા આધુનિક સેલ્ફ-લાઈગેટિંગ બ્રેસીસ.
3. **દાંત વચ્ચેની જગ્યા (Gap / Diastema Closure):** દર્દમુક્ત અને સ્થાયી પરિણામ.

📅 **સારવાર સમયગાળો:** કેસ મુજબ સામાન્ય રીતે ૬ થી ૧૪ મહિના.
📍 **સ્થળ:** મહાદેવ ચોક પાસે, ધર્મનંદન રો-હાઉસ સામે, મોટા વરાછા, સુરત.
📞 **રૂબરૂ તપાસ માટે વોટ્સએપ:** +91 79846 77833 પર મેસેજ કરો.`;
    }

    if (isHindi) {
      return `नमस्ते! **Apex Dental Clinic** में टेढ़े-मेढ़े दांतों और स्माइल डिजाइनिंग के विशेषज्ञ **Dr. Darshak Vaghani (M.D.S. Orthodontist)** हैं:

**उपलब्ध उपचार विकल्प:**
1. **क्लियर अलाइनर्स (Clear Aligners / Invisalign):** बिना किसी वायर या ब्रैकेट के पारदर्शी ट्रे, जो बाहर से बिल्कुल दिखाई नहीं देते।
2. **सिरेमिक एवं मेटल ब्रेसेस:** दांतों के रंग वाले ब्रैकेट जो आरामदायक और तेज परिणाम देते हैं।
3. **दांतों के बीच गैप और ओवरबाइट सुधार:** प्राकृतिक और स्थायी स्माइल मेकओवर।

📅 **अवधि:** 6 से 12 महीने (केस के अनुसार)।
📍 **क्लिनिक पता:** 2nd Floor, Mahadev Chowk के पास, Opp. Dharmnandan Row House, Mota Varachha, Surat.
💬 **अपॉइंटमेंट हेतु WhatsApp:** +91 79846 77833 पर संपर्क करें।`;
    }

    return `Hello! At **Apex Dental Clinic**, our lead specialist **Dr. Darshak Vaghani (B.D.S., M.D.S. Orthodontist)** specializes in correcting crooked, crowded, spaced, and misaligned teeth using advanced international techniques:

**1. Clear Aligners & Invisalign:**
- Virtually invisible, removable custom trays.
- No dietary restrictions and comfortable for working professionals and teens.

**2. Ceramic & Metal Fixed Braces:**
- Tooth-colored aesthetic ceramic brackets and precision low-friction wires.
- Fast, predictable teeth alignment with monthly monitoring.

**3. Typical Timeline & Planning:**
- Digital full-jaw OPG X-ray and 3D treatment planning right at the clinic.
- Active treatment usually ranges from **6 to 14 months**.

Would you like to schedule an in-person orthodontic evaluation? You can message Dr. Darshak directly on WhatsApp at **+91 79846 77833**.`;
  }

  // 2. Root Canal Treatment (RCT) / Severe Pain / Swelling
  if (
    query.includes('root canal') || 
    query.includes('rct') || 
    query.includes('pain') || 
    query.includes('ache') || 
    query.includes('swelling') || 
    query.includes('infection') || 
    query.includes('sensitivity') || 
    query.includes('દુખાવો') || 
    query.includes('દર્દ') || 
    query.includes('રૂટ કેનાલ')
  ) {
    if (isGujarati) {
      return `દાંતમાં સખત દુખાવો કે સેન્સિટિવિટી ઊંડા સડા અથવા નસમાં ઇન્ફેક્શનને લીધે હોઈ શકે છે.

**એપેક્સ ડેન્ટલ ક્લિનિક માં રૂટ કેનાલ (RCT) ની વિશેષતા:**
- **સિંગલ-સીટીંગ દર્દમુક્ત સારવાર:** આધુનિક રોટરી એન્ડોડોન્ટિક્સ અને કમ્પ્યુટરાઈઝ્ડ લોકલ એનેસ્થેસિયા વડે ૧ જ સીટિંગમાં દર્દમુક્ત સારવાર શક્ય.
- **ઝડપી રાહત:** પ્રથમ વિઝિટમાં જ દુખાવામાં 100% રાહત મળે છે.
- **ઝિર્કોનિયા / સિરેમિક કેપ (Crown):** રૂટ કેનાલ પછી દાંતને મજબૂત રાખવા માટે દાંતના રંગની કાયમી કેપ.

🚑 **ઇમરજન્સી સારવાર માટે તાત્કાલિક સંપર્ક કરો:** +91 79846 77833 (મોટા વરાછા, સુરત).`;
    }

    if (isHindi) {
      return `दांत में तेज दर्द या झनझनाहट अंदरूनी नसों (Pulp) में इंफेक्शन के कारण हो सकती है।

**Apex Dental Clinic में आधुनिक RCT की सुविधाएं:**
- **सिंगल-सिटिंग पेन-फ्री रूट कैनाल:** डिजिटल एक्स-रे और एडवांस्ड रोटरी फाइल्स की मदद से बिना दर्द के 1 सिटिंग में उपचार।
- **दांत की सुरक्षा:** सड़े हुए दांत को निकालने के बजाय सुरक्षित बचाया जाता है।
- **कैप / क्राउन (Zirconia / Ceramic):** भोजन चबाने के लिए दांत को मजबूत बनाया जाता है।

📞 **तुरंत अपॉइंटमेंट या सलाह के लिए WhatsApp करें:** +91 79846 77833 (Mota Varachha, Surat).`;
    }

    return `Severe toothache or persistent sensitivity typically indicates that bacterial decay has reached the inner dental nerve (pulp).

**Root Canal Treatment (RCT) at Apex Dental Clinic:**
- **Single-Sitting, Painless Technology:** We use motorized rotary endodontics and computerized digital X-rays to complete the procedure gently and without discomfort.
- **Tooth Preservation:** Instead of removing your natural tooth, the infection is cleansed, sealed, and protected.
- **Protective Crowns (Zirconia / Ceramic):** Fitted with high-strength tooth-colored crowns to restore 100% chewing capability.

For immediate relief and emergency pain management in Mota Varachha, Surat, contact Dr. Darshak Vaghani directly on WhatsApp at **+91 79846 77833**.`;
  }

  // 3. Teeth Whitening / Cleaning / Scaling
  if (
    query.includes('whiten') || 
    query.includes('clean') || 
    query.includes('scaling') || 
    query.includes('yellow') || 
    query.includes('stain') || 
    query.includes('પીળા') || 
    query.includes('સફેદ') || 
    query.includes('સફાઈ')
  ) {
    return `✨ **Professional Teeth Cleaning & Clinical Whitening at Apex Dental Clinic:**

1. **Ultrasonic Scaling & Polishing (દાંત ની સફાઈ):**
   - Gently clears hardened tartar (calculus), plaque, tobacco, tea/coffee stains without damaging enamel.
   - Recommended every 6 months for fresh breath and healthy gums.

2. **Clinic-Grade Whitening:**
   - In-office whitening session (approx. 45 minutes) that can brighten teeth by 4 to 8 shades safely.
   - Gum isolation barrier applied to ensure zero irritation.

Would you like to book a cleaning or whitening session with Dr. Darshak Vaghani? Message on WhatsApp at **+91 79846 77833**.`;
  }

  // 4. Dental Implants & Missing Teeth
  if (
    query.includes('implant') || 
    query.includes('missing') || 
    query.includes('bridge') || 
    query.includes('denture') || 
    query.includes('ખોટો દાંત') || 
    query.includes('ચોકઠું')
  ) {
    return `🦷 **Dental Implants & Missing Teeth Solutions at Apex Dental Clinic:**

- **Permanent Dental Implants:** Titanium root implants placed securely in the jawbone that look, feel, and function exactly like natural teeth.
- **Fixed Ceramic / Zirconia Bridges:** For patients seeking non-surgical tooth replacement.
- **Implant-Supported Overdentures:** Secure, stable dentures that never slip or click while eating or speaking.
- **Key Benefits:** Prevents bone loss, preserves adjacent teeth, and restores 100% chewing efficiency.

Dr. Darshak Vaghani conducts thorough 3D digital radiographic evaluations before recommending the ideal option. WhatsApp consultation: **+91 79846 77833**.`;
  }

  // 5. Timings / Clinic Hours / Schedule
  if (
    query.includes('time') || 
    query.includes('timing') || 
    query.includes('hour') || 
    query.includes('open') || 
    query.includes('close') || 
    query.includes('sunday') || 
    query.includes('ક્યારે') || 
    query.includes('સમય')
  ) {
    return `🕒 **Apex Dental Clinic Timings & Schedule:**

- **Monday to Saturday:** 9:00 AM – 8:30 PM (Continuous OPD)
- **Sunday:** 9:00 AM – 1:00 PM (Morning OPD)

📍 **Location:** 2nd Floor, near Mahadev Chowk, Opp. Dharmnandan Row House Society, Mota Varachha, Surat, Gujarat.
📱 **Direct Phone / WhatsApp:** +91 79846 77833 / +91 98241 57534.
Walk-ins and scheduled appointments are always welcome!`;
  }

  // 6. Doctor Credentials / Dr. Darshak Vaghani
  if (
    query.includes('doctor') || 
    query.includes('darshak') || 
    query.includes('vaghani') || 
    query.includes('experience') || 
    query.includes('degree') || 
    query.includes('qualification') || 
    query.includes('ડોક્ટર')
  ) {
    return `👨‍⚕️ **About Dr. Darshak Vaghani:**

- **Qualifications:** B.D.S., M.D.S. (Orthodontist & Dentofacial Orthopedics).
- **Specialty:** Advanced smile designing, orthodontic bracket alignment, clear aligners/Invisalign, single-sitting root canals, and cosmetic dental rehabilitation.
- **Clinic:** Apex Dental Clinic, Mota Varachha, Surat.
- **Google Reviews Rating:** 5.0 ★ with hundreds of delighted patients.
- **Direct WhatsApp Line:** +91 79846 77833.`;
  }

  // 7. Location / Address / Directions
  if (
    query.includes('address') || 
    query.includes('location') || 
    query.includes('where') || 
    query.includes('map') || 
    query.includes('reach') || 
    query.includes('surat') || 
    query.includes('ક્યાં') || 
    query.includes('સરનામું')
  ) {
    return `📍 **How to Reach Apex Dental Clinic:**

- **Exact Address:** 2nd Floor, near Mahadev Chowk, Opp. Dharmnandan Row House Society, Mota Varachha, Surat, Gujarat.
- **Landmark:** Above Kahan Wedding Palace, right near Mahadev Chowk.
- **Google Maps:** You can find the direct GPS link on our website footer or message us on WhatsApp (**+91 79846 77833**) and we will send the live Google Maps pin instantly!`;
  }

  // 8. Cost / Pricing / Fees
  if (
    query.includes('cost') || 
    query.includes('price') || 
    query.includes('fee') || 
    query.includes('charge') || 
    query.includes('rate') || 
    query.includes('ખર્ચ') || 
    query.includes('પૈસા') || 
    query.includes('કીમત')
  ) {
    return `💰 **Apex Dental Clinic – Treatment Pricing & Consultation:**

At Apex Dental Clinic, we maintain strict transparency with ethical, patient-friendly fee structures:
- **Comprehensive Clinical Examination & Consultation:** Highly affordable with digital intraoral inspection.
- **Teeth Cleaning & Scaling:** Transparent fixed fee.
- **Braces & Aligners:** Flexible installment plans available over the course of treatment.
- **Root Canal & Zirconia Crowns:** Tiered warranty options (5-year, 10-year, lifetime crowns).

Because every mouth is unique, Dr. Darshak Vaghani provides an exact written estimate after checking your digital X-ray. You can ask for a quick consultation quote on WhatsApp: **+91 79846 77833**.`;
  }

  // 9. Pediatric / Children Dentistry
  if (
    query.includes('kid') || 
    query.includes('child') || 
    query.includes('baby') || 
    query.includes('pediatric') || 
    query.includes('બાળક') || 
    query.includes('બાળકો')
  ) {
    return `👶 **Gentle Pediatric Dental Care at Apex Dental Clinic:**

- **Fear-Free Environment:** Friendly chairside approach specially designed so young children feel relaxed, happy, and confident.
- **Preventive Care:** Topical fluoride gel application, dental sealants to protect young molars from cavities.
- **Habit-Breaking Appliances:** Guidance for thumb-sucking, tongue thrusting, and early mouth-breathing habits.
- **Painless Fillings & Pulpotomy:** Gentle treatment for childhood milk teeth.

Appointments for kids can be scheduled at **+91 79846 77833**.`;
  }

  // Default warm and structured response
  if (isGujarati) {
    return `નમસ્તે! **એપેક્સ ડેન્ટલ ક્લિનિક (મોટા વરાછા, સુરત)** માં આપનું હાર્દિક સ્વાગત છે.
અમારા ચીફ ડેન્ટલ સ્પેશિયાલિસ્ટ **ડો. દર્શક વાઘાણી (M.D.S. ઓર્થોડોન્ટિસ્ટ)** દ્વારા વાંકાચૂકા દાંત ની સારવાર, સિંગલ-સીટિંગ દર્દમુક્ત રૂટ કેનાલ, ડેન્ટલ ઇમ્પ્લાન્ટ, દાંતની સફાઈ અને સ્માઇલ ડિઝાઇનિંગ કરવામાં આવે છે.

⏰ **સમય:** સોમવાર થી શનિવાર સવારે ૯:૦૦ થી રાત્રે ૮:૩૦ | રવિવાર સવારે ૯:૦૦ થી બપોરે ૧:૦૦.
📍 **સ્થળ:** ૨જો માળ, મહાદેવ ચોક પાસે, ધર્મનંદન રો-હાઉસ સામે, મોટા વરાછા, સુરત.
💬 **વોટ્સએપ સંપર્ક:** +91 79846 77833 પર મેસેજ કરીને આપ તુરંત માહિતી કે એપોઇન્ટમેન્ટ મેળવી શકો છો.`;
  }

  return `Welcome to **Apex Dental Clinic** in Mota Varachha, Surat! 

Lead by **Dr. Darshak Vaghani (B.D.S., M.D.S. Orthodontist)**, our clinic offers world-class, comfortable dental care:
- **Orthodontics & Aligners:** Invisalign, clear aligners, ceramic & metal braces.
- **Painless Root Canals:** Single-visit rotary RCT with digital X-rays.
- **Implants & Crowns:** Permanent titanium implants, monolithic Zirconia crowns.
- **Cosmetic & Preventive:** Laser teeth whitening, ultrasonic scaling, child dentistry.

🕒 **Hours:** Mon–Sat 9:00 AM – 8:30 PM | Sun 9:00 AM – 1:00 PM
📍 **Address:** 2nd Floor, near Mahadev Chowk, Opp. Dharmnandan Row House Society, Mota Varachha, Surat.
💬 **Direct Doctor Hotline & WhatsApp:** **+91 79846 77833**`;
}
