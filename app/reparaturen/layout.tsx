import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "E-Scooter Reparatur Dorsten — VoltVibes Werkstatt & Annahmestellen",
  description:
    "E-Scooter kaputt? VoltVibes repariert fachgerecht mit Originalteilen. Werkstatt in Dorsten, Reparaturannahme in Bottrop & Recklinghausen — Servicemobil holt ab.",
  keywords: [
    "E-Scooter Reparatur Dorsten",
    "E-Scooter Werkstatt Dorsten",
    "Scooter Reparatur Dorsten",
    "E-Scooter Ersatzteile",
    "Reparaturannahme Bottrop",
    "Reparaturannahme Recklinghausen",
    "VoltVibes Reparatur",
  ],
  alternates: {
    canonical: "https://www.voltvibes-dorsten.de/reparaturen",
  },
  openGraph: {
    title: "E-Scooter Reparatur Dorsten — VoltVibes",
    description:
      "Professionelle E-Scooter-Reparatur in Dorsten. Reparaturannahme auch in Bottrop und Recklinghausen — unser Servicemobil holt deinen Scooter ab.",
    url: "https://www.voltvibes-dorsten.de/reparaturen",
    siteName: "VoltVibes",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://www.voltvibes-dorsten.de/og-image.png",
        width: 768,
        height: 768,
        alt: "VoltVibes Dorsten — E-Scooter Reparatur & Werkstatt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Scooter Reparatur Dorsten — VoltVibes",
    description:
      "Fachgerechte E-Scooter-Reparatur mit Originalteilen in Dorsten. Annahme auch in Bottrop & Recklinghausen.",
    images: ["https://www.voltvibes-dorsten.de/og-image.png"],
  },
}

export default function ReparaturenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
