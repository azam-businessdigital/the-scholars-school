import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ShieldCheck,
  Target,
  HeartHandshake,
  Building2,
  GraduationCap,
  Award,
  ArrowUpRight,
  Quote,
  Monitor,
  Wind,
  Cpu,
  FlaskConical,
  MoveVertical,
  Droplets,
  Sparkles
} from 'lucide-react';


import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SectionHeader from '../components/common/SectionHeader';
import { schoolData } from '../data/schoolData';
import { facilitiesData } from '../data/facilitiesData';
import PearlsOfWisdom from '../components/common/PearlsOfWisdom';

export default function About() {
  return (
    <>
      <SEO
        title="About Us - Legacy, Leadership & Values"
        description="Learn about The Scholars High School & Junior College, established in 1993 under Al-Qalam Educational Trust in Jogeshwari West, Mumbai."
        canonical="https://thescholarsschool.edu.in/about-us/"
      />

      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">ABOUT THE INSTITUTION</span>
          <h1>About The Scholars High School &amp; Junior College</h1>
          <p>
            Three decades of dedicated educational service: fostering academic excellence, moral integrity, and social responsibility in Mumbai since 1993.
          </p>
        </div>
      </div>

      <Breadcrumbs items={[{ label: 'About Us', path: '/about-us/' }]} />

      {/* SECTION: ABOUT THE SCHOLARS */}
      <section className="section section-white" aria-labelledby="about-heading">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'stretch', gap: 'var(--space-12)' }}>
            {/* Left Column: Overlapping Campus Photography & ESTD 1993 */}
            <div className="reveal-left">
              <div className="about-collage-wrap">
                <div className="about-year-badge">
                  <span>EST 1993</span>
                </div>
                <div className="about-image-collage">
                  <div className="about-thumb-main">
                    <img
                      src="/images/campus/building.jpg"
                      alt="The Scholars High School 7-story campus building at Hill Park"
                      loading="lazy"
                      width="600"
                      height="380"
                    />
                  </div>
                  <div className="about-thumb-secondary">
                    <img
                      src="/images/campus/banner2.jpg"
                      alt="Neuroscience Based Curriculum at The Scholars School"
                      loading="lazy"
                      width="360"
                      height="202"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Heading, Overview & Highlights */}
            <div className="reveal-right">
              <span className="eyebrow">ABOUT THE SCHOLARS</span>
              <h2 id="about-heading" className="section-title">
                Building Future Leaders Through Modern &amp; Moral Education
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '16px' }}>
                Welcome to <strong>The Scholars High School &amp; Junior College for Commerce</strong>, a distinguished English-medium institution established in 1993 under the patronage of the <strong>Al-Qalam Educational Trust (Regd. 1991)</strong> in Jogeshwari West, Mumbai.
              </p>
              <p style={{ marginBottom: '24px' }}>
                Spanning a purpose-built seven-floor campus in the tranquil surroundings of Hill Park, our institution nurtures over 2,000 school students and 150 junior college commerce scholars with dedicated faculty, smart interactive classrooms, and a proven 100% board passing record.
              </p>

              {/* 3 Core Highlights (Al-Irfan Style) */}
              <div className="about-features-list">
                <div className="about-feature-item">
                  <div className="about-feature-icon">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="about-feature-title">School Education (Pre-School to Class X SSC)</h3>
                    <p className="about-feature-text">
                      Comprehensive English-medium curriculum conforming to Maharashtra State Board guidelines, with holistic student growth and 100% pass outcomes.
                    </p>
                  </div>
                </div>

                <div className="about-feature-item">
                  <div className="about-feature-icon">
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 className="about-feature-title">Junior College for Commerce (Std XI - XII HSC)</h3>
                    <p className="about-feature-text">
                      Specialized higher secondary commerce education with dedicated faculty and separate divisions for boys and girls, preparing future finance leaders.
                    </p>
                  </div>
                </div>

                <div className="about-feature-item">
                  <div className="about-feature-icon">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h3 className="about-feature-title">Integrated Deeniyat &amp; Moral Character</h3>
                    <p className="about-feature-text">
                      Grounded moral tarbiyah, Quranic literacy, and ethical discipline under the trusted stewardship of Al-Qalam Educational Trust.
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-cta-actions">
                <Link to="/admissions/" className="btn btn-gold">
                  <span>Admission Enquiry</span>
                  <ArrowUpRight size={15} />
                </Link>
                <Link to="/contact-us/" className="btn btn-outline">
                  <span>Contact Our Campus</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section section-ivory">
        <div className="container">
          <SectionHeader
            eyebrow="OUR COMPASS"
            title="Vision &amp; Mission Statements"
            subtitle="Guiding principles formulated by the Al-Qalam Educational Trust to direct our growth and educational philosophy."
            centered
          />

          <div className="grid-2 stagger-group reveal-up">
            <div
              className="card reveal-up"
              style={{
                backgroundColor: '#fff',
                padding: 'var(--space-8)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border-subtle)',
                borderTop: '4px solid var(--color-champagne-gold)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div className="feature-icon-wrapper">
                  <Target size={24} />
                </div>
                <h3 className="card-title" style={{ margin: 0 }}>
                  Our Vision
                </h3>
              </div>
              <p>
                {schoolData.vision}
              </p>
            </div>

            <div
              className="card reveal-up"
              style={{
                backgroundColor: '#fff',
                padding: 'var(--space-8)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border-subtle)',
                borderTop: '4px solid var(--color-deep-blue)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div className="feature-icon-wrapper">
                  <HeartHandshake size={24} />
                </div>
                <h3 className="card-title" style={{ margin: 0 }}>
                  Our Mission
                </h3>
              </div>
              <p>
                {schoolData.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="section section-white">
        <div className="container">
          <SectionHeader
            eyebrow="GOVERNANCE & LEADERSHIP"
            title="Chairman's Message"
            subtitle="Guiding philosophy from the leadership of Al-Qalam Educational Trust."
            centered
          />

          <div className="leadership-box reveal-scale">
            <div style={{ textAlign: 'center' }}>
              <div className="leadership-avatar-wrap">
                <img
                  src={schoolData.leadership.chairman.image}
                  alt={schoolData.leadership.chairman.name}
                  className="leadership-avatar"
                  loading="lazy"
                  width="180"
                  height="200"
                />
              </div>
              <div style={{ marginTop: '12px' }}>
                <div className="leadership-author">{schoolData.leadership.chairman.name}</div>
                <div className="leadership-title">{schoolData.leadership.chairman.title}</div>
              </div>
            </div>

            <div className="leadership-text">
              <blockquote>
                &ldquo;{schoolData.leadership.chairman.message[0]}&rdquo;
              </blockquote>
              <p style={{ marginBottom: '14px' }}>
                {schoolData.leadership.chairman.message[1]}
              </p>
              <p>
                {schoolData.leadership.chairman.message[2]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Leadership & Academic Heads */}
      <section className="section academic-heads-section" aria-labelledby="academic-heads-heading">
        <div className="container">
          <SectionHeader
            eyebrow="ACADEMIC HEADS"
            title="School Leadership &amp; Principals"
            subtitle="Devoted academic heads steering each section towards educational achievement, intellectual curiosity, and moral discipline."
            centered
          />

          <div className="academic-heads-grid stagger-group reveal-up">
            {schoolData.leadership.principals.map((leader, i) => (
              <div key={i} className="academic-head-card card reveal-up">
                {/* Visual Header Banner */}
                <div className="head-card-hero">
                  <div className="head-hero-pattern" aria-hidden="true"></div>
                  <span className="head-section-badge">{leader.section}</span>
                </div>

                {/* Profile Image Overlapping the Banner */}
                <div className="head-avatar-wrap">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="head-avatar-img"
                    loading="lazy"
                    width="130"
                    height="140"
                  />
                  <div className="head-avatar-ring" aria-hidden="true"></div>
                </div>

                {/* Card Content Body */}
                <div className="head-card-body">
                  <h3 className="head-name">{leader.name}</h3>
                  <div className="head-designation">{leader.designation}</div>

                  <div className="head-gold-divider" aria-hidden="true"></div>

                  {/* Message Quote Box */}
                  <div className="head-quote-box">
                    <Quote className="head-quote-icon" size={16} aria-hidden="true" />
                    <p className="head-quote-text">
                      &ldquo;{leader.message}&rdquo;
                    </p>
                  </div>

                  {/* Competency & Focus Tags */}
                  {leader.focus && (
                    <div className="head-focus-tags" aria-label="Key Focus Areas">
                      {leader.focus.map((item, idx) => (
                        <span key={idx} className="head-focus-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pearls Of Wisdom (Islamic Heritage & Spiritual Values) */}
      <PearlsOfWisdom id="about-pearls-of-wisdom" />

      {/* Pillars of Foundation: Trustees */}
      <section className="section trustees-section" aria-labelledby="trustees-heading">
        <div className="container">
          <SectionHeader
            eyebrow="PILLARS OF THE FOUNDATION"
            title="Al-Qalam Educational Trust Management"
            subtitle="The visionary management and trustees guiding the governance, moral foundation, and sustainable development of The Scholars School."
            centered
          />

          <div style={{ textAlign: 'center', marginTop: '-8px', marginBottom: '28px' }}>
            <div className="trustees-trust-pill">
              <span className="trustees-trust-dot" aria-hidden="true" />
              <span>Al-Qalam Educational Trust (Regd. 1991) &bull; Governing Body</span>
            </div>
          </div>

          <div className="trustees-grid stagger-group reveal-up">
            {schoolData.trustees.map((trustee, i) => {
              const isExec = ['President', 'General Secretary', 'Treasurer', 'Founder Member'].includes(trustee.role);
              return (
                <div key={i} className={`trustee-card card reveal-up ${isExec ? 'executive' : ''}`}>
                  <div className="trustee-avatar-wrap">
                    <img
                      src={trustee.image}
                      alt={trustee.name}
                      className="trustee-avatar-img"
                      loading="lazy"
                      width="170"
                      height="212"
                    />
                  </div>

                  <h3 className="trustee-name">{trustee.name}</h3>

                  <div className="trustee-role-badge">{trustee.role}</div>

                  <span className="trustee-org-label">Al-Qalam Educational Trust</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION: CAMPUS INFRASTRUCTURE (ALIGNED WITH HOME PAGE) */}
      <section className="section section-ivory" aria-labelledby="facilities-heading">
        <div className="container">
          <SectionHeader
            eyebrow="CAMPUS INFRASTRUCTURE"
            title="Purpose-Built 7-Floor Educational Facility"
            subtitle="A modern, climate-controlled learning space situated in Hill Park, Jogeshwari West."
            centered
          />

          {/* Clean 2-Column Campus Showcase */}
          <div className="campus-showcase-grid">
            {/* Left: Building Spotlight Card */}
            <div className="campus-building-spotlight reveal-left">
              <div className="campus-img-container">
                <img
                  src="/images/campus/building.jpg"
                  alt="The Scholars School 7-Floor Campus Building at Hill Park, Jogeshwari West"
                  className="campus-building-img"
                  loading="lazy"
                />
                <div className="campus-img-badge">
                  <Building2 size={15} />
                  <span>Dedicated 7-Storey Campus</span>
                </div>
              </div>

              <div className="campus-spotlight-footer">
                <div className="campus-quick-stats">
                  <div className="quick-stat-item">
                    <span className="stat-number">7</span>
                    <span className="stat-label">Levels</span>
                  </div>
                  <div className="quick-stat-divider" />
                  <div className="quick-stat-item">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">AC Rooms</span>
                  </div>
                  <div className="quick-stat-divider" />
                  <div className="quick-stat-item">
                    <span className="stat-number">Lift</span>
                    <span className="stat-label">Equipped</span>
                  </div>
                  <div className="quick-stat-divider" />
                  <div className="quick-stat-item">
                    <span className="stat-number">RO</span>
                    <span className="stat-label">Purified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: 6 Simple Facility Cards (Concise, Less Text) */}
            <div className="campus-cards-grid">
              <div className="simple-facility-card">
                <div className="simple-facility-icon">
                  <Monitor size={22} />
                </div>
                <div className="simple-facility-content">
                  <h3 className="simple-facility-title">Smart Classrooms</h3>
                  <p className="simple-facility-desc">Interactive digital display panels and multimedia tools.</p>
                </div>
              </div>

              <div className="simple-facility-card">
                <div className="simple-facility-icon">
                  <Wind size={22} />
                </div>
                <div className="simple-facility-content">
                  <h3 className="simple-facility-title">100% Air-Conditioned</h3>
                  <p className="simple-facility-desc">Climate-controlled rooms for focused, comfortable study.</p>
                </div>
              </div>

              <div className="simple-facility-card">
                <div className="simple-facility-icon">
                  <Cpu size={22} />
                </div>
                <div className="simple-facility-content">
                  <h3 className="simple-facility-title">Computer &amp; IT Lab</h3>
                  <p className="simple-facility-desc">Modern workstations with coding and digital tools.</p>
                </div>
              </div>

              <div className="simple-facility-card">
                <div className="simple-facility-icon">
                  <FlaskConical size={22} />
                </div>
                <div className="simple-facility-content">
                  <h3 className="simple-facility-title">Science Laboratories</h3>
                  <p className="simple-facility-desc">Equipped Physics, Chemistry, and Biology practical labs.</p>
                </div>
              </div>

              <div className="simple-facility-card">
                <div className="simple-facility-icon">
                  <MoveVertical size={22} />
                </div>
                <div className="simple-facility-content">
                  <h3 className="simple-facility-title">Passenger Elevator</h3>
                  <p className="simple-facility-desc">Effortless multi-floor access across all 7 levels.</p>
                </div>
              </div>

              <div className="simple-facility-card">
                <div className="simple-facility-icon">
                  <Droplets size={22} />
                </div>
                <div className="simple-facility-content">
                  <h3 className="simple-facility-title">RO Purified Water</h3>
                  <p className="simple-facility-desc">Hygienic filtered drinking water on every floor.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Minimalist Bottom Bar */}
          <div className="campus-simple-cta">
            <div className="campus-cta-text">
              <Sparkles size={16} />
              <span>Experience our modern campus environment in Hill Park, Jogeshwari West.</span>
            </div>
            <div className="campus-cta-actions">
              <Link to="/contact-us/" className="btn btn-gold">
                <span>Schedule Campus Tour</span>
                <ArrowUpRight size={14} />
              </Link>
              <Link to="/admissions/" className="btn btn-outline">
                <span>Admission Enquiry</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section-navy text-center" style={{ textAlign: 'center' }}>
        <div className="container section-header text-center reveal-up" style={{ maxWidth: '750px', margin: '0 auto' }}>
          <h2 className="section-title text-center" style={{ color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Join The Scholars School Family Today
          </h2>
          <p className="section-subtitle" style={{ color: '#E2E8F0', margin: '0 auto 28px auto', textAlign: 'center' }}>
            We welcome parents to visit our campus at Hill Park, Jogeshwari West, and experience our learning environment firsthand.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions/" className="btn btn-gold btn-lg">
              Admission Enquiry
            </Link>
            <Link to="/contact-us/" className="btn btn-outline-white btn-lg">
              Contact School Office
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
