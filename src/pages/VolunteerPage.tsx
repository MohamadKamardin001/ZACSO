import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import {
  ArrowRight, CheckCircle2, Users, Heart, Target, HandHeart,
  Sparkles, GraduationCap, Stethoscope, Home, Mic, Palette,
  Calendar, Clock, Star, Quote, Award, Globe, Mail, Phone,
} from 'lucide-react';
import { useState } from 'react';

const volunteerRoles = [
  { icon: Users, title: 'Event Support', text: 'Help plan, coordinate, and run our community events, workshops, and awareness campaigns.', commitment: 'Flexible — 2-3 events/month' },
  { icon: Mic, title: 'Community Outreach', text: 'Engage with families, schools, and community leaders to spread awareness about autism.', commitment: 'Weekly — 4 hrs/week' },
  { icon: GraduationCap, title: 'Education Programs', text: 'Support inclusive education initiatives by working with teachers, parents, and students.', commitment: 'Monthly — 8 hrs/month' },
  { icon: Heart, title: 'Fundraising', text: 'Help organize fundraising campaigns, donor outreach, and community donation drives.', commitment: 'Flexible — project-based' },
  { icon: Palette, title: 'Social Media & Content', text: 'Create content, manage social channels, and help share our stories with a wider audience.', commitment: 'Weekly — 3 hrs/week' },
  { icon: Stethoscope, title: 'Therapy Support', text: 'Assist therapists and families during sessions (requires relevant background or training).', commitment: 'Bi-weekly — 6 hrs/bi-week' },
];

const benefits = [
  { icon: Award, title: 'Skill Development', text: 'Gain valuable experience in community work, event management, and advocacy.' },
  { icon: Users, title: 'Community Network', text: 'Join a passionate community of 200+ volunteers and build lifelong friendships.' },
  { icon: Target, title: 'Real Impact', text: 'See the direct difference your work makes in the lives of families affected by autism.' },
  { icon: GraduationCap, title: 'Training Provided', text: 'Receive comprehensive training on autism awareness, communication, and support.' },
  { icon: Globe, title: 'Certificate & References', text: 'Get a volunteer certificate and professional references for your future career.' },
  { icon: Heart, title: 'Fulfillment', text: 'Experience the joy of knowing your time is creating a more inclusive Zanzibar.' },
];

const process = [
  { num: '01', title: 'Apply Online', text: 'Fill out the volunteer application form with your details and areas of interest.' },
  { num: '02', title: 'Quick Chat', text: 'We\'ll schedule a brief orientation call to get to know you and match you with the right role.' },
  { num: '03', title: 'Training Session', text: 'Complete our autism awareness and volunteer training session (2-3 hours).' },
  { num: '04', title: 'Start Volunteering', text: 'Begin making a difference! You\'ll have ongoing support from our coordinator team.' },
];

const testimonials = [
  {
    quote: 'Volunteering with ZACSO has been the most rewarding experience of my life. Watching children with autism grow and thrive because of our programs is incredible.',
    name: 'Asha M.',
    role: 'Volunteer since 2023',
    img: 'https://images.pexels.com/photos/8312669/pexels-photo-8312669.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop',
  },
  {
    quote: 'I joined as a student volunteer and found a second family. The training and support I received helped me grow both personally and professionally.',
    name: 'Kassim A.',
    role: 'Education Programs Volunteer',
    img: 'https://images.pexels.com/photos/19399318/pexels-photo-19399318.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop',
  },
  {
    quote: 'As a parent of a child with autism, volunteering with ZACSO lets me give back to the community that supported my family when we needed it most.',
    name: 'Zainab H.',
    role: 'Community Outreach Volunteer',
    img: 'https://images.pexels.com/photos/38528495/pexels-photo-38528495.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop',
  },
];

const faqs = [
  { q: 'Do I need experience with autism to volunteer?', a: 'No. We provide comprehensive training on autism awareness and support. All you need is empathy, commitment, and a willingness to learn.' },
  { q: 'What is the minimum time commitment?', a: 'It varies by role — some require as little as 2-3 hours per month, while others ask for weekly involvement. We work with your schedule.' },
  { q: 'Is there an age requirement?', a: 'Volunteers must be at least 16 years old. Minors need parental consent. We welcome volunteers of all ages above that threshold.' },
  { q: 'Can I volunteer remotely?', a: 'Yes. Social media, content creation, and some fundraising roles can be done remotely. We\'ll discuss options during your orientation.' },
  { q: 'Will I receive training?', a: 'Absolutely. Every volunteer completes our autism awareness training, and role-specific training is provided as needed.' },
];

