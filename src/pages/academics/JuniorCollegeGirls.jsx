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
  GraduationCap,
  Award,
  Download,
  Briefcase,
  TrendingUp
} from 'lucide-react';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import SectionHeader from '../../components/common/SectionHeader';
import { academicsData } from '../../data/academicsData';
import { schoolData } from '../../data/schoolData';

export default function JuniorCollegeGirls() {
  const data = academicsData.find((a) => a.id === 'junior-college-girls');
  const principal = schoolData.leadership.principals.find((p) => p.id === 'secondary-principal') || schoolData.leadership.principals[2];

  const collegeGallery = [
    {
      img: '/images/gallery/college-g-1.jpg',
      title: 'Accountancy & Financial Economics',
      desc: 'Collaborative commerce lectures, ledger adjustments, and real-world case discussions in our Commerce Department.'
    },
    {
      img: '/images/gallery/computer-lab-1.jfif',
      title: 'Digital Commerce & IT Practicals',
      desc: 'Hands-on practical sessions in computerized accounting, digital spreadsheets, and commercial computing.'
    },
    {
      img: '/images/gallery/college-g-2.jpg',
      title: 'Digital Classrooms & Study Resources',
      desc: 'Air-conditioned lecture rooms with smart audio-visual systems and comprehensive reference libraries.'
    },
    {
      img: '/images/gallery/lift-1.jfif',
      title: 'Modern Infrastructure & Safe Campus Transit',
      desc: 'Secure high-speed passenger elevator access connecting all floors with monitored corridors and dedicated amenities for girls.'
    }
  ];

  const dailyRoutine = [
    {
      title: 'Morning Du\'aa & College Assembly',
      desc: 'Supplication for knowledge, morning reflection, and focus for a productive academic day.'
    },
    {
      title: 'Book Keeping & Accountancy',
      desc: 'Double-entry ledger mechanics, partnership balance sheets, depreciation, and problem-solving drills.'
    },
    {
      title: 'Economics & Financial Systems',
      desc: 'Microeconomic market analysis, national income computation, banking policies, and public finance.'
    },
    {
      title: 'Wholesome Recess & Refreshment',
      desc: 'Restorative break, social bonding with classmates, and library research time.'
    },
    {
      title: 'Organization of Commerce (OCM) / SP',
      desc: 'Corporate governance structures, commercial secretarial law, business management, and marketing.'
    },
    {
      title: 'Commercial IT & Board Clinics',
      desc: 'Computerized accounting software, previous years board question drills, and individual doubt resolution.'
    }
  ];

  const learningDomains = [
    {
      icon: <Puzzle size={22} />,
      title: 'Book Keeping & Accountancy',
      desc: 'Financial accounting fundamentals, partnership dissolution, company shares, debentures, and computerized accounting.'
    },
    {
      icon: <TrendingUp size={22} />,
      title: 'Economics & Market Analysis',
      desc: 'Consumer equilibrium, market structures, macroeconomics, fiscal policies, and the Indian financial system.'
    },
    {
      icon: <Briefcase size={22} />,
      title: 'Organization of Commerce (OCM)',
      desc: 'Forms of modern business enterprise, internal trade, international business logistics, and principles of management.'
    },
    {
      icon: <BookOpen size={22} />,
      title: 'Secretarial Practice / Commercial Math',
      desc: 'Corporate secretarial documentation, securities markets, or commercial statistics and financial mathematics.'
    },
    {
      icon: <Laptop size={22} />,
      title: 'English & Business Communication',
      desc: 'Professional drafting, executive correspondence, report writing, and corporate presentation communication.'
    },
    {
      icon: <Heart size={22} />,
      title: 'Deeniyat & Ethical Commerce',
      desc: 'Islamic commercial ethics, truthfulness in business dealings, financial integrity, and moral responsibility.'
    }
  ];

  const salientFeatures = [
    'Consistent 100% passing record in Maharashtra HSC Board examinations with distinction ranks',
    'Exclusive girls wing providing a modest, dignified, and distraction-free academic setting',
    'Air-conditioned lecture halls equipped with multimedia presentation technology',
    'Specialized foundation guidance for competitive certifications including CA Foundation, CS, and CMA',
    'Convenient elevator access across all 7 campus floors with dedicated female attendants',
    'Regular prelims, revision seminars, and personalized doubt-clearing sessions'
  ];

  return (
    <>
      <SEO
        title="The Scholars Junior College of Arts and Commerce: Girls Section | The Scholars School"
        description="The Scholars Junior College of Arts and Commerce (Girls Section) at Jogeshwari West. 100% HSC Board passing record preparing young women for professional and academic careers."
        canonical="https://thescholarsschool.edu.in/academics/junior-college/girls/"
      />

      {/* Page Banner with Junior College Badge */}
      <div className="page-banner">
        <div className="container">
          <div className="mrak-banner-badge">
            <span className="mrak-banner-tag">THE SCHOLARS JUNIOR COLLEGE OF ARTS AND COMMERCE &bull; GIRLS SECTION &bull; HSC BOARD</span>
          </div>
          <h1>The Scholars Junior College of Arts and Commerce: Girls Section (HSC Board)</h1>
          <p>
            An empowering educational space for young women providing rigorous Arts &amp; Commerce instruction, career mentoring, and a proven 100% HSC Board pass outcome.
          </p>
        </div>
      </div>

      <Breadcrumbs
        items={[
          { label: 'Academics', path: '/academics/' },
          { label: 'The Scholars Junior College (Girls Section)', path: '/academics/junior-college/girls/' }
        ]}
      />

      {/* SECTION 1: ABOUT GIRLS COMMERCE COLLEGE & CAMPUS HERO */}
      <section className="section section-white" id="section-overview">
        <div className="container">
          <div className="grid-2 academic-hero-grid stagger-group reveal-up" style={{ alignItems: 'center', gap: 'var(--space-12)' }}>
            <div className="section-header reveal-left">
              <span className="eyebrow">COMMERCE EXCELLENCE</span>
              <h2 className="section-title">Empowering Future Financial &amp; Business Leaders</h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: 'var(--color-slate-grey-dark)', marginBottom: '16px' }}>
                {data.overview}
              </p>
              <p style={{ color: 'var(--color-slate-grey)', lineHeight: '1.65', marginBottom: '24px' }}>
                Our separate girls section provides a secure, focused, and scholarly environment. Guided by seasoned commerce lecturers, students master conceptual accounting clarity, macroeconomic analysis, corporate secretarial law, and practical financial reasoning required for competitive entry into CA, CS, CMA, and prestigious commerce university degrees.
              </p>

              <div className="mrak-badges-row stagger-group reveal-up">
                <div className="mrak-stat-pill">
                  <div className="mrak-stat-icon sun">
                    <Award size={19} />
                  </div>
                  <div className="mrak-stat-content">
                    <span className="mrak-stat-label">Board Record</span>
                    <div className="mrak-stat-value">100% HSC Pass Rate</div>
                  </div>
                </div>

                <div className="mrak-stat-pill">
                  <div className="mrak-stat-icon clock">
                    <GraduationCap size={19} />
                  </div>
                  <div className="mrak-stat-content">
                    <span className="mrak-stat-label">Program</span>
                    <div className="mrak-stat-value">Class 11 &amp; 12 Commerce</div>
                  </div>
                </div>

                <div className="mrak-stat-pill">
                  <div className="mrak-stat-icon users">
                    <Users size={19} />
                  </div>
                  <div className="mrak-stat-content">
                    <span className="mrak-stat-label">Campus Wing</span>
                    <div className="mrak-stat-value">Dedicated Girls Wing</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="academic-hero-media card reveal-right img-sheen-wrap">
              <div className="academic-hero-floating-badge">
                <GraduationCap size={14} /> Dedicated Girls Campus
              </div>
              <img
                src="/images/gallery/college-g-1.jpg"
                alt="Junior College female students discussing accountancy principles with professor"
                className="academic-hero-img"
                loading="lazy"
                width="600"
                height="380"
              />
              <div className="academic-hero-caption">
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-royal-navy)', fontSize: '0.9375rem' }}>
                    Commerce Department Collaborative Learning
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-slate-grey)', marginTop: '2px' }}>
                    In-depth exploration of double-entry ledger mechanics, accounting, and financial reasoning.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRINCIPAL'S MESSAGE (COLLEGE LEADERSHIP) - STANDARDIZED MRAK STYLE */}
      <section className="section mrak-principal-section">
        <div className="container">
          <SectionHeader
            eyebrow="COLLEGE PRINCIPAL'S MESSAGE"
            title="Nurturing Professional Ambition &amp; Moral Integrity"
            subtitle="Guiding philosophy from our Junior College leadership."
            centered
          />

          <div className="mrak-principal-card">
            <div className="mrak-principal-media">
              <img
                src={principal.image}
                alt={principal.designation}
                className="mrak-principal-avatar"
                loading="lazy"
                width="170"
                height="190"
              />
              <div className="mrak-principal-name">{principal.designation}</div>
              <div className="mrak-principal-role">{principal.section}</div>
            </div>

            <div className="mrak-principal-content">
              <h3 className="mrak-principal-heading">
                Inspiring Young Women to Excel in Business, Finance &amp; Leadership
              </h3>
              <p className="mrak-principal-quote">
                &ldquo;Our Junior College Girls Section provides young women with a dignified, intellectually demanding, and supportive environment to excel in arts, commerce, and finance. Through rigorous grounding in Book Keeping, Economics, Corporate Secretarial Practice, and Humanities, our students consistently achieve 100% HSC Board results and step confidently into careers in Chartered Accountancy, civil services, corporate finance, and business leadership.&rdquo;
              </p>
              <div className="mrak-principal-pillars">
                <span className="mrak-pillar-chip">&bull; 100% HSC Board Pass Record</span>
                <span className="mrak-pillar-chip">&bull; Arts &amp; Commerce Distinction</span>
                <span className="mrak-pillar-chip">&bull; CA / CS / CMA Mentorship</span>
                <span className="mrak-pillar-chip">&bull; Safe &amp; Modest Campus Climate</span>
                <span className="mrak-pillar-chip">&bull; Career Counseling &amp; Seminars</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VIBRANT COLLEGE PHOTO GALLERY */}
      <section className="section section-ivory">
        <div className="container">
          <SectionHeader
            eyebrow="CAMPUS LIFE &amp; LEARNING IN ACTION"
            title="Glimpses of Junior College Academic Life"
            subtitle="Step into our lecture halls, faculty mentoring sessions, and digital commerce practicals."
            centered
          />

          <div className="mrak-gallery-grid-4">
            {collegeGallery.map((item, i) => (
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

      {/* SECTION 4: 6 CORE COMMERCE DOMAINS */}
      <section className="section section-white">
        <div className="container">
          <SectionHeader
            eyebrow="HSC COMMERCE SYLLABUS"
            title="The 6 Pillars of Higher Secondary Commerce"
            subtitle="Prescribed by the Maharashtra State Board, taught through practical business applications."
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

      {/* SECTION 5: DISCIPLINED & CAREER-FOCUSED (ROUTINE) */}
      <section className="section section-ivory">
        <div className="container">
          <SectionHeader
            eyebrow="STRUCTURED DAILY TIMETABLE"
            title="Disciplined &amp; Career-Focused"
            subtitle="Balanced college schedule combining conceptual lectures, practical accounting drills, and board preparation."
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

      {/* SECTION 6: SALIENT FEATURES & HSC RESULT GAZETTE */}
      <section className="section section-white">
        <div className="container">
          <SectionHeader
            eyebrow="CAMPUS ADVANTAGES"
            title="Why Families Choose Our Junior College (Girls Section)"
            subtitle="Exceptional academic results, secure environment, and specialized commerce faculty."
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

          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            <a
              href="/documents/hsc_result_2024_25_commerce.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Download size={16} />
              <span>Download HSC Commerce Board Gazette</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 7: ENROLLMENT & NEXT ACADEMIC STAGE CTA */}
      <section className="section section-navy" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="eyebrow" style={{ color: 'var(--color-champagne-gold)', letterSpacing: '0.12em' }}>
            ENROLL FOR JUNIOR COLLEGE (ARTS &amp; COMMERCE)
          </span>
          <h2 className="section-title" style={{ color: '#fff', marginBottom: '16px' }}>
            Step Into a Rewarding Career in Arts, Commerce &amp; Finance
          </h2>
          <p className="section-subtitle" style={{ color: '#E2E8F0', margin: '0 auto 28px auto', textAlign: 'center' }}>
            Admissions for Class XI (Arts &amp; Commerce - Girls Section) are processed following Class 10 result declarations. Submit your admission enquiry today to reserve your seat.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions/" className="btn btn-gold btn-lg">
              <span>Admission Enquiry Form</span>
              <ArrowUpRight size={18} />
            </Link>
            <Link to="/academics/junior-college/boys/" className="btn btn-outline-white btn-lg">
              <span>Explore: The Scholars Junior College (Boys Section)</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
