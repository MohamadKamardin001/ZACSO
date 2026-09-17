import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { events } from '@/data';

export default function EventsPage() {
  useReveal();

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/9090746/pexels-photo-9090746.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#123e35]/80" />
        </div>
        <div className="relative container text-center">
          <p className="eyebrow text-[#d8e93b] mb-3">Events</p>
          <h1 className="text-white font-extrabold" style={{ fontSize: 'var(--text-hero-inner)' }}>Upcoming Events</h1>
          <nav className="flex items-center justify-center gap-2 mt-4 text-sm text-white/70">
            <Link to="/" className="hover:text-[#d8e93b] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Events</span>
          </nav>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {events.map((event) => (
              <div key={event.id} className="card group flex flex-col">
                <div className="img-wrap aspect-[16/10] relative">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-[#3e8f75] text-white rounded-xl px-3 py-2 text-center">
                    <p className="text-xs font-semibold uppercase leading-none">{event.date.split(' ')[0]}</p>
                    <p className="text-lg font-extrabold leading-tight">{event.date.split(' ')[1].replace(',', '')}</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-2 text-[#123e35] leading-snug">{event.title}</h3>
                  <p className="text-sm text-[#6d7974] leading-relaxed flex-1 mb-4">{event.excerpt}</p>
                  <div className="space-y-2 text-sm text-[#6d7974]">
                    <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#3e8f75]" /> {event.date}</p>
                    <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#3e8f75]" /> {event.time}</p>
                    <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#3e8f75]" /> {event.venue}</p>
                  </div>
                  <Link to="/contact-2" className="btn btn-primary mt-5 w-full">
                    Register <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
