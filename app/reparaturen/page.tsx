import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import { ReparaturenAbout } from '@/components/ui/reparaturen-about';

export default function ReparaturenPage() {
  return (
    <main className="flex flex-col flex-1">
      <PageHero
        eyebrow="Rundum-Service"
        title="Scooter"
        titleAccent="Reparatur"
        subtitle="Platte Reifen, Bremsen, Akkus — wir reparieren alle Modelle schnell und zuverlässig. Auch über unsere Annahmestellen in Bottrop und Recklinghausen."
      />

      <ReparaturenAbout
        title="Professionelle Reparatur"
        description="Platte Reifen, defekte Bremsen oder schwacher Akku — unser Team in Dorsten bringt deinen Scooter schnell und zuverlässig wieder in Fahrt. Alle Marken, alle Modelle."
        mainImage={{
          src: "/images/gallery-3.jpg",
          alt: "Scooter Reparatur VoltVibes Dorsten",
        }}
        secondaryImage={{
          src: "/images/gallery-1.jpg",
          alt: "VoltVibes Werkstatt Dorsten",
        }}
        breakout={{
          title: "Rundum-Service mit Abholservice",
          description:
            "Gib deinen Scooter bei einer unserer Annahmestellen in Bottrop oder Recklinghausen ab — unser Servicemobil holt ihn ab und bringt ihn nach der Reparatur zurück.",
          buttonText: "Termin vereinbaren",
          buttonUrl: "/kontakt",
        }}
        annahmestellenTitle="Werkstatt & Annahmestellen"
        annahmestellen={[
          { name: "VoltVibes Dorsten", address: "Lippestraße 34", city: "46282 Dorsten" },
          { name: "AWK Smart Repair", address: "Boschstraße 9", city: "46244 Bottrop" },
          { name: "Automanufaktur 57", address: "Westring 57", city: "45659 Recklinghausen" },
        ]}
        statsTitle="Unser Service in Zahlen"
        statsDescription="Schnelle Reparaturen, faire Preise und persönliche Beratung direkt in der Dorstener Innenstadt."
        stats={[
          { label: "Reparaturen pro Jahr", value: "500+" },
          { label: "Zufriedene Kunden", value: "98%" },
          { label: "Standorte", value: "2" },
          { label: "Jahre Erfahrung", value: "5+" },
        ]}
      />

      <Footer />
    </main>
  );
}
