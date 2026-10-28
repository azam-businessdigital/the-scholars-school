import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO({
  title,
  description,
  canonical,
  ogImage = '/images/campus/building.jpg',
  type = 'website'
}) {
  const location = useLocation();
  const siteUrl = 'https://thescholarsschool.edu.in';
  const fullTitle = `${title} | The Scholars High School and Junior College`;
  const canonicalUrl = canonical || `${siteUrl}${location.pathname}`;
  const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  useEffect(() => {
    // Document Title
    document.title = fullTitle;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Canonical Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    // Open Graph
    const setMeta = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta('og:title', fullTitle);
    setMeta('og:description', description);
    setMeta('og:url', canonicalUrl);
    setMeta('og:image', absoluteOgImage);
    setMeta('og:type', type);
    setMeta('og:site_name', 'The Scholars High School and Junior College');
    setMeta('og:locale', 'en_IN');
    setMeta('og:image:width', '1200');
    setMeta('og:image:height', '630');
    setMeta('og:image:alt', fullTitle);

    // Twitter Card
    const setTwitterMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setTwitterMeta('twitter:card', 'summary_large_image');
    setTwitterMeta('twitter:url', canonicalUrl);
    setTwitterMeta('twitter:title', fullTitle);
    setTwitterMeta('twitter:description', description);
    setTwitterMeta('twitter:image', absoluteOgImage);
    setTwitterMeta('twitter:image:alt', fullTitle);
  }, [fullTitle, description, canonicalUrl, absoluteOgImage, type]);

  return null;
}
