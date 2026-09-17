import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '@/data';
import type { HeroSlide } from '@/types';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const count = heroSlides.length;

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(((index % count) + count) % count);
  }, [count]);

  const goNext = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % count);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, count]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="hero-showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Background wash */}
      <div className="hero-showcase-bg" />

      {/* Preview edges — previous and next slide thumbnails */}
      {count > 2 && (
        <>
          <div
            className="hero-preview hero-preview-left"
            onClick={goPrev}
            aria-hidden
          >
            <img
              src={heroSlides[(current - 1 + count) % count].image}
              alt=""
              className="hero-preview-img"
            />
          </div>
          <div
            className="hero-preview hero-preview-right"
            onClick={goNext}
            aria-hidden
          >
            <img
              src={heroSlides[(current + 1) % count].image}
              alt=""
              className="hero-preview-img"
            />
          </div>
        </>
      )}

      {/* Active slide */}
      <div className="hero-slide-active">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.id}
            className="hero-slide-panel"
            aria-hidden={i !== current}
            style={{
              opacity: i === current ? 1 : 0,
              pointerEvents: i === current ? 'auto' : 'none',
              transform: i === current
                ? 'translateX(0) scale(1)'
                : direction > 0
                  ? 'translateX(60px) scale(0.96)'
                  : 'translateX(-60px) scale(0.96)',
            }}
          >
            <HeroSlideContent slide={slide} active={i === current} onNext={goNext} />
          </div>
        ))}
      </div>

      {/* Bottom controls */}
      <div className="hero-showcase-controls">
        <div className="hero-showcase-numbers">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className={`hero-showcase-number ${i === current ? 'is-active' : ''}`}
            >
              <span className="hero-showcase-number-text">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="hero-showcase-number-label">{slide.eyebrow.split('•')[1]?.trim() || slide.eyebrow}</span>
            </button>
          ))}
        </div>

        <div className="hero-showcase-arrows">
          <button onClick={goPrev} aria-label="Previous slide" className="hero-showcase-arrow">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={goNext} aria-label="Next slide" className="hero-showcase-arrow">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function HeroSlideContent({ slide, active, onNext }: { slide: HeroSlide; active: boolean; onNext: () => void }) {
  return (
    <div className="hero-slide-inner">
      {/* Left column — content */}
      <div className={`hero-slide-left ${active ? 'is-revealed' : ''}`}>
        <div className="hero-slide-eyebrow">
          <span className="hero-slide-eyebrow-dot" />
          {slide.eyebrow}
        </div>

        <h1 className="hero-slide-title">{slide.title}</h1>

        <p className="hero-slide-desc">{slide.description}</p>

        <div className="hero-slide-stats">
          {slide.stats.map((stat, i) => (
            <div className="hero-slide-stat" key={i}>
              <span className="hero-slide-stat-value">{stat.value}</span>
              <span className="hero-slide-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-slide-actions">
          <Link to={slide.ctaLink} className="hero-slide-cta-primary">
            {slide.ctaLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/about-2" className="hero-slide-cta-secondary">
            Learn More
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Right column — photo with pulsing rings */}
      <div className={`hero-slide-right ${active ? 'is-revealed' : ''}`}>
        <div className="hero-rings">
          <span className="hero-ring hero-ring-1" />
          <span className="hero-ring hero-ring-2" />
          <span className="hero-ring hero-ring-3" />
        </div>
        <div className="hero-photo-wrap">
          <img src={slide.image} alt={slide.title} className="hero-photo" />
        </div>
        {/* Floating circular arrow on photo */}
        <button
          className="hero-photo-arrow"
          aria-label="Next slide"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
