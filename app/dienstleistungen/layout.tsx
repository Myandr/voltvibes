import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dienstleistungen — VoltVibes Dorsten | Reparatur, Wartung & Beratung",
  description:
    "Alle Services von VoltVibes Dorsten: E-Scooter Reparatur, Wartung, Ersatzteile, Ankauf & persönliche Beratung. Fachkundiger Service direkt in der Innenstadt Dorsten.",
  keywords: [
    "E-Scooter Reparatur",
    "E-Scooter Wartung Dorsten",
    "E-Scooter Ankauf Dorsten",
    "VoltVibes Dienstleistungen",
    "Scooter Ersatzteile Dorsten",
    "E-Scooter Beratung Dorsten",
  ],
  alternates: {
    canonical: "https://www.voltvibes-dorsten.de/dienstleistungen",
  },
  openGraph: {
    title: "Dienstleistungen — VoltVibes Dorsten",
    description:
      "Reparatur, Wartung, Ersatzteile und persönliche Beratung rund um deinen E-Scooter. Alles unter einem Dach in der Innenstadt Dorsten.",
    url: "https://www.voltvibes-dorsten.de/dienstleistungen",
    siteName: "VoltVibes",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://www.voltvibes-dorsten.de/og-image.png",
        width: 768,
        height: 768,
        alt: "VoltVibes Dorsten — Dienstleistungen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dienstleistungen — VoltVibes Dorsten",
    description:
      "E-Scooter Reparatur, Wartung, Ersatzteile und Ankauf — alles bei VoltVibes in Dorsten.",
    images: ["https://www.voltvibes-dorsten.de/og-image.png"],
  },
}

export default function DienstleistungenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
