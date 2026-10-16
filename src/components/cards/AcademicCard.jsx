import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function AcademicCard({ section }) {
  const badgeText = section.badge || section.ageGroup;
  const descText = section.desc || section.summary;

  return (
    <article className="academic-card-modern">
      <div className="academic-card-media">
        <img
          src={section.heroImage}
          alt={section.title}
          loading="lazy"
          width="400"
          height="190"
        />
        <div className="academic-card-overlay" />
        {badgeText && (
          <span className="academic-card-badge">
            {badgeText}
          </span>
        )}
      </div>

      <div className="academic-card-body">
        <h3 className="academic-card-title">
          {section.title}
        </h3>

        <p className="academic-card-summary">
          {descText}
        </p>

        <div className="academic-card-footer">
          <Link
            to={section.path}
            className="btn btn-outline"
            style={{ width: '100%' }}
          >
            <span>Explore Section</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}


