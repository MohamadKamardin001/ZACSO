import { useReveal } from '@/hooks/useReveal';
import HeroSlider from '@/components/HeroSlider';
import FeatureCards from '@/components/FeatureCards';
import CampaignGrid from '@/components/CampaignGrid';
import AboutSection from '@/components/AboutSection';
import NewsSection from '@/components/NewsSection';
import GallerySection from '@/components/GallerySection';
import NewsletterCTA from '@/components/NewsletterCTA';

export default function HomePage() {
  useReveal();

  return (
    <>
      <HeroSlider />
      <FeatureCards />
      <CampaignGrid />
      <AboutSection />
      <NewsSection />
      <GallerySection />
      <NewsletterCTA />
    </>
  );
}
