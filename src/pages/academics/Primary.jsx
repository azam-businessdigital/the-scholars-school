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
import FacultyShowcase from '../../components/academics/FacultyShowcase';
import { academicsData } from '../../data/academicsData';
import { schoolData } from '../../data/schoolData';
import { facultyData } from '../../data/facultyData';

export default function Primary() {
  const data = academicsData.find((a) => a.id === 'primary');
  const principal = schoolData.leadership.principals[0]; // Mrs. Zahida Kader Chunawala

  const primaryGallery = [
    {
      img: '/images/academics/primary-smart-classroom.jpg',
      title: 'Interactive Smart Classroom Lessons',
      desc: 'Audio-visual interactive whiteboards bringing science, geography, and language to life with vivid clarity.'
    },
    {
      img: '/images/academics/primary-computer-lab.jpg',
      title: 'Modern Hands-On Computer Lab',
      desc: 'Dedicated IT periods teaching essential keyboarding, digital literacy, and foundational computer concepts.'
    },
    {
      img: '/images/academics/primary-boys-staff.jpeg',
      title: 'Primary Boys Section Faculty',
      desc: 'Devoted teachers directing classroom discipline, mathematical problem-solving, and foundational sciences for boys.'
    },
    {
      img: '/images/academics/primary-girls-staff.jpeg',
      title: 'Primary Girls Section Faculty',
      desc: 'Experienced educators fostering creative arts, expressive reading, moral integrity, and collaborative study for girls.'
    }
  ];

  const dailyRoutine = [
    {
      time: '07:15 AM / 12:45 PM',
      title: 'Morning Assembly & Du\'aa',
      desc: 'School prayer, Surah recitation, moral thought for the day, and respectful national anthem.'
    },
    {
      time: '07:45 AM / 01:15 PM',
      title: 'Language Arts & Reading Immersion',
      desc: 'English grammar, vocabulary expansion, reading comprehension, and pronunciation drills.'
    },
    {
      time: '08:45 AM / 02:15 PM',
      title: 'Mathematics & Mental Arithmetic',
      desc: 'Mental math drills, conceptual arithmetic, geometric patterns, and problem-solving exercises.'
    },
    {
      time: '09:45 AM / 03:15 PM',
      title: 'Wholesome Recess & Refreshment',
      desc: 'Nourishing snacks, clean handwashing etiquette, and supervised social interaction with peers.'
    },
    {
      time: '10:15 AM / 03:45 PM',
      title: 'Science, EVS & Digital Lab',
      desc: 'Smart board science visual lessons, environmental studies, and hands-on computer lab sessions.'
    },
    {
      time: '11:45 AM / 05:15 PM',
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
        title="Primary Section - Grades 1 to 4 | The Scholars School"
        description="Primary Section at The Scholars High School, Jogeshwari West. Comprehensive English medium curriculum following Maharashtra Department of Education standards with separate boys and girls faculty."
        canonical="https://thescholarsschool.edu.in/academics/primary/"
      />

      {/* Page Banner with Primary Badge */}
      <div className="page-banner">
        <div className="container">
          <div className="mrak-banner-badge">
            <span className="mrak-banner-tag">PRIMARY ACADEMICS &bull; GRADES 1 TO 4 &bull; AGES 6 - 10 YEARS</span>
          </div>
          <h1>Primary Section: Grades 1 to 4</h1>
          <p>
            Building strong reading comprehension, quantitative logic, observational science, and timeless Islamic character in an engaging English-medium environment.
          </p>
        </div>
      </div>

      <Breadcrumbs
        items={[
          { label: 'Academics', path: '/academics/' },
          { label: 'Primary Section', path: '/academics/primary/' }
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
              <p style={{ color: 'var(--color-slate-grey)', lineHeight: '1.65', marginBottom: '24px' }}>
                At The Scholars High School, the Primary Section provides a vibrant, intellectually stimulating atmosphere following the Maharashtra State Board curriculum in English medium. With separate sections for boys and girls, students receive tailored instruction from dedicated faculty, blending interactive smart classroom technology, mental arithmetic, and daily Deeniyat moral guidance.
              </p>

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
                    <div className="mrak-stat-value">Morning &amp; Afternoon</div>
                  </div>
                </div>

                <div className="mrak-stat-pill">
                  <div className="mrak-stat-icon users">
                    <Users size={19} />
                  </div>
                  <div className="mrak-stat-content">
                    <span className="mrak-stat-label">Sections</span>
                    <div className="mrak-stat-value">Boys &amp; Girls Wings</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="academic-hero-media card reveal-right img-sheen-wrap">
              <div className="academic-hero-floating-badge">
                <Sparkles size={14} /> Smart Classrooms &amp; Labs
              </div>
              <img
                src="/images/academics/primary-smart-classroom.jpg"
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

      {/* SECTION 2: PRINCIPAL'S MESSAGE (PRE-PRIMARY & PRIMARY) - SAME EXECUTIVE STYLE AS MRAK */}
      <section className="section mrak-principal-section">
        <div className="container">
          <SectionHeader
            eyebrow="SCHOOL PRINCIPAL'S MESSAGE"
            title="Inspiring Excellence in Academics &amp; Character"
            subtitle="Guiding philosophy from our Pre-Primary and Primary leadership."
            centered
          />

          <div className="mrak-principal-card">
            <div className="mrak-principal-media">
              <img
                src={principal.image}
                alt={principal.name}
                className="mrak-principal-avatar"
                loading="lazy"
                width="170"
                height="190"
              />
              <div className="mrak-principal-name">{principal.name}</div>
              <div className="mrak-principal-role">{principal.designation}</div>
              <span style={{ fontSize: '11px', color: 'var(--color-slate-grey)', marginTop: '4px' }}>
                {principal.section}
              </span>
            </div>

            <div className="mrak-principal-content">
              <h3 className="mrak-principal-heading">
                Empowering Every Student to Think, Discover &amp; Lead
              </h3>
              <p className="mrak-principal-quote">
                &ldquo;Primary education at The Scholars High School is where fundamental curiosity transforms into disciplined academic achievement and upright moral character. We provide a supportive, stimulating learning environment where boys and girls receive dedicated faculty guidance, modern smart classroom instruction, and regular moral grounding through Deeniyat. Our aim is to develop articulate, thoughtful scholars who approach both secular knowledge and Islamic values with passion and humility.&rdquo;
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

          <div className="mrak-gallery-grid-4">
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
                <span className="mrak-routine-time">{step.time}</span>
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

      {/* SECTION 7: TEACHING FACULTY ROSTER & SECTION 8: LARGE TEACHERS PHOTO */}
      <FacultyShowcase
        facultyEyebrow="ACADEMIC MENTORS"
        facultyTitle={facultyData.primary.sectionTitle}
        facultySubtitle={facultyData.primary.description}
        teachers={facultyData.primary.teachers}
        photoEyebrow="FACULTY HONOUR ROLL"
        photoTitle="Primary Faculty Cohort: Girls &amp; Boys Wings"
        photoSubtitle="Our devoted educators photographed with school leadership across our campus wings."
        largePhotos={facultyData.primary.largePhotos}
      />

      {/* SECTION 9: ENROLLMENT & NEXT ACADEMIC STAGE CTA */}
      <section className="section section-navy" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="eyebrow" style={{ color: 'var(--color-champagne-gold)', letterSpacing: '0.12em' }}>
            ENROLL IN PRIMARY SCHOOL
          </span>
          <h2 className="section-title" style={{ color: '#fff', marginBottom: '16px' }}>
            Build a Strong Academic &amp; Moral Foundation
          </h2>
          <p className="section-subtitle" style={{ color: '#E2E8F0', margin: '0 auto 28px auto', textAlign: 'center' }}>
            Admissions for Grades 1 through 4 are open for the upcoming academic session at The Scholars High School, Jogeshwari West. Schedule a school tour or submit your online enquiry today.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions/" className="btn btn-gold btn-lg">
              <span>Admission Enquiry Form</span>
              <ArrowUpRight size={18} />
            </Link>
            <Link to="/academics/secondary/" className="btn btn-outline-white btn-lg">
              <span>Next: Secondary Section (SSC Board)</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
