import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { galleryItems } from '@/data';

const workCards = [
  { ...galleryItems[0], tone: 'green' },
  { ...galleryItems[1], tone: 'yellow' },
  { ...galleryItems[2], tone: 'orange' },
  { ...galleryItems[3], tone: 'lilac' },
];

export default function GallerySection() {
  return (
    <section className="work-section">
      <div className="work-panel">
        <div className="work-panel-brush work-panel-brush-top" aria-hidden="true" />
        <div className="work-panel-brush work-panel-brush-bottom" aria-hidden="true" />
        <img
          className="work-panel-background"
          src="https://images.pexels.com/photos/8042458/pexels-photo-8042458.jpeg?auto=compress&cs=tinysrgb&w=1920&h=920&fit=crop"
          alt="A volunteer supporting children in the community"
        />
        <div className="work-panel-overlay" />
        <div className="work-panel-content reveal">
          <p className="work-panel-eyebrow">Our work</p>
          <h2>We support and empower children with chronic illnesses &amp; their families by providing compassionate relevant services in their journey towards an enriching life</h2>
          <Link to="/become-volunteers" className="work-volunteer-button">
            Be a Volunteer <ArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="work-card-stack stagger">
          {workCards.map((card) => (
            <Link key={card.id} to="/portfolio" className={`work-card work-card-${card.tone}`}>
              <img src={card.image} alt={card.label} />
              <span>{card.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
