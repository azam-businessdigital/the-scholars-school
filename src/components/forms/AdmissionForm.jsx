import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  User,
  GraduationCap,
  Phone,
  Mail,
  BookOpen,
  MessageSquare,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { executeRecaptcha } from '../../utils/recaptcha';

const SECTIONS_LIST = [
  'MRAK Kids: Nursery',
  'MRAK Kids: Mont – 2',
  'MRAK Kids: Sr.KG',
  'The Scholars Primary School (Grades 1 to 4)',
  'The Scholars High School (Grades 5 to 10 - Boys)',
  'The Scholars High School (Grades 5 to 10 - Girls)',
  'The Scholars Junior College of Arts and Commerce (Girls Section)',
  'The Scholars Junior College of Arts and Commerce (Boys Section)',
  'Integrated Deeniyat Program'
];

export const resolveSectionValue = (sec) => {
  if (!sec) return '';
  if (SECTIONS_LIST.includes(sec)) return sec;

  const secLower = sec.toLowerCase();
  const exactCase = SECTIONS_LIST.find((s) => s.toLowerCase() === secLower);
  if (exactCase) return exactCase;

  if (secLower.includes('primary')) {
    return 'The Scholars Primary School (Grades 1 to 4)';
  }
  if (secLower.includes('girls') && (secLower.includes('college') || secLower.includes('junior'))) {
    return 'The Scholars Junior College of Arts and Commerce (Girls Section)';
  }
  if (secLower.includes('boys') && (secLower.includes('college') || secLower.includes('junior'))) {
    return 'The Scholars Junior College of Arts and Commerce (Boys Section)';
  }
  if (secLower.includes('college') || secLower.includes('junior')) {
    return 'The Scholars Junior College of Arts and Commerce (Girls Section)';
  }
  if (secLower.includes('girls') && (secLower.includes('high') || secLower.includes('secondary'))) {
    return 'The Scholars High School (Grades 5 to 10 - Girls)';
  }
  if (secLower.includes('boys') && (secLower.includes('high') || secLower.includes('secondary'))) {
    return 'The Scholars High School (Grades 5 to 10 - Boys)';
  }
  if (secLower.includes('secondary') || secLower.includes('high')) {
    return 'The Scholars High School (Grades 5 to 10 - Boys)';
  }
  if (secLower.includes('mrak') || secLower.includes('preschool') || secLower.includes('pre-school') || secLower.includes('nursery')) {
    return 'MRAK Kids: Nursery';
  }
  if (secLower.includes('deeniyat')) {
    return 'Integrated Deeniyat Program';
  }

  const subMatch = SECTIONS_LIST.find(
    (s) => s.toLowerCase().includes(secLower) || secLower.includes(s.toLowerCase())
  );
  return subMatch || sec;
};

