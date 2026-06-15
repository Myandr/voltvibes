import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Filialen — VoltVibes Dorsten & Göttingen | Standorte & Öffnungszeiten",
  description:
    "VoltVibes hat zwei Standorte: Hauptfiliale Dorsten (Essener Str. 24) und ab Mai 2026 neu in Göttingen. Alle Infos zu Öffnungszeiten, Adresse und Anfahrt.",
  keywords: [
    "VoltVibes Filialen",
    "VoltVibes Dorsten",
    "E-Scooter Dorsten",
    "VoltVibes Göttingen",
    "E-Scooter Standort",
    "Öffnungszeiten VoltVibes",
  ],
  alternates: {
    canonical: "https://www.voltvibes-dorsten.de/filialen",
  },
  openGraph: {
    title: "Filialen — VoltVibes Dorsten & Göttingen",
    description:
      "Hauptfiliale in Dorsten, Essener Str. 24 — und ab Mai 2026 auch in Göttingen. Öffnungszeiten, Adresse und Anfahrt auf einen Blick.",
    url: "https://www.voltvibes-dorsten.de/filialen",
    siteName: "VoltVibes",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://www.voltvibes-dorsten.de/og-image.png",
        width: 768,
        height: 768,
        alt: "VoltVibes Dorsten — Filialen Übersicht",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Filialen — VoltVibes Dorsten & Göttingen",
    description:
      "Hauptfiliale Dorsten (Essener Str. 24) und neue Filiale Göttingen ab Mai 2026. Alle Infos zu Öffnungszeiten und Anfahrt.",
    images: ["https://www.voltvibes-dorsten.de/og-image.png"],
  },
}

export default function FilialenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
