import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import {
  ChevronDown, Search, HelpCircle, Mail, Phone, ArrowRight,
  MessageCircle, Users, Heart, Target, Sparkles, HandHeart,
} from 'lucide-react';
import { faqGroups, siteConfig } from '@/data';
import { useState } from 'react';

const extraFaqs = [
  {
    category: 'About Autism',
    icon: Sparkles,
    items: [
      { question: 'What is autism?', answer: 'Autism, or Autism Spectrum Disorder (ASD), is a lifelong developmental condition that affects how a person communicates, interacts with others, and experiences the world. It is a spectrum, meaning it affects each person differently — some may need significant support, while others live independently.' },
      { question: 'How common is autism in Zanzibar?', answer: 'While there is no comprehensive data specific to Zanzibar, global estimates suggest 1 in 100 children is on the autism spectrum. ZACSO is working to improve data collection and awareness so that every child can receive the support they need.' },
      { question: 'What are the early signs of autism?', answer: 'Early signs can include delayed speech, limited eye contact, repetitive behaviors, sensitivity to sensory input, and difficulty with social interaction. If you notice these signs, we encourage you to seek a professional assessment.' },
      { question: 'Can autism be cured?', answer: 'Autism is not a disease to be cured — it is a different way of experiencing the world. With the right support, therapy, and understanding, individuals with autism can thrive and lead fulfilling lives.' },
      { question: 'How is autism diagnosed?', answer: 'Autism is diagnosed through a comprehensive assessment by qualified healthcare professionals, typically involving developmental screening, behavioral observation, and parent interviews. ZACSO can help connect families with diagnostic services.' },
    ],
  },
  {
    category: 'Getting Support',
    icon: Heart,
    items: [
      { question: 'How can ZACSO help my family?', answer: 'We offer therapy subsidies, parent support groups, counseling, educational support, and community advocacy. Contact us to discuss your family\'s specific needs and how we can help.' },
      { question: 'Are your services free?', answer: 'Many of our services are free or heavily subsidized thanks to our donors and partners. Therapy subsidies are provided based on financial need. Contact us to learn more about specific programs.' },
      { question: 'Do you work with schools?', answer: 'Yes. We partner with schools across Zanzibar to promote inclusive education, train teachers, and support students with autism in mainstream classrooms.' },
      { question: 'Can you help with diagnosis?', answer: 'While we do not provide diagnoses directly, we can refer families to qualified healthcare professionals and help navigate the diagnostic process.' },
    ],
  },
];

const quickLinks = [
  { icon: Heart, title: 'Donate', text: 'Support our programs', link: '/donations' },
  { icon: Users, title: 'Volunteer', text: 'Join our team', link: '/become-volunteers' },
  { icon: Target, title: 'Our Programs', text: 'Explore our work', link: '/portfolio' },
  { icon: HandHeart, title: 'Contact Us', text: 'Get in touch', link: '/contact-2' },
];

export default function FaqPage() {
  useReveal();
  const [openIndex, setOpenIndex] = useState<string | null>('0-0');
  const [search, setSearch] = useState('');

  const allGroups = [...faqGroups, ...extraFaqs];

  const filteredGroups = search
    ? allGroups
        .map((group) => ({
          ...group,
          items: group.items.filter(
            (item) =>
              item.question.toLowerCase().includes(search.toLowerCase()) ||
              item.answer.toLowerCase().includes(search.toLowerCase())
          ),
        }))
        .filter((group) => group.items.length > 0)
    : allGroups;

  return (
    <>
      {/* ─────────── Page Hero ─────────── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/8386136/pexels-photo-8386136.jpeg?auto=compress&cs=tinysrgb&w=1920&h=700&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#123e35]/80" />
        </div>
        <div className="relative container text-center">
          <p className="eyebrow text-[#d8e93b] mb-3">FAQ</p>
          <h1 className="text-white font-extrabold" style={{ fontSize: 'var(--text-hero-inner)' }}>
            Frequently Asked Questions
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            Find answers to common questions about ZACSO, autism, our programs, and how you can
            get involved in building a more inclusive Zanzibar.
          </p>
          <nav className="flex items-center justify-center gap-2 mt-6 text-sm text-white/70">
            <Link to="/" className="hover:text-[#d8e93b] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">FAQ</span>
          </nav>
        </div>
      </section>

      {/* ─────────── Quick Links ─────────── */}
      <section className="section-padding pb-0">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger">
            {quickLinks.map((link) => (
              <Link key={link.title} to={link.link} className="card p-6 flex items-center gap-4 group reveal hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#3e8f75]/10 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-[#3e8f75]">
                  <link.icon className="w-6 h-6 text-[#3e8f75] transition-colors duration-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="font-bold text-[#123e35] text-sm">{link.title}</p>
                  <p className="text-xs text-[#6d7974]">{link.text}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#3e8f75] ml-auto group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Search + FAQ ─────────── */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          {/* Search bar */}
          <div className="relative mb-12 reveal">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6d7974]" />
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field pl-12"
            />
          </div>

          {filteredGroups.length === 0 ? (
            <div className="text-center py-20">
              <HelpCircle className="w-12 h-12 text-[#c8d4cc] mx-auto mb-4" />
              <p className="text-[#6d7974] text-lg">No questions found matching your search.</p>
              <button onClick={() => setSearch('')} className="btn btn-outline mt-5 text-sm">
                Clear Search
              </button>
            </div>
          ) : (
            filteredGroups.map((group, gi) => (
              <div key={group.title} className="mb-12 reveal">
                <div className="flex items-center gap-3 mb-6">
                  {'icon' in group && group.icon ? (
                    <div className="w-10 h-10 rounded-xl bg-[#3e8f75]/10 flex items-center justify-center">
                      {(group as any).icon && (() => {
                        const Icon = (group as any).icon;
                        return <Icon className="w-5 h-5 text-[#3e8f75]" />;
                      })()}
                    </div>
                  ) : null}
                  <h2 className="text-2xl font-bold text-[#123e35]">{group.title}</h2>
                </div>
                <div className="space-y-3">
                  {group.items.map((item, ii) => {
                    const key = `${gi}-${ii}`;
                    const isOpen = openIndex === key;
                    return (
                      <div key={key} className="card overflow-hidden">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : key)}
                          className="w-full flex items-center justify-between p-5 text-left"
                        >
                          <span className="font-semibold text-[#123e35]">{item.question}</span>
                          <ChevronDown className={`w-5 h-5 text-[#3e8f75] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                          <p className="px-5 pb-5 text-[#6d7974] leading-relaxed">{item.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* ─────────── Still Have Questions CTA ─────────── */}
      <section className="section-padding bg-[#f5f7f5]">
        <div className="container">
          <div className="rounded-3xl bg-[#123e35] px-6 py-16 text-center reveal relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d8e93b]/10 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#3e8f75]/20 rounded-full translate-y-1/3 -translate-x-1/3" />
            <div className="relative">
              <MessageCircle className="w-12 h-12 text-[#d8e93b] mx-auto mb-4" />
              <h2 className="text-white text-3xl lg:text-4xl font-extrabold mb-4">Still Have Questions?</h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
                We're here to help. Reach out to our team and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact-2" className="btn btn-accent">Contact Us <ArrowRight className="w-4 h-4" /></Link>
                <a href={`mailto:${siteConfig.primaryEmail}`} className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
                  <Mail className="w-4 h-4" /> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
