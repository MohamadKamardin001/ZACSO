import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { galleryItems } from '@/data';
import { ArrowRight } from 'lucide-react';

export default function PortfolioPage() {
  useReveal();

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/6646778/pexels-photo-6646778.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#123e35]/80" />
        </div>
        <div className="relative container text-center">
          <p className="eyebrow text-[#d8e93b] mb-3">Portfolio</p>
          <h1 className="text-white font-extrabold" style={{ fontSize: 'var(--text-hero-inner)' }}>Our Work in Action</h1>
          <nav className="flex items-center justify-center gap-2 mt-4 text-sm text-white/70">
            <Link to="/" className="hover:text-[#d8e93b] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Portfolio</span>
          </nav>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12 reveal">
            <p className="eyebrow mb-3">Gallery</p>
            <h2 className="section-title">A Visual Journey of Our Impact</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {galleryItems.map((item) => (
              <div key={item.id} className="relative group rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={item.image} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123e35]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-semibold text-lg">{item.label}</span>
                </div>
              </div>
            ))}
            {/* Extra images for fuller grid */}
            <div className="relative group rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="https://images.pexels.com/photos/9090750/pexels-photo-9090750.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop" alt="Community support" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123e35]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4"><span className="text-white font-semibold text-lg">Outreach</span></div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="https://images.pexels.com/photos/17727975/pexels-photo-17727975.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop" alt="Children playing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123e35]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4"><span className="text-white font-semibold text-lg">Play</span></div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="https://images.pexels.com/photos/8804775/pexels-photo-8804775.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop" alt="Beach soccer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123e35]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4"><span className="text-white font-semibold text-lg">Sports</span></div>
            </div>
          </div>

          <div className="text-center mt-12 reveal">
            <Link to="/donations" className="btn btn-primary">
              Support Our Work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
