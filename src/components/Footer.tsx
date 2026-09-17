import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { siteConfig, navItems } from '@/data';

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, string> = {
    facebook: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
    twitter: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    instagram: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
    youtube: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  };
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d={icons[name] || icons.facebook} />
    </svg>
  );
}

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#123e35] text-white">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* About */}
          <div>
            <Link to="/" className="inline-flex items-center mb-5" aria-label="ZACSO home">
              <img
                src="/zacso.png"
                alt="ZACSO — Zanzibar Autism Care and Support Organisation"
                className="h-16 w-auto max-w-[270px] object-contain transition-transform duration-500 hover:scale-[1.03]"
              />
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-5">{siteConfig.footerCopy}</p>
            <div className="flex items-center gap-3">
              {siteConfig.socialLinks.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#d8e93b] hover:text-[#123e35] flex items-center justify-center transition-all duration-300">
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-white/70 hover:text-[#d8e93b] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-white">Our Programs</h4>
            <ul className="space-y-3">
              {navItems[2].children?.map((child) => (
                <li key={child.path}>
                  <Link to={child.path} className="text-sm text-white/70 hover:text-[#d8e93b] transition-colors">
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-white">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-5 h-5 text-[#d8e93b] flex-shrink-0 mt-0.5" />
                {siteConfig.address}
              </li>
              <li>
                <a href={`mailto:${siteConfig.primaryEmail}`} className="flex items-start gap-3 text-sm text-white/70 hover:text-[#d8e93b] transition-colors">
                  <Mail className="w-5 h-5 text-[#d8e93b] flex-shrink-0 mt-0.5" />
                  {siteConfig.primaryEmail}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.primaryPhone}`} className="flex items-start gap-3 text-sm text-white/70 hover:text-[#d8e93b] transition-colors">
                  <Phone className="w-5 h-5 text-[#d8e93b] flex-shrink-0 mt-0.5" />
                  {siteConfig.primaryPhone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} {siteConfig.siteName}. All rights reserved.
          </p>
          <button onClick={scrollTop} className="w-10 h-10 rounded-full bg-[#3e8f75] hover:bg-[#d8e93b] hover:text-[#123e35] flex items-center justify-center transition-all duration-300" aria-label="Back to top">
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
