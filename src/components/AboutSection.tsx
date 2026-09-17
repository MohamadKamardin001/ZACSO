import { Link } from 'react-router-dom';
import { ArrowRight, Hand, HandHeart, HeartHandshake, Check, Flower2 } from 'lucide-react';

const supportItems = [
  {
    icon: HandHeart,
    title: 'Family Support',
    description: 'Supporting families with guidance and counselling.',
    color: 'yellow',
  },
  {
    icon: HeartHandshake,
    title: 'Community Awareness',
    description: 'Promoting autism awareness and reducing stigma',
    color: 'green',
  },
];

export default function AboutSection() {
  return (
    <section className="about-zacso-section section-padding">
      <div className="about-zacso-grid container">
        <div className="about-zacso-copy reveal-left">
          <p className="about-zacso-eyebrow">know about zacso</p>
          <h2 className="about-zacso-title">Building A More<br />Inclusive Zanzibar</h2>
          <p className="about-zacso-intro">
            ZACSO works to promote understanding, acceptance and inclusion of persons with autism and support their families across Zanzibar.
          </p>

          <Hand className="about-zacso-hand-art" aria-hidden="true" />
          <Flower2 className="about-zacso-flower-art" aria-hidden="true" />

          <div className="about-zacso-support-list">
            {supportItems.map(({ icon: Icon, title, description, color }) => (
              <div key={title} className="about-zacso-support-item">
                <div className={`about-zacso-support-icon ${color}`}>
                  <Icon aria-hidden="true" />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>

          <ul className="about-zacso-checks">
            <li><span><Check /></span>Families Supported</li>
            <li><span><Check /></span>Children Identified &amp; Supported</li>
          </ul>

          <Link to="/about-2" className="about-zacso-link">
            Learn More <ArrowRight />
          </Link>
        </div>

        <div className="about-zacso-visual reveal">
          <div className="about-zacso-brush" aria-hidden="true" />
          <div className="about-zacso-photo">
            <img
              src="https://images.pexels.com/photos/16047378/pexels-photo-16047378.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1400&fit=crop"
              alt="Children walking together in Zanzibar"
            />
          </div>
          <div className="about-zacso-impact-card">
            <div className="about-zacso-impact-avatar">
              <img
                src="https://images.pexels.com/photos/21966629/pexels-photo-21966629.jpeg?auto=compress&cs=tinysrgb&w=240&h=240&fit=crop"
                alt="A smiling child"
              />
              <span className="about-zacso-star">★</span>
            </div>
            <p className="about-zacso-impact-number">60+</p>
            <h3>Families Reached</h3>
            <p className="about-zacso-impact-copy">Through support and community programmes.</p>
            <span className="about-zacso-impact-line" />
          </div>
          <span className="about-zacso-square" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
