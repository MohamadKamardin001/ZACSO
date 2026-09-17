import { Link } from 'react-router-dom';
import { Home, ArrowLeft, HeartHandshake } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <section className="not-found-section">
      <div className="not-found-bg" />
      <div className="not-found-content">
        <p className="not-found-eyebrow">ZACSO</p>
        <h1 className="not-found-title">404</h1>
        <p className="not-found-subtitle">Page Not Found</p>
        <p className="not-found-description">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-accent hero-cta">
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <Link to="/donations" className="btn btn-outline hero-cta-secondary">
            <HeartHandshake className="w-4 h-4" /> Support Our Cause
          </Link>
        </div>
        <Link to="/" className="not-found-back-link">
          <ArrowLeft className="w-4 h-4" /> Return to previous page
        </Link>
      </div>
    </section>
  );
}
