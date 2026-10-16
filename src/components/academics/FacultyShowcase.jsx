import React from 'react';
import SectionHeader from '../common/SectionHeader';

export default function FacultyShowcase({
  facultyEyebrow = "TEACHING FACULTY & MENTORS",
  facultyTitle = "Our Teaching Faculty",
  facultySubtitle = "Experienced educators committed to academic excellence and moral character.",
  teachers = [],
  photoEyebrow = "FACULTY HONOUR ROLL",
  photoTitle = "Faculty Group Portrait",
  photoSubtitle = "Our dedicated educators photographed with school leadership on campus.",
  largePhoto,
  largePhotos,
  captionTitle,
  captionSub
}) {
  return (
    <>
      {/* SECTION A: TEACHER NAMES ROSTER */}
      <section className="section section-white">
        <div className="container">
          <SectionHeader
            eyebrow={facultyEyebrow}
            title={facultyTitle}
            subtitle={facultySubtitle}
            centered
          />

          <div className="faculty-roster-grid">
            {teachers.map((t, index) => {
              const name = typeof t === 'string' ? t : t.name;
              const qualification = typeof t === 'object' ? t.qualification : null;
              return (
                <div key={index} className="faculty-roster-card">
                  <span className="faculty-roster-number">{index + 1}</span>
                  <div className="faculty-roster-info">
                    <span className="faculty-roster-name">{name}</span>
                    {qualification && (
                      <span className="faculty-roster-qualification">{qualification}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION B: LARGE TEACHER PHOTO SHOWCASE */}
      <section className="section section-ivory">
        <div className="container">
          <SectionHeader
            eyebrow={photoEyebrow}
            title={photoTitle}
            subtitle={photoSubtitle}
            centered
          />

          {largePhotos && largePhotos.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
              {largePhotos.map((item, idx) => (
                <div key={idx} className="faculty-large-showcase">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="faculty-large-img"
                    loading="lazy"
                    width="1200"
                    height="600"
                  />
                  <div className="faculty-large-caption">
                    <div>
                      <div className="faculty-caption-title">{item.title}</div>
                      <div className="faculty-caption-sub">{item.subtitle}</div>
                    </div>
                    <span style={{ fontSize: '11px', color: 'var(--color-champagne-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      The Scholars High School
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : largePhoto ? (
            <div className="faculty-large-showcase">
              <img
                src={largePhoto}
                alt={captionTitle || photoTitle}
                className="faculty-large-img"
                loading="lazy"
                width="1200"
                height="600"
              />
              <div className="faculty-large-caption">
                <div>
                  <div className="faculty-caption-title">{captionTitle || photoTitle}</div>
                  <div className="faculty-caption-sub">{captionSub || photoSubtitle}</div>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--color-champagne-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  The Scholars High School
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
