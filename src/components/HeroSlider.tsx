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
      className="relative w-full overflow-hidden"
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
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(13,71,57,0.78) 0%, rgba(13,71,57,0.45) 55%, rgba(13,71,57,0.2) 100%)' }} />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container">
          <div className="max-w-2xl">
            {heroSlides.map((slide, i) => (
              <div
                key={slide.id}
                className="transition-all duration-700"
                style={{
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? 'translateY(0)' : 'translateY(20px)',
                  position: i === current ? 'relative' : 'absolute',
                  top: i === current ? 'auto' : 0,
                  left: i === current ? 'auto' : 0,
                  pointerEvents: i === current ? 'auto' : 'none',
                }}
              >
                <p className="eyebrow text-[#d8e93b] mb-4">{slide.eyebrow}</p>
                <h1 className="text-white font-extrabold mb-6" style={{ fontSize: 'var(--text-display)', lineHeight: 1.02 }}>
                  {slide.title}
                </h1>
                <p className="text-white/85 text-lg lg:text-xl mb-8 max-w-xl leading-relaxed">{slide.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Link to={slide.ctaLink} className="btn btn-accent">
                    {slide.ctaLabel} <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/about-2" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 right-8 hidden md:flex items-center gap-3 z-10">
        <button onClick={goPrev} aria-label="Previous slide" className="w-11 h-11 rounded-full bg-white/15 hover:bg-[#d8e93b] hover:text-[#123e35] text-white flex items-center justify-center backdrop-blur-sm transition-all duration-300">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={goNext} aria-label="Next slide" className="w-11 h-11 rounded-full bg-white/15 hover:bg-[#d8e93b] hover:text-[#123e35] text-white flex items-center justify-center backdrop-blur-sm transition-all duration-300">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-2 bg-[#d8e93b]' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </section>
  );
}
