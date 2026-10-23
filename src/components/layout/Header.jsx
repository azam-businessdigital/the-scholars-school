import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  ShieldCheck,
  MapPin,
  Sparkles,
  BookOpen,
  GraduationCap,
  Award,
  Briefcase,
  Heart,
  School
} from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const closeTimeoutRef = React.useRef(null);

  // Scroll detection for dynamic header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAcademicsEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setAcademicsOpen(true);
  };

  const handleAcademicsLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setAcademicsOpen(false);
    }, 180);
  };

  const closeDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setAcademicsOpen(false);
  };

  // Close menus and reset scrolled header state on route change
  useEffect(() => {
    closeDropdown();
    setMobileMenuOpen(false);
    setMobileAcademicsOpen(false);
    setIsScrolled(false);
  }, [location.pathname]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Lock scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Exact and prefix active state matching that reliably handles subfolder routing & trailing slashes
  const isLinkActive = (path, isExact = false) => {
    const current = (location.pathname || '/').replace(/\/+$/, '') || '/';
    const target = (path || '/').replace(/\/+$/, '') || '/';
    if (isExact || target === '/') {
      return current === target;
    }
    return current === target || current.startsWith(`${target}/`);
  };

  const schoolingLinks = [
    {
      name: 'MRAK Kids Pre School',
      desc: 'STD: Nursery, Mont – 2 & Sr.KG • Early Childhood',
      path: '/academics/mrak-kids/',
      icon: Sparkles
    },
    {
      name: 'Primary Section',
      desc: 'Grades 1 to 4 • Smart Digital Classrooms',
      path: '/academics/primary/',
      icon: GraduationCap
    },
    {
      name: 'Secondary Section',
      desc: 'Grades 5 to 10 • Maharashtra SSC Board',
      path: '/academics/secondary/',
      icon: Award
    }
  ];

  const collegeAndValuesLinks = [
    {
      name: 'Junior College (Girls Section)',
      desc: 'XI & XII Arts & Commerce • HSC Board Distinction',
      path: '/academics/junior-college/girls/',
      icon: GraduationCap
    },
    {
      name: 'Junior College (Boys Section)',
      desc: 'XI & XII Arts & Commerce • Professional Focus',
      path: '/academics/junior-college/boys/',
      icon: Briefcase
    },
    {
      name: 'Integrated Deeniyat Program',
      desc: 'Modern Education with Islamic Frame of Reference',
      path: '/academics/deeniyat/',
      icon: Heart
    }
  ];

  return (
    <>
      {/* Top Bar with verified school contact: Trust (Left), Mobile no (Center), Email (Right) */}
      <div className="topbar">
        <div className="header-container">
          <div className="topbar-content">
            <div className="topbar-left">
              <span className="topbar-trust">
                <ShieldCheck size={13} className="topbar-gold-icon" />
                <span>Al-Qalam Educational Trust (Regd. 1991)</span>
              </span>
            </div>
            <div className="topbar-center">
              <a href="tel:+918976890569" className="topbar-link">
                <Phone size={12} className="topbar-icon" />
                <span>+91 8976890569</span>
              </a>
            </div>
            <div className="topbar-right">
              <a href="mailto:alqalams26@gmail.com" className="topbar-link">
                <Mail size={12} className="topbar-icon" />
                <span>alqalams26@gmail.com</span>
              </a>
              <span className="topbar-sep">|</span>
              <a href="mailto:info@thescholarsschool.edu.in" className="topbar-link">
                <span>info@thescholarsschool.edu.in</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`main-header ${isScrolled ? 'header-scrolled' : ''}`} role="banner">
        <div className="header-container">
          <div className="header-inner">
            {/* Brand Logo & Typographic Signature */}
            <Link to="/" className="header-brand" aria-label="The Scholars High School Home">
              <div className="brand-crest-wrap">
                <img
                  src="/images/logo.png"
                  alt="The Scholars High School Crest"
                  className="header-logo"
                  width="60"
                  height="60"
                />
              </div>
              <div className="brand-text-wrap">
                <span className="brand-title">THE SCHOLARS</span>
                <span className="brand-sub">HIGH SCHOOL &amp; JR. COLLEGE</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="nav-menu" aria-label="Main Navigation">
              <Link to="/" className={`nav-link ${isLinkActive('/', true) ? 'active' : ''}`}>
                <span>Home</span>
              </Link>

              <Link to="/about-us/" className={`nav-link ${isLinkActive('/about-us') ? 'active' : ''}`}>
                <span>About Us</span>
              </Link>

              {/* Academics Mega Dropdown */}
              <div
                className="nav-item has-mega-menu"
                onMouseEnter={handleAcademicsEnter}
                onMouseLeave={handleAcademicsLeave}
              >
                <Link
                  to="/academics/"
                  className={`nav-link nav-link-dropdown ${isLinkActive('/academics') ? 'active' : ''}`}
                  aria-haspopup="true"
                  aria-expanded={academicsOpen}
                  onClick={closeDropdown}
                >
                  <span>Academics</span>
                  <ChevronDown size={14} className={`dropdown-chevron ${academicsOpen ? 'rotate' : ''}`} />
                </Link>

                {/* Luxury Mega Dropdown */}
                <div
                  className={`mega-menu-wrapper ${academicsOpen ? 'is-visible' : ''}`}
                  role="region"
                  aria-label="Academics Submenu"
                  onMouseEnter={handleAcademicsEnter}
                  onMouseLeave={handleAcademicsLeave}
                >
                  <div className="mega-menu-inner">
                    {/* Column 1: School Education */}
                    <div className="mega-col">
                      <div className="mega-col-header">
                        <School size={16} className="mega-col-icon" />
                        <span>FOUNDATION &amp; SCHOOLING</span>
                      </div>
                      <div className="mega-links-grid">
                        {schoolingLinks.map((item) => {
                          const IconComp = item.icon;
                          const isActive = location.pathname === item.path;
                          return (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={`mega-link-card ${isActive ? 'active' : ''}`}
                              onClick={closeDropdown}
                            >
                              <div className="mega-card-icon">
                                <IconComp size={16} />
                              </div>
                              <div className="mega-card-content">
                                <div className="mega-card-title">{item.name}</div>
                                <div className="mega-card-desc">{item.desc}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {/* Column 2: Junior College & Values */}
                    <div className="mega-col">
                      <div className="mega-col-header">
                        <Briefcase size={16} className="mega-col-icon" />
                        <span>JUNIOR COLLEGE &amp; VALUES</span>
                      </div>
                      <div className="mega-links-grid">
                        {collegeAndValuesLinks.map((item) => {
                          const IconComp = item.icon;
                          const isActive = location.pathname === item.path;
                          return (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={`mega-link-card ${isActive ? 'active' : ''}`}
                              onClick={closeDropdown}
                            >
                              <div className="mega-card-icon">
                                <IconComp size={16} />
                              </div>
                              <div className="mega-card-content">
                                <div className="mega-card-title">{item.name}</div>
                                <div className="mega-card-desc">{item.desc}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Mega Menu Footer Banner */}
                  <div className="mega-menu-footer">
                    <div className="mega-footer-left">
                      <span className="mega-badge-pill">100% Board Pass Rate</span>
                      <span className="mega-badge-pill">7-Floor AC Campus</span>
                      <span className="mega-badge-pill">Estd. 1993 • Al-Qalam Trust</span>
                    </div>
                    <Link to="/academics/" className="mega-footer-cta" onClick={closeDropdown}>
                      <span>Curriculum Overview</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>

              <Link to="/announcements/" className={`nav-link ${isLinkActive('/announcements') ? 'active' : ''}`}>
                <span>Notices</span>
              </Link>

              <Link to="/results/" className={`nav-link ${isLinkActive('/results') ? 'active' : ''}`}>
                <span>Results</span>
              </Link>

              <Link to="/media-news/" className={`nav-link ${isLinkActive('/media-news') ? 'active' : ''}`}>
                <span>News &amp; Media</span>
              </Link>

              <Link to="/gallery/" className={`nav-link ${isLinkActive('/gallery') ? 'active' : ''}`}>
                <span>Gallery</span>
              </Link>

              <Link to="/contact-us/" className={`nav-link ${isLinkActive('/contact-us') ? 'active' : ''}`}>
                <span>Contact</span>
              </Link>
            </nav>

            {/* Header Actions */}
            <div className="header-actions">
              <Link to="/admissions/" className="btn btn-primary header-cta-btn">
                <span>Admission Enquiry</span>
                <ArrowUpRight size={16} />
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                className="mobile-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <>
          <div
            className="mobile-drawer-overlay"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            <div className="mobile-drawer-header">
              <Link to="/" className="header-brand" onClick={() => setMobileMenuOpen(false)}>
                <img src="/images/logo.png" alt="The Scholars School Logo" style={{ height: '44px', width: 'auto' }} />
                <div className="brand-text-wrap" style={{ marginLeft: '8px' }}>
                  <div className="brand-title" style={{ fontSize: '16px' }}>THE SCHOLARS</div>
                  <div className="brand-sub" style={{ fontSize: '9px' }}>HIGH SCHOOL &amp; JR. COLLEGE</div>
                </div>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Navigation"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-royal-navy)' }}
              >
                <X size={24} />
              </button>
            </div>

            <ul className="mobile-drawer-nav">
              <li>
                <Link to="/" className={`mobile-nav-link ${isLinkActive('/', true) ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about-us/" className={`mobile-nav-link ${isLinkActive('/about-us') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <div
                  className={`mobile-nav-link ${isLinkActive('/academics') ? 'active' : ''}`}
                  onClick={() => setMobileAcademicsOpen(!mobileAcademicsOpen)}
                  style={{ cursor: 'pointer' }}
                >
                  <span>Academic Offerings</span>
                  <ChevronDown size={16} style={{ transform: mobileAcademicsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </div>
                {mobileAcademicsOpen && (
                  <ul className="mobile-submenu">
                    <li>
                      <Link to="/academics/" className={location.pathname === '/academics/' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>
                        <strong>Overview of Academics</strong>
                      </Link>
                    </li>
                    {schoolingLinks.concat(collegeAndValuesLinks).map((item) => (
                      <li key={item.path}>
                        <Link to={item.path} className={location.pathname === item.path ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link to="/announcements/" className={`mobile-nav-link ${isLinkActive('/announcements') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                  <span>Announcements</span>
                </Link>
              </li>
              <li>
                <Link to="/results/" className={`mobile-nav-link ${isLinkActive('/results') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                  <span>100% Board Results</span>
                </Link>
              </li>
              <li>
                <Link to="/media-news/" className={`mobile-nav-link ${isLinkActive('/media-news') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                  <span>News &amp; Media</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery/" className={`mobile-nav-link ${isLinkActive('/gallery') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                  <span>Photo Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/careers/" className={`mobile-nav-link ${isLinkActive('/careers') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                  <span>Careers &amp; Vacancies</span>
                </Link>
              </li>
              <li>
                <Link to="/contact-us/" className={`mobile-nav-link ${isLinkActive('/contact-us') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                  <span>Contact Campus</span>
                </Link>
              </li>
            </ul>

            <div className="mobile-drawer-footer">
              <a
                href="tel:+918976890569"
                className="btn btn-outline"
                style={{ width: '100%', marginBottom: '8px', gap: '8px', fontSize: '13px', padding: '10px 12px', whiteSpace: 'normal', textAlign: 'center' }}
              >
                <Phone size={14} />
                <span>Call Helpline: +91 8976890569</span>
              </a>
              <a
                href="mailto:alqalams26@gmail.com"
                className="btn btn-outline"
                style={{ width: '100%', marginBottom: '8px', gap: '8px', fontSize: '13px', padding: '9px 12px', whiteSpace: 'normal', textAlign: 'center' }}
              >
                <Mail size={14} />
                <span>alqalams26@gmail.com</span>
              </a>
              <a
                href="mailto:info@thescholarsschool.edu.in"
                className="btn btn-outline"
                style={{ width: '100%', marginBottom: '10px', gap: '8px', fontSize: '13px', padding: '9px 12px', whiteSpace: 'normal', textAlign: 'center' }}
              >
                <Mail size={14} />
                <span>info@thescholarsschool.edu.in</span>
              </a>
              <Link
                to="/admissions/"
                className="btn btn-primary"
                style={{ width: '100%', marginBottom: 'var(--space-3)', fontSize: '13.5px', padding: '10px 14px', whiteSpace: 'normal', textAlign: 'center' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Admission Enquiry</span>
                <ArrowUpRight size={15} />
              </Link>
              <p style={{ fontSize: '11px', color: 'var(--color-slate-grey)', textAlign: 'center', margin: 0 }}>
                Al-Qalam Educational Trust (Regd. 1991)
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

