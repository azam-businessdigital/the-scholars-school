import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/common/ScrollToTop';

/**
 * Determine the active basename for React Router.
 * Supports:
 * - Build-time configured Vite base (import.meta.env.BASE_URL)
 * - Automatic runtime detection for subfolder hosting (e.g. /the-scholars-school)
 * - Root hosting fallback
 */
function resolveBasename() {
  const envBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  if (envBase && envBase !== '.' && envBase !== '') {
    return envBase;
  }
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname || '';
    if (pathname.startsWith('/the-scholars-school')) {
      return '/the-scholars-school';
    }
  }
  return '';
}

export default function App() {
  const basename = resolveBasename();

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}
