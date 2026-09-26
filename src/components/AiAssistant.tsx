import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  MessageSquare, 
  RefreshCw, 
  Copy, 
  Check, 
  ChevronRight,
  ShieldCheck,
  Languages,
  X
} from 'lucide-react';
import { ChatMessage } from '../types/dental';
import { SAMPLE_AI_PROMPTS, CLINIC_CONTACT } from '../data/clinicData';

interface AiAssistantProps {
  onBookTreatment?: (treatmentName?: string) => void;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({ 
  onBookTreatment,
  isModal = false,
  onCloseModal 
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `Hello! I am **Apex Dental AI Smile Guide**, the virtual assistant for **Apex Dental Clinic** in Mota Varachha, Surat led by **Dr. Darshak Vaghani (Orthodontist)**.

How can I help you today? You can ask me about:
- **Treatments**: Invisalign & Clear aligners, dental implants, single-sitting root canals, teeth whitening, pediatric care, gum treatments, and more.
- **What to Expect**: Procedure steps, pain management, recovery tips, and duration.
- **Clinic Information**: Doctor credentials, timings (Mon-Sat 9am-8:30pm, Sun 9am-1pm), or directions near Mahadev Chowk.

Feel free to ask in **English**, **ગુજરાતી (Gujarati)**, or **हिंदी (Hindi)**!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (messageText?: string) => {
    const textToSend = (messageText || input).trim();
    if (!textToSend || isLoading) return;

    const userMessage: ChatMessage = {
      id: 'user-' + Date.now(),
      role: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const historyPayload = messages.map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: historyPayload,
        }),
      });

      if (!res.ok) {
        throw new Error('API server returned error');
      }

      const data = await res.json();
      const botReply = data.reply || 'Thank you for reaching out! Dr. Darshak Vaghani is available at +91 79846 77833.';

      const botMessage: ChatMessage = {
        id: 'bot-' + Date.now(),
        role: 'model',
        text: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMessage: ChatMessage = {
        id: 'bot-err-' + Date.now(),
        role: 'model',
        text: `I'm having a brief connection hitch, but our clinic team is standing by! You can speak directly with Dr. Darshak Vaghani at Apex Dental Clinic by calling or messaging on WhatsApp at **+91 79846 77833**. We are open Mon–Sat 9am–8:30pm and Sunday 9am–1pm in Mota Varachha, Surat.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'model',
        text: `Chat restarted! Feel free to ask any question regarding treatments, procedures, pricing guidance, or clinic hours at Apex Dental Clinic.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <div className={`flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden ${isModal ? 'h-[85vh] max-h-[700px]' : 'h-[620px]'}`}>
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-teal-800 via-teal-900 to-slate-900 p-4 sm:p-5 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-xs flex-shrink-0">
            <img src="/apex-logo.png" alt="Apex Dental Clinic" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-base sm:text-lg tracking-tight">Apex Dental AI Assistant</h3>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30">
                Online
              </span>
            </div>
            <p className="text-xs text-teal-200/80 flex items-center gap-1.5">
              <span>Dr. Darshak Vaghani Clinic Knowledgebase</span>
              <span className="text-teal-400">·</span>
              <Languages className="w-3 h-3 text-cyan-300" />
              <span>English / ગુજરાતી / हिंदी</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="p-2 text-teal-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            title="Restart conversation"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          {isModal && onCloseModal && (
            <button
              onClick={onCloseModal}
              className="p-2 text-teal-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              title="Close assistant"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Suggested Quick Prompts Bar */}
      <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 flex items-center gap-2 overflow-x-auto text-xs scrollbar-none">
        <span className="text-[11px] font-semibold text-slate-500 shrink-0 uppercase tracking-wider pl-1">
          Suggestions:
        </span>
        {SAMPLE_AI_PROMPTS.map((prompt, i) => (
          <button
            key={i}
            onClick={() => handleSend(prompt)}
            className="shrink-0 bg-white hover:bg-teal-50 text-slate-700 hover:text-teal-800 border border-slate-200 hover:border-teal-300 px-3 py-1 rounded-full text-xs font-medium transition-all shadow-2xs cursor-pointer"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50/50">
        {messages.map((msg) => {
          const isBot = msg.role === 'model';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isBot ? 'justify-start' : 'justify-end'}`}
            >
              {isBot && (
                <div className="w-8 h-8 rounded-lg bg-white p-0.5 border border-slate-200/90 flex items-center justify-center shrink-0 shadow-xs">
                  <img src="/apex-logo.png" alt="Apex Dental" className="w-full h-full object-contain" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 text-sm leading-relaxed shadow-xs ${
                  isBot
                    ? 'bg-white text-slate-800 border border-slate-200/90 rounded-tl-sm'
                    : 'bg-teal-700 text-white rounded-tr-sm'
                }`}
              >
                {/* Message Content */}
                <div className="whitespace-pre-wrap font-sans text-xs sm:text-sm">
                  {msg.text}
                </div>

                {/* Footer with timestamp and action buttons */}
                <div
                  className={`flex items-center justify-between gap-3 mt-2 pt-2 text-[10px] border-t ${
                    isBot ? 'border-slate-100 text-slate-400' : 'border-teal-600/60 text-teal-200'
                  }`}
                >
                  <span>{msg.timestamp}</span>

                  {isBot && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopy(msg.id, msg.text)}
                        className="hover:text-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
                        title="Copy answer"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>

                      {onBookTreatment && (
                        <button
                          onClick={() => onBookTreatment()}
                          className="text-teal-700 font-semibold hover:underline flex items-center gap-0.5 cursor-pointer ml-1"
                        >
                          <MessageSquare className="w-3 h-3 text-emerald-600" />
                          <span>WhatsApp Book</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {!isBot && (
                <div className="w-8 h-8 rounded-lg bg-slate-300 text-slate-700 flex items-center justify-center shrink-0 shadow-xs text-xs font-bold">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}

        {/* Loading typing bubble */}
        {isLoading && (
          <div className="flex items-start gap-3 justify-start">
            <div className="w-8 h-8 rounded-lg bg-teal-700 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Bot className="w-4 h-4 text-cyan-200" />
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm p-4 text-xs text-slate-500 shadow-xs flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-600 animate-spin" />
              <span>Consulting Apex Dental knowledge base...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form Bar */}
      <div className="p-3 sm:p-4 bg-white border-t border-slate-200">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            placeholder="Ask about dental treatments, aligners, root canals, pain relief..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition-all disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-3 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all disabled:opacity-40 disabled:hover:bg-teal-700 cursor-pointer shadow-xs"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Send</span>
          </button>
        </form>

        <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-1">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-500" />
            <span>AI guidance only. Clinical examination with Dr. Darshak is recommended.</span>
          </span>
          <span className="hidden sm:inline">Surat, Gujarat</span>
        </div>
      </div>
    </div>
  );
};
