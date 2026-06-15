import type { Metadata } from "next"
import Footer from "../components/Footer"

export const metadata: Metadata = {
  title: "Das Team — VoltVibes Dorsten | Lern uns kennen",
  description:
    "Lern das VoltVibes-Team kennen — leidenschaftliche E-Scooter-Experten aus Dorsten. Persönliche Beratung, ehrlicher Service und echte Leidenschaft für Mobilität.",
  keywords: [
    "VoltVibes Team",
    "VoltVibes Dorsten Mitarbeiter",
    "E-Scooter Experten Dorsten",
    "VoltVibes über uns",
  ],
  alternates: {
    canonical: "https://www.voltvibes-dorsten.de/das-team",
  },
  openGraph: {
    title: "Das Team — VoltVibes Dorsten",
    description:
      "Lern die Menschen hinter VoltVibes kennen — leidenschaftlich, kompetent und immer für dich da.",
    url: "https://www.voltvibes-dorsten.de/das-team",
    siteName: "VoltVibes",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://www.voltvibes-dorsten.de/og-image.png",
        width: 768,
        height: 768,
        alt: "Das VoltVibes Team aus Dorsten",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Das Team — VoltVibes Dorsten",
    description:
      "Lern das Team hinter VoltVibes Dorsten kennen — Experten mit echter Leidenschaft für E-Scooter.",
    images: ["https://www.voltvibes-dorsten.de/og-image.png"],
  },
}
import TeamCarouselSection from "../components/TeamCarouselSection"
import CustomerStoriesSection from "../components/CustomerStoriesSection"
import JoinTeamSection from "../components/JoinTeamSection"

export default function DasTeamPage() {
  return (
    <main className="flex flex-col flex-1 bg-white">
      <TeamCarouselSection />

      <JoinTeamSection />

      <CustomerStoriesSection />

      <Footer />
    </main>
  )
}
