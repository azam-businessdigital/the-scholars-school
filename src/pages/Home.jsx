import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  BookOpen,
  Award,
  ShieldCheck,
  Compass,
  Download,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  CheckCircle2,
  ExternalLink,
  Monitor,
  Wind,
  Cpu,
  FlaskConical,
  Building2,
  MoveVertical,
  Droplets,
  Sparkles,
  School,
  GraduationCap,
  Image as ImageIcon,
  Play,
  Video,
  Newspaper,
  X,
  Maximize2
} from 'lucide-react';
import SEO from '../components/common/SEO';
import SectionHeader from '../components/common/SectionHeader';
import HeroSlider3D from '../components/common/HeroSlider3D';
import AcademicCard from '../components/cards/AcademicCard';
import { schoolData } from '../data/schoolData';
import { academicsData } from '../data/academicsData';
import { facilitiesData } from '../data/facilitiesData';
import { announcementsData } from '../data/announcementsData';
import { resultsData } from '../data/resultsData';
import { electronicMediaData, printMediaData } from '../data/mediaNewsData';
import { albumsData } from '../data/galleryData';
import PearlsOfWisdom from '../components/common/PearlsOfWisdom';


const academicSectionsHome = [
  {
    id: 'mrak-kids',
    title: 'MRAK - The Scholars Kids Pre School',
    badge: 'STD: Nursery, Mont – 2 & Sr.KG',
    heroImage: '/images/academics/pre-school.jpg',
    desc: 'Early childhood foundation with Jolly Phonics, sensory play, and moral values.',
    path: '/academics/mrak-kids/'
  },
  {
    id: 'primary',
    title: 'The Scholars Primary School',
    badge: 'Grades 1 to 4',
    heroImage: '/images/gallery/smart-board-2.jfif',
    desc: 'English medium curriculum with interactive smart classrooms.',
    path: '/academics/primary/'
  },
  {
    id: 'secondary',
    title: 'The Scholars High School',
    badge: 'Grades 5 to 10 (SSC)',
    heroImage: '/images/gallery/science-activity-4.jpeg',
    desc: 'Rigorous state board preparation with consistent 100% SSC results.',
    path: '/academics/secondary/'
  },
  {
    id: 'junior-college',
    title: 'The Scholars Junior College of Arts and Commerce',
    badge: 'XI & XII Arts & Commerce (HSC)',
    heroImage: '/images/gallery/college-g-1.jpg',
    desc: 'Higher secondary Arts & Commerce education with dedicated boys and girls sections.',
    path: '/academics/junior-college/girls/'
  },
  {
    id: 'deeniyat',
    title: 'Deeniyat Program',
    badge: 'All Grade Levels',
    heroImage: '/images/gallery/dastarkhaan-2.jfif',
    desc: 'Islamic frame of reference, Quranic Tajweed, and moral character.',
    path: '/academics/deeniyat/'
  }
];

