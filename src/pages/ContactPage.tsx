import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import {
  Mail, Phone, MapPin, Send, Clock, MessageCircle, ArrowRight,
  Facebook, Twitter, Instagram, Youtube, Users, Heart, HandHeart,
} from 'lucide-react';
import { siteConfig } from '@/data';
import { useState } from 'react';

const contactInfo = [
  { icon: MapPin, title: 'Visit Us', text: siteConfig.address, color: '#3e8f75' },
  { icon: Mail, title: 'Email Us', text: siteConfig.primaryEmail, href: `mailto:${siteConfig.primaryEmail}`, color: '#d8e93b' },
  { icon: Phone, title: 'Call Us', text: siteConfig.primaryPhone, href: `tel:${siteConfig.primaryPhone}`, color: '#3e8f75' },
];

const officeHours = [
  { day: 'Monday — Friday', time: '8:00 AM — 5:00 PM' },
  { day: 'Saturday', time: '9:00 AM — 1:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

const departments = [
  { icon: Heart, title: 'Donations', email: 'donations@zacso.or.tz', text: 'Questions about giving, campaigns, or recurring donations.' },
  { icon: Users, title: 'Volunteering', email: 'volunteer@zacso.or.tz', text: 'Want to join our volunteer team or learn about opportunities.' },
  { icon: HandHeart, title: 'Family Support', email: 'support@zacso.or.tz', text: 'Need help for your family or want to access our programs.' },
  { icon: MessageCircle, title: 'Partnerships', email: 'partners@zacso.or.tz', text: 'Organizations interested in collaborating with ZACSO.' },
];

const socialIcons: Record<string, any> = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
};

export default function ContactPage() {
  useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ─────────── Page Hero ─────────── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/31763369/pexels-photo-31763369.jpeg?auto=compress&cs=tinysrgb&w=1920&h=700&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#123e35]/80" />
        </div>
        <div className="relative container text-center">
          <p className="eyebrow text-[#d8e93b] mb-3">Contact</p>
          <h1 className="text-white font-extrabold" style={{ fontSize: 'var(--text-hero-inner)' }}>
            Get in Touch
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            Have a question, want to volunteer, interested in partnering, or need support? We're
            here to help and would love to hear from you.
          </p>
          <nav className="flex items-center justify-center gap-2 mt-6 text-sm text-white/70">
            <Link to="/" className="hover:text-[#d8e93b] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </nav>
        </div>
      </section>

      {/* ─────────── Contact Info Cards ─────────── */}
      <section className="section-padding pb-0">
        <div className="container">
          <div className="grid sm:grid-cols-3 gap-6 stagger">
            {contactInfo.map((item) => (
              <div key={item.title} className="card p-8 text-center group reveal">
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
        </div>
      </section>

      {/* ─────────── Contact Form + Image ─────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="reveal-left">
              <p className="eyebrow mb-3">Send a Message</p>
              <h2 className="section-title mb-5">We'd Love to Hear From You</h2>
              <p className="text-[#6d7974] text-lg leading-relaxed mb-8">
                Whether you have a question, want to volunteer, or are interested in partnering with us,
                we're here to help. Fill out the form and we'll get back to you within 1-2 business days.
              </p>

              {submitted ? (
                <div className="rounded-2xl bg-[#3e8f75]/10 p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#3e8f75]/20 flex items-center justify-center mx-auto mb-5">
                    <Send className="w-8 h-8 text-[#3e8f75]" />
                  </div>
                  <p className="text-xl font-bold text-[#3e8f75] mb-2">Thank You!</p>
                  <p className="text-[#6d7974]">Your message has been sent. We'll be in touch soon.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline mt-6 text-sm">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-8 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      className="input-field"
                      placeholder="Your Name *"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <input
                      type="email"
                      className="input-field"
                      placeholder="Your Email *"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <input
                    className="input-field"
                    placeholder="Subject *"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />
                  <select className="input-field" defaultValue="">
                    <option value="" disabled>What is this about?</option>
                    <option>General Inquiry</option>
                    <option>Volunteering</option>
                    <option>Donation Question</option>
                    <option>Family Support</option>
                    <option>Partnership Opportunity</option>
                    <option>Media / Press</option>
                  </select>
                  <textarea
                    className="input-field min-h-[160px] resize-y"
                    placeholder="Your Message *"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  <button type="submit" className="btn btn-primary w-full sm:w-auto">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            <div className="reveal space-y-6">
              {/* Office hours */}
              <div className="card p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#3e8f75]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#3e8f75]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#123e35]">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map((h) => (
                    <div key={h.day} className="flex items-center justify-between py-2 border-b border-[#e2e9e4] last:border-0">
                      <span className="text-[#1c2421] font-medium text-sm">{h.day}</span>
                      <span className={`text-sm ${h.time === 'Closed' ? 'text-[#c55] font-semibold' : 'text-[#3e8f75] font-semibold'}`}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Departments */}
              <div className="card p-8">
                <h3 className="text-lg font-bold text-[#123e35] mb-5">Contact by Department</h3>
                <div className="space-y-4">
                  {departments.map((dept) => (
                    <div key={dept.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#3e8f75]/10 flex items-center justify-center flex-shrink-0">
                        <dept.icon className="w-5 h-5 text-[#3e8f75]" />
                      </div>
                      <div>
                        <p className="font-bold text-[#123e35] text-sm">{dept.title}</p>
                        <a href={`mailto:${dept.email}`} className="text-[#3e8f75] text-sm hover:underline">{dept.email}</a>
                        <p className="text-xs text-[#6d7974] mt-1">{dept.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="card p-8">
                <h3 className="text-lg font-bold text-[#123e35] mb-4">Follow Us</h3>
                <p className="text-[#6d7974] text-sm mb-5">Stay connected and follow our latest updates on social media.</p>
                <div className="flex gap-3">
                  {siteConfig.socialLinks.map((social) => {
                    const Icon = socialIcons[social.icon] || MessageCircle;
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-[#3e8f75]/10 flex items-center justify-center text-[#3e8f75] hover:bg-[#3e8f75] hover:text-white transition-all duration-300"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── Map ─────────── */}
      <section className="section-padding pt-0">
        <div className="container">
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] reveal">
            <iframe
              title="ZACSO office location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=39.20%2C-6.22%2C39.24%2C-6.20&layer=mapnik"
              className="w-full h-full border-0"
              loading="lazy"
            />
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
              <h2 className="text-white text-3xl lg:text-4xl font-extrabold mb-4">Ready to Make a Difference?</h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
                Whether you donate, volunteer, or spread the word, your support changes lives for
                individuals with autism and their families in Zanzibar.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/donations" className="btn btn-accent">Donate Now <ArrowRight className="w-4 h-4" /></Link>
                <Link to="/become-volunteers" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Volunteer</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
