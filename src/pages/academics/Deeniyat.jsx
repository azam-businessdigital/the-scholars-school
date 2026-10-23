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
  GraduationCap,
  Award,
  Globe,
  Compass
} from 'lucide-react';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import SectionHeader from '../../components/common/SectionHeader';
import { academicsData } from '../../data/academicsData';
import { schoolData } from '../../data/schoolData';

export default function Deeniyat() {
  const data = academicsData.find((a) => a.id === 'deeniyat');
  const deeniyatHead = schoolData.leadership.principals[2]; // Head of Deeniyat

  const deeniyatGallery = [
    {
      img: '/images/academics/deeniyat-classroom.jpg',
      title: 'Quranic Tajweed & Hifz Guidance',
      desc: 'Systematic phonetic recitation, Makhaarij rules, and Quranic reflection in a peaceful classroom setting.'
    },
    {
      img: '/images/hadees.png',
      title: 'Daily Hadith & Character Building',
      desc: 'Instilling humility, filial respect, truthfulness, and kindness in daily actions and interpersonal habits.'
    },
    {
      img: '/images/campus/about-home.png',
      title: 'Holistic Campus Moral Atmosphere',
      desc: 'Seamless integration of daily prayers, morning assemblies, and Islamic values alongside general academic subjects.'
    },
    {
      img: '/images/campus/banner2.jpg',
      title: 'Dedicated Campus Prayer Hall (Musalla)',
      desc: 'Serene, designated prayer space for daily congregational prayers (Salah) and spiritual contemplation.'
    }
  ];

  const dailyRoutine = [
    {
      title: 'Morning Remembrance & Du\'aa',
      desc: 'Recitation of Surah Al-Fatihah, morning supplications, and inspiring moral thoughts for the academic day.'
    },
    {
      title: 'Structured Tajweed & Hadith Class',
      desc: 'Dedicated daily periods covering Quranic pronunciation, short Surah memorization, and Hadith lessons.'
    },
    {
      title: 'Sunnah Etiquette & Mindful Meals',
      desc: 'Reciting Bismillah, eating with the right hand, sharing with peers, and practicing gratitude for sustenance.'
    },
    {
      title: 'Congregational Prayer (Salah)',
      desc: 'Students and faculty joining in congregational prayer fostering spiritual focus, discipline, and unity.'
    },
    {
      title: 'Friday Halaqah & Civic Service',
      desc: 'Weekly moral exhortation on community benevolence, honesty in society, and respecting parents and elders.'
    },
    {
      title: 'Closing Du\'aa & Farewell Salam',
      desc: 'Recitation of Kaffaratul Majlis, reflecting on the day\'s deeds, and exchanging peaceful greetings of Salam.'
    }
  ];

  const learningDomains = [
    {
      icon: <BookOpen size={22} />,
      title: 'Quranic Studies & Tajweed',
      desc: 'Correct phonetic articulation (Makhaarij), rules of Tajweed, memorization of selected Surahs, and moral reflection.'
    },
    {
      icon: <Heart size={22} />,
      title: 'Hadith Studies & Sunnah Habits',
      desc: 'Authentic sayings of the Prophet Muhammad (peace be upon him) on truthfulness, mercy, respect, and hard work.'
    },
    {
      icon: <Sparkles size={22} />,
      title: 'Practical Fiqh & Clean Living',
      desc: 'Clear, age-appropriate instruction on ritual purification (Wudu), daily prayers (Salah), fasting, and hygiene.'
    },
    {
      icon: <Globe size={22} />,
      title: 'Islamic History & Golden Age',
      desc: 'Appreciating the lives of the Prophets, righteous companions, and the immense contributions of Islamic scientists.'
    },
    {
      icon: <Smile size={22} />,
      title: 'Akhlaq, Adab & Civic Harmony',
      desc: 'Developing politeness, humility, peaceful coexistence with neighbors of all faiths, and social service.'
    },
    {
      icon: <Users size={22} />,
      title: 'Parenting & Spiritual Counseling',
      desc: 'Periodic counseling seminars assisting parents in fostering a tranquil, morally sound home environment.'
    }
  ];

  const salientFeatures = [
    'Seamless integration of Islamic morals within modern English-medium education',
    'Certified Deeniyat scholars providing patient, personalized Tajweed mentoring',
    'Daily practice of essential morning, mealtime, traveling, and bedtime Du\'aas',
    'Emphasis on civic duty, social tolerance, honesty, and mutual respect in modern society',
    'Specialized parent-counseling seminars supporting harmonious home environments',
    'Inspiring school Musalla for regular congregational prayers and spiritual peace'
  ];

  return (
    <>
      <SEO
        title="Deeniyat Program - Moral Education & Values | The Scholars School"
        description="Deeniyat program at The Scholars High School. Integrating Quranic recitation, Hadith studies, and moral character alongside English medium education."
        canonical="https://thescholarsschool.edu.in/academics/deeniyat/"
      />

      {/* Page Banner with Deeniyat Badge */}
      <div className="page-banner">
        <div className="container">
          <div className="mrak-banner-badge">
            <span className="mrak-banner-tag">VALUES &amp; CHARACTER &bull; INTEGRATED ACROSS ALL GRADES &bull; ISLAMIC FRAME OF REFERENCE</span>
          </div>
          <h1>Deeniyat: Modern Education with Islamic Frame of Reference</h1>
          <p>
            Equipping students with Quranic literacy, moral discernment, and timeless ethical principles integrated seamlessly with academic sciences.
          </p>
        </div>
      </div>

      <Breadcrumbs
        items={[
          { label: 'Academics', path: '/academics/' },
          { label: 'Integrated Deeniyat Program', path: '/academics/deeniyat/' }
        ]}
      />

      {/* SECTION 1: ABOUT DEENIYAT & CAMPUS HERO */}
      <section className="section section-white" id="section-overview">
        <div className="container">
          <div className="grid-2 academic-hero-grid stagger-group reveal-up" style={{ alignItems: 'center', gap: 'var(--space-12)' }}>
            <div className="section-header reveal-left">
              <span className="eyebrow">INSTITUTIONAL IDENTITY</span>
              <h2 className="section-title">Harmonizing Modern Sciences with Islamic Moral Character</h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: 'var(--color-slate-grey-dark)', marginBottom: '16px' }}>
                {data.overview}
              </p>
              <p style={{ color: 'var(--color-slate-grey)', lineHeight: '1.65', marginBottom: '24px' }}>
                Under the guidance of our Head of Deeniyat and our visionary trustees, the Deeniyat curriculum ensures that every child grows up with an understanding of faith, honesty, respect for elders, civic harmony, and dedication to societal service.
              </p>

              <div className="mrak-badges-row stagger-group reveal-up">
                <div className="mrak-stat-pill">
                  <div className="mrak-stat-icon sun">
                    <Heart size={19} />
                  </div>
                  <div className="mrak-stat-content">
                    <span className="mrak-stat-label">Ethos</span>
                    <div className="mrak-stat-value">Modern + Islamic Values</div>
                  </div>
                </div>

                <div className="mrak-stat-pill">
                  <div className="mrak-stat-icon clock">
                    <GraduationCap size={19} />
                  </div>
                  <div className="mrak-stat-content">
                    <span className="mrak-stat-label">Scope</span>
                    <div className="mrak-stat-value">All Grade Levels</div>
                  </div>
                </div>

                <div className="mrak-stat-pill">
                  <div className="mrak-stat-icon users">
                    <BookOpen size={19} />
                  </div>
                  <div className="mrak-stat-content">
                    <span className="mrak-stat-label">Core Focus</span>
                    <div className="mrak-stat-value">Tajweed, Hadith &amp; Adab</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="academic-hero-media card reveal-right img-sheen-wrap">
              <div className="academic-hero-floating-badge">
                <Heart size={14} /> Moral Values &amp; Quranic Study
              </div>
              <img
                src="/images/academics/deeniyat-classroom.jpg"
                alt="Students engaged in Quran recitation with Tajweed and rehal stands"
                className="academic-hero-img"
                loading="lazy"
                width="600"
                height="380"
              />
              <div className="academic-hero-caption">
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-royal-navy)', fontSize: '0.9375rem' }}>
                    Quranic Tajweed &amp; Rehal Recitation
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-slate-grey)', marginTop: '2px' }}>
                    Phonetic recitation coaching developing reverent articulation and comprehension.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: LEADERSHIP MESSAGE (HEAD OF DEENIYAT) - STANDARDIZED MRAK STYLE */}
      <section className="section mrak-principal-section">
        <div className="container">
          <SectionHeader
            eyebrow="HEAD OF DEENIYAT'S MESSAGE"
            title="Harmonizing Sacred Wisdom with Modern Learning"
            subtitle="Guiding philosophy from our Deeniyat leadership."
            centered
          />

          <div className="mrak-principal-card">
            <div className="mrak-principal-media">
              <img
                src={deeniyatHead.image}
                alt={deeniyatHead.designation}
                className="mrak-principal-avatar"
                loading="lazy"
                width="170"
                height="190"
              />
              <div className="mrak-principal-name">{deeniyatHead.designation}</div>
              <div className="mrak-principal-role">{deeniyatHead.section}</div>
              <span style={{ fontSize: '11px', color: 'var(--color-slate-grey)', marginTop: '4px' }}>
                Deeniyat &amp; Moral Character Program
              </span>
            </div>

            <div className="mrak-principal-content">
              <h3 className="mrak-principal-heading">
                Nurturing Gratitude, Upright Akhlaq &amp; Lifelong Faith
              </h3>
              <p className="mrak-principal-quote">
                &ldquo;Education achieves its highest purpose only when academic knowledge is illuminated by sound moral character and gratitude to the Almighty. Our Deeniyat curriculum seamlessly weaves Quranic Tajweed, authentic Hadith, and timeless Islamic ethics (Adab) into daily school life, shaping polite, compassionate, and upright scholars who contribute meaningfully to modern society.&rdquo;
              </p>
              <div className="mrak-principal-pillars">
                <span className="mrak-pillar-chip">&bull; Quranic Recitation with Tajweed</span>
                <span className="mrak-pillar-chip">&bull; Hadith Studies &amp; Moral Adab</span>
                <span className="mrak-pillar-chip">&bull; Practical Fiqh for Daily Life</span>
                <span className="mrak-pillar-chip">&bull; Islamic History &amp; Civilization</span>
                <span className="mrak-pillar-chip">&bull; Parent-School Spiritual Harmony</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VIBRANT DEENIYAT PHOTO GALLERY */}
      <section className="section section-ivory">
        <div className="container">
          <SectionHeader
            eyebrow="CAMPUS LIFE &amp; SPIRITUAL VALUES"
            title="Glimpses of Faith &amp; Moral Education"
            subtitle="Explore our Tajweed sessions, daily Hadith lessons, and holistic campus spiritual atmosphere."
            centered
          />

          <div className="mrak-gallery-grid-4">
            {deeniyatGallery.map((item, i) => (
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

      {/* SECTION 4: 6 CORE DEENIYAT CURRICULUM PILLARS */}
      <section className="section section-white">
        <div className="container">
          <SectionHeader
            eyebrow="CURRICULUM FRAMEWORK"
            title="The 6 Pillars of Moral &amp; Spiritual Excellence"
            subtitle="A value-based roadmap shaping scriptural literacy, personal discipline, and civic duty."
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

      {/* SECTION 5: A DAY IN DEENIYAT (DAILY SPIRITUAL RHYTHM) */}
      <section className="section section-ivory">
        <div className="container">
          <SectionHeader
            eyebrow="SPIRITUAL RHYTHM IN SCHOOL LIFE"
            title="Daily Practice of Faith &amp; Moral Reflection"
            subtitle="Integrating prayers, Sunnah manners, and moral reminders seamlessly throughout the academic day."
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

      {/* SECTION 6: SALIENT FEATURES OF DEENIYAT */}
      <section className="section section-white">
        <div className="container">
          <SectionHeader
            eyebrow="VALUES IN PRACTICE"
            title="Salient Features of the Deeniyat Program"
            subtitle="Translating moral knowledge into practical daily habits and respectful behavior."
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
            A BALANCED, VALUES-BASED EDUCATION
          </span>
          <h2 className="section-title" style={{ color: '#fff', marginBottom: '16px' }}>
            Experience Education with an Islamic Frame of Reference
          </h2>
          <p className="section-subtitle" style={{ color: '#E2E8F0', margin: '0 auto 28px auto', textAlign: 'center' }}>
            We welcome parents seeking high academic standards aligned with righteous moral character. Contact us to learn more or schedule a campus visit.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions/" className="btn btn-gold btn-lg">
              <span>Admission Enquiry Form</span>
              <ArrowUpRight size={18} />
            </Link>
            <Link to="/academics/mrak-kids/" className="btn btn-outline-white btn-lg">
              <span>Explore: MRAK Kids Pre School</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
