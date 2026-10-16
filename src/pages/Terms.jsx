import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Use | The Scholars School"
        description="Terms of use governing access and informational usage of The Scholars High School & Junior College for Commerce website."
        canonical="https://thescholarsschool.edu.in/terms-of-use/"
      />

      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">TERMS &amp; CONDITIONS</span>
          <h1>Website Terms of Use</h1>
          <p>
            Guidelines and legal conditions governing public access and usage of this institutional website.
          </p>
        </div>
      </div>

      <Breadcrumbs items={[{ label: 'Terms of Use', path: '/terms-of-use/' }]} />

      <section className="section section-white">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-royal-navy)', marginBottom: '12px' }}>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and browsing the official website of The Scholars High School &amp; Junior College for Commerce (located at https://thescholarsschool.edu.in/), you agree to abide by these Terms of Use and all applicable laws and regulations of Maharashtra, India.
            </p>

            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-royal-navy)', marginTop: '24px', marginBottom: '12px' }}>
              2. Informational Purpose
            </h2>
            <p>
              All materials, circulars, admission overviews, results summaries, curriculum notes, and photographs provided on this website are published for general public information regarding institutional offerings and achievements. While we make every reasonable effort to maintain updated records, official admission confirmations and fee receipts remain subject to physical verification at the school administrative desk.
            </p>

            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-royal-navy)', marginTop: '24px', marginBottom: '12px' }}>
              3. Intellectual Property Rights
            </h2>
            <p>
              The official school logo, emblems, graphics, textual copy, and campus photography displayed on this site are the property of The Scholars High School and Al-Qalam Educational Trust. Unauthorized copying, modification, or commercial reproduction of any asset without express written permission is prohibited.
            </p>

            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-royal-navy)', marginTop: '24px', marginBottom: '12px' }}>
              4. External Links &amp; Third-Party Services
            </h2>
            <p>
              This website may feature links to external websites such as board circular repositories, YouTube educational presentations, or social media pages. The school does not endorse or accept responsibility for the content or privacy practices of independent external websites.
            </p>

            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-royal-navy)', marginTop: '24px', marginBottom: '12px' }}>
              5. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              Any disputes or legal claims arising out of the use of this website shall be governed by the laws of Maharashtra, India, and shall fall within the exclusive jurisdiction of the competent courts of Mumbai.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
