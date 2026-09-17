import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import {
  Calendar, Clock, MapPin, ArrowRight, Users, Ticket,
  Heart, Mic, PartyPopper, GraduationCap, Stethoscope,
  CheckCircle2, Share2, Bell,
} from 'lucide-react';
import { events, siteConfig } from '@/data';
import { useState } from 'react';

const eventCategories = [
  { id: 'all', label: 'All Events', icon: Calendar },
  { id: 'Awareness', label: 'Awareness', icon: Mic },
  { id: 'Workshop', label: 'Workshops', icon: GraduationCap },
  { id: 'Community', label: 'Community', icon: PartyPopper },
  { id: 'Health', label: 'Health', icon: Stethoscope },
];

const eventExtras = [
  ...events,
  {
    id: 'e7',
    slug: 'art-therapy-exhibition',
    title: 'Art Therapy Exhibition',
    excerpt: 'An exhibition showcasing artwork created by children with autism in our therapy programs.',
    image: 'https://images.pexels.com/photos/8042458/pexels-photo-8042458.jpeg?auto=compress&cs=tinysrgb&w=940&h=588&fit=crop',
    venue: 'Stone Town Cultural Centre, Zanzibar',
    date: 'Mar 22, 2027',
    time: '5:00 PM',
  },
  {
    id: 'e8',
    slug: 'family-fun-day',
    title: 'Family Fun Day',
    excerpt: 'A day of games, music, and activities for families affected by autism to connect and enjoy.',
    image: 'https://images.pexels.com/photos/9090750/pexels-photo-9090750.jpeg?auto=compress&cs=tinysrgb&w=940&h=588&fit=crop',
    venue: 'Forodhani Gardens, Zanzibar',
    date: 'May 10, 2027',
    time: '10:00 AM',
  },
];

const featuredEvent = eventExtras[0];

const pastEvents = [
  {
    title: 'World Autism Awareness Day 2026',
    date: 'Apr 2, 2026',
    venue: 'Forodhani Gardens, Zanzibar',
    image: 'https://images.pexels.com/photos/17321854/pexels-photo-17321854.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    attendees: 500,
  },
  {
    title: 'Parent Support Workshop Series',
    date: 'Feb 15, 2026',
    venue: 'ZACSO Office, Zanzibar',
    image: 'https://images.pexels.com/photos/5324985/pexels-photo-5324985.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    attendees: 45,
  },
  {
    title: 'Community Health Fair',
    date: 'Jan 18, 2026',
    venue: 'Mwanakwerekwe, Zanzibar',
    image: 'https://images.pexels.com/photos/6646905/pexels-photo-6646905.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    attendees: 200,
  },
];

const whyAttend = [
  { icon: Users, title: 'Connect with Community', text: 'Meet families, volunteers, and advocates who share your passion for inclusion and support.' },
  { icon: GraduationCap, title: 'Learn from Experts', text: 'Hear from healthcare professionals, educators, and autism specialists about the latest in support strategies.' },
  { icon: Heart, title: 'Make an Impact', text: 'Your participation directly supports our programs and helps us reach more families across Zanzibar.' },
  { icon: Mic, title: 'Raise Awareness', text: 'Be part of the movement that is changing how Zanzibar understands and supports autism.' },
];

