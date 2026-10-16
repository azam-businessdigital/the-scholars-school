import React, { useState } from 'react';
import { Award, Download, CheckCircle, FileText, Calendar } from 'lucide-react';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SectionHeader from '../components/common/SectionHeader';
import { resultsData } from '../data/resultsData';

export default function Results() {
  const [selectedYear, setSelectedYear] = useState('2024-2025');

  return (
    <>
      <SEO
        title="Board Examination Results | The Scholars School"
        description="Official results of Maharashtra SSC and HSC examinations at The Scholars High School & Junior College for Commerce. Download official result gazettes."
        canonical="https://thescholarsschool.edu.in/results/"
      />

      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">ACADEMIC HONORS</span>
          <h1>Academic Board Examination Results</h1>
          <p>
            Celebrating our students' dedication, disciplined study, and our tradition of 100% passing results in the Maharashtra State Board examinations.
          </p>
        </div>
      </div>

      <Breadcrumbs items={[{ label: 'Results', path: '/results/' }]} />

      <section className="section section-white">
        <div className="container">
          <SectionHeader
            eyebrow="PROVEN PERFORMANCE"
            title="Consistent 100% Board Passing Track Record"
            subtitle="The Scholars High School and Junior College for Commerce adhere strictly to the examination curriculum of the Maharashtra State Board of Secondary and Higher Secondary Education."
            centered
          />

          {/* Results Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            {resultsData.map((res) => (
              <article
                key={res.id}
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  boxShadow: 'var(--shadow-sm)',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    backgroundColor: 'var(--color-royal-navy)',
                    color: '#fff',
                    padding: 'var(--space-5) clamp(16px, 4vw, var(--space-8))',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '11px', color: 'var(--color-champagne-gold)', fontWeight: 700, textTransform: 'uppercase' }}>
                      Academic Session {res.academicYear}
                    </span>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: '#fff', margin: '2px 0 0 0' }}>
                      {res.exam}
                    </h2>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '24px',
                      fontWeight: 700,
                      color: 'var(--color-champagne-gold)',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      padding: '4px 16px',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid rgba(198, 161, 91, 0.4)'
                    }}
                  >
                    {res.passingPercentage} Result
                  </div>
                </div>

                <div style={{ padding: 'clamp(16px, 4vw, var(--space-8))' }}>
                  <p style={{ marginBottom: '16px' }}>
                    {res.description}
                  </p>

                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-royal-navy)', marginBottom: '10px' }}>
                    Key Performance Highlights:
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
                    {res.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '14px',
                          color: 'var(--color-slate-grey)',
                          marginBottom: '8px'
                        }}
                      >
                        <CheckCircle size={16} style={{ color: 'var(--color-champagne-gold)', flexShrink: 0 }} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid var(--color-border-subtle)' }}>
                    <a
                      href={res.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <Download size={16} />
                      <span>Download Official Gazette (PDF)</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy and Verification Note */}
      <section className="section section-ivory">
        <div className="container" style={{ maxWidth: '850px', textAlign: 'center' }}>
          <h3 className="card-title" style={{ marginBottom: '12px' }}>
            Student Privacy &amp; Gazette Verification Note
          </h3>
          <p>
            In accordance with institutional guidelines and student data privacy norms, individual detailed marks transcripts are handed directly to students and their registered parents/guardians. Official school statistics and Gazette PDFs above represent verified institutional outcomes verified by the Maharashtra State Board.
          </p>
        </div>
      </section>
    </>
  );
}
