import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import {
  ArrowRight, Target, Eye, Heart, CheckCircle2, Users, Sparkles,
  HandHeart, GraduationCap, Stethoscope, Home, Award, Globe,
  Quote, MapPin, Mail, Phone, Linkedin, Facebook, Star,
} from 'lucide-react';
import { metrics, siteConfig } from '@/data';

const timeline = [
  {
    year: '2021',
    title: 'The Beginning',
    text: 'ZACSO was founded by a group of parents and advocates who saw the urgent need for autism awareness and support services in Zanzibar. What started as a small support group quickly grew into a registered organization.',
  },
  {
    year: '2022',
    title: 'First Community Programs',
    text: 'We launched our first community-based support programs, reaching over 20 families with counseling, therapy referrals, and educational workshops. Our volunteer network began to take shape.',
  },
  {
    year: '2023',
    title: 'Partnerships & Growth',
    text: 'ZACSO established partnerships with healthcare providers, schools, and international organizations. We expanded our reach to rural areas of Zanzibar, bringing awareness campaigns to communities that had never heard of autism.',
  },
  {
    year: '2024',
    title: 'Advocacy Milestones',
    text: 'We met with government officials including the Speaker of the House of Representatives to advocate for inclusive policies. Our campaigns reached national television and radio, transforming public perception.',
  },
  {
    year: '2025',
    title: 'Scaling Impact',
    text: 'With over 60 families reached and 200+ active volunteers, ZACSO became a leading voice for autism advocacy in Zanzibar. We launched our therapy subsidy program and inclusive education initiative.',
  },
  {
    year: '2026',
    title: 'Building the Future',
    text: 'Today, ZACSO continues to grow with new programs in early intervention, vocational training for young adults with autism, and a ambitious plan to build Zanzibar\'s first autism resource center.',
  },
];

const values = [
  { icon: Heart, title: 'Compassion', text: 'We approach every individual and family with empathy, understanding, and unconditional positive regard.' },
  { icon: Users, title: 'Inclusivity', text: 'We believe every person deserves to be valued, heard, and included regardless of their abilities or background.' },
  { icon: Sparkles, title: 'Transparency', text: 'We operate with full accountability, ensuring every donation and resource is used effectively and openly.' },
  { icon: HandHeart, title: 'Community-Driven', text: 'Our programs are shaped by the families we serve, ensuring solutions are grounded in real community needs.' },
  { icon: Award, title: 'Excellence', text: 'We strive for the highest standards in everything we do, from program delivery to advocacy and governance.' },
  { icon: Globe, title: 'Collaboration', text: 'We work hand-in-hand with local and international partners to maximize our collective impact.' },
];

const programs = [
  {
    icon: Stethoscope,
    title: 'Therapy & Intervention',
    text: 'We provide access to speech therapy, occupational therapy, and behavioral intervention programs for children and young adults with autism. Our subsidy program helps families afford critical therapy sessions.',
    points: ['Speech & language therapy', 'Occupational therapy', 'Behavioral intervention', 'Early screening programs'],
  },
  {
    icon: GraduationCap,
    title: 'Inclusive Education',
    text: 'We work with schools across Zanzibar to promote inclusive education practices, train teachers, and ensure children with autism have access to quality learning environments that accommodate their needs.',
    points: ['Teacher training workshops', 'School partnerships', 'Learning material support', 'Parent education programs'],
  },
  {
    icon: Users,
    title: 'Family Support',
    text: 'We offer comprehensive support to families affected by autism, including counseling services, support groups, and resource navigation. No family should face the autism journey alone.',
    points: ['Counseling services', 'Parent support groups', 'Sibling support programs', 'Resource navigation'],
  },
  {
    icon: Home,
    title: 'Community Outreach',
    text: 'We raise awareness about autism through community events, media campaigns, and public education. We work to dismantle stigma and build a more understanding and inclusive Zanzibar.',
    points: ['Awareness campaigns', 'Community events', 'Media engagement', 'Cultural sensitivity training'],
  },
];

