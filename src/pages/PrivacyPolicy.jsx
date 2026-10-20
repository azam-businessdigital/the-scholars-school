import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | The Scholars School"
        description="Privacy policy outlining data collection, admission enquiry handling, and personal information protection at The Scholars High School & Junior College."
        canonical="https://thescholarsschool.edu.in/privacy-policy/"
      />

      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">LEGAL DOCUMENTATION</span>
          <h1>Privacy Policy</h1>
          <p>
            How The Scholars High School &amp; Junior College handles personal information collected via our website and admission enquiry portals.
          </p>
        </div>
      </div>

      <Breadcrumbs items={[{ label: 'Privacy Policy', path: '/privacy-policy/' }]} />

      <section className="section section-white">
        <div className="container reveal-up" style={{ maxWidth: '850px' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-royal-navy)', marginBottom: '12px' }}>
              1. Institutional Commitment
            </h2>
            <p>
              The Scholars High School &amp; Junior College for Commerce, managed by the Al-Qalam Educational Trust (Regd. 1991, Mumbai), is committed to safeguarding the privacy and confidential personal data of our prospective students, enrolled learners, parents, guardians, and staff members.
            </p>

            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-royal-navy)', marginTop: '24px', marginBottom: '12px' }}>
              2. Information We Collect
            </h2>
            <p>
              We collect information that you voluntarily submit through our online admission enquiry form, contact forms, or direct email correspondence. This information includes:
            </p>
            <ul>
              <li>Parent or guardian full name, relationship, and contact details</li>
              <li>Student full name and grade or academic section of interest</li>
              <li>Telephone and mobile contact numbers</li>
              <li>Electronic mail addresses</li>
              <li>Specific educational queries, comments, or resume attachments submitted for employment</li>
            </ul>

            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-royal-navy)', marginTop: '24px', marginBottom: '12px' }}>
              3. Purpose of Information Collection
            </h2>
            <p>
              The personal details collected through this website are utilized strictly for legitimate educational administration purposes:
            </p>
            <ul>
              <li>To evaluate and process admission applications for the upcoming academic session</li>
              <li>To communicate with parents regarding admission interviews, schedules, and document verification</li>
              <li>To answer parent queries regarding school curriculum, timings, and campus facilities</li>
              <li>To review candidate resumes submitted for teaching and administrative vacancies</li>
            </ul>

            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-royal-navy)', marginTop: '24px', marginBottom: '12px' }}>
              4. Data Protection &amp; Confidentiality
            </h2>
            <p>
              We maintain reasonable technical and organizational safeguards to prevent unauthorized access, alteration, disclosure, or destruction of personal data. Sensitive student information is never sold, traded, or rented to commercial third parties or external marketing agencies.
            </p>

            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-royal-navy)', marginTop: '24px', marginBottom: '12px' }}>
              5. Student Records &amp; Results Privacy
            </h2>
            <p>
              In accordance with educational guidelines, individualized examination records, marks, and official board marksheets are disclosed exclusively to registered parents and students. Public documents such as Board Result Gazettes published on this website adhere to official state board notifications.
            </p>

            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-royal-navy)', marginTop: '24px', marginBottom: '12px' }}>
              6. Contact for Privacy Inquiries
            </h2>
            <p>
              If you have any questions or concerns regarding this privacy statement or our handling of personal information, please write to us at:
            </p>
            <p>
              <strong>The Scholars High School &amp; Junior College for Commerce</strong><br />
              Captain Suresh Samant Marg, Agarwal Estate, Opp. Hill Park Tower, Jogeshwari (West), Mumbai 400102<br />
              Email: <a href="mailto:info@thescholarsschool.edu.in">info@thescholarsschool.edu.in</a><br />
              Telephone: <a href="tel:+918976890569">+91 8976890569</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
