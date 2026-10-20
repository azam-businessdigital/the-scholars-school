import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingWhatsApp from '../components/common/FloatingWhatsApp';
import AIChatbot from '../components/common/AIChatbot';
import useScrollReveal from '../hooks/useScrollReveal';

export default function MainLayout() {
  useScrollReveal();

  return (
    <div className="site-wrapper">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />

      {/* Global Interactive Floating Elements */}
      <FloatingWhatsApp />
      <AIChatbot />
    </div>
  );
}
