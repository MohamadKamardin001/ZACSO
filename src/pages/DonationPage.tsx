import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import {
  Heart, ArrowRight, CheckCircle2, Shield, Repeat, CreditCard,
  HandHeart, Sparkles, Users, GraduationCap, Stethoscope, Home,
  Quote, Star, Gift, TrendingUp,
} from 'lucide-react';
import { campaigns, metrics } from '@/data';
import { useState } from 'react';

const amounts = [10, 25, 50, 100, 250, 500];

const impactTiers = [
  { amount: '$10', icon: Heart, title: 'Essential Supplies', desc: 'Provides basic sensory and educational materials for one child for a week.' },
  { amount: '$25', icon: GraduationCap, title: 'Educational Materials', desc: 'Funds learning materials and visual aids that help a child with autism thrive in the classroom.' },
  { amount: '$50', icon: Stethoscope, title: 'Therapy Session', desc: 'Sponsors a full speech or occupational therapy session for a child in need.' },
  { amount: '$100', icon: Users, title: 'Family Workshop', desc: 'Supports a parent training workshop, equipping families with strategies and knowledge.' },
  { amount: '$250', icon: Home, title: 'Community Outreach', desc: 'Funds a month of community awareness outreach in rural Zanzibar communities.' },
  { amount: '$500', icon: Sparkles, title: 'Program Scholarship', desc: 'Provides a full month of subsidized program participation for a family in need.' },
];

const features = [
  { icon: Shield, title: 'Secure & Trusted', text: 'Your donation is processed through secure, encrypted channels. We never store your payment details.' },
  { icon: Repeat, title: 'Recurring Option', text: 'Choose a one-time gift or set up a monthly recurring donation for sustained impact.' },
  { icon: CreditCard, title: 'Flexible Payment', text: 'We accept all major payment methods. Choose what works best for you.' },
  { icon: HandHeart, title: '100% to Programs', text: 'Every dollar goes directly to programs supporting individuals with autism and their families.' },
];

const testimonials = [
  {
    quote: 'Donating to ZACSO was the easiest decision I\'ve made. Seeing the photos of the children my contribution helps — it makes it all real.',
    name: 'Sarah J.',
    role: 'Monthly Donor',
    img: 'https://images.pexels.com/photos/8312669/pexels-photo-8312669.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop',
  },
  {
    quote: 'I chose to give monthly because I know the impact compounds. ZACSO keeps me updated on exactly where my money goes.',
    name: 'Michael T.',
    role: 'Recurring Donor',
    img: 'https://images.pexels.com/photos/13392786/pexels-photo-13392786.png?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop',
  },
  {
    quote: 'After visiting Zanzibar and seeing ZACSO\'s work firsthand, I had to contribute. They are doing the most important work in the community.',
    name: 'Aisha K.',
    role: 'Major Donor',
    img: 'https://images.pexels.com/photos/38528495/pexels-photo-38528495.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop',
  },
];

const faqs = [
  { q: 'Is my donation secure?', a: 'Yes. All donations are processed through encrypted, PCI-compliant payment systems. We never see or store your full card details.' },
  { q: 'Can I make a recurring donation?', a: 'Absolutely. You can choose a monthly recurring donation during checkout. You can modify or cancel your recurring donation at any time by contacting us.' },
  { q: 'How is my donation used?', a: '100% of your donation goes directly to programs supporting individuals with autism and their families — therapy subsidies, educational materials, community outreach, and family support services.' },
  { q: 'Will I receive a receipt?', a: 'Yes, you will receive an email receipt immediately after your donation. If you need a formal receipt for tax purposes, please contact us at info@zacso.or.tz.' },
  { q: 'Can I designate my donation for a specific program?', a: 'Yes. When you select a campaign, your donation is directed to that specific program. You can also choose "General Fund" to let us allocate where it\'s needed most.' },
];

