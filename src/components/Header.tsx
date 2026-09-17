import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Heart, Menu, X, ChevronDown, Mail, Phone, MapPin } from 'lucide-react';
import { navItems, siteConfig } from '@/data';
import type { NavItem } from '@/types';

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

export default function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Utility bar */}
      <div className={`hidden lg:block bg-[#123e35] text-white transition-all duration-300 ${scrolled ? 'max-h-0 overflow-hidden opacity-0' : 'max-h-20 opacity-100'}`}>
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-6 text-sm">
            <a href={`mailto:${siteConfig.primaryEmail}`} className="flex items-center gap-2 hover:text-[#d8e93b] transition-colors">
              <Mail className="w-4 h-4" /> {siteConfig.primaryEmail}
            </a>
            <a href={`tel:${siteConfig.primaryPhone}`} className="flex items-center gap-2 hover:text-[#d8e93b] transition-colors">
              <Phone className="w-4 h-4" /> {siteConfig.primaryPhone}
            </a>
            <span className="flex items-center gap-2 text-white/80">
              <MapPin className="w-4 h-4" /> {siteConfig.address}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {siteConfig.socialLinks.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#d8e93b] hover:text-[#123e35] flex items-center justify-center transition-all duration-300">
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={`bg-white transition-all duration-300 ${scrolled ? 'shadow-[0_4px_18px_rgba(10,37,29,0.12)]' : ''}`}>
        <div className="container flex items-center justify-between" style={{ height: 'var(--header-nav-height)' }}>
          {/* Logo */}
          <Link to="/" className="flex items-center group" aria-label="ZACSO home">
            <img
              src="/zacso.png"
              alt="ZACSO — Zanzibar Autism Care and Support Organisation"
              className="h-12 w-auto max-w-[220px] object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item: NavItem) => (
              <div key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 px-4 py-2 text-[15px] font-medium rounded-lg transition-all duration-300 ${
                    isActive(item.path) ? 'text-[#3e8f75]' : 'text-[#1c2421] hover:text-[#3e8f75]'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>
                {item.hasDropdown && item.children && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-[0_16px_42px_rgba(17,58,47,0.13)] border border-[#e2e9e4] py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-4 py-2.5 text-sm font-medium rounded-lg mx-2 transition-colors ${
                          isActive(child.path) ? 'text-[#3e8f75] bg-[#f5f7f5]' : 'text-[#1c2421] hover:bg-[#f5f7f5] hover:text-[#3e8f75]'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link to="/donations" className="btn btn-primary">
              <Heart className="w-4 h-4" /> Donate Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[#123e35]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#e2e9e4] shadow-lg max-h-[calc(100vh-60px)] overflow-y-auto">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive(item.path) ? 'text-[#3e8f75] bg-[#f5f7f5]' : 'text-[#1c2421] hover:bg-[#f5f7f5]'
                  }`}
                >
                  {item.label}
                </Link>
                {item.hasDropdown && item.children && (
                  <div className="ml-4 mt-1 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                          isActive(child.path) ? 'text-[#3e8f75] bg-[#f5f7f5]' : 'text-[#6d7974] hover:bg-[#f5f7f5]'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/donations" className="btn btn-primary mt-3 w-full">
              <Heart className="w-4 h-4" /> Donate Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
