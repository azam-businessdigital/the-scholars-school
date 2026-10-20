import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Route-level code splitting for sub-2-second performance
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Academics = lazy(() => import('../pages/Academics'));
const Admissions = lazy(() => import('../pages/Admissions'));
const Announcements = lazy(() => import('../pages/Announcements'));
const Results = lazy(() => import('../pages/Results'));
const MediaNews = lazy(() => import('../pages/MediaNews'));
const Gallery = lazy(() => import('../pages/Gallery'));
const Careers = lazy(() => import('../pages/Careers'));
const Contact = lazy(() => import('../pages/Contact'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const Terms = lazy(() => import('../pages/Terms'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Academic Detail Pages
const MrakKids = lazy(() => import('../pages/academics/MrakKids'));
const PrePrimary = lazy(() => import('../pages/academics/PrePrimary'));
const Primary = lazy(() => import('../pages/academics/Primary'));
const Secondary = lazy(() => import('../pages/academics/Secondary'));
const Deeniyat = lazy(() => import('../pages/academics/Deeniyat'));
const JuniorCollegeGirls = lazy(() => import('../pages/academics/JuniorCollegeGirls'));
const JuniorCollegeBoys = lazy(() => import('../pages/academics/JuniorCollegeBoys'));

export default function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Main Pages */}
          <Route index element={<Home />} />
          <Route path="about-us" element={<Navigate to="/about-us/" replace />} />
          <Route path="about-us/" element={<About />} />

          <Route path="academics" element={<Navigate to="/academics/" replace />} />
          <Route path="academics/" element={<Academics />} />

          {/* Academic Subpages */}
          <Route path="academics/mrak-kids" element={<Navigate to="/academics/mrak-kids/" replace />} />
          <Route path="academics/mrak-kids/" element={<MrakKids />} />

          <Route path="academics/pre-primary" element={<Navigate to="/academics/pre-primary/" replace />} />
          <Route path="academics/pre-primary/" element={<PrePrimary />} />

          <Route path="academics/primary" element={<Navigate to="/academics/primary/" replace />} />
          <Route path="academics/primary/" element={<Primary />} />

          <Route path="academics/secondary" element={<Navigate to="/academics/secondary/" replace />} />
          <Route path="academics/secondary/" element={<Secondary />} />

          <Route path="academics/deeniyat" element={<Navigate to="/academics/deeniyat/" replace />} />
          <Route path="academics/deeniyat/" element={<Deeniyat />} />

          <Route path="academics/junior-college/girls" element={<Navigate to="/academics/junior-college/girls/" replace />} />
          <Route path="academics/junior-college/girls/" element={<JuniorCollegeGirls />} />

          <Route path="academics/junior-college/boys" element={<Navigate to="/academics/junior-college/boys/" replace />} />
          <Route path="academics/junior-college/boys/" element={<JuniorCollegeBoys />} />

          {/* Institutional Pages */}
          <Route path="admissions" element={<Navigate to="/admissions/" replace />} />
          <Route path="admissions/" element={<Admissions />} />

          <Route path="announcements" element={<Navigate to="/announcements/" replace />} />
          <Route path="announcements/" element={<Announcements />} />

          <Route path="results" element={<Navigate to="/results/" replace />} />
          <Route path="results/" element={<Results />} />

          <Route path="media-news" element={<Navigate to="/media-news/" replace />} />
          <Route path="media-news/" element={<MediaNews />} />
          <Route path="news-media" element={<Navigate to="/media-news/" replace />} />
          <Route path="news-media/" element={<MediaNews />} />
          <Route path="news" element={<Navigate to="/media-news/" replace />} />
          <Route path="news/" element={<Navigate to="/media-news/" replace />} />
          <Route path="media" element={<Navigate to="/media-news/" replace />} />
          <Route path="media/" element={<Navigate to="/media-news/" replace />} />
          <Route path="events" element={<Navigate to="/media-news/" replace />} />
          <Route path="events/" element={<Navigate to="/media-news/" replace />} />

          <Route path="gallery" element={<Navigate to="/gallery/" replace />} />
          <Route path="gallery/" element={<Gallery />} />

          <Route path="careers" element={<Navigate to="/careers/" replace />} />
          <Route path="careers/" element={<Careers />} />

          <Route path="contact-us" element={<Navigate to="/contact-us/" replace />} />
          <Route path="contact-us/" element={<Contact />} />

          <Route path="privacy-policy" element={<Navigate to="/privacy-policy/" replace />} />
          <Route path="privacy-policy/" element={<PrivacyPolicy />} />

          <Route path="terms-of-use" element={<Navigate to="/terms-of-use/" replace />} />
          <Route path="terms-of-use/" element={<Terms />} />

          {/* Legacy PHP Website Redirects */}
          <Route path="index.php" element={<Navigate to="/" replace />} />
          <Route path="about-us.php" element={<Navigate to="/about-us/" replace />} />
          <Route path="pre-school-section.php" element={<Navigate to="/academics/mrak-kids/" replace />} />
          <Route path="preschool.php" element={<Navigate to="/academics/mrak-kids/" replace />} />
          <Route path="pre-primary-section.php" element={<Navigate to="/academics/pre-primary/" replace />} />
          <Route path="primary-section.php" element={<Navigate to="/academics/primary/" replace />} />
          <Route path="secondary-section.php" element={<Navigate to="/academics/secondary/" replace />} />
          <Route path="deeniyat.php" element={<Navigate to="/academics/deeniyat/" replace />} />
          <Route path="college-girls.php" element={<Navigate to="/academics/junior-college/girls/" replace />} />
          <Route path="college-boys.php" element={<Navigate to="/academics/junior-college/boys/" replace />} />
          <Route path="gallery.php" element={<Navigate to="/gallery/" replace />} />
          <Route path="media-news.php" element={<Navigate to="/media-news/" replace />} />
          <Route path="career.php" element={<Navigate to="/careers/" replace />} />
          <Route path="contact-us.php" element={<Navigate to="/contact-us/" replace />} />

          {/* Custom 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
