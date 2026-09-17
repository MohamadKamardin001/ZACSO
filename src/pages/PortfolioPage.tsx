import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import {
  ArrowRight, Heart, Users, GraduationCap, Stethoscope,
  Home, Sparkles, TrendingUp, Quote, Star, CheckCircle2,
} from 'lucide-react';
import { galleryItems, metrics } from '@/data';
import { useState } from 'react';

const portfolioCategories = [
  { id: 'all', label: 'All' },
  { id: 'Education', label: 'Education' },
  { id: 'Healthcare', label: 'Healthcare' },
  { id: 'Community', label: 'Community' },
  { id: 'Outreach', label: 'Outreach' },
];

const portfolioItems = [
  ...galleryItems.map((g) => ({ ...g, category: g.label === 'Education' ? 'Education' : g.label === 'Medical' ? 'Healthcare' : g.label === 'Fundraising' ? 'Community' : 'Outreach' })),
  { id: 'p5', label: 'Outreach', image: 'https://images.pexels.com/photos/9090750/pexels-photo-9090750.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', category: 'Outreach' },
  { id: 'p6', label: 'Play', image: 'https://images.pexels.com/photos/17727975/pexels-photo-17727975.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', category: 'Community' },
  { id: 'p7', label: 'Sports', image: 'https://images.pexels.com/photos/8804775/pexels-photo-8804775.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', category: 'Community' },
  { id: 'p8', label: 'Training', image: 'https://images.pexels.com/photos/5324985/pexels-photo-5324985.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', category: 'Education' },
  { id: 'p9', label: 'Therapy', image: 'https://images.pexels.com/photos/18788957/pexels-photo-18788957.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', category: 'Healthcare' },
  { id: 'p10', label: 'Workshop', image: 'https://images.pexels.com/photos/8042458/pexels-photo-8042458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', category: 'Outreach' },
  { id: 'p11', label: 'Support', image: 'https://images.pexels.com/photos/6646926/pexels-photo-6646926.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', category: 'Community' },
  { id: 'p12', label: 'Awareness', image: 'https://images.pexels.com/photos/17321854/pexels-photo-17321854.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', category: 'Outreach' },
];

const projectHighlights = [
  {
    title: 'Inclusive Education Initiative',
    category: 'Education',
    image: 'https://images.pexels.com/photos/31763369/pexels-photo-31763369.jpeg?auto=compress&cs=tinysrgb&w=770&h=500&fit=crop',
    description: 'We partnered with 12 schools across Zanzibar to implement inclusive education practices, training over 80 teachers and supporting 45 students with autism in mainstream classrooms.',
    stats: [
      { value: '12', label: 'Schools Partnered' },
      { value: '80+', label: 'Teachers Trained' },
      { value: '45', label: 'Students Supported' },
    ],
  },
  {
    title: 'Therapy Subsidy Program',
    category: 'Healthcare',
    image: 'https://images.pexels.com/photos/18788957/pexels-photo-18788957.jpeg?auto=compress&cs=tinysrgb&w=770&h=500&fit=crop',
    description: 'Our therapy subsidy program helps families afford critical speech, occupational, and behavioral therapy sessions. To date, we have subsidized over 300 sessions for 35 children.',
    stats: [
      { value: '300+', label: 'Sessions Subsidized' },
      { value: '35', label: 'Children Helped' },
      { value: '$15K', label: 'Subsidies Provided' },
    ],
  },
  {
    title: 'Rural Awareness Campaign',
    category: 'Outreach',
    image: 'https://images.pexels.com/photos/17321854/pexels-photo-17321854.jpeg?auto=compress&cs=tinysrgb&w=770&h=500&fit=crop',
    description: 'We brought autism awareness to rural communities across Zanzibar that had never heard of autism, reaching over 2,000 community members through workshops, media, and community events.',
    stats: [
      { value: '2,000+', label: 'People Reached' },
      { value: '15', label: 'Villages Visited' },
      { value: '8', label: 'Radio Shows' },
    ],
  },
];

const impactStories = [
  {
    quote: 'My son was non-verbal when we joined ZACSO. After six months of therapy and support from their education program, he said his first words. I will never forget that moment.',
    name: 'Mariam A.',
    role: 'Parent',
    img: 'https://images.pexels.com/photos/10850674/pexels-photo-10850674.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop',
  },
  {
    quote: 'The teacher training ZACSO provided transformed how I run my classroom. I now have the tools to support students with autism alongside their peers.',
    name: 'Teacher Hassan',
    role: 'Partner School Teacher',
    img: 'https://images.pexels.com/photos/13392786/pexels-photo-13392786.png?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop',
  },
  {
    quote: 'Through the rural awareness campaign, our village learned about autism for the first time. The stigma is lifting, and families are no longer hiding their children.',
    name: 'Chief Abdulla',
    role: 'Community Leader',
    img: 'https://images.pexels.com/photos/19399318/pexels-photo-19399318.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop',
  },
];

const whatWeDo = [
  { icon: Stethoscope, title: 'Therapy & Intervention', text: 'Speech, occupational, and behavioral therapy subsidies for families in need.' },
  { icon: GraduationCap, title: 'Inclusive Education', text: 'Teacher training, school partnerships, and learning material support.' },
  { icon: Users, title: 'Family Support', text: 'Counseling, support groups, and resource navigation for families.' },
  { icon: Home, title: 'Community Outreach', text: 'Awareness campaigns, media engagement, and cultural sensitivity training.' },
];

