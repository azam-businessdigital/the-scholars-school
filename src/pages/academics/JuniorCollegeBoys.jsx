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
  TrendingUp,
  Building2
} from 'lucide-react';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import SectionHeader from '../../components/common/SectionHeader';
import FacultyShowcase from '../../components/academics/FacultyShowcase';
import { academicsData } from '../../data/academicsData';
import { schoolData } from '../../data/schoolData';
import { facultyData } from '../../data/facultyData';

export default function JuniorCollegeBoys() {
  const data = academicsData.find((a) => a.id === 'junior-college-boys');
  const principal = schoolData.leadership.principals[1]; // Mrs. Azra Nasreen Abdul Hakim Khan

  const collegeGallery = [
    {
      img: '/images/academics/junior-college-boys.jpg',
      title: 'Business Economics & Financial Accounting',
      desc: 'Interactive lecture hall discussions, macroeconomic graph analysis, and ledger problem-solving.'
    },
    {
      img: '/images/academics/college-staff.jpg',
      title: 'Junior College Commerce Faculty Team',
      desc: 'Seasoned lecturers specializing in Book Keeping, Commercial Mathematics, OCM, and Economics.'
    },
    {
      img: '/images/academics/primary-computer-lab.jpg',
      title: 'Commercial Computing & IT Practicals',
      desc: 'Hands-on digital spreadsheet training, financial calculation software, and business computing.'
    },
    {
      img: '/images/campus/building.jpg',
      title: 'Dedicated 7-Floor Educational Campus',
      desc: 'Centrally located in Jogeshwari West featuring modern lecture halls, elevators, and reference library.'
    }
  ];

  const dailyRoutine = [
    {
      time: '07:15 AM',
      title: 'Morning Du\'aa & College Assembly',
      desc: 'Supplication for intellectual clarity, morning reflection, and motivation for academic excellence.'
    },
    {
      time: '07:35 AM',
      title: 'Book Keeping & Accountancy',
      desc: 'Intensive financial accounting calculations, journal entries, ledger balancing, and partnership adjustments.'
    },
    {
      time: '08:45 AM',
      title: 'Economics & Financial Systems',
      desc: 'Macroeconomic market demand, monetary policy, national income accounting, and banking systems.'
    },
    {
      time: '09:45 AM',
      title: 'Wholesome Recess & Refreshment',
      desc: 'Nutritious break, collaborative peer discussions, and campus library visit.'
    },
    {
      time: '10:15 AM',
      title: 'Organization of Commerce (OCM) / SP',
      desc: 'Corporate governance structures, commercial secretarial law, business management, and marketing.'
    },
    {
      time: '11:45 AM',
      title: 'Commercial IT & Board Clinics',
      desc: 'Computer lab practicals, previous years board question drills, and faculty doubt resolution.'
    }
  ];

  const learningDomains = [
    {
      icon: <Puzzle size={22} />,
      title: 'Book Keeping & Accountancy',
      desc: 'Fundamentals of double-entry bookkeeping, final accounts, corporate financial statements, and partnership dissolution.'
    },
    {
      icon: <TrendingUp size={22} />,
      title: 'Economics & Market Dynamics',
      desc: 'Macroeconomic equilibrium, public finance, monetary policy, national income, and international trade dynamics.'
    },
    {
      icon: <Briefcase size={22} />,
      title: 'Organization of Commerce & Management',
      desc: 'Forms of modern business organizations, supply chain logistics, consumer protection laws, and management theory.'
    },
    {
      icon: <BookOpen size={22} />,
      title: 'Secretarial Practice / Commercial Math',
      desc: 'Corporate governance, securities market operations, commercial statistics, and business financial mathematics.'
    },
    {
      icon: <Laptop size={22} />,
      title: 'Information Technology for Commerce',
      desc: 'Spreadsheet formula modeling, database querying, business presentation suites, and digital tools.'
    },
    {
      icon: <Heart size={22} />,
      title: 'Deeniyat & Business Ethics',
      desc: 'Islamic commercial ethics, truthfulness in contracts, prohibition of unfair trade, and ethical wealth stewardship.'
    }
  ];

  const salientFeatures = [
    'Consistent 100% passing results in HSC Commerce board examinations year after year',
    'Dedicated boys wing designed for intellectual focus, academic discipline, and peer collaboration',
    'Fully equipped computer lab providing hands-on applications in financial and commercial computing',
    'Experienced college lecturers employing systematic question-paper drills and board preparation techniques',
    'Elevator access across all 7 floors with modern lecture facilities and reference libraries',
    'Specialized career seminars and foundation guidance for CA, CS, CMA, and management degrees'
  ];

  return (
    <>
      <SEO
        title="Junior College for Commerce: Boys Section | The Scholars School"
        description="Junior College for Commerce (Boys Section) at The Scholars High School, Jogeshwari West. 100% passing results preparing young men for finance and corporate degrees."
        canonical="https://thescholarsschool.edu.in/academics/junior-college/boys/"
      />

      {/* Page Banner with Junior College Badge */}
      <div className="page-banner">
        <div className="container">
          <div className="mrak-banner-badge">
            <span className="mrak-banner-tag">HIGHER SECONDARY COMMERCE &bull; CLASS 11 &amp; 12 &bull; HSC BOARD</span>
          </div>
          <h1>Junior College for Commerce: Boys Section (HSC Board)</h1>
          <p>
            Rigorous commerce coaching, accounting precision, and career orientation preparing male students for commercial degrees, professional certifications, and entrepreneurial ventures.
          </p>
        </div>
      </div>

      <Breadcrumbs
        items={[
          { label: 'Academics', path: '/academics/' },
          { label: 'Junior College (Boys)', path: '/academics/junior-college/boys/' }
        ]}
      />

      {/* SECTION 1: ABOUT BOYS COMMERCE COLLEGE & CAMPUS HERO */}
      <section className="section section-white">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 'var(--space-12)' }}>
            <div>
              <span className="eyebrow">COMMERCE CURRICULUM</span>
              <h2 className="section-title">Academic Strength &amp; Professional Direction in Commerce</h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: 'var(--color-slate-grey-dark)', marginBottom: '16px' }}>
                {data.overview}
              </p>
              <p style={{ color: 'var(--color-slate-grey)', lineHeight: '1.65', marginBottom: '24px' }}>
                Our Boys Section is structured to cultivate intellectual discipline, economic insight, and strong financial calculation skills. Students have access to computer facilities for commerce practicals, comprehensive library resources, and dedicated mock examination drills designed to secure distinction in the Maharashtra HSC Board examinations.
              </p>

              <div className="mrak-badges-row">
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
                    <div className="mrak-stat-value">Dedicated Boys Wing</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="academic-hero-media">
              <div className="academic-hero-floating-badge">
                <TrendingUp size={14} /> Professional Career Prep
              </div>
              <img
                src="/images/academics/junior-college-boys.jpg"
                alt="Junior College male students attending business economics and financial accounting lecture"
                className="academic-hero-img"
                loading="lazy"
                width="600"
                height="380"
              />
              <div className="academic-hero-caption">
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-royal-navy)', fontSize: '0.9375rem' }}>
                    Business Economics &amp; Financial Analysis
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-slate-grey)', marginTop: '2px' }}>
                    Interactive lectures in market demand, balance sheet structures, and economic policies.
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
            title="Guiding Young Men Toward Commercial Leadership"
            subtitle="Guiding philosophy from our Secondary and Junior College leadership."
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
                Junior College for Commerce
              </span>
            </div>

            <div className="mrak-principal-content">
              <h3 className="mrak-principal-heading">
                Building Intellectual Rigour, Financial Insight &amp; Ethical Enterprise
              </h3>
              <p className="mrak-principal-quote">
                &ldquo;At The Scholars Junior College for Commerce, we guide young men to develop sharp analytical thinking, financial calculation discipline, and entrepreneurial ambition. Backed by experienced lecturers, real-world case studies, and focused board examination drills, our students consistently achieve 100% HSC results and build solid foundations for premier commercial, banking, and professional careers.&rdquo;
              </p>
              <div className="mrak-principal-pillars">
                <span className="mrak-pillar-chip">&bull; 100% HSC Commerce Board Record</span>
                <span className="mrak-pillar-chip">&bull; Conceptual Accounting Mastery</span>
                <span className="mrak-pillar-chip">&bull; Business Economics &amp; Analytics</span>
                <span className="mrak-pillar-chip">&bull; Individual Doubt-Solving Clinics</span>
                <span className="mrak-pillar-chip">&bull; Ethical Commerce Foundations</span>
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
            subtitle="Explore our lecture halls, commerce faculty, IT practicals, and 7-floor educational facility."
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

      {/* SECTION 5: A DAY IN JUNIOR COLLEGE (ROUTINE) */}
      <section className="section section-ivory">
        <div className="container">
          <SectionHeader
            eyebrow="STRUCTURED DAILY TIMETABLE"
            title="A Day in Junior College: Disciplined &amp; Career-Focused"
            subtitle="Balanced college schedule combining conceptual lectures, practical accounting drills, and board preparation."
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

      {/* SECTION 6: SALIENT FEATURES & HSC RESULT GAZETTE */}
      <section className="section section-white">
        <div className="container">
          <SectionHeader
            eyebrow="CAMPUS ADVANTAGES"
            title="Why Families Choose Our Junior College (Boys Section)"
            subtitle="Exceptional academic results, disciplined environment, and specialized commerce faculty."
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

      {/* SECTION 7: TEACHING FACULTY ROSTER & SECTION 8: LARGE TEACHERS PHOTO */}
      <FacultyShowcase
        facultyEyebrow="COMMERCE LECTURERS"
        facultyTitle={facultyData.college.sectionTitle}
        facultySubtitle={facultyData.college.description}
        teachers={facultyData.college.teachers}
        photoEyebrow="FACULTY HONOUR ROLL"
        photoTitle="Junior College Commerce Faculty Team"
        photoSubtitle={facultyData.college.photoCaptionSub}
        largePhoto={facultyData.college.largePhoto}
        captionTitle={facultyData.college.photoCaptionTitle}
        captionSub={facultyData.college.photoCaptionSub}
      />

      {/* SECTION 9: ENROLLMENT & NEXT ACADEMIC STAGE CTA */}
      <section className="section section-navy" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="eyebrow" style={{ color: 'var(--color-champagne-gold)', letterSpacing: '0.12em' }}>
            ENROLL FOR JUNIOR COLLEGE COMMERCE
          </span>
          <h2 className="section-title" style={{ color: '#fff', marginBottom: '16px' }}>
            Build a Solid Foundation in Business, Banking &amp; Finance
          </h2>
          <p className="section-subtitle" style={{ color: '#E2E8F0', margin: '0 auto 28px auto', textAlign: 'center' }}>
            Admissions for Class XI Commerce (Boys Section) are processed following Class 10 result declarations. Submit your admission enquiry today to receive counsel on subject choices and seat allocation.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions/" className="btn btn-gold btn-lg">
              <span>Admission Enquiry Form</span>
              <ArrowUpRight size={18} />
            </Link>
            <Link to="/academics/deeniyat/" className="btn btn-outline-white btn-lg">
              <span>Explore: Deeniyat Program</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
