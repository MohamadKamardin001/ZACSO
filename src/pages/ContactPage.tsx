import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { siteConfig } from '@/data';
import { useState } from 'react';

export default function ContactPage() {
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
          <img src="https://images.pexels.com/photos/31763369/pexels-photo-31763369.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#123e35]/80" />
        </div>
        <div className="relative container text-center">
          <p className="eyebrow text-[#d8e93b] mb-3">Contact</p>
          <h1 className="text-white font-extrabold" style={{ fontSize: 'var(--text-hero-inner)' }}>Get in Touch</h1>
          <nav className="flex items-center justify-center gap-2 mt-4 text-sm text-white/70">
            <Link to="/" className="hover:text-[#d8e93b] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </nav>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-6 mb-12 stagger">
            {[
              { icon: MapPin, title: 'Visit Us', text: siteConfig.address },
              { icon: Mail, title: 'Email Us', text: siteConfig.primaryEmail, href: `mailto:${siteConfig.primaryEmail}` },
              { icon: Phone, title: 'Call Us', text: siteConfig.primaryPhone, href: `tel:${siteConfig.primaryPhone}` },
            ].map((item) => (
              <div key={item.title} className="card p-8 text-center group">
                <div className="w-14 h-14 rounded-2xl bg-[#3e8f75]/10 flex items-center justify-center mx-auto mb-5 transition-all duration-500 group-hover:bg-[#3e8f75] group-hover:scale-110">
                  <item.icon className="w-7 h-7 text-[#3e8f75] transition-colors duration-500 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#123e35]">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="text-[#6d7974] hover:text-[#3e8f75] transition-colors">{item.text}</a>
                ) : (
                  <p className="text-[#6d7974]">{item.text}</p>
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="reveal-left">
              <p className="eyebrow mb-3">Send a Message</p>
              <h2 className="section-title mb-5">We'd Love to Hear From You</h2>
              <p className="text-[#6d7974] text-lg leading-relaxed mb-8">
                Whether you have a question, want to volunteer, or are interested in partnering with us,
                we're here to help. Fill out the form and we'll get back to you as soon as possible.
              </p>
              {submitted ? (
                <div className="rounded-2xl bg-[#3e8f75]/10 p-8 text-center">
                  <p className="text-xl font-bold text-[#3e8f75] mb-2">Thank You!</p>
                  <p className="text-[#6d7974]">Your message has been sent. We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input className="input-field" placeholder="Your Name" required />
                    <input type="email" className="input-field" placeholder="Your Email" required />
                  </div>
                  <input className="input-field" placeholder="Subject" required />
                  <textarea className="input-field min-h-[160px] resize-y" placeholder="Your Message" required />
                  <button type="submit" className="btn btn-primary w-full sm:w-auto">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            <div className="reveal">
              <div className="img-wrap aspect-[4/3] h-full min-h-[400px]">
                <img src="https://images.pexels.com/photos/27038743/pexels-photo-27038743.jpeg?auto=compress&cs=tinysrgb&w=770&h=580&fit=crop" alt="Zanzibar community" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
