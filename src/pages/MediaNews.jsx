import React, { useState } from 'react';
import { Calendar, Play, Maximize2, ExternalLink, X, Video, Newspaper, ArrowUpRight } from 'lucide-react';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { electronicMediaData, printMediaData, allMediaNewsData } from '../data/mediaNewsData';

export default function MediaNews() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'electronic' | 'print'
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedPrint, setSelectedPrint] = useState(null);

  const displayedItems =
    activeTab === 'electronic'
      ? electronicMediaData
      : activeTab === 'print'
      ? printMediaData
      : allMediaNewsData;

  const handleOpenVideo = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  const handleOpenPrint = (printItem) => {
    setSelectedPrint(printItem);
  };

  const handleClosePrint = () => {
    setSelectedPrint(null);
  };

  return (
    <>
      <SEO
        title="News & Media | The Scholars High School and Junior College"
        description="Official electronic media YouTube broadcasts and regional newspaper print media clippings highlighting The Scholars High School, Jogeshwari West."
        canonical="https://thescholarsschool.edu.in/media-news/"
      />

      {/* Page Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">BROADCAST &amp; PRESS ARCHIVE</span>
          <h1>News &amp; Media</h1>
          <p>
            Watch authentic electronic media coverage on YouTube and explore regional newspaper press clippings featuring our students, faculty, and campus milestones.
          </p>
        </div>
      </div>

      <Breadcrumbs items={[{ label: 'News & Media', path: '/media-news/' }]} />

      <section className="section section-white">
        <div className="container">
          {/* Section Header */}
          <div className="section-header reveal-up" style={{ marginBottom: 'var(--space-8)' }}>
            <span className="eyebrow">BROADCAST &amp; PRESS COVERAGE</span>
            <h2 className="section-title">Official Media Features &amp; Publications</h2>
            <p className="section-subtitle">
              Explore national electronic television features, academic excellence reports, and prominent Urdu &amp; English press clippings celebrating our campus milestones.
            </p>
          </div>

          {/* Category Switcher Tabs */}
          <div className="filter-bar reveal-up" role="tablist" aria-label="News and media category filter" style={{ marginBottom: 'var(--space-10)' }}>
            <button
              type="button"
              className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
              role="tab"
              aria-selected={activeTab === 'all'}
            >
              All Coverage ({allMediaNewsData.length})
            </button>
            <button
              type="button"
              className={`filter-btn ${activeTab === 'electronic' ? 'active' : ''}`}
              onClick={() => setActiveTab('electronic')}
              role="tab"
              aria-selected={activeTab === 'electronic'}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Video size={14} />
              <span>Electronic Media ({electronicMediaData.length})</span>
            </button>
            <button
              type="button"
              className={`filter-btn ${activeTab === 'print' ? 'active' : ''}`}
              onClick={() => setActiveTab('print')}
              role="tab"
              aria-selected={activeTab === 'print'}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Newspaper size={14} />
              <span>Print Media ({printMediaData.length})</span>
            </button>
          </div>

          {/* Media Items Grid */}
          <div className="media-news-grid stagger-group reveal-up">
            {displayedItems.map((item) => (
              <article
                key={item.id}
                className="card media-card reveal-up"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  if (item.type === 'electronic') {
                    handleOpenVideo(item);
                  } else {
                    handleOpenPrint(item);
                  }
                }}
              >
                {/* Media Preview Box */}
                <div
                  className="card-media img-sheen-wrap"
                  style={{
                    height: '210px',
                    position: 'relative',
                    overflow: 'hidden',
                    background: '#0B192C'
                  }}
                >
                  <img
                    src={item.type === 'electronic' ? item.thumbnail : item.image}
                    alt={item.title}
                    loading="lazy"
                    width="400"
                    height="210"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />

                  {/* Type Badge */}
                  {item.type === 'electronic' ? (
                    <span className="media-type-badge-electronic">
                      <Play size={10} fill="#fff" />
                      <span>YouTube</span>
                    </span>
                  ) : (
                    <span className="media-type-badge-print">
                      <Newspaper size={11} />
                      <span>Press Clipping</span>
                    </span>
                  )}

                  {/* Overlay with Action Cue */}
                  <div className="media-play-overlay">
                    {item.type === 'electronic' ? (
                      <div className="media-play-icon-wrap" title="Play Video">
                        <Play size={22} fill="#fff" style={{ marginLeft: '3px' }} />
                      </div>
                    ) : (
                      <div className="media-zoom-icon-wrap" title="View Full Newspaper Clipping">
                        <Maximize2 size={18} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-body" style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'var(--color-slate-grey)' }}>
                      <Calendar size={13} />
                      <span>{item.date}</span>
                    </div>

                    <span style={{ fontSize: '11.5px', fontWeight: 600, color: 'var(--color-champagne-gold)' }}>
                      {item.type === 'electronic' ? item.source : item.publication}
                    </span>
                  </div>

                  <h3 className="card-title" style={{ marginBottom: '10px', fontSize: '1.25rem', lineHeight: 1.35 }}>
                    {item.title}
                  </h3>

                  <p className="card-text" style={{ marginBottom: '16px', flexGrow: 1 }}>
                    {item.description}
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid rgba(20, 43, 74, 0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13px',
                        fontWeight: 700,
                        color: item.type === 'electronic' ? '#DC2626' : 'var(--color-royal-navy)'
                      }}
                    >
                      {item.type === 'electronic' ? (
                        <>
                          <Play size={14} fill="#DC2626" />
                          <span>Watch YouTube Video</span>
                        </>
                      ) : (
                        <>
                          <Maximize2 size={14} />
                          <span>View Full Article</span>
                        </>
                      )}
                    </span>

                    {item.type === 'electronic' && (
                      <a
                        href={item.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '11.5px',
                          color: 'var(--color-slate-grey)',
                          textDecoration: 'none'
                        }}
                        title="Open on YouTube website"
                      >
                        <span>YouTube</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video Lightbox Modal */}
      {selectedVideo && (
        <div
          className="media-modal-backdrop"
          onClick={handleCloseVideo}
          role="dialog"
          aria-modal="true"
          aria-label={selectedVideo.title}
        >
          <div className="media-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="media-modal-close-btn"
              onClick={handleCloseVideo}
              aria-label="Close video modal"
            >
              <X size={20} />
            </button>

            <div className="media-modal-video-wrap">
              <iframe
                src={selectedVideo.embedUrl}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="media-modal-body">
              <div className="media-modal-body-content">
                <span style={{ fontSize: '11px', color: 'var(--color-champagne-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {selectedVideo.source} &bull; {selectedVideo.date}
                </span>
                <h3>{selectedVideo.title}</h3>
                <p>{selectedVideo.description}</p>
              </div>

              <div className="media-modal-actions">
                <a
                  href={selectedVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-sm"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink size={14} />
                </a>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={handleCloseVideo}
                  style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff', padding: '6px 12px' }}
                  aria-label="Close modal"
                >
                  <X size={14} />
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Print Clipping Lightbox Modal */}
      {selectedPrint && (
        <div
          className="media-modal-backdrop"
          onClick={handleClosePrint}
          role="dialog"
          aria-modal="true"
          aria-label={selectedPrint.title}
        >
          <div className="print-modal-box" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid var(--color-border-subtle)' }}>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--color-champagne-gold)', fontWeight: 700, textTransform: 'uppercase' }}>
                  {selectedPrint.publication} &bull; {selectedPrint.date}
                </span>
                <h3 style={{ fontSize: '1.125rem', color: 'var(--color-royal-navy)', margin: '2px 0 0 0' }}>
                  {selectedPrint.title}
                </h3>
              </div>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={handleClosePrint}
                aria-label="Close clipping modal"
                style={{ padding: '6px 12px' }}
              >
                <X size={16} />
                <span>Close</span>
              </button>
            </div>

            <div className="print-modal-img-wrap">
              <img
                src={selectedPrint.image}
                alt={selectedPrint.title}
                className="print-modal-img"
              />
            </div>

            <div className="print-modal-info">
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-slate-grey-dark)', margin: 0, lineHeight: 1.6 }}>
                {selectedPrint.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
