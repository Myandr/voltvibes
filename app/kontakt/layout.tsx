import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt — VoltVibes Dorsten | Schreib uns oder ruf an",
  description:
    "Kontaktiere VoltVibes Dorsten per Telefon, E-Mail oder WhatsApp. Essener Str. 24, 46282 Dorsten. Erreichbar Mo–Fr 12–18 Uhr und Sa 10:30–14 Uhr.",
  keywords: [
    "VoltVibes Kontakt",
    "VoltVibes Dorsten Telefon",
    "E-Scooter Fachgeschäft Dorsten Kontakt",
    "VoltVibes WhatsApp",
    "Dorsten E-Scooter Beratung",
  ],
  alternates: {
    canonical: "https://www.voltvibes-dorsten.de/kontakt",
  },
  openGraph: {
    title: "Kontakt — VoltVibes Dorsten",
    description:
      "Ruf uns an, schreib eine Mail oder komm direkt vorbei. VoltVibes Dorsten, Essener Str. 24 — Mo–Fr 12–18 Uhr, Sa 10:30–14 Uhr.",
    url: "https://www.voltvibes-dorsten.de/kontakt",
    siteName: "VoltVibes",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://www.voltvibes-dorsten.de/og-image.png",
        width: 768,
        height: 768,
        alt: "VoltVibes Dorsten — Kontakt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt — VoltVibes Dorsten",
    description:
      "Per Telefon, E-Mail oder WhatsApp erreichbar. Mo–Fr 12–18 Uhr, Sa 10:30–14 Uhr. Essener Str. 24, 46282 Dorsten.",
    images: ["https://www.voltvibes-dorsten.de/og-image.png"],
  },
}

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
