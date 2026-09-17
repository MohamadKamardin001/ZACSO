import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '@/data';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const count = heroSlides.length;

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % count);
  }, [count]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, [isPaused, goNext]);

  return (
    <section
      className="hero-slider relative w-full overflow-hidden"
      style={{ height: 'var(--hero-home-height)' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? 'auto' : 'none' }}
        >
          <div className="absolute inset-0">
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
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
      ))}

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container">
          <div className="hero-content max-w-2xl">
            {heroSlides.map((slide, i) => (
              <div
                key={slide.id}
                className="transition-all duration-700"
                style={{
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? 'translateY(0)' : 'translateY(24px)',
                  position: i === current ? 'relative' : 'absolute',
                  top: i === current ? 'auto' : 0,
                  left: i === current ? 'auto' : 0,
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

      {/* Slide counter */}
      <div className="hero-counter hidden md:flex">
        <span className="hero-counter-current">{String(current + 1).padStart(2, '0')}</span>
        <span className="hero-counter-divider" />
        <span className="hero-counter-total">{String(count).padStart(2, '0')}</span>
      </div>

      {/* Controls */}
      <div className="hero-controls hidden md:flex">
        <button onClick={goPrev} aria-label="Previous slide" className="hero-nav-btn">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={goNext} aria-label="Next slide" className="hero-nav-btn">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="hero-dots">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`hero-dot ${i === current ? 'hero-dot-active' : ''}`}
          />
        ))}
      </div>
    </section>
  );
}