export default function AdmissionForm({ initialSection = '' }) {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    section: resolveSectionValue(initialSection),
    message: '',
    consent: false,
    website_honeypot: '' // Anti-spam honeypot
  });

  React.useEffect(() => {
    if (initialSection) {
      setFormData((prev) => ({ ...prev, section: resolveSectionValue(initialSection) }));
    }
  }, [initialSection]);

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const sectionsList = SECTIONS_LIST;

  const validate = () => {
    const errs = {};

    if (!formData.parentName.trim() || formData.parentName.trim().length < 2) {
      errs.parentName = 'Please enter a valid parent or guardian name.';
    }

    if (!formData.studentName.trim() || formData.studentName.trim().length < 2) {
      errs.studentName = 'Please enter the student\'s full name.';
    }

    const phoneRegex = /^[+]?[0-9]{10,14}$/;
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      errs.phone = 'Please provide a valid 10-digit phone number.';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please provide a valid email address.';
      }
    }

    if (!formData.section) {
      errs.section = 'Please select the academic section of interest.';
    }

    if (!formData.consent) {
      errs.consent = 'You must give consent for the admissions team to contact you.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot bot check
    if (formData.website_honeypot) {
      console.warn('Spam submission detected via honeypot.');
      return;
    }

    if (status === 'submitting') return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Auto-scroll to first invalid input field so user sees error immediately
      const firstErrorKey = Object.keys(validationErrors)[0];
      const errorEl = document.getElementById(firstErrorKey) || document.querySelector(`[name="${firstErrorKey}"]`);
      if (errorEl) {
        errorEl.focus();
        errorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setStatus('submitting');

    try {
      // 1. Acquire Google reCAPTCHA v3 verification token with timeout fallback
      let recaptchaToken = '';
      try {
        const captchaPromise = executeRecaptcha('admission_enquiry');
        const timeoutPromise = new Promise((resolve) => setTimeout(() => resolve(''), 2000));
        recaptchaToken = await Promise.race([captchaPromise, timeoutPromise]);
      } catch (captchaErr) {
        console.warn('reCAPTCHA execution fallback:', captchaErr);
      }

      // 2. Transmit to backend endpoint
      const baseUrl = import.meta.env.VITE_API_BASE_URL || '';
      const apiPrefix = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || (typeof window !== 'undefined' && window.location.pathname.startsWith('/the-scholars-school') ? '/the-scholars-school' : '');
      const endpoint = baseUrl ? `${baseUrl}/admission-enquiry` : `${apiPrefix}/api/admission.php`;

      let result = {};

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

      // Only simulate success in local development if Vite serves raw PHP source
      if (import.meta.env.DEV && rawText.trim().startsWith('<?php')) {
        setStatus('success');
        setFeedbackMessage(
          `[Dev Mode] Thank you, ${formData.parentName}! Your admission enquiry for ${formData.studentName} (${formData.section}) simulated successfully.`
        );
        setFormData({
          parentName: '',
          studentName: '',
          phone: '',
          email: '',
          section: '',
          message: '',
          consent: false,
          website_honeypot: ''
        });
        return;
      }

      try {
        result = JSON.parse(rawText);
      } catch (_) {
        console.warn('API returned non-JSON response:', rawText);
      }

      if (!response.ok || !result.success) {
        if (response.status === 429) {
          throw new Error(result.error || 'Too many submissions received. Please wait a few minutes before trying again.');
        }
        throw new Error(result.error || `Server error (HTTP ${response.status || 'unknown'})`);
      }

      setStatus('success');
      setFeedbackMessage(
        result.message || 'Thank you! Your admission enquiry has been logged successfully. Our admissions counseling office will contact you within 1 to 2 working days.'
      );
      setFormData({
        parentName: '',
        studentName: '',
        phone: '',
        email: '',
        section: '',
        message: '',
        consent: false,
        website_honeypot: ''
      });
      return;
    } catch (err) {
      setStatus('error');
      setFeedbackMessage(
        <span>{err.message || 'We encountered a connection issue while transmitting your enquiry. Please reach our office directly at'} <a href="tel:+918976890569" style={{ color: 'inherit', fontWeight: 700, textDecoration: 'underline' }}>+91 8976890569</a>.</span>
      );
    }
  };

  return (
    <div className="contact-form-premium" id="admission-enquiry-form">
      <div className="contact-form-ambient-glow" aria-hidden="true"></div>

      <div className="contact-form-header">
        <div className="contact-form-badge">
          <Sparkles size={13} className="contact-badge-icon" />
          <span>ONLINE ADMISSION ENQUIRY</span>
        </div>
        <h3 className="contact-form-title">Admission Enquiry Application</h3>
        <p className="contact-form-subtitle">
          Academic Session 2025–26 &amp; 2026–27. All fields marked with (*) are required.
        </p>
      </div>

      {status === 'success' && (
        <div className="contact-alert contact-alert-success" role="alert">
          <CheckCircle2 size={20} className="contact-alert-icon" />
          <div>{feedbackMessage}</div>
        </div>
      )}

      {status === 'error' && (
        <div className="contact-alert contact-alert-error" role="alert">
          <AlertCircle size={20} className="contact-alert-icon" />
          <div>{feedbackMessage}</div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="contact-form-inner">
        {/* Anti-spam honeypot */}
        <input
          type="text"
          name="website_honeypot"
          value={formData.website_honeypot}
          onChange={handleChange}
          style={{ display: 'none' }}
          tabIndex="-1"
          autoComplete="off"
        />

        {/* Row 1: Parent Name & Student Name */}
        <div className="contact-form-row">
          <div className="contact-form-group">
            <label htmlFor="parentName" className="contact-form-label">
              <span>Parent / Guardian Name</span>
              <span className="contact-required">*</span>
            </label>
            <div className={`contact-field-wrap ${errors.parentName ? 'has-error' : ''}`}>
              <User size={16} className="contact-input-icon" />
              <input
                id="parentName"
                name="parentName"
                type="text"
                className="contact-premium-input"
                placeholder="e.g. Mohammad Ansari"
                value={formData.parentName}
                onChange={handleChange}
                maxLength="80"
                required
              />
            </div>
            {errors.parentName && <div className="contact-field-error">{errors.parentName}</div>}
          </div>

          <div className="contact-form-group">
            <label htmlFor="studentName" className="contact-form-label">
              <span>Student Full Name</span>
              <span className="contact-required">*</span>
            </label>
            <div className={`contact-field-wrap ${errors.studentName ? 'has-error' : ''}`}>
              <GraduationCap size={16} className="contact-input-icon" />
              <input
                id="studentName"
                name="studentName"
                type="text"
                className="contact-premium-input"
                placeholder="e.g. Zaid Ansari"
                value={formData.studentName}
                onChange={handleChange}
                maxLength="80"
                required
              />
            </div>
            {errors.studentName && <div className="contact-field-error">{errors.studentName}</div>}
          </div>
        </div>

        {/* Row 2: Mobile Contact & Email */}
        <div className="contact-form-row">
          <div className="contact-form-group">
            <label htmlFor="phone" className="contact-form-label">
              <span>Mobile Contact Number</span>
              <span className="contact-required">*</span>
            </label>
            <div className={`contact-field-wrap ${errors.phone ? 'has-error' : ''}`}>
              <Phone size={16} className="contact-input-icon" />
              <input
                id="phone"
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

          <div className="contact-form-group">
            <label htmlFor="email" className="contact-form-label">
              <span>Email Address (Optional)</span>
            </label>
            <div className={`contact-field-wrap ${errors.email ? 'has-error' : ''}`}>
              <Mail size={16} className="contact-input-icon" />
              <input
                id="email"
                name="email"
                type="email"
                className="contact-premium-input"
                placeholder="e.g. parent@example.com"
                value={formData.email}
                onChange={handleChange}
                maxLength="80"
              />
            </div>
            {errors.email && <div className="contact-field-error">{errors.email}</div>}
          </div>
        </div>

        {/* Row 3: Class / Section of Interest */}
        <div className="contact-form-group">
          <label htmlFor="section" className="contact-form-label">
            <span>Academic Section of Interest</span>
            <span className="contact-required">*</span>
          </label>
          <div className={`contact-field-wrap ${errors.section ? 'has-error' : ''}`}>
            <BookOpen size={16} className="contact-input-icon" />
            <select
              id="section"
              name="section"
              className="contact-premium-input contact-premium-select"
              value={formData.section}
              onChange={handleChange}
              required
            >
              <option value="">Select an Academic Section</option>
              {sectionsList.map((sec) => (
                <option key={sec} value={sec}>
                  {sec}
                </option>
              ))}
            </select>
          </div>
          {errors.section && <div className="contact-field-error">{errors.section}</div>}
        </div>

        {/* Row 4: Queries or Prior Schooling Details */}
        <div className="contact-form-group contact-form-group-textarea">
          <label htmlFor="message" className="contact-form-label">
            <span>Questions or Prior Schooling Details (Optional)</span>
          </label>
          <div className="contact-field-wrap contact-textarea-wrap">
            <MessageSquare size={16} className="contact-input-icon contact-textarea-icon" />
            <textarea
              id="message"
              name="message"
              className="contact-premium-textarea"
              placeholder="Mention prior school history, board preferences, or specific queries..."
              value={formData.message}
              onChange={handleChange}
              maxLength="500"
              rows="3"
            />
          </div>
        </div>

        {/* Row 5: Authorization Checkbox */}
        <div className="contact-form-group">
          <label className="contact-checkbox-label">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
            />
            <span>
              I authorize The Scholars High School administration to contact me via phone, email, or SMS regarding this admission enquiry.
            </span>
          </label>
          {errors.consent && <div className="contact-field-error">{errors.consent}</div>}
        </div>

        {/* Validation summary error notification */}
        {Object.keys(errors).length > 0 && (
          <div className="contact-alert contact-alert-error" role="alert" style={{ margin: '4px 0 10px 0' }}>
            <AlertCircle size={18} className="contact-alert-icon" />
            <div>Please fill in the required fields marked in red above to submit your enquiry.</div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="contact-submit-btn"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={18} className="spinner" />
              <span>Transmitting Admission Enquiry...</span>
            </>
          ) : (
            <>
              <span>Submit Admission Enquiry</span>
              <Send size={16} />
            </>
          )}
        </button>

        {/* Trust & Security Footnote */}
        <div className="contact-trust-footer">
          <ShieldCheck size={16} className="contact-trust-icon" />
          <span>Official enquiry routed directly to The Scholars School Admissions Desk. Response within 24 working hours.</span>
        </div>
      </form>
    </div>
  );
}
