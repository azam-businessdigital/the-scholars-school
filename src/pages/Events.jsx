import React, { useState } from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SectionHeader from '../components/common/SectionHeader';
import EventCard from '../components/cards/EventCard';
import { eventsData } from '../data/eventsData';

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'National Celebrations',
    'Sports',
    'Academic & Cultural',
    'Arts & Creativity',
    'Parent Engagement'
  ];

  const filteredEvents = activeCategory === 'All'
    ? eventsData
    : eventsData.filter((e) => e.category === activeCategory);

  return (
    <>
      <SEO
        title="Events & Activities | The Scholars High School"
        description="Co-curricular events, Annual Sports Day, Independence Day, and cultural activities at The Scholars High School in Jogeshwari West, Mumbai."
        canonical="https://thescholarsschool.edu.in/events/"
      />

      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">CO-CURRICULAR LIFE</span>
          <h1>School Events &amp; Co-Curricular Activities</h1>
          <p>
            Enriching the educational journey through patriotic commemorations, athletics, botanical creative arts, and community engagement.
          </p>
        </div>
      </div>

      <Breadcrumbs items={[{ label: 'Events', path: '/events/' }]} />

      <section className="section section-white">
        <div className="container">
          {/* Category Filter */}
          <div className="filter-bar" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid-3">
            {filteredEvents.map((evt) => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
