import { useLayoutEffect, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Universally ensures that whenever a user navigates to any new page or route,
 * the viewport instantaneously starts at the very top (0, 0) of the page
 * without any smooth-scroll or visible upward scrolling motion.
 */
export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  // Set browser scrollRestoration to manual to prevent the browser from
  // remembering and snapping to previous scroll offsets on SPA navigations.
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Synchronous scroll reset before the browser paints the new view
  useLayoutEffect(() => {
    if (!hash) {
      // Instantaneously jump to top (0, 0)
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      const main = document.getElementById('main-content');
      if (main) {
        main.scrollTop = 0;
      }
    } else {
      // In case an anchor hash was targeted (e.g. #admission-form)
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, search, hash]);

  // Secondary verification with requestAnimationFrame to guarantee that
  // lazy-loaded React Suspense route chunks start at top (0, 0) when mounted
  useEffect(() => {
    if (!hash) {
      const raf = requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [pathname, search, hash]);

  return null;
}
