import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { CheckCircle2, ArrowRight, Target, Eye, Heart } from 'lucide-react';
import { metrics } from '@/data';

export default function AboutPage() {
  useReveal();

  return (
    <>
      {/* Page hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/17321854/pexels-photo-17321854.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#123e35]/80" />
        </div>
        <div className="relative container text-center">
          <p className="eyebrow text-[#d8e93b] mb-3">About Us</p>
          <h1 className="text-white font-extrabold" style={{ fontSize: 'var(--text-hero-inner)' }}>Who We Are</h1>
          <nav className="flex items-center justify-center gap-2 mt-4 text-sm text-white/70">
            <Link to="/" className="hover:text-[#d8e93b] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About</span>
          </nav>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative reveal-left">
              <div className="img-wrap aspect-[4/5]">
                <img src="https://images.pexels.com/photos/9090746/pexels-photo-9090746.jpeg?auto=compress&cs=tinysrgb&w=770&h=960&fit=crop" alt="ZACSO community" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="reveal">
              <p className="eyebrow mb-3">Our Story</p>
              <h2 className="section-title mb-5">Dedicated to Making a Difference</h2>
              <p className="text-[#6d7974] text-lg leading-relaxed mb-5">
                ZACSO was founded with a vision to create a more inclusive Zanzibar where individuals
                with autism and their families receive the support, understanding, and opportunities
                they deserve.
              </p>
              <p className="text-[#6d7974] leading-relaxed mb-6">
                We work tirelessly to raise awareness, provide direct support, and advocate for policies
                that benefit the autism community. Through partnerships with local and international
                organizations, we deliver programs that make a real difference in people's lives.
              </p>
              <ul className="space-y-3">
                {[
                  'Community-based support programs',
                  'Partnerships with healthcare providers',
                  'Educational workshops and training',
                  'Advocacy for inclusive policies',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3e8f75] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1c2421]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-padding bg-[#f5f7f5]">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 stagger">
            {[
              { icon: Target, title: 'Our Mission', text: 'To create awareness, provide support, and build an inclusive community for individuals with autism and their families across Zanzibar.' },
              { icon: Eye, title: 'Our Vision', text: 'A Zanzibar where every individual with autism is valued, supported, and empowered to reach their full potential.' },
              { icon: Heart, title: 'Our Values', text: 'Compassion, inclusivity, transparency, and community-driven action guide everything we do at ZACSO.' },
            ].map((item) => (
              <div key={item.title} className="card p-8 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-[#3e8f75]/10 flex items-center justify-center mx-auto mb-5 transition-all duration-500 group-hover:bg-[#3e8f75] group-hover:scale-110">
                  <item.icon className="w-8 h-8 text-[#3e8f75] transition-colors duration-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#123e35]">{item.title}</h3>
                <p className="text-[#6d7974] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            {metrics.map((m) => (
              <div key={m.label} className="text-center reveal">
                <p className="text-4xl lg:text-5xl font-extrabold text-[#3e8f75] mb-2">{m.value}</p>
                <p className="text-[#6d7974] font-medium">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pt-0">
        <div className="container">
          <div className="rounded-3xl bg-[#123e35] px-6 py-16 text-center reveal">
            <h2 className="text-white text-3xl lg:text-4xl font-extrabold mb-4">Join Us in Making a Difference</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Whether you donate, volunteer, or spread the word, your support changes lives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/donations" className="btn btn-accent">Donate Now <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/become-volunteers" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Volunteer</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
