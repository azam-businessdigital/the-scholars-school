import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SectionHeader from '../components/common/SectionHeader';
import ContactForm from '../components/forms/ContactForm';
import { schoolData } from '../data/schoolData';

export default function Contact() {
  const mapIframeUrl = schoolData.location.mapEmbedUrl;

  return (
    <>
      <SEO
        title="Contact Us & Campus Location | The Scholars School"
        description="Get in touch with The Scholars High School & Junior College for Commerce. Located at Captain Suresh Samant Marg, Jogeshwari West, Mumbai."
        canonical="https://thescholarsschool.edu.in/contact-us/"
      />

      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">GET IN TOUCH</span>
          <h1>Contact The Scholars High School &amp; Junior College</h1>
          <p>
            We are here to assist with admission enquiries, academic counseling, certificates, and campus visits.
          </p>
        </div>
      </div>

      <Breadcrumbs items={[{ label: 'Contact Us', path: '/contact-us/' }]} />

      {/* Main Contact Section with Warm Contrast */}
      <section className="section contact-main-section">
        <div className="container">
          <div className="contact-layout-grid stagger-group reveal-up">
            {/* Left Column: Campus Information */}
            <div className="contact-info-column section-header reveal-up">
              <span className="eyebrow">OFFICE DETAILS</span>
              <h2 className="section-title" style={{ marginBottom: '12px' }}>Campus Information</h2>
              <p className="section-subtitle" style={{ color: 'var(--color-slate-grey-dark)', marginBottom: '28px', lineHeight: 1.6 }}>
                Visit our campus at Hill Park, Jogeshwari West, or reach out directly to our administrative office via telephone, WhatsApp, or email during school working hours.
              </p>

              <div className="contact-cards-stack stagger-group reveal-up">
                {/* Location Card */}
                <div className="contact-info-card reveal-up">
                  <div className="contact-info-icon-box">
                    <MapPin size={22} />
                  </div>
                  <div className="contact-info-content">
                    <h4>Campus Location</h4>
                    <p>{schoolData.location.fullAddress || "Captain Suresh Samant Marg, Agarwal Estate, Opp. Hill Park Tower, Jogeshwari (West), Mumbai 400102, Maharashtra, India"}</p>
                  </div>
                </div>

                {/* Telephone Card */}
                <div className="contact-info-card reveal-up">
                  <div className="contact-info-icon-box">
                    <Phone size={22} />
                  </div>
                  <div className="contact-info-content">
                    <h4>Direct Telephones</h4>
                    <p className="contact-phone-links">
                      <a href="tel:+918976890569">+91 8976890569</a> &bull; <a href="tel:+918976890570">+91 8976890570</a><br />
                      <a href="tel:+918976890571">+91 8976890571</a> &bull; <a href="tel:+918976890572">+91 8976890572</a>
                    </p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="contact-info-card reveal-up">
                  <div className="contact-info-icon-box">
                    <Mail size={22} />
                  </div>
                  <div className="contact-info-content">
                    <h4>Electronic Mail</h4>
                    <p className="contact-email-links">
                      <span>General:</span> <a href={`mailto:${schoolData.emails.info}`}>{schoolData.emails.info}</a><br />
                      <span>Admin &amp; Careers:</span> <a href={`mailto:${schoolData.emails.admin}`}>{schoolData.emails.admin}</a>
                    </p>
                  </div>
                </div>

                {/* Visiting Hours Card */}
                <div className="contact-info-card reveal-up">
                  <div className="contact-info-icon-box">
                    <Clock size={22} />
                  </div>
                  <div className="contact-info-content">
                    <h4>Visiting &amp; Office Hours</h4>
                    <p>
                      <strong>Monday to Saturday:</strong> 9:00 AM to 3:00 PM<br />
                      <span style={{ color: 'var(--color-slate-grey)', fontSize: '0.85rem' }}>Sunday &amp; Public Holidays: Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Contrast Contact Form */}
            <div className="contact-form-column reveal-up">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Section with Responsive Container & Navigation Button */}
      <section className="section contact-map-section">
        <div className="container">
          <SectionHeader
            eyebrow="MAP DIRECTIONS"
            title="Locate Our 7-Floor Campus"
            subtitle="Situated on Captain Suresh Samant Marg, Opposite Hill Park Tower in Jogeshwari West, Mumbai."
            centered
          />

          <div className="contact-map-card card reveal-up">
            <div className="contact-map-wrapper">
              <iframe
                src={mapIframeUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0, display: 'block', width: '100%', height: '100%' }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Scholar High School & The Scholar Junior College of Arts & Commerce Location Map"
              />
            </div>

            <div className="contact-map-footer-bar">
              <div className="contact-map-footer-info">
                <MapPin size={18} className="contact-map-pin-icon" />
                <span>Opposite Hill Park Tower, Captain Suresh Samant Marg, Jogeshwari (West), Mumbai 400102</span>
              </div>
              <a
                href="https://maps.google.com/?q=The+Scholar+High+School+Jogeshwari+West+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-sm contact-map-directions-btn"
              >
                <span>Open in Google Maps / Directions</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
