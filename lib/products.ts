export interface ProductColor {
  name: string
  hex: string
}

export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  id: string
  slug: string
  name: string
  brand: string
  category: string
  categoryLabel: string
  price: number
  originalPrice?: number
  images: string[]
  shortDescription: string
  description: string
  features: string[]
  specs: ProductSpec[]
  sizes?: string[]
  colors?: ProductColor[]
  badge?: string
  inStock: boolean
  rating: number
  reviewCount: number
}

export const categories = [
  { value: "e-scooter",   label: "E-Scooter",              count: 3 },
  { value: "stunt",       label: "Stunt Scooter",           count: 2 },
  { value: "elektromobil",label: "Elektromobile",           count: 1 },
  { value: "helm",        label: "Helme & Schutz",          count: 1 },
  { value: "schloss",     label: "Schlösser & Sicherheit",  count: 1 },
  { value: "tasche",      label: "Taschen & Transport",     count: 1 },
  { value: "ersatzteil",  label: "Ersatzteile & Zubehör",  count: 3 },
]

export const products: Product[] = [
  {
    id: "1",
    slug: "voltvibes-pro-x1",
    name: "VoltVibes Pro X1",
    brand: "VoltVibes",
    category: "e-scooter",
    categoryLabel: "E-Scooter",
    price: 849,
    images: [
      "/images/gallery-1.jpg",
      "/images/gallery-2.jpg",
      "/images/hero-scooter.jpg",
      "/images/gallery-3.jpg",
    ],
    shortDescription: "Der meistverkaufte Stadtscooter mit 40 km Reichweite und vollintegriertem Display.",
    description:
      "Der VoltVibes Pro X1 ist unser Bestseller — entwickelt für den urbanen Alltag. Mit seinem leistungsstarken 350W-Motor und der 10,4 Ah Lithiumbatterie bewältigst du mühelos Steigungen bis 20 % und kommst auf bis zu 40 km Reichweite. Das vollintegrierte LED-Display zeigt Geschwindigkeit, Akkustand und Fahrmodus in Echtzeit. Dank des faltbaren Aluminiumrahmens passt er in jede U-Bahn und jeden Kofferraum.",
    features: [
      "350W bürstenloser Motor",
      "Reichweite bis 40 km",
      "Max. 25 km/h (straßenzugelassen)",
      "10\" Luftreifen für maximalen Fahrkomfort",
      "Doppelte Scheibenbremse vorne & hinten",
      "Vollintegriertes LED-Display",
      "IP54 wassergeschützt",
      "Faltbar in 3 Sekunden",
    ],
    specs: [
      { label: "Motor",            value: "350W bürstenlos" },
      { label: "Akku",             value: "36V / 10,4 Ah Lithium-Ion" },
      { label: "Reichweite",       value: "bis 40 km" },
      { label: "Höchstgeschw.",    value: "25 km/h" },
      { label: "Ladezeit",         value: "ca. 5 Stunden" },
      { label: "Eigengewicht",     value: "12,5 kg" },
      { label: "Zuladung max.",    value: "120 kg" },
      { label: "Reifengröße",      value: "10\" Luftreifen" },
      { label: "Bremsen",          value: "Doppelte Scheibenbremse" },
      { label: "Schutzklasse",     value: "IP54" },
      { label: "Zulassung",        value: "eKFV konform (Deutschland)" },
    ],
    colors: [
      { name: "Schwarz",  hex: "#1a1a1a" },
      { name: "Weiß",     hex: "#f5f5f5" },
      { name: "Rot",      hex: "#dc2626" },
    ],
    badge: "Bestseller",
    inStock: true,
    rating: 4.7,
    reviewCount: 143,
  },
  {
    id: "2",
    slug: "voltvibes-city-s",
    name: "VoltVibes City S",
    brand: "VoltVibes",
    category: "e-scooter",
    categoryLabel: "E-Scooter",
    price: 649,
    images: [
      "/images/gallery-2.jpg",
      "/images/gallery-1.jpg",
      "/images/news-1.jpg",
    ],
    shortDescription: "Leichter Einstieg in die E-Mobilität. Kompakt, leise und straßenzugelassen.",
    description:
      "Der City S richtet sich an Einsteiger, die nicht auf Qualität verzichten wollen. Sein 250W-Motor ist flüsterleise und reicht für den täglichen Weg zur Arbeit oder zur Bahn vollkommen aus. Das kompakte Design und das geringe Gewicht machen ihn zum idealen Begleiter in der Stadt.",
    features: [
      "250W bürstenloser Motor",
      "Reichweite bis 30 km",
      "Max. 20 km/h",
      "8,5\" Vollgummireifen — pannensicher",
      "Scheibenbremse hinten, E-Brake vorne",
      "LED-Frontlicht & Rücklicht integriert",
      "Gewicht nur 10,8 kg",
    ],
    specs: [
      { label: "Motor",         value: "250W bürstenlos" },
      { label: "Akku",          value: "36V / 7,5 Ah Lithium-Ion" },
      { label: "Reichweite",    value: "bis 30 km" },
      { label: "Höchstgeschw.", value: "20 km/h" },
      { label: "Ladezeit",      value: "ca. 4 Stunden" },
      { label: "Eigengewicht",  value: "10,8 kg" },
      { label: "Zuladung max.", value: "100 kg" },
      { label: "Reifengröße",   value: "8,5\" Vollgummi" },
      { label: "Zulassung",     value: "eKFV konform (Deutschland)" },
    ],
    colors: [
      { name: "Schwarz", hex: "#1a1a1a" },
      { name: "Grau",    hex: "#9ca3af" },
    ],
    inStock: true,
    rating: 4.4,
    reviewCount: 87,
  },
  {
    id: "3",
    slug: "voltvibes-sport-max",
    name: "VoltVibes Sport Max",
    brand: "VoltVibes",
    category: "e-scooter",
    categoryLabel: "E-Scooter",
    price: 1299,
    images: [
      "/images/gallery-3.jpg",
      "/images/gallery-4.jpg",
      "/images/news-2.jpg",
      "/images/gallery-1.jpg",
    ],
    shortDescription: "Unser leistungsstärkstes Modell. Dual-Motor, 60 km Reichweite, für anspruchsvolle Fahrer.",
    description:
      "Der Sport Max setzt neue Maßstäbe. Mit zwei 500W-Motoren beschleunigt er auf 25 km/h in unter 4 Sekunden und meistert Steigungen bis 30 % spielend. Die 48V-Batterie mit 15,6 Ah bietet eine Reichweite von bis zu 60 km. Hydraulische Bremsen, gefederte Vordergabel und 10\" Luftreifen sorgen für maximalen Fahrkomfort — auch auf unebenen Straßen.",
    features: [
      "2x 500W Dual-Motor (1000W gesamt)",
      "Reichweite bis 60 km",
      "Max. 25 km/h (straßenzugelassen)",
      "Hydraulische Scheibenbremsen",
      "Gefederte Vordergabel",
      "10\" Luftreifen extra-breit",
      "4\" TFT-Farbdisplay",
      "Bluetooth & App-Anbindung",
      "IP55 wassergeschützt",
    ],
    specs: [
      { label: "Motor",         value: "2× 500W Dual-Motor" },
      { label: "Akku",          value: "48V / 15,6 Ah Lithium-Ion" },
      { label: "Reichweite",    value: "bis 60 km" },
      { label: "Höchstgeschw.", value: "25 km/h" },
      { label: "Ladezeit",      value: "ca. 7 Stunden" },
      { label: "Eigengewicht",  value: "21 kg" },
      { label: "Zuladung max.", value: "130 kg" },
      { label: "Reifengröße",   value: "10\" Luftreifen (extrabreit)" },
      { label: "Bremsen",       value: "Hydraulische Scheibenbremsen" },
      { label: "Display",       value: "4\" TFT-Farb-LCD" },
      { label: "Konnektivität", value: "Bluetooth 5.0 + App" },
      { label: "Schutzklasse",  value: "IP55" },
      { label: "Zulassung",     value: "eKFV konform (Deutschland)" },
    ],
    colors: [
      { name: "Schwarz",    hex: "#1a1a1a" },
      { name: "Grau-Matt",  hex: "#4b5563" },
      { name: "Rot",        hex: "#dc2626" },
    ],
    badge: "Neu",
    inStock: true,
    rating: 4.9,
    reviewCount: 34,
  },
  {
    id: "4",
    slug: "stunt-pro-5",
    name: "Stunt Scooter Pro 5.0",
    brand: "RiderX",
    category: "stunt",
    categoryLabel: "Stunt Scooter",
    price: 249,
    images: [
      "/images/news-3.jpg",
      "/images/gallery-4.jpg",
      "/images/news-4.jpg",
    ],
    shortDescription: "Profi-Stuntscooter für Parks und Straße. Verchromter Stahl, 110mm Rollen.",
    description:
      "Der RiderX Pro 5.0 ist für Rider gebaut, die mehr wollen. Der verstärkte Chromoly-Stahlrahmen hält härteste Tricks aus. Die 110mm Alu-Rollen mit ABEC-9-Lagern rollen butterweich. Kompressive Headset-Technologie für maximale Reaktionsfähigkeit.",
    features: [
      "Chromoly-Stahlrahmen (HIC/SCS kompatibel)",
      "110mm Aluminium-Rollen, ABEC-9",
      "Kompressives Headset",
      "Verstellbarer Lenker 500–600mm",
      "Flache Deck-Form für optimale Kontrolle",
      "Gewicht: 3,8 kg",
    ],
    specs: [
      { label: "Rahmen",    value: "Chromoly Stahl, HIC/SCS" },
      { label: "Rollen",    value: "110mm Alu, ABEC-9" },
      { label: "Lenker",    value: "Verstellbar 500–600mm" },
      { label: "Gewicht",   value: "3,8 kg" },
      { label: "Zuladung",  value: "bis 100 kg" },
      { label: "Empfohlen", value: "ab 12 Jahren" },
    ],
    colors: [
      { name: "Schwarz/Rot",   hex: "#dc2626" },
      { name: "Schwarz/Blau",  hex: "#2563eb" },
      { name: "Raw Steel",     hex: "#9ca3af" },
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 52,
  },
  {
    id: "5",
    slug: "stunt-junior-x",
    name: "Stunt Scooter Junior X",
    brand: "RiderX",
    category: "stunt",
    categoryLabel: "Stunt Scooter",
    price: 109,
    originalPrice: 139,
    images: [
      "/images/news-4.jpg",
      "/images/news-3.jpg",
    ],
    shortDescription: "Perfekter Einstieg für Kinder & Jugendliche. Leicht, robust und sicher.",
    description:
      "Der Junior X ist speziell für Kinder und Jugendliche entwickelt, die mit dem Stunt-Scooter-Sport beginnen wollen. Robuster Stahlrahmen, sichere Bremse und 100mm Rollen mit guter Griffigkeit. Ideal für Skatepark und Schulhof.",
    features: [
      "Stahlrahmen, extra robust",
      "100mm PU-Rollen",
      "Einhand-Hinterradbremse",
      "Niedriges Deck für sichere Kontrolle",
      "Feste Lenkerhöhe 70cm",
      "Gewicht: 2,8 kg",
    ],
    specs: [
      { label: "Rahmen",    value: "Stahl" },
      { label: "Rollen",    value: "100mm PU" },
      { label: "Bremse",    value: "Einhand-Hinterradbremse" },
      { label: "Gewicht",   value: "2,8 kg" },
      { label: "Empfohlen", value: "ab 7 Jahren" },
    ],
    colors: [
      { name: "Grün/Schwarz",   hex: "#16a34a" },
      { name: "Pink/Schwarz",   hex: "#ec4899" },
      { name: "Blau/Schwarz",   hex: "#2563eb" },
    ],
    badge: "Sale",
    inStock: true,
    rating: 4.3,
    reviewCount: 29,
  },
  {
    id: "6",
    slug: "komfort-mobil-senior",
    name: "Komfort-Mobil Senior Plus",
    brand: "EasyGo",
    category: "elektromobil",
    categoryLabel: "Elektromobil",
    price: 1799,
    images: [
      "/images/hero-main.png",
      "/images/image-768x768.png",
      "/images/gallery-2.jpg",
    ],
    shortDescription: "Sicheres, komfortables Elektromobil für Senioren. Stabil, leise und einfach zu bedienen.",
    description:
      "Das Komfort-Mobil Senior Plus bietet Senioren maximale Mobilität und Unabhängigkeit. Der geräuschlose Elektromotor, die stabilen 4 Räder und das ergonomische Design machen es zur perfekten Alternative zum Rollator oder Rollstuhl. Einfache Bedienung durch großen Daumengas-Hebel und intuitive Steuerung.",
    features: [
      "Stabiler 4-Räder Antrieb",
      "Leiser 250W Elektromotor",
      "Reichweite bis 35 km",
      "Komfort-Sitz mit Armlehnen",
      "Korb hinten für Einkäufe",
      "Lenkstange höhenverstellbar",
      "Automatische Feststellbremse",
      "Max. 10 km/h",
      "Zugelassen für Gehwege",
    ],
    specs: [
      { label: "Motor",         value: "250W bürstenlos" },
      { label: "Reichweite",    value: "bis 35 km" },
      { label: "Höchstgeschw.", value: "10 km/h" },
      { label: "Ladezeit",      value: "ca. 8 Stunden" },
      { label: "Eigengewicht",  value: "38 kg" },
      { label: "Zuladung max.", value: "150 kg" },
      { label: "Sitz",          value: "Gepolstert mit Armlehnen" },
      { label: "Zulassung",     value: "Gehwegzugelassen (§24 StVO)" },
    ],
    colors: [
      { name: "Blau-Silber",  hex: "#60a5fa" },
      { name: "Rot-Silber",   hex: "#dc2626" },
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 21,
  },
  {
    id: "7",
    slug: "helm-urban-shield",
    name: "Helm Urban Shield",
    brand: "SafeRide",
    category: "helm",
    categoryLabel: "Helme & Schutz",
    price: 89,
    images: [
      "/images/news-2.jpg",
      "/images/gallery-4.jpg",
    ],
    shortDescription: "Zertifizierter Stadthelm mit integriertem LED-Rücklicht. Leicht und belüftet.",
    description:
      "Der Urban Shield kombiniert Schutz, Stil und Sichtbarkeit. CE EN1078-zertifiziert, mit 18 Belüftungskanälen für optimale Luftzirkulation. Das integrierte LED-Rücklicht erhöht die Sichtbarkeit im Straßenverkehr. Komfortables Innenfutter, abnehmbar und waschbar.",
    features: [
      "CE EN1078 zertifiziert",
      "18 Belüftungskanäle",
      "Integriertes LED-Rücklicht",
      "Verstellbarer Kinnriemen",
      "Abnehmb. waschbares Innenfutter",
      "Gewicht: 280g",
    ],
    specs: [
      { label: "Zertifizierung", value: "CE EN1078" },
      { label: "Belüftung",      value: "18 Kanäle" },
      { label: "Licht",          value: "Integriertes LED-Rücklicht" },
      { label: "Gewicht",        value: "280 g" },
    ],
    sizes: ["S (52–55 cm)", "M (55–58 cm)", "L (58–61 cm)", "XL (61–64 cm)"],
    colors: [
      { name: "Schwarz Matt", hex: "#1a1a1a" },
      { name: "Weiß",         hex: "#f5f5f5" },
      { name: "Grau",         hex: "#9ca3af" },
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 67,
  },
  {
    id: "8",
    slug: "faltschloss-titan-180",
    name: "Faltschloss Titan 180",
    brand: "LockPro",
    category: "schloss",
    categoryLabel: "Schlösser & Sicherheit",
    price: 49,
    images: [
      "/images/news-1.jpg",
      "/images/gallery-3.jpg",
    ],
    shortDescription: "180cm Faltschloss aus gehärtetem Stahl. Mit Halterung, Zahlencode oder Schlüssel.",
    description:
      "Das Faltschloss Titan 180 bietet maximale Sicherheit für deinen E-Scooter. Aus 5mm gehärtetem Stahl, mit 12 Scharnieren für maximale Biegefreiheit. Wahlweise mit 4-stelligem Zahlencode oder 3 Schlüsseln.",
    features: [
      "180cm Länge, 5mm Stahlglied",
      "Gehärteter Stahl — säge- & bolzenschneiderfest",
      "12 Scharniere, flexibel",
      "Wahl: Zahlencode oder Schlüssel",
      "Halterung inklusive",
      "Gewicht: 680g",
    ],
    specs: [
      { label: "Länge",     value: "180 cm" },
      { label: "Stärke",    value: "5 mm Stahl gehärtet" },
      { label: "Varianten", value: "Zahlencode oder Schlüssel" },
      { label: "Gewicht",   value: "680 g" },
    ],
    sizes: ["Zahlencode", "3 Schlüssel"],
    badge: "Bestseller",
    inStock: true,
    rating: 4.6,
    reviewCount: 114,
  },
  {
    id: "9",
    slug: "carry-bag-xl",
    name: "Carry Bag XL",
    brand: "VoltVibes",
    category: "tasche",
    categoryLabel: "Taschen & Transport",
    price: 39,
    images: [
      "/images/news-4.jpg",
      "/images/gallery-3.jpg",
    ],
    shortDescription: "Robuste Transporttasche für E-Scooter bis 14 kg. Wasserabweisend, mit Schulterriemen.",
    description:
      "Die Carry Bag XL schützt deinen E-Scooter beim Transport und bewahrt ihn vor Kratzern. Aus wasserabweisendem 600D-Polyester, mit gepolstertem Boden und verstellbarem Schulterriemen. Passend für alle gängigen Faltscooter bis 14 kg.",
    features: [
      "600D Polyester wasserabweisend",
      "Gepolsterter Boden",
      "Verstellbarer Schulterriemen",
      "Reißverschluss-Hauptfach",
      "Seitliche Netz-Außentaschen",
      "Passend für Scooter bis 14 kg",
    ],
    specs: [
      { label: "Material",  value: "600D Polyester" },
      { label: "Max. Last", value: "14 kg" },
      { label: "Maße",      value: "115 × 45 × 15 cm" },
    ],
    colors: [
      { name: "Schwarz", hex: "#1a1a1a" },
      { name: "Grau",    hex: "#6b7280" },
    ],
    inStock: true,
    rating: 4.2,
    reviewCount: 38,
  },
  {
    id: "10",
    slug: "ersatzbatterie-36v",
    name: "Ersatzbatterie 36V 10,4 Ah",
    brand: "VoltVibes",
    category: "ersatzteil",
    categoryLabel: "Ersatzteile & Zubehör",
    price: 299,
    images: [
      "/images/gallery-1.jpg",
      "/images/news-1.jpg",
    ],
    shortDescription: "Original-Ersatzbatterie für VoltVibes Pro X1. 36V, 10,4 Ah, BMS-gesichert.",
    description:
      "Die Original VoltVibes Ersatzbatterie mit 36V und 10,4 Ah ist kompatibel mit dem Pro X1 und City S. Integriertes BMS schützt vor Überladung, Tiefentladung und Kurzschluss. Zellen von Markenherstellern, 500 Ladezyklen garantiert.",
    features: [
      "Kompatibel mit Pro X1 & City S",
      "Integriertes BMS (Battery Management System)",
      "500+ Ladezyklen garantiert",
      "Markenzellen (Sony/LG)",
      "CE & RoHS zertifiziert",
    ],
    specs: [
      { label: "Spannung",     value: "36V" },
      { label: "Kapazität",    value: "10,4 Ah / 374 Wh" },
      { label: "Ladezyklen",   value: "500+" },
      { label: "Kompatibel",   value: "Pro X1, City S" },
      { label: "Gewicht",      value: "2,1 kg" },
      { label: "Zertifikate",  value: "CE, RoHS, UN38.3" },
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 19,
  },
  {
    id: "11",
    slug: "schutzblech-set",
    name: "Schutzblech-Set Pro",
    brand: "VoltVibes",
    category: "ersatzteil",
    categoryLabel: "Ersatzteile & Zubehör",
    price: 29,
    images: [
      "/images/gallery-4.jpg",
      "/images/news-3.jpg",
    ],
    shortDescription: "Ersatz-Schutzblech vorne + hinten für VoltVibes Pro X1 und City S.",
    description:
      "Originales Schutzblech-Set aus stabilem ABS-Kunststoff. Kompatibel mit Pro X1 und City S. Einfache Montage ohne Werkzeug.",
    features: [
      "Schutzblech vorne + hinten",
      "ABS-Kunststoff, robust",
      "Werkzeuglose Montage",
      "Kompatibel mit Pro X1 & City S",
    ],
    specs: [
      { label: "Material",      value: "ABS-Kunststoff" },
      { label: "Kompatibel",    value: "Pro X1, City S" },
      { label: "Lieferumfang",  value: "Vorne + Hinten" },
    ],
    colors: [
      { name: "Schwarz", hex: "#1a1a1a" },
      { name: "Weiß",    hex: "#f5f5f5" },
    ],
    inStock: true,
    rating: 4.1,
    reviewCount: 12,
  },
  {
    id: "12",
    slug: "lenkergriffe-sport",
    name: "Lenkergriffe Sport Duo",
    brand: "GripTec",
    category: "ersatzteil",
    categoryLabel: "Ersatzteile & Zubehör",
    price: 19,
    images: [
      "/images/gallery-2.jpg",
      "/images/news-2.jpg",
    ],
    shortDescription: "Anti-Rutsch Lenkergriffe aus EVA-Schaum. Universal-Innenmaß 22mm.",
    description:
      "Die GripTec Sport Duo Lenkergriffe bieten maximalen Grip bei jedem Wetter. Anatomisch geformter EVA-Schaum absorbiert Vibrationen und schützt die Hände. Universal-Innenmaß 22mm, passend für nahezu alle Scooter.",
    features: [
      "EVA-Schaum, vibrationsdämpfend",
      "Anti-Rutsch Textur",
      "Innenmaß 22mm (Universal)",
      "Länge: 130mm",
      "Inkl. Lenkerendstopfen",
    ],
    specs: [
      { label: "Material",  value: "EVA-Schaum" },
      { label: "Innenmaß",  value: "22mm (Universal)" },
      { label: "Länge",     value: "130 mm" },
    ],
    colors: [
      { name: "Schwarz",      hex: "#1a1a1a" },
      { name: "Schwarz/Rot",  hex: "#dc2626" },
      { name: "Schwarz/Blau", hex: "#2563eb" },
    ],
    inStock: true,
    rating: 4.4,
    reviewCount: 56,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(product: Product, count = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, count)
    .concat(
      products
        .filter((p) => p.id !== product.id && p.category !== product.category)
        .slice(0, Math.max(0, count - products.filter((p) => p.id !== product.id && p.category === product.category).length))
    )
    .slice(0, count)
}
