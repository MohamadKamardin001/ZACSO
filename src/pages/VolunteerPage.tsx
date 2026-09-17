import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { ArrowRight, CheckCircle2, Users, Heart, Target } from 'lucide-react';
import { useState } from 'react';

export default function VolunteerPage() {
  useReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/6646852/pexels-photo-6646852.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#123e35]/80" />
        </div>
        <div className="relative container text-center">
          <p className="eyebrow text-[#d8e93b] mb-3">Volunteer</p>
          <h1 className="text-white font-extrabold" style={{ fontSize: 'var(--text-hero-inner)' }}>Become a Volunteer</h1>
          <nav className="flex items-center justify-center gap-2 mt-4 text-sm text-white/70">
            <Link to="/" className="hover:text-[#d8e93b] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Volunteer</span>
          </nav>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="reveal-left">
              <p className="eyebrow mb-3">Join Our Team</p>
              <h2 className="section-title mb-5">Make a Difference in Your Community</h2>
              <p className="text-[#6d7974] text-lg leading-relaxed mb-8">
                Volunteers are the heart of ZACSO. By giving your time and skills, you directly impact
                the lives of individuals with autism and their families across Zanzibar.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Users, title: 'Community', text: 'Join a network of passionate volunteers' },
                  { icon: Heart, title: 'Impact', text: 'Directly change lives through your work' },
                  { icon: Target, title: 'Growth', text: 'Develop skills while giving back' },
                ].map((item) => (
                  <div key={item.title} className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-[#3e8f75]/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-[#3e8f75]" />
                    </div>
                    <h3 className="font-bold text-[#123e35] mb-1">{item.title}</h3>
                    <p className="text-xs text-[#6d7974]">{item.text}</p>
                  </div>
                ))}
              </div>

              <ul className="space-y-3">
                {[
                  'Event support and coordination',
                  'Community outreach and education',
                  'Administrative and fundraising support',
                  'Social media and content creation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3e8f75] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1c2421]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal">
              {submitted ? (
                <div className="card p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#3e8f75]/10 flex items-center justify-center mx-auto mb-5">
                    <Heart className="w-8 h-8 text-[#3e8f75]" fill="currentColor" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#123e35]">Thank You for Your Interest!</h3>
                  <p className="text-[#6d7974] mb-6">We've received your application and will be in touch soon.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline">Submit Another Application</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-8">
                  <h3 className="text-xl font-bold mb-6 text-[#123e35]">Volunteer Application</h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <input className="input-field" placeholder="First Name" required />
                    <input className="input-field" placeholder="Last Name" required />
                  </div>
                  <input type="email" className="input-field mb-4" placeholder="Email Address" required />
                  <input className="input-field mb-4" placeholder="Phone Number" required />
                  <select className="input-field mb-4" required defaultValue="">
                    <option value="" disabled>Area of Interest</option>
                    <option>Event Support</option>
                    <option>Community Outreach</option>
                    <option>Education Programs</option>
                    <option>Fundraising</option>
                    <option>Social Media</option>
                  </select>
                  <textarea className="input-field min-h-[120px] resize-y mb-6" placeholder="Tell us about yourself and why you'd like to volunteer..." />
                  <button type="submit" className="btn btn-primary w-full">
                    Submit Application <ArrowRight className="w-4 h-4" />
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
