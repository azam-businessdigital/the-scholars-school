import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';

export default function EventCard({ event, minimal = false }) {
  return (
    <article className="event-card-redesign">
      <div className="event-card-media">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          width="400"
          height="210"
          className="event-card-img"
        />
        <div className="event-date-pill">
          <Calendar size={13} />
          <span>{event.date}</span>
        </div>
        <span className="event-cat-badge">{event.category}</span>
      </div>

      <div className="event-card-body-clean">
        <div className="event-meta-loc">
          <MapPin size={13} />
          <span>{event.location}</span>
        </div>

        <h3 className="event-clean-title">{event.title}</h3>

        {!minimal && (
          <p className="card-text" style={{ marginBottom: '14px' }}>
            {event.description}
          </p>
        )}

        {!minimal && event.highlights && (
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              marginTop: 'auto',
              borderTop: '1px solid var(--color-border-subtle)',
              paddingTop: '10px'
            }}
          >
            {event.highlights.map((h, i) => (
              <li
                key={i}
                style={{
                  fontSize: '12px',
                  color: 'var(--color-slate-grey)',
                  marginBottom: '4px'
                }}
              >
                &bull; {h}
              </li>
            ))}
          </ul>
        )}

        <div className="event-card-cta">
          <Link to="/events/" className="event-clean-link">
            <span>View Event Details</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
