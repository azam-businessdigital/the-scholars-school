import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  const fullItems = [
    { label: 'Home', path: '/' },
    ...items
  ];

  // Schema BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': fullItems.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.label,
      'item': `https://thescholarsschool.edu.in${item.path || ''}`
    }))
  };

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs-bar reveal-fade is-revealed">
      <div className="container">
        <ol className="breadcrumbs-list">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;
            return (
              <React.Fragment key={index}>
                {index > 0 && (
                  <li className="breadcrumb-separator" aria-hidden="true">
                    <ChevronRight size={14} />
                  </li>
                )}
                <li>
                  {isLast ? (
                    <span className="breadcrumb-current" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link to={item.path} className="breadcrumb-link">
                      {index === 0 && <Home size={14} className="breadcrumb-home-icon" />}
                      <span>{item.label}</span>
                    </Link>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />
    </nav>
  );
}
