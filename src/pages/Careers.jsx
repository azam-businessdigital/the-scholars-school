import React from 'react';
import { Mail, CheckCircle2, Briefcase, GraduationCap } from 'lucide-react';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SectionHeader from '../components/common/SectionHeader';
import { schoolData } from '../data/schoolData';

export default function Careers() {
  const teacherSubjects = [
    { subject: "English", level: "Primary & Secondary", qualification: "B.A. / M.A. in English with B.Ed" },
    { subject: "Marathi", level: "Primary & Secondary", qualification: "B.A. in Marathi with D.T.Ed / B.Ed" },
    { subject: "Mathematics", level: "Secondary Section", qualification: "B.Sc. / M.Sc. in Maths with B.Ed" },
    { subject: "Science (Physics, Chemistry, Biology)", level: "Secondary Section", qualification: "B.Sc. / M.Sc. in Science with B.Ed" },
    { subject: "Social Studies (History & Geography)", level: "Secondary Section", qualification: "B.A. / M.A. with B.Ed" },
    { subject: "Art & Craft", level: "MRAK Kids & Primary", qualification: "ATD / Diploma in Fine Arts" },
    { subject: "Physical Training (PT Teacher)", level: "All Sections", qualification: "B.P.Ed / D.P.Ed" }
  ];

  return (
    <>
      <SEO
        title="Careers & Teaching Vacancies | The Scholars School"
        description="Current faculty openings at The Scholars High School, Jogeshwari West: Head Mistress and Subject Teachers in English, Marathi, Maths, Science, and more."
        canonical="https://thescholarsschool.edu.in/careers/"
      />

      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">WORK WITH US</span>
          <h1>Careers at The Scholars School</h1>
          <p>
            Join a dedicated community of educators committed to academic quality, value-based learning, and shaping future generations.
          </p>
        </div>
      </div>

      <Breadcrumbs items={[{ label: 'Careers', path: '/careers/' }]} />

      <section className="section section-white">
        <div className="container">
          <div className="grid-2 stagger-group reveal-up" style={{ alignItems: 'center' }}>
            <div className="section-header reveal-up">
              <span className="eyebrow">TEACHING ENVIRONMENT</span>
              <h2 className="section-title">
                Why You Will Love Working with The Scholars School Family
              </h2>
              <p>
                If you are passionate about education, eager to grow in your teaching career, and wish to make a meaningful impact on young students, The Scholars School is the right institution for you.
              </p>
              <p>
                We offer an encouraging, values-driven environment across our seven-floor campus in Jogeshwari West, equipped with interactive smart classrooms, digital support, and devoted leadership.
              </p>
              <div style={{ marginTop: '20px' }}>
                <a
                  href={`mailto:${schoolData.emails.admin}?subject=Application for Teaching Position`}
                  className="btn btn-primary"
                >
                  <Mail size={16} />
                  <span>Send Your Resume Directly</span>
                </a>
              </div>
            </div>

            <div>
              <div
                className="card reveal-up"
                style={{
                  backgroundColor: 'var(--color-ivory-white)',
                  padding: 'clamp(16px, 3.5vw, var(--space-8))',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border-subtle)',
                  borderLeft: '4px solid var(--color-champagne-gold)'
                }}
              >
                <h3 className="card-title" style={{ marginBottom: '12px' }}>
                  Application Instructions
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', gap: '10px', fontSize: '14px', color: 'var(--color-slate-grey-dark)', marginBottom: '10px' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-champagne-gold)', flexShrink: 0, marginTop: '2px' }} />
                    <span>Send your updated resume in PDF format to <a href={`mailto:${schoolData.emails.admin}`} style={{ color: 'var(--color-champagne-gold)', fontWeight: 700, textDecoration: 'underline' }}>{schoolData.emails.admin}</a> or <a href="mailto:info@thescholarsschool.edu.in" style={{ color: 'var(--color-champagne-gold)', fontWeight: 700, textDecoration: 'underline' }}>info@thescholarsschool.edu.in</a>.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '10px', fontSize: '14px', color: 'var(--color-slate-grey-dark)', marginBottom: '10px' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-champagne-gold)', flexShrink: 0, marginTop: '2px' }} />
                    <span>Please ensure your PDF resume file size does not exceed 1 MB.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '10px', fontSize: '14px', color: 'var(--color-slate-grey-dark)', marginBottom: '10px' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-champagne-gold)', flexShrink: 0, marginTop: '2px' }} />
                    <span>Clearly specify the position and subject applied for in the email subject line.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '10px', fontSize: '14px', color: 'var(--color-slate-grey-dark)' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-champagne-gold)', flexShrink: 0, marginTop: '2px' }} />
                    <span>Shortlisted candidates will be invited for personal interviews and classroom demonstrations.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Openings */}
      <section className="section section-ivory">
        <div className="container">
          <SectionHeader
            eyebrow="CURRENT OPENINGS"
            title="Verified Institutional Vacancies"
            subtitle="Explore current administrative and teaching positions open for qualified educational professionals."
            centered
          />

          {/* Head Mistress Card */}
          <div
            className="career-card card reveal-up"
            style={{
              backgroundColor: '#fff',
              border: '1px solid var(--color-border-subtle)',
              borderLeft: '4px solid var(--color-royal-navy)',
              borderRadius: 'var(--radius-sm)',
              padding: 'clamp(16px, 3.5vw, var(--space-8))',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: 'var(--space-8)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
              <div>
                <span style={{ fontSize: '11px', color: 'var(--color-champagne-gold)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Leadership Role
                </span>
                <h3 className="card-title" style={{ margin: '2px 0 0 0' }}>
                  Required: Experienced Head Mistress
                </h3>
              </div>
              <span style={{ fontSize: '12px', backgroundColor: 'var(--color-ivory-white)', padding: '4px 12px', borderRadius: '4px', border: '1px solid var(--color-border-subtle)', fontWeight: 600 }}>
                Full-Time Position
              </span>
            </div>

            <p style={{ marginBottom: '16px' }}>
              &ldquo;Required Experienced Head Mistress with a strong educational background holding a B.Ed or D.T.Ed, dedicated to fostering academic excellence and holistic development in students.&rdquo;
            </p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '13px', color: 'var(--color-slate-grey)' }}>
              <div><strong>Required Qualification:</strong> B.Ed or D.T.Ed from a recognized university</div>
              <div><strong>Experience:</strong> Prior administrative and teaching experience preferred</div>
            </div>
          </div>

          {/* Subject Teachers Table */}
          <div
            className="career-card card reveal-up"
            style={{
              backgroundColor: '#fff',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: 'var(--radius-sm)',
              boxShadow: 'var(--shadow-sm)',
              padding: 'clamp(16px, 3.5vw, var(--space-8))'
            }}
          >
            <h3 className="card-title" style={{ marginBottom: '16px' }}>
              Required Subject Teachers
            </h3>

            <div className="data-table-wrapper">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Subject Area</th>
                    <th>Section Level</th>
                    <th>Preferred Qualification</th>
                    <th>Application Action</th>
                  </tr>
                </thead>
                <tbody>
                  {teacherSubjects.map((item, idx) => (
                    <tr key={idx}>
                      <td><strong>{item.subject}</strong></td>
                      <td>{item.level}</td>
                      <td>{item.qualification}</td>
                      <td>
                        <a
                          href={`mailto:${schoolData.emails.admin}?subject=Application for ${item.subject} Teacher`}
                          className="btn btn-primary btn-sm"
                        >
                          Apply via Email
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
