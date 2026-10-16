import React, { useState } from 'react';

/**
 * FloatingWhatsApp
 * Floating WhatsApp trigger button connecting parents directly to The Scholars School official WhatsApp helpdesk.
 */
export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = '918976890569';
  const defaultMessage = 'Hello The Scholars School, I would like to enquire about admissions & courses.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div
      className="floating-whatsapp-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {showTooltip && (
        <div className="floating-whatsapp-tooltip" role="tooltip">
          <span>Chat on WhatsApp</span>
          <div className="floating-whatsapp-tooltip-arrow" />
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat with The Scholars School on WhatsApp (+91 8976890569)"
      >
        <div className="floating-whatsapp-pulse" />
        <svg
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.01 2.01C8.28 2.01 2 8.28 2 16.02c0 2.6.7 5.04 1.93 7.15L2 30l7.05-1.85c2.05 1.13 4.4 1.76 6.96 1.76 7.73 0 14.01-6.27 14.01-14.01 0-7.74-6.28-14.01-14.01-14.01zm8.24 19.83c-.35.98-1.74 1.8-2.42 1.91-.65.11-1.49.16-2.42-.14-.56-.18-1.28-.42-2.22-.83-3.92-1.7-6.49-5.65-6.68-5.91-.2-.26-1.61-2.14-1.61-4.08 0-1.94 1.02-2.9 1.38-3.3.36-.4.78-.5 1.04-.5.26 0 .52 0 .75.01.24.01.56-.09.87.66.33.79 1.12 2.74 1.22 2.94.1.2.16.44.03.7-.13.26-.2.42-.39.65-.2.23-.42.51-.6.69-.2.2-.41.42-.18.82.23.4 1.03 1.7 2.21 2.75 1.52 1.35 2.8 1.77 3.2 1.97.4.2.63.17.86-.1.23-.26.99-1.15 1.25-1.55.26-.4.53-.33.89-.2.36.13 2.28 1.08 2.68 1.27.39.2.66.29.75.46.1.16.1.95-.25 1.93z" />
        </svg>
      </a>
    </div>
  );
}