export default function VolunteerPage() {
  useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ─────────── Page Hero ─────────── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/6646852/pexels-photo-6646852.jpeg?auto=compress&cs=tinysrgb&w=1920&h=700&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#123e35]/80" />
        </div>
        <div className="relative container text-center">
          <p className="eyebrow text-[#d8e93b] mb-3">Volunteer</p>
          <h1 className="text-white font-extrabold" style={{ fontSize: 'var(--text-hero-inner)' }}>
            Become a Volunteer
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            Join a community of 200+ volunteers who are changing lives across Zanzibar. Your time,
            skills, and passion can create lasting impact.
          </p>
          <nav className="flex items-center justify-center gap-2 mt-6 text-sm text-white/70">
            <Link to="/" className="hover:text-[#d8e93b] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Volunteer</span>
          </nav>
        </div>
      </section>

      {/* ─────────── Impact Stats Bar ─────────── */}
      <section className="bg-[#123e35] py-10">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '200+', label: 'Active Volunteers' },
              { value: '5,000+', label: 'Hours Given' },
              { value: '60+', label: 'Families Supported' },
              { value: '15+', label: 'Programs Running' },
            ].map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-extrabold text-[#d8e93b]">{m.value}</p>
                <p className="text-white/70 text-sm font-medium mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Intro + Image ─────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative reveal-left">
              <div className="img-wrap aspect-[4/5]">
                <img src="https://images.pexels.com/photos/6646926/pexels-photo-6646926.jpeg?auto=compress&cs=tinysrgb&w=770&h=960&fit=crop" alt="ZACSO volunteers" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#d8e93b] rounded-2xl px-6 py-4 shadow-lg hidden sm:block">
                <p className="text-3xl font-extrabold text-[#123e35]">200+</p>
                <p className="text-sm font-semibold text-[#123e35]/80">Active Volunteers</p>
              </div>
            </div>
            <div className="reveal">
              <p className="eyebrow mb-3">Join Our Team</p>
              <h2 className="section-title mb-5">Make a Difference in Your Community</h2>
              <p className="text-[#6d7974] text-lg leading-relaxed mb-5">
                Volunteers are the heart of ZACSO. By giving your time and skills, you directly impact
                the lives of individuals with autism and their families across Zanzibar.
              </p>
              <p className="text-[#6d7974] leading-relaxed mb-6">
                Whether you have a few hours a month or a few days a week, there's a role for you.
                We provide training, support, and a community that will welcome you with open arms.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Users, title: 'Community', text: 'Join passionate volunteers' },
                  { icon: Heart, title: 'Impact', text: 'Directly change lives' },
                  { icon: Target, title: 'Growth', text: 'Develop new skills' },
                ].map((item) => (
                  <div key={item.title} className="text-center p-4 rounded-xl bg-[#f5f7f5]">
                    <div className="w-12 h-12 rounded-xl bg-[#3e8f75]/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-[#3e8f75]" />
                    </div>
                    <h3 className="font-bold text-[#123e35] mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-[#6d7974]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── Volunteer Roles ─────────── */}
      <section className="section-padding bg-[#f5f7f5]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="eyebrow mb-3">Find Your Role</p>
            <h2 className="section-title">Volunteer Opportunities</h2>
            <p className="text-[#6d7974] text-lg mt-4 leading-relaxed">
              Explore the different ways you can contribute your time and talents to ZACSO.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {volunteerRoles.map((role) => (
              <div key={role.title} className="card p-7 group reveal">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#3e8f75]/10 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-[#3e8f75]">
                    <role.icon className="w-6 h-6 text-[#3e8f75] transition-colors duration-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#123e35]">{role.title}</h3>
                </div>
                <p className="text-[#6d7974] leading-relaxed text-sm mb-4">{role.text}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-[#e2e9e4]">
                  <Clock className="w-4 h-4 text-[#3e8f75]" />
                  <span className="text-xs text-[#6d7974] font-medium">{role.commitment}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Benefits ─────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="eyebrow mb-3">Why Volunteer With Us</p>
            <h2 className="section-title">Benefits of Joining ZACSO</h2>
            <p className="text-[#6d7974] text-lg mt-4 leading-relaxed">
              Volunteering with ZACSO is a two-way street — you give your time, and you gain so much in return.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {benefits.map((b) => (
              <div key={b.title} className="card p-7 group reveal">
                <div className="w-14 h-14 rounded-xl bg-[#3e8f75]/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[#3e8f75] group-hover:scale-110">
                  <b.icon className="w-7 h-7 text-[#3e8f75] transition-colors duration-500 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#123e35] mb-2">{b.title}</h3>
                <p className="text-[#6d7974] leading-relaxed text-sm">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── How to Join Process ─────────── */}
      <section className="section-padding bg-[#123e35] relative overflow-hidden">
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <p className="eyebrow text-[#d8e93b] mb-3">Getting Started</p>
            <h2 className="section-title text-white">How to Become a Volunteer</h2>
            <p className="text-white/70 text-lg mt-4 leading-relaxed">
              Joining our volunteer team is simple. Here's what to expect.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            {process.map((step) => (
              <div key={step.num} className="bg-white/5 backdrop-blur rounded-2xl p-7 border border-white/10 hover:bg-white/10 transition-colors duration-500 reveal">
                <span className="text-4xl font-extrabold text-[#d8e93b] leading-none mb-4 block">{step.num}</span>
                <h3 className="text-white font-bold mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Volunteer Testimonials ─────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="eyebrow mb-3">Volunteer Voices</p>
            <h2 className="section-title">Stories from Our Volunteers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 stagger">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-7 reveal">
                <Quote className="w-8 h-8 text-[#d8e93b] mb-4" />
                <p className="text-[#1c2421] leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#e2e9e4]">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-[#123e35] text-sm">{t.name}</p>
                    <p className="text-[#3e8f75] text-xs font-medium">{t.role}</p>
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

      {/* ─────────── Volunteer Application Form ─────────── */}
      <section className="section-padding bg-[#f5f7f5]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="reveal-left">
              <p className="eyebrow mb-3">Apply Now</p>
              <h2 className="section-title mb-5">Ready to Get Started?</h2>
              <p className="text-[#6d7974] text-lg leading-relaxed mb-6">
                Fill out the application form and our volunteer coordinator will reach out to you
                within 2-3 business days to schedule an orientation.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'No experience required — training provided',
                  'Flexible schedules to fit your availability',
                  'Make a direct, lasting impact in your community',
                  'Join a supportive, passionate volunteer network',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3e8f75] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1c2421]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="img-wrap aspect-[16/10]">
                <img src="https://images.pexels.com/photos/6646941/pexels-photo-6646941.jpeg?auto=compress&cs=tinysrgb&w=770&h=480&fit=crop" alt="Volunteers in action" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="reveal">
              {submitted ? (
                <div className="card p-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#3e8f75]/10 flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-[#3e8f75]" fill="currentColor" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#123e35]">Thank You for Your Interest!</h3>
                  <p className="text-[#6d7974] mb-6 max-w-md mx-auto leading-relaxed">
                    We've received your application and our volunteer coordinator will be in touch
                    within 2-3 business days to schedule your orientation.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline">Submit Another Application</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-8">
                  <h3 className="text-2xl font-bold mb-2 text-[#123e35]">Volunteer Application</h3>
                  <p className="text-[#6d7974] text-sm mb-6">All fields marked with * are required.</p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <input className="input-field" placeholder="First Name *" required />
                    <input className="input-field" placeholder="Last Name *" required />
                  </div>
                  <input type="email" className="input-field mb-4" placeholder="Email Address *" required />
                  <input className="input-field mb-4" placeholder="Phone Number *" required />
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <input className="input-field" placeholder="City / Area" />
                    <select className="input-field" required defaultValue="">
                      <option value="" disabled>Area of Interest *</option>
                      <option>Event Support</option>
                      <option>Community Outreach</option>
                      <option>Education Programs</option>
                      <option>Fundraising</option>
                      <option>Social Media & Content</option>
                      <option>Therapy Support</option>
                    </select>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <select className="input-field" defaultValue="">
                      <option value="" disabled>Availability</option>
                      <option>Weekdays</option>
                      <option>Weekends</option>
                      <option>Both</option>
                      <option>Flexible</option>
                    </select>
                    <select className="input-field" defaultValue="">
                      <option value="" disabled>Hours per week</option>
                      <option>1-3 hours</option>
                      <option>4-8 hours</option>
                      <option>8+ hours</option>
                    </select>
                  </div>
                  <textarea className="input-field min-h-[120px] resize-y mb-6" placeholder="Tell us about yourself and why you'd like to volunteer with ZACSO..." />
                  <button type="submit" className="btn btn-primary w-full text-base">
                    Submit Application <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <div className="text-center mb-12 reveal">
            <p className="eyebrow mb-3">Volunteer FAQ</p>
            <h2 className="section-title">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div key={i} className="card overflow-hidden reveal">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-[#123e35] text-lg">{item.q}</span>
                  <span className={`text-[#3e8f75] text-2xl transition-transform duration-300 flex-shrink-0 ml-4 ${openFaq === i ? 'rotate-45' : ''}`}>&#43;</span>
                </button>
                <div className={`overflow-hidden transition-all duration-400 ${openFaq === i ? 'max-h-60' : 'max-h-0'}`}>
                  <p className="px-6 pb-6 text-[#6d7974] leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
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
              <HandHeart className="w-12 h-12 text-[#d8e93b] mx-auto mb-4" />
              <h2 className="text-white text-3xl lg:text-4xl font-extrabold mb-4">Your Time Can Change Lives</h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
                Every hour you give helps build a more inclusive Zanzibar for individuals with autism
                and their families. Join us today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#top" className="btn btn-accent">Apply Now <ArrowRight className="w-4 h-4" /></a>
                <Link to="/donations" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Donate Instead</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
