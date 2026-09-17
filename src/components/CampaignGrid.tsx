import { Link } from 'react-router-dom';
import { ArrowRight, Target, TrendingUp } from 'lucide-react';
import { campaigns } from '@/data';
import type { Campaign } from '@/types';

function ProgressBar({ raised, goal, currency }: { raised: number; goal: number; currency: string }) {
  const pct = Math.min(100, Math.round((raised / goal) * 100));
  return (
    <div className="campaign-progress">
      <div className="campaign-progress-track">
        <div className="campaign-progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="campaign-progress-labels">
        <span className="campaign-progress-raised">
          {currency}{raised.toLocaleString()} <em>raised</em>
        </span>
        <span className="campaign-progress-goal">
          {currency}{goal.toLocaleString()} <em>goal</em>
        </span>
      </div>
    </div>
  );
}

export default function CampaignGrid() {
  return (
    <section className="campaign-section section-padding">
      <div className="container">
        <div className="campaign-header reveal">
          <div>
            <p className="eyebrow mb-3">Our Campaigns</p>
            <h2 className="section-title">Support Our Latest Causes</h2>
          </div>
          <p className="campaign-header-text">
            Your generosity directly impacts lives. Explore our active campaigns and help us reach our goals — every donation, big or small, brings us closer to a more inclusive Zanzibar.
          </p>
        </div>

        <div className="campaign-grid stagger">
          {campaigns.map((c: Campaign) => {
            const pct = Math.min(100, Math.round((c.raisedAmount / c.goalAmount) * 100));
            const isComplete = c.raisedAmount >= c.goalAmount;
            return (
              <article key={c.id} className="campaign-card group">
                <div className="campaign-card-image">
                  <img src={c.image} alt={c.title} />
                  <span className="campaign-card-badge">{c.category}</span>
                  {isComplete && (
                    <span className="campaign-card-complete">
                      <Target className="w-3.5 h-3.5" /> Goal Reached
                    </span>
                  )}
                </div>
                <div className="campaign-card-body">
                  <h3 className="campaign-card-title">{c.title}</h3>
                  <p className="campaign-card-excerpt">{c.excerpt}</p>
                  <ProgressBar raised={c.raisedAmount} goal={c.goalAmount} currency={c.currency} />
                  <div className="campaign-card-footer">
                    <span className="campaign-card-pct">
                      <TrendingUp className="w-4 h-4" /> {pct}% Funded
                    </span>
                    <Link to="/donations" className="campaign-card-btn">
                      Donate <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
