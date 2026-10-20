import React from 'react';

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  asH1 = false,
  className = ''
}) {
  const HeadingTag = asH1 ? 'h1' : 'h2';

  return (
    <div className={`section-header reveal-up ${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <HeadingTag className="section-title">{title}</HeadingTag>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