const team = [
  {
    name: 'Amina Khalfan',
    role: 'Founder & Executive Director',
    img: 'https://images.pexels.com/photos/8312669/pexels-photo-8312669.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'A mother of a child with autism, Amina founded ZACSO after years of navigating the challenges of autism in Zanzibar with little support. Her vision has guided the organization from a small support group to a leading advocacy body.',
  },
  {
    name: 'Omar Ali',
    role: 'Programs Director',
    img: 'https://images.pexels.com/photos/13392786/pexels-photo-13392786.png?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Omar brings over a decade of experience in community development and program management. He oversees all of ZACSO\'s direct service programs, ensuring they meet the highest standards of quality and impact.',
  },
  {
    name: 'Fatma Saleh',
    role: 'Outreach & Partnerships Lead',
    img: 'https://images.pexels.com/photos/38528495/pexels-photo-38528495.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Fatma leads our partnerships with healthcare providers, schools, and international organizations. She is the driving force behind our advocacy efforts and government engagement.',
  },
  {
    name: 'Yusuf Hassan',
    role: 'Volunteer Coordinator',
    img: 'https://images.pexels.com/photos/19399318/pexels-photo-19399318.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Yusuf manages our growing network of 200+ volunteers. He ensures every volunteer is trained, supported, and matched with meaningful opportunities to make a difference.',
  },
];

const partners = [
  'Ministry of Health — Zanzibar',
  'Zanzibar Association of People with Disabilities',
  'Autism Speaks Africa',
  'University of Dar es Salaam',
  'Save the Children — Tanzania',
  'Zanzibar Broadcasting Corporation',
];

