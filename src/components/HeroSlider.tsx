import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { heroSlides } from '@/data';

const SLIDE_DURATION = 6500;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const count = heroSlides.length;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const goTo = useCallback(
    (index: number, dir: number) => {
      if (index === current || isTransitioning) return;
      setDirection(dir);
      setIsTransitioning(true);
      setCurrent(index);
      setProgress(0);
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
      transitionTimer.current = setTimeout(() => setIsTransitioning(false), 900);
    },
    [current, isTransitioning],
  );

  const goNext = useCallback(() => {
    goTo((current + 1) % count, 1);
  }, [current, count, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + count) % count, -1);
  }, [current, count, goTo]);

  // Auto-advance with progress tracking
  useEffect(() => {
    if (isPaused || isTransitioning) return;
    const startTime = Date.now();
    const remaining = SLIDE_DURATION - (progress / 100) * SLIDE_DURATION;

    const progressTimer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, ((elapsed + (progress / 100) * SLIDE_DURATION) / SLIDE_DURATION) * 100);
      setProgress(pct);
    }, 50);

    const advanceTimer = setTimeout(() => {
      setProgress(0);
      goNext();
    }, remaining);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(advanceTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, isTransitioning, current]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goPrev, goNext]);

  // Touch / swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section
      className="hero-slider relative w-full overflow-hidden"
      style={{ height: 'var(--hero-home-height)' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides with directional slide + fade transition */}
      {heroSlides.map((slide, i) => {
        const isActive = i === current;
        let transform = '';
        if (isActive) {
          transform = 'translateX(0) scale(1.05)';
        } else if (i === (current - 1 + count) % count) {
          transform = `translateX(${-100 * direction}%) scale(1)`;
        } else if (i === (current + 1) % count) {
          transform = `translateX(${100 * direction}%) scale(1)`;
        } else {
          transform = `translateX(${100 * direction}%) scale(1)`;
        }

        return (
          <div
            key={slide.id}
            className="hero-slide"
            style={{
              transform,
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 2 : 1,
              pointerEvents: isActive ? 'auto' : 'none',
            }}
          >
            <div className="hero-slide-image-wrap">
              <img
                src={slide.image}
                alt={slide.title}
                className={`hero-slide-image ${isActive ? 'ken-burns' : ''}`}
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, rgba(13,71,57,0.82) 0%, rgba(13,71,57,0.55) 45%, rgba(13,71,57,0.15) 100%)',
              }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-40"
              style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(13,71,57,0.5) 100%)' }}
            />
          </div>
        );
      })}

      {/* Content */}
      <div className="relative h-full flex items-center" style={{ zIndex: 5 }}>
        <div className="container">
          <div className="hero-content max-w-2xl">
            {heroSlides.map((slide, i) => (
              <div
                key={slide.id}
                className={`hero-text-slide ${i === current ? 'hero-text-active' : ''}`}
                style={{
                  pointerEvents: i === current ? 'auto' : 'none',
                }}
              >
                <div className="hero-eyebrow-wrap">
                  <span className="hero-eyebrow-line" />
                  <p className="hero-eyebrow">{slide.eyebrow}</p>
                </div>

                <h1 className="hero-title">{slide.title}</h1>

                <p className="hero-description">{slide.description}</p>

                <div className="hero-actions">
                  <Link to={slide.ctaLink} className="btn btn-accent hero-cta">
                    {slide.ctaLabel} <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/about-2" className="btn btn-outline hero-cta-secondary">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="hero-progress-bar" style={{ opacity: isPaused ? 0 : 1 }}>
        <div className="hero-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Slide counter */}
      <div className="hero-counter hidden md:flex">
        <span className="hero-counter-current">{String(current + 1).padStart(2, '0')}</span>
        <span className="hero-counter-divider" />
        <span className="hero-counter-total">{String(count).padStart(2, '0')}</span>
      </div>

      {/* Controls */}
      <div className="hero-controls hidden md:flex">
        <button
          onClick={() => setIsPaused((p) => !p)}
          aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
          className="hero-nav-btn hero-play-btn"
        >
          {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
        </button>
        <button onClick={goPrev} aria-label="Previous slide" className="hero-nav-btn">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={goNext} aria-label="Next slide" className="hero-nav-btn">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots with progress indicator */}
      <div className="hero-dots">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            aria-label={`Go to slide ${i + 1}`}
            className={`hero-dot ${i === current ? 'hero-dot-active' : ''}`}
          >
            {i === current && !isPaused && (
              <span
                className="hero-dot-progress"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
