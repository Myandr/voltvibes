import Image from "next/image";

interface ReparaturenAboutProps {
  title?: string;
  description?: string;
  mainImage?: { src: string; alt: string };
  secondaryImage?: { src: string; alt: string };
  breakout?: {
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  annahmestellenTitle?: string;
  annahmestellen?: Array<{ name: string; address: string; city: string }>;
  statsTitle?: string;
  statsDescription?: string;
  stats?: Array<{ label: string; value: string }>;
}

const defaultAnnahmestellen = [
  { name: "VoltVibes Dorsten", address: "Essener Str. 24", city: "46282 Dorsten" },
  { name: "AWK Smart Repair", address: "Boschstraße 9", city: "46244 Bottrop" },
  { name: "Automanufaktur 57", address: "Westring 57", city: "45659 Recklinghausen" },
];

const defaultStats = [
  { label: "Reparaturen pro Jahr", value: "500+" },
  { label: "Zufriedene Kunden", value: "98%" },
  { label: "Standorte", value: "2" },
  { label: "Jahre Erfahrung", value: "5+" },
];

const LEISTUNGEN = [
  {
    label: "Reifen & Schläuche",
    desc: "Plattfuß oder Reifenwechsel — schnell erledigt.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="8" /><line x1="12" y1="16" x2="12" y2="22" />
        <line x1="2" y1="12" x2="8" y2="12" /><line x1="16" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    label: "Bremsen & Leitungen",
    desc: "Beläge, Züge und Hydraulik für sichere Fahrt.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    label: "Akku & Ladekabel",
    desc: "Akkutausch, Zellencheck und Ladeoptimierung.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    label: "Motor & Antrieb",
    desc: "Nabenmotor, Mittelmotor, Regler — alle Systeme.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M6.3 6.3a8 8 0 1 0 11.31 0" />
        <line x1="12" y1="2" x2="12" y2="4" />
      </svg>
    ),
  },
  {
    label: "Beleuchtung",
    desc: "Front- und Rücklicht, Blinker und Displays.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
  },
  {
    label: "Rahmen & Lenkung",
    desc: "Schweißarbeiten, Falzmechanik und Lenker.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

const SCHRITTE = [
  {
    num: "01",
    label: "Annahme",
    desc: "Bring deinen Scooter vorbei oder nutze unseren Abholservice aus Bottrop oder Recklinghausen.",
  },
  {
    num: "02",
    label: "Diagnose",
    desc: "Wir prüfen gründlich und erstellen einen kostenlosen Kostenvoranschlag.",
  },
  {
    num: "03",
    label: "Reparatur",
    desc: "Unser Team repariert schnell — meist noch am selben oder nächsten Tag.",
  },
  {
    num: "04",
    label: "Fertig",
    desc: "Hol deinen Scooter ab oder lass ihn direkt zu dir zurückbringen.",
  },
];

const EYEBROW: React.CSSProperties = {
  fontFamily: "var(--font-geist-sans), sans-serif",
  fontSize: "0.7rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#8BBDE8",
  fontWeight: 600,
};

const BEBAS = (size: string, color = "#0C1523"): React.CSSProperties => ({
  fontFamily: "var(--font-bebas), sans-serif",
  fontSize: size,
  letterSpacing: "0.02em",
  color,
  margin: 0,
  lineHeight: 1,
});

const BODY = (color = "#666"): React.CSSProperties => ({
  fontFamily: "var(--font-geist-sans), sans-serif",
  fontSize: "0.875rem",
  lineHeight: 1.7,
  color,
  margin: 0,
});

export const ReparaturenAbout = ({
  title = "Professionelle Reparatur",
  description = "Platte Reifen, defekte Bremsen oder schwacher Akku — unser Team in Dorsten bringt deinen Scooter schnell und zuverlässig wieder in Fahrt.",
  mainImage = { src: "/images/gallery-3.jpg", alt: "Scooter Reparatur VoltVibes Dorsten" },
  secondaryImage = { src: "/images/gallery-1.jpg", alt: "VoltVibes Werkstatt Dorsten" },
  breakout = {
    title: "Rundum-Service mit Abholservice",
    description: "Gib deinen Scooter bei einer unserer Annahmestellen ab — unser Servicemobil holt ihn ab und bringt ihn nach der Reparatur zurück.",
    buttonText: "Termin vereinbaren",
    buttonUrl: "/kontakt",
  },
  annahmestellenTitle = "Werkstatt & Annahmestellen",
  annahmestellen = defaultAnnahmestellen,
  statsTitle = "Unser Service in Zahlen",
  statsDescription = "Schnelle Reparaturen, faire Preise und persönliche Beratung direkt in der Dorstener Innenstadt.",
  stats = defaultStats,
}: ReparaturenAboutProps = {}) => {
  return (
    <>
      {/* ── 1. INTRO ─────────────────────────────── */}
      <section style={{ background: "#fff", padding: "clamp(5rem, 10vw, 8rem) 0 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 3rem)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">

            {/* Left: text */}
            <div style={{ paddingBottom: "clamp(3rem, 6vw, 5rem)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div style={{ width: "2rem", height: "1.5px", background: "#8BBDE8" }} />
                <span style={EYEBROW}>Werkstatt Dorsten</span>
              </div>

              <h2 style={{ ...BEBAS("clamp(3.5rem, 6vw, 5.5rem)"), margin: "0 0 1.75rem" }}>
                {title}
              </h2>

              <p style={{ ...BODY(), maxWidth: "420px", margin: "0 0 2.5rem", fontSize: "1rem" }}>
                {description}
              </p>

              <a
                href={breakout.buttonUrl}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.8rem 2rem",
                  background: "#0C1523",
                  color: "#fff",
                  fontFamily: "var(--font-geist-sans), sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                }}
              >
                {breakout.buttonText}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Mobile image */}
            <div className="block lg:hidden" style={{ position: "relative", height: "300px", overflow: "hidden" }}>
              <Image src={secondaryImage.src} alt={secondaryImage.alt} fill style={{ objectFit: "cover" }} />
            </div>

            {/* Right: image with floating card */}
            <div className="hidden lg:block" style={{ position: "relative", height: "580px" }}>
              <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
                <Image src={mainImage.src} alt={mainImage.alt} fill style={{ objectFit: "cover" }} />
                {/* Subtle dark vignette at bottom */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
                  background: "linear-gradient(to top, rgba(12,21,35,0.6), transparent)",
                }} />
              </div>

              {/* Floating info card */}
              <div style={{
                position: "absolute",
                bottom: "0",
                left: "-2.5rem",
                background: "#0C1523",
                padding: "1.75rem 2rem",
                width: "300px",
                zIndex: 10,
              }}>
                <p style={{ ...BEBAS("1.375rem", "#8BBDE8"), margin: "0 0 0.6rem", lineHeight: 1.2 }}>
                  {breakout.title}
                </p>
                <p style={{ ...BODY("rgba(255,255,255,0.45)"), fontSize: "0.8rem" }}>
                  {breakout.description}
                </p>
              </div>

              {/* Corner accent */}
              <div style={{
                position: "absolute",
                top: "-1px",
                right: "-1px",
                width: "4px",
                height: "4rem",
                background: "#8BBDE8",
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SERVICES GRID ─────────────────────────────── */}
      <section style={{ background: "#0C1523", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 3rem)" }}>
          <div
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
            style={{ marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h2 style={{ ...BEBAS("clamp(2rem, 4.5vw, 3.25rem)", "#fff") }}>
              Was wir reparieren
            </h2>
            <p className="text-right" style={{ ...BODY("rgba(255,255,255,0.3)"), maxWidth: "260px", fontSize: "0.82rem" }}>
              Alle Marken, alle Modelle — von günstig bis Premium.
            </p>
          </div>

          {/* Grid with CSS border technique */}
          <div
            className="grid grid-cols-2 lg:grid-cols-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)", borderLeft: "1px solid rgba(255,255,255,0.08)" }}
          >
            {LEISTUNGEN.map((l) => (
              <div
                key={l.label}
                style={{
                  padding: "clamp(1.5rem, 3vw, 2.25rem)",
                  borderRight: "1px solid rgba(255,255,255,0.08)",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div style={{ color: "#8BBDE8" }}>{l.icon}</div>
                <div>
                  <p style={{ ...BEBAS("1.2rem", "#fff"), margin: "0 0 0.4rem", letterSpacing: "0.04em" }}>
                    {l.label}
                  </p>
                  <p style={{ ...BODY("rgba(255,255,255,0.3)"), fontSize: "0.8rem" }}>
                    {l.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. PROCESS STEPS ─────────────────────────────── */}
      <section style={{ background: "#F4F4F1", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 3rem)" }}>
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{ width: "2rem", height: "1.5px", background: "#8BBDE8" }} />
              <span style={EYEBROW}>Ablauf</span>
            </div>
            <h2 style={{ ...BEBAS("clamp(2rem, 4.5vw, 3.25rem)") }}>
              So läuft&apos;s ab
            </h2>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{ borderTop: "2px solid #0C1523", paddingTop: "2.5rem", gap: "0" }}
          >
            {SCHRITTE.map((step, i) => (
              <div
                key={step.num}
                style={{
                  paddingRight: "2rem",
                  paddingLeft: i > 0 ? "2rem" : "0",
                  borderRight: i < SCHRITTE.length - 1 ? "1px solid #ddd" : "none",
                }}
                className={i > 0 ? "border-l border-[#ddd] lg:border-l-0" : ""}
              >
                {/* Step number box */}
                <div style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  background: i === 1 ? "#8BBDE8" : "#0C1523",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                }}>
                  <span style={{
                    ...BEBAS("1.25rem", i === 1 ? "#0C1523" : "#8BBDE8"),
                    letterSpacing: "0.06em",
                  }}>{step.num}</span>
                </div>
                <p style={{ ...BEBAS("1.2rem"), letterSpacing: "0.04em", margin: "0 0 0.6rem" }}>
                  {step.label}
                </p>
                <p style={{ ...BODY("#888"), fontSize: "0.825rem" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. STATS ─────────────────────────────── */}
      <section style={{ background: "#0C1523", padding: "clamp(4rem, 7vw, 6rem) 0", position: "relative", overflow: "hidden" }}>
        {/* Grid texture */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(139,189,232,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139,189,232,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          zIndex: 0,
        }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 3rem)", position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ ...BEBAS("clamp(2rem, 4.5vw, 3.25rem)", "#fff"), margin: "0 0 0.75rem" }}>
              {statsTitle}
            </h2>
            <p style={{ ...BODY("rgba(255,255,255,0.3)"), maxWidth: "420px" }}>
              {statsDescription}
            </p>
          </div>

          <div
            className="grid grid-cols-2 lg:grid-cols-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)", borderLeft: "1px solid rgba(255,255,255,0.08)" }}
          >
            {stats.map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.5rem)",
                  borderRight: "1px solid rgba(255,255,255,0.08)",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p style={{ ...BEBAS("clamp(3.5rem, 6vw, 5.5rem)", "#8BBDE8"), margin: "0 0 0.5rem" }}>
                  {item.value}
                </p>
                <p style={{
                  fontFamily: "var(--font-geist-sans), sans-serif",
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  margin: 0,
                }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. LOCATIONS ─────────────────────────────── */}
      <section style={{ background: "#fff", padding: "clamp(4rem, 7vw, 6rem) 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 3rem)" }}>
          <div
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
            style={{ marginBottom: "2.5rem" }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <div style={{ width: "2rem", height: "1.5px", background: "#8BBDE8" }} />
                <span style={EYEBROW}>Standorte</span>
              </div>
              <h2 style={{ ...BEBAS("clamp(2rem, 4.5vw, 3.25rem)") }}>
                {annahmestellenTitle}
              </h2>
            </div>
            <p style={{ ...BODY("#aaa"), maxWidth: "240px", fontSize: "0.82rem" }}>
              Bring deinen Scooter vorbei oder nutze unseren Abholservice.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ border: "1px solid #e8e8e8" }}
          >
            {annahmestellen.map((s, i) => (
              <div
                key={s.name}
                style={{
                  padding: "2.5rem",
                  borderRight: "1px solid #e8e8e8",
                  borderBottom: "1px solid #e8e8e8",
                  marginRight: i === annahmestellen.length - 1 ? "-1px" : "0",
                }}
              >
                {/* Badge */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
                  <div style={{ width: "6px", height: "6px", background: "#8BBDE8", borderRadius: "50%", flexShrink: 0 }} />
                  <span style={{
                    fontFamily: "var(--font-geist-sans), sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#8BBDE8",
                    fontWeight: 700,
                  }}>
                    {i === 0 ? "Hauptwerkstatt" : "Annahmestelle"}
                  </span>
                </div>

                <p style={{ ...BEBAS("1.4rem"), letterSpacing: "0.03em", margin: "0 0 0.5rem" }}>
                  {s.name}
                </p>
                <p style={{ ...BODY("#888") }}>
                  {s.address}<br />{s.city}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA BAR ─────────────────────────────── */}
      <section style={{ background: "#fff", paddingBottom: "clamp(4rem, 7vw, 6rem)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 3rem)" }}>
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
            style={{
              background: "#0C1523",
              padding: "clamp(2.5rem, 5vw, 3.5rem) clamp(2rem, 4vw, 3rem)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Accent strip */}
            <div style={{
              position: "absolute",
              top: 0, left: 0,
              width: "4px",
              height: "100%",
              background: "#8BBDE8",
            }} />

            <div>
              <h3 style={{ ...BEBAS("clamp(1.75rem, 3.5vw, 2.5rem)", "#fff"), margin: "0 0 0.4rem" }}>
                Direkt anfragen
              </h3>
              <p style={{ ...BODY("rgba(255,255,255,0.35)") }}>
                Telefon oder WhatsApp — wir antworten schnell.
              </p>
            </div>

            <div className="flex flex-wrap gap-3" style={{ flexShrink: 0 }}>
              <a
                href="tel:+4923629747100"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.8rem 1.75rem",
                  background: "#8BBDE8",
                  color: "#0C1523",
                  fontFamily: "var(--font-geist-sans), sans-serif",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                }}
              >
                +49 2362 9747100
              </a>
              <a
                href="https://wa.me/4915122029036"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.8rem 1.75rem",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff",
                  fontFamily: "var(--font-geist-sans), sans-serif",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                  background: "transparent",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.099 1.514 5.818L0 24l6.335-1.482A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
