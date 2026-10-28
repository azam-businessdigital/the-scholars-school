import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, UserPlus, PhoneCall, ArrowLeft } from 'lucide-react';
import SEO from '../components/common/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found (404) | The Scholars High School and Junior College"
        description="The requested page could not be located on The Scholars High School and Junior College website."
      />

      <section className="section section-ivory" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
        <div className="container reveal-scale" style={{ maxWidth: '680px', textAlign: 'center' }}>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '84px',
              fontWeight: 700,
              color: 'var(--color-champagne-gold)',
              lineHeight: 1,
              display: 'block',
              marginBottom: '12px'
            }}
          >
            404
          </span>

          <h1 style={{ marginBottom: '16px' }}>
            Page Not Found
          </h1>

          <p style={{ marginBottom: '32px' }}>
            The page you are looking for may have been moved, renamed, or is temporarily unavailable. Please explore the main sections of our website below or return to the homepage.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            <Link to="/" className="btn btn-primary btn-lg">
              <Home size={18} />
              <span>Return to Homepage</span>
            </Link>
          </div>

          <div
            style={{
              backgroundColor: '#fff',
              padding: 'var(--space-6)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--color-border-subtle)',
              textAlign: 'left'
            }}
          >
            <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-royal-navy)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Helpful Campus Links:
            </h4>
            <div className="notfound-links-grid">
              <Link to="/academics/" className="btn btn-outline btn-sm" style={{ justifyContent: 'flex-start' }}>
                <BookOpen size={14} />
                <span>Academics</span>
              </Link>
              <Link to="/admissions/" className="btn btn-outline btn-sm" style={{ justifyContent: 'flex-start' }}>
                <UserPlus size={14} />
                <span>Admissions</span>
              </Link>
              <Link to="/contact-us/" className="btn btn-outline btn-sm" style={{ justifyContent: 'flex-start' }}>
                <PhoneCall size={14} />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
