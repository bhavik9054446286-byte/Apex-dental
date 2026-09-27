import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '60mb' }));
app.use(express.urlencoded({ extended: true, limit: '60mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Google Search Console Site Verification HTML Route
app.get(['/googlefcc0d861f17d5700.html', '/googlefcc0d861f17d5700'], (_req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=UTF-8');
  res.send('google-site-verification: googlefcc0d861f17d5700.html\n');
});

// Search Engine Sitemap & Robots Routes
app.get('/sitemap.xml', (_req, res) => {
  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    res.setHeader('Content-Type', 'application/xml');
    res.sendFile(sitemapPath);
  } else {
    res.status(404).send('Not found');
  }
});

app.get('/robots.txt', (_req, res) => {
  const robotsPath = path.join(__dirname, 'public', 'robots.txt');
  if (fs.existsSync(robotsPath)) {
    res.setHeader('Content-Type', 'text/plain');
    res.sendFile(robotsPath);
  } else {
    res.send('User-agent: *\nAllow: /\n');
  }
});

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const CLINIC_INFO = {
  name: 'Apex Dental Clinic',
  doctor: 'Dr. Darshak Vaghani',
  qualifications: 'B.D.S., M.D.S. (Orthodontist & Dentofacial Orthopedics)',
  phone: '+91 79846 77833',
  whatsapp: '+91 79846 77833',
  email: 'vaghanidarshak@gmail.com',
  instagram: '@apexdentalclinic16',
  instagramUrl: 'https://instagram.com/apexdentalclinic16',
  address: '2nd Floor, near Mahadev Chowk, Opp. Dharmnandan Row House Society, Mota Varachha, Surat, Gujarat',
  rating: '5.0 Stars (Google Reviews)',
  timings: {
    monday: '9:00 AM – 8:30 PM',
    tuesday: '9:00 AM – 8:30 PM',
    wednesday: '9:00 AM – 8:30 PM',
    thursday: '9:00 AM – 8:30 PM',
    friday: '9:00 AM – 8:30 PM',
    saturday: '9:00 AM – 8:30 PM',
    sunday: '9:00 AM – 1:00 PM',
  },
  services: [
    'Teeth whitening',
    'Bonding',
    'Check-ups',
    'Cosmetic procedures',
    'Dental implants',
    'Dentures & bridges',
    'Emergency care',
    'Extractions',
    'Fillings and sealants',
    'Mouth guards',
    'Online dentist booking',
    'Oral surgery',
    'Paediatrics / Pediatric dental services',
    'Root canals',
    'Teeth cleaning',
    'Teeth reshaping',
    'Veneers & crowns',
    'Digital X-ray',
    'Orthodontic treatment and growth modification',
    'Denture and implant overdenture',
    'Invisalign and Clear aligners',
    'Crown and bridges',
    'Treatment of gingivitis and periodontitis',
  ],
};

const DENTAL_AI_SYSTEM_INSTRUCTION = `
You are "Apex Dental AI Smile Guide", the official virtual dental assistant for Apex Dental Clinic located in Mota Varachha, Surat, India.
Lead Specialist: Dr. Darshak Vaghani, B.D.S., M.D.S. (Orthodontist & Dentofacial Orthopedics).

Clinic Details:
- Clinic Name: Apex Dental Clinic
- Lead Doctor: Dr. Darshak Vaghani (Orthodontist specialist)
- Location: 2nd Floor, near Mahadev Chowk, Opp. Dharmnandan Row House Society, Mota Varachha, Surat, Gujarat.
- WhatsApp & Phone: +91 79846 77833
- Official Gmail: vaghanidarshak@gmail.com
- Instagram ID: @apexdentalclinic16 (https://instagram.com/apexdentalclinic16)
- Timings:
  * Monday to Saturday: 9:00 AM to 8:30 PM
  * Sunday: 9:00 AM to 1:00 PM
- Google Rating: 5.0 Stars with exceptional patient satisfaction

Services & Procedures Offered:
- Orthodontics & Clear Aligners: Invisalign, Clear aligners, metal & ceramic braces, growth modification for children/teens, teeth reshaping.
- Restorative & Implants: Dental implants, Denture and implant overdenture, Crown & bridges, Tooth-colored bonding.
- Cosmetic Dentistry: Professional Teeth whitening, Veneers & crowns, Smile designing.
- General & Preventive: Comprehensive Check-ups, Teeth cleaning & polishing, Fillings and sealants, Digital X-rays, Custom sports/night mouth guards.
- Endodontics & Surgery: Painless Root canals (single-sitting available), Wisdom tooth & surgical extractions, Oral surgery, Emergency dental care.
- Gum & Periodontal Care: Treatment of gingivitis and periodontitis, deep scaling, root planing.
- Pediatric Dentistry: Kids check-ups, habit-breaking appliances, fluoride treatments, gentle cavity care.

Your Capabilities & Guidelines:
1. Warm, comforting, and reassuring tone: Many patients feel anxious about dental visits. Emphasize modern painless techniques, gentle care, and Dr. Darshak's specialist credentials.
2. Educate and clarify: Explain dental procedures clearly (e.g., what happens during root canal, how aligners work vs braces, implant phases, teeth whitening results).
3. Offer pre-care and post-care tips (e.g., post-extraction soft diet instructions, brushing technique, sensitivity relief).
4. Guide appointments: Actively encourage patients to book an in-person consultation or message on WhatsApp at +91 79846 77833.
5. Multilingual capability: If a user writes in Gujarati or Hindi, reply warmly in that language (Gujarati / Hindi / English).
6. Medical ethics: Provide accurate, helpful dental health education, but always include a brief note that formal diagnosis requires clinical examination and digital X-rays at the clinic.
7. Keep answers structured, polite, concise, and easy to read on mobile devices.
`;

// AI Dental Assistant Chat Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    // Format contents with history if provided
    const contents: any[] = [];

    if (Array.isArray(history)) {
      for (const turn of history.slice(-6)) {
        if (turn.role === 'user' || turn.role === 'model') {
          contents.push({
            role: turn.role,
            parts: [{ text: String(turn.text) }],
          });
        }
      }
    }

    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    let response;
    try {
      response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: contents,
        config: {
          systemInstruction: DENTAL_AI_SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });
    } catch (primaryErr: any) {
      console.warn('Primary model gemini-3.8-flash error, falling back to gemini-3.1-flash-lite:', primaryErr?.message || primaryErr);
      response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: contents,
        config: {
          systemInstruction: DENTAL_AI_SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });
    }

    const replyText = response.text || 'Thank you for reaching out to Apex Dental Clinic. Please feel free to message Dr. Darshak Vaghani directly on WhatsApp at +91 79846 77833.';

    res.json({ reply: replyText });
  } catch (err: any) {
    console.error('Error generating AI response:', err?.message || err);
    if (err?.stack) console.error(err.stack);
    res.status(500).json({
      error: 'Failed to generate response',
      details: err?.message || String(err),
      fallback: 'Apex Dental Clinic is here to help! Please call or WhatsApp Dr. Darshak Vaghani directly at +91 79846 77833.',
    });
  }
});

// Quick Clinic Info endpoint
app.get('/api/clinic-info', (_req, res) => {
  res.json(CLINIC_INFO);
});

// Upload Video Endpoint
app.post('/api/upload-video', (req, res) => {
  try {
    const { videoBase64, filename } = req.body;
    if (!videoBase64) {
      res.status(400).json({ error: 'No video data provided' });
      return;
    }
    const cleanBase64 = videoBase64.replace(/^data:video\/[a-zA-Z0-9.-]+;base64,/, '');
    const buffer = Buffer.from(cleanBase64, 'base64');
    const safeName = filename
      ? `clinic-reel-${filename.replace(/[^a-zA-Z0-9.-]/g, '_')}`
      : `clinic-reel-${Date.now()}.mp4`;
    const filePath = path.join(__dirname, 'public', safeName);
    fs.writeFileSync(filePath, buffer);
    res.json({ success: true, url: `/${safeName}` });
  } catch (err: any) {
    console.error('Error saving video:', err);
    res.status(500).json({ error: err?.message || 'Failed to save video' });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Apex Dental Clinic server listening on port ${PORT}`);
  });
}

startServer();