export default function EventsPage() {
  useReveal();
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? eventExtras
    : eventExtras.filter((_, i) => i % eventCategories.length === eventCategories.findIndex((c) => c.id === activeCategory));

  return (
    <>
      {/* ─────────── Page Hero ─────────── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/9090746/pexels-photo-9090746.jpeg?auto=compress&cs=tinysrgb&w=1920&h=700&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#123e35]/80" />
        </div>
        <div className="relative container text-center">
          <p className="eyebrow text-[#d8e93b] mb-3">Events</p>
          <h1 className="text-white font-extrabold" style={{ fontSize: 'var(--text-hero-inner)' }}>
            Upcoming Events
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            Join us at our upcoming events to connect, learn, and make a difference in the autism
            community across Zanzibar.
          </p>
          <nav className="flex items-center justify-center gap-2 mt-6 text-sm text-white/70">
            <Link to="/" className="hover:text-[#d8e93b] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Events</span>
          </nav>
        </div>
      </section>

      {/* ─────────── Featured Event ─────────── */}
      <section className="section-padding pb-0">
        <div className="container">
          <div className="flex items-center gap-3 mb-6 reveal">
            <span className="inline-flex items-center gap-2 bg-[#d8e93b] text-[#123e35] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide">
              <Ticket className="w-4 h-4" /> Next Event
            </span>
          </div>
          <div className="card group overflow-hidden reveal">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img src={featuredEvent.image} alt={featuredEvent.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123e35]/40 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute top-4 left-4 bg-[#3e8f75] text-white rounded-xl px-4 py-3 text-center">
                  <p className="text-xs font-semibold uppercase leading-none">{featuredEvent.date.split(' ')[0]}</p>
                  <p className="text-2xl font-extrabold leading-tight">{featuredEvent.date.split(' ')[1].replace(',', '')}</p>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs text-[#6d7974] mb-4">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {featuredEvent.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {featuredEvent.time}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {featuredEvent.venue}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-[#123e35] mb-4 leading-tight group-hover:text-[#3e8f75] transition-colors">
                  {featuredEvent.title}
                </h2>
                <p className="text-[#6d7974] text-base leading-relaxed mb-6">{featuredEvent.excerpt}</p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact-2" className="btn btn-primary text-sm">
                    Register Now <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button className="btn btn-outline text-sm">
                    <Bell className="w-4 h-4" /> Remind Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── Category Filter + Event Grid ─────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10 reveal">
            <p className="eyebrow mb-3">Browse Events</p>
            <h2 className="section-title">All Upcoming Events</h2>
            <p className="text-[#6d7974] text-lg mt-4 leading-relaxed">
              Filter by category to find events that match your interests.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 reveal">
            {eventCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#3e8f75] text-white shadow-md'
                    : 'bg-[#f5f7f5] text-[#1c2421] hover:bg-[#e8efea]'
                }`}
              >
                <cat.icon className="w-4 h-4" /> {cat.label}
              </button>
            ))}
          </div>

          {/* Event cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {filtered.map((event) => (
              <div key={event.id} className="card group flex flex-col reveal">
                <div className="img-wrap aspect-[16/10] relative">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-[#3e8f75] text-white rounded-xl px-3 py-2 text-center">
                    <p className="text-xs font-semibold uppercase leading-none">{event.date.split(' ')[0]}</p>
                    <p className="text-lg font-extrabold leading-tight">{event.date.split(' ')[1].replace(',', '')}</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-2 text-[#123e35] leading-snug group-hover:text-[#3e8f75] transition-colors">{event.title}</h3>
                  <p className="text-sm text-[#6d7974] leading-relaxed flex-1 mb-4">{event.excerpt}</p>
                  <div className="space-y-2 text-sm text-[#6d7974] mb-5">
                    <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#3e8f75]" /> {event.date}</p>
                    <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#3e8f75]" /> {event.time}</p>
                    <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#3e8f75]" /> {event.venue}</p>
                  </div>
                  <div className="flex gap-3 pt-4 border-t border-[#e2e9e4]">
                    <Link to="/contact-2" className="btn btn-primary flex-1 text-sm">
                      Register <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button className="w-11 h-11 rounded-xl bg-[#f5f7f5] flex items-center justify-center text-[#6d7974] hover:bg-[#3e8f75] hover:text-white transition-all duration-300 flex-shrink-0">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Why Attend ─────────── */}
      <section className="section-padding bg-[#123e35] relative overflow-hidden">
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="eyebrow text-[#d8e93b] mb-3">Why Attend</p>
            <h2 className="section-title text-white">More Than Just Events</h2>
            <p className="text-white/70 text-lg mt-4 leading-relaxed">
              Our events are opportunities to learn, connect, and create lasting change for the autism community.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            {whyAttend.map((item) => (
              <div key={item.title} className="bg-white/5 backdrop-blur rounded-2xl p-7 text-center group reveal border border-white/10 hover:bg-white/10 transition-colors duration-500">
                <div className="w-14 h-14 rounded-xl bg-[#d8e93b]/20 flex items-center justify-center mx-auto mb-5 transition-transform duration-500 group-hover:scale-110">
                  <item.icon className="w-7 h-7 text-[#d8e93b]" />
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Past Events Gallery ─────────── */}
      <section className="section-padding bg-[#f5f7f5]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="eyebrow mb-3">Looking Back</p>
            <h2 className="section-title">Past Events Highlights</h2>
            <p className="text-[#6d7974] text-lg mt-4 leading-relaxed">
              A glimpse of the impactful events we've hosted with our community of supporters, volunteers, and families.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 stagger">
            {pastEvents.map((ev) => (
              <div key={ev.title} className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-500 reveal">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img src={ev.image} alt={ev.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123e35]/70 to-transparent opacity-70" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white/80 text-xs font-semibold mb-1">{ev.date}</p>
                    <p className="text-white font-bold text-lg leading-snug">{ev.title}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1.5 text-[#6d7974]"><MapPin className="w-4 h-4 text-[#3e8f75]" /> {ev.venue}</span>
                    <span className="flex items-center gap-1.5 text-[#6d7974]"><Users className="w-4 h-4 text-[#3e8f75]" /> {ev.attendees}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Host an Event CTA ─────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="rounded-3xl bg-[#123e35] px-6 py-16 text-center reveal relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d8e93b]/10 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#3e8f75]/20 rounded-full translate-y-1/3 -translate-x-1/3" />
            <div className="relative">
              <h2 className="text-white text-3xl lg:text-4xl font-extrabold mb-4">Want to Host or Partner on an Event?</h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
                We collaborate with organizations, schools, and community groups to create impactful events.
                Let's work together to build a more inclusive Zanzibar.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact-2" className="btn btn-accent">Contact Us <ArrowRight className="w-4 h-4" /></Link>
                <Link to="/become-volunteers" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Volunteer</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
