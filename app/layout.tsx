import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CookieBanner from "./components/CookieBanner";
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
  title: "VoltVibes Dorsten — E-Scooter, Stunt Scooter & Reparatur",
  description: "VoltVibes Dorsten: Dein Fachgeschäft in der Innenstadt für E-Scooter, Stunt Scooter und Reparaturen. Lippestraße 34, 46282 Dorsten.",
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
            <Navbar />
            {children}
            <CookieBanner />
          </CartProvider>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
