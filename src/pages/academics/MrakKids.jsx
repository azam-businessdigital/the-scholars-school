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
  Quote
} from 'lucide-react';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import SectionHeader from '../../components/common/SectionHeader';
import { academicsData } from '../../data/academicsData';
import { schoolData } from '../../data/schoolData';

export default function MrakKids() {
  const data = academicsData.find((a) => a.id === 'mrak-kids');
  const coordinator = schoolData.leadership.principals.find((p) => p.id === 'mrak-coordinator') || schoolData.leadership.principals[0];

  const preschoolGallery = [
    {
      img: '/images/gallery/fancy-dress-1.jpeg',
      title: 'Play-Based Sensory Discovery & Events',
      desc: 'Costume exhibitions, Montessori-inspired learning, and tactile exploration.'
    },
    {
      img: '/images/gallery/class-activity-1.jpeg',
      title: 'Creative Art & Expression',
      desc: 'Drawing, coloring, paper craft, and guided fine motor development.'
    },
    {
      img: '/images/gallery/class-activity-2.jpeg',
      title: 'Jolly Phonics & Reading Readiness',
      desc: 'Interactive letter sounds, picture stories, and vocabulary building for young minds.'
    },
    {
      img: '/images/gallery/blue-day-1.jpeg',
      title: 'Color Days & Foundational Activities',
      desc: 'Hands-on theme days, pattern recognition, and joyful socialization.'
    },
    {
      img: '/images/academics/pre-school.jpg',
      title: 'Safe Child-Friendly Classrooms',
      desc: 'Low ergonomic desks, vibrant learning corners, and air-conditioned spaces.'
    }
  ];

  const dailyRoutine = [
    {
      title: 'Morning Circle & Du\'aa',
      desc: 'Welcoming smiles, gentle morning remembrance, and joyful nursery songs.'
    },
    {
      title: 'Phonics & Story World',
      desc: 'Interactive picture books, letter sounds, and playful vocabulary games.'
    },
    {
      title: 'Snack & Sharing Time',
      desc: 'Learning table manners, sharing snacks with peers, and clean handwashing.'
    },
    {
      title: 'Sensory & Montessori Play',
      desc: 'Hands-on shape sorters, building blocks, puzzles, and sensory trays.'
    },
    {
      title: 'Music, Movement & Rhymes',
      desc: 'Rhythmic movement, action songs, and gross motor coordination exercises.'
    },
    {
      title: 'Pack-up & Cheerful Farewell',
      desc: 'Reflective recap of the day and cheerful goodbye songs with teachers.'
    }
  ];

  const playfulHighlights = [
    {
      icon: <Palette size={22} />,
      title: 'Creative Arts & Sensory Play',
      desc: 'Finger painting, play clay, collage work, and color discovery that awaken imagination.'
    },
    {
      icon: <Puzzle size={22} />,
      title: 'Montessori Hands-On Learning',
      desc: 'Child-safe tactile wooden puzzles, counting rods, and self-correcting cognitive toys.'
    },
    {
      icon: <BookOpen size={22} />,
      title: 'Early Phonics & Storytelling',
      desc: 'Building language confidence through rhymes, picture talk, and Jolly Phonics sounds.'
    },
    {
      icon: <Heart size={22} />,
      title: 'Islamic Ethics & Good Habits',
      desc: 'Foundational Du\'aas, greeting with Salam, kindness, respect, and gratitude.'
    },
    {
      icon: <ShieldCheck size={22} />,
      title: 'Safe Air-Conditioned Spaces',
      desc: 'Childproofed, climate-controlled classrooms with attentive educator care.'
    },
    {
      icon: <Smile size={22} />,
      title: 'Emotional Warmth & Individual Care',
      desc: 'Loving teachers ensuring smooth separation from parents and joyful school days.'
    }
  ];

  return (
    <>
      <SEO
        title="MRAK Kids Pre School - Early Childhood Foundation"
        description="Maulana Riyaz Ahmed Khan (MRAK) Kids Pre School offers early childhood learning, phonics, and sensory exploration in Jogeshwari West, Mumbai."
        canonical="https://thescholarsschool.edu.in/academics/mrak-kids/"
      />

      {/* Page Banner with Preschool Badge */}
      <div className="page-banner">
        <div className="container">
          <div className="mrak-banner-badge">
            <img
              src="/images/preschool-logo.png"
              alt="MRAK Kids Pre School Logo"
              className="mrak-banner-logo"
            />
            <span className="mrak-banner-tag">MRAK - THE SCHOLARS KIDS PRE SCHOOL &bull; STD: NURSERY, MONT – 2 &amp; SR.KG</span>
          </div>
          <h1>MRAK (Maulana Riyaz Ahmed Khan) - The Scholars Kids Pre School</h1>
          <p>
            A vibrant, caring early childhood haven covering STD: Nursery, Mont – 2 &amp; Sr.KG, where sensory play, Jolly Phonics, and loving moral values spark a lifelong curiosity for learning.
          </p>
        </div>
      </div>

      <Breadcrumbs
        items={[
          { label: 'Academics', path: '/academics/' },
          { label: 'MRAK - The Scholars Kids Pre School', path: '/academics/mrak-kids/' }
        ]}
      />

      {/* SECTION 1: ABOUT MRAK KIDS & OFFICIAL EMBLEM */}
      <section className="section section-white" id="section-overview">
        <div className="container">
          <div className="grid-2 academic-hero-grid stagger-group reveal-up" style={{ alignItems: 'center', gap: 'var(--space-12)' }}>
            <div className="section-header reveal-left">
              <span className="eyebrow">A LOVING EARLY START</span>
              <h2 className="section-title">Where Every Child Smiles, Explores &amp; Grows</h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: 'var(--color-slate-grey-dark)', marginBottom: '16px' }}>
                {data.overview}
              </p>
              <p style={{ color: 'var(--color-slate-grey)', lineHeight: '1.65', marginBottom: '24px' }}>
                At MRAK Kids, we understand that a child's early developmental stage is where imagination, emotional resilience, and social bonding take root. Our activity-based curriculum blends Montessori inquiry with Islamic ethics, creating a balanced and happy transition from home to school.
              </p>

              <div className="mrak-badges-row stagger-group reveal-up">
                <div className="mrak-stat-pill">
                  <div className="mrak-stat-icon sun">
                    <Sun size={19} />
                  </div>
                  <div className="mrak-stat-content">
                    <span className="mrak-stat-label">Standards</span>
                    <div className="mrak-stat-value">Nursery, Mont – 2 &amp; Sr.KG</div>
                  </div>
                </div>

                <div className="mrak-stat-pill">
                  <div className="mrak-stat-icon clock">
                    <Clock size={19} />
                  </div>
                  <div className="mrak-stat-content">
                    <span className="mrak-stat-label">Shift Timings</span>
                    <div className="mrak-stat-value">{data.timings}</div>
                  </div>
                </div>

                <div className="mrak-stat-pill">
                  <div className="mrak-stat-icon users">
                    <Users size={19} />
                  </div>
                  <div className="mrak-stat-content">
                    <span className="mrak-stat-label">Class Ratio</span>
                    <div className="mrak-stat-value">1:12 Care</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mrak-logo-display card reveal-right img-sheen-wrap">
              <img
                src="/images/preschool-logo.png"
                alt="MRAK The Scholars Kids Pre School Official Emblem"
                className="mrak-official-emblem"
                loading="lazy"
              />
              <div className="mrak-logo-motto">MRAK - The Scholars Kids Pre School</div>
              <div className="mrak-logo-sub">Modern Education with Islamic Frame of Reference</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COORDINATOR'S MESSAGE */}
      <section className="section mrak-principal-section">
        <div className="container">
          <SectionHeader
            eyebrow="CO-ORDINATOR'S MESSAGE"
            title="A Warm Welcome to Our Little Explorers"
            subtitle="Guiding philosophy from our MRAK Kids Pre-School leadership."
            centered
          />

          <div className="mrak-principal-card">
            <div className="mrak-principal-media">
              <img
                src={coordinator.image}
                alt={coordinator.designation}
                className="mrak-principal-avatar"
                loading="lazy"
                width="170"
                height="190"
              />
              <div className="mrak-principal-name">{coordinator.designation}</div>
              <div className="mrak-principal-role">{coordinator.section}</div>
              <span style={{ fontSize: '11px', color: 'var(--color-slate-grey)', marginTop: '4px' }}>
                {coordinator.section}
              </span>
            </div>

            <div className="mrak-principal-content">
              <h3 className="mrak-principal-heading">
                Nurturing Wonder, Character and Confidence from Day One
              </h3>
              <p className="mrak-principal-quote">
                &ldquo;At MRAK Kids Pre School, we celebrate every toddler's individuality. Early childhood is a window of wondrous growth where young hearts and curious minds begin to understand the world. We combine loving warmth, child-friendly learning environments, and timeless moral values so your child feels safe, valued, and genuinely excited to come to school every single morning.&rdquo;
              </p>
              <div className="mrak-principal-pillars">
                <span className="mrak-pillar-chip">&bull; Child-First Care</span>
                <span className="mrak-pillar-chip">&bull; Moral Foundational Ethics</span>
                <span className="mrak-pillar-chip">&bull; Gentle School Readiness</span>
                <span className="mrak-pillar-chip">&bull; Joyful Hands-On Inquiry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VIBRANT PRESCHOOL PHOTO GALLERY */}
      <section className="section section-ivory">
        <div className="container">
          <SectionHeader
            eyebrow="CAMPUS LIFE &amp; ACTIVITIES"
            title="Glimpses of Joyful Early Learning"
            subtitle="Step into our colorful playrooms, activity centers, and hands-on discovery corners."
            centered
          />

          <div className="mrak-gallery-grid">
            {preschoolGallery.map((item, i) => (
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

      {/* SECTION 4: PLAYFUL LEARNING DOMAINS */}
      <section className="section section-white">
        <div className="container">
          <SectionHeader
            eyebrow="HOLISTIC MONTESSORI PEDAGOGY"
            title="Designed for Little Hands &amp; Big Imaginations"
            subtitle="Our 6 core development areas supporting cognitive, physical, emotional, and spiritual growth."
            centered
          />

          <div className="academic-domain-grid">
            {playfulHighlights.map((hl, i) => (
              <div key={i} className="academic-domain-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div className="academic-domain-icon-wrap">
                    {hl.icon}
                  </div>
                  <span className="academic-domain-tag">Domain 0{i + 1}</span>
                </div>
                <h3 className="academic-domain-title">
                  {hl.title}
                </h3>
                <p className="academic-domain-desc">
                  {hl.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: A DAY AT MRAK KIDS (ROUTINE) */}
      <section className="section section-ivory">
        <div className="container">
          <SectionHeader
            eyebrow="GENTLE DAILY ROUTINE"
            title="A Day in the Life of a Pre-Schooler"
            subtitle="Structured rhythms balancing focused play, social sharing, movement, and quiet reflection."
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

      {/* SECTION 6: ENROLLMENT & NEXT ACADEMIC STAGE CTA */}
      <section className="section section-navy" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="eyebrow" style={{ color: 'var(--color-champagne-gold)', letterSpacing: '0.12em' }}>
            START YOUR CHILD'S JOURNEY
          </span>
          <h2 className="section-title" style={{ color: '#fff', marginBottom: '16px' }}>
            Give Your Child the Best Start in Education
          </h2>
          <p className="section-subtitle" style={{ color: '#E2E8F0', margin: '0 auto 28px auto', textAlign: 'center' }}>
            Admissions for MRAK (Maulana Riyaz Ahmed Khan) - The Scholars Kids Pre School are open. Visit our campus at Hill Park, Jogeshwari West to experience our warm, joyful environment.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions/" className="btn btn-gold btn-lg">
              <span>Enroll Your Toddler</span>
              <ArrowUpRight size={18} />
            </Link>
            <Link to="/academics/primary/" className="btn btn-outline-white btn-lg">
              <span>Explore The Scholars Primary School</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
