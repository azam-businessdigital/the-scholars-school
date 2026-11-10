import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/campus/building-hero.jpg',
    eyebrow: 'ESTD. 1993 • JOGESHWARI WEST, MUMBAI',
    title: 'Welcome to The Scholars High School & Junior College',
    subtitle: 'A modern 7-storey campus in Jogeshwari West bringing together top academics, hands-on learning, and strong everyday values from Pre-School to Junior College.',
    primaryBtn: { text: 'Explore Campus', path: '/about-us/' },
    secondaryBtn: { text: 'Admissions 2027–28', path: '/admissions/' }
  },
  {
    id: 2,
    image: '/images/academics/pre-school.jpg',
    eyebrow: 'MRAK KIDS PRE-SCHOOL • NURSERY, MONT-2 & SR.KG',
    title: 'Early Wonder & Joyful Foundational Learning',
    subtitle: 'A loving first step into school where little learners build confidence through phonics, sensory play, and caring teachers in bright, air-conditioned rooms.',
    primaryBtn: { text: 'Explore MRAK Kids', path: '/academics/mrak-kids/' },
    secondaryBtn: { text: 'Admission Enquiry', path: '/admissions/' }
  },
  {
    id: 3,
    image: '/images/gallery/Pebble Painting - Primary Section/WhatsApp Image 2026-10-29 at 16.12.21.jpeg',
    eyebrow: 'THE SCHOLARS PRIMARY SCHOOL • GRADES 1 TO 4',
    title: 'Interactive Learning & Active Student Curiosity',
    subtitle: 'Building a love for reading, math, and science through interactive smart boards, creative arts, and friendly classroom guidance.',
    primaryBtn: { text: 'Explore Primary', path: '/academics/primary/' },
    secondaryBtn: { text: 'View Curriculum', path: '/academics/' }
  },
  {
    id: 4,
    image: '/images/facilities/science-lab-1.jpg',
    eyebrow: 'THE SCHOLARS HIGH SCHOOL • GRADES 5 TO 10',
    title: 'Academic Rigor & Consistent 100% SSC Results',
    subtitle: 'Experienced subject teachers, well-equipped science labs, and separate wings for boys and girls delivering 100% board pass results year after year.',
    primaryBtn: { text: 'Explore High School', path: '/academics/secondary/' },
    secondaryBtn: { text: '100% Board Results', path: '/results/' }
  },
  {
    id: 5,
    image: '/images/gallery/College Section/WhatsApp Image 2026-10-27 at 8.12.08 PM.jpeg',
    eyebrow: 'THE SCHOLARS JUNIOR COLLEGE • ARTS & COMMERCE (HSC)',
    title: 'Collegiate Excellence & Professional Degree Pathways',
    subtitle: 'Higher Secondary education in Commerce and Arts with separate shifts, expert lecturers, and dedicated guidance for university degrees and CA foundations.',
    primaryBtn: { text: 'Junior College (Girls)', path: '/academics/junior-college/girls/' },
    secondaryBtn: { text: 'Junior College (Boys)', path: '/academics/junior-college/boys/' }
  },
  {
    id: 6,
    image: '/images/gallery/Deeniyat Girls/deeniyat-girls-4.jpg',
    eyebrow: 'INTEGRATED DEENIYAT • ALL GRADE LEVELS',
    title: 'Modern Education with Islamic Frame of Reference',
    subtitle: 'Daily Quran recitation with Tajweed, Hadith reflections, and good manners integrated naturally into the school day alongside general academics.',
    primaryBtn: { text: 'Deeniyat Program', path: '/academics/deeniyat/' },
    secondaryBtn: { text: 'About Our Ethos', path: '/about-us/' }
  }
];

export default function HeroSlider3D() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const SLIDE_DURATION = 5500; // 5.5s auto loop interval

  // Continuous Auto-play loop
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [current]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
    touchStartX.current = null;
  };

  const activeSlide = slides[current];

  return (
    <section
      className="hero-3d-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Campus Hero Showcase"
    >
      {/* Background Slides with Cinematic Zoom Transition */}
      <div className="hero-3d-stage">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              className={`hero-3d-slide ${isActive ? 'active' : ''}`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="hero-3d-bg-image"
                loading={index === 0 ? 'eager' : 'lazy'}
                width="1920"
                height="1080"
              />
              <div className="hero-3d-gradient-overlay" />
            </div>
          );
        })}
        {/* Subtle Watermark Branding */}
        <div className="hero-watermark-text" aria-hidden="true">
          THE SCHOLARS
        </div>
      </div>

      {/* Floating Left/Right Slider Arrows */}
      <button
        type="button"
        className="hero-arrow-floating hero-arrow-left"
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        type="button"
        className="hero-arrow-floating hero-arrow-right"
        onClick={handleNext}
        aria-label="Next Slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slide Foreground Content with Key-Triggered Entrance Animations */}
      <div className="container hero-3d-content-wrapper">
        <div className="hero-3d-grid">
          <div key={current} className="hero-3d-animated-content">
            <div className="hero-3d-eyebrow-pill">
              <Sparkles size={14} className="hero-3d-gold-icon" />
              <span>{activeSlide.eyebrow}</span>
            </div>

            <h1 className="hero-3d-title">
              {activeSlide.title}
            </h1>

            <p className="hero-3d-description">
              {activeSlide.subtitle}
            </p>

            <div className="hero-3d-actions">
              <Link to={activeSlide.primaryBtn.path} className="btn btn-gold btn-lg hero-3d-btn-glow">
                <span>{activeSlide.primaryBtn.text}</span>
                <ArrowUpRight size={18} />
              </Link>
              <Link to={activeSlide.secondaryBtn.path} className="btn btn-outline-white btn-lg hero-3d-btn-secondary">
                <span>{activeSlide.secondaryBtn.text}</span>
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls: Arrows, Progress, Numbers */}
      <div className="container hero-3d-controls-container">
        <div className="hero-3d-controls-bar">
          {/* Arrow Buttons */}
          <div className="hero-3d-arrows">
            <button
              type="button"
              className="hero-3d-nav-arrow"
              onClick={handlePrev}
              aria-label="Previous Slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className="hero-3d-nav-arrow"
              onClick={handleNext}
              aria-label="Next Slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Slide Indicators with Progress Fill Animation */}
          <div className="hero-3d-indicators" role="tablist">
            {slides.map((s, index) => {
              const isSelected = index === current;
              return (
                <button
                  key={s.id}
                  type="button"
                  className={`hero-3d-indicator-dot ${isSelected ? 'active' : ''}`}
                  onClick={() => setCurrent(index)}
                  role="tab"
                  aria-selected={isSelected}
                  aria-label={`Slide ${index + 1}: ${s.title}`}
                >
                  <span className="hero-3d-indicator-label">0{index + 1}</span>
                  {isSelected && (
                    <span
                      key={`prog-${current}`}
                      className="hero-3d-indicator-progress"
                      style={{ animationDuration: `${SLIDE_DURATION}ms` }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Current Slide Counter */}
          <div className="hero-3d-counter">
            <span className="hero-3d-counter-current">0{current + 1}</span>
            <span className="hero-3d-counter-sep">/</span>
            <span className="hero-3d-counter-total">0{slides.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

