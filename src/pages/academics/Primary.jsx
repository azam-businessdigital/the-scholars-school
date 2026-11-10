import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Users,
  Sparkles,
  BookOpen,
  Heart,
  Palette,
  Puzzle,
  Sun,
  Smile,
  ShieldCheck,
  Laptop,
  GraduationCap
} from 'lucide-react';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import SectionHeader from '../../components/common/SectionHeader';
import { academicsData } from '../../data/academicsData';
import { schoolData } from '../../data/schoolData';

export default function Primary() {
  const data = academicsData.find((a) => a.id === 'primary');
  const primaryIncharge = schoolData.leadership.principals.find((p) => p.id === 'primary-incharge') || schoolData.leadership.principals[1];

  const primaryGallery = [
    {
      img: '/images/gallery/Pebble Painting - Primary Section/WhatsApp Image 2026-10-29 at 16.12.21.jpeg',
      title: 'Creative Pebble Painting & Stone Art',
      desc: 'Primary students showcasing imaginative stone art, color blending, and hand-painted creative designs.'
    },
    {
      img: '/images/gallery/Group Activity -Primary Section/WhatsApp Image 2026-10-29 at 16.09.58.jpeg',
      title: 'Collaborative Group Project & Chart Work',
      desc: 'Students collaborating in teams on creative educational charts, craft cutouts, and interactive displays.'
    },
    {
      img: '/images/gallery/Group Activity -Primary Section/WhatsApp Image 2026-10-29 at 16.11.29.jpeg',
      title: 'Teacher-Guided Interactive Learning',
      desc: 'Dedicated faculty mentorship during hands-on project sessions, fostering teamwork and peer cooperation.'
    },
    {
      img: '/images/gallery/Examination hall primary section/exam-hall-primary-1.jpg',
      title: 'Dedicated Examination Hall & Quiet Assessments',
      desc: 'Spacious, organized examination hall seating arrangement fostering academic discipline, calm focus, and integrity.'
    },
    {
      img: '/images/gallery/smart-board-2.jfif',
      title: 'Interactive Smart Classroom Lessons',
      desc: 'Audio-visual interactive whiteboards bringing science, geography, and language to life with vivid clarity.'
    },
    {
      img: '/images/gallery/computer-lab-1.jfif',
      title: 'Modern Hands-On Computer Lab',
      desc: 'Dedicated IT periods teaching essential keyboarding, digital literacy, and foundational computer concepts.'
    }
  ];

  const dailyRoutine = [
    {
      title: 'Afternoon Assembly & Du\'aa',
      desc: 'School prayer, Surah recitation, moral thought for the day, and respectful national anthem.'
    },
    {
      title: 'Language Arts & Reading Immersion',
      desc: 'English grammar, vocabulary expansion, reading comprehension, and pronunciation drills.'
    },
    {
      title: 'Mathematics & Mental Arithmetic',
      desc: 'Mental math drills, conceptual arithmetic, geometric patterns, and problem-solving exercises.'
    },
    {
      title: 'Wholesome Recess & Refreshment',
      desc: 'Nourishing snacks, clean handwashing etiquette, and supervised social interaction with peers.'
    },
    {
      title: 'Science, EVS & Digital Lab',
      desc: 'Smart board science visual lessons, environmental studies, and hands-on computer lab sessions.'
    },
    {
      title: 'Deeniyat, Creative Arts & Dismissal',
      desc: 'Quranic recitation, Hadith reflections, creative arts, homework review, and orderly departure.'
    }
  ];

  const learningDomains = [
    {
      icon: <BookOpen size={22} />,
      title: 'Languages: English, Hindi & Marathi',
      desc: 'Structured reading comprehension, creative writing, formal grammar, and trilingual fluency meeting Maharashtra state standards.'
    },
    {
      icon: <Puzzle size={22} />,
      title: 'Mathematics & Mental Logic',
      desc: 'Conceptual arithmetic, mental math drills, geometry basics, measurement, and practical everyday problem-solving skills.'
    },
    {
      icon: <Sun size={22} />,
      title: 'Environmental Studies & Science',
      desc: 'Observational experiments, living ecosystems, human physiology, environmental conservation, and social sciences.'
    },
    {
      icon: <Heart size={22} />,
      title: 'Deeniyat & Islamic Ethics (Akhlaq)',
      desc: 'Quranic recitation with Tajweed, selected Hadith memorization, daily Du\'aas, and foundational character building.'
    },
    {
      icon: <Laptop size={22} />,
      title: 'Computer Literacy & Digital Skills',
      desc: 'Practical computer lab sessions, touch typing, basic operating systems, and safe digital usage awareness.'
    },
    {
      icon: <Palette size={22} />,
      title: 'Creative Arts, Craft & Physical Agility',
      desc: 'Annual leaf art competitions, drawing, paper craft, physical fitness drills, and cooperative sportsmanship.'
    }
  ];

  const salientFeatures = [
    'Separate instructional sections for boys and girls ensuring focused academic attention',
    'Interactive Smart Classrooms with multimedia audio-visual lesson delivery',
    'Fully equipped computer laboratory with individual student workstations',
    'Integrated Deeniyat program imparting Quranic literacy, Hadith, and moral ethics',
    'Continuous formative assessments and transparent parent-teacher review sessions',
    'Air-conditioned campus with lift access, CCTV coverage, and attentive floor care'
  ];

  return (
    <>
      <SEO
        title="The Scholars Primary School - Grades 1 to 4 | The Scholars School"
        description="The Scholars Primary School at Jogeshwari West. Comprehensive English medium curriculum following Maharashtra Department of Education standards with separate boys and girls faculty."
        canonical="https://thescholarsschool.edu.in/academics/primary/"
      />

      {/* Page Banner with Primary Badge */}
      <div className="page-banner">
        <div className="container">
          <div className="mrak-banner-badge">
            <span className="mrak-banner-tag">THE SCHOLARS PRIMARY SCHOOL &bull; GRADES 1 TO 4 &bull; AGES 6 - 10 YEARS</span>
          </div>
          <h1>The Scholars Primary School: Grades 1 to 4</h1>
          <p>
            Building strong reading comprehension, quantitative logic, observational science, and timeless Islamic character in an engaging English-medium environment.
          </p>
        </div>
      </div>

      <Breadcrumbs
        items={[
          { label: 'Academics', path: '/academics/' },
          { label: 'The Scholars Primary School', path: '/academics/primary/' }
        ]}
      />

      {/* SECTION 1: ABOUT PRIMARY SECTION & CAMPUS HERO */}
      <section className="section section-white" id="section-overview">
        <div className="container">
          <div className="grid-2 academic-hero-grid stagger-group reveal-up" style={{ alignItems: 'center', gap: 'var(--space-12)' }}>
            <div className="section-header reveal-left">
              <span className="eyebrow">ACADEMIC FOUNDATION &amp; GROWTH</span>
              <h2 className="section-title">Where Knowledge, Character &amp; Confidence Take Shape</h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: 'var(--color-slate-grey-dark)', marginBottom: '16px' }}>
                {data.overview}
              </p>
              <p style={{ color: 'var(--color-slate-grey)', lineHeight: '1.65', marginBottom: '18px' }}>
                At The Scholars Primary School, children learn in an encouraging, lively environment. We follow the English-medium Maharashtra State Board syllabus with completely separate classes and sections for boys and girls. Our teachers bring concepts alive using interactive smart boards, hands-on math, and daily moral lessons from our Deeniyat curriculum.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: 'rgba(20, 43, 74, 0.04)',
                  border: '1px solid rgba(20, 43, 74, 0.1)',
                  borderRadius: '10px',
                  padding: '10px 16px',
                  marginBottom: '22px',
                  fontSize: '0.875rem',
                  color: 'var(--color-royal-navy)',
                  fontWeight: 600
                }}
              >
                <ShieldCheck size={18} style={{ color: 'var(--color-champagne-gold)', flexShrink: 0 }} />
                <span>Dedicated Separate Classes: Boys and girls attend entirely independent classrooms and sections.</span>
              </div>

              <div className="mrak-badges-row stagger-group reveal-up">
                <div className="mrak-stat-pill">
                  <div className="mrak-stat-icon sun">
                    <GraduationCap size={19} />
                  </div>
                  <div className="mrak-stat-content">
                    <span className="mrak-stat-label">Grade Levels</span>
                    <div className="mrak-stat-value">Grades 1 to 4</div>
                  </div>
                </div>

                <div className="mrak-stat-pill">
                  <div className="mrak-stat-icon clock">
                    <Clock size={19} />
                  </div>
                  <div className="mrak-stat-content">
                    <span className="mrak-stat-label">Shift Timings</span>
                    <div className="mrak-stat-value">Afternoon Shift</div>
                  </div>
                </div>

                <div className="mrak-stat-pill">
                  <div className="mrak-stat-icon users">
                    <Users size={19} />
                  </div>
                  <div className="mrak-stat-content">
                    <span className="mrak-stat-label">Campus Setup</span>
                    <div className="mrak-stat-value">Separate Boys &amp; Girls Classes</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="academic-hero-media card reveal-right img-sheen-wrap">
              <div className="academic-hero-floating-badge">
                <Sparkles size={14} /> Smart Classrooms &amp; Labs
              </div>
              <img
                src="/images/gallery/smart-board-2.jfif"
                alt="Primary students learning interactively with smart board and teacher"
                className="academic-hero-img"
                loading="lazy"
                width="600"
                height="380"
              />
              <div className="academic-hero-caption">
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-royal-navy)', fontSize: '0.9375rem' }}>
                    Interactive Smart Board Learning
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-slate-grey)', marginTop: '2px' }}>
                    Bringing textbook concepts to life through vivid multimedia visuals, scientific inquiry, and active participation.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRIMARY INCHARGE'S MESSAGE */}
      <section className="section mrak-principal-section">
        <div className="container">
          <SectionHeader
            eyebrow="PRIMARY INCHARGE'S MESSAGE"
            title="Inspiring Excellence in Academics &amp; Character"
            subtitle="Guiding philosophy from our Primary Section leadership."
            centered
          />

          <div className="mrak-principal-card">
            <div className="mrak-principal-media">
              <img
                src={primaryIncharge.image}
                alt={primaryIncharge.designation}
                className="mrak-principal-avatar"
                loading="lazy"
                width="170"
                height="190"
              />
              <div className="mrak-principal-name">{primaryIncharge.designation}</div>
              <div className="mrak-principal-role">{primaryIncharge.section}</div>
              <span style={{ fontSize: '11px', color: 'var(--color-slate-grey)', marginTop: '4px' }}>
                {primaryIncharge.section}
              </span>
            </div>

            <div className="mrak-principal-content">
              <h3 className="mrak-principal-heading">
                Empowering Every Student to Think, Discover &amp; Lead
              </h3>
              <p className="mrak-principal-quote">
                &ldquo;{primaryIncharge.message}&rdquo;
              </p>
              <div className="mrak-principal-pillars">
                <span className="mrak-pillar-chip">&bull; Concept-Based Mastery</span>
                <span className="mrak-pillar-chip">&bull; Deeniyat &amp; Quranic Ethics</span>
                <span className="mrak-pillar-chip">&bull; Dual-Shift Faculty Guidance</span>
                <span className="mrak-pillar-chip">&bull; Digital Lab &amp; Smart Classrooms</span>
                <span className="mrak-pillar-chip">&bull; Parent-Teacher Collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VIBRANT PRIMARY PHOTO GALLERY */}
      <section className="section section-ivory">
        <div className="container">
          <SectionHeader
            eyebrow="CAMPUS LIFE &amp; LEARNING IN ACTION"
            title="Glimpses of Active Primary Schooling"
            subtitle="Step into our digitally enabled classrooms, hands-on computer labs, and meet our dedicated faculty teams."
            centered
          />

          <div className="mrak-gallery-grid">
            {primaryGallery.map((item, i) => (
              <div key={i} className="mrak-gallery-card">
                <img
                  src={item.img}
                  alt={item.title}
                  className="mrak-gallery-img"
                  loading="lazy"
                  width="400"
                  height="230"
                />
                <div className="mrak-gallery-info">
                  <h3 className="mrak-gallery-title">{item.title}</h3>
                  <p className="mrak-gallery-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: 6 CORE LEARNING DOMAINS */}
      <section className="section section-white">
        <div className="container">
          <SectionHeader
            eyebrow="MAHARASHTRA STATE BOARD SYLLABUS"
            title="The 6 Pillars of Primary Academic Excellence"
            subtitle="A comprehensive curriculum building intellectual discipline, language versatility, and ethical integrity."
            centered
          />

          <div className="academic-domain-grid">
            {learningDomains.map((domain, i) => (
              <div key={i} className="academic-domain-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div className="academic-domain-icon-wrap">
                    {domain.icon}
                  </div>
                  <span className="academic-domain-tag">Pillar 0{i + 1}</span>
                </div>
                <h3 className="academic-domain-title">
                  {domain.title}
                </h3>
                <p className="academic-domain-desc">
                  {domain.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: A DAY IN PRIMARY SECTION (ROUTINE) */}
      <section className="section section-ivory">
        <div className="container">
          <SectionHeader
            eyebrow="STRUCTURED DAILY TIMETABLE"
            title="A Day in the Primary Section: Disciplined &amp; Inspiring"
            subtitle="A balanced school day alternating core academic periods with Deeniyat, practical lab learning, and physical recreation."
            centered
          />

          <div className="mrak-routine-grid">
            {dailyRoutine.map((step, i) => (
              <div key={i} className="mrak-routine-card">
                <h3 className="mrak-routine-title">{step.title}</h3>
                <p className="mrak-routine-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: SALIENT FEATURES & PASTORAL CARE */}
      <section className="section section-white">
        <div className="container">
          <SectionHeader
            eyebrow="CAMPUS INFRASTRUCTURE &amp; ETHOS"
            title="Why Families Choose Our Primary School"
            subtitle="A nurturing environment combining rigorous academic instruction with moral protection and modern amenities."
            centered
          />

          <div className="grid-3">
            {salientFeatures.map((feat, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '22px 20px',
                  borderRadius: '14px',
                  border: '1px solid rgba(20, 43, 74, 0.08)',
                  boxShadow: '0 4px 16px rgba(20, 43, 74, 0.04)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}
              >
                <CheckCircle2 size={20} style={{ color: 'var(--color-champagne-gold)', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--color-slate-grey-dark)', fontWeight: 500 }}>
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: ENROLLMENT & NEXT ACADEMIC STAGE CTA */}
      <section className="section section-navy" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="eyebrow" style={{ color: 'var(--color-champagne-gold)', letterSpacing: '0.12em' }}>
            ENROLL IN PRIMARY SCHOOL
          </span>
          <h2 className="section-title" style={{ color: '#fff', marginBottom: '16px' }}>
            Build a Strong Academic &amp; Moral Foundation
          </h2>
          <p className="section-subtitle" style={{ color: '#E2E8F0', margin: '0 auto 28px auto', textAlign: 'center' }}>
            Admissions for Grades 1 through 4 are open for the upcoming academic session at The Scholars Primary School, Jogeshwari West. Schedule a school tour or submit your online enquiry today.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions/" className="btn btn-gold btn-lg">
              <span>Admission Enquiry Form</span>
              <ArrowUpRight size={18} />
            </Link>
            <Link to="/academics/secondary/" className="btn btn-outline-white btn-lg">
              <span>Next: The Scholars High School (SSC Board)</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
