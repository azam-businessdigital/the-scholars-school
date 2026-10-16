import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, FolderOpen, Maximize2 } from 'lucide-react';

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext, onSelectIndex }) {
  const current = images[currentIndex];
  const thumbListRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbListRef.current) {
      const activeThumb = thumbListRef.current.children[currentIndex];
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentIndex]);

  if (!current) return null;

  return (
    <div
      className="pinterest-lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      {/* Top Header Bar */}
      <div className="pinterest-lightbox-top" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-album-tag">
          <FolderOpen size={15} />
          <span>{current.albumTitle || current.category || 'Photo Gallery'}</span>
        </div>

        <div className="lightbox-counter">
          Photo {currentIndex + 1} of {images.length}
        </div>

        <button
          type="button"
          className="pinterest-lightbox-close"
          onClick={onClose}
          aria-label="Close Lightbox"
        >
          <X size={22} />
        </button>
      </div>

      {/* Main Center Area */}
      <div className="pinterest-lightbox-main" onClick={(e) => e.stopPropagation()}>
        {images.length > 1 && (
          <button
            type="button"
            className="pinterest-lightbox-nav prev"
            onClick={onPrev}
            aria-label="Previous Image"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        <div className="pinterest-lightbox-img-box">
          <img
            src={current.src}
            alt={current.alt || current.title}
            className="pinterest-lightbox-img"
          />
        </div>

        {images.length > 1 && (
          <button
            type="button"
            className="pinterest-lightbox-nav next"
            onClick={onNext}
            aria-label="Next Image"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </div>

      {/* Bottom Info Bar with Captions & Thumbnails */}
      <div className="pinterest-lightbox-bottom" onClick={(e) => e.stopPropagation()}>
        <div className="pinterest-lightbox-info">
          <h3 className="pinterest-lightbox-title">{current.title}</h3>
          {current.caption && (
            <p className="pinterest-lightbox-caption">{current.caption}</p>
          )}
        </div>

        {/* Thumbnail Filmstrip */}
        {images.length > 1 && (
          <div className="pinterest-lightbox-thumbs" ref={thumbListRef}>
            {images.map((img, idx) => (
              <button
                key={img.id || idx}
                type="button"
                className={`lightbox-thumb-btn ${idx === currentIndex ? 'is-active' : ''}`}
                onClick={() => onSelectIndex && onSelectIndex(idx)}
                aria-label={`Jump to photo ${idx + 1}`}
              >
                <img src={img.src} alt={img.title || `Thumbnail ${idx + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
