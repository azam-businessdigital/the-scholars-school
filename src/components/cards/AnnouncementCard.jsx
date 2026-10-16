import React from 'react';
import { Calendar, FileText, Download } from 'lucide-react';

export default function AnnouncementCard({ announcement }) {
  return (
    <article className="card" style={{ height: '100%' }}>
      <div className="card-body">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--color-royal-navy)',
              backgroundColor: 'var(--color-champagne-gold-subtle)',
              border: '1px solid var(--color-champagne-gold)',
              padding: '2px 8px',
              borderRadius: '2px'
            }}
          >
            {announcement.category}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--color-slate-grey)' }}>
            <Calendar size={13} />
            <span>{announcement.date}</span>
          </div>
        </div>

        <h3 className="card-title" style={{ marginBottom: '10px', lineHeight: 1.35 }}>
          {announcement.title}
        </h3>

        <p className="card-text">{announcement.summary}</p>

        {announcement.documentUrl && (
          <div className="card-footer" style={{ borderTop: 'none', paddingTop: 0 }}>
            <a
              href={announcement.documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              style={{ width: '100%' }}
            >
              <Download size={14} />
              <span>Download Official Document</span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
