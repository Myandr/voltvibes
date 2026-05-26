import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import FeaturesSection from "./components/FeaturesSection";
import RangeSection from "./components/RangeSection";
import SellScooterSection from "./components/SellScooterSection";
import BlogSection from "./components/BlogSection";
import FooterCTA from "./components/FooterCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/*
      <FeaturesSection />*/}
      <RangeSection />
      <SellScooterSection />
      <BlogSection />
      <FooterCTA />
      <Footer />
    </main>
  );
}
