import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  HelpCircle,
  FileText,
  Calendar,
  Phone,
  ChevronDown,
  ArrowRight,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Building2,
  Users,
  Clock,
  MapPin,
  MessageCircle,
  Download,
  Award,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SectionHeader from '../components/common/SectionHeader';
import AdmissionForm from '../components/forms/AdmissionForm';
import { schoolData } from '../data/schoolData';

export default function Admissions() {
  const [selectedSection, setSelectedSection] = useState('');
  const [activeEligibility, setActiveEligibility] = useState('preschool');
  const [activeChecklistTab, setActiveChecklistTab] = useState('general');
  const [faqCategory, setFaqCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState(null);

  const handleSelectStream = (sectionName) => {
    setSelectedSection(sectionName);
    const formEl = document.getElementById('admission-enquiry-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setTimeout(() => {
      const selectEl = document.getElementById('section');
      if (selectEl) {
        selectEl.focus();
      }
    }, 400);
  };

  const academicStreams = [
    {
      id: 'mrak-kids',
      title: 'MRAK - The Scholars Kids Pre School',
      category: 'STD: Nursery, Mont – 2 & Sr.KG',
      ageBadge: 'Nursery, Mont – 2 & Sr.KG',
      image: '/images/gallery/fancy-dress-1.jpeg',
      formValue: 'MRAK Kids: Nursery',
      desc: 'Joyful foundational schooling covering STD: Nursery, Mont – 2 & Sr.KG focused on sensory development, Jolly Phonics, early mathematics, and loving moral values.',
      features: [
        'Air-conditioned, child-safe interactive rooms with lift access',
        'Jolly Phonics awareness & early numeracy play',
        'Caring, individualized educator attention'
      ]
    },
    {
      id: 'primary',
      title: 'The Scholars Primary School',
      category: 'Grades 1 to 4',
      ageBadge: 'Age: 6 – 9 Years',
      image: '/images/gallery/smart-board-2.jfif',
      formValue: 'The Scholars Primary School (Grades 1 to 4)',
      desc: 'Maharashtra State Board aligned curriculum emphasizing English reading fluency, analytical mathematics, and environmental science.',
      features: [
        'Hands-on computer & language education',
        'Daily Deeniyat with Tajweed pronunciation',
        'Co-curricular arts, sports, and elocution'
      ]
    },
    {
      id: 'secondary',
      title: 'The Scholars High School',
      category: 'Grades 5 to 10 (Separate Wings)',
      ageBadge: 'Age: 10 – 15 Years',
      image: '/images/gallery/science-activity-4.jpeg',
      formValue: 'The Scholars High School (Grades 5 to 10 - Boys)',
      desc: 'Rigorous academic preparation for SSC Board examinations with dedicated, separate wings and instructional staff for boys and girls.',
      features: [
        'Modern physics, chemistry & biology labs',
        'Dedicated boys & girls instructional floors',
        '100% SSC board passing track record'
      ]
    },
    {
      id: 'junior-college',
      title: 'The Scholars Junior College of Arts and Commerce',
      category: 'Grades XI & XII Arts & Commerce',
      ageBadge: 'Higher Secondary (HSC)',
      image: '/images/gallery/college-g-1.jpg',
      formValue: 'The Scholars Junior College of Arts and Commerce (Girls Section)',
      desc: 'Comprehensive Arts & Commerce education preparing students for professional university degrees (CA, CS, B.Com, BMS, BAF, B.A.) in separate wings.',
      features: [
        'Arts, Humanities, Accountancy & Economics expertise',
        'Independent shifts for boys & girls',
        'Career mentorship & competitive exam support'
      ]
    },
    {
      id: 'deeniyat',
      title: 'Integrated Deeniyat Program',
      category: 'Values & Islamic Ethics',
      ageBadge: 'Integrated All Grades',
      image: '/images/gallery/ic.jpeg',
      formValue: 'Integrated Deeniyat Program',
      desc: 'Holistic values-based education integrating Quranic recitation with Tajweed, Hadith studies, and Islamic etiquette into daily school periods alongside English-medium academics.',
      features: [
        'Quranic recitation with authentic Tajweed rules',
        'Hadith memorization, daily Duas & Islamic jurisprudence (Fiqh)',
        'Moral character mentoring, elder respect & social responsibility'
      ]
    }
  ];

  const eligibilityCriteria = {
    preschool: {
      title: 'MRAK (Maulana Riyaz Ahmed Khan) - The Scholars Kids Pre School',
      shortName: 'MRAK Kids Pre-School',
      ageLimit: 'Nursery: 3+ yrs | Mont – 2: 4+ yrs | Sr.KG: 5+ yrs',
      grades: 'STD: Nursery, Mont – 2 & Sr.KG',
      shift: 'Morning Shift: 9:00 AM to 12:00 PM',
      readiness: 'Basic curiosity, language immersion, and social habit encouragement',
      initialDocs: 'Original Municipal Birth Certificate & 4 passport photos',
      formValue: 'MRAK Kids: Nursery'
    },
    primary: {
      title: 'The Scholars Primary School (Grades 1 to 4)',
      shortName: 'Primary School',
      ageLimit: 'Grade 1: Minimum 6 years completed as per Maharashtra norms',
      grades: 'Standards 1st to 4th',
      shift: 'Day Shift: 8:00 AM to 1:30 PM',
      readiness: 'Grade-appropriate reading readiness & basic arithmetic',
      initialDocs: 'Transfer Certificate (TC), Previous Marksheet, Aadhaar',
      formValue: 'The Scholars Primary School (Grades 1 to 4)'
    },
    secondary: {
      title: 'The Scholars High School (Grades 5 to 10)',
      shortName: 'High School',
      ageLimit: 'Age appropriate for enrolled grade (10 to 15 years)',
      grades: 'Standards 5th to 10th (Segregated Boys & Girls Sections)',
      shift: 'Separate shifts & dedicated faculty floors',
      readiness: 'Sound previous academic foundation & conduct record',
      initialDocs: 'Original Countersigned TC, 2-Year Report Cards, Aadhaar',
      formValue: 'The Scholars High School (Grades 5 to 10 - Boys)'
    },
    juniorcollege: {
      title: 'The Scholars Junior College of Arts and Commerce (XI & XII)',
      shortName: 'Junior College',
      ageLimit: 'Successful completion of 10th Standard (SSC / CBSE / ICSE)',
      grades: 'XI & XII Arts & Commerce (Independent Wings)',
      shift: 'College Morning / Afternoon Shifts',
      readiness: 'Minimum passing percentage in Class 10 board examination',
      initialDocs: '10th Board Marksheet, Original Leaving Certificate, Migration Cert',
      formValue: 'The Scholars Junior College of Arts and Commerce (Girls Section)'
    },
    deeniyat: {
      title: 'Integrated Deeniyat Program (Moral & Islamic Values)',
      shortName: 'Deeniyat Program',
      ageLimit: 'All Enrolled Students (Pre-School through Junior College)',
      grades: 'Integrated into all grades (Nursery to Grade 10 & Junior College)',
      shift: 'Embedded daily periods within regular school hours',
      readiness: 'Open to all enrolled learners; interest in Quranic recitation with Tajweed and Islamic ethics',
      initialDocs: 'Standard institutional admission documents (Birth Certificate, TC, or Aadhaar)',
      formValue: 'Integrated Deeniyat Program'
    }
  };

  const roadmapSteps = [
    {
      num: '01',
      title: 'Submit Online Enquiry',
      time: 'Immediate',
      desc: 'Fill out the digital enquiry application below or visit our Hill Park campus reception counter to register interest.'
    },
    {
      num: '02',
      title: 'Counseling & Interaction',
      time: 'Within 24–48 Hours',
      desc: 'Our academic coordinators hold a friendly, constructive interaction with the student and parents to assess grade readiness.'
    },
    {
      num: '03',
      title: 'Document Verification',
      time: 'Campus Desk Visit',
      desc: 'Parents submit original documents (Birth Certificate, Leaving Certificate, Marksheets, Aadhaar) for administrative verification.'
    },
    {
      num: '04',
      title: 'Enrollment & Welcome Kit',
      time: 'Final Confirmation',
      desc: 'Upon seat allotment, fee schedule arrangements are completed. Textbooks, uniforms, and student ID orientation are provided.'
    }
  ];

  const checklistData = {
    general: [
      { item: 'Original Municipal Birth Certificate', note: 'Mandatory for Pre-School, Nursery, and Grade 1' },
      { item: 'Photocopy of Student Aadhaar Card', note: 'Self-attested copy for government U-DISE records' },
      { item: 'Photocopies of Parents/Guardian Aadhaar Cards', note: 'Required for official contact verification' },
      { item: '4 Recent Passport-Sized Photographs', note: 'Clear background showing student in formal attire' },
      { item: 'Proof of Local Residential Address', note: 'Electricity bill, registered rent agreement, or ration card' }
    ],
    transfer: [
      { item: 'Original School Leaving Certificate / TC', note: 'Must be countersigned by Education Dept if outside Mumbai/State' },
      { item: 'Previous Year’s Cumulative Progress Report', note: 'Official mark sheet stamped by the head of previous institution' },
      { item: 'Student PEN Number (U-DISE Data)', note: 'Must be obtained from the previous school management system' },
      { item: 'Bonafide & Conduct Certificate', note: 'Certifying exemplary student behavior and attendance' }
    ],
    juniorcollege: [
      { item: 'Class 10th Official Board Marksheet', note: 'Original + 3 attested photocopies (SSC, CBSE, ICSE, or equivalent)' },
      { item: 'Original Class 10 School Leaving Certificate', note: 'Required for official Junior College registration' },
      { item: 'Board Migration Certificate', note: 'Mandatory for students passing 10th from outside Maharashtra State Board' },
      { item: 'Class 10 Hall Ticket Copy', note: 'For roll number and board verification records' }
    ]
  };

  const faqs = [
    {
      category: 'curriculum',
      q: 'What is the medium of instruction at The Scholars High School?',
      a: 'The school instructs all general academic subjects strictly in the English medium, following the Maharashtra State Department of Education guidelines. Languages such as Hindi and Marathi are taught as part of state board mandates.'
    },
    {
      category: 'curriculum',
      q: 'How is the Deeniyat curriculum integrated into daily academics?',
      a: 'Deeniyat is incorporated into the daily timetable across all grade levels without compromising general academic periods. Students learn Quranic recitation with correct Tajweed, Hadith memorization, basic Islamic jurisprudence, and moral etiquette.'
    },
    {
      category: 'eligibility',
      q: 'Are the secondary and junior college classes segregated for boys and girls?',
      a: 'Yes. In keeping with our institutional guidelines and Islamic principles, The Scholars High School maintains separate instructional sections and dedicated faculty for boys and girls in the Secondary Section (Grades 5 to 10) as well as separate sections in the Junior College of Arts & Commerce.'
    },
    {
      category: 'office',
      q: 'What are the school administrative office visiting hours for admissions?',
      a: 'Campus visiting hours for admissions enquiries, campus tours, and document verification are Monday to Friday from 9:30 AM to 11:30 AM. General office hours are Monday through Saturday from 9:00 AM to 3:00 PM at Captain Suresh Samant Marg, Jogeshwari West.'
    },
    {
      category: 'office',
      q: 'What is the fee structure policy at The Scholars School?',
      a: 'Operated under the non-profit patronage of Al-Qalam Educational Trust (Regd. 1991), our fees are affordable, transparent, and structured strictly according to government guidelines. There are no capitation fees or compulsory donations. Detailed grade-wise breakdowns are provided during the campus visit.'
    },
    {
      category: 'eligibility',
      q: 'Can mid-term transfer admissions be granted if families relocate?',
      a: 'Yes, mid-term transfers are accommodated subject to vacancy in the requested grade, valid Transfer Certificate (TC) countersigned by the appropriate education authority, and satisfactory evaluation in our counseling assessment.'
    }
  ];

  const filteredFaqs = faqCategory === 'all' 
    ? faqs 
    : faqs.filter(f => f.category === faqCategory);

  return (
    <>
      <SEO
        title="Admissions 2025–26 - Process, Eligibility & Enquiry | The Scholars School"
        description="Admissions open from MRAK - The Scholars Kids Pre School through The Scholars Junior College of Arts and Commerce at The Scholars High School and Junior College, Jogeshwari West, Mumbai. English medium with Deeniyat."
        canonical="https://thescholarsschool.edu.in/admissions/"
      />

      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">JOIN OUR INSTITUTION</span>
          <h1>Admissions at The Scholars High School and Junior College</h1>
          <p>
            Welcoming students from MRAK - The Scholars Kids Pre School through The Scholars Junior College of Arts and Commerce. Discover our transparent admission procedure and submit your enquiry.
          </p>
        </div>
      </div>

      <Breadcrumbs items={[{ label: 'Admissions', path: '/admissions/' }]} />

      {/* 2. ACADEMIC STREAMS & WINGS OFFERINGS */}
      <section className="section section-white">
        <div className="container">
          <SectionHeader
            eyebrow="ACADEMIC DIVISIONS"
            title="Explore Programs &amp; Grade Levels"
            subtitle="Explore our structured academic divisions catering to early childhood, primary, secondary, junior college, and integrated Deeniyat values education."
            centered
          />

          <div className="admissions-streams-grid stagger-group reveal-up">
            {academicStreams.map((stream) => (
              <div key={stream.id} className="admissions-stream-card card reveal-up">
                <div className="admissions-stream-img-box img-sheen-wrap">
                  <img
                    src={stream.image}
                    alt={stream.title}
                    className="admissions-stream-img"
                    loading="lazy"
                  />
                  <span className="admissions-stream-badge">{stream.category}</span>
                  <span className="admissions-stream-age">{stream.ageBadge}</span>
                </div>

                <div className="admissions-stream-body">
                  <h3 className="admissions-stream-title">{stream.title}</h3>
                  <p className="admissions-stream-desc">{stream.desc}</p>

                  <ul className="admissions-stream-features">
                    {stream.features.map((feat, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={14} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="admissions-stream-footer">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      style={{ width: '100%', justifyContent: 'center' }}
                      onClick={() => handleSelectStream(stream.formValue)}
                    >
                      <span>Inquire for this Program</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE AGE ELIGIBILITY & GRADE FINDER */}
      <section className="section section-ivory" id="eligibility-finder">
        <div className="container">
          <SectionHeader
            eyebrow="OFFICIAL CRITERIA"
            title="Interactive Age &amp; Grade Eligibility Checker"
            subtitle="Verify your child's age eligibility and entry guidelines in accordance with the Maharashtra Education Department rules."
            centered
          />

          <div className="eligibility-box card reveal-up">
            <div className="eligibility-nav-chips">
              <button
                type="button"
                className={`eligibility-chip-btn ${activeEligibility === 'preschool' ? 'active' : ''}`}
                onClick={() => setActiveEligibility('preschool')}
              >
                <span>MRAK Kids Pre-School (Nursery, Mont – 2 &amp; Sr.KG)</span>
              </button>
              <button
                type="button"
                className={`eligibility-chip-btn ${activeEligibility === 'primary' ? 'active' : ''}`}
                onClick={() => setActiveEligibility('primary')}
              >
                <span>Primary (Grades 1 to 4)</span>
              </button>
              <button
                type="button"
                className={`eligibility-chip-btn ${activeEligibility === 'secondary' ? 'active' : ''}`}
                onClick={() => setActiveEligibility('secondary')}
              >
                <span>Secondary (Grades 5 to 10)</span>
              </button>
              <button
                type="button"
                className={`eligibility-chip-btn ${activeEligibility === 'juniorcollege' ? 'active' : ''}`}
                onClick={() => setActiveEligibility('juniorcollege')}
              >
                <span>Junior College (XI &amp; XII Arts &amp; Commerce)</span>
              </button>
              <button
                type="button"
                className={`eligibility-chip-btn ${activeEligibility === 'deeniyat' ? 'active' : ''}`}
                onClick={() => setActiveEligibility('deeniyat')}
              >
                <span>Integrated Deeniyat (All Grades)</span>
              </button>
            </div>

            {/* Dynamic Content Display */}
            {(() => {
              const current = eligibilityCriteria[activeEligibility];
              return (
                <div className="eligibility-card-content">
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Selected Division Overview
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-royal-navy)', margin: '6px 0 16px 0', fontSize: '1.45rem' }}>
                      {current.title}
                    </h3>

                    <div className="eligibility-detail-grid">
                      <div className="eligibility-info-pill">
                        <div className="eligibility-info-pill-title">Age Guideline</div>
                        <div className="eligibility-info-pill-val">{current.ageLimit}</div>
                      </div>
                      <div className="eligibility-info-pill">
                        <div className="eligibility-info-pill-title">Applicable Standards</div>
                        <div className="eligibility-info-pill-val">{current.grades}</div>
                      </div>
                      <div className="eligibility-info-pill">
                        <div className="eligibility-info-pill-title">Class Timing / Shift</div>
                        <div className="eligibility-info-pill-val">{current.shift}</div>
                      </div>
                      <div className="eligibility-info-pill">
                        <div className="eligibility-info-pill-title">Key Initial Documents</div>
                        <div className="eligibility-info-pill-val">{current.initialDocs}</div>
                      </div>
                    </div>

                    <p style={{ fontSize: '14px', color: 'var(--color-slate-grey-dark)', margin: '14px 0 0 0', lineHeight: 1.6 }}>
                      <strong style={{ color: 'var(--color-royal-navy)' }}>Academic Readiness: </strong>
                      {current.readiness}
                    </p>
                  </div>

                  <div className="eligibility-apply-box">
                    <GraduationCap size={36} className="eligibility-apply-icon" />
                    <h4>Ready to Apply?</h4>
                    <p>
                      Select this stream to automatically configure the application form below.
                    </p>
                    <button
                      type="button"
                      className="btn btn-gold btn-sm"
                      style={{ width: '100%', justifyContent: 'center' }}
                      onClick={() => handleSelectStream(current.formValue)}
                    >
                      <span>Apply for {current.shortName}</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* 4. FOUR-STAGE ADMISSION ROADMAP */}
      <section className="section section-white">
        <div className="container">
          <SectionHeader
            eyebrow="TRANSPARENT JOURNEY"
            title="Our 4-Step Admission Pathway"
            subtitle="From your first online enquiry to final seat confirmation, we ensure a smooth, transparent experience for every family."
            centered
          />

          <div className="roadmap-grid stagger-group reveal-up">
            {roadmapSteps.map((step) => (
              <div key={step.num} className="roadmap-card reveal-up">
                <span className="roadmap-badge-num">{step.num}</span>
                <span className="roadmap-time-badge">{step.time}</span>
                <h3 className="roadmap-title">{step.title}</h3>
                <p className="roadmap-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="trust-policy-banner reveal-up">
            <div className="trust-policy-icon-wrap">
              <Award size={32} className="trust-policy-icon" />
            </div>
            <div className="trust-policy-content">
              <h4 className="trust-policy-title">
                Affordable, Merit-Driven Policy under Al-Qalam Educational Trust
              </h4>
              <p className="trust-policy-text">
                The Scholars High School is maintained on a non-profit foundation. We do not accept donations or capitation fees. Transparent fee schedules and installment payment options are provided to support parents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FORM APPLICATION & DOCUMENT CHECKLIST SECTION */}
      <section className="admissions-form-section" id="application-section">
        <div className="container">
          <SectionHeader
            eyebrow="APPLY NOW"
            title="Online Admission Enquiry &amp; Documentation"
            subtitle="Submit your preliminary application online or review the verification document checklist before visiting our Jogeshwari West campus."
            centered
          />

          <div className="admissions-split-grid">
            {/* Form Column */}
            <div>
              <AdmissionForm initialSection={selectedSection} />
            </div>

            {/* Checklist & Helpdesk Column */}
            <div>
              <div className="admissions-checklist-box card reveal-up">
                <h3 className="admissions-checklist-title">
                  Required Document Checklist
                </h3>
                <p className="admissions-checklist-subtitle">
                  Please carry the following documents when visiting the campus administrative counter for verification:
                </p>

                {/* Tabs */}
                <div className="checklist-tab-row">
                  <button
                    type="button"
                    className={`checklist-tab-btn ${activeChecklistTab === 'general' ? 'active' : ''}`}
                    onClick={() => setActiveChecklistTab('general')}
                  >
                    General (Pre-K – Gr 4)
                  </button>
                  <button
                    type="button"
                    className={`checklist-tab-btn ${activeChecklistTab === 'transfer' ? 'active' : ''}`}
                    onClick={() => setActiveChecklistTab('transfer')}
                  >
                    Transfer (Gr 5 – 10)
                  </button>
                  <button
                    type="button"
                    className={`checklist-tab-btn ${activeChecklistTab === 'juniorcollege' ? 'active' : ''}`}
                    onClick={() => setActiveChecklistTab('juniorcollege')}
                  >
                    Junior College (XI &amp; XII)
                  </button>
                </div>

                <ul className="admissions-checklist-list">
                  {checklistData[activeChecklistTab].map((item, idx) => (
                    <li key={idx} className="admissions-checklist-item">
                      <CheckCircle2 size={18} className="admissions-checklist-icon" />
                      <div className="admissions-checklist-text">
                        <div className="admissions-checklist-name">
                          {item.item}
                        </div>
                        <div className="admissions-checklist-note">
                          {item.note}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Office & Direct Helpdesk Banner */}
              <div className="admissions-helpdesk-banner">
                <h4>Admissions Office &amp; Helpdesk</h4>
                <p style={{ fontSize: '13.5px', color: '#CBD5E1', margin: '4px 0 16px 0', lineHeight: 1.5 }}>
                  Visit our campus administrative office or connect with an admissions counselor directly:
                </p>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#E2E8F0', marginBottom: '12px' }}>
                  <MapPin size={17} style={{ color: 'var(--color-champagne-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <span>Captain Suresh Samant Marg, Agarwal Estate, Opp. Hill Park Tower, Jogeshwari (West), Mumbai 400102</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#E2E8F0', marginBottom: '18px' }}>
                  <Clock size={16} style={{ color: 'var(--color-champagne-gold)', flexShrink: 0 }} />
                  <span>Monday to Saturday: 9:00 AM – 3:00 PM (Closed on Sundays)</span>
                </div>

                <div className="helpdesk-call-btns">
                  <a href="tel:+918976890569" className="btn btn-gold btn-sm" style={{ justifyContent: 'center' }}>
                    <Phone size={15} />
                    <span>Call Admission Desk: +91 8976890569</span>
                  </a>

                  <a href="tel:+918976890570" className="btn btn-outline-white btn-sm" style={{ justifyContent: 'center' }}>
                    <Phone size={15} />
                    <span>Alternate Desk: +91 8976890570</span>
                  </a>

                  <a
                    href="https://wa.me/918976890569?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20The%20Scholars%20School."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-emerald btn-whatsapp btn-sm"
                    style={{ justifyContent: 'center' }}
                  >
                    <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
                      <path d="M16.01 2.01C8.28 2.01 2 8.28 2 16.02c0 2.6.7 5.04 1.93 7.15L2 30l7.05-1.85c2.05 1.13 4.4 1.76 6.96 1.76 7.73 0 14.01-6.27 14.01-14.01 0-7.74-6.28-14.01-14.01-14.01zm8.24 19.83c-.35.98-1.74 1.8-2.42 1.91-.65.11-1.49.16-2.42-.14-.56-.18-1.28-.42-2.22-.83-3.92-1.7-6.49-5.65-6.68-5.91-.2-.26-1.61-2.14-1.61-4.08 0-1.94 1.02-2.9 1.38-3.3.36-.4.78-.5 1.04-.5.26 0 .52 0 .75.01.24.01.56-.09.87.66.33.79 1.12 2.74 1.22 2.94.1.2.16.44.03.7-.13.26-.2.42-.39.65-.2.23-.42.51-.6.69-.2.2-.41.42-.18.82.23.4 1.03 1.7 2.21 2.75 1.52 1.35 2.8 1.77 3.2 1.97.4.2.63.17.86-.1.23-.26.99-1.15 1.25-1.55.26-.4.53-.33.89-.2.36.13 2.28 1.08 2.68 1.27.39.2.66.29.75.46.1.16.1.95-.25 1.93z" />
                    </svg>
                    <span>WhatsApp Admissions Enquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CATEGORIZED FREQUENTLY ASKED QUESTIONS */}
      <section className="section section-white">
        <div className="container">
          <SectionHeader
            eyebrow="PARENT CLARIFICATIONS"
            title="Frequently Asked Questions"
            subtitle="Find quick, clear answers to common inquiries regarding our admissions procedure, curriculum, and policies."
            centered
          />

          <div className="admissions-faq-wrapper reveal-up">
            <div className="faq-cat-filter">
              <button
                type="button"
                className={`faq-cat-btn ${faqCategory === 'all' ? 'active' : ''}`}
                onClick={() => setFaqCategory('all')}
              >
                All Questions
              </button>
              <button
                type="button"
                className={`faq-cat-btn ${faqCategory === 'eligibility' ? 'active' : ''}`}
                onClick={() => setFaqCategory('eligibility')}
              >
                Eligibility &amp; Segregation
              </button>
              <button
                type="button"
                className={`faq-cat-btn ${faqCategory === 'curriculum' ? 'active' : ''}`}
                onClick={() => setFaqCategory('curriculum')}
              >
                Curriculum &amp; Deeniyat
              </button>
              <button
                type="button"
                className={`faq-cat-btn ${faqCategory === 'office' ? 'active' : ''}`}
                onClick={() => setFaqCategory('office')}
              >
                Fees &amp; Timings
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {filteredFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className={`admissions-faq-item ${isOpen ? 'is-open' : ''}`}>
                    <button
                      type="button"
                      className="admissions-faq-trigger"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.25s ease',
                          color: 'var(--color-champagne-gold)',
                          flexShrink: 0
                        }}
                      />
                    </button>

                    {isOpen && (
                      <div className="admissions-faq-body">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="section section-navy" style={{ textAlign: 'center' }}>
        <div className="container section-header text-center reveal-up" style={{ maxWidth: '750px', margin: '0 auto' }}>
          <h2 className="section-title text-center" style={{ color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Ready to Enroll Your Child?
          </h2>
          <p className="section-subtitle" style={{ color: '#E2E8F0', margin: '0 auto 28px auto', textAlign: 'center' }}>
            Admission enquiries are now open for the upcoming academic session. Connect with our admission counselor today or schedule an in-person campus visit.
          </p>
          <div className="admission-cta-actions" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#admission-enquiry-form"
              className="btn btn-gold btn-lg"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('admission-enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Admission Enquiry Form</span>
              <ArrowUpRight size={18} />
            </a>
            <Link to="/contact-us/" className="btn btn-outline-white btn-lg">
              <span>Visit Our Campus</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
