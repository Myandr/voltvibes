import type { Metadata } from "next"
import HeroSection from "./components/HeroSection";

export const metadata: Metadata = {
  title: "VoltVibes Dorsten — E-Scooter, Stunt Scooter & Reparatur",
  description:
    "VoltVibes in Dorsten: Dein Fachgeschäft für E-Scooter, Stunt Scooter und Zubehör. Professionelle Reparatur, persönliche Beratung und faire Preise — Essener Str. 24, 46282 Dorsten.",
  keywords: [
    "E-Scooter Dorsten",
    "Stunt Scooter Dorsten",
    "VoltVibes",
    "E-Scooter kaufen Dorsten",
    "E-Scooter Fachgeschäft NRW",
    "Scooter Dorsten",
  ],
  alternates: {
    canonical: "https://www.voltvibes-dorsten.de",
  },
  openGraph: {
    title: "VoltVibes Dorsten — E-Scooter, Stunt Scooter & Reparatur",
    description:
      "Dein Fachgeschäft für E-Scooter und Stunt Scooter in Dorsten. Professionelle Reparatur, persönliche Beratung und faire Preise.",
    url: "https://www.voltvibes-dorsten.de",
    siteName: "VoltVibes",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://www.voltvibes-dorsten.de/og-image.png",
        width: 768,
        height: 768,
        alt: "VoltVibes Dorsten — E-Scooter Fachgeschäft",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VoltVibes Dorsten — E-Scooter, Stunt Scooter & Reparatur",
    description:
      "Dein Fachgeschäft für E-Scooter und Stunt Scooter in Dorsten. Reparatur, Beratung, faire Preise.",
    images: ["https://www.voltvibes-dorsten.de/og-image.png"],
  },
}
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
