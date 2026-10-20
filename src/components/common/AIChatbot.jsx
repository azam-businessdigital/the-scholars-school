import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  Bot,
  Sparkles,
  Send,
  X,
  RotateCcw,
  Phone,
  ExternalLink,
  ChevronRight,
  GraduationCap
} from 'lucide-react';

// Comprehensive Knowledge Base covering every page, subject, facility, trustee, rule, and document
const CAMPUS_KNOWLEDGE_BASE = [
  {
    id: 'greetings',
    title: 'Greetings & Welcome',
    keywords: ['hi', 'hello', 'hey', 'salam', 'assalam', 'assalamu alaikum', 'assalamualaikum', 'good morning', 'good afternoon', 'good evening', 'subah bakhair', 'kaise ho', 'how are you'],
    response: "Wa Alaikum Assalam! Welcome to **The Scholars High School & Junior College for Commerce** (Est. 1993, Al-Qalam Educational Trust).\n\nI am your comprehensive AI campus assistant. I can answer any questions regarding:\n• **Admissions 2026-27:** Procedure, age criteria, and document checklist\n• **Academic Sections:** MRAK Kids Pre-School to Junior College Commerce (XI & XII)\n• **Curriculum & Commerce:** Subjects (BK, OCM, Economics, SP, Math, IT)\n• **100% Board Results:** SSC and HSC state board examination records\n• **Campus Facilities:** 7-floor campus, passenger elevator/lift, interactive AC smart classrooms, science practical & IT labs, RO water, and prayer hall\n• **School Timings & Location:** Shift timings, office hours, and Jogeshwari West directions\n• **Fee Guidance:** Non-profit, transparent policy under Al-Qalam Trust\n• **Careers & Vacancies:** Head Mistress and Subject Teacher openings\n\nHow may I help you today?",
    actions: [
      { label: 'Admissions 2026-27', query: 'Tell me about the admission procedure and required documents' },
      { label: 'Academic Sections', query: 'What academic sections do you offer?' },
      { label: 'Age Criteria', query: 'What is the age limit for admission?' },
      { label: 'School Timings & Location', query: 'What are the school timings and campus address?' },
      { label: '100% Board Results', query: 'Tell me about the SSC Board examination results' },
      { label: 'Campus Facilities & Lift', query: 'What facilities does the campus have?' }
    ]
  },
  {
    id: 'admissions_procedure',
    title: 'Admissions Procedure & Roadmap',
    keywords: ['admission', 'admissions', 'apply', 'application', 'how to apply', 'enroll', 'enrollment', 'register', 'registration', 'seat', 'seats', 'enquiry', 'inquiry', 'procedure', 'admission process', 'admission form', 'admission step', 'steps to apply', 'online form', 'online enquiry'],
    response: "**Admissions for Academic Session 2026-27 are open** across all sections from MRAK Kids Pre-School through Junior College for Commerce!\n\n**4-Step Admission Roadmap:**\n1. **Submit Enquiry:** Fill out the online admission enquiry form on our website or visit our administrative reception desk at Hill Park, Jogeshwari West.\n2. **Counseling & Interaction:** A friendly, constructive interaction with the student and parents (within 24–48 hours) to assess grade readiness.\n3. **Document Verification:** Verification of municipal birth certificate, previous school Leaving Certificate / Transfer Certificate (LC/TC), and marksheets.\n4. **Enrollment & Welcome Kit:** Formal confirmation of seat allotment, fee schedule briefing, uniforms, textbooks, and ID orientation.\n\nVisit our administrative desk Monday to Saturday (9:00 AM – 3:00 PM) or submit your online enquiry directly through the link below.",
    linkTo: '/admissions/',
    linkText: 'Go to Online Admissions Page & Form',
    showContact: true,
    actions: [
      { label: 'Age Criteria', query: 'What is the age limit for each class?' },
      { label: 'Required Documents', query: 'What documents are required for admission?' },
      { label: 'Fee Guidance', query: 'How much are the school fees?' },
      { label: 'Campus Location', query: 'Where is the school campus located?' }
    ]
  },
  {
    id: 'age_criteria',
    title: 'Age Criteria & Eligibility',
    keywords: ['age', 'age limit', 'age criteria', 'minimum age', 'cut off', 'how old', 'years old', 'eligibility', 'eligible', 'nursery age', 'kg age', 'primary age', 'class 1 age', 'grade 1 age'],
    response: "**Official Age Criteria & Eligibility Guidelines (as per Maharashtra Education Norms):**\n\n• **MRAK Kids Pre-School:** 2.5 to 4 Years (Minimum 2.5 to 3 years completed as of December 31st).\n• **Pre-Primary Nursery:** 3+ Years completed.\n• **Pre-Primary Junior KG:** 4+ Years completed.\n• **Pre-Primary Senior KG:** 5+ Years completed.\n• **Primary Grade 1:** Minimum 6 Years completed as mandated by Maharashtra State Department of Education.\n• **Primary Grades 2 to 4:** Age-appropriate sequential progression (7 to 9 years).\n• **Secondary Section (Grades 5 to 10):** 10 to 15 Years (Separate instructional sections for boys and girls).\n• **Junior College for Commerce (XI & XII):** Successful completion and passing of Class 10 (SSC, CBSE, ICSE, or recognized state board).",
    linkTo: '/admissions/',
    linkText: 'Check Eligibility Details on Admissions Page',
    actions: [
      { label: 'Required Documents', query: 'What documents do I need to bring?' },
      { label: 'Admissions Form', query: 'How do I apply for admission?' },
      { label: 'School Timings', query: 'What are the school timings?' }
    ]
  },
  {
    id: 'required_documents',
    title: 'Required Documents Checklist',
    keywords: ['required documents', 'documents required', 'document checklist', 'admission documents', 'documents for admission', 'what documents', 'document', 'documents', 'certificate', 'certificates', 'paper', 'papers', 'tc', 'lc', 'leaving certificate', 'transfer certificate', 'birth certificate', 'marksheet', 'report card', 'aadhar', 'aadhaar', 'photo', 'photos', 'migration', 'proof', 'checklist', 'pen number', 'udise', 'u-dise'],
    response: "**Mandatory Document Checklist for Admission:**\n\n**1. For Fresh Admissions (Pre-School, Nursery, KG, Grade 1):**\n• Original Municipal Corporation / Gram Panchayat Birth Certificate\n• Photocopy of Student's Aadhaar Card (for U-DISE records)\n• Photocopies of Parents/Guardian Aadhaar Cards\n• 4 Recent Passport-sized colored photographs\n• Proof of local residential address (electricity bill, registered rent agreement, or ration card)\n\n**2. For Transfer Admissions (Grades 2 to 10):**\n• Original School Leaving Certificate / Transfer Certificate (TC/LC) countersigned by the Education Officer if transferring from outside Maharashtra / Mumbai\n• Stamped cumulative progress report / marksheet of the previous academic year\n• Student Permanent Education Number (PEN / U-DISE ID)\n• Bonafide & Conduct Certificate\n\n**3. For Junior College Commerce (XI & XII):**\n• Original Class 10 Board Marksheet + 3 attested photocopies\n• Original Class 10 School Leaving Certificate (LC)\n• Board Migration Certificate (for CBSE, ICSE, or other state boards)\n• Class 10 Hall Ticket photocopy",
    linkTo: '/admissions/',
    linkText: 'View Document Checklist & Requirements',
    actions: [
      { label: 'Admissions Process', query: 'What is the admission procedure?' },
      { label: 'Fee Structure', query: 'What are the school fees?' },
      { label: 'Office Timings', query: 'What are the office visiting hours?' }
    ]
  },
  {
    id: 'fee_structure',
    title: 'Fee Policy & Installment Guidelines',
    keywords: ['fee', 'fees', 'cost', 'tuition', 'price', 'kharcha', 'payment', 'installment', 'annual fee', 'charge', 'charges', 'donation', 'capitation', 'affordable', 'how much fees', 'structure of fee'],
    response: "**Fee Structure & Financial Transparency Policy:**\n\n• **Non-Profit Patronage:** The Scholars High School & Junior College is operated under the non-profit trust **Al-Qalam Educational Trust (Regd. 1991)**.\n• **Zero Capitation / Donation:** There are **strictly NO capitation fees, donations, or hidden charges** of any kind.\n• **Affordable & Regulated:** All academic tuition fees are structured moderately according to Maharashtra Department of School Education norms to make quality English-medium education accessible to every family.\n• **Term-Wise Installments:** Convenient installment schedules are provided to ease payment for parents.\n\nDue to grade-specific variations across 6 distinct academic sections (Pre-School, Nursery, Primary, High School SSC, and Junior College Commerce), please obtain the exact fee breakdown from the administrative accounts counter at Hill Park or call +91 8976890569.",
    linkTo: '/contact-us/',
    linkText: 'Contact Administrative Accounts Desk',
    showContact: true,
    actions: [
      { label: 'Call Helpdesk', query: 'Give me your phone numbers' },
      { label: 'Admissions Page', query: 'How do I apply for admission?' },
      { label: 'Office Hours', query: 'What are the school timings?' }
    ]
  },
  {
    id: 'academic_sections_overview',
    title: 'All Academic Sections Overview',
    keywords: ['section', 'sections', 'academic', 'academics', 'program', 'programs', 'divisions', 'division', 'courses', 'classes', 'all classes', 'what classes', 'curriculum', 'offerings'],
    response: "**The Scholars School comprises 6 Comprehensive Academic Divisions:**\n\n1. **MRAK Kids Pre-School (Ages 2.5–4):** Playgroup & Early Nursery fostering joyful sensory exploration, language curiosity, and fine motor skills.\n2. **Pre-Primary Section (Ages 3.5–5.5):** Nursery, Junior KG & Senior KG with phonics, numeracy, interactive smart boards, and moral habits.\n3. **Primary Section (Grades 1 to 4):** English medium curriculum under Maharashtra Education Dept, interactive science, math, digital computers, and languages.\n4. **Secondary Section (Grades 5 to 10 - SSC):** Rigorous academic training leading to 100% SSC Board results, science labs, IT lab, and **separate wings for boys and girls**.\n5. **Junior College for Commerce (XI & XII - HSC):** 100% HSC Commerce Board pass record, modern lecture halls, computer commerce lab, career prep (CA, CS, B.Com, BMS) with **dedicated separate wings**.\n6. **Deeniyat Program:** Integrated values education, Quran with Tajweed, Hadith memorization, and ethical conduct seamlessly blended into daily periods.",
    linkTo: '/academics/',
    linkText: 'Explore All Academic Sections',
    actions: [
      { label: 'MRAK Pre-School', query: 'Tell me about MRAK Kids Pre School' },
      { label: 'Primary Section', query: 'Tell me about the Primary Section' },
      { label: 'Secondary Section', query: 'Tell me about the Secondary Section' },
      { label: 'Junior College Commerce', query: 'Tell me about Junior College Commerce' }
    ]
  },
  {
    id: 'mrak_kids',
    title: 'MRAK Kids Pre-School',
    keywords: ['mrak', 'mrak kids', 'preschool', 'pre-school', 'playgroup', 'play group', 'play school', 'toddler', 'early childhood', 'riyaz', 'riyaz ahmed'],
    response: "**Maulana Riyaz Ahmed Khan (MRAK) Kids Pre-School (Ages 2.5–4 Years):**\n\nNamed in honorable memory of Maulana Riyaz Ahmed Khan, MRAK Kids delivers a joyful, nurturing early childhood foundation:\n\n• **Montessori-Inspired Activities:** Sensory play clay, block building, bead threading, and pattern matching for gross & fine motor dexterity.\n• **Early Language & Phonics:** Phonemic awareness, interactive storytelling, and English vocabulary development.\n• **Child-Safe Infrastructure:** Safe, air-conditioned activity rooms with hygienic play amenities.\n• **Moral Culture:** Gentle nursery rhymes, sharing habits, and respectful manners.\n• **High Teacher Attention:** Low teacher-to-student ratio ensuring personalized individual care.\n• **Timings:** Morning Sessions (9:00 AM to 11:30 AM).",
    linkTo: '/academics/mrak-kids/',
    linkText: 'View MRAK Kids Pre-School Page',
    actions: [
      { label: 'Pre-Primary Section', query: 'Tell me about the Pre-Primary Section' },
      { label: 'Admissions Form', query: 'How do I apply for admission?' },
      { label: 'Campus Address', query: 'Where is the school located?' }
    ]
  },
  {
    id: 'pre_primary',
    title: 'Pre-Primary Section (Nursery, Jr KG, Sr KG)',
    keywords: ['pre primary', 'pre-primary', 'preprimary', 'nursery', 'jr kg', 'junior kg', 'sr kg', 'senior kg', 'kindergarten', 'lkg', 'ukg', 'kg'],
    response: "**Pre-Primary Section (Nursery, Junior KG & Senior KG | Ages 3.5–5.5):**\n\nLed by experienced School Principal **Mrs. Zahida Kader Chunawala**:\n\n• **Interactive Smart Boards:** Audiovisual conceptual learning for letters, numbers, colors, and the living world.\n• **English Language Immersion:** Phonics word reading, letter tracing, active listening, and conversational English.\n• **Numeracy Foundation:** Sequential counting, shape discovery, spatial reasoning, and basic addition.\n• **Values & Etiquette:** Foundational Deeniyat, polite speech, sharing, and personal hygiene.\n• **Safety & Amenities:** Air-conditioned classrooms with passenger elevator access and sanitized floor restrooms.\n• **Timings:** Morning Shift (8:30 AM to 12:00 PM).",
    linkTo: '/academics/pre-primary/',
    linkText: 'View Pre-Primary Section Details',
    actions: [
      { label: 'Primary Section', query: 'Tell me about the Primary Section' },
      { label: 'Age Criteria', query: 'What is the age limit for nursery and KG?' },
      { label: 'Admissions 2026-27', query: 'How do I apply for admission?' }
    ]
  },
  {
    id: 'primary',
    title: 'Primary Section (Grades 1 to 4)',
    keywords: ['primary', 'grade 1', 'grade 2', 'grade 3', 'grade 4', 'class 1', 'class 2', 'class 3', 'class 4', '1st standard', '2nd standard', '3rd standard', '4th standard', 'std 1', 'std 2', 'std 3', 'std 4'],
    response: "**Primary Section (Grades 1 to 4 | Ages 6–10 Years):**\n\nSupervised by Principal **Mrs. Zahida Kader Chunawala**:\n\n• **Curriculum:** English-medium Maharashtra State Department of Education framework emphasizing conceptual clarity and independent thought.\n• **Core Disciplines:** English (Higher Language), Mathematics (mental arithmetic, geometry, problem-solving), Environmental Studies & General Science.\n• **Languages:** Marathi (State curriculum requirement) and Hindi (Composite).\n• **Modern IT Training:** Dedicated hands-on computer sessions in our air-conditioned IT lab.\n• **Daily Deeniyat:** Quran recitation with Tajweed, Hadith stories, and moral character education.\n• **Extracurriculars:** Leaf art, drawing, martial arts karate, elocution, and sports.",
    linkTo: '/academics/primary/',
    linkText: 'View Primary Section Details',
    actions: [
      { label: 'Secondary Section', query: 'Tell me about the Secondary Section' },
      { label: 'Deeniyat Program', query: 'What is taught in Deeniyat?' },
      { label: 'School Timings', query: 'What are the school timings?' }
    ]
  },
  {
    id: 'secondary',
    title: 'Secondary Section (Grades 5 to 10 - SSC)',
    keywords: ['secondary', 'high school', 'grade 5', 'grade 6', 'grade 7', 'grade 8', 'grade 9', 'grade 10', 'class 5', 'class 6', 'class 7', 'class 8', 'class 9', 'class 10', '5th standard', '6th standard', '7th standard', '8th standard', '9th standard', '10th standard', 'std 5', 'std 6', 'std 7', 'std 8', 'std 9', 'std 10', 'matric', 'ssc'],
    response: "**Secondary Section (Grades 5 to 10 | Maharashtra SSC Board):**\n\nUnder the leadership of Principal **Mrs. Azra Nasreen Abdul Hakim Khan**:\n\n• **100% Board Track Record:** Proud unbroken record of **100% passing results in the Maharashtra SSC Board examination** with numerous distinctions and first-class honors.\n• **Dedicated Segregated Wings:** Separate floors and dedicated faculty for Boys and Girls, ensuring concentrated academic focus and moral decorum.\n• **Practical Science Laboratories:** Fully equipped Physics, Chemistry, and Biology laboratories for hands-on experiments and board practicals.\n• **Advanced Computing:** High-speed computer lab for digital literacy and IT curriculum.\n• **Board Exam Mentorship:** Regular unit tests, terminal examinations, prelims, mock papers, and specialized remedial classes for board aspirants.",
    linkTo: '/academics/secondary/',
    linkText: 'View Secondary Section Details',
    actions: [
      { label: '100% Board Results', query: 'Tell me about the SSC Board examination results' },
      { label: 'Science Labs', query: 'Tell me about the science laboratory facilities' },
      { label: 'Junior College', query: 'Tell me about Junior College Commerce' }
    ]
  },
  {
    id: 'junior_college_overview',
    title: 'Junior College for Commerce (XI & XII)',
    keywords: ['junior college', 'college', 'commerce', 'xi', 'xii', '11th', '12th', 'fyjc', 'syjc', 'higher secondary', 'hsc', 'stream', 'hsc board'],
    response: "**Junior College for Commerce (Grades XI & XII | HSC Board):**\n\nAffiliated with the Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE):\n\n• **100% Board Pass Record:** Consistent 100% passing results in HSC Commerce examinations year after year.\n• **Separate Wings for Boys & Girls:** Dedicated lecture floors, separate faculty, and tailored instructional shifts.\n• **Comprehensive Commerce Syllabi:** Book-Keeping & Accountancy, Organization of Commerce & Management (OCM), Economics, Secretarial Practice (SP) / Mathematics & Statistics, English, and Second Languages / IT.\n• **University & Professional Readiness:** Structured preparation for Chartered Accountancy (CA), Company Secretary (CS), CMA, B.Com, BMS, BAF, and Corporate Law degrees.\n• **Campus Infrastructure:** Air-conditioned multimedia lecture halls, commerce computer laboratory, and passenger elevator across all 7 floors.",
    linkTo: '/academics/junior-college/girls/',
    linkText: 'Explore Junior College Commerce',
    actions: [
      { label: 'Commerce Subjects', query: 'What subjects are taught in 11th and 12th Commerce?' },
      { label: 'Girls College Wing', query: 'Tell me about the Junior College Girls Wing' },
      { label: 'Boys College Wing', query: 'Tell me about the Junior College Boys Wing' },
      { label: '100% Board Results', query: 'Tell me about the HSC Board examination results' }
    ]
  },
  {
    id: 'commerce_subjects',
    title: 'Junior College Commerce Subjects',
    keywords: ['subject', 'subjects', 'commerce subject', 'commerce subjects', 'bk', 'book keeping', 'book-keeping', 'accountancy', 'accounts', 'ocm', 'organization of commerce', 'economics', 'eco', 'sp', 'secretarial practice', 'maths', 'mathematics', 'business math', 'it subject', '11th subjects', '12th subjects'],
    response: "**Detailed Subject Offerings for Junior College Commerce (XI & XII HSC):**\n\n1. **Book-Keeping & Accountancy (BK):** Financial accounting fundamentals, double-entry bookkeeping, journal & ledger posting, partnership final accounts, company accounts, and depreciation analysis.\n2. **Organization of Commerce & Management (OCM):** Business ownership structures (sole proprietorship, partnership, joint-stock company), internal trade, international business, modern logistics, marketing, and principles of management.\n3. **Economics:** Comprehensive study of Microeconomics, Macroeconomics, National Income, Public Finance, Monetary Policy, Reserve Bank of India (RBI) operations, and International Trade dynamics.\n4. **Secretarial Practice (SP) OR Mathematics & Statistics:**\n   • *Secretarial Practice:* Corporate governance, shares, debentures, company secretarial correspondence, and financial markets.\n   • *Mathematics & Statistics:* Commercial arithmetic, matrices, derivatives, commercial statistics, and index numbers.\n5. **English:** Business communication, report writing, formal comprehension, and English literature.\n6. **Second Language / IT:** Information Technology (IT), Hindi, Urdu, or Marathi as per board options.",
    linkTo: '/academics/junior-college/boys/',
    linkText: 'View Commerce Curriculum Details',
    actions: [
      { label: 'Junior College Overview', query: 'Tell me about Junior College Commerce' },
      { label: '100% Board Results', query: 'Tell me about the HSC Board examination results' },
      { label: 'Admissions Form', query: 'How do I apply for 11th admission?' }
    ]
  },
  {
    id: 'college_girls',
    title: 'Junior College: Girls Section',
    keywords: ['girls college', 'college girls', 'girls section', 'junior college girls', 'female college', 'women college', 'girls wing'],
    response: "**Junior College for Commerce: Girls Section (HSC Board):**\n\nPrincipal: **Mrs. Azra Nasreen Abdul Hakim Khan**\n\n• **Empowering Learning Environment:** Dedicated higher secondary commerce wing exclusively for young women, ensuring comfort, dignity, and academic focus.\n• **Academic Excellence:** 100% HSC Board pass record with distinctions in Accountancy, OCM, and Economics.\n• **Career Guidance:** Specialized coaching seminars for Chartered Accountancy (CA Foundation), CS, CMA, and Mumbai University degree entrance programs.\n• **Campus Facilities:** Air-conditioned lecture rooms, interactive audio-visual systems, lift access, and sanitized floor amenities.",
    linkTo: '/academics/junior-college/girls/',
    linkText: 'Visit Junior College Girls Page',
    actions: [
      { label: 'College Boys Section', query: 'Tell me about the Junior College Boys Section' },
      { label: 'Commerce Subjects', query: 'What subjects are taught in Commerce?' },
      { label: 'Admissions 2026-27', query: 'How do I apply for admission?' }
    ]
  },
  {
    id: 'college_boys',
    title: 'Junior College: Boys Section',
    keywords: ['boys college', 'college boys', 'boys section', 'junior college boys', 'male college', 'men college', 'boys wing'],
    response: "**Junior College for Commerce: Boys Section (HSC Board):**\n\nPrincipal: **Mrs. Azra Nasreen Abdul Hakim Khan**\n\n• **Commercial Rigor & Leadership:** A focused environment preparing young men for leadership in banking, corporate finance, capital markets, and entrepreneurship.\n• **Proven 100% Results:** Stellar track record in Maharashtra HSC Commerce Board examinations.\n• **Hands-On Skills:** Computer applications in commerce, real-world case analysis, business problem solving, and mock board assessments.\n• **Modern Campus:** Air-conditioned lecture rooms, modern IT lab, passenger elevator across all 7 floors, and career mentorship.",
    linkTo: '/academics/junior-college/boys/',
    linkText: 'Visit Junior College Boys Page',
    actions: [
      { label: 'College Girls Section', query: 'Tell me about the Junior College Girls Section' },
      { label: 'Commerce Subjects', query: 'What subjects are taught in Commerce?' },
      { label: 'Admissions 2026-27', query: 'How do I apply for admission?' }
    ]
  },
  {
    id: 'deeniyat_islamic',
    title: 'Deeniyat & Islamic Studies Program',
    keywords: ['deeniyat', 'islam', 'islamic', 'quran', 'tajweed', 'hadith', 'dua', 'duas', 'fiqh', 'akhlaq', 'moral', 'morals', 'namaz', 'prayer', 'pray', 'sunnah', 'religious', 'values', 'hasan kamal', 'tarbiyah'],
    response: "**Deeniyat Program: Modern Education with Islamic Frame of Reference:**\n\nHead of Deeniyat: **Hasan Kamal**\n\nOur defining institutional ethos is the seamless harmonization of modern academic excellence with deep-rooted Islamic values:\n\n• **Quranic Studies with Tajweed:** Proper Makharij (pronunciation), Tajweed articulation, and understanding the core ethical messages of the Quran.\n• **Hadith Studies:** Memorization and practical reflection on authentic sayings of Prophet Muhammad (ﷺ) emphasizing truthfulness, compassion, diligence, and respect.\n• **Islamic Jurisprudence (Fiqh):** Daily practical guidance on Taharah (cleanliness), Wudu, Salat (daily prayers), Sawm (fasting), and civic etiquette.\n• **Akhlaq & Character (Tarbiyah):** Instilling humility, honesty, respect for elders and teachers, and peaceful community coexistence.\n• **Campus Musalla:** Dedicated prayer hall on campus for daily congregation prayers.",
    linkTo: '/academics/deeniyat/',
    linkText: 'Explore Full Deeniyat Curriculum',
    actions: [
      { label: 'Academic Sections', query: 'What academic sections do you offer?' },
      { label: 'Campus Facilities', query: 'What facilities does the campus have?' },
      { label: 'About School History', query: 'Tell me about the history of the school' }
    ]
  },
  {
    id: 'segregation_policy',
    title: 'Segregation & Separate Wings Policy',
    keywords: ['segregation', 'separate', 'separate classes', 'separate wing', 'separate floors', 'boys and girls', 'coed', 'co-education', 'co-ed', 'gender', 'mixed', 'partition', 'segregated'],
    response: "**Institutional Policy on Class Organization & Segregation:**\n\n• **Early Childhood (MRAK Kids & Pre-Primary):** Co-educational, providing a gentle, cooperative, and family-like learning atmosphere for very young toddlers and kindergarteners.\n• **Primary Section (Grades 1 to 4):** Co-educational classes with dedicated male and female instructional care.\n• **Secondary Section (Grades 5 to 10):** **Separate instructional wings and dedicated classroom floors for Boys and Girls**, with dedicated subject specialists.\n• **Junior College for Commerce (XI & XII):** **Independent, separate sections for Boys and Girls** with independent shifts and faculties.\n\nThis segregation policy is maintained in alignment with Islamic values and educational best practices, fostering exceptional academic focus, discipline, and mutual respect.",
    linkTo: '/about-us/',
    linkText: 'Read About Our Institutional Ethos',
    actions: [
      { label: 'Secondary Section', query: 'Tell me about the Secondary Section' },
      { label: 'Junior College', query: 'Tell me about Junior College Commerce' },
      { label: 'Admissions 2026-27', query: 'How do I apply for admission?' }
    ]
  },
  {
    id: 'board_results',
    title: '100% Board Results & Achievements',
    keywords: ['result', 'results', 'board result', 'ssc result', 'hsc result', '100%', '100 percent', 'pass', 'passing', 'topper', 'toppers', 'marks', 'distinction', 'percentage', 'gazette', 'rank', 'achievement'],
    response: "**Unbroken 100% Board Examination Track Record:**\n\nAlhamdulillah, The Scholars High School & Junior College takes immense pride in its consistent record of academic excellence:\n\n• **Maharashtra SSC Board Examination (Class 10):** Consistent **100% Pass Rate** year after year, with over 75% of students securing Distinctions and First-Class grades.\n• **Maharashtra HSC Board Examination (Class 12 Commerce):** **100% Pass Rate** in the Higher Secondary Certificate Commerce examination.\n• **Official Gazettes:** The verified Maharashtra State Board result gazettes for SSC and HSC are publicly available for download on our website.\n• **Higher Education Success:** Our alumni regularly progress to top universities, Chartered Accountancy (CA), CS, BAF, BMS, and corporate leadership careers.",
    linkTo: '/results/',
    linkText: 'View Official 100% Board Results & Gazettes',
    actions: [
      { label: 'Download Gazettes', query: 'Where can I see the announcements and notices?' },
      { label: 'Secondary Section', query: 'Tell me about the Secondary Section' },
      { label: 'Admissions 2026-27', query: 'How do I apply for admission?' }
    ]
  },
  {
    id: 'timings_hours',
    title: 'School & Administrative Office Timings',
    keywords: ['timing', 'timings', 'time', 'hours', 'office hours', 'opening hours', 'schedule', 'what time', 'open', 'close', 'closing', 'saturday', 'sunday', 'weekend', 'shift', 'shifts', 'working hours'],
    response: "**Official Campus & Office Timings:**\n\n• **Administrative & Admissions Office:**\n  Monday to Saturday: **9:00 AM to 3:00 PM**\n  Sunday: Closed\n\n• **Section-Wise Academic Shift Timings:**\n  • **MRAK Kids Pre-School:** Morning Shift (9:00 AM – 11:30 AM)\n  • **Pre-Primary (Nursery, Jr/Sr KG):** Morning Shift (8:30 AM – 12:00 PM)\n  • **Primary Section (Grades 1–4):** Day Shift (8:00 AM – 1:30 PM)\n  • **Secondary Section (Grades 5–10):** Regular High School Sessions (Morning/Afternoon shifts for segregated wings)\n  • **Junior College for Commerce (XI & XII):** Morning College Sessions\n\nFor parent-teacher consultations and campus visits, please report to the administrative counter during office hours.",
    linkTo: '/contact-us/',
    linkText: 'View Visiting Hours & Contact Page',
    showContact: true,
    actions: [
      { label: 'Campus Address', query: 'Where is the school located?' },
      { label: 'Phone Helplines', query: 'Give me your official phone numbers' },
      { label: 'Admissions 2026-27', query: 'How do I apply for admission?' }
    ]
  },
  {
    id: 'address_location',
    title: 'Campus Address & Directions',
    keywords: ['address', 'location', 'where', 'reach', 'map', 'direction', 'directions', 'how to reach', 'jogeshwari', 'hill park', 'agarwal', 'suresh samant', 'station', 'landmark', 'nearest railway', 'pin code', 'pincode', 'postal', 'where is school'],
    response: "**Campus Address & Directions:**\n\n**The Scholars High School & Junior College for Commerce**\nCaptain Suresh Samant Marg, Agarwal Estate, Opp. Hill Park Tower,\nJogeshwari (West), Mumbai 400102, Maharashtra, India.\n\n• **Landmarks:** Opposite Hill Park Tower, near Agarwal Estate.\n• **Nearest Railway Station:** Jogeshwari Railway Station (Western Railway Line) – approximately 7 to 10 minutes by auto-rickshaw.\n• **Connecting Areas:** Easily accessible from Oshiwara, Andheri (West), Goregaon (West), and SV Road.\n• **Google Maps:** Interactive map and driving navigation are embedded on our Contact page.",
    linkTo: '/contact-us/',
    linkText: 'View Interactive Google Map & Location',
    showContact: true,
    actions: [
      { label: 'School Timings', query: 'What are the office hours?' },
      { label: 'Phone Helplines', query: 'Give me your phone numbers' },
      { label: 'Admissions 2026-27', query: 'How do I apply for admission?' }
    ]
  },
  {
    id: 'contact_helpline',
    title: 'Official Helplines & Contact Details',
    keywords: ['contact', 'phone', 'call', 'number', 'numbers', 'mobile', 'telephone', 'helpline', 'helplines', 'enquiry number', 'reach out', 'front desk', 'reception', 'phone number', 'contact number'],
    response: "**Official Helplines & Administrative Contact Numbers:**\n\n• **Admissions & Enquiries Desk 1:** +91 8976890569\n• **Admissions Helpline Desk 2:** +91 8976890570\n• **Administrative Counter Desk 3:** +91 8976890571\n• **Office & Accounts Desk 4:** +91 8976890572\n\n• **WhatsApp Direct Chat:** +91 8976890569\n• **General Enquiries Email:** info@thescholarsschool.edu.in\n• **Administration & Careers Email:** admin@thescholarsschool.edu.in\n\n*Administrative lines are answered Monday through Saturday from 9:00 AM to 3:00 PM.*",
    linkTo: '/contact-us/',
    linkText: 'View Full Contact Details',
    showContact: true,
    actions: [
      { label: 'School Timings', query: 'What are the school office hours?' },
      { label: 'Campus Address', query: 'Where is the school located?' },
      { label: 'Admissions 2026-27', query: 'How do I apply for admission?' }
    ]
  },
  {
    id: 'email_addresses',
    title: 'Email Addresses',
    keywords: ['email', 'mail', 'e-mail', 'send email', 'write email', 'official email', 'info email', 'admin email', 'email id'],
    response: "**Official Email Addresses:**\n\n• **General School & Admission Inquiries:**\n  info@thescholarsschool.edu.in\n\n• **School Administration, Principal's Desk & Careers:**\n  admin@thescholarsschool.edu.in\n\nFor employment applications, please email your resume (PDF under 1 MB) directly to **admin@thescholarsschool.edu.in**.",
    linkTo: '/contact-us/',
    linkText: 'Go to Contact Us Page',
    showContact: true,
    actions: [
      { label: 'Careers & Jobs', query: 'What teaching jobs are available?' },
      { label: 'Phone Numbers', query: 'Give me your phone numbers' },
      { label: 'Admissions 2026-27', query: 'How do I apply for admission?' }
    ]
  },
  {
    id: 'whatsapp_support',
    title: 'Official WhatsApp Support',
    keywords: ['whatsapp', 'whats app', 'whatsapp chat', 'whatsapp number', 'message on whatsapp', 'wp', 'instant chat', 'contact on whatsapp'],
    response: "**Official WhatsApp Helpline:**\n\nYou can chat directly with our admissions helpdesk on WhatsApp at **+91 8976890569**.\n\nUse WhatsApp for instant guidance on:\n• Admission enquiry and form submissions\n• Fee schedule guidelines and brochure requests\n• Document submission verification\n• School timings and directions",
    showContact: true,
    actions: [
      { label: 'Call Helpdesk', query: 'Give me your phone numbers' },
      { label: 'Admissions 2026-27', query: 'How do I apply for admission?' },
      { label: 'Campus Address', query: 'Where is the school located?' }
    ]
  },
  {
    id: 'facilities_overview',
    title: 'Campus Facilities & Infrastructure',
    keywords: ['facility', 'facilities', 'infrastructure', 'campus', 'building', 'amenities', 'features', 'grounds', 'what facilities'],
    response: "**Purpose-Built 7-Floor Modern Campus Infrastructure:**\n\nLocated in the quiet green environs of Hill Park, Jogeshwari West:\n\n1. **Passenger Elevator / Lift:** High-capacity lift serving all 7 floors for effortless student and visitor accessibility.\n2. **Interactive Smart Classrooms:** Digital audiovisual boards for interactive multimedia learning.\n3. **Fully Air-Conditioned Rooms:** Cool, comfortable, climate-controlled classrooms for all seasons.\n4. **Science Practical Laboratories:** Dedicated Physics, Chemistry, and Biology laboratories equipped for board practicals.\n5. **Modern Computer Lab:** High-speed internet connected individual PC workstations.\n6. **RO Purified Drinking Water:** Multi-stage RO filtration stations installed on every single floor.\n7. **Sanitized Restrooms:** Dedicated, sanitized washrooms on every floor with separate facilities for boys, girls, and staff.\n8. **Dedicated Prayer Hall (Musalla):** Peaceful space for daily congregation prayers (Salat).\n9. **Karate & Physical Training:** Coached martial arts and physical fitness curriculum.",
    linkTo: '/about-us/',
    linkText: 'Learn More About Our Campus Facilities',
    actions: [
      { label: 'Elevator & Lift', query: 'Does the school have a lift/elevator?' },
      { label: 'Science Labs', query: 'Tell me about the science laboratory' },
      { label: 'Photo Gallery', query: 'Can I see photos of the campus?' }
    ]
  },
  {
    id: 'elevator_lift',
    title: 'Passenger Elevator & Lift Facility',
    keywords: ['lift', 'elevator', 'stairs', 'disabled', 'handicap', 'accessibility', 'floors', '7 floors', 'seven floors', 'ground to 7th', 'is there a lift'],
    response: "**Yes! Dedicated Passenger Elevator (Lift) Access:**\n\nThe Scholars School campus is housed in a purpose-built **7-floor modern building** equipped with a **dedicated passenger elevator (lift)** that operates smoothly across all floors.\n\n• Effortless mobility for students, teachers, parents, and visitors.\n• Ensures comfortable access for young primary children and anyone with physical or medical needs.\n• Well-maintained and monitored for student safety throughout school hours.",
    linkTo: '/about-us/',
    linkText: 'View Campus Infrastructure',
    actions: [
      { label: 'Campus Facilities', query: 'What other facilities do you have?' },
      { label: 'Campus Address', query: 'Where is the school located?' },
      { label: 'School Timings', query: 'What are the school timings?' }
    ]
  },
  {
    id: 'ac_classrooms',
    title: 'Air-Conditioned Classrooms',
    keywords: ['ac in class', 'ac classrooms', 'ac classroom', 'ac rooms', 'air conditioned', 'air conditioning', 'is there ac', 'air condition', 'air-conditioned', 'air conditioner', 'ac', 'cool', 'cooling', 'ventilation', 'climate'],
    response: "**Yes! Fully Air-Conditioned Classrooms:**\n\nAll classroom spaces at The Scholars School—from MRAK Kids Pre-School through Junior College lecture halls—are **fully air-conditioned**.\n\n• Maintains a cool, quiet, and comfortable learning climate throughout Mumbai's hot and humid months.\n• Eliminates fatigue and enhances student focus, concentration, and classroom productivity.",
    linkTo: '/about-us/',
    linkText: 'Explore Campus Comfort & Infrastructure',
    actions: [
      { label: 'Smart Classrooms', query: 'Tell me about the smart classrooms' },
      { label: 'Campus Facilities', query: 'What other facilities do you have?' },
      { label: 'Admissions 2026-27', query: 'How do I apply for admission?' }
    ]
  },
  {
    id: 'smart_classrooms',
    title: 'Interactive Smart Digital Classrooms',
    keywords: ['smart class', 'smart classroom', 'smartboard', 'smart board', 'projector', 'audio visual', 'audiovisual', 'digital learning', 'interactive board', 'screen', 'digital classroom'],
    response: "**Interactive Smart Classrooms & Digital Boards:**\n\n• **Audiovisual Learning:** Every classroom is equipped with interactive digital smart boards and high-resolution display systems.\n• **Engaging Curriculum Delivery:** Teachers utilize 3D simulations, animated science diagrams, interactive maps, and educational videos to make abstract topics crystal clear.\n• **Multi-Sensory Engagement:** Enhances auditory, visual, and kinesthetic comprehension across all age groups from Pre-Primary to Class 12.",
    linkTo: '/about-us/',
    linkText: 'View Academic Infrastructure',
    actions: [
      { label: 'Computer Lab', query: 'Tell me about the computer lab' },
      { label: 'Science Labs', query: 'Tell me about the science laboratory' },
      { label: 'Primary Section', query: 'Tell me about the Primary Section' }
    ]
  },
  {
    id: 'computer_lab',
    title: 'Modern Computer & IT Laboratories',
    keywords: ['computer', 'computer lab', 'it lab', 'information technology', 'pc', 'internet', 'coding', 'digital lab', 'software', 'technology'],
    response: "**Modern Computer & IT Laboratories:**\n\n• **Individual Workstations:** Fully equipped IT laboratories where each student works at their own dedicated modern PC.\n• **High-Speed Connectivity:** Secure, high-speed broadband connection for supervised educational research.\n• **Comprehensive IT Curriculum:** Students learn operating system basics, word processing, spreadsheets, presentation software, coding logic, and internet safety from primary grades through junior college commerce IT.",
    linkTo: '/gallery/',
    linkText: 'View Computer Lab Photos in Gallery',
    actions: [
      { label: 'Science Labs', query: 'Tell me about the science laboratory' },
      { label: 'Secondary Section', query: 'Tell me about the Secondary Section' },
      { label: 'Campus Facilities', query: 'What other facilities do you have?' }
    ]
  },
  {
    id: 'science_labs',
    title: 'Physics, Chemistry & Biology Science Labs',
    keywords: ['science lab', 'science laboratory', 'physics lab', 'chemistry lab', 'biology lab', 'practical', 'practicals', 'experiment', 'experiments', 'lab apparatus', 'laboratory'],
    response: "**Fully Equipped Science Practical Laboratories:**\n\n• **Physics, Chemistry & Biology Facilities:** Fully stocked practical laboratories with modern apparatus, chemical reagents, optical prisms, compound microscopes, specimen slides, and human anatomical models.\n• **Hands-On Experiential Learning:** Students perform board-prescribed practical experiments independently under the direct supervision of experienced laboratory instructors.\n• **SSC Board Practical Readiness:** Ensures students achieve top practical marks in Maharashtra SSC Board assessments.",
    linkTo: '/academics/secondary/',
    linkText: 'View Secondary & Science Details',
    actions: [
      { label: 'Secondary Section', query: 'Tell me about the Secondary Section' },
      { label: '100% Board Results', query: 'Tell me about the SSC Board examination results' },
      { label: 'Photo Gallery', query: 'Can I see photos of the science labs?' }
    ]
  },
  {
    id: 'drinking_water_sanitation',
    title: 'RO Purified Drinking Water & Restrooms',
    keywords: ['drinking water', 'ro water', 'ro', 'water', 'filter', 'washroom', 'washrooms', 'toilet', 'toilets', 'restroom', 'restrooms', 'hygiene', 'sanitation', 'clean', 'cleanliness', 'water facility'],
    response: "**Hygienic RO Purified Water & Floor-Wise Sanitized Restrooms:**\n\n• **Multi-Stage RO Drinking Water:** Reverse Osmosis (RO) purified drinking water stations are installed on **every single floor** of our 7-floor campus, providing safe, chilled, and hygienic drinking water for students and faculty.\n• **Floor-Wise Restrooms:** Clean, sanitized, and regularly disinfected restrooms are located on each floor, with **strictly separated facilities** for boys, girls, female staff, and male staff.\n• **Health Protocols:** Routine hygiene maintenance and sanitation inspections are carried out daily.",
    actions: [
      { label: 'Campus Facilities', query: 'What other facilities do you have?' },
      { label: 'Elevator & Lift', query: 'Does the school have a lift?' },
      { label: 'Campus Address', query: 'Where is the school located?' }
    ]
  },
  {
    id: 'prayer_hall',
    title: 'Campus Prayer Hall (Musalla)',
    keywords: ['prayer hall', 'prayer room', 'pray hall', 'musalla', 'namaz room', 'pray room', 'masjid', 'congregation', 'zuhr', 'wudu', 'ablution', 'namaz', 'prayer facilities'],
    response: "**Dedicated Campus Prayer Hall (Musalla):**\n\n• **Peaceful Prayer Space:** A serene, dedicated prayer hall is maintained within the campus for students, faculty, and visitors to offer daily prayers (Salat / Namaz).\n• **Congregation (Jama'at):** Daily Zuhr prayers are offered in congregation, instilling spiritual discipline and brotherhood/sisterhood.\n• **Ablution (Wudu) Amenities:** Dedicated, clean ablution stations are provided adjacent to the prayer hall.",
    linkTo: '/academics/deeniyat/',
    linkText: 'Read About Deeniyat & Campus Values',
    actions: [
      { label: 'Deeniyat Program', query: 'What is taught in Deeniyat?' },
      { label: 'Campus Facilities', query: 'What other facilities do you have?' },
      { label: 'About School History', query: 'Tell me about the school history' }
    ]
  },
  {
    id: 'sports_karate',
    title: 'Sports, Karate & Extracurricular Activities',
    keywords: ['sport', 'sports', 'karate', 'martial arts', 'pt', 'physical training', 'fitness', 'activity', 'activities', 'extracurricular', 'co-curricular', 'games', 'competition', 'annual day', 'sports day', 'tournaments', 'black belt'],
    response: "**Karate Martial Arts, Sports & Co-Curricular Excellence:**\n\n• **Professional Karate Coaching:** Trained martial arts senseis provide structured karate and self-defense training across grade levels, building discipline, focus, and physical fitness.\n• **Physical Training (PT):** Regular physical education periods, yoga drills, and aerobic conditioning under certified B.P.Ed instructors.\n• **Annual Sports Day:** Highly anticipated inter-house sports competitions including track events, relays, tug-of-war, and indoor tournaments.\n• **Competitions & Events:** Annual Day, Science & Art Exhibitions, Qirat (Quran Recitation) contests, elocution, debate, and leaf art.",
    linkTo: '/gallery/',
    linkText: 'View Sports & Activities Gallery',
    actions: [
      { label: 'Campus Facilities', query: 'What facilities does the school offer?' },
      { label: 'Academic Sections', query: 'What academic sections do you offer?' },
      { label: 'Photo Gallery', query: 'Can I see photos of sports and events?' }
    ]
  },
  {
    id: 'trust_history',
    title: 'Al-Qalam Educational Trust & History',
    keywords: ['history', 'trust', 'al-qalam', 'al qalam', 'established', '1993', '1991', 'background', 'about school', 'about the scholars', 'foundation', 'registration', 'who established', 'when was school founded'],
    response: "**About Al-Qalam Educational Trust & School History:**\n\n• **Established:** Al-Qalam Educational Trust was registered in **1991**, and founded **The Scholars High School in 1993** in Jogeshwari West, Mumbai.\n• **Visionary Mission:** Founded to provide high-standard modern English education firmly rooted in moral and Islamic values.\n• **30+ Years of Academic Eminence:** From humble beginnings, the institution has blossomed into a comprehensive **7-floor campus** serving over **2,000+ school students** and **150+ junior college students**.\n• **Motto:** *Education That Builds Knowledge, Character and Confidence*.",
    linkTo: '/about-us/',
    linkText: 'Read Complete History & Mission on About Us',
    actions: [
      { label: 'Founder & Visionary', query: 'Who is the founder of the school?' },
      { label: 'Board of Trustees', query: 'Who are the trustees of the school?' },
      { label: '100% Board Results', query: 'Tell me about the SSC Board examination results' }
    ]
  },
  {
    id: 'founder_rizwan',
    title: 'Founder: Late Maulana Rizwan Ahmed Khan',
    keywords: ['founder', 'rizwan', 'maulana rizwan', 'late maulana', 'who founded', 'who started', 'founder of school', 'rizwan ahmed khan'],
    response: "**Founder: Late Maulana Rizwan Ahmed Khan:**\n\nThe Scholars High School was founded by **Late Maulana Rizwan Ahmed Khan**, a revered Islamic scholar, visionary thinker, and dedicated educationist.\n\n• He recognized that the community required institutions combining rigorous modern English scientific education with noble Islamic ethics.\n• His dedication, foresight, and selfless service laid the enduring foundation for Al-Qalam Educational Trust in 1991 and The Scholars School in 1993.\n• In his honor, our early childhood division is named **Maulana Riyaz Ahmed Khan (MRAK) Kids Pre-School**.",
    linkTo: '/about-us/',
    linkText: "Read About Founder's Vision on About Us",
    actions: [
      { label: 'President & Chairman', query: 'Who is the president of the school?' },
      { label: 'Board of Trustees', query: 'Who are the trustees?' },
      { label: 'About School History', query: 'Tell me about the history of the school' }
    ]
  },
  {
    id: 'chairman_president',
    title: 'President & Chairman: Mr. Mohammad Aslam Ghazi',
    keywords: ['president', 'chairman', 'aslam ghazi', 'mohammad aslam', 'ghazi', 'head of trust', 'chairman message'],
    response: "**President & Chairman: Mr. Mohammad Aslam Ghazi:**\n\nMr. Mohammad Aslam Ghazi leads Al-Qalam Educational Trust as its President and Chairman.\n\n• **Chairman's Message:** Reflecting on the Quranic verse *'Can those with knowledge be equal to those without it?'*, Mr. Ghazi emphasizes that education is the single most transformative tool to uplift humanity, sharpen discernment between truth and falsehood, and prepare young minds to lead with integrity.\n• Under his guidance, the Trust continues to modernize infrastructure, support deserving students, and expand higher secondary educational opportunities.",
    linkTo: '/about-us/',
    linkText: "Read Chairman's Full Message",
    actions: [
      { label: 'Board of Trustees', query: 'Who are the trustees of the school?' },
      { label: 'Principals Team', query: 'Who are the principals of the school?' },
      { label: 'History of Trust', query: 'Tell me about the history of the school' }
    ]
  },
  {
    id: 'trustees_list',
    title: 'Board of Trustees',
    keywords: ['trustees of al qalam', 'al qalam trustees', 'trustee list', 'trustees list', 'trustee', 'trustees', 'board members', 'committee', 'mahfooz', 'siddiqui', 'abdur rashid', 'tehseen', 'amin gulzar', 'badar nawab', 'padiyar', 'ataswala', 'waheed shaikh', 'management'],
    response: "**Distinguished Board of Trustees (Al-Qalam Educational Trust):**\n\n• **Mr. Mohammad Aslam Ghazi** – President & Chairman\n• **Mr. Mahfooz Ahmad Siddiqui** – General Secretary\n• **Mohammad Abdur Rashid** – Treasurer\n• **Syed Tehseen Ahmed** – Trustee\n• **Mr. Hasan Badar Nawab** – Founder Member\n• **Mahmood Usman Padiyar** – Trustee\n• **Mr. Abdul Waheed Shaikh** – Trustee\n• **Mr. Amin Gulzar** – Trustee\n• **Mr. Abdul Gani Atalaswala** – Trustee\n\nOur trustees bring decades of civic leadership, educational stewardship, and philanthropic commitment to The Scholars School family.",
    linkTo: '/about-us/',
    linkText: 'View Trustees Profiles on About Us',
    actions: [
      { label: 'Chairman Message', query: 'Who is the president of the school?' },
      { label: 'Principals Team', query: 'Who are the principals of the school?' },
      { label: 'History of Trust', query: 'Tell me about the history of the school' }
    ]
  },
  {
    id: 'principals_leadership',
    title: 'School Principals & Leadership Team',
    keywords: ['principal', 'headmistress', 'head mistress', 'zahida', 'azra', 'principal name', 'who is principal', 'chunawala', 'hakim khan', 'hasan kamal', 'head of primary', 'head of secondary', 'leadership team'],
    response: "**School Leadership & Principals:**\n\n• **Mrs. Zahida Kader Chunawala** – Principal, Pre-Primary & Primary Section\n  *Focus:* Foundational literacy, emotional warmth, moral habits, and experiential learning.\n\n• **Mrs. Azra Nasreen Abdul Hakim Khan** – Principal, Secondary Section & Junior College\n  *Focus:* SSC & HSC Board examination rigour, academic discipline, and commerce specialization.\n\n• **Hasan Kamal** – Head of Deeniyat Program\n  *Focus:* Quranic recitation with Tajweed, Hadith ethics, and Islamic frame of reference.",
    linkTo: '/about-us/',
    linkText: 'Meet the Leadership Team on About Us',
    actions: [
      { label: 'Faculty Qualifications', query: 'What qualifications do teachers have?' },
      { label: '100% Board Results', query: 'Tell me about the SSC Board examination results' },
      { label: 'Admissions 2026-27', query: 'How do I apply for admission?' }
    ]
  },
  {
    id: 'faculty_teachers',
    title: 'Faculty Qualifications & Staff Strength',
    keywords: ['teacher', 'teachers', 'faculty', 'staff', 'educators', 'qualification', 'qualified', 'experience', 'teaching staff', 'how many teachers', 'educator', 'profile of teachers'],
    response: "**Faculty Strength & Educator Qualifications:**\n\n• **60+ Verified Educational Specialists:** Across early childhood, primary, high school, and junior college commerce.\n• **High Academic Credentials:** Teachers hold recognized professional degrees including B.Ed., M.Ed., D.T.Ed., ECC.Ed., M.A. (English, Marathi, History), M.Sc. (Physics, Chemistry, Maths), M.Com. (Accountancy, Economics), B.P.Ed. (Physical Training), ATD (Art), and Islamic theology Alimah certifications.\n• **Continuous Teacher Training:** Regular pedagogical workshops, modern smart-board digital training, and child psychology seminars.",
    linkTo: '/about-us/',
    linkText: 'Read About Our Faculty on About Us',
    actions: [
      { label: 'Careers & Vacancies', query: 'What teaching vacancies are open?' },
      { label: 'Principals Team', query: 'Who are the principals of the school?' },
      { label: 'Secondary Section', query: 'Tell me about the Secondary Section' }
    ]
  },
  {
    id: 'careers_jobs',
    title: 'Careers & Current Teaching Vacancies',
    keywords: ['career', 'careers', 'job', 'jobs', 'vacancy', 'vacancies', 'hiring', 'recruit', 'recruitment', 'vacancy teacher', 'teach', 'work with us', 'resume', 'cv', 'applying for job', 'opening', 'openings', 'head mistress vacancy', 'pt vacancy', 'teaching position'],
    response: "**Current Teaching & Administrative Vacancies:**\n\nThe Scholars School is actively hiring qualified, passionate educators:\n\n1. **Head Mistress (Primary Section):** B.Ed / D.T.Ed with administrative leadership experience.\n2. **Subject Teachers (Primary & Secondary):**\n   • **English:** B.A. / M.A. in English with B.Ed\n   • **Marathi:** B.A. in Marathi with D.T.Ed / B.Ed\n   • **Mathematics:** B.Sc. / M.Sc. in Maths with B.Ed\n   • **Science (Physics, Chemistry, Biology):** B.Sc. / M.Sc. with B.Ed\n   • **Social Studies (History & Geography):** B.A. / M.A. with B.Ed\n   • **Art & Craft:** ATD / Diploma in Fine Arts\n   • **Physical Training (PT Teacher):** B.P.Ed / D.P.Ed\n\n**How to Apply:**\n• Email your updated PDF resume (under 1 MB) to **admin@thescholarsschool.edu.in**.\n• Clearly specify the position and subject in your email subject line.\n• Shortlisted candidates will be invited for personal interviews and classroom demonstrations.",
    linkTo: '/careers/',
    linkText: 'View All Careers & Apply Online',
    showContact: true,
    actions: [
      { label: 'Send Email to Admin', query: 'What is the official email address?' },
      { label: 'Campus Address', query: 'Where is the school located?' },
      { label: 'About School', query: 'Tell me about the history of the school' }
    ]
  },
  {
    id: 'announcements_circulars',
    title: 'Latest Announcements & Circulars',
    keywords: ['announcement', 'announcements', 'notice', 'notices', 'circular', 'circulars', 'update', 'updates', 'gazette download', 'notification', 'notifications', 'bulletin'],
    response: "**Latest Official Announcements & Notices:**\n\n• **Maharashtra SSC Board Class 10 Results:** 100% Pass record achieved. Official Result Gazette PDF is available for download on our announcements page.\n• **Maharashtra HSC Board Class 12 Commerce Results:** 100% Pass record declared. HSC Commerce Gazette PDF is available for download.\n• **Admissions Open for 2026-27:** Registration open across all sections (Pre-School through Junior College).\n• **Faculty Recruitment Notice:** Applications open for Head Mistress and Subject Teachers in English, Marathi, Maths, Science, Social Studies, Art, and PT.",
    linkTo: '/announcements/',
    linkText: 'View All Notices & Download Gazettes',
    actions: [
      { label: '100% Board Results', query: 'Tell me about the SSC Board examination results' },
      { label: 'Admissions 2026-27', query: 'How do I apply for admission?' },
      { label: 'Careers & Jobs', query: 'What teaching jobs are available?' }
    ]
  },
  {
    id: 'photo_gallery',
    title: 'Photo Gallery & Visual Tour',
    keywords: ['gallery', 'photo', 'photos', 'picture', 'pictures', 'image', 'images', 'pic', 'pics', 'see school', 'campus tour', 'campus photos', 'event photos', 'look at school'],
    response: "**Campus Photo Gallery:**\n\nExplore our high-resolution photo gallery showcasing life at The Scholars School:\n\n• **Campus & Architecture:** 7-floor Hill Park building, reception, and elevator foyer.\n• **Classrooms & Tech:** Air-conditioned smart digital classrooms and modern computer lab.\n• **Practical Labs:** Equipped physics, chemistry, and biology science practical laboratories.\n• **Co-Curricular Life:** Karate martial arts coaching, annual sports tournaments, and elocution contests.\n• **Spiritual Spaces:** Campus Musalla / prayer hall and Deeniyat recitation rooms.",
    linkTo: '/gallery/',
    linkText: 'Open Full Photo Gallery',
    actions: [
      { label: 'Campus Facilities', query: 'What facilities does the campus have?' },
      { label: 'Academic Sections', query: 'What academic sections do you offer?' },
      { label: 'Campus Address', query: 'Where is the school located?' }
    ]
  },
  {
    id: 'media_news',
    title: 'Media & News Features',
    keywords: ['media', 'news', 'newspaper', 'press', 'coverage', 'article', 'articles', 'publication', 'media coverage', 'in the news'],
    response: "**Media & Press Coverage:**\n\nDiscover news articles, educational features, and press publications reporting on The Scholars High School:\n\n• Coverage of our consecutive 100% Maharashtra SSC & HSC Board examination milestones.\n• Community educational seminars and parenting guidance conferences organized under Al-Qalam Educational Trust.\n• Student accolades in inter-school academic, sports, and Islamic competitions.",
    linkTo: '/media-news/',
    linkText: 'Read News & Media Features',
    actions: [
      { label: 'Announcements', query: 'Where can I see announcements and notices?' },
      { label: 'Photo Gallery', query: 'Can I see photos of the school?' },
      { label: 'About School', query: 'Tell me about the history of the school' }
    ]
  },
  {
    id: 'medium_of_instruction',
    title: 'Medium of Instruction & Languages',
    keywords: ['medium', 'english medium', 'language of instruction', 'languages', 'marathi language', 'hindi language', 'urdu language', 'arabic', 'mother tongue'],
    response: "**Medium of Instruction & Language Curriculum:**\n\n• **English Medium:** The Scholars High School is strictly an **English-medium** institution. All mainstream academic disciplines (Mathematics, Science, Social Sciences, Commerce) are taught in English.\n• **State Board Languages:**\n  • **English (Higher Level):** Core language focusing on literature, grammar, and spoken fluency.\n  • **Marathi:** Mandatory state language taught sequentially as per Government of Maharashtra regulations.\n  • **Hindi / Urdu:** Composite and second language options tailored to student choices.\n• **Arabic & Tajweed:** Taught within our integrated Deeniyat curriculum to master Quranic phonetics and recitation.",
    linkTo: '/academics/',
    linkText: 'Explore Academic Curriculum',
    actions: [
      { label: 'Primary Section', query: 'Tell me about the Primary Section' },
      { label: 'Secondary Section', query: 'Tell me about the Secondary Section' },
      { label: 'Deeniyat Program', query: 'What is taught in Deeniyat?' }
    ]
  },
  {
    id: 'uniform_books',
    title: 'School Uniform & Textbooks',
    keywords: ['uniform', 'dress', 'dress code', 'clothes', 'book', 'books', 'textbook', 'textbooks', 'notebook', 'notebooks', 'stationery', 'bag', 'kit', 'school uniform'],
    response: "**School Uniform & Textbooks Guidelines:**\n\n• **Prescribed Uniform:** In keeping with dignity, modesty, and institutional equality, a distinct formal uniform is prescribed for boys and girls across all grade sections.\n• **Textbooks & Stationery:** Maharashtra State Board curriculum textbooks (Balbharati) and specialized school workbooks are prescribed.\n• **Distribution Schedule:** Upon final admission confirmation, parents receive an official vendor list, uniform measurement guidelines, and complete book lists from the administrative desk.",
    actions: [
      { label: 'Admissions 2026-27', query: 'How do I apply for admission?' },
      { label: 'Fee Structure', query: 'What are the school fees?' },
      { label: 'Contact Helpdesk', query: 'Give me your phone numbers' }
    ]
  },
  {
    id: 'transport_bus',
    title: 'Location Accessibility & Transport',
    keywords: ['bus', 'transport', 'van', 'cab', 'commute', 'travel', 'rickshaw', 'auto', 'pick up', 'drop', 'conveyance', 'school bus', 'bus service'],
    response: "**Location Accessibility & Student Transport:**\n\n• **Central Location:** Our campus is conveniently located at Captain Suresh Samant Marg, Opp. Hill Park Tower in Jogeshwari West, surrounded by prominent residential societies.\n• **Transport Options:** Students commute via walking, private vehicles, auto-rickshaws, and registered local school van operators servicing Jogeshwari, Andheri West, and Oshiwara.\n• **Public Transit:** Easily reachable from Jogeshwari Railway Station (Western Line) and major bus routes along SV Road.\n• **Van Coordinator Contacts:** Verified contacts of local private school van operators are available at the front administrative reception desk.",
    linkTo: '/contact-us/',
    linkText: 'View Location Map & Directions',
    showContact: true,
    actions: [
      { label: 'Campus Address', query: 'Where is the school located?' },
      { label: 'School Timings', query: 'What are the school timings?' },
      { label: 'Phone Helplines', query: 'Give me your phone numbers' }
    ]
  },
  {
    id: 'board_affiliation',
    title: 'Recognition & Board Affiliation',
    keywords: ['affiliation', 'affiliated', 'board', 'maharashtra board', 'ssc board', 'hsc board', 'state board', 'mumbai divisional board', 'government recognized', 'recognition'],
    response: "**Government Recognition & Board Affiliation:**\n\n• **Department of Education Recognized:** The Scholars High School is recognized by the Department of School Education and Sports, Government of Maharashtra.\n• **SSC Board Affiliation:** Affiliated with the **Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)**, Mumbai Divisional Board for Class 10 (SSC).\n• **HSC Board Affiliation:** Recognized for Higher Secondary Certificate (HSC) Class 11 and Class 12 Commerce.\n• **Outstanding Record:** Celebrates an unbroken **100% board passing record** in both SSC and HSC Commerce.",
    linkTo: '/results/',
    linkText: 'View Board Affiliation & Results',
    actions: [
      { label: '100% Board Results', query: 'Tell me about the SSC Board examination results' },
      { label: 'Secondary Section', query: 'Tell me about the Secondary Section' },
      { label: 'Junior College', query: 'Tell me about Junior College Commerce' }
    ]
  },
  {
    id: 'vision_mission',
    title: 'Vision, Mission & Philosophy',
    keywords: ['vision', 'mission', 'motto', 'objective', 'aim', 'philosophy', 'goal', 'core values', 'principles'],
    response: "**Our Vision, Mission & Core Philosophy:**\n\n• **Motto:** *'Education That Builds Knowledge, Character and Confidence'*.\n• **Philosophy:** *'Modern Education with Islamic Frame of Reference'*.\n• **Vision:** To be an institution of excellence where sound ethical values, character, wisdom, leadership, service, and academic achievement are encouraged in a safe and nurturing environment.\n• **Mission:** To establish and promote educational, humanitarian, and vocational programs that develop knowledgeable professionals and responsible, upright citizens.",
    linkTo: '/about-us/',
    linkText: 'Read Vision & Mission on About Us',
    actions: [
      { label: 'History of Trust', query: 'Tell me about the history of the school' },
      { label: 'Leadership Team', query: 'Who are the principals and leaders?' },
      { label: 'Academic Sections', query: 'What academic sections do you offer?' }
    ]
  },
  {
    id: 'privacy_terms',
    title: 'Privacy Policy & Terms',
    keywords: ['privacy', 'privacy policy', 'terms', 'terms of use', 'data', 'security', 'disclaimer', 'rules', 'regulations'],
    response: "**Privacy Policy & Website Terms:**\n\n• **Data Protection:** The Scholars School respects user privacy. Any personal information (names, contact numbers, email addresses, student details) submitted via our online enquiry forms is kept strictly confidential and used solely for admission processing and school communications.\n• **Zero Commercial Sharing:** We never sell, share, or disclose personal information to external commercial parties.\n• **Official Policies:** You can read our complete Privacy Policy and Terms of Use via the links below.",
    linkTo: '/privacy-policy/',
    linkText: 'Read Complete Privacy Policy',
    actions: [
      { label: 'Admissions 2026-27', query: 'How do I apply for admission?' },
      { label: 'Contact Us', query: 'Give me your official phone numbers' }
    ]
  },
  {
    id: 'gratitude_appreciation',
    title: 'Gratitude & Appreciation',
    keywords: ['thank', 'thanks', 'thank you', 'jazakallah', 'jazakallahu khairan', 'shukriya', 'awesome', 'great', 'helpful', 'ok', 'okay', 'got it', 'understood', 'nice', 'wonderful', 'perfect'],
    response: "**Alhamdulillah & JazakAllahu Khairan!**\n\nYou are most welcome! We are delighted to assist you. If you have any further questions about admissions, academic programs, timings, or would like to visit our Hill Park campus in Jogeshwari West, please let us know or call our helpline at +91 8976890569.",
    showContact: true,
    actions: [
      { label: 'Admissions 2026-27', query: 'How do I apply for admission?' },
      { label: 'School Timings', query: 'What are the school timings?' },
      { label: 'Campus Address', query: 'Where is the school located?' },
      { label: 'Phone Helplines', query: 'Give me your phone numbers' }
    ]
  },
  {
    id: 'farewell_goodbye',
    title: 'Farewell & Goodbyes',
    keywords: ['bye', 'goodbye', 'see you', 'take care', 'khuda hafiz', 'allah hafiz', 'shabbakhair', 'have a nice day'],
    response: "**Khuda Hafiz & Ma'a as-salama!**\n\nThank you for reaching out to **The Scholars High School & Junior College**. We wish you and your family abundant blessing and success. If you need anything in the future, we are always here to help!",
    actions: [
      { label: 'Admissions 2026-27', query: 'How do I apply for admission?' },
      { label: 'Campus Address', query: 'Where is the school located?' },
      { label: 'Phone Helplines', query: 'Give me your phone numbers' }
    ]
  }
];

