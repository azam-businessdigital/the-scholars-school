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
  FlaskConical,
  Download,
  Globe
} from 'lucide-react';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import SectionHeader from '../../components/common/SectionHeader';
import { academicsData } from '../../data/academicsData';
import { schoolData } from '../../data/schoolData';

export default function Secondary() {
  const data = academicsData.find((a) => a.id === 'secondary');
  const principal = schoolData.leadership.principals.find((p) => p.id === 'secondary-principal') || schoolData.leadership.principals[2];

  const secondaryGallery = [
    {
      img: '/images/gallery/science-activity-4.jpeg',
      title: 'Science Project Work & Working Model Showcase',
      desc: 'Secondary scholars building functional physics, biological, and environmental working models.'
    },
    {
      img: '/images/gallery/english-elocution-6.jpeg',
      title: 'Annual English Elocution Competition',
      desc: 'Students mastering oratorical poise, clear diction, and stage confidence in annual speech events.'
    },
    {
      img: '/images/gallery/geography-activity-5.jpeg',
      title: '3D Geography Landform & Cartography Study',
      desc: 'Practical exploration of physical relief, contour structures, and earth landforms through 3D models.'
    },
    {
      img: '/images/gallery/rubiks-cube-activity-2.jpeg',
      title: 'Speed Cubing & Spatial Logic Workshops',
      desc: 'Sharpening mental agility, sequence memory, and algorithmic problem solving with 3x3 Rubik\'s Cubes.'
    },
    {
      img: '/images/gallery/class-cleaning-2.jpeg',
      title: 'Swachh Campus & Civic Responsibility Drive',
      desc: 'Instilling humility, hygiene discipline, and shared stewardship through classroom care campaigns.'
    },
    {
      img: '/images/facilities/science-lab-2.jpg',
      title: 'Hands-On Laboratory Practicals',
      desc: 'Regular syllabus experiments in Physics, Chemistry, and Biology preparing students for SSC board exams.'
    }
  ];

  const dailyRoutine = [
    {
      title: 'Morning Assembly & Du\'aa',
      desc: 'School assembly, Quranic recitation, moral thought for the day, and respectful national anthem.'
    },
    {
      title: 'Core Mathematics & Sciences',
      desc: 'Intensive analytical lectures in Algebra, Geometry, and foundational Science theory with board problem solving.'
    },
    {
      title: 'Science Lab & IT Practicals',
      desc: 'Hands-on laboratory experiments in Physics, Chemistry, and Biology, along with digital computer lab drills.'
    },
    {
      title: 'Wholesome Recess & Refreshment',
      desc: 'Nutritious break, social interaction with peers, and disciplined campus movement.'
    },
    {
      title: 'Languages & Social Sciences',
      desc: 'In-depth English grammar, literature analysis, Marathi, Hindi/Urdu, History, Civics, and Geography.'
    },
    {
      title: 'Deeniyat, Doubt Clinics & Departure',
      desc: 'Daily Deeniyat period, individualized doubt clarification clinics, homework reviews, and orderly dismissal.'
    }
  ];

  const learningDomains = [
    {
      icon: <FlaskConical size={22} />,
      title: 'Sciences: Physics, Chemistry & Biology',
      desc: 'Comprehensive syllabus mastery reinforced by compulsory laboratory practical sessions and board experiment records.'
    },
    {
      icon: <Puzzle size={22} />,
      title: 'Mathematics: Algebra & Geometry',
      desc: 'Rigorous conceptual training across algebraic equations, geometric theorems, trigonometry, coordinate geometry, and statistics.'
    },
    {
      icon: <BookOpen size={22} />,
      title: 'Languages: English, Marathi & Hindi/Urdu',
      desc: 'Developing sophisticated written composition, grammar accuracy, literary analysis, and multilingual proficiency.'
    },
    {
      icon: <Globe size={22} />,
      title: 'Social Sciences: History, Civics & Geography',
      desc: 'National and global historical movements, constitutional democracy, civic rights, economics, and map cartography.'
    },
    {
      icon: <Laptop size={22} />,
      title: 'Information Technology & Computing',
      desc: 'Practical computing skills, office automation suites, spreadsheet data management, and ethical digital citizenship.'
    },
    {
      icon: <Heart size={22} />,
      title: 'Deeniyat & Character Mentoring',
      desc: 'Reflective Quranic studies, Hadith lessons on honesty and perseverance, daily supplications, and community service.'
    }
  ];

  const salientFeatures = [
    'Consistent 100% passing record in Maharashtra SSC Board examinations with numerous distinctions',
    'Separate instructional wings for boys and girls ensuring focused academic concentration',
    'Dedicated modern laboratories for Physics, Chemistry, and Biology practicals',
    'High-speed computer laboratory with multimedia smart classroom learning tools',
    'Systematic prelim rehearsals, previous years question solving, and doubt clinics',
    'Continuous moral mentoring and Deeniyat education instilling upright character'
  ];

  return (
    <>
      <SEO
        title="The Scholars High School (Maharashtra SSC Board) | The Scholars School"
        description="The Scholars High School (Grades 5 to 10), Jogeshwari West. Proven 100% passing results in Maharashtra SSC Board examinations with dedicated faculty."
        canonical="https://thescholarsschool.edu.in/academics/secondary/"
      />

      {/* Page Banner with Secondary Badge */}
      <div className="page-banner">
        <div className="container">
          <div className="mrak-banner-badge">
            <span className="mrak-banner-tag">THE SCHOLARS HIGH SCHOOL &bull; GRADES 5 TO 10 &bull; MAHARASHTRA SSC BOARD</span>
          </div>
          <h1>The Scholars High School: Grades 5 to 10 (Maharashtra SSC Board)</h1>
          <p>
            Rigorous academic preparation, state-of-the-art science laboratories, and subject specialist mentorship delivering a consistent 100% SSC Board passing record.
          </p>
        </div>
      </div>

      <Breadcrumbs
        items={[
          { label: 'Academics', path: '/academics/' },
          { label: 'The Scholars High School', path: '/academics/secondary/' }
        ]}
      />

      {/* SECTION 1: ABOUT SECONDARY SECTION & CAMPUS HERO */}
      <section className="section section-white" id="section-overview">
        <div className="container">
          <div className="grid-2 academic-hero-grid stagger-group reveal-up" style={{ alignItems: 'center', gap: 'var(--space-12)' }}>
            <div className="section-header reveal-left">
              <span className="eyebrow">ACADEMIC RIGOUR &amp; SSC DISTINCTION</span>
              <h2 className="section-title">Consistently 100% SSC Board Pass Record</h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: 'var(--color-slate-grey-dark)', marginBottom: '16px' }}>
                {data.overview}
              </p>
              <p style={{ color: 'var(--color-slate-grey)', lineHeight: '1.65', marginBottom: '24px' }}>
                At The Scholars High School, our secondary students benefit from dedicated subject specialist teachers across Mathematics, Sciences, Social Sciences, and Languages. In separate wings for boys and girls, students participate in laboratory experiments, regular unit assessments, board-style prelims, and personalized doubt-solving clinics to ensure comprehensive mastery and confidence for the Class 10 State Board examinations.
              </p>

              <div className="mrak-badges-row stagger-group reveal-up">
                <div className="mrak-stat-pill">
                  <div className="mrak-stat-icon sun">
                    <Award size={19} />
                  </div>
                  <div className="mrak-stat-content">
                    <span className="mrak-stat-label">Board Record</span>
                    <div className="mrak-stat-value">100% SSC Results</div>
                  </div>
                </div>

                <div className="mrak-stat-pill">
                  <div className="mrak-stat-icon clock">
                    <GraduationCap size={19} />
                  </div>
                  <div className="mrak-stat-content">
                    <span className="mrak-stat-label">Grade Levels</span>
                    <div className="mrak-stat-value">Grades 5 to 10</div>
                  </div>
                </div>

                <div className="mrak-stat-pill">
                  <div className="mrak-stat-icon users">
                    <Users size={19} />
                  </div>
                  <div className="mrak-stat-content">
                    <span className="mrak-stat-label">Campus Wings</span>
                    <div className="mrak-stat-value">Boys &amp; Girls Wings</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="academic-hero-media card reveal-right img-sheen-wrap">
              <div className="academic-hero-floating-badge">
                <Award size={14} /> 100% SSC Distinction
              </div>
              <img
                src="/images/facilities/science-lab-1.jpg"
                alt="High school secondary students conducting science experiments in laboratory"
                className="academic-hero-img"
                loading="lazy"
                width="600"
                height="380"
              />
              <div className="academic-hero-caption">
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-royal-navy)', fontSize: '0.9375rem' }}>
                    Hands-On Science Practical Labs
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-slate-grey)', marginTop: '2px' }}>
                    Compulsory laboratory sessions in Physics, Chemistry, and Biology fostering scientific inquiry.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRINCIPAL'S MESSAGE (SECONDARY & COLLEGE) - STANDARDIZED MRAK STYLE */}
      <section className="section mrak-principal-section">
        <div className="container">
          <SectionHeader
            eyebrow="HIGH SCHOOL PRINCIPAL'S MESSAGE"
            title="Fostering Academic Rigour, Gratitude &amp; Integrity"
            subtitle="Guiding philosophy from our High School leadership."
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
                Nurturing Excellence, Discipline &amp; Character for Life Beyond the Classroom
              </h3>
              <p className="mrak-principal-quote">
                &ldquo;Secondary education at The Scholars High School is a transformative journey where academic curiosity evolves into disciplined intellectual mastery and upright moral character. We provide a rigorous, supportive environment where boys and girls receive dedicated faculty coaching, comprehensive laboratory training, and continuous board examination preparation. Our consistent 100% SSC passing record is a testament to our educators' devotion and our students' tireless work ethic. We inspire every scholar to step into the future with academic brilliance, humility, and unwavering ethical conviction.&rdquo;
              </p>
              <div className="mrak-principal-pillars">
                <span className="mrak-pillar-chip">&bull; 100% SSC Board Track Record</span>
                <span className="mrak-pillar-chip">&bull; Separate Boys &amp; Girls Wings</span>
                <span className="mrak-pillar-chip">&bull; Modern Science &amp; IT Laboratories</span>
                <span className="mrak-pillar-chip">&bull; Systematic Prelim Rehearsals</span>
                <span className="mrak-pillar-chip">&bull; Islamic Ethics &amp; Character Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VIBRANT SECONDARY PHOTO GALLERY */}
      <section className="section section-ivory">
        <div className="container">
          <SectionHeader
            eyebrow="CAMPUS LIFE &amp; LEARNING IN ACTION"
            title="Glimpses of High School Academic Life"
            subtitle="From hands-on laboratory practicals and digital computing to our dedicated subject specialist faculty."
            centered
          />

          <div className="mrak-gallery-grid">
            {secondaryGallery.map((item, i) => (
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

          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            <Link to="/gallery/?album=secondary-science-exhibition" className="btn btn-outline">
              <span>View All Secondary Activity Albums in Gallery</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: 6 CORE LEARNING DOMAINS */}
      <section className="section section-white">
        <div className="container">
          <SectionHeader
            eyebrow="MAHARASHTRA SSC CURRICULUM"
            title="The 6 Pillars of High School Mastery"
            subtitle="Prescribed by the Maharashtra State Board, taught through concept-based mastery and rigorous problem solving."
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

      {/* SECTION 5: A DAY IN SECONDARY SECTION (ROUTINE) */}
      <section className="section section-ivory">
        <div className="container">
          <SectionHeader
            eyebrow="STRUCTURED DAILY TIMETABLE"
            title="A Day in High School: Focused, Challenging &amp; Rewarding"
            subtitle="A rigorous academic schedule balancing classroom lectures, laboratory practicals, doubt clinics, and moral reflection."
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

      {/* SECTION 6: SALIENT FEATURES & SSC RESULT GAZETTE */}
      <section className="section section-white">
        <div className="container">
          <SectionHeader
            eyebrow="ACADEMIC ADVANTAGES"
            title="Why The Scholars High School Leads in SSC Board Results"
            subtitle="Proven pedagogy, comprehensive mock testing, and individual mentoring for every student."
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
              href="/documents/ssc_result_2024_25.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Download size={16} />
              <span>Download Recent Class 10 SSC Result Gazette</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 7: ENROLLMENT & NEXT ACADEMIC STAGE CTA */}
      <section className="section section-navy" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="eyebrow" style={{ color: 'var(--color-champagne-gold)', letterSpacing: '0.12em' }}>
            ADVANCE YOUR HIGH SCHOOL EDUCATION
          </span>
          <h2 className="section-title" style={{ color: '#fff', marginBottom: '16px' }}>
            Prepare for Board Distinction with The Scholars High School
          </h2>
          <p className="section-subtitle" style={{ color: '#E2E8F0', margin: '0 auto 28px auto', textAlign: 'center' }}>
            Admissions are open for secondary grades. Discover how our 100% board track record and supportive faculty unlock your child's highest potential.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions/" className="btn btn-gold btn-lg">
              <span>Admission Enquiry Form</span>
              <ArrowUpRight size={18} />
            </Link>
            <Link to="/academics/junior-college/girls/" className="btn btn-outline-white btn-lg">
              <span>Next: The Scholars Junior College of Arts and Commerce</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