export default function AboutPage() {
  useReveal();

  return (
    <>
      {/* ─────────── Page Hero ─────────── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/17321854/pexels-photo-17321854.jpeg?auto=compress&cs=tinysrgb&w=1920&h=700&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#123e35]/80" />
        </div>
        <div className="relative container text-center">
          <p className="eyebrow text-[#d8e93b] mb-3">About Us</p>
          <h1 className="text-white font-extrabold" style={{ fontSize: 'var(--text-hero-inner)' }}>
            Who We Are
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            ZACSO is Zanzibar's dedicated organization for autism awareness, support, and advocacy —
            building an inclusive community where every individual with autism can thrive.
          </p>
          <nav className="flex items-center justify-center gap-2 mt-6 text-sm text-white/70">
            <Link to="/" className="hover:text-[#d8e93b] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About</span>
          </nav>
        </div>
      </section>

      {/* ─────────── Introduction ─────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative reveal-left">
              <div className="img-wrap aspect-[4/5]">
                <img
                  src="https://images.pexels.com/photos/9090746/pexels-photo-9090746.jpeg?auto=compress&cs=tinysrgb&w=770&h=960&fit=crop"
                  alt="ZACSO community gathering"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#d8e93b] rounded-2xl px-6 py-4 shadow-lg hidden sm:block">
                <p className="text-3xl font-extrabold text-[#123e35]">5+</p>
                <p className="text-sm font-semibold text-[#123e35]/80">Years of Service</p>
              </div>
            </div>
            <div className="reveal">
              <p className="eyebrow mb-3">Our Story</p>
              <h2 className="section-title mb-5">Dedicated to Making a Difference</h2>
              <p className="text-[#6d7974] text-lg leading-relaxed mb-5">
                ZACSO was founded with a vision to create a more inclusive Zanzibar where individuals
                with autism and their families receive the support, understanding, and opportunities
                they deserve.
              </p>
              <p className="text-[#6d7974] leading-relaxed mb-5">
                We work tirelessly to raise awareness, provide direct support, and advocate for policies
                that benefit the autism community. Through partnerships with local and international
                organizations, we deliver programs that make a real difference in people's lives.
              </p>
              <p className="text-[#6d7974] leading-relaxed mb-6">
                From our humble beginnings as a small parent support group, we have grown into a
                recognized organization reaching over 60 families across Zanzibar. Our journey is
                driven by the belief that every person with autism deserves to be understood, valued,
                and empowered to reach their full potential.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  'Community-based support programs',
                  'Partnerships with healthcare providers',
                  'Educational workshops and training',
                  'Advocacy for inclusive policies',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3e8f75] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1c2421]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── Mission / Vision / Values Cards ─────────── */}
      <section className="section-padding bg-[#f5f7f5]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="eyebrow mb-3">What Drives Us</p>
            <h2 className="section-title">Our Mission, Vision & Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 stagger">
            {[
              { icon: Target, title: 'Our Mission', text: 'To create awareness, provide support, and build an inclusive community for individuals with autism and their families across Zanzibar.' },
              { icon: Eye, title: 'Our Vision', text: 'A Zanzibar where every individual with autism is valued, supported, and empowered to reach their full potential.' },
              { icon: Heart, title: 'Our Core Values', text: 'Compassion, inclusivity, transparency, and community-driven action guide everything we do at ZACSO.' },
            ].map((item) => (
              <div key={item.title} className="card p-8 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-[#3e8f75]/10 flex items-center justify-center mx-auto mb-5 transition-all duration-500 group-hover:bg-[#3e8f75] group-hover:scale-110">
                  <item.icon className="w-8 h-8 text-[#3e8f75] transition-colors duration-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#123e35]">{item.title}</h3>
                <p className="text-[#6d7974] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Core Values Grid ─────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="eyebrow mb-3">Principles We Live By</p>
            <h2 className="section-title">The Values That Shape Our Work</h2>
            <p className="text-[#6d7974] text-lg mt-4 leading-relaxed">
              These six values are the foundation of every decision we make and every program we run.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {values.map((v) => (
              <div key={v.title} className="card p-7 group reveal">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#3e8f75]/10 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-[#3e8f75]">
                    <v.icon className="w-6 h-6 text-[#3e8f75] transition-colors duration-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#123e35]">{v.title}</h3>
                </div>
                <p className="text-[#6d7974] leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Timeline / Journey ─────────── */}
      <section className="section-padding bg-[#123e35] relative overflow-hidden">
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <p className="eyebrow text-[#d8e93b] mb-3">Our Journey</p>
            <h2 className="section-title text-white">The ZACSO Story Through the Years</h2>
            <p className="text-white/70 text-lg mt-4 leading-relaxed">
              From a small parent support group to a leading advocacy organization — every milestone
              has been powered by our community.
            </p>
          </div>

          <div className="about-timeline">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`about-timeline-item ${i % 2 === 0 ? 'about-timeline-left' : 'about-timeline-right'}`}
              >
                <div className="about-timeline-marker">
                  <span>{item.year}</span>
                </div>
                <div className="about-timeline-card">
                  <h3 className="text-xl font-bold text-[#123e35] mb-2">{item.title}</h3>
                  <p className="text-[#6d7974] leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Impact Metrics ─────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="eyebrow mb-3">Our Impact</p>
            <h2 className="section-title">Making a Measurable Difference</h2>
            <p className="text-[#6d7974] text-lg mt-4 leading-relaxed">
              Every number represents a life touched, a family supported, and a step toward a more inclusive Zanzibar.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            {metrics.map((m) => (
              <div key={m.label} className="text-center reveal card p-8 group">
                <p className="text-4xl lg:text-5xl font-extrabold text-[#3e8f75] mb-2 transition-transform duration-500 group-hover:scale-110">{m.value}</p>
                <p className="text-[#6d7974] font-medium">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Programs & Services ─────────── */}
      <section className="section-padding bg-[#f5f7f5]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="eyebrow mb-3">What We Do</p>
            <h2 className="section-title">Our Programs & Services</h2>
            <p className="text-[#6d7974] text-lg mt-4 leading-relaxed">
              We deliver comprehensive, community-grounded programs that address the full spectrum
              of needs for individuals with autism and their families.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 stagger">
            {programs.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-500 group reveal">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-[#3e8f75] flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                    <p.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#123e35] mb-2">{p.title}</h3>
                    <p className="text-[#6d7974] leading-relaxed">{p.text}</p>
                  </div>
                </div>
                <ul className="grid sm:grid-cols-2 gap-2 mt-5 pt-5 border-t border-[#e2e9e4]">
                  {p.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-[#1c2421]">
                      <CheckCircle2 className="w-4 h-4 text-[#3e8f75] flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Approach Section ─────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal">
              <p className="eyebrow mb-3">How We Work</p>
              <h2 className="section-title mb-5">A Community-First Approach</h2>
              <p className="text-[#6d7974] text-lg leading-relaxed mb-5">
                We believe that lasting change comes from within the community. Our approach is rooted
                in listening to families, understanding cultural context, and building solutions that
                are sustainable and locally owned.
              </p>
              <div className="space-y-5">
                {[
                  { num: '01', title: 'Listen & Understand', text: 'We start by listening to the families and communities we serve, understanding their unique challenges and aspirations.' },
                  { num: '02', title: 'Design & Deliver', text: 'We design evidence-based programs tailored to the Zanzibar context and deliver them through our network of trained volunteers and partners.' },
                  { num: '03', title: 'Measure & Improve', text: 'We continuously measure our impact, gather feedback, and refine our programs to ensure they create real, lasting change.' },
                ].map((step) => (
                  <div key={step.num} className="flex gap-5">
                    <span className="text-3xl font-extrabold text-[#d8e93b] leading-none flex-shrink-0">{step.num}</span>
                    <div>
                      <h3 className="text-lg font-bold text-[#123e35] mb-1">{step.title}</h3>
                      <p className="text-[#6d7974] leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative reveal-left">
              <div className="img-wrap aspect-[5/6]">
                <img
                  src="https://images.pexels.com/photos/7156163/pexels-photo-7156163.jpeg?auto=compress&cs=tinysrgb&w=770&h=920&fit=crop"
                  alt="ZACSO volunteers at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl px-6 py-4 shadow-lg hidden sm:block">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-[#3e8f75]" />
                  <div>
                    <p className="text-2xl font-extrabold text-[#123e35]">200+</p>
                    <p className="text-sm text-[#6d7974]">Active Volunteers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── Testimonial Quote ─────────── */}
      <section className="section-padding bg-[#f5f7f5]">
        <div className="container max-w-4xl text-center reveal">
          <Quote className="w-12 h-12 text-[#d8e93b] mx-auto mb-6" />
          <blockquote className="text-2xl lg:text-3xl font-bold text-[#123e35] leading-snug mb-8">
            "Before ZACSO, I felt alone and afraid for my child's future. Today, I have a community
            that understands, supports, and fights alongside us. ZACSO didn't just change my family's
            life — it changed how our entire village sees autism."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <img
              src="https://images.pexels.com/photos/10850674/pexels-photo-10850674.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
              alt="Community member"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-bold text-[#123e35]">Zainab M.</p>
              <p className="text-sm text-[#6d7974]">Parent & ZACSO Community Member</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[#f2c94c] fill-[#f2c94c]" />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Team ─────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="eyebrow mb-3">Meet the Team</p>
            <h2 className="section-title">The People Behind ZACSO</h2>
            <p className="text-[#6d7974] text-lg mt-4 leading-relaxed">
              Our dedicated team of professionals and volunteers work tirelessly to create a more
              inclusive Zanzibar for individuals with autism and their families.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            {team.map((member) => (
              <div key={member.name} className="group reveal">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#123e35]/0 group-hover:bg-[#123e35]/30 transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-bold text-[#123e35]">{member.name}</h3>
                <p className="text-[#3e8f75] font-medium text-sm mb-3">{member.role}</p>
                <p className="text-[#6d7974] text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Partners ─────────── */}
      <section className="section-padding bg-[#f5f7f5]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <p className="eyebrow mb-3">Our Partners</p>
            <h2 className="section-title">Working Together for Greater Impact</h2>
            <p className="text-[#6d7974] text-lg mt-4 leading-relaxed">
              We are proud to collaborate with organizations that share our commitment to building
              an inclusive Zanzibar.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
            {partners.map((name) => (
              <div
                key={name}
                className="bg-white rounded-xl px-6 py-5 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow duration-300 reveal"
              >
                <div className="w-10 h-10 rounded-lg bg-[#3e8f75]/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-[#3e8f75]" />
                </div>
                <span className="font-semibold text-[#123e35] text-sm">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Location / Contact Info ─────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <p className="eyebrow mb-3">Visit Us</p>
              <h2 className="section-title mb-5">Find Us in Zanzibar</h2>
              <p className="text-[#6d7974] text-lg leading-relaxed mb-8">
                Our doors are always open to families, volunteers, partners, and anyone who wants to
                learn more about autism and how we can build a more inclusive community together.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#3e8f75]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#3e8f75]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#123e35]">Our Office</p>
                    <p className="text-[#6d7974]">{siteConfig.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#3e8f75]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#3e8f75]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#123e35]">Email Us</p>
                    <p className="text-[#6d7974]">{siteConfig.primaryEmail}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#3e8f75]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#3e8f75]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#123e35]">Call Us</p>
                    <p className="text-[#6d7974]">{siteConfig.primaryPhone}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-8">
                {[Facebook, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-11 h-11 rounded-xl bg-[#3e8f75]/10 flex items-center justify-center text-[#3e8f75] hover:bg-[#3e8f75] hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            <div className="reveal-left">
              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
                <iframe
                  title="ZACSO office location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=39.20%2C-6.22%2C39.24%2C-6.20&layer=mapnik"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
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
              <h2 className="text-white text-3xl lg:text-4xl font-extrabold mb-4">Join Us in Making a Difference</h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
                Whether you donate, volunteer, or spread the word, your support changes lives.
                Together, we can build a Zanzibar where every individual with autism is valued and empowered.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/donations" className="btn btn-accent">Donate Now <ArrowRight className="w-4 h-4" /></Link>
                <Link to="/become-volunteers" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Volunteer</Link>
                <Link to="/contact-2" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