export default function Home() {
  const [mediaFilter, setMediaFilter] = useState('all');
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [activePrintModal, setActivePrintModal] = useState(null);

  const homeMediaItems =
    mediaFilter === 'electronic'
      ? electronicMediaData.slice(0, 3)
      : mediaFilter === 'print'
      ? printMediaData.slice(0, 3)
      : [electronicMediaData[0], electronicMediaData[1], printMediaData[0]];

  return (
    <>
      <SEO
        title="Welcome to The Scholars High School and Junior College"
        description="Established in 1993 in Jogeshwari West, Mumbai under Al-Qalam Educational Trust. Quality English medium education with moral foundation from Pre-School to Junior College."
        ogImage="/images/campus/building.jpg"
      />

      {/* SECTION 1: 3D INTERACTIVE HERO SLIDER */}
      <HeroSlider3D />

      {/* VERIFIED STATS STRIP */}
      <section className="stats-strip" aria-label="Institutional Highlights">
        <div className="container">
          <div className="stats-grid stagger-group reveal-up">
            {schoolData.stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT THE SCHOOL (Al-Irfan Style Overlapping Collage) */}
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
                      alt="The Scholars High School 7-story campus building at Hill Park, Jogeshwari West"
                      loading="lazy"
                      width="600"
                      height="380"
                    />
                  </div>
                  <div className="about-thumb-secondary">
                    <img
                      src="/images/gallery/science-activity-4.jpeg"
                      alt="Hands-On Science Working Model Demonstration at The Scholars School"
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
                Welcome to <strong>The Scholars High School and Junior College</strong>, a distinguished English-medium institution established in 1993 under the patronage of the <strong>Al-Qalam Educational Trust (Regd. 1991)</strong> in Jogeshwari West, Mumbai.
              </p>
              <p style={{ marginBottom: '24px' }}>
                Spanning a purpose-built seven-floor campus in the tranquil surroundings of Hill Park, our institution nurtures over 2,000 school students and 150 junior college arts &amp; commerce scholars with dedicated faculty, smart interactive classrooms, and a proven 100% board passing record through modern &amp; moral education.
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
                    <h3 className="about-feature-title">The Scholars Junior College of Arts and Commerce (Std XI - XII HSC)</h3>
                    <p className="about-feature-text">
                      Specialized higher secondary Arts &amp; Commerce education with dedicated faculty and separate divisions for boys and girls, preparing future leaders.
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
                <Link to="/about-us/" className="btn btn-primary">
                  <span>More About Us</span>
                  <ArrowUpRight size={16} />
                </Link>
                <Link to="/admissions/" className="btn btn-outline">
                  <span>Admission Enquiry</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ADMISSIONS OPEN 2026-27 (START YOUR CHILD'S JOURNEY) */}
      <section className="section admission-highlight-section" aria-labelledby="admission-banner-heading">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 'var(--space-12)' }}>
            <div className="reveal-left">
              <span className="eyebrow">START YOUR CHILD&apos;S JOURNEY</span>
              <h2 id="admission-banner-heading" className="section-title">
                Admissions Open <br />For Academic Year 2026-27
              </h2>
              <p className="section-subtitle">
                Join The Scholars High School and Junior College, offering a harmonious blend of academic rigor, Islamic values, smart infrastructure, and proven state board distinction.
              </p>

              <div className="admission-features-grid stagger-group">
                <div className="admission-feature-chip">
                  <School size={20} className="chip-icon" />
                  <span>Pre-School to Class X (SSC)</span>
                </div>
                <div className="admission-feature-chip">
                  <GraduationCap size={20} className="chip-icon" />
                  <span>The Scholars Junior College of Arts and Commerce (HSC)</span>
                </div>
                <div className="admission-feature-chip">
                  <Building2 size={20} className="chip-icon" />
                  <span>7-Floor AC Campus &amp; Smart Classes</span>
                </div>
                <div className="admission-feature-chip">
                  <ShieldCheck size={20} className="chip-icon" />
                  <span>Islamic Environment &amp; Values</span>
                </div>
              </div>

              <div className="admission-cta-row">
                <Link to="/admissions/" className="btn btn-gold">
                  <span>Apply Now / Admission Enquiry</span>
                  <ArrowUpRight size={16} />
                </Link>
                <Link to="/contact-us/" className="btn btn-outline">
                  <span>Schedule Campus Visit</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            <div className="reveal-right">
              <div className="admission-thumb-wrap">
                <img
                  src="/images/gallery/sports-day-1.jpeg"
                  alt="Vibrant Student Life & Extracurricular Activities at The Scholars School"
                  className="admission-thumb-img"
                  loading="lazy"
                  width="600"
                  height="420"
                />
                <div className="admission-float-badge">
                  <span className="badge-year">2026-27</span>
                  <span className="badge-text">Admissions Open</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ACADEMIC SECTIONS (FOUNDATION TO HIGHER SECONDARY) */}
      <section className="section section-white" aria-labelledby="academics-heading">
        <div className="container">
          <SectionHeader
            eyebrow="FOUNDATION TO HIGHER SECONDARY"
            title="Explore Our Academic Sections"
            subtitle="Structured learning pathways from early childhood to higher secondary with 100% board results."
            centered
          />

          <div className="grid-3 stagger-group reveal-up">
            {academicSectionsHome.map((section) => (
              <AcademicCard key={section.id} section={section} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            <Link to="/academics/" className="btn btn-primary">
              <span>View All Academic Programs</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE US (Al-Irfan 6-Card Modern Grid) */}
      <section className="section section-ivory" aria-labelledby="why-choose-heading">
        <div className="container">
          <SectionHeader
            eyebrow="WHY CHOOSE US"
            title="Why Choose The Scholars High School"
            subtitle="We provide a balanced educational environment focused on academic excellence, Islamic moral values, modern infrastructure, and student character."
            centered
          />

          <div className="grid-3 stagger-group reveal-up">
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <Award size={28} />
              </div>
              <h3 className="why-choose-title">100% Board Pass Record</h3>
              <p className="why-choose-text">
                100% pass outcomes in SSC (X) &amp; HSC Arts &amp; Commerce (XII).
              </p>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <ShieldCheck size={28} />
              </div>
              <h3 className="why-choose-title">Values-Based Deeniyat</h3>
              <p className="why-choose-text">
                Quranic literacy, Hadith principles, and moral tarbiyah.
              </p>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <Building2 size={28} />
              </div>
              <h3 className="why-choose-title">7-Floor Modern Campus</h3>
              <p className="why-choose-text">
                Purpose-built campus with elevator, CCTV, and RO water.
              </p>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <Monitor size={28} />
              </div>
              <h3 className="why-choose-title">AC Smart Classrooms</h3>
              <p className="why-choose-text">
                Climate-controlled spaces with interactive digital boards.
              </p>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <Cpu size={28} />
              </div>
              <h3 className="why-choose-title">Science &amp; IT Labs</h3>
              <p className="why-choose-text">
                Equipped computer, Physics, Chemistry, and Biology labs.
              </p>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <Compass size={28} />
              </div>
              <h3 className="why-choose-title">Holistic Growth &amp; Sports</h3>
              <p className="why-choose-text">
                Annual sports, creative arts, and confidence building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: LEADERSHIP MESSAGE */}
      <section className="section section-white" aria-labelledby="leadership-heading">
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
                &ldquo;Can those with knowledge be equal to those without it? This is the fundamental question posed in the Holy Quran. Indeed, they cannot be equal. Education is the single most transformative tool to change society, cultivate moral discernment, and create a brighter future.&rdquo;
              </blockquote>
              <p>
                {schoolData.leadership.chairman.message[2]}
              </p>
              <div style={{ marginTop: '16px' }}>
                <Link to="/about-us/" className="btn btn-outline btn-sm">
                  <span>Read Full Message &amp; Trustees</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: PEARLS OF WISDOM (ISLAMIC HERITAGE & SPIRITUAL VALUES) */}
      <PearlsOfWisdom id="home-pearls-of-wisdom" />

      {/* SECTION 6: REDESIGNED CAMPUS INFRASTRUCTURE (SIMPLE, LESS TEXT) */}
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
            <div className="campus-cards-grid stagger-group reveal-right">
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

      {/* SECTION 7: LATEST ANNOUNCEMENTS (MARQUEE SHOWCASE) */}
      <section className="section section-white" aria-labelledby="notices-heading" style={{ overflow: 'hidden' }}>
        <div className="container">
          <div className="reveal-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-8)', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                <span className="eyebrow" style={{ marginBottom: 0 }}>OFFICIAL NOTICES &amp; CIRCULARS</span>
                <span className="live-notice-pill">
                  <span className="live-pulse-dot" />
                  <span>Live Notice Board</span>
                </span>
              </div>
              <h2 id="notices-heading" className="section-title" style={{ marginBottom: 0 }}>
                Latest Announcements
              </h2>
            </div>
            <Link to="/announcements/" className="btn btn-outline">
              <span>View Notice Archive</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Infinite Smooth Marquee Track */}
        <div className="announcements-marquee-wrapper" role="region" aria-label="Latest announcements ticker">
          <div className="announcements-marquee-track">
            {[...announcementsData, ...announcementsData].map((notice, idx) => (
              <article key={`${notice.id}-${idx}`} className="marquee-notice-card">
                <div className="marquee-notice-header">
                  <span className="marquee-notice-badge">
                    {notice.category}
                  </span>
                  <div className="marquee-notice-date">
                    <Calendar size={13} />
                    <span>{notice.date}</span>
                  </div>
                </div>

                <h3 className="marquee-notice-title" title={notice.title}>
                  {notice.title}
                </h3>

                <p className="marquee-notice-summary">
                  {notice.summary}
                </p>

                <div className="marquee-notice-actions">
                  {notice.documentUrl ? (
                    <a
                      href={notice.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="marquee-doc-pill"
                      title="Download PDF document"
                    >
                      <Download size={13} />
                      <span>Download PDF</span>
                    </a>
                  ) : (
                    <span style={{ fontSize: '11.5px', color: 'var(--color-slate-grey)' }}>
                      Official Notice
                    </span>
                  )}
                  <Link to="/announcements/" className="marquee-read-link">
                    <span>Read Notice</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: RESULTS AND ACHIEVEMENTS */}
      <section className="section section-navy" aria-labelledby="results-heading">
        <div className="container">
          <SectionHeader
            eyebrow="ACADEMIC TRACK RECORD"
            title="100% Board Results &amp; Academic Honors"
            subtitle="The Scholars High School and Junior College take pride in achieving 100% passing results in the Maharashtra State Board examinations every year."
            centered
          />

          <div className="grid-3 stagger-group reveal-up">
            {resultsData.map((result) => (
              <div
                key={result.id}
                className="modern-result-card"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--color-champagne-gold)', fontWeight: 700 }}>
                    {result.academicYear}
                  </span>
                  <span
                    style={{
                      fontSize: '18px',
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--color-champagne-gold)',
                      fontWeight: 700
                    }}
                  >
                    {result.passingPercentage} Result
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '10px' }}>
                  {result.exam}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#CBD5E1', marginBottom: '16px', flexGrow: 1 }}>
                  {result.description}
                </p>

                <a
                  href={result.documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-sm"
                  style={{ width: '100%', marginTop: 'auto' }}
                >
                  <Download size={14} />
                  <span>Download Official Gazette</span>
                </a>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
            <Link to="/results/" className="btn btn-outline-white">
              <span>View Detailed Results Archive</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9: NEWS & MEDIA (ELECTRONIC YOUTUBE + PRINT NEWSPAPER CLIPPINGS) */}
      <section className="section section-ivory" aria-labelledby="media-heading">
        <div className="container">
          <div className="reveal-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-8)', flexWrap: 'wrap', gap: '16px' }}>
            <div className="section-header" style={{ marginBottom: 0 }}>
              <span className="eyebrow">BROADCAST &amp; PRESS COVERAGE</span>
              <h2 id="media-heading" className="section-title" style={{ marginBottom: 0 }}>
                News &amp; Media
              </h2>
            </div>
            <Link to="/media-news/" className="btn btn-outline">
              <span>View All News &amp; Media</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Filter Tabs */}
          <div className="filter-bar reveal-up" role="tablist" aria-label="Media category filter" style={{ marginBottom: 'var(--space-8)' }}>
            <button
              type="button"
              className={`filter-btn ${mediaFilter === 'all' ? 'active' : ''}`}
              onClick={() => setMediaFilter('all')}
              role="tab"
              aria-selected={mediaFilter === 'all'}
            >
              All Coverage
            </button>
            <button
              type="button"
              className={`filter-btn ${mediaFilter === 'electronic' ? 'active' : ''}`}
              onClick={() => setMediaFilter('electronic')}
              role="tab"
              aria-selected={mediaFilter === 'electronic'}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Video size={14} />
              <span>Electronic Media (YouTube)</span>
            </button>
            <button
              type="button"
              className={`filter-btn ${mediaFilter === 'print' ? 'active' : ''}`}
              onClick={() => setMediaFilter('print')}
              role="tab"
              aria-selected={mediaFilter === 'print'}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Newspaper size={14} />
              <span>Print Media (Newspaper Cuttings)</span>
            </button>
          </div>

          {/* Media Grid */}
          <div className="media-news-grid stagger-group reveal-up">
            {homeMediaItems.map((item) => (
              <article
                key={item.id}
                className="card media-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  if (item.type === 'electronic') {
                    setActiveVideoModal(item);
                  } else {
                    setActivePrintModal(item);
                  }
                }}
              >
                <div
                  className="card-media"
                  style={{
                    height: '210px',
                    position: 'relative',
                    overflow: 'hidden',
                    background: '#0B192C'
                  }}
                >
                  <img
                    src={item.type === 'electronic' ? item.thumbnail : item.image}
                    alt={item.title}
                    loading="lazy"
                    width="400"
                    height="210"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />

                  {/* Type Badge */}
                  {item.type === 'electronic' ? (
                    <span className="media-type-badge-electronic">
                      <Play size={10} fill="#fff" />
                      <span>YouTube</span>
                    </span>
                  ) : (
                    <span className="media-type-badge-print">
                      <Newspaper size={11} />
                      <span>Press Clipping</span>
                    </span>
                  )}

                  {/* Play / Zoom Icon Overlay */}
                  <div className="media-play-overlay">
                    {item.type === 'electronic' ? (
                      <div className="media-play-icon-wrap" title="Play Video">
                        <Play size={22} fill="#fff" style={{ marginLeft: '3px' }} />
                      </div>
                    ) : (
                      <div className="media-zoom-icon-wrap" title="View Newspaper Clipping">
                        <Maximize2 size={18} />
                      </div>
                    )}
                  </div>
                </div>

                <div className="card-body" style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'var(--color-slate-grey)' }}>
                      <Calendar size={13} />
                      <span>{item.date}</span>
                    </div>

                    <span style={{ fontSize: '11.5px', fontWeight: 600, color: 'var(--color-champagne-gold)' }}>
                      {item.type === 'electronic' ? item.source : item.publication}
                    </span>
                  </div>

                  <h3 className="card-title" style={{ marginBottom: '10px', fontSize: '1.25rem', lineHeight: 1.35 }}>
                    {item.title}
                  </h3>

                  <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid rgba(20, 43, 74, 0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13px',
                        fontWeight: 700,
                        color: item.type === 'electronic' ? '#DC2626' : 'var(--color-royal-navy)'
                      }}
                    >
                      {item.type === 'electronic' ? (
                        <>
                          <Play size={14} fill="#DC2626" />
                          <span>Watch YouTube Video</span>
                        </>
                      ) : (
                        <>
                          <Maximize2 size={14} />
                          <span>View Newspaper Clipping</span>
                        </>
                      )}
                    </span>

                    {item.type === 'electronic' && (
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(item.youtubeUrl, '_blank', 'noopener,noreferrer');
                        }}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '11.5px',
                          color: 'var(--color-slate-grey)'
                        }}
                      >
                        <ExternalLink size={12} />
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            <Link to="/media-news/" className="btn btn-outline">
              <span>Explore All News &amp; Media Coverage</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Video Lightbox Modal for Homepage */}
      {activeVideoModal && (
        <div
          className="media-modal-backdrop"
          onClick={() => setActiveVideoModal(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeVideoModal.title}
        >
          <div className="media-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="media-modal-close-btn"
              onClick={() => setActiveVideoModal(null)}
              aria-label="Close video modal"
            >
              <X size={20} />
            </button>

            <div className="media-modal-video-wrap">
              <iframe
                src={activeVideoModal.embedUrl}
                title={activeVideoModal.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="media-modal-body">
              <div className="media-modal-body-content">
                <span style={{ fontSize: '11px', color: 'var(--color-champagne-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {activeVideoModal.source} &bull; {activeVideoModal.date}
                </span>
                <h3>{activeVideoModal.title}</h3>
                <p>{activeVideoModal.description}</p>
              </div>

              <div className="media-modal-actions">
                <a
                  href={activeVideoModal.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-sm"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink size={14} />
                </a>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => setActiveVideoModal(null)}
                  style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff', padding: '6px 12px' }}
                  aria-label="Close modal"
                >
                  <X size={14} />
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Print Clipping Lightbox Modal for Homepage */}
      {activePrintModal && (
        <div
          className="media-modal-backdrop"
          onClick={() => setActivePrintModal(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activePrintModal.title}
        >
          <div className="print-modal-box" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', borderBottom: '1px solid var(--color-border-subtle)', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ flex: '1 1 200px', minWidth: 0 }}>
                <span style={{ fontSize: '12px', color: 'var(--color-champagne-gold)', fontWeight: 700, textTransform: 'uppercase' }}>
                  {activePrintModal.publication} &bull; {activePrintModal.date}
                </span>
                <h3 style={{ fontSize: '1.125rem', color: 'var(--color-royal-navy)', margin: '2px 0 0 0', wordBreak: 'break-word' }}>
                  {activePrintModal.title}
                </h3>
              </div>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setActivePrintModal(null)}
                aria-label="Close clipping modal"
                style={{ padding: '6px 12px' }}
              >
                <X size={16} />
                <span>Close</span>
              </button>
            </div>

            <div className="print-modal-img-wrap">
              <img
                src={activePrintModal.image}
                alt={activePrintModal.title}
                className="print-modal-img"
              />
            </div>

            <div className="print-modal-info">
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-slate-grey-dark)', margin: 0, lineHeight: 1.6 }}>
                {activePrintModal.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 10: LIFE AT THE SCHOLARS SCHOOL (EVENT ALBUMS) */}
      <section className="section section-white" aria-labelledby="gallery-heading">
        <div className="container">
          <SectionHeader
            eyebrow="EVENT ALBUMS"
            title="Life at The Scholars School"
            subtitle="Explore authentic campus life, academic celebrations, and student assemblies across our curated event albums."
            centered
          />

          {/* Minimal Album Cards Grid */}
          <div className="albums-grid stagger-group reveal-up">
            {albumsData.slice(0, 6).map((album) => (
              <Link
                key={album.id}
                to={`/gallery/?album=${album.id}`}
                className="album-card home-album-card"
                aria-label={`Open event album: ${album.title}`}
              >
                {/* Album Cover with Layered Visual */}
                <div className="album-card-cover-wrap">
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    loading="lazy"
                    width="400"
                    height="200"
                    className="album-card-cover-img"
                  />
                  <div className="album-card-overlay" />

                  {/* Photo Count Badge */}
                  <div className="album-photo-count-badge">
                    <ImageIcon size={14} />
                    <span>{album.photos.length} Photos</span>
                  </div>

                  {/* Category Badge */}
                  <span className="album-cover-category">
                    {album.category}
                  </span>
                </div>

                {/* Minimal Album Body */}
                <div className="album-card-body home-album-body">
                  <div className="album-card-meta">
                    <span className="album-date-item">
                      <Calendar size={13} />
                      <span>{album.eventDate}</span>
                    </span>
                    <span className="album-location-item">
                      <MapPin size={13} />
                      <span>{album.location}</span>
                    </span>
                  </div>

                  <h3 className="album-card-title">{album.title}</h3>

                  <div className="album-card-footer">
                    <span className="album-open-link">
                      <span>Explore Album</span>
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            <Link to="/gallery/" className="btn btn-outline">
              <span>View All Albums &amp; Full Gallery</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 11: CAMPUS VISIT CTA */}
      <section className="section section-navy text-center" aria-labelledby="cta-heading" style={{ borderTop: '4px solid var(--color-champagne-gold)', textAlign: 'center' }}>
        <div className="container text-center reveal-scale" style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>
          <span className="eyebrow" style={{ display: 'inline-block' }}>EXPERIENCE OUR CAMPUS</span>
          <h2 id="cta-heading" className="section-title text-center" style={{ color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Empowering Every Student Toward Academic &amp; Moral Excellence.
          </h2>
          <p className="section-subtitle" style={{ color: '#E2E8F0', margin: '0 auto 32px auto', textAlign: 'center' }}>
            Discover an authentic learning environment where disciplined education meets strong moral character. We welcome parents and students to visit our 7-floor campus in Hill Park, Jogeshwari West.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact-us/" className="btn btn-gold btn-lg">
              <span>Schedule a Campus Visit</span>
              <ArrowUpRight size={18} />
            </Link>
            <Link to="/admissions/" className="btn btn-outline-white btn-lg">
              <span>Online Admission Form</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 12: CONTACT INFORMATION */}
      <section className="section section-ivory" aria-labelledby="contact-heading">
        <div className="container">
          <SectionHeader
            eyebrow="VISIT OUR CAMPUS"
            title="School Contact &amp; Location"
            subtitle="Located in the accessible surroundings of Hill Park, Jogeshwari West, Mumbai."
            centered
          />

          <div className="grid-2" style={{ alignItems: 'stretch' }}>
            <div
              className="reveal-left"
              style={{
                backgroundColor: '#fff',
                padding: 'clamp(16px, 3.5vw, var(--space-8))',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border-subtle)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h3 className="card-title" style={{ marginBottom: '16px' }}>
                  {schoolData.name}
                </h3>

                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                  <MapPin size={20} style={{ color: 'var(--color-champagne-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--color-royal-navy)' }}>Official Address:</strong>
                    <p className="card-text" style={{ margin: '4px 0 0 0' }}>
                      {schoolData.location.fullAddress}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                  <Phone size={20} style={{ color: 'var(--color-champagne-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--color-royal-navy)' }}>Contact Telephones:</strong>
                    <div
                      className="card-text campus-card-links"
                      style={{
                        margin: '4px 0 0 0',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '4px 8px',
                        alignItems: 'center'
                      }}
                    >
                      {schoolData.phones.map((phone, idx) => (
                        <React.Fragment key={phone}>
                          <a href={`tel:${phone.replace(/\s+/g, '')}`}>
                            {phone}
                          </a>
                          {idx < schoolData.phones.length - 1 && (
                            <span style={{ color: 'var(--color-slate-grey)', opacity: 0.7, userSelect: 'none' }} aria-hidden="true">
                              /
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                  <Mail size={20} style={{ color: 'var(--color-champagne-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--color-royal-navy)' }}>Official Email:</strong>
                    <div className="card-text campus-card-links" style={{ margin: '4px 0 0 0' }}>
                      <a href="mailto:alqalams26@gmail.com">alqalams26@gmail.com</a>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                  <Clock size={20} style={{ color: 'var(--color-champagne-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--color-royal-navy)' }}>Visiting &amp; Office Hours:</strong>
                    <div className="card-text" style={{ margin: '4px 0 0 0', fontSize: '0.875rem', lineHeight: 1.5 }}>
                      <div><strong>Visiting Hours:</strong> Mon to Fri: 9:30 AM to 11:30 AM</div>
                      <div><strong>Office Hours:</strong> Mon to Sat: 9:00 AM to 3:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '16px' }}>
                <Link to="/contact-us/" className="btn btn-primary" style={{ width: '100%' }}>
                  <span>View Complete Contact Form &amp; Directions</span>
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>

            <div
              className="reveal-right"
              style={{
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                border: '1px solid var(--color-border-subtle)',
                boxShadow: 'var(--shadow-sm)',
                minHeight: '340px'
              }}
            >
              <iframe
                title="The Scholars High School Campus Location Map"
                src={schoolData.location.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
