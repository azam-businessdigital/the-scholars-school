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
  GraduationCap
} from 'lucide-react';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import SectionHeader from '../../components/common/SectionHeader';
import FacultyShowcase from '../../components/academics/FacultyShowcase';
import { academicsData } from '../../data/academicsData';
import { schoolData } from '../../data/schoolData';
import { facultyData } from '../../data/facultyData';

export default function PrePrimary() {
  const data = academicsData.find((a) => a.id === 'pre-primary');
  const principal = schoolData.leadership.principals[0]; // Mrs. Zahida Kader Chunawala

  const prePrimaryGallery = [
    {
      img: '/images/academics/pre-primary-reading.jpg',
      title: 'Jolly Phonics & Story Circles',
      desc: 'Interactive letter-sound immersion, picture books, and vibrant storytelling building confident early readers.'
    },
    {
      img: '/images/academics/pre-primary-math.jpg',
      title: 'Hands-On Numeracy & Logic',
      desc: 'Montessori counting beads, geometric wooden shapes, and cognitive sorting fostering sharp logical thinking.'
    },
    {
      img: '/images/academics/pre-primary.jpeg',
      title: 'Creative Craft & Projects',
      desc: 'Active group craft, leaf art, and experiential discovery celebrating every child\'s creative expression.'
    },
    {
      img: '/images/academics/pre-primary-staff.jpeg',
      title: 'Dedicated Pre-Primary Faculty',
      desc: 'Trained early childhood educators photographed with Principal Mrs. Zahida Kader Chunawala.'
    }
  ];

  const dailyRoutine = [
    {
      time: '08:00 AM / 12:30 PM',
      title: 'Morning Du\'aa & Assembly',
      desc: 'Recitation of Surah Al-Fatihah, morning supplications, national anthem, and warm greeting circle.'
    },
    {
      time: '08:30 AM / 01:00 PM',
      title: 'Jolly Phonics & Language Arts',
      desc: 'Sound songs, flashcard drills, guided story reading, letter tracing, and pencil grip practice.'
    },
    {
      time: '09:30 AM / 02:00 PM',
      title: 'Math Manipulatives & Logic',
      desc: 'Counting rods, abacus beads, pattern puzzles, and interactive smart board numeracy games.'
    },
    {
      time: '10:15 AM / 02:45 PM',
      title: 'Healthy Snack & Etiquette',
      desc: 'Handwashing hygiene, table manners, Bismillah reminder, and mindful sharing with classmates.'
    },
    {
      time: '10:45 AM / 03:15 PM',
      title: 'Creative Arts & Craft Exploration',
      desc: 'Drawing, coloring, leaf art, non-toxic clay modeling, music, and motor skills activities.'
    },
    {
      time: '11:30 AM / 04:00 PM',
      title: 'Recapitulation & Cheerful Dismissal',
      desc: 'Daily reflection, pack-up discipline, farewell song, and organized handover to parents.'
    }
  ];

  const learningDomains = [
    {
      icon: <BookOpen size={22} />,
      title: 'Language Arts & Jolly Phonics',
      desc: 'Systematic letter sound recognition, phonemic blending, vocabulary enrichment through rhyme, and expressive verbal confidence.'
    },
    {
      icon: <Puzzle size={22} />,
      title: 'Early Numeracy & Math Logic',
      desc: 'Number recognition, sequential counting, abacus manipulatives, geometric spatial awareness, and pattern sorting.'
    },
    {
      icon: <Heart size={22} />,
      title: 'Islamic Ethics, Du\'aas & Adab',
      desc: 'Essential daily supplications, sharing with peers, speaking with gentleness, greeting with Salam, and moral storytelling.'
    },
    {
      icon: <Sun size={22} />,
      title: 'General Awareness & Nature',
      desc: 'Exploring family, community helpers, plant and animal kingdoms, environmental care, and essential health hygiene.'
    },
    {
      icon: <Palette size={22} />,
      title: 'Creative Arts, Leaf Craft & Drama',
      desc: 'Color exploration, annual leaf art competitions, paper folding, non-toxic modeling clay, and playful stage role-play.'
    },
    {
      icon: <Sparkles size={22} />,
      title: 'Fine & Gross Motor Agility',
      desc: 'Scissor handling, bead threading, pencil grip coordination, balance exercises, rhythm movement, and outdoor safe play.'
    }
  ];

  const salientFeatures = [
    'Interactive Smart Classrooms with multimedia audio-visual lessons',
    'Air-conditioned, ergonomically designed, child-friendly spaces',
    'Dedicated floor care with lift access and attentive female attendants',
    'Seamless integration of Islamic ethics, morning Du\'aas, and Sunnah habits',
    'Stress-free continuous developmental reviews keeping parents updated',
    'Warm parent-teacher partnership with regular counseling and seminars'
  ];

  return (
    <>
      <SEO
        title="Pre-Primary Section - Nursery, Junior KG & Senior KG"
        description="Pre-Primary section at The Scholars High School, Jogeshwari West. Guiding children through Nursery, Jr. KG and Sr. KG with academic curiosity and moral values."
        canonical="https://thescholarsschool.edu.in/academics/pre-primary/"
      />

      {/* Page Banner with Pre-Primary Badge */}
      <div className="page-banner">
        <div className="container">
          <div className="mrak-banner-badge">
            <span className="mrak-banner-tag">EARLY CHILDHOOD FOUNDATION &bull; NURSERY, JR. KG &amp; SR. KG &bull; AGES 3 - 6 YEARS</span>
          </div>
          <h1>Pre-Primary Section: Nursery, Junior KG &amp; Senior KG</h1>
          <p>
            A joyful, nurturing environment bridging play-based curiosity with early phonics mastery, number logic, and Islamic moral values in an inspiring English-medium setting.
          </p>
        </div>
      </div>

      <Breadcrumbs
        items={[
          { label: 'Academics', path: '/academics/' },
          { label: 'Pre-Primary Section', path: '/academics/pre-primary/' }
        ]}
      />

      {/* SECTION 1: ABOUT PRE-PRIMARY & CAMPUS HERO */}
      <section className="section section-white" id="section-overview">
        <div className="container">
          <div className="grid-2 academic-hero-grid stagger-group reveal-up" style={{ alignItems: 'center', gap: 'var(--space-12)' }}>
            <div className="section-header reveal-left">
              <span className="eyebrow">FOUNDATIONAL LEARNING YEARS</span>
              <h2 className="section-title">Where Curiosity Blossoms into Confident Learning</h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: 'var(--color-slate-grey-dark)', marginBottom: '16px' }}>
                {data.overview}
              </p>
              <p style={{ color: 'var(--color-slate-grey)', lineHeight: '1.65', marginBottom: '24px' }}>
                The Pre-Primary years form the bedrock of a child's academic and emotional future. At The Scholars High School, we combine interactive Jolly Phonics, concrete mathematical manipulatives, and creative hands-on projects with timeless Islamic ethics (Adab). Our children learn to communicate expressively, explore fearlessly, and care deeply for one another.
              </p>

              <div className="mrak-badges-row stagger-group reveal-up">
                <div className="mrak-stat-pill">
                  <div className="mrak-stat-icon sun">
                    <GraduationCap size={19} />
                  </div>
                  <div className="mrak-stat-content">
                    <span className="mrak-stat-label">Grade Levels</span>
                    <div className="mrak-stat-value">Nursery, Jr. &amp; Sr. KG</div>
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
                    <span className="mrak-stat-label">Faculty Care</span>
                    <div className="mrak-stat-value">1:15 Individual Care</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="academic-hero-media card reveal-right img-sheen-wrap">
              <div className="academic-hero-floating-badge">
                <Sparkles size={14} /> Activity Based Learning
              </div>
              <img
                src="/images/academics/pre-primary.jpeg"
                alt="Pre-Primary students presenting creative work at The Scholars School"
                className="academic-hero-img"
                loading="lazy"
                width="600"
                height="380"
              />
              <div className="academic-hero-caption">
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-royal-navy)', fontSize: '0.9375rem' }}>
                    Joyful Classroom Collaboration
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-slate-grey)', marginTop: '2px' }}>
                    Hands-on crafts, project-based discovery, and cheerful peer camaraderie.
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
            title="Nurturing Young Minds with Compassion &amp; Excellence"
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
                Building Strong Roots for Lifelong Knowledge &amp; Character
              </h3>
              <p className="mrak-principal-quote">
                &ldquo;Our aim at The Scholars High School Pre-Primary Section is to equip every child with foundational skills, positive habits, and a genuine love for learning. In these crucial developmental years, we blend structured Jolly Phonics and experiential mathematics with the warmth of loving pastoral care and timeless Islamic ethics (Adab). We partner closely with parents through continuous dialogue, building righteous, confident learners whose minds and character reflect moral excellence.&rdquo;
              </p>
              <div className="mrak-principal-pillars">
                <span className="mrak-pillar-chip">&bull; Jolly Phonics &amp; Early Literacy</span>
                <span className="mrak-pillar-chip">&bull; Experiential Mathematics</span>
                <span className="mrak-pillar-chip">&bull; Islamic Adab &amp; Moral Character</span>
                <span className="mrak-pillar-chip">&bull; Smart Interactive Classrooms</span>
                <span className="mrak-pillar-chip">&bull; Positive Parenting Partnership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VIBRANT PRE-PRIMARY PHOTO GALLERY */}
      <section className="section section-ivory">
        <div className="container">
          <SectionHeader
            eyebrow="CAMPUS LIFE &amp; LEARNING IN ACTION"
            title="Glimpses of Joyful Early Discovery"
            subtitle="Step inside our vibrant classrooms, phonics story circles, hands-on math activities, and faculty mentorship."
            centered
          />

          <div className="mrak-gallery-grid-4">
            {prePrimaryGallery.map((item, i) => (
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
            eyebrow="COMPREHENSIVE CURRICULUM FRAMEWORK"
            title="The 6 Pillars of Pre-Primary Excellence"
            subtitle="A developmentally mapped syllabus guiding each child's cognitive, physical, emotional, and moral growth."
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

      {/* SECTION 5: A DAY IN PRE-PRIMARY (ROUTINE) */}
      <section className="section section-ivory">
        <div className="container">
          <SectionHeader
            eyebrow="STRUCTURED DAILY RHYTHM"
            title="A Day in Pre-Primary: Balanced, Active &amp; Inspiring"
            subtitle="Carefully paced schedules designed for young attention spans, balancing deep engagement with joyful recreation."
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
            eyebrow="FACILITIES &amp; PASTORAL CARE"
            title="Why Parents Choose Our Pre-Primary Section"
            subtitle="Safe, modern infrastructure combined with holistic child care and academic preparedness."
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
        facultyTitle={facultyData.prePrimary.sectionTitle}
        facultySubtitle={facultyData.prePrimary.description}
        teachers={facultyData.prePrimary.teachers}
        photoEyebrow="FACULTY HONOUR ROLL"
        photoTitle="Pre-Primary Faculty Team &amp; Leadership"
        photoSubtitle={facultyData.prePrimary.photoCaptionSub}
        largePhoto={facultyData.prePrimary.largePhoto}
        captionTitle={facultyData.prePrimary.photoCaptionTitle}
        captionSub={facultyData.prePrimary.photoCaptionSub}
      />

      {/* SECTION 9: ENROLLMENT & NEXT ACADEMIC STAGE CTA */}
      <section className="section section-navy" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="eyebrow" style={{ color: 'var(--color-champagne-gold)', letterSpacing: '0.12em' }}>
            START YOUR CHILD'S JOURNEY
          </span>
          <h2 className="section-title" style={{ color: '#fff', marginBottom: '16px' }}>
            Give Your Child the Gift of a Joyful Education
          </h2>
          <p className="section-subtitle" style={{ color: '#E2E8F0', margin: '0 auto 28px auto', textAlign: 'center' }}>
            Admissions for Nursery, Junior KG, and Senior KG are open at The Scholars High School, Jogeshwari West. Experience our caring campus first-hand.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions/" className="btn btn-gold btn-lg">
              <span>Admission Enquiry Form</span>
              <ArrowUpRight size={18} />
            </Link>
            <Link to="/academics/primary/" className="btn btn-outline-white btn-lg">
              <span>Next: Primary Section (Grades 1 to 4)</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
