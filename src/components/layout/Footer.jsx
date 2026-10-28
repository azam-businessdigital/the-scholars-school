import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink, Instagram, Facebook, Youtube } from 'lucide-react';
import { schoolData } from '../../data/schoolData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid stagger-group reveal-up">
          {/* Column 1: Institution Info */}
          <div className="footer-col reveal-up">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img
                src="/images/logo.png"
                alt="The Scholars School Emblem"
                style={{ height: '54px', width: 'auto', backgroundColor: '#fff', borderRadius: '4px', padding: '3px' }}
              />
              <div>
                <h4 style={{ margin: 0, padding: 0, color: '#fff' }}>
                  The Scholars High School
                </h4>
                <span style={{ fontSize: '12px', color: 'var(--color-champagne-gold)', fontWeight: 600 }}>
                  and Junior College
                </span>
              </div>
            </div>

            <p style={{ marginBottom: '16px' }}>
              Established in 1993 under the patronage of Al-Qalam Educational Trust (Regd. 1991, Mumbai). Providing quality English-medium education with moral foundation from Pre-School to Higher Secondary.
            </p>

            <div className="footer-social-links">
              <a
                href={schoolData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Instagram Profile"
              >
                <Instagram size={18} />
              </a>
              <a
                href={schoolData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Facebook Page"
              >
                <Facebook size={18} />
              </a>
              <a
                href={schoolData.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="YouTube Channel"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Academic Sections */}
          <div className="footer-col reveal-up">
            <h4>Academic Sections</h4>
            <ul className="footer-links">
              <li>
                <Link to="/academics/mrak-kids/">MRAK - The Scholars Kids Pre School</Link>
              </li>
              <li>
                <Link to="/academics/primary/">The Scholars Primary School</Link>
              </li>
              <li>
                <Link to="/academics/secondary/">The Scholars High School</Link>
              </li>
              <li>
                <Link to="/academics/junior-college/girls/">The Scholars Junior College of Arts and Commerce (Girls)</Link>
              </li>
              <li>
                <Link to="/academics/junior-college/boys/">The Scholars Junior College of Arts and Commerce (Boys)</Link>
              </li>
              <li>
                <Link to="/academics/deeniyat/">Deeniyat Program</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-col reveal-up">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/about-us/">About Our Institution</Link>
              </li>
              <li>
                <Link to="/admissions/">Admission Procedure</Link>
              </li>
              <li>
                <Link to="/announcements/">Official Announcements</Link>
              </li>
              <li>
                <Link to="/results/">Board Examination Results</Link>
              </li>
              <li>
                <Link to="/media-news/">News &amp; Media</Link>
              </li>
              <li>
                <Link to="/gallery/">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/careers/">Careers &amp; Vacancies</Link>
              </li>
              <li>
                <Link to="/contact-us/">Contact &amp; Location</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-col reveal-up">
            <h4>Contact Details</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={18} />
                <span>
                  Captain Suresh Samant Marg, Agarwal Estate, Opp. Hill Park Tower, Jogeshwari (West), Mumbai 400102
                </span>
              </li>
              <li className="footer-contact-item">
                <Phone size={18} />
                <div>
                  <a href="tel:+918976890569">+91 8976890569</a> / <a href="tel:+918976890570">+91 8976890570</a><br />
                  <a href="tel:+918976890571">+91 8976890571</a> / <a href="tel:+918976890572">+91 8976890572</a>
                </div>
              </li>
              <li className="footer-contact-item">
                <Mail size={18} />
                <div>
                  <a href="mailto:alqalams26@gmail.com">alqalams26@gmail.com</a>
                </div>
              </li>
            </ul>

            <div style={{ marginTop: '16px' }}>
              <Link to="/admissions/" className="btn btn-gold btn-sm" style={{ width: '100%' }}>
                Enroll Your Child Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p>
              &copy; {currentYear} The Scholars High School and Junior College.
            </p>
            <ul className="footer-bottom-links">
              <li>
                <Link to="/privacy-policy/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-use/">Terms of Use</Link>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">
                  Sitemap XML
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-curation">
            Website Curated By{' '}
            <a href="https://businessdigital.in" target="_blank" rel="noopener noreferrer">
              Business Digital
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
