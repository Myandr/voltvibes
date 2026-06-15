import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CookieBanner from "./components/CookieBanner";
import ScrollToTop from "./components/ScrollToTop";
import { CartProvider } from "@/lib/cart-context";
import { CookieConsentProvider } from "@/lib/cookie-consent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.voltvibes-dorsten.de"),
  title: {
    default: "VoltVibes Dorsten — E-Scooter, Stunt Scooter & Reparatur",
    template: "%s | VoltVibes Dorsten",
  },
  description:
    "VoltVibes Dorsten: Dein Fachgeschäft in der Innenstadt für E-Scooter, Stunt Scooter und Reparaturen. Essener Str. 24, 46282 Dorsten.",
  keywords: ["E-Scooter Dorsten", "VoltVibes", "Stunt Scooter", "E-Scooter Reparatur"],
  authors: [{ name: "VoltVibes" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    siteName: "VoltVibes",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "Kp0rlwmVsmEIdswXJN7XdYydf-KYfehYOt08-6TrhoM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CookieConsentProvider>
          <CartProvider>
            <ScrollToTop />
            <Navbar />
            {children}
            <CookieBanner />
          </CartProvider>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
