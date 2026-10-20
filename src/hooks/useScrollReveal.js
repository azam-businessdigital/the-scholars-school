import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * useScrollReveal Hook
 * Automatically attaches an IntersectionObserver to sections, headers, image containers,
 * and cards to trigger smooth, premium CSS reveals as they enter the viewport.
 */
export default function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    // If user prefers reduced motion or browser doesn't support IntersectionObserver, reveal all immediately
    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      document
        .querySelectorAll(
          '.reveal-on-scroll, .reveal-up, .reveal-fade, .reveal-scale, .reveal-left, .reveal-right, .section-header'
        )
        .forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    // Comprehensive selectors for headings, cards, grids, and image wrappers across all pages
    const targetSelectors = [
      '.reveal-on-scroll',
      '.reveal-up',
      '.reveal-fade',
      '.reveal-scale',
      '.reveal-left',
      '.reveal-right',
      '.section-header',
      '.section-title',
      '.eyebrow',
      '.page-banner',
      '.breadcrumbs-bar',
      'h1',
      'h2',
      'h3',
      '.card',
      '.filter-bar',
      '.about-collage-wrap',
      '.admission-thumb-wrap',
      '.campus-building-spotlight',
      '.academic-card-modern',
      '.academic-hero-media',
      '.academic-hero-grid',
      '.mrak-badges-row',
      '.why-choose-card',
      '.simple-facility-card',
      '.modern-result-card',
      '.pearl-card',
      '.media-card',
      '.album-card',
      '.stat-item',
      '.leadership-box',
      '.stagger-group',
      '.grid-2',
      '.grid-3',
      '.media-news-grid',
      '.albums-grid',
      '.admissions-streams-grid',
      '.admissions-stream-card',
      '.academic-heads-grid',
      '.academic-head-card',
      '.trustees-grid',
      '.trustee-card',
      '.announcement-card',
      '.result-detailed-card',
      '.career-card',
      '.contact-info-card',
      '.contact-layout-grid',
      '.pinterest-pin',
      '.roadmap-card',
      '.trust-policy-banner',
      '.eligibility-box',
      '.admissions-checklist-box',
      '.admissions-faq-wrapper',
      '.mrak-principal-card',
      '.mrak-gallery-card',
      '.academic-domain-card',
      '.mrak-routine-card',
      '.faculty-roster-card',
      '.faculty-large-showcase',
      '.mrak-stat-pill',
      '.mrak-logo-display',
      '.mrak-gallery-grid-4',
      '.academic-domain-grid',
      '.mrak-routine-grid',
      '.faculty-roster-grid',
      'section'
    ];

    const observedSet = new WeakSet();

    const registerElements = () => {
      const elements = document.querySelectorAll(targetSelectors.join(', '));
      elements.forEach((el) => {
        if (!observedSet.has(el) && !el.classList.contains('is-revealed')) {
          observedSet.add(el);
          observer.observe(el);
        }
      });
    };

    // Allow initial paint so that CSS transitions trigger visibly
    const initialRaf = requestAnimationFrame(() => {
      registerElements();
    });

    // Staggered registers for lazy loaded React components
    const timers = [
      setTimeout(registerElements, 100),
      setTimeout(registerElements, 250),
      setTimeout(registerElements, 500),
      setTimeout(registerElements, 900)
    ];

    // Fallback: If after 2.5s any element is in viewport and not revealed, reveal it smoothly
    const fallbackTimer = setTimeout(() => {
      const vh = window.innerHeight || 800;
      document.querySelectorAll(targetSelectors.join(', ')).forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          const rect = el.getBoundingClientRect();
          if (rect.top < vh && rect.bottom > 0) {
            el.classList.add('is-revealed');
          }
        }
      });
    }, 2500);

    // MutationObserver to register elements when React lazy-loads route components
    let mutationObserver = null;
    const mainContainer = document.getElementById('main-content') || document.body;
    if (typeof MutationObserver !== 'undefined' && mainContainer) {
      mutationObserver = new MutationObserver(() => {
        registerElements();
      });
      mutationObserver.observe(mainContainer, { childList: true, subtree: true });
    }

    return () => {
      cancelAnimationFrame(initialRaf);
      timers.forEach(clearTimeout);
      clearTimeout(fallbackTimer);
      if (mutationObserver) {
        mutationObserver.disconnect();
      }
      observer.disconnect();
    };
  }, [location.pathname, location.search]);
}