export default function DonationPage() {
  useReveal();
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState(campaigns[0].id);
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorMessage, setDonorMessage] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const finalAmount = customAmount ? Number(customAmount) : selectedAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setCustomAmount('');
    setDonorName('');
    setDonorEmail('');
    setDonorMessage('');
    setAnonymous(false);
    setSelectedAmount(50);
    setFrequency('one-time');
  };

  return (
    <>
      {/* ─────────── Page Hero ─────────── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/6646884/pexels-photo-6646884.jpeg?auto=compress&cs=tinysrgb&w=1920&h=700&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#123e35]/80" />
        </div>
        <div className="relative container text-center">
          <p className="eyebrow text-[#d8e93b] mb-3">Donations</p>
          <h1 className="text-white font-extrabold" style={{ fontSize: 'var(--text-hero-inner)' }}>
            Make a Donation
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            Your generosity directly supports individuals with autism and their families across Zanzibar.
            Every gift — large or small — creates lasting change.
          </p>
          <nav className="flex items-center justify-center gap-2 mt-6 text-sm text-white/70">
            <Link to="/" className="hover:text-[#d8e93b] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Donations</span>
          </nav>
        </div>
      </section>

      {/* ─────────── Impact Metrics Bar ─────────── */}
      <section className="bg-[#123e35] py-10">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '$45K+', label: 'Total Raised' },
              { value: '60+', label: 'Families Helped' },
              { value: '100%', label: 'To Programs' },
              { value: '200+', label: 'Donors Worldwide' },
            ].map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-extrabold text-[#d8e93b]">{m.value}</p>
                <p className="text-white/70 text-sm font-medium mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Why Donate + Donation Form ─────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Info */}
            <div className="reveal-left lg:sticky lg:top-28">
              <p className="eyebrow mb-3">Your Gift Matters</p>
              <h2 className="section-title mb-5">Every Contribution Changes Lives</h2>
              <p className="text-[#6d7974] text-lg leading-relaxed mb-6">
                Your donation directly supports individuals with autism and their families across Zanzibar.
                From therapy sessions to educational programs, your generosity makes a tangible, lasting
                difference in the lives of those who need it most.
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
              <div className="img-wrap aspect-[16/10] mb-6">
                <img src="https://images.pexels.com/photos/9090750/pexels-photo-9090750.jpeg?auto=compress&cs=tinysrgb&w=770&h=480&fit=crop" alt="Donation impact" className="w-full h-full object-cover" />
              </div>
              {/* Trust badges */}
              <div className="grid sm:grid-cols-2 gap-4">
                {features.slice(0, 2).map((f) => (
                  <div key={f.title} className="flex items-start gap-3 p-4 rounded-xl bg-[#f5f7f5]">
                    <f.icon className="w-6 h-6 text-[#3e8f75] flex-shrink-0" />
                    <div>
                      <p className="font-bold text-[#123e35] text-sm">{f.title}</p>
                      <p className="text-[#6d7974] text-xs leading-relaxed mt-1">{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="reveal">
              {submitted ? (
                <div className="card p-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#3e8f75]/10 flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-[#3e8f75]" fill="currentColor" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#123e35]">Thank You for Your Generosity!</h3>
                  <p className="text-[#6d7974] mb-2 max-w-md mx-auto leading-relaxed">
                    Your {frequency === 'monthly' ? 'monthly ' : ''}donation of <span className="font-bold text-[#123e35]">${finalAmount}</span> will make a real difference
                    in the lives of individuals with autism and their families in Zanzibar.
                  </p>
                  <p className="text-[#6d7974] text-sm mb-6">A receipt has been sent to your email.</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button onClick={resetForm} className="btn btn-outline">Make Another Donation</button>
                    <Link to="/become-volunteers" className="btn btn-primary">Become a Volunteer</Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-8 lg:p-10">
                  <h3 className="text-2xl font-bold mb-2 text-[#123e35]">Choose Your Donation</h3>
                  <p className="text-[#6d7974] text-sm mb-8">Select an amount, choose a campaign, and complete your gift below.</p>

                  {/* Frequency toggle */}
                  <div className="grid grid-cols-2 gap-3 p-1 bg-[#f5f7f5] rounded-xl mb-6">
                    <button
                      type="button"
                      onClick={() => setFrequency('one-time')}
                      className={`py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${frequency === 'one-time' ? 'bg-white text-[#123e35] shadow-sm' : 'text-[#6d7974]'}`}
                    >
                      One-Time
                    </button>
                    <button
                      type="button"
                      onClick={() => setFrequency('monthly')}
                      className={`py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${frequency === 'monthly' ? 'bg-white text-[#123e35] shadow-sm' : 'text-[#6d7974]'}`}
                    >
                      Monthly
                      <span className="text-[10px] bg-[#d8e93b] text-[#123e35] px-2 py-0.5 rounded-full font-bold">POPULAR</span>
                    </button>
                  </div>

                  {/* Amount selection */}
                  <label className="block text-sm font-semibold text-[#123e35] mb-3">Donation Amount</label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {amounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                        className={`py-4 rounded-xl font-bold text-base transition-all duration-300 border-2 ${
                          selectedAmount === amt && !customAmount
                            ? 'bg-[#3e8f75] text-white border-[#3e8f75] shadow-md'
                            : 'bg-white text-[#123e35] border-[#e2e9e4] hover:border-[#3e8f75]'
                        }`}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>
                  <div className="relative mb-6">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6d7974] font-semibold text-lg">$</span>
                    <input
                      type="number"
                      className="input-field pl-9"
                      placeholder="Or enter custom amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      min={1}
                    />
                  </div>

                  {/* Campaign selection */}
                  <label className="block text-sm font-semibold text-[#123e35] mb-3">Select Campaign</label>
                  <div className="space-y-2 mb-6">
                    <button
                      type="button"
                      onClick={() => setSelectedCampaign('general')}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-3 ${
                        selectedCampaign === 'general' ? 'border-[#3e8f75] bg-[#3e8f75]/5' : 'border-[#e2e9e4] hover:border-[#3e8f75]/50'
                      }`}
                    >
                      <Gift className="w-5 h-5 text-[#3e8f75] flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-bold text-[#123e35] text-sm">General Fund</p>
                        <p className="text-[#6d7974] text-xs">Let ZACSO allocate where it's needed most</p>
                      </div>
                    </button>
                    {campaigns.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setSelectedCampaign(c.id)}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-3 ${
                          selectedCampaign === c.id ? 'border-[#3e8f75] bg-[#3e8f75]/5' : 'border-[#e2e9e4] hover:border-[#3e8f75]/50'
                        }`}
                      >
                        <img src={c.image} alt="" className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-[#123e35] text-sm truncate">{c.title}</p>
                          <p className="text-[#6d7974] text-xs">{c.category}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Donor info */}
                  <div className="border-t border-[#e2e9e4] pt-6 mb-6">
                    <label className="block text-sm font-semibold text-[#123e35] mb-3">Your Information</label>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <input className="input-field" placeholder="First Name" required value={donorName} onChange={(e) => setDonorName(e.target.value)} />
                      <input className="input-field" placeholder="Last Name" required />
                    </div>
                    <input type="email" className="input-field mb-4" placeholder="Email Address" required value={donorEmail} onChange={(e) => setDonorEmail(e.target.value)} />
                    <textarea className="input-field min-h-[90px] resize-y mb-4" placeholder="Message (optional)" value={donorMessage} onChange={(e) => setDonorMessage(e.target.value)} />
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={anonymous}
                        onChange={(e) => setAnonymous(e.target.checked)}
                        className="w-5 h-5 rounded accent-[#3e8f75]"
                      />
                      <span className="text-sm text-[#6d7974]">Make my donation anonymous</span>
                    </label>
                  </div>

                  {/* Summary */}
                  <div className="bg-[#f5f7f5] rounded-xl p-5 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#6d7974]">Donation Amount</span>
                      <span className="text-lg font-bold text-[#123e35]">${finalAmount}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#6d7974]">Frequency</span>
                      <span className="text-sm font-semibold text-[#123e35] capitalize">{frequency}</span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-[#e2e9e4]">
                      <span className="text-sm font-bold text-[#123e35]">Total</span>
                      <span className="text-xl font-extrabold text-[#3e8f75]">${finalAmount}{frequency === 'monthly' ? '/mo' : ''}</span>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary w-full text-base">
                    <Heart className="w-5 h-5" /> Donate ${finalAmount}{frequency === 'monthly' ? '/month' : ''}
                  </button>
                  <p className="text-center text-xs text-[#6d7974] mt-4 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4" /> Your payment is secure and encrypted
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── Impact Tiers ─────────── */}
      <section className="section-padding bg-[#f5f7f5]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="eyebrow mb-3">Your Impact</p>
            <h2 className="section-title">What Your Donation Does</h2>
            <p className="text-[#6d7974] text-lg mt-4 leading-relaxed">
              See exactly how your contribution translates into real, tangible support for individuals
              with autism and their families across Zanzibar.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {impactTiers.map((tier) => (
              <div key={tier.amount} className="card p-7 group reveal">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[#3e8f75]/10 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-[#3e8f75]">
                    <tier.icon className="w-7 h-7 text-[#3e8f75] transition-colors duration-500 group-hover:text-white" />
                  </div>
                  <span className="text-3xl font-extrabold text-[#123e35]">{tier.amount}</span>
                </div>
                <h3 className="text-lg font-bold text-[#123e35] mb-2">{tier.title}</h3>
                <p className="text-[#6d7974] leading-relaxed text-sm">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Active Campaigns ─────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="eyebrow mb-3">Active Campaigns</p>
            <h2 className="section-title">Choose a Campaign to Support</h2>
            <p className="text-[#6d7974] text-lg mt-4 leading-relaxed">
              Each campaign addresses a specific need in our community. Find the one that resonates
              with you and make a direct impact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 stagger">
            {campaigns.map((c) => {
              const pct = Math.min(100, Math.round((c.raisedAmount / c.goalAmount) * 100));
              return (
                <div key={c.id} className="card group reveal">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-[#3e8f75] uppercase tracking-wide">
                      {c.category}
                    </div>
                    {pct >= 100 && (
                      <div className="absolute top-4 right-4 bg-[#3e8f75] text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Goal Reached
                      </div>
                    )}
                  </div>
                  <div className="p-7">
                    <h3 className="text-lg font-bold text-[#123e35] mb-2">{c.title}</h3>
                    <p className="text-[#6d7974] text-sm leading-relaxed mb-5">{c.excerpt}</p>
                    <div className="mb-4">
                      <div className="h-2.5 rounded-full bg-[#e8efea] overflow-hidden mb-2">
                        <div className="h-full rounded-full bg-gradient-to-r from-[#2c9277] to-[#5cb39a] transition-all duration-1000" style={{ width: `${pct}%` }} />
                      </div>
                      <div className="flex justify-between items-baseline">
                        <span className="font-extrabold text-[#123e35]">${c.raisedAmount.toLocaleString()} <span className="text-xs font-normal text-[#8a9a93]">raised</span></span>
                        <span className="text-sm text-[#8a9a93] font-semibold">${c.goalAmount.toLocaleString()} goal</span>
                      </div>
                    </div>
                    <Link to="/donations" className="btn btn-primary w-full text-sm">
                      Donate to This Campaign <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────── Why Donate With Us ─────────── */}
      <section className="section-padding bg-[#123e35] relative overflow-hidden">
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="eyebrow text-[#d8e93b] mb-3">Why Donate With ZACSO</p>
            <h2 className="section-title text-white">Trusted, Transparent, Impactful</h2>
            <p className="text-white/70 text-lg mt-4 leading-relaxed">
              We are committed to the highest standards of transparency and accountability.
              When you donate to ZACSO, you can trust that your gift is making a real difference.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            {features.map((f) => (
              <div key={f.title} className="bg-white/5 backdrop-blur rounded-2xl p-7 text-center group reveal border border-white/10 hover:bg-white/10 transition-colors duration-500">
                <div className="w-14 h-14 rounded-xl bg-[#d8e93b]/20 flex items-center justify-center mx-auto mb-5 transition-transform duration-500 group-hover:scale-110">
                  <f.icon className="w-7 h-7 text-[#d8e93b]" />
                </div>
                <h3 className="text-white font-bold mb-2">{f.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Donor Testimonials ─────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="eyebrow mb-3">Donor Stories</p>
            <h2 className="section-title">Why People Give to ZACSO</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 stagger">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-7 reveal">
                <Quote className="w-8 h-8 text-[#d8e93b] mb-4" />
                <p className="text-[#1c2421] leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#e2e9e4]">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-[#123e35] text-sm">{t.name}</p>
                    <p className="text-[#3e8f75] text-xs font-medium">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#f2c94c] fill-[#f2c94c]" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Other Ways to Give ─────────── */}
      <section className="section-padding bg-[#f5f7f5]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="eyebrow mb-3">Beyond Donations</p>
            <h2 className="section-title">Other Ways to Support ZACSO</h2>
            <p className="text-[#6d7974] text-lg mt-4 leading-relaxed">
              Not ready to donate? There are many ways to support our mission and create lasting change.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 stagger">
            {[
              { icon: Users, title: 'Volunteer', text: 'Join our network of 200+ volunteers and contribute your time and skills directly to our programs.', link: '/become-volunteers', cta: 'Become a Volunteer' },
              { icon: TrendingUp, title: 'Spread the Word', text: 'Follow us on social media and share our campaigns. Awareness is the first step toward change.', link: '/blog', cta: 'Read Our Blog' },
              { icon: HandHeart, title: 'Partner With Us', text: 'Are you part of an organization? Let\'s collaborate to amplify our collective impact in Zanzibar.', link: '/contact-2', cta: 'Contact Us' },
            ].map((item) => (
              <div key={item.title} className="card p-8 text-center group reveal">
                <div className="w-16 h-16 rounded-2xl bg-[#3e8f75]/10 flex items-center justify-center mx-auto mb-5 transition-all duration-500 group-hover:bg-[#3e8f75] group-hover:scale-110">
                  <item.icon className="w-8 h-8 text-[#3e8f75] transition-colors duration-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#123e35]">{item.title}</h3>
                <p className="text-[#6d7974] leading-relaxed mb-5">{item.text}</p>
                <Link to={item.link} className="btn btn-outline text-sm">
                  {item.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <div className="text-center mb-12 reveal">
            <p className="eyebrow mb-3">Donation FAQ</p>
            <h2 className="section-title">Questions About Donating</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div key={i} className="card overflow-hidden reveal">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-[#123e35] text-lg">{item.q}</span>
                  <span className={`text-[#3e8f75] text-2xl transition-transform duration-300 flex-shrink-0 ml-4 ${openFaq === i ? 'rotate-45' : ''}`}>&#43;</span>
                </button>
                <div className={`overflow-hidden transition-all duration-400 ${openFaq === i ? 'max-h-60' : 'max-h-0'}`}>
                  <p className="px-6 pb-6 text-[#6d7974] leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="section-padding pt-0">
        <div className="container">
          <div className="rounded-3xl bg-[#123e35] px-6 py-16 text-center reveal relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d8e93b]/10 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#3e8f75]/20 rounded-full translate-y-1/3 -translate-x-1/3" />
            <div className="relative">
              <Heart className="w-12 h-12 text-[#d8e93b] mx-auto mb-4" />
              <h2 className="text-white text-3xl lg:text-4xl font-extrabold mb-4">Your Gift Can Change a Life Today</h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
                Join hundreds of donors who are building a more inclusive Zanzibar for individuals with
                autism and their families. Every contribution matters.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#top" className="btn btn-accent">Donate Now <ArrowRight className="w-4 h-4" /></a>
                <Link to="/become-volunteers" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Volunteer</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
