import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Layers,
  Grid,
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  MapPin,
  Image as ImageIcon,
  Maximize2,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SectionHeader from '../components/common/SectionHeader';
import Lightbox from '../components/gallery/Lightbox';
import { albumsData, galleryData } from '../data/galleryData';

function PaginationControls({ currentPage, totalPages, onPageChange, totalItems, itemsPerPage, itemLabel }) {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const maxButtons = 5;

    if (totalPages <= maxButtons + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      let leftBound = Math.max(2, currentPage - 1);
      let rightBound = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 3) {
        rightBound = 4;
      }
      if (currentPage >= totalPages - 2) {
        leftBound = totalPages - 3;
      }

      if (leftBound > 2) pages.push('...');
      for (let i = leftBound; i <= rightBound; i++) pages.push(i);
      if (rightBound < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  const handlePageSelect = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
    const target = document.getElementById('gallery-content-top');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="gallery-pagination">
      <div className="gallery-pagination-info">
        Showing {startItem} to {endItem} of {totalItems} {itemLabel}
      </div>
      <div className="gallery-pagination-controls">
        <button
          type="button"
          className="gallery-page-btn"
          disabled={currentPage === 1}
          onClick={() => handlePageSelect(currentPage - 1)}
          aria-label="Previous page"
        >
          <ChevronLeft size={16} />
          <span>Prev</span>
        </button>

        {getPageNumbers().map((p, idx) =>
          p === '...' ? (
            <span key={`ellipsis-${idx}`} className="gallery-page-ellipsis">...</span>
          ) : (
            <button
              key={p}
              type="button"
              className={`gallery-page-btn ${currentPage === p ? 'active' : ''}`}
              onClick={() => handlePageSelect(p)}
              aria-label={`Page ${p}`}
              aria-current={currentPage === p ? 'page' : undefined}
            >
              {p}
            </button>
          )
        )}

        <button
          type="button"
          className="gallery-page-btn"
          disabled={currentPage === totalPages}
          onClick={() => handlePageSelect(currentPage + 1)}
          aria-label="Next page"
        >
          <span>Next</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const albumFromUrl = searchParams.get('album');
  const [selectedAlbumId, setSelectedAlbumId] = useState(albumFromUrl || null);
  const [viewMode, setViewMode] = useState('albums'); // 'albums' | 'masonry'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Pagination states
  const ALBUMS_PER_PAGE = 12;
  const PHOTOS_PER_PAGE = 25;
  const [albumPage, setAlbumPage] = useState(1);
  const [photoPage, setPhotoPage] = useState(1);

  useEffect(() => {
    const urlAlbum = searchParams.get('album');
    if (urlAlbum) {
      setSelectedAlbumId(urlAlbum);
      window.scrollTo({ top: 320, behavior: 'smooth' });
    } else {
      setSelectedAlbumId(null);
    }
  }, [searchParams]);

  // Categories across albums
  const categories = useMemo(() => {
    return ['All', 'School Activities', 'College Activities', 'Campus Facilities'];
  }, []);

  // Filtered albums based on category and search query
  const filteredAlbums = useMemo(() => {
    let result = albumsData;
    if (selectedCategory !== 'All') {
      result = result.filter((a) => a.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          (a.description && a.description.toLowerCase().includes(q))
      );
    }
    return result;
  }, [selectedCategory, searchQuery]);

  // Active album if selected
  const activeAlbum = useMemo(() => {
    if (!selectedAlbumId) return null;
    return albumsData.find((a) => a.id === selectedAlbumId) || null;
  }, [selectedAlbumId]);

  // Filtered photos for "All Photos" masonry mode
  const filteredPhotos = useMemo(() => {
    let result = galleryData;
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.albumTitle.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [selectedCategory, searchQuery]);

  // Paginated albums for current page
  const totalAlbumPages = Math.ceil(filteredAlbums.length / ALBUMS_PER_PAGE) || 1;
  const paginatedAlbums = useMemo(() => {
    const start = (albumPage - 1) * ALBUMS_PER_PAGE;
    return filteredAlbums.slice(start, start + ALBUMS_PER_PAGE);
  }, [filteredAlbums, albumPage]);

  // Paginated photos for current page in masonry feed
  const totalPhotoPages = Math.ceil(filteredPhotos.length / PHOTOS_PER_PAGE) || 1;
  const paginatedPhotos = useMemo(() => {
    const start = (photoPage - 1) * PHOTOS_PER_PAGE;
    return filteredPhotos.slice(start, start + PHOTOS_PER_PAGE);
  }, [filteredPhotos, photoPage]);

  // Active photos list for lightbox
  const currentPhotos = useMemo(() => {
    if (activeAlbum) {
      return activeAlbum.photos.map((p) => ({
        ...p,
        albumTitle: activeAlbum.title,
        albumId: activeAlbum.id,
        category: activeAlbum.category,
        eventDate: activeAlbum.eventDate
      }));
    }
    return paginatedPhotos;
  }, [activeAlbum, paginatedPhotos]);

  // Lightbox handlers
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevLightbox = () =>
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : currentPhotos.length - 1));
  const nextLightbox = () =>
    setLightboxIndex((prev) => (prev < currentPhotos.length - 1 ? prev + 1 : 0));

  const handleSelectAlbum = (albumId) => {
    setSelectedAlbumId(albumId);
    setSearchParams({ album: albumId });
    window.scrollTo({ top: 320, behavior: 'smooth' });
  };

  const handleBackToAlbums = () => {
    setSelectedAlbumId(null);
    setSearchParams({});
    window.scrollTo({ top: 320, behavior: 'smooth' });
  };

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setAlbumPage(1);
    setPhotoPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setAlbumPage(1);
    setPhotoPage(1);
  };

  return (
    <>
      <SEO
        title="Photo Gallery - Authentic Event Albums & Photo Archive | The Scholars School"
        description="Explore the complete visual archive of The Scholars High School & Junior College: 79 event albums and 349 authentic photographs covering campus activities, competitions, sports, and modern facilities."
        canonical="https://thescholarsschool.edu.in/gallery/"
      />

      {/* Page Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">AUTHENTIC VISUAL ARCHIVE</span>
          <h1>Event Albums &amp; Photo Gallery</h1>
          <p>
            Explore our complete archive of 79 event albums and 349 authentic photographs documenting student life, academic activities, annual celebrations, and campus infrastructure.
          </p>
        </div>
      </div>

      <Breadcrumbs items={[{ label: 'Gallery', path: '/gallery/' }]} />

      <section className="section section-white" id="gallery-content-top">
        <div className="container">
          {/* Top Control Bar: Mode Switcher, Search, and Category Pills */}
          <div className="gallery-control-bar reveal-up">
            {/* View Mode Switcher */}
            <div className="gallery-view-toggle" role="group" aria-label="Gallery view mode">
              <button
                type="button"
                className={`view-toggle-btn ${!selectedAlbumId && viewMode === 'albums' ? 'is-active' : ''}`}
                onClick={() => {
                  setSelectedAlbumId(null);
                  setSearchParams({});
                  setViewMode('albums');
                }}
              >
                <Layers size={16} />
                <span>Event Albums ({albumsData.length})</span>
              </button>
              <button
                type="button"
                className={`view-toggle-btn ${viewMode === 'masonry' && !selectedAlbumId ? 'is-active' : ''}`}
                onClick={() => {
                  setSelectedAlbumId(null);
                  setSearchParams({});
                  setViewMode('masonry');
                }}
              >
                <Grid size={16} />
                <span>All Photos Feed ({galleryData.length})</span>
              </button>
            </div>

            {/* Search Box */}
            {!selectedAlbumId && (
              <div className="gallery-search-wrap">
                <Search size={15} className="gallery-search-icon" />
                <input
                  type="text"
                  className="gallery-search-input"
                  placeholder="Search albums &amp; activities..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  aria-label="Search albums"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="gallery-search-clear"
                    onClick={() => {
                      setSearchQuery('');
                      setAlbumPage(1);
                      setPhotoPage(1);
                    }}
                    aria-label="Clear search"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            )}

            {/* Category Filter Pills (When browsing all albums or all photos) */}
            {!selectedAlbumId && (
              <div className="gallery-category-pills" role="tablist" aria-label="Event category filters">
                {categories.map((cat) => {
                  const count =
                    cat === 'All'
                      ? albumsData.length
                      : albumsData.filter((a) => a.category === cat).length;

                  return (
                    <button
                      key={cat}
                      type="button"
                      className={`gallery-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                      onClick={() => handleCategorySelect(cat)}
                      role="tab"
                      aria-selected={selectedCategory === cat}
                    >
                      {cat} ({count})
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* VIEW A: SPECIFIC EVENT ALBUM (PINTEREST MASONRY) */}
          {activeAlbum ? (
            <div className="single-album-view">
              {/* Back Navigation Bar */}
              <div className="album-nav-header">
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={handleBackToAlbums}
                  aria-label="Back to all albums"
                >
                  <ArrowLeft size={15} />
                  <span>Back to All Albums</span>
                </button>

                <div className="album-meta-pills">
                  <span className="album-meta-pill">
                    <Calendar size={13} />
                    <span>{activeAlbum.eventDate}</span>
                  </span>
                  <span className="album-meta-pill">
                    <MapPin size={13} />
                    <span>{activeAlbum.location}</span>
                  </span>
                  <span className="album-meta-pill gold">
                    <ImageIcon size={13} />
                    <span>{activeAlbum.photos.length} Photographs</span>
                  </span>
                </div>
              </div>

              {/* Album Hero Showcase Card */}
              <div className="album-hero-banner">
                <div>
                  <span className="album-category-badge">{activeAlbum.category}</span>
                  <h2 className="album-hero-title">{activeAlbum.title}</h2>
                  <p className="album-hero-desc">{activeAlbum.description}</p>
                </div>
              </div>

              {/* Masonry Layout for Album Photos */}
              <div className="pinterest-masonry-wrapper">
                <div className="pinterest-masonry stagger-group reveal-up">
                  {currentPhotos.map((photo, index) => (
                    <div
                      key={photo.id || index}
                      className="pinterest-pin reveal-up"
                      onClick={() => openLightbox(index)}
                      role="button"
                      tabIndex="0"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          openLightbox(index);
                        }
                      }}
                      aria-label={`View photo: ${photo.title || 'Gallery photograph'}`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt || photo.title || 'School photograph'}
                        loading="lazy"
                        className="pinterest-pin-img"
                      />
                      <div className="pinterest-zoom-indicator">
                        <Maximize2 size={16} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : viewMode === 'albums' ? (
            /* VIEW B: ALL EVENT ALBUMS WITH PAGINATION */
            <div className="albums-showcase-view">
              {filteredAlbums.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--color-slate-grey)' }}>
                  <ImageIcon size={48} style={{ opacity: 0.3, marginBottom: '16px' }} />
                  <h3>No albums found</h3>
                  <p>Try adjusting your category filter or search query.</p>
                </div>
              ) : (
                <>
                  <div className="albums-grid stagger-group reveal-up">
                    {paginatedAlbums.map((album) => (
                      <article
                        key={album.id}
                        className="album-card reveal-up"
                        onClick={() => handleSelectAlbum(album.id)}
                        role="button"
                        tabIndex="0"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleSelectAlbum(album.id);
                          }
                        }}
                        aria-label={`Open event album: ${album.title}`}
                      >
                        {/* Album Cover with Layered Stack Visual */}
                        <div className="album-card-cover-wrap">
                          <img
                            src={album.coverImage}
                            alt={album.title}
                            loading="lazy"
                            className="album-card-cover-img"
                          />
                          <div className="album-card-overlay" />

                          {/* Photo Count Badge */}
                          <div className="album-photo-count-badge">
                            <ImageIcon size={14} />
                            <span>{album.photos.length} Photos</span>
                          </div>

                          {/* Category Badge */}
                          <span className="album-cover-category">
                            {album.category}
                          </span>
                        </div>

                        {/* Album Content */}
                        <div className="album-card-body">
                          <div className="album-card-meta">
                            <span className="album-date-item">
                              <Calendar size={13} />
                              <span>{album.eventDate}</span>
                            </span>
                            <span className="album-location-item">
                              <MapPin size={13} />
                              <span>{album.location}</span>
                            </span>
                          </div>

                          <h3 className="album-card-title">{album.title}</h3>
                          <p className="album-card-desc">{album.description}</p>

                          <div className="album-card-footer">
                            <span className="album-open-link">
                              <span>View Album Photos</span>
                              <ArrowUpRight size={15} />
                            </span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  {/* Album Pagination Controls */}
                  <PaginationControls
                    currentPage={albumPage}
                    totalPages={totalAlbumPages}
                    onPageChange={setAlbumPage}
                    totalItems={filteredAlbums.length}
                    itemsPerPage={ALBUMS_PER_PAGE}
                    itemLabel="albums"
                  />
                </>
              )}
            </div>
          ) : (
            /* VIEW C: ALL PHOTOS CONTINUOUS MASONRY FEED WITH PAGINATION */
            <div className="all-photos-masonry-view">
              {filteredPhotos.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--color-slate-grey)' }}>
                  <ImageIcon size={48} style={{ opacity: 0.3, marginBottom: '16px' }} />
                  <h3>No photographs found</h3>
                  <p>Try adjusting your category filter or search query.</p>
                </div>
              ) : (
                <>
                  <div className="pinterest-masonry-wrapper">
                    <div className="pinterest-masonry stagger-group reveal-up">
                      {paginatedPhotos.map((photo, index) => (
                        <div
                          key={photo.id || index}
                          className="pinterest-pin reveal-up"
                          onClick={() => openLightbox(index)}
                          role="button"
                          tabIndex="0"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              openLightbox(index);
                            }
                          }}
                          aria-label={`View photo: ${photo.title || 'Gallery photograph'}`}
                        >
                          <img
                            src={photo.src}
                            alt={photo.alt || photo.title || 'School photograph'}
                            loading="lazy"
                            className="pinterest-pin-img"
                          />
                          <div className="pinterest-zoom-indicator">
                            <Maximize2 size={16} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Photo Pagination Controls */}
                  <PaginationControls
                    currentPage={photoPage}
                    totalPages={totalPhotoPages}
                    onPageChange={setPhotoPage}
                    totalItems={filteredPhotos.length}
                    itemsPerPage={PHOTOS_PER_PAGE}
                    itemLabel="photographs"
                  />
                </>
              )}
            </div>
          )}

          {/* Lightbox Modal with Filmstrip */}
          {lightboxIndex !== null && (
            <Lightbox
              images={currentPhotos}
              currentIndex={lightboxIndex}
              onClose={closeLightbox}
              onPrev={prevLightbox}
              onNext={nextLightbox}
              onSelectIndex={(idx) => setLightboxIndex(idx)}
            />
          )}
        </div>
      </section>
    </>
  );
}
