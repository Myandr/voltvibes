import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "News & Events — VoltVibes Dorsten | Neuigkeiten & Aktionen",
  description:
    "Aktuelle News, Angebote und Events von VoltVibes Dorsten. Bleib auf dem Laufenden über Neuheiten, Aktionen und die bevorstehende Eröffnung in Göttingen.",
  keywords: [
    "VoltVibes News",
    "VoltVibes Events Dorsten",
    "E-Scooter Angebote Dorsten",
    "VoltVibes Aktionen",
    "VoltVibes Göttingen Eröffnung",
  ],
  alternates: {
    canonical: "https://www.voltvibes-dorsten.de/news-and-events",
  },
  openGraph: {
    title: "News & Events — VoltVibes Dorsten",
    description:
      "Aktuelle News, Angebote und Events rund um VoltVibes — bleib auf dem Laufenden.",
    url: "https://www.voltvibes-dorsten.de/news-and-events",
    siteName: "VoltVibes",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://www.voltvibes-dorsten.de/og-image.png",
        width: 768,
        height: 768,
        alt: "VoltVibes Dorsten — News & Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Events — VoltVibes Dorsten",
    description:
      "Alle Neuigkeiten, Aktionen und Events von VoltVibes Dorsten auf einen Blick.",
    images: ["https://www.voltvibes-dorsten.de/og-image.png"],
  },
}

export default function NewsEventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
