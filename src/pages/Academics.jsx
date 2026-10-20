import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, GraduationCap, CheckCircle } from 'lucide-react';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SectionHeader from '../components/common/SectionHeader';
import AcademicCard from '../components/cards/AcademicCard';
import { academicsData } from '../data/academicsData';

export default function Academics() {
  return (
    <>
      <SEO
        title="Academic Programs - Pre-School to Junior College"
        description="Comprehensive academic sections at The Scholars High School and Junior College for Commerce in Jogeshwari West, Mumbai."
        canonical="https://thescholarsschool.edu.in/academics/"
      />

      <div className="page-banner">
        <div className="container">
          <div className="mrak-banner-badge">
            <span className="mrak-banner-tag">ACADEMIC EXCELLENCE &bull; PRE-SCHOOL TO JUNIOR COLLEGE</span>
          </div>
          <h1>Comprehensive Academic Programs</h1>
          <p>
            From early sensory learning in MRAK Kids Pre School to specialized Higher Secondary Commerce education, discover our structured academic journey.
          </p>
        </div>
      </div>

      <Breadcrumbs items={[{ label: 'Academics', path: '/academics/' }]} />

      <section className="section section-white" id="academic-sections">
        <div className="container">
          <SectionHeader
            eyebrow="ACADEMIC DEPARTMENTS"
            title="Seven Dedicated Academic Sections"
            subtitle="From early childhood sensory exploration in MRAK Kids to specialized Higher Secondary Commerce preparation, explore our complete educational continuum."
            centered
          />

          <div className="grid-3 stagger-group reveal-up">
            {academicsData.map((section) => (
              <AcademicCard key={section.id} section={section} />
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Framework */}
      <section className="section section-ivory">
        <div className="container">
          <div className="grid-2 stagger-group reveal-up" style={{ alignItems: 'center' }}>
            <div className="section-header reveal-up">
              <span className="eyebrow">PEDAGOGICAL APPROACH</span>
              <h2 className="section-title">The Scholars Academic Framework</h2>
              <p>
                Our curriculum follows the standards established by the Maharashtra Department of Education, delivered fully in English medium. We complement state academic rigor with digital smart board learning, active laboratory practicals, and foundational moral values through our Deeniyat curriculum.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '16px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-champagne-gold)' }} />
                  <span>Maharashtra SSC State Board curriculum with 100% pass track record</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-champagne-gold)' }} />
                  <span>Junior College for Commerce preparing students for CA, CS, and university degrees</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-champagne-gold)' }} />
                  <span>Integrated Deeniyat moral education fostering character and ethics</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-champagne-gold)' }} />
                  <span>Separate boys and girls sections for focused senior learning</span>
                </li>
              </ul>
            </div>

            <div className="img-sheen-wrap reveal-up">
              <img
                src="/images/campus/teacher-head.jpg"
                alt="The Scholars School Teachers and Students"
                style={{
                  width: '100%',
                  borderRadius: 'var(--radius-sm)',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--color-border-subtle)'
                }}
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="section section-navy" style={{ textAlign: 'center' }}>
        <div className="container section-header text-center reveal-up" style={{ maxWidth: '750px' }}>
          <h2 className="section-title text-center" style={{ color: '#fff', marginBottom: '16px' }}>
            Ready to Enroll Your Child?
          </h2>
          <p className="section-subtitle" style={{ color: '#E2E8F0', margin: '0 auto 28px auto', textAlign: 'center' }}>
            Admission enquiries are now open for the upcoming academic session. Connect with our admission counselor today.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions/" className="btn btn-gold btn-lg">
              <span>Admission Enquiry Form</span>
              <ArrowUpRight size={18} />
            </Link>
            <Link to="/contact-us/" className="btn btn-outline-white btn-lg">
              <span>Visit Our Campus</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
