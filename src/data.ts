import type {
  SiteConfig, NavItem, HeroSlide, HeroStat, Feature, Campaign, Post,
  EventItem, GalleryItem, Metric, FaqGroup
} from './types';

export const siteConfig: SiteConfig = {
  siteName: 'ZACSO',
  tagline: 'Zanzibar Autism & Community Support Organization',
  primaryEmail: 'info@zacso.or.tz',
  primaryPhone: '+255 654 127711',
  address: 'SSMF Building, Mwanakwerekwe, Zanzibar, Tanzania',
  socialLinks: [
    { label: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
    { label: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    { label: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { label: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
  ],
  footerCopy: 'Zanzibar Autism & Community Support Organization — dedicated to building awareness, providing support, and creating an inclusive community for individuals with autism and their families across Zanzibar.',
};

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-2' },
  { label: 'Our Programs', path: '/donation-2', hasDropdown: true, children: [
    { label: 'Donations', path: '/donations' },
    { label: 'Campaigns', path: '/donation-2' },
    { label: 'Events', path: '/events-2' },
    { label: 'Volunteer', path: '/become-volunteers' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blog', path: '/blog' },
    { label: 'FAQ', path: '/faq-2' },
  { label: 'Contact', path: '/contact-2' },
  ]},
  { label: 'Donate', path: '/donations' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact-2' },
];

export const heroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    eyebrow: 'ZACSO • Early Intervention',
    title: 'Early Intervention Program',
    description: 'Free early screening and therapy for children ages 2–6. The sooner we start, the brighter the future — every child deserves the chance to thrive.',
    image: 'https://images.pexels.com/photos/6288115/pexels-photo-6288115.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
    ctaLabel: 'Get Support',
    ctaLink: '/contact-2',
    stats: [
      { value: 'Ages 2–6', label: 'Early Screening' },
      { value: 'Free', label: 'Parent Counseling' },
      { value: '15+', label: 'Therapy Sessions Monthly' },
    ],
  },
  {
    id: 'slide-2',
    eyebrow: 'ZACSO • Family Support',
    title: 'Family Support Services',
    description: 'Counseling, support groups, and resources for parents and caregivers. You are not alone — we walk alongside every family on this journey.',
    image: 'https://images.pexels.com/photos/7943967/pexels-photo-7943967.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
    ctaLabel: 'Join a Group',
    ctaLink: '/become-volunteers',
    stats: [
      { value: '60+', label: 'Families Supported' },
      { value: 'Free', label: 'Parent Counseling' },
      { value: 'Weekly', label: 'Support Meetings' },
    ],
  },
  {
    id: 'slide-3',
    eyebrow: 'ZACSO • Community Inclusion',
    title: 'Community Inclusion & Awareness',
    description: 'Breaking stigma through community events, advocacy, and education. Together we build a Zanzibar where every person is embraced with understanding.',
    image: 'https://images.pexels.com/photos/6059407/pexels-photo-6059407.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
    ctaLabel: 'Get Involved',
    ctaLink: '/become-volunteers',
    stats: [
      { value: '500+', label: 'Families Reached' },
      { value: '200+', label: 'Volunteers' },
      { value: '5+', label: 'Years of Service' },
    ],
  },
  {
    id: 'slide-4',
    eyebrow: 'ZACSO • Healthcare Access',
    title: 'Therapy & Healthcare Access',
    description: 'Connecting families with therapy, screening, and intervention programs. Quality care should be within reach for every child in Zanzibar.',
    image: 'https://images.pexels.com/photos/5998451/pexels-photo-5998451.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
    ctaLabel: 'Donate Now',
    ctaLink: '/donations',
    stats: [
      { value: 'Free', label: 'Health Screenings' },
      { value: '12+', label: 'Partner Clinics' },
      { value: '300+', label: 'Children Screened' },
    ],
  },
];

export const features: Feature[] = [
  {
    icon: 'heart',
    title: 'Donor Friendly',
    description: 'We make giving easy and transparent. Every contribution directly supports autism awareness and family assistance programs across Zanzibar.',
  },
  {
    icon: 'users',
    title: 'Community Support',
    description: 'Building a network of families, volunteers, and professionals who work together to create an inclusive and supportive community.',
  },
  {
    icon: 'sparkles',
    title: 'Making a Difference',
    description: 'Through advocacy, education, and direct support, we transform lives and challenge stigma surrounding autism in Zanzibar.',
  },
];

export const campaigns: Campaign[] = [
  {
    id: 'c1',
    slug: 'help-us-touch-their-lives-of-these-youths',
    title: 'Help Us Touch Their Lives of These Youths',
    excerpt: 'Support young people with autism to access education, therapy, and life skills training.',
    category: 'Education',
    image: 'https://images.pexels.com/photos/9090750/pexels-photo-9090750.jpeg?auto=compress&cs=tinysrgb&w=940&h=588&fit=crop',
    goalAmount: 50000,
    raisedAmount: 32500,
    currency: '$',
    donationEnabled: true,
  },
  {
    id: 'c2',
    slug: 'share-your-hongbao-blessings-with-children',
    title: 'Share Your Hongbao Blessings with Children',
    excerpt: 'Your generous blessings help provide essential resources and support for children with autism.',
    category: 'Charity',
    image: 'https://images.pexels.com/photos/19800837/pexels-photo-19800837.jpeg?auto=compress&cs=tinysrgb&w=940&h=588&fit=crop',
    goalAmount: 20000,
    raisedAmount: 8500,
    currency: '$',
    donationEnabled: true,
  },
  {
    id: 'c3',
    slug: 'be-hungry-no-more-leave-no-one-behind',
    title: 'Be Hungry No More, Leave No One Behind',
    excerpt: 'Ensure no family affected by autism goes without food, shelter, and basic necessities.',
    category: 'Food',
    image: 'https://images.pexels.com/photos/6646884/pexels-photo-6646884.jpeg?auto=compress&cs=tinysrgb&w=940&h=588&fit=crop',
    goalAmount: 30000,
    raisedAmount: 18000,
    currency: '$',
    donationEnabled: true,
  },
  {
    id: 'c4',
    slug: 'helping-the-homeless-during-the-holidays',
    title: 'Helping the Homeless During the Holidays',
    excerpt: 'Provide warmth, shelter, and care for vulnerable families during the holiday season.',
    category: 'Health',
    image: 'https://images.pexels.com/photos/6646878/pexels-photo-6646878.jpeg?auto=compress&cs=tinysrgb&w=940&h=588&fit=crop',
    goalAmount: 25000,
    raisedAmount: 25000,
    currency: '$',
    donationEnabled: true,
  },
];

export const posts: Post[] = [
  {
    id: 'p1',
    slug: 'mkutano-na-wadau-mbali-mbali',
    title: 'Mkutano na Wadau Mbali Mbali',
    excerpt: 'ZACSO imefanya mkutano na wadau mbalimbali kujadili masuala ya kusaidia watu wenye Tawahudi (Usonji) nchini.',
    content: `<p>ZACSO imefanya mkutano na wadau mbalimbali kujadili masuala ya kusaidia watu wenye Tawahudi (Usonji) nchini. Mkutano huo ulihudhuriwa na wawakilishi kutoka taasisi mbalimbali ambao wamejitolea kusaidia jamii ya watu wenye Tawahudi.</p><p>Katika mkutano huo, wadau waliweza kubadilishana mawazo na mipango ya kijamii ambayo yotalenga kuongeza uelewa kuhusu Tawahudi na kutoa msaada unaohitajika kwa familia na watu wenye Tawahudi.</p><p>ZACSO inaendelea kufanya kazi pamoja na wadau wake kuhakikisha kwamba jamii inaelewa na kusaidia watu wenye Tawahudi kwa njia mbalimbali ikiwa ni pamoja na elimu, afya, na msaada wa kijamii.</p>`,
    featuredImage: 'https://images.pexels.com/photos/17321854/pexels-photo-17321854.jpeg?auto=compress&cs=tinysrgb&w=770&h=428&fit=crop',
    author: 'zacso',
    category: 'Uncategorized',
    publishedAt: '2026-09-11',
    isTemplateArtifact: false,
  },
  {
    id: 'p2',
    slug: 'zacso-kukutana-na-spika-wa-baraza-la-wawakilishi',
    title: 'ZACSO Kukutana na Spika wa Baraza la Wawakilishi',
    excerpt: 'ZACSO imekuwa kwenye mkutano na Spika wa Baraza la Wawakilishi kujadili masuala ya Tawahudi.',
    content: `<p>ZACSO imekuwa kwenye mkutano na Spika wa Baraza la Wawakilishi kujadili masuala ya Tawahudi (Usonji) na jinsi ya kusaidia jamii ya watu wenye Tawahudi nchini.</p><p>Mkutano huo ulilenga kuongeza uelewa wa machifu wa nchi kuhusu Tawahudi na kutoa msaada unaohitajika kwa familia na watu wenye Tawahudi.</p>`,
    featuredImage: 'https://images.pexels.com/photos/8804775/pexels-photo-8804775.jpeg?auto=compress&cs=tinysrgb&w=770&h=428&fit=crop',
    author: 'zacso',
    category: 'Uncategorized',
    publishedAt: '2026-09-11',
    isTemplateArtifact: false,
  },
  {
    id: 'p3',
    slug: 'siku-ya-tawahudiusonji-duniani',
    title: 'Siku ya Tawahudi (Usonji) Duniani',
    excerpt: 'ZACSO imeadhimisha Siku ya Tawahudi (Usonji) Duniani kwa kuongeza uelewa kuhusu Tawahudi.',
    content: `<p>ZACSO imeadhimisha Siku ya Tawahudi (Usonji) Duniani kwa kuongeza uelewa kuhusu Tawahudi na kusaidia jamii ya watu wenye Tawahudi nchini.</p><p>Siku hii ni muhimu kwa sababu inatoa fursa ya kuongeza uelewa kuhusu Tawahudi na kutoa msaada unaohitajika kwa familia na watu wenye Tawahudi.</p>`,
    featuredImage: 'https://images.pexels.com/photos/8709283/pexels-photo-8709283.jpeg?auto=compress&cs=tinysrgb&w=770&h=428&fit=crop',
    author: 'zacso',
    category: 'Uncategorized',
    publishedAt: '2026-09-11',
    isTemplateArtifact: false,
  },
];

export const events: EventItem[] = [
  {
    id: 'e1',
    slug: 'autism-awareness-walk',
    title: 'Autism Awareness Walk',
    excerpt: 'Join us for a community walk to raise awareness about autism in Zanzibar.',
    image: 'https://images.pexels.com/photos/9090746/pexels-photo-9090746.jpeg?auto=compress&cs=tinysrgb&w=940&h=588&fit=crop',
    venue: 'Stone Town, Zanzibar',
    date: 'Oct 15, 2026',
    time: '8:00 AM',
  },
  {
    id: 'e2',
    slug: 'parent-support-workshop',
    title: 'Parent Support Workshop',
    excerpt: 'A workshop for parents of children with autism to share experiences and learn.',
    image: 'https://images.pexels.com/photos/8042458/pexels-photo-8042458.jpeg?auto=compress&cs=tinysrgb&w=940&h=588&fit=crop',
    venue: 'SSMF Building, Zanzibar',
    date: 'Nov 5, 2026',
    time: '10:00 AM',
  },
  {
    id: 'e3',
    slug: 'inclusive-education-conference',
    title: 'Inclusive Education Conference',
    excerpt: 'A conference bringing together educators and advocates for inclusive education.',
    image: 'https://images.pexels.com/photos/31773583/pexels-photo-31773583.jpeg?auto=compress&cs=tinysrgb&w=940&h=588&fit=crop',
    venue: 'Zanzibar Beach Resort',
    date: 'Dec 2, 2026',
    time: '9:00 AM',
  },
  {
    id: 'e4',
    slug: 'community-health-fair',
    title: 'Community Health Fair',
    excerpt: 'Free health screenings and information for families affected by autism.',
    image: 'https://images.pexels.com/photos/30688589/pexels-photo-30688589.jpeg?auto=compress&cs=tinysrgb&w=940&h=588&fit=crop',
    venue: 'Mwanakwerekwe, Zanzibar',
    date: 'Jan 18, 2027',
    time: '7:00 AM',
  },
  {
    id: 'e5',
    slug: 'volunteer-training-day',
    title: 'Volunteer Training Day',
    excerpt: 'Training session for new volunteers joining our community support programs.',
    image: 'https://images.pexels.com/photos/6646852/pexels-photo-6646852.jpeg?auto=compress&cs=tinysrgb&w=940&h=588&fit=crop',
    venue: 'ZACSO Office, Zanzibar',
    date: 'Feb 10, 2027',
    time: '9:00 AM',
  },
  {
    id: 'e6',
    slug: 'world-autism-day-celebration',
    title: 'World Autism Day Celebration',
    excerpt: 'A day of celebration, activities, and community building for autism awareness.',
    image: 'https://images.pexels.com/photos/17727975/pexels-photo-17727975.jpeg?auto=compress&cs=tinysrgb&w=940&h=588&fit=crop',
    venue: 'Forodhani Gardens, Zanzibar',
    date: 'Apr 2, 2027',
    time: '2:00 PM',
  },
];

export const galleryItems: GalleryItem[] = [
  { id: 'g1', label: 'Fundraising', image: 'https://images.pexels.com/photos/6646880/pexels-photo-6646880.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
  { id: 'g2', label: 'Fresh Food', image: 'https://images.pexels.com/photos/19800837/pexels-photo-19800837.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
  { id: 'g3', label: 'Education', image: 'https://images.pexels.com/photos/31763369/pexels-photo-31763369.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
  { id: 'g4', label: 'Medical', image: 'https://images.pexels.com/photos/18788957/pexels-photo-18788957.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
];

export const metrics: Metric[] = [
  { value: '60+', label: 'Families Reached' },
  { value: '15+', label: 'Programs Running' },
  { value: '200+', label: 'Volunteers' },
  { value: '5+', label: 'Years of Service' },
];

export const faqGroups: FaqGroup[] = [
  {
    title: 'How To Help?',
    items: [
      { question: 'How can I donate to ZACSO?', answer: 'You can donate through our website by visiting the Donations page and selecting a campaign that resonates with you. We accept various payment methods for your convenience.' },
      { question: 'Can I volunteer with ZACSO?', answer: 'Yes! We welcome volunteers who are passionate about supporting individuals with autism. Visit our Become a Volunteer page to fill out an application form.' },
      { question: 'How can my organization partner with ZACSO?', answer: 'We welcome partnerships with organizations that share our mission. Please contact us at info@zacso.or.tz to discuss partnership opportunities.' },
      { question: 'Do you accept in-kind donations?', answer: 'Yes, we accept in-kind donations such as educational materials, therapy equipment, and food supplies. Please contact us to arrange a donation.' },
    ],
  },
  {
    title: 'For Donors',
    items: [
      { question: 'Is my donation tax-deductible?', answer: 'ZACSO is a registered organization in Zanzibar. Please consult with your tax advisor regarding the deductibility of your donation.' },
      { question: 'How is my donation used?', answer: 'Your donation directly supports our programs including autism awareness campaigns, family support services, educational programs, and community outreach.' },
      { question: 'Can I designate my donation for a specific program?', answer: 'Yes, you can designate your donation for a specific campaign or program when making your contribution.' },
      { question: 'How can I track the impact of my donation?', answer: 'We provide regular updates through our blog and newsletter about how donations are being used and the impact they are making in the community.' },
    ],
  },
];
