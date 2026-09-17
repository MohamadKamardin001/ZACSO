import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { ChevronDown } from 'lucide-react';
import { faqGroups } from '@/data';
import { useState } from 'react';

export default function FaqPage() {
  useReveal();
  const [openIndex, setOpenIndex] = useState<string | null>('0-0');

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/8386136/pexels-photo-8386136.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#123e35]/80" />
        </div>
        <div className="relative container text-center">
          <p className="eyebrow text-[#d8e93b] mb-3">FAQ</p>
          <h1 className="text-white font-extrabold" style={{ fontSize: 'var(--text-hero-inner)' }}>Frequently Asked Questions</h1>
          <nav className="flex items-center justify-center gap-2 mt-4 text-sm text-white/70">
            <Link to="/" className="hover:text-[#d8e93b] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">FAQ</span>
          </nav>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-3xl">
          {faqGroups.map((group, gi) => (
            <div key={group.title} className="mb-12 reveal">
              <h2 className="text-2xl font-bold mb-6 text-[#123e35]">{group.title}</h2>
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
                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60' : 'max-h-0'}`}>
                        <p className="px-5 pb-5 text-[#6d7974] leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