const INITIAL_MESSAGES = [
  {
    id: 'welcome-1',
    sender: 'bot',
    text: 'Assalamu Alaikum! Welcome to **The Scholars High School & Junior College for Commerce** (Est. 1993, Al-Qalam Educational Trust). I am your AI campus assistant.',
    time: 'Just now'
  },
  {
    id: 'welcome-2',
    sender: 'bot',
    text: 'How can I assist you today? You can choose a quick topic below or ask any question about admissions, age limits, required documents, 6 academic sections, commerce subjects, 100% board results, timings, lift, facilities, fees, or careers.',
    time: 'Just now',
    actions: [
      { label: 'Admissions 2026-27', query: 'Tell me about the admission procedure and required documents' },
      { label: 'Academic Sections', query: 'What academic sections do you offer?' },
      { label: 'Age Criteria', query: 'What is the age limit for each grade?' },
      { label: 'Commerce Subjects', query: 'What subjects are offered in 11th and 12th Commerce?' },
      { label: 'School Timings & Location', query: 'What are the school timings and campus location?' },
      { label: '100% Board Results', query: 'Tell me about the SSC and HSC Board examination results' },
      { label: 'Facilities & Lift', query: 'What campus facilities and elevator access do you have?' },
      { label: 'Teaching Vacancies', query: 'What teaching jobs and career openings are available?' },
      { label: 'Helpline & Contact', query: 'Give me your official phone numbers and contact details' }
    ]
  }
];

