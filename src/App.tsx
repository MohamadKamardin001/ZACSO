import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import LoadingScreen from '@/components/LoadingScreen';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import BlogPage from '@/pages/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage';
import EventsPage from '@/pages/EventsPage';
import ContactPage from '@/pages/ContactPage';
import FaqPage from '@/pages/FaqPage';
import DonationPage from '@/pages/DonationPage';
import VolunteerPage from '@/pages/VolunteerPage';
import PortfolioPage from '@/pages/PortfolioPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <LoadingScreen hidden={!loading} />
      <div className={loading ? 'hidden' : ''}>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-2" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/events-2" element={<EventsPage />} />
            <Route path="/contact-2" element={<ContactPage />} />
            <Route path="/faq-2" element={<FaqPage />} />
            <Route path="/donations" element={<DonationPage />} />
            <Route path="/donation-2" element={<DonationPage />} />
            <Route path="/become-volunteers" element={<VolunteerPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
