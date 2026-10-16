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
  const [activeEligibility, setActiveEligibility] = useState('preprimary');
  const [activeChecklistTab, setActiveChecklistTab] = useState('general');
  const [faqCategory, setFaqCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState(null);

  const handleSelectStream = (sectionName) => {
    setSelectedSection(sectionName);
    const formEl = document.getElementById('admission-enquiry-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const academicStreams = [
    {
      id: 'mrak-kids',
      title: 'MRAK Kids Pre School',
      category: 'Early Childhood',
      ageBadge: 'Age: 2.5 – 4 Years',
      image: '/images/academics/mrak-kids-play.jpg',
      formValue: 'MRAK Kids Pre School',
      desc: 'Joyful Montessori-inspired foundational schooling focused on sensory development, language curiosity, and early social confidence.',
      features: [
        'Air-conditioned, child-safe interactive rooms',
        'English phonemic awareness & counting play',
        'Caring, individualized teacher attention'
      ]
    },
    {
      id: 'pre-primary',
      title: 'Pre-Primary Section',
      category: 'Nursery, Jr. & Sr. KG',
      ageBadge: 'Age: 3.5 – 5.5 Years',
      image: '/images/academics/pre-primary.jpeg',
      formValue: 'Pre-Primary: Nursery',
      desc: 'Structured early literacy and numeracy blending curiosity with discipline, classroom etiquette, and foundational Islamic values.',
      features: [
        'Interactive smart-board digital learning',
        'Foundation Deeniyat & Quranic manners',
        'Gentle transition into formal schooling'
      ]
    },
    {
      id: 'primary',
      title: 'Primary Section',
      category: 'Grades 1 to 4',
      ageBadge: 'Age: 6 – 9 Years',
      image: '/images/academics/primary-smart-classroom.jpg',
      formValue: 'Primary Section: Grades 1 to 4',
      desc: 'Maharashtra State Board aligned curriculum emphasizing English reading fluency, analytical mathematics, and environmental science.',
      features: [
        'Hands-on computer & language education',
        'Daily Deeniyat with Tajweed pronunciation',
        'Co-curricular arts, sports, and elocution'
      ]
    },
    {
      id: 'secondary',
      title: 'Secondary Section',
      category: 'Grades 5 to 10 (Separate Wings)',
      ageBadge: 'Age: 10 – 15 Years',
      image: '/images/academics/secondary-science-lab.jpg',
      formValue: 'Secondary Section: Grades 5 to 10 (Boys)',
      desc: 'Rigorous academic preparation for SSC Board examinations with dedicated, separate wings and instructional staff for boys and girls.',
      features: [
        'Modern physics, chemistry & biology labs',
        'Dedicated boys & girls instructional floors',
        '100% SSC board passing track record'
      ]
    },
    {
      id: 'junior-college',
      title: 'Junior College of Commerce',
      category: 'Grades XI & XII Commerce',
      ageBadge: 'Higher Secondary (HSC)',
      image: '/images/academics/junior-college-girls.jpg',
      formValue: 'Junior College: Commerce (Girls Section)',
      desc: 'Comprehensive commerce education preparing students for professional university degrees (CA, CS, B.Com, BMS, BAF) in separate wings.',
      features: [
        'Accountancy, Economics & OCM expertise',
        'Independent shifts for boys & girls',
        'Career mentorship & competitive exam support'
      ]
    }
  ];

  const eligibilityCriteria = {
    preschool: {
      title: 'MRAK Kids Pre School',
      ageLimit: 'Minimum 2.5 to 3 years as of December 31st',
      grades: 'Playgroup & Nursery Readiness',
      shift: 'Morning Shift: 9:00 AM to 11:30 AM',
      readiness: 'Basic motor curiosity, independent bathroom readiness encouragement',
      initialDocs: 'Original Municipal Birth Certificate & 4 passport photos',
      formValue: 'MRAK Kids Pre School'
    },
    preprimary: {
      title: 'Pre-Primary Section (Nursery, Jr. & Sr. KG)',
      ageLimit: 'Nursery: 3+ yrs | Jr. KG: 4+ yrs | Sr. KG: 5+ yrs',
      grades: 'Nursery, Junior Kindergarten & Senior Kindergarten',
      shift: 'Morning Shift: 8:30 AM to 12:00 PM',
      readiness: 'Basic verbal comprehension in English or mother tongue',
      initialDocs: 'Birth Certificate, Student & Parent Aadhaar card copies',
      formValue: 'Pre-Primary: Nursery'
    },
    primary: {
      title: 'Primary Section (Grades 1 to 4)',
      ageLimit: 'Grade 1: Minimum 6 years completed as per Maharashtra norms',
      grades: 'Standards 1st to 4th',
      shift: 'Day Shift: 8:00 AM to 1:30 PM',
      readiness: 'Grade-appropriate reading readiness & basic arithmetic',
      initialDocs: 'Transfer Certificate (TC), Previous Marksheet, Aadhaar',
      formValue: 'Primary Section: Grades 1 to 4'
    },
    secondary: {
      title: 'Secondary Section (Grades 5 to 10)',
      ageLimit: 'Age appropriate for enrolled grade (10 to 15 years)',
      grades: 'Standards 5th to 10th (Segregated Boys & Girls Sections)',
      shift: 'Separate shifts & dedicated faculty floors',
      readiness: 'Sound previous academic foundation & conduct record',
      initialDocs: 'Original Countersigned TC, 2-Year Report Cards, Aadhaar',
      formValue: 'Secondary Section: Grades 5 to 10 (Boys)'
    },
    juniorcollege: {
      title: 'Junior College for Commerce (XI & XII)',
      ageLimit: 'Successful completion of 10th Standard (SSC / CBSE / ICSE)',
      grades: 'XI Commerce & XII Commerce (Independent Wings)',
      shift: 'College Morning / Afternoon Shifts',
      readiness: 'Minimum passing percentage in Class 10 board examination',
      initialDocs: '10th Board Marksheet, Original Leaving Certificate, Migration Cert',
      formValue: 'Junior College: Commerce (Girls Section)'
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
      a: 'Yes. In keeping with our institutional guidelines and Islamic principles, The Scholars High School maintains separate instructional sections and dedicated faculty for boys and girls in the Secondary Section (Grades 5 to 10) as well as separate sections in the Junior College of Commerce.'
    },
    {
      category: 'office',
      q: 'What are the school administrative office visiting hours for admissions?',
      a: 'Our administrative office at Captain Suresh Samant Marg, Jogeshwari West is open Monday through Saturday from 9:00 AM to 3:00 PM for admissions enquiries, campus tours, document verification, and counseling.'
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
        description="Admissions open from MRAK Kids Pre-School to Junior College for Commerce at The Scholars High School, Jogeshwari West, Mumbai. English medium with Deeniyat."
        canonical="https://thescholarsschool.edu.in/admissions/"
      />

      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">JOIN OUR INSTITUTION</span>
          <h1>Admissions at The Scholars High School &amp; Junior College</h1>
          <p>
            Welcoming students from MRAK Kids Pre School through Junior College for Commerce. Discover our transparent admission procedure and submit your enquiry.
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
            subtitle="Explore our structured academic divisions catering to early childhood, primary, secondary, and junior college students."
            centered
          />

          <div className="admissions-streams-grid">
            {academicStreams.map((stream) => (
              <div key={stream.id} className="admissions-stream-card">
                <div className="admissions-stream-img-box">
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

          <div className="eligibility-box">
            <div className="eligibility-nav-chips">
              <button
                type="button"
                className={`eligibility-chip-btn ${activeEligibility === 'preschool' ? 'active' : ''}`}
                onClick={() => setActiveEligibility('preschool')}
              >
                <span>MRAK Kids Pre-School (2.5–4 yrs)</span>
              </button>
              <button
                type="button"
                className={`eligibility-chip-btn ${activeEligibility === 'preprimary' ? 'active' : ''}`}
                onClick={() => setActiveEligibility('preprimary')}
              >
                <span>Pre-Primary (Nursery, Jr/Sr KG)</span>
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
                <span>Junior College (XI &amp; XII Commerce)</span>
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

                  <div style={{ background: '#F8FAFC', border: '1.5px dashed rgba(198, 161, 91, 0.5)', borderRadius: 'var(--radius-sm)', padding: '24px', textAlign: 'center' }}>
                    <GraduationCap size={36} style={{ color: 'var(--color-champagne-gold)', margin: '0 auto 12px' }} />
                    <h4 style={{ color: 'var(--color-royal-navy)', marginBottom: '8px' }}>Ready to Apply?</h4>
                    <p style={{ fontSize: '13px', color: 'var(--color-slate-grey)', marginBottom: '18px', lineHeight: 1.5 }}>
                      Select this stream to automatically configure the application form below.
                    </p>
                    <button
                      type="button"
                      className="btn btn-gold btn-sm"
                      style={{ width: '100%', justifyContent: 'center' }}
                      onClick={() => handleSelectStream(current.formValue)}
                    >
                      <span>Apply for {current.title.split(' ')[0]}</span>
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

          <div className="roadmap-grid">
            {roadmapSteps.map((step) => (
              <div key={step.num} className="roadmap-card">
                <span className="roadmap-badge-num">{step.num}</span>
                <span className="roadmap-time-badge">{step.time}</span>
                <h3 className="roadmap-title">{step.title}</h3>
                <p className="roadmap-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="trust-policy-banner">
            <Award size={36} style={{ color: 'var(--color-champagne-gold)', flexShrink: 0 }} />
            <div>
              <h4 style={{ color: 'var(--color-royal-navy)', margin: '0 0 4px 0' }}>
                Affordable, Merit-Driven Policy under Al-Qalam Educational Trust
              </h4>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-slate-grey-dark)', lineHeight: 1.6 }}>
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
              <div className="admissions-checklist-box">
                <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-royal-navy)', fontSize: '1.25rem', marginBottom: '8px' }}>
                  Required Document Checklist
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-slate-grey)', marginBottom: '16px' }}>
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
                    Junior College (XI/XII)
                  </button>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {checklistData[activeChecklistTab].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--color-emerald-accent)', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-royal-navy)' }}>
                          {item.item}
                        </div>
                        <div style={{ fontSize: '12.5px', color: 'var(--color-slate-grey)', marginTop: '2px' }}>
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
                    className="btn btn-emerald btn-sm"
                    style={{ justifyContent: 'center' }}
                  >
                    <MessageCircle size={15} />
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

          <div className="admissions-faq-wrapper">
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
        <div className="container" style={{ maxWidth: '750px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
            Ready to Enroll Your Child?
          </h2>
          <p className="section-subtitle" style={{ color: '#E2E8F0', margin: '0 auto 28px auto', textAlign: 'center' }}>
            Admission enquiries are now open for the upcoming academic session. Connect with our admission counselor today or schedule an in-person campus visit.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
