import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  User,
  Phone,
  Mail,
  FileText,
  MessageSquare,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { executeRecaptcha } from '../../utils/recaptcha';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name.';
    }

    const phoneRegex = /^[+]?[0-9]{10,14}$/;
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      errs.phone = 'Please provide a valid 10-digit contact number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please specify the subject of your inquiry.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = 'Please enter your message (at least 5 characters).';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.honeypot) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');

    try {
      // 1. Acquire Google reCAPTCHA v3 verification token
      let recaptchaToken = '';
      try {
        recaptchaToken = await executeRecaptcha('contact_form');
      } catch (captchaErr) {
        console.warn('reCAPTCHA execution fallback:', captchaErr);
      }

      // 2. Transmit to backend endpoint
      const baseUrl = import.meta.env.VITE_API_BASE_URL || '';
      const apiPrefix = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || (typeof window !== 'undefined' && window.location.pathname.startsWith('/the-scholars-school') ? '/the-scholars-school' : '');
      const endpoint = baseUrl ? `${baseUrl}/contact` : `${apiPrefix}/api/contact.php`;

      const response = await fetch(endpoint, {
        method: 'POST',
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: recaptchaToken || ''
        })
      });

      const rawText = await response.text();
      let data = {};
      try {
        data = JSON.parse(rawText);
      } catch (_) {
        console.warn('API returned non-JSON response:', rawText);
      }

      if (!response.ok || !data.success) {
        if (response.status === 429) {
          throw new Error(data.error || 'Too many submissions from your connection. Please wait a few minutes before trying again.');
        }
        if (response.status === 409) {
          throw new Error('A request was recently processed. Please wait a moment and try again.');
        }
        throw new Error(data.error || `Server error (HTTP ${response.status || 'unknown'})`);
      }

      setStatus('success');
      setFeedback(data.message || 'Your message has been successfully received by our administrative office. We will get back to you promptly.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
        honeypot: ''
      });
    } catch (err) {
      setStatus('error');
      setFeedback(
        <span>{err.message || 'We could not transmit your message at this moment. Please call our admissions desk directly at'} <a href="tel:+918976890569" style={{ color: 'inherit', fontWeight: 700, textDecoration: 'underline' }}>+91 8976890569</a>.</span>
      );
    }
  };

  return (
    <div className="contact-form-premium">
      <div className="contact-form-ambient-glow" />

      {/* Header */}
      <div className="contact-form-header">
        <div className="contact-form-badge">
          <Sparkles size={13} className="contact-badge-icon" />
          <span>OFFICIAL INQUIRY DESK</span>
        </div>
        <h3 className="contact-form-title">Send Us a Direct Message</h3>
        <p className="contact-form-subtitle">
          Have queries about admissions, curriculum, fees, or visit timings? Submit your details below and our administrative office will respond promptly.
        </p>
      </div>

      {/* Status Alerts */}
      {status === 'success' && (
        <div className="contact-alert contact-alert-success" role="alert">
          <CheckCircle2 size={20} className="contact-alert-icon" />
          <div>{feedback}</div>
        </div>
      )}

      {status === 'error' && (
        <div className="contact-alert contact-alert-error" role="alert">
          <AlertCircle size={20} className="contact-alert-icon" />
          <div>{feedback}</div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="contact-form-inner">
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          style={{ display: 'none' }}
          tabIndex="-1"
          autoComplete="off"
        />

        {/* Row 1: Name and Phone */}
        <div className="contact-form-row">
          <div className="contact-form-group">
            <label htmlFor="contact-name" className="contact-form-label">
              <span>Full Name</span>
              <span className="contact-required">*</span>
            </label>
            <div className={`contact-field-wrap ${errors.name ? 'has-error' : ''}`}>
              <User size={16} className="contact-input-icon" />
              <input
                id="contact-name"
                name="name"
                type="text"
                className="contact-premium-input"
                placeholder="e.g. Mohammad Ansari"
                value={formData.name}
                onChange={handleChange}
                maxLength="80"
                required
              />
            </div>
            {errors.name && <div className="contact-field-error">{errors.name}</div>}
          </div>

          <div className="contact-form-group">
            <label htmlFor="contact-phone" className="contact-form-label">
              <span>Contact Number</span>
              <span className="contact-required">*</span>
            </label>
            <div className={`contact-field-wrap ${errors.phone ? 'has-error' : ''}`}>
              <Phone size={16} className="contact-input-icon" />
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                className="contact-premium-input"
                placeholder="e.g. +91 9876543210"
                value={formData.phone}
                onChange={handleChange}
                maxLength="16"
                required
              />
            </div>
            {errors.phone && <div className="contact-field-error">{errors.phone}</div>}
          </div>
        </div>

        {/* Row 2: Email and Subject */}
        <div className="contact-form-row">
          <div className="contact-form-group">
            <label htmlFor="contact-email" className="contact-form-label">
              <span>Email Address</span>
              <span className="contact-required">*</span>
            </label>
            <div className={`contact-field-wrap ${errors.email ? 'has-error' : ''}`}>
              <Mail size={16} className="contact-input-icon" />
              <input
                id="contact-email"
                name="email"
                type="email"
                className="contact-premium-input"
                placeholder="e.g. parent@example.com"
                value={formData.email}
                onChange={handleChange}
                maxLength="80"
                required
              />
            </div>
            {errors.email && <div className="contact-field-error">{errors.email}</div>}
          </div>

          <div className="contact-form-group">
            <label htmlFor="contact-subject" className="contact-form-label">
              <span>Inquiry Subject</span>
              <span className="contact-required">*</span>
            </label>
            <div className={`contact-field-wrap ${errors.subject ? 'has-error' : ''}`}>
              <FileText size={16} className="contact-input-icon" />
              <input
                id="contact-subject"
                name="subject"
                type="text"
                className="contact-premium-input"
                placeholder="e.g. MRAK Kids Admission Query"
                value={formData.subject}
                onChange={handleChange}
                maxLength="120"
                required
              />
            </div>
            {errors.subject && <div className="contact-field-error">{errors.subject}</div>}
          </div>
        </div>

        {/* Row 3: Message */}
        <div className="contact-form-group contact-form-group-textarea">
          <label htmlFor="contact-message" className="contact-form-label">
            <span>Detailed Message</span>
            <span className="contact-required">*</span>
          </label>
          <div className={`contact-field-wrap contact-textarea-wrap ${errors.message ? 'has-error' : ''}`}>
            <MessageSquare size={16} className="contact-input-icon contact-textarea-icon" />
            <textarea
              id="contact-message"
              name="message"
              className="contact-premium-textarea"
              placeholder="Please share your questions, child's age or grade level, or convenient call timings..."
              value={formData.message}
              onChange={handleChange}
              maxLength="800"
              rows="4"
              required
            />
          </div>
          {errors.message && <div className="contact-field-error">{errors.message}</div>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="contact-submit-btn"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={18} className="spinner" />
              <span>Transmitting Message...</span>
            </>
          ) : (
            <>
              <span>Send Message to Office</span>
              <Send size={16} />
            </>
          )}
        </button>

        {/* Security & Verification Note */}
        <div className="contact-trust-footer">
          <ShieldCheck size={16} className="contact-trust-icon" />
          <span>Official communication routed directly to Al-Qalam Educational Trust Helpdesk. Responses provided within 24 working hours.</span>
        </div>
      </form>
    </div>
  );
}
