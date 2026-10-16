import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  Bot,
  Sparkles,
  Send,
  X,
  RotateCcw,
  Phone,
  ExternalLink,
  ChevronRight,
  GraduationCap
} from 'lucide-react';

const INITIAL_MESSAGES = [
  {
    id: 'welcome-1',
    sender: 'bot',
    text: 'Assalamu Alaikum! Welcome to The Scholars High School & Junior College (Est. 1993, Al-Qalam Educational Trust). I am your AI campus assistant.',
    time: 'Just now'
  },
  {
    id: 'welcome-2',
    sender: 'bot',
    text: 'How can I assist you today? You can choose a common topic below or type your question about admissions, sections, school timings, fees, or board results.',
    time: 'Just now',
    actions: [
      { label: 'Admissions 2026-27', query: 'Tell me about the admission procedure and required documents' },
      { label: 'Academic Sections', query: 'What academic sections do you offer?' },
      { label: 'School Timings & Location', query: 'What are the school timings and campus location?' },
      { label: '100% Board Results', query: 'Tell me about the SSC Board examination results' },
      { label: 'Deeniyat & Islamic Studies', query: 'What is taught in the Deeniyat section?' },
      { label: 'Helpline & Contact', query: 'Give me your official phone numbers and contact details' }
    ]
  }
];

