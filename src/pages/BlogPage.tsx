import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import {
  ArrowRight, Calendar, User, Search, Tag, TrendingUp,
  Mail, Clock, ChevronRight, FolderOpen,
} from 'lucide-react';
import { posts, events, siteConfig } from '@/data';
import { useState } from 'react';

const categories = [
  { name: 'All', count: posts.length },
  { name: 'Uncategorized', count: posts.filter((p) => p.category === 'Uncategorized').length },
  { name: 'Advocacy', count: 2 },
  { name: 'Community', count: 3 },
  { name: 'Events', count: 1 },
];

const tags = ['Autism', 'Zanzibar', 'Awareness', 'Advocacy', 'Community', 'Tawahudi', 'Usonji', 'Support', 'Education', 'Family'];

const popularPosts = [
  { ...posts[0], readTime: '4 min read' },
  { ...posts[1], readTime: '3 min read' },
  { ...posts[2], readTime: '2 min read' },
];

export default function BlogPage() {
  useReveal();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const filtered = posts.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featured = posts[0];
  const remaining = filtered.filter((p) => p.id !== featured.id || activeCategory !== 'All' || search);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
  };

  return (
    <>
      {/* ─────────── Page Hero ─────────── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/8709283/pexels-photo-8709283.jpeg?auto=compress&cs=tinysrgb&w=1920&h=700&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#123e35]/80" />
        </div>
        <div className="relative container text-center">
          <p className="eyebrow text-[#d8e93b] mb-3">Blog</p>
          <h1 className="text-white font-extrabold" style={{ fontSize: 'var(--text-hero-inner)' }}>
            News & Updates
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            Stay informed about ZACSO's latest activities, advocacy efforts, community programs,
            and stories from the autism community in Zanzibar.
          </p>
          <nav className="flex items-center justify-center gap-2 mt-6 text-sm text-white/70">
            <Link to="/" className="hover:text-[#d8e93b] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Blog</span>
          </nav>
        </div>
      </section>

      {/* ─────────── Featured Post ─────────── */}
      {activeCategory === 'All' && !search && (
        <section className="section-padding pb-0">
          <div className="container">
            <div className="flex items-center gap-3 mb-6 reveal">
              <span className="inline-flex items-center gap-2 bg-[#d8e93b] text-[#123e35] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide">
                <TrendingUp className="w-4 h-4" /> Featured Post
              </span>
            </div>
            <Link to={`/blog/${featured.slug}`} className="card group block reveal overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img src={featured.featuredImage} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123e35]/40 to-transparent lg:bg-gradient-to-r" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-xs text-[#6d7974] mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {featured.publishedAt}</span>
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {featured.author}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 4 min read</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-extrabold text-[#123e35] mb-4 leading-tight group-hover:text-[#3e8f75] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-[#6d7974] text-base leading-relaxed mb-6">{featured.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-[#3e8f75] font-semibold text-sm group-hover:gap-4 transition-all">
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ─────────── Main Blog + Sidebar ─────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10 xl:gap-14">
            {/* ── Main Blog Cards ── */}
            <div>
              {/* Section heading */}
              <div className="flex items-center justify-between mb-8 reveal">
                <div>
                  <p className="eyebrow mb-1">Latest Articles</p>
                  <h2 className="text-2xl font-extrabold text-[#123e35]">Recent Posts</h2>
                </div>
                <span className="text-sm text-[#6d7974] font-medium">{filtered.length} article{filtered.length !== 1 ? 's' : ''}</span>
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <Search className="w-12 h-12 text-[#c8d4cc] mx-auto mb-4" />
                  <p className="text-[#6d7974] text-lg">No articles found matching your search.</p>
                  <button
                    onClick={() => { setSearch(''); setActiveCategory('All'); }}
                    className="btn btn-outline mt-5 text-sm"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-6 stagger">
                  {(search || activeCategory !== 'All' ? filtered : remaining).map((post) => (
                    <Link key={post.id} to={`/blog/${post.slug}`} className="card group flex flex-col reveal">
                      <div className="img-wrap aspect-[16/10]">
                        <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-xs text-[#6d7974] mb-3">
                          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.publishedAt}</span>
                          <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-[#123e35] leading-snug group-hover:text-[#3e8f75] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-[#6d7974] leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between pt-4 border-t border-[#e2e9e4]">
                          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3e8f75] group-hover:gap-3 transition-all">
                            Read More <ArrowRight className="w-4 h-4" />
                          </span>
                          <span className="text-xs text-[#8a9a93] flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" /> {Math.max(2, Math.ceil(post.content.length / 200))} min read
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {filtered.length > 0 && (
                <div className="flex items-center justify-center gap-2 mt-12 reveal">
                  <button className="w-10 h-10 rounded-lg flex items-center justify-center text-[#6d7974] hover:bg-[#f5f7f5] transition-colors disabled:opacity-40" disabled>
                    <ChevronRight className="w-5 h-5 rotate-180" />
                  </button>
                  {[1].map((n) => (
                    <button
                      key={n}
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm bg-[#3e8f75] text-white"
                    >
                      {n}
                    </button>
                  ))}
                  <button className="w-10 h-10 rounded-lg flex items-center justify-center text-[#6d7974] hover:bg-[#f5f7f5] transition-colors disabled:opacity-40" disabled>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
              {/* Search */}
              <div className="card p-6 reveal">
                <h3 className="text-lg font-bold text-[#123e35] mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5 text-[#3e8f75]" /> Search
                </h3>
                <div className="relative">
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

              {/* Categories */}
              <div className="card p-6 reveal">
                <h3 className="text-lg font-bold text-[#123e35] mb-4 flex items-center gap-2">
                  <FolderOpen className="w-5 h-5 text-[#3e8f75]" /> Categories
                </h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setActiveCategory(cat.name)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeCategory === cat.name
                          ? 'bg-[#3e8f75] text-white'
                          : 'text-[#1c2421] hover:bg-[#f5f7f5]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Tag className="w-3.5 h-3.5" /> {cat.name}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                        activeCategory === cat.name ? 'bg-white/20' : 'bg-[#f5f7f5] text-[#6d7974]'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="card p-6 reveal">
                <h3 className="text-lg font-bold text-[#123e35] mb-5 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#3e8f75]" /> Popular Posts
                </h3>
                <div className="space-y-4">
                  {popularPosts.map((post, i) => (
                    <Link key={post.id} to={`/blog/${post.slug}`} className="flex gap-3 group">
                      <span className="text-2xl font-extrabold text-[#e2e9e4] leading-none w-8 flex-shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-[#123e35] leading-snug mb-1 group-hover:text-[#3e8f75] transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-3 text-xs text-[#8a9a93]">
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.publishedAt}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="card p-6 reveal">
                <h3 className="text-lg font-bold text-[#123e35] mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-[#3e8f75]" /> Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearch(tag)}
                      className="px-3 py-1.5 rounded-full bg-[#f5f7f5] text-[#1c2421] text-xs font-medium hover:bg-[#3e8f75] hover:text-white transition-all duration-300"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="card p-6 reveal">
                <h3 className="text-lg font-bold text-[#123e35] mb-5 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#3e8f75]" /> Upcoming Events
                </h3>
                <div className="space-y-4">
                  {events.slice(0, 3).map((ev) => (
                    <Link key={ev.id} to="/events-2" className="flex gap-4 group">
                      <div className="w-14 h-14 rounded-xl bg-[#3e8f75]/10 flex flex-col items-center justify-center flex-shrink-0">
                        <span className="text-lg font-extrabold text-[#3e8f75] leading-none">
                          {ev.date.split(' ')[1].replace(',', '')}
                        </span>
                        <span className="text-[10px] font-bold text-[#3e8f75] uppercase mt-0.5">
                          {ev.date.split(' ')[0]}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-[#123e35] leading-snug mb-1 group-hover:text-[#3e8f75] transition-colors line-clamp-2">
                          {ev.title}
                        </h4>
                        <p className="text-xs text-[#8a9a93]">{ev.venue}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="rounded-2xl bg-[#123e35] p-6 reveal relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#d8e93b]/10 rounded-full" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-[#d8e93b]/20 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-[#d8e93b]" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Subscribe to Our Newsletter</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">
                    Get the latest updates, stories, and news from ZACSO delivered straight to your inbox.
                  </p>
                  {subscribed ? (
                    <div className="text-center py-3">
                      <p className="text-[#d8e93b] font-semibold text-sm">You're subscribed! Thank you.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email address"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#d8e93b] focus:bg-white/15 transition-all"
                      />
                      <button type="submit" className="btn btn-accent w-full text-sm">
                        Subscribe Now <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </aside>
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
              <h2 className="text-white text-3xl lg:text-4xl font-extrabold mb-4">Want to Be Part of the Story?</h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
                Every story we share is made possible by people like you. Support our mission and help
                us write the next chapter for autism awareness in Zanzibar.
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