const STOP_WORDS = new Set([
  'what', 'when', 'where', 'which', 'who', 'whom', 'whose', 'why', 'how',
  'is', 'are', 'was', 'were', 'the', 'this', 'that', 'there', 'they', 'them',
  'and', 'or', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'about',
  'tell', 'give', 'me', 'can', 'you', 'please', 'does', 'have', 'from', 'some'
]);

// Multi-tier intelligent matching engine
function getBotResponse(userQuery) {
  const rawQ = (userQuery || '').trim();
  const q = rawQ.toLowerCase();

  if (!q) {
    return {
      text: "Please type your question or select one of the suggested topics below. I can answer any question about admissions, academic sections, subjects, timings, fees, results, facilities, and careers.",
      actions: [
        { label: 'Admissions 2026-27', query: 'Tell me about the admission procedure and required documents' },
        { label: 'Academic Sections', query: 'What academic sections do you offer?' },
        { label: 'School Timings & Location', query: 'What are the school timings and campus address?' }
      ]
    };
  }

  // Tokenize words of length >= 2
  const tokens = q
    .replace(/[^\w\s\+]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length >= 2);

  let bestEntry = null;
  let highestScore = 0;

  for (const entry of CAMPUS_KNOWLEDGE_BASE) {
    let score = 0;

    for (const kw of entry.keywords) {
      const lkw = kw.toLowerCase();

      // Exact phrase match
      if (q.includes(lkw)) {
        if (lkw.includes(' ')) {
          // Multi-word phrase matches get heavy weighting
          score += 20;
        } else {
          score += 8;
        }
      } else {
        // Individual token matching (ignoring common stopwords for prefix checks)
        for (const tok of tokens) {
          if (tok === lkw) {
            score += 6;
          } else if (
            !STOP_WORDS.has(tok) &&
            tok.length >= 4 &&
            lkw.length >= 4 &&
            (tok.startsWith(lkw) || (tok.length >= 5 && lkw.startsWith(tok)))
          ) {
            score += 3;
          }
        }
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestEntry = entry;
    }
  }

  // If score meets threshold, return matching knowledge entry
  if (bestEntry && highestScore >= 5) {
    return {
      text: bestEntry.response,
      linkTo: bestEntry.linkTo,
      linkText: bestEntry.linkText,
      showContact: bestEntry.showContact,
      actions: bestEntry.actions
    };
  }

  // Comprehensive fallback if query has no specific keyword match
  return {
    text: "Thank you for contacting **The Scholars High School & Junior College for Commerce** (Est. 1993, Al-Qalam Educational Trust).\n\nHere is a quick overview of our institution:\n\n• **Admissions 2026-27:** Actively open from MRAK Kids Pre-School through Junior College Commerce (XI & XII).\n• **Curriculum & Results:** Maharashtra SSC & HSC Commerce Board with an **unbroken 100% pass record**.\n• **Campus Facilities:** 7-floor campus at Hill Park, passenger elevator/lift across all floors, fully air-conditioned smart digital classrooms, science practical and IT labs, RO water, and prayer hall.\n• **Campus Location:** Captain Suresh Samant Marg, Agarwal Estate, Opp. Hill Park Tower, Jogeshwari (West), Mumbai 400102.\n• **Office Hours:** Monday to Saturday, 9:00 AM to 3:00 PM.\n\nPlease choose one of the popular categories below or type a specific question:",
    actions: [
      { label: 'Admissions 2026-27', query: 'Tell me about the admission procedure and required documents' },
      { label: 'Academic Sections', query: 'What academic sections do you offer?' },
      { label: 'Commerce Subjects', query: 'What subjects are taught in 11th and 12th Commerce?' },
      { label: 'School Timings & Location', query: 'What are the school timings and campus location?' },
      { label: '100% Board Results', query: 'Tell me about the SSC Board examination results' },
      { label: 'Teaching Vacancies', query: 'What teaching jobs and vacancies are available?' },
      { label: 'Helplines & WhatsApp', query: 'Give me your official phone numbers and contact details' }
    ],
    showContact: true
  };
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadBadge, setUnreadBadge] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadBadge(false);
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const responseData = getBotResponse(query);
      const botMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: responseData.text,
        actions: responseData.actions,
        linkTo: responseData.linkTo,
        linkText: responseData.linkText,
        showContact: responseData.showContact,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 450);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
  };

  // Enhanced Markdown & Link Formatter (supports **bold**, emails, and phone numbers)
  const renderFormattedText = (text) => {
    if (!text) return null;
    const lines = text.split('\n');

    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    const phoneRegex = /(\+91\s?\d{10})/g;

    const renderLinksAndPhones = (content, keyPrefix) => {
      if (typeof content !== 'string') return [content];
      let parts = [content];

      // Replace emails with mailto links
      parts = parts.flatMap((part) => {
        if (typeof part !== 'string') return [part];
        const splitEmails = part.split(emailRegex);
        return splitEmails.map((item, i) => {
          if (emailRegex.test(item)) {
            return (
              <a
                key={`${keyPrefix}-email-${i}`}
                href={`mailto:${item}`}
                className="ai-chat-link"
              >
                {item}
              </a>
            );
          }
          return item;
        });
      });

      // Replace phones with tel links
      parts = parts.flatMap((part) => {
        if (typeof part !== 'string') return [part];
        const splitPhones = part.split(phoneRegex);
        return splitPhones.map((item, i) => {
          if (phoneRegex.test(item)) {
            const cleanNum = item.replace(/\s+/g, '');
            return (
              <a
                key={`${keyPrefix}-phone-${i}`}
                href={`tel:${cleanNum}`}
                className="ai-chat-link"
              >
                {item}
              </a>
            );
          }
          return item;
        });
      });

      return parts;
    };

    return lines.map((line, lIdx) => {
      // Split bold markers: **text**
      const boldParts = line.split(/(\*\*.*?\*\*)/g);

      const formattedLine = boldParts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          const boldText = part.slice(2, -2);
          return (
            <strong key={`b-${lIdx}-${pIdx}`} style={{ fontWeight: 700, color: 'inherit' }}>
              {renderLinksAndPhones(boldText, `b-${lIdx}-${pIdx}`)}
            </strong>
          );
        }
        return renderLinksAndPhones(part, `p-${lIdx}-${pIdx}`);
      });

      return (
        <React.Fragment key={lIdx}>
          {formattedLine}
          {lIdx < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return (
    <>
      {/* Floating AI Chatbot Trigger Button */}
      <div className="floating-ai-container">
        {!isOpen && (
          <button
            type="button"
            className="floating-ai-trigger"
            onClick={() => setIsOpen(true)}
            aria-label="Open Scholars AI Campus Guide"
          >
            <div className="floating-ai-icon-wrap">
              <Sparkles size={20} className="floating-ai-sparkle" />
              <Bot size={22} className="floating-ai-bot" />
              {unreadBadge && <span className="floating-ai-badge" />}
            </div>
            <span className="floating-ai-label">Ask Scholars AI</span>
          </button>
        )}
      </div>

      {/* Interactive AI Chat Window */}
      {isOpen && (
        <div
          className="ai-chat-window"
          role="dialog"
          aria-modal="true"
          aria-label="Scholars AI Campus Guide"
        >
          {/* Header */}
          <div className="ai-chat-header">
            <div className="ai-chat-header-profile">
              <div className="ai-chat-avatar">
                <GraduationCap size={20} />
                <span className="ai-chat-online-dot" />
              </div>
              <div>
                <h3 className="ai-chat-title">Scholars AI Assistant</h3>
                <span className="ai-chat-subtitle">Official Campus &amp; Admissions Guide</span>
              </div>
            </div>

            <div className="ai-chat-header-actions">
              <button
                type="button"
                className="ai-chat-action-btn"
                onClick={handleReset}
                title="Reset conversation"
                aria-label="Reset conversation"
              >
                <RotateCcw size={16} />
              </button>
              <button
                type="button"
                className="ai-chat-action-btn"
                onClick={() => setIsOpen(false)}
                title="Close chat"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="ai-chat-banner">
            <span>Powered by The Scholars School Official Knowledge Base &bull; Est. 1993</span>
          </div>

          {/* Messages Body */}
          <div className="ai-chat-body">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`ai-message-row ${msg.sender === 'user' ? 'ai-user-row' : 'ai-bot-row'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="ai-message-avatar">
                    <Bot size={16} />
                  </div>
                )}

                <div className="ai-message-content">
                  <div className={`ai-bubble ${msg.sender === 'user' ? 'ai-user-bubble' : 'ai-bot-bubble'}`}>
                    <div className="ai-bubble-text">{renderFormattedText(msg.text)}</div>

                    {/* Navigation Link if present */}
                    {msg.linkTo && (
                      <div className="ai-message-link-box">
                        <Link
                          to={msg.linkTo}
                          className="ai-btn-gold-link"
                          onClick={() => setIsOpen(false)}
                        >
                          <span>{msg.linkText || 'Learn More'}</span>
                          <ChevronRight size={14} />
                        </Link>
                      </div>
                    )}

                    {/* Contact Quick Buttons */}
                    {msg.showContact && (
                      <div className="ai-contact-quick-actions">
                        <a
                          href="tel:+918976890569"
                          className="ai-contact-chip"
                          aria-label="Call +91 8976890569"
                        >
                          <Phone size={12} />
                          <span>Call: +91 8976890569</span>
                        </a>
                        <a
                          href="https://wa.me/918976890569?text=Hello%20The%20Scholars%20School%2C%20I%20have%20an%20enquiry%20regarding%20admissions."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ai-contact-chip ai-contact-whatsapp"
                          aria-label="Chat on WhatsApp"
                        >
                          <ExternalLink size={12} />
                          <span>WhatsApp Chat</span>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Suggestion Chips */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="ai-chips-list">
                      {msg.actions.map((act, actIdx) => (
                        <button
                          key={actIdx}
                          type="button"
                          className="ai-chip-btn"
                          onClick={() => handleSendMessage(act.query)}
                        >
                          {act.label}
                        </button>
                      ))}
                    </div>
                  )}

                  <span className="ai-message-time">{msg.time}</span>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="ai-message-row ai-bot-row">
                <div className="ai-message-avatar">
                  <Bot size={16} />
                </div>
                <div className="ai-message-content">
                  <div className="ai-bubble ai-bot-bubble ai-typing-bubble">
                    <span className="ai-typing-dot" />
                    <span className="ai-typing-dot" />
                    <span className="ai-typing-dot" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="ai-chat-footer">
            <div className="ai-chat-input-wrapper">
              <input
                ref={inputRef}
                type="text"
                className="ai-chat-input"
                placeholder="Ask about admissions, subjects, timings, fees..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                maxLength={400}
                aria-label="Ask Scholars AI a question"
              />
              <button
                type="button"
                className="ai-chat-send-btn"
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim()}
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
