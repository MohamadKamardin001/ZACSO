import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { ArrowRight, Calendar, User, Search } from 'lucide-react';
import { posts } from '@/data';
import { useState } from 'react';

export default function BlogPage() {
  useReveal();
  const [search, setSearch] = useState('');

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/8709283/pexels-photo-8709283.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#123e35]/80" />
        </div>
        <div className="relative container text-center">
          <p className="eyebrow text-[#d8e93b] mb-3">Blog</p>
          <h1 className="text-white font-extrabold" style={{ fontSize: 'var(--text-hero-inner)' }}>News & Updates</h1>
          <nav className="flex items-center justify-center gap-2 mt-4 text-sm text-white/70">
            <Link to="/" className="hover:text-[#d8e93b] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Blog</span>
          </nav>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="flex justify-center mb-10 reveal">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6d7974]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-field pl-12"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-[#6d7974] text-lg py-20">No articles found matching your search.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
              {filtered.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="card group flex flex-col">
                  <div className="img-wrap aspect-[16/10]">
                    <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-[#6d7974] mb-3">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.publishedAt}</span>
                      <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-[#123e35] leading-snug group-hover:text-[#3e8f75] transition-colors">{post.title}</h3>
                    <p className="text-sm text-[#6d7974] leading-relaxed flex-1">{post.excerpt}</p>
                    <span className="text-sm font-semibold text-[#3e8f75] mt-4 inline-flex items-center gap-1.5 group-hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