export default function PortfolioPage() {
  useReveal();
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* ─────────── Page Hero ─────────── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/6646778/pexels-photo-6646778.jpeg?auto=compress&cs=tinysrgb&w=1920&h=700&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#123e35]/80" />
        </div>
        <div className="relative container text-center">
          <p className="eyebrow text-[#d8e93b] mb-3">Portfolio</p>
          <h1 className="text-white font-extrabold" style={{ fontSize: 'var(--text-hero-inner)' }}>
            Our Work in Action
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            Explore the projects, programs, and initiatives that are creating lasting change for
            individuals with autism and their families across Zanzibar.
          </p>
          <nav className="flex items-center justify-center gap-2 mt-6 text-sm text-white/70">
            <Link to="/" className="hover:text-[#d8e93b] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Portfolio</span>
          </nav>
        </div>
      </section>

      {/* ─────────── Impact Metrics ─────────── */}
      <section className="bg-[#123e35] py-10">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-extrabold text-[#d8e93b]">{m.value}</p>
                <p className="text-white/70 text-sm font-medium mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── What We Do ─────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="eyebrow mb-3">Our Programs</p>
            <h2 className="section-title">What We Do</h2>
            <p className="text-[#6d7974] text-lg mt-4 leading-relaxed">
              Our work spans four key areas, each designed to address a critical need in the autism community.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            {whatWeDo.map((item) => (
              <div key={item.title} className="card p-7 text-center group reveal">
                <div className="w-14 h-14 rounded-xl bg-[#3e8f75]/10 flex items-center justify-center mx-auto mb-5 transition-all duration-500 group-hover:bg-[#3e8f75] group-hover:scale-110">
                  <item.icon className="w-7 h-7 text-[#3e8f75] transition-colors duration-500 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#123e35] mb-2">{item.title}</h3>
                <p className="text-[#6d7974] leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Filterable Gallery ─────────── */}
      <section className="section-padding bg-[#f5f7f5]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10 reveal">
            <p className="eyebrow mb-3">Gallery</p>
            <h2 className="section-title">A Visual Journey of Our Impact</h2>
            <p className="text-[#6d7974] text-lg mt-4 leading-relaxed">
              Browse our gallery to see the faces, moments, and milestones that define our work.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 reveal">
            {portfolioCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#3e8f75] text-white shadow-md'
                    : 'bg-white text-[#1c2421] hover:bg-[#e8efea]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {filtered.map((item) => (
              <div key={item.id} className="relative group rounded-2xl overflow-hidden aspect-[4/3] reveal">
                <img src={item.image} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123e35]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-[#3e8f75] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">{item.category}</span>
                  <p className="text-white font-bold text-lg">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Project Highlights ─────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="eyebrow mb-3">Featured Projects</p>
            <h2 className="section-title">Project Highlights</h2>
            <p className="text-[#6d7974] text-lg mt-4 leading-relaxed">
              Deep dives into some of our most impactful initiatives and the measurable change they've created.
            </p>
          </div>
          <div className="space-y-12">
            {projectHighlights.map((project, i) => (
              <div key={project.title} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`reveal ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="img-wrap aspect-[3/2]">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className={`reveal ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <span className="inline-block bg-[#3e8f75]/10 text-[#3e8f75] text-xs font-bold px-3 py-1 rounded-full mb-4">{project.category}</span>
                  <h3 className="text-2xl font-extrabold text-[#123e35] mb-4">{project.title}</h3>
                  <p className="text-[#6d7974] text-lg leading-relaxed mb-6">{project.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="text-center p-4 rounded-xl bg-[#f5f7f5]">
                        <p className="text-2xl font-extrabold text-[#3e8f75]">{stat.value}</p>
                        <p className="text-xs text-[#6d7974] font-medium mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Impact Stories ─────────── */}
      <section className="section-padding bg-[#123e35] relative overflow-hidden">
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="eyebrow text-[#d8e93b] mb-3">Impact Stories</p>
            <h2 className="section-title text-white">Lives Changed, Stories Told</h2>
            <p className="text-white/70 text-lg mt-4 leading-relaxed">
              Behind every statistic is a real person, a real family, and a real story of transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 stagger">
            {impactStories.map((s) => (
              <div key={s.name} className="bg-white/5 backdrop-blur rounded-2xl p-7 border border-white/10 hover:bg-white/10 transition-colors duration-500 reveal">
                <Quote className="w-8 h-8 text-[#d8e93b] mb-4" />
                <p className="text-white/90 leading-relaxed mb-6 italic">"{s.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <img src={s.img} alt={s.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-white text-sm">{s.name}</p>
                    <p className="text-[#d8e93b] text-xs font-medium">{s.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#f2c94c] fill-[#f2c94c]" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="rounded-3xl bg-[#123e35] px-6 py-16 text-center reveal relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d8e93b]/10 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#3e8f75]/20 rounded-full translate-y-1/3 -translate-x-1/3" />
            <div className="relative">
              <Sparkles className="w-12 h-12 text-[#d8e93b] mx-auto mb-4" />
              <h2 className="text-white text-3xl lg:text-4xl font-extrabold mb-4">Be Part of the Next Chapter</h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
                Every project you see here was made possible by people like you. Support our work
                and help us write the next success story.
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
