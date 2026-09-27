import { GoogleGenAI } from '@google/genai';

interface HandlerEvent {
  httpMethod: string;
  body: string | null;
  headers: Record<string, string>;
}

const DENTAL_AI_SYSTEM_INSTRUCTION = `
You are "Apex Dental AI Smile Guide", the official virtual dental assistant for Apex Dental Clinic located in Mota Varachha, Surat, India.
Lead Specialist: Dr. Darshak Vaghani, B.D.S., M.D.S. (Orthodontist & Dentofacial Orthopedics).

Clinic Details:
- Clinic Name: Apex Dental Clinic
- Lead Doctor: Dr. Darshak Vaghani (Orthodontist specialist)
- Location: 2nd Floor, near Mahadev Chowk, Opp. Dharmnandan Row House Society, Mota Varachha, Surat, Gujarat.
- WhatsApp & Phone: +91 79846 77833 / +91 98241 57534
- Official Gmail: vaghanidarshak@gmail.com
- Instagram ID: @apexdentalclinic16 (https://instagram.com/apexdentalclinic16)
- Timings: Monday to Saturday 9:00 AM to 8:30 PM | Sunday 9:00 AM to 1:00 PM
- Google Rating: 5.0 Stars

Services:
- Clear aligners, Invisalign, metal & ceramic braces, orthodontic growth modification, teeth reshaping
- Dental implants, Dentures, Zirconia & ceramic crowns and bridges
- Single-sitting painless root canals, emergency toothache care
- Laser teeth whitening, ultrasonic scaling & stain removal
- Pediatric / children dentistry, habit-breaking appliances

Guidelines:
- Warm, polite, reassuring, and concise tone.
- If user asks in Gujarati or Hindi, reply warmly in that language.
- Mention Dr. Darshak Vaghani and WhatsApp +91 79846 77833 for direct booking.
`;

export const handler = async (event: HandlerEvent) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const payload = event.body ? JSON.parse(event.body) : {};
    const { message, history } = payload;

    if (!message || typeof message !== 'string') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message is required' }),
      };
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

    if (apiKey) {
      const ai = new GoogleGenAI({
        apiKey,
      });

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

      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents,
          config: {
            systemInstruction: DENTAL_AI_SYSTEM_INSTRUCTION,
            temperature: 0.7,
          },
        });

        if (response.text) {
          return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ reply: response.text }),
          };
        }
      } catch (geminiErr: any) {
        console.warn('Gemini 3.8 error on Netlify, trying 3.1 lite:', geminiErr?.message || geminiErr);
        try {
          const response = await ai.models.generateContent({
            model: 'gemini-3.1-flash-lite',
            contents,
            config: {
              systemInstruction: DENTAL_AI_SYSTEM_INSTRUCTION,
              temperature: 0.7,
            },
          });
          if (response.text) {
            return {
              statusCode: 200,
              headers,
              body: JSON.stringify({ reply: response.text }),
            };
          }
        } catch (e) {
          console.warn('Gemini fallback error:', e);
        }
      }
    }

    // Default clinic response if API key is not configured in Netlify dashboard
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        reply: `Thank you for contacting Apex Dental Clinic in Mota Varachha, Surat! Dr. Darshak Vaghani (M.D.S. Orthodontist) and our team are available Mon–Sat 9:00 AM to 8:30 PM. Please message or call on WhatsApp at +91 79846 77833 for instant consultation and appointments.`
      }),
    };
  } catch (err: any) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        reply: `Hello from Apex Dental Clinic! You can consult directly with Dr. Darshak Vaghani on WhatsApp at +91 79846 77833. We are located near Mahadev Chowk, Mota Varachha, Surat.`
      }),
    };
  }
};
