import React, { useState } from 'react';
import { Search, Calendar, FileText, Download, Filter } from 'lucide-react';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SectionHeader from '../components/common/SectionHeader';
import { announcementsData } from '../data/announcementsData';

export default function Announcements() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Results', 'Admissions', 'Careers'];

  const filteredNotices = announcementsData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.details.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === 'All' || item.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const formatContactLinks = (text) => {
    if (!text) return text;
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    const parts = text.split(emailRegex);
    return parts.map((part, index) => {
      if (emailRegex.test(part)) {
        return (
          <a
            key={index}
            href={`mailto:${part}`}
            style={{ color: 'var(--color-champagne-gold)', fontWeight: 700, textDecoration: 'underline' }}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <>
      <SEO
        title="Announcements & Circulars | The Scholars School"
        description="Official notices, board examination results, circulars, and recruitment updates from The Scholars High School, Jogeshwari West."
        canonical="https://thescholarsschool.edu.in/announcements/"
      />

      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">NOTICE BOARD</span>
          <h1>Official Announcements &amp; Circulars</h1>
          <p>
            Stay informed with verified institutional announcements, board examination results, admission circulars, and official updates.
          </p>
        </div>
      </div>

      <Breadcrumbs items={[{ label: 'Announcements', path: '/announcements/' }]} />

      <section className="section section-white">
        <div className="container">
          {/* Section Header */}
          <div className="section-header reveal-up" style={{ marginBottom: 'var(--space-8)' }}>
            <span className="eyebrow">ACADEMIC &amp; ADMINISTRATIVE NOTICES</span>
            <h2 className="section-title">Institutional Circulars &amp; Updates</h2>
            <p className="section-subtitle">
              Verified circulars, exam schedules, vacation schedules, and key administrative announcements for students, parents, and faculty.
            </p>
          </div>

          {/* Search & Category Filter */}
          <div
            className="filter-bar-wrap reveal-up"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'var(--color-ivory-white)',
              padding: 'clamp(12px, 3vw, var(--space-6))',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--color-border-subtle)',
              marginBottom: 'var(--space-10)'
            }}
          >
            {/* Search Input */}
            <div style={{ position: 'relative', flexGrow: 1, width: '100%', maxWidth: '400px' }}>
              <Search
                size={18}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--color-slate-grey)'
                }}
              />
              <input
                type="text"
                placeholder="Search announcements by keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '40px' }}
                aria-label="Search announcements"
              />
            </div>

            {/* Category Filter Buttons */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Announcements List */}
          {filteredNotices.length > 0 ? (
            <div className="stagger-group reveal-up" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              {filteredNotices.map((notice) => (
                <article
                  key={notice.id}
                  className="announcement-card card reveal-up"
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid var(--color-border-subtle)',
                    borderLeft: '4px solid var(--color-champagne-gold)',
                    borderRadius: 'var(--radius-sm)',
                    padding: 'clamp(16px, 3.5vw, var(--space-8))',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: 'var(--color-royal-navy)',
                        backgroundColor: 'var(--color-champagne-gold-subtle)',
                        border: '1px solid var(--color-champagne-gold)',
                        padding: '3px 10px',
                        borderRadius: '2px'
                      }}
                    >
                      {notice.category}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--color-slate-grey)' }}>
                      <Calendar size={14} />
                      <span>Published: {notice.date}</span>
                    </div>
                  </div>

                  <h3 className="card-title" style={{ marginBottom: '10px' }}>
                    {notice.title}
                  </h3>

                  <p className="card-text" style={{ marginBottom: '12px' }}>
                    {notice.summary}
                  </p>

                  <p style={{ marginBottom: notice.documentUrl ? '20px' : '0' }}>
                    {formatContactLinks(notice.details)}
                  </p>

                  {notice.documentUrl && (
                    <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-border-subtle)' }}>
                      <a
                        href={notice.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <Download size={14} />
                        <span>Download {notice.documentName}</span>
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: 'var(--space-12) 0', color: 'var(--color-slate-grey)' }}>
              <p>No announcements found matching your search criteria.</p>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('All');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
