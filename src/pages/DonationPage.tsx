import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { Heart, ArrowRight, CheckCircle2 } from 'lucide-react';
import { campaigns } from '@/data';
import { useState } from 'react';

export default function DonationPage() {
  useReveal();
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [selectedCampaign, setSelectedCampaign] = useState(campaigns[0].id);
  const [submitted, setSubmitted] = useState(false);

  const amounts = [10, 25, 50, 100, 250];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/6646884/pexels-photo-6646884.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#123e35]/80" />
        </div>
        <div className="relative container text-center">
          <p className="eyebrow text-[#d8e93b] mb-3">Donations</p>
          <h1 className="text-white font-extrabold" style={{ fontSize: 'var(--text-hero-inner)' }}>Make a Donation</h1>
          <nav className="flex items-center justify-center gap-2 mt-4 text-sm text-white/70">
            <Link to="/" className="hover:text-[#d8e93b] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Donations</span>
          </nav>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Info */}
            <div className="reveal-left">
              <p className="eyebrow mb-3">Your Gift Matters</p>
              <h2 className="section-title mb-5">Every Contribution Changes Lives</h2>
              <p className="text-[#6d7974] text-lg leading-relaxed mb-6">
                Your donation directly supports individuals with autism and their families across Zanzibar.
                From therapy sessions to educational programs, your generosity makes a tangible difference.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  '$25 provides educational materials for one child',
                  '$50 sponsors a therapy session',
                  '$100 supports a family workshop',
                  '$250 funds a month of community outreach',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3e8f75] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1c2421]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="img-wrap aspect-[16/10]">
                <img src="https://images.pexels.com/photos/9090750/pexels-photo-9090750.jpeg?auto=compress&cs=tinysrgb&w=770&h=480&fit=crop" alt="Donation impact" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Form */}
            <div className="reveal">
              {submitted ? (
                <div className="card p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#3e8f75]/10 flex items-center justify-center mx-auto mb-5">
                    <Heart className="w-8 h-8 text-[#3e8f75]" fill="currentColor" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#123e35]">Thank You for Your Generosity!</h3>
                  <p className="text-[#6d7974] mb-6">Your donation will make a real difference in the lives of individuals with autism and their families.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline">Make Another Donation</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-8">
                  <h3 className="text-xl font-bold mb-6 text-[#123e35]">Choose Your Donation</h3>

                  {/* Campaign */}
                  <label className="block text-sm font-semibold text-[#123e35] mb-2">Select Campaign</label>
                  <select
                    className="input-field mb-6"
                    value={selectedCampaign}
                    onChange={(e) => setSelectedCampaign(e.target.value)}
                  >
                    {campaigns.map((c) => (
                      <option key={c.id} value={c.id}>{c.title}</option>
                    ))}
                  </select>

                  {/* Amount */}
                  <label className="block text-sm font-semibold text-[#123e35] mb-2">Donation Amount</label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-4">
                    {amounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setSelectedAmount(amt)}
                        className={`py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                          selectedAmount === amt
                            ? 'bg-[#3e8f75] text-white shadow-md'
                            : 'bg-[#f5f7f5] text-[#123e35] hover:bg-[#3e8f75]/10'
                        }`}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    className="input-field mb-6"
                    placeholder="Or enter custom amount"
                    value={selectedAmount}
                    onChange={(e) => setSelectedAmount(Number(e.target.value))}
                  />

                  {/* Donor info */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <input className="input-field" placeholder="First Name" required />
                    <input className="input-field" placeholder="Last Name" required />
                  </div>
                  <input type="email" className="input-field mb-4" placeholder="Email Address" required />
                  <textarea className="input-field min-h-[100px] resize-y mb-6" placeholder="Message (optional)" />

                  <button type="submit" className="btn btn-primary w-full">
                    Donate ${selectedAmount} <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