function getBotResponse(userQuery) {
  const q = userQuery.toLowerCase().trim();

  // 1. Greetings
  if (
    q.includes('hi') ||
    q.includes('hello') ||
    q.includes('hey') ||
    q.includes('salam') ||
    q.includes('assalam') ||
    q.includes('morning') ||
    q.includes('afternoon')
  ) {
    return {
      text: 'Wa Alaikum Assalam! Welcome to The Scholars School. How may I help you with our academic offerings, admissions, or campus details today?',
      actions: [
        { label: 'Admissions Info', query: 'How do I apply for admission?' },
        { label: 'Campus Sections', query: 'What classes do you have?' },
        { label: 'Call Helpdesk', query: 'Give me phone numbers' }
      ]
    };
  }

  // 2. Admissions, Eligibility, Application, Documents
  if (
    q.includes('admission') ||
    q.includes('apply') ||
    q.includes('enroll') ||
    q.includes('document') ||
    q.includes('eligib') ||
    q.includes('seat') ||
    q.includes('registration')
  ) {
    return {
      text: 'Admissions are open across all sections for the upcoming academic year! Here is what you need:\n\n• Available Sections: MRAK Kids Pre-School, Pre-Primary (LKG & UKG), Primary (1-4), Secondary (5-10 SSC), and Junior College for Commerce (XI & XII).\n• Required Documents: Original/Copy of Birth Certificate, Previous School Leaving Certificate (LC), 3 Passport-size Photographs, and Student & Parent Aadhar Cards.\n• Procedure: You can submit an enquiry online or visit our administrative office at Hill Park, Jogeshwari West (Mon-Sat, 9:00 AM to 3:00 PM).',
      linkTo: '/admissions/',
      linkText: 'Go to Online Admissions Page',
      showContact: true
    };
  }

  // 3. Sections & Curriculum
  if (
    q.includes('section') ||
    q.includes('course') ||
    q.includes('class') ||
    q.includes('curriculum') ||
    q.includes('syllabus') ||
    q.includes('mrak') ||
    q.includes('pre-primary') ||
    q.includes('primary') ||
    q.includes('secondary') ||
    q.includes('college') ||
    q.includes('commerce') ||
    q.includes('fyjc') ||
    q.includes('syjc')
  ) {
    return {
      text: 'The Scholars School comprises five major academic divisions combining academic excellence with moral values:\n\n1. MRAK Kids Pre-School: Playgroup & Nursery with joyful sensory learning.\n2. Pre-Primary Section: LKG & UKG foundational literacy, phonics, and numeracy.\n3. Primary Section: Classes 1 to 4 with experiential activity-based learning.\n4. Secondary Section: Classes 5 to 10 following Maharashtra State SSC curriculum.\n5. Junior College for Commerce: XI & XII (FYJC & SYJC) with dedicated separate wings for Boys and Girls.\n6. Deeniyat Division: Integrated values education, Quran with Tajweed, and character building.',
      linkTo: '/academics/',
      linkText: 'Explore All Academic Sections',
      showContact: false
    };
  }

  // 4. Timings & Office Hours
  if (
    q.includes('timing') ||
    q.includes('time') ||
    q.includes('hour') ||
    q.includes('open') ||
    q.includes('saturday') ||
    q.includes('schedule')
  ) {
    return {
      text: 'School Office & Visiting Hours:\n\n• Administrative Desk: Monday to Saturday, 9:00 AM to 3:00 PM\n• Sunday: Closed\n• Admissions Helpdesk: Open during all working hours\n\nFor section-specific morning and afternoon class hours, please call our helpdesk at +91 8976890569 or visit the front desk.',
      showContact: true
    };
  }

  // 5. Location & Address
  if (
    q.includes('address') ||
    q.includes('location') ||
    q.includes('where') ||
    q.includes('reach') ||
    q.includes('map') ||
    q.includes('hill park') ||
    q.includes('jogeshwari')
  ) {
    return {
      text: 'Campus Address:\n\nThe Scholars High School & Junior College for Commerce\nCaptain Suresh Samant Marg, Agarwal Estate, Opp. Hill Park Tower,\nJogeshwari (West), Mumbai 400102, Maharashtra, India.\n\nNearest Railway Station: Jogeshwari Station (Western Railway) and Oshiwara / Goregaon connectivity.',
      linkTo: '/contact-us/',
      linkText: 'View Location Map & Contact Details',
      showContact: true
    };
  }

  // 6. Board Results & Achievements
  if (
    q.includes('result') ||
    q.includes('board') ||
    q.includes('ssc') ||
    q.includes('topper') ||
    q.includes('percentage') ||
    q.includes('pass')
  ) {
    return {
      text: 'The Scholars High School proudly maintains an exceptional track record of 100% Board Examination Pass Results in Maharashtra State SSC!\n\n• Consistent 100% SSC Pass rate with numerous distinctions and first-class honors.\n• Junior College Commerce students consistently progress to prestigious Mumbai university programs, Chartered Accountancy (CA), and professional business degrees.',
      linkTo: '/results/',
      linkText: 'View 100% Board Results Details',
      showContact: false
    };
  }

  // 7. Deeniyat & Islamic Studies
  if (
    q.includes('deeniyat') ||
    q.includes('islamic') ||
    q.includes('quran') ||
    q.includes('tajweed') ||
    q.includes('hifz') ||
    q.includes('prayer') ||
    q.includes('namaz') ||
    q.includes('moral')
  ) {
    return {
      text: 'Our Deeniyat Division provides value-based education harmonized with modern academics:\n\n• Quran recitation with authentic Tajweed rules.\n• Daily Islamic Duas, ethical conduct (Akhlaq), and Sunnah manners.\n• Hadith studies and basic Islamic jurisprudence.\n• Dedicated Deeniyat faculty and prayer hall facilities.',
      linkTo: '/academics/deeniyat/',
      linkText: 'Explore Deeniyat Curriculum',
      showContact: false
    };
  }

  // 8. Contact Numbers & Email
  if (
    q.includes('contact') ||
    q.includes('phone') ||
    q.includes('call') ||
    q.includes('number') ||
    q.includes('mobile') ||
    q.includes('email') ||
    q.includes('telephone') ||
    q.includes('helpline')
  ) {
    return {
      text: 'Official Contact Helplines:\n\n• Helpline Desk 1: +91 8976890569\n• Helpline Desk 2: +91 8976890570\n• Office Desk 3: +91 8976890571\n• Office Desk 4: +91 8976890572\n\n• General Inquiries: info@thescholarsschool.edu.in\n• Administration & Careers: admin@thescholarsschool.edu.in',
      showContact: true
    };
  }

  // 9. Fees & Uniform
  if (
    q.includes('fee') ||
    q.includes('cost') ||
    q.includes('uniform') ||
    q.includes('bus') ||
    q.includes('transport')
  ) {
    return {
      text: 'Fee Structure & Facilities:\n\n• The Scholars School maintains an affordable, transparent fee structure under the non-profit patronage of Al-Qalam Educational Trust (Regd.).\n• For section-wise fee details (Pre-School, Primary, High School, Junior College), please contact our administrative counter at +91 8976890569 or visit our Hill Park office for official fee schedules and installment guidelines.',
      showContact: true
    };
  }

  // 10. Faculty & Teachers
  if (
    q.includes('teacher') ||
    q.includes('faculty') ||
    q.includes('staff') ||
    q.includes('principal') ||
    q.includes('qualification')
  ) {
    return {
      text: 'Faculty Highlights:\n\n• Over 60+ verified, qualified educators holding B.Ed., M.A., M.Com., D.Ed., ECC.Ed., and Islamic theology (Alimah) credentials.\n• Led by dedicated school leadership under Al-Qalam Educational Trust with decades of academic experience in Mumbai.',
      linkTo: '/about-us/',
      linkText: 'Learn About School Leadership',
      showContact: false
    };
  }

  // 11. Facilities & Campus
  if (
    q.includes('facility') ||
    q.includes('lab') ||
    q.includes('computer') ||
    q.includes('library') ||
    q.includes('sports') ||
    q.includes('karate')
  ) {
    return {
      text: 'Campus Facilities Include:\n\n• Smart digital classrooms with interactive visual displays.\n• Equipped Science Laboratory for physics, chemistry, and biology.\n• Computer & IT Lab with high-speed internet.\n• Comprehensive Library and reading hall.\n• Karate martial arts and physical fitness coaching.\n• Separate Girls and Boys wings for Junior College students.',
      linkTo: '/gallery/',
      linkText: 'View Campus Photo Gallery',
      showContact: false
    };
  }

  // 12. Trust & History
  if (
    q.includes('trust') ||
    q.includes('founder') ||
    q.includes('history') ||
    q.includes('al-qalam') ||
    q.includes('rizwan')
  ) {
    return {
      text: 'About Al-Qalam Educational Trust:\n\n• Founded in 1991 (Regd.) and established The Scholars High School in 1993.\n• Founded by Late Maulana Rizwan Ahmed Khan to combine quality modern English education with ethical Islamic values.\n• Over 30 years of excellence serving students in Mumbai.',
      linkTo: '/about-us/',
      linkText: 'Read Full History & Mission',
      showContact: false
    };
  }

  // Fallback for general queries
  return {
    text: 'Thank you for your question. Here is a quick overview of The Scholars School:\n\nWe offer quality English-medium education from Pre-School (MRAK Kids) to Junior College for Commerce (XI & XII) and Deeniyat studies under Al-Qalam Educational Trust at Hill Park, Jogeshwari (West).\n\nYou can also contact our admissions helpdesk directly at +91 8976890569 or via WhatsApp for immediate personal assistance.',
    actions: [
      { label: 'Admissions 2026-27', query: 'Tell me about the admission procedure and required documents' },
      { label: 'Academic Sections', query: 'What academic sections do you offer?' },
      { label: 'School Timings & Location', query: 'What are the school timings and campus location?' },
      { label: 'Official Phone Numbers', query: 'Give me your official phone numbers and contact details' }
    ],
    showContact: true
  };
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadBadge, setUnreadBadge] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadBadge(false);
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const responseData = getBotResponse(query);
      const botMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: responseData.text,
        actions: responseData.actions,
        linkTo: responseData.linkTo,
        linkText: responseData.linkText,
        showContact: responseData.showContact,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
  };

  const renderFormattedText = (text) => {
    if (!text) return null;
    const lines = text.split('\n');
    return lines.map((line, lIdx) => {
      // Format emails and phones into clickable links
      const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
      const phoneRegex = /(\+91\s?\d{10})/g;

      let parts = [line];

      // Replace emails
      parts = parts.flatMap((part) => {
        if (typeof part !== 'string') return [part];
        const splitEmails = part.split(emailRegex);
        return splitEmails.map((item, i) => {
          if (emailRegex.test(item)) {
            return (
              <a
                key={`email-${lIdx}-${i}`}
                href={`mailto:${item}`}
                className="ai-chat-link"
              >
                {item}
              </a>
            );
          }
          return item;
        });
      });

      // Replace phones
      parts = parts.flatMap((part) => {
        if (typeof part !== 'string') return [part];
        const splitPhones = part.split(phoneRegex);
        return splitPhones.map((item, i) => {
          if (phoneRegex.test(item)) {
            const cleanNum = item.replace(/\s+/g, '');
            return (
              <a
                key={`phone-${lIdx}-${i}`}
                href={`tel:${cleanNum}`}
                className="ai-chat-link"
              >
                {item}
              </a>
            );
          }
          return item;
        });
      });

      return (
        <React.Fragment key={lIdx}>
          {parts}
          {lIdx < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="floating-ai-container">
        {!isOpen && (
          <button
            type="button"
            className="floating-ai-trigger"
            onClick={() => setIsOpen(true)}
            aria-label="Open Scholars AI Campus Guide"
          >
            <div className="floating-ai-icon-wrap">
              <Sparkles size={20} className="floating-ai-sparkle" />
              <Bot size={22} className="floating-ai-bot" />
              {unreadBadge && <span className="floating-ai-badge" />}
            </div>
            <span className="floating-ai-label">Ask Scholars AI</span>
          </button>
        )}
      </div>

      {/* Interactive AI Chat Window */}
      {isOpen && (
        <div
          className="ai-chat-window"
          role="dialog"
          aria-modal="true"
          aria-label="Scholars AI Campus Guide"
        >
          {/* Header */}
          <div className="ai-chat-header">
            <div className="ai-chat-header-profile">
              <div className="ai-chat-avatar">
                <GraduationCap size={20} />
                <span className="ai-chat-online-dot" />
              </div>
              <div>
                <h3 className="ai-chat-title">Scholars AI Assistant</h3>
                <span className="ai-chat-subtitle">Official Campus &amp; Admissions Guide</span>
              </div>
            </div>

            <div className="ai-chat-header-actions">
              <button
                type="button"
                className="ai-chat-action-btn"
                onClick={handleReset}
                title="Reset conversation"
                aria-label="Reset conversation"
              >
                <RotateCcw size={16} />
              </button>
              <button
                type="button"
                className="ai-chat-action-btn"
                onClick={() => setIsOpen(false)}
                title="Close chat"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="ai-chat-banner">
            <span>Powered by The Scholars School Knowledge Base &bull; 1993</span>
          </div>

          {/* Messages Body */}
          <div className="ai-chat-body">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`ai-message-row ${msg.sender === 'user' ? 'ai-user-row' : 'ai-bot-row'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="ai-message-avatar">
                    <Bot size={16} />
                  </div>
                )}

                <div className="ai-message-content">
                  <div className={`ai-bubble ${msg.sender === 'user' ? 'ai-user-bubble' : 'ai-bot-bubble'}`}>
                    <div className="ai-bubble-text">{renderFormattedText(msg.text)}</div>

                    {/* Navigation Link if present */}
                    {msg.linkTo && (
                      <div className="ai-message-link-box">
                        <Link
                          to={msg.linkTo}
                          className="ai-btn-gold-link"
                          onClick={() => setIsOpen(false)}
                        >
                          <span>{msg.linkText || 'Learn More'}</span>
                          <ChevronRight size={14} />
                        </Link>
                      </div>
                    )}

                    {/* Contact Quick Buttons */}
                    {msg.showContact && (
                      <div className="ai-contact-quick-actions">
                        <a
                          href="tel:+918976890569"
                          className="ai-contact-chip"
                          aria-label="Call +91 8976890569"
                        >
                          <Phone size={12} />
                          <span>Call: +91 8976890569</span>
                        </a>
                        <a
                          href="https://wa.me/918976890569?text=Hello%20The%20Scholars%20School%2C%20I%20have%20an%20enquiry%20regarding%20admissions."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ai-contact-chip ai-contact-whatsapp"
                          aria-label="Chat on WhatsApp"
                        >
                          <ExternalLink size={12} />
                          <span>WhatsApp Chat</span>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Suggestion Chips */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="ai-chips-list">
                      {msg.actions.map((act, actIdx) => (
                        <button
                          key={actIdx}
                          type="button"
                          className="ai-chip-btn"
                          onClick={() => handleSendMessage(act.query)}
                        >
                          {act.label}
                        </button>
                      ))}
                    </div>
                  )}

                  <span className="ai-message-time">{msg.time}</span>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="ai-message-row ai-bot-row">
                <div className="ai-message-avatar">
                  <Bot size={16} />
                </div>
                <div className="ai-message-content">
                  <div className="ai-bubble ai-bot-bubble ai-typing-bubble">
                    <span className="ai-typing-dot" />
                    <span className="ai-typing-dot" />
                    <span className="ai-typing-dot" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="ai-chat-footer">
            <div className="ai-chat-input-wrapper">
              <input
                ref={inputRef}
                type="text"
                className="ai-chat-input"
                placeholder="Ask about admissions, fees, timings..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                maxLength={400}
                aria-label="Ask Scholars AI a question"
              />
              <button
                type="button"
                className="ai-chat-send-btn"
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim()}
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
