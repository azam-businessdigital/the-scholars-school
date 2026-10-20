import React from 'react';
import { pearlsOfWisdomData } from '../../data/pearlsData';

export default function PearlsOfWisdom({ className = '', id = 'pearls-of-wisdom' }) {
  return (
    <section id={id} className={`section pearls-section ${className}`} aria-labelledby="pearls-heading">
      <div className="container">
        <div className="section-header text-center reveal-up">
          <span className="eyebrow">SPIRITUAL &amp; MORAL HERITAGE</span>
          <h2 id="pearls-heading" className="section-title">
            Pearls Of Wisdom
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '780px', margin: '0 auto' }}>
            Education of today determines if the children of tomorrow can uphold and honor human qualities of compassion.
          </p>
        </div>

        <div className="pearls-grid stagger-group reveal-up">
          {pearlsOfWisdomData.map((item) => (
            <div key={item.id} className="pearl-card card reveal-up">
              <div>
                <div className="pearl-card-top">
                  <div className="pearl-icon-badge">
                    <img
                      src={item.image}
                      alt="Islamic Knowledge Symbol"
                      className="pearl-icon-img"
                      loading="lazy"
                    />
                  </div>
                  <svg
                    className="pearl-quote-icon"
                    width="32"
                    height="24"
                    viewBox="0 0 36 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M9.6 0C4.3 0 0 4.3 0 9.6C0 14.9 4.3 19.2 9.6 19.2C10.1 19.2 10.6 19.1 11 19C10.2 23.3 6.6 26.5 2 27.5L3.2 28C10.5 26.3 16 19.7 16 11.7C16 5.2 13.1 0 9.6 0ZM29.6 0C24.3 0 20 4.3 20 9.6C20 14.9 24.3 19.2 29.6 19.2C30.1 19.2 30.6 19.1 31 19C30.2 23.3 26.6 26.5 22 27.5L23.2 28C30.5 26.3 36 19.7 36 11.7C36 5.2 33.1 0 29.6 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <blockquote className="pearl-quote">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pearl-author-wrap">
                <div className="pearl-author-name">{item.author}</div>
                <div className="pearl-author-role">{item.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="pearls-footer-banner reveal-up">
          <div className="pearls-footer-pill">
            <span className="pearls-pill-dot" aria-hidden="true"></span>
            <span className="pearls-pill-label">Foundational Philosophy</span>
            <span className="pearls-pill-divider" aria-hidden="true"></span>
            <span className="pearls-pill-quote">&ldquo;Modern Education with Islamic Frame of Reference&rdquo;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
