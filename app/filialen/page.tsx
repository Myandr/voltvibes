import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

const filialen = [
  {
    city: 'Dorsten',
    status: 'Geöffnet',
    statusColor: '#22c55e',
    address: 'Lippestraße 34',
    zip: '46282 Dorsten',
    hours: [
      { days: 'Montag – Freitag', time: '12:00 – 18:00 Uhr' },
      { days: 'Samstag', time: '10:30 – 14:00 Uhr' },
      { days: 'Sonntag', time: 'Geschlossen' },
    ],
    features: [
      'E-Scooter neu & gebraucht',
      'Stunt Scooter & Zubehör',
      'Probefahrten möglich',
      'Professionelle Reparaturen',
      'Ersatzteile vor Ort',
      'Scooter-Ankauf',
    ],
    phone: '+49 2362 9747100',
    email: 'info@voltvibes-dorsten.de',
    maps: 'https://maps.google.com/?q=Lippestra%C3%9Fe+34,+46282+Dorsten',
    dark: true,
  },
  {
    city: 'Göttingen',
    status: 'Neu eröffnet',
    statusColor: '#8BBDE8',
    address: 'Standort folgt',
    zip: 'Göttingen',
    hours: [
      { days: 'Details', time: 'folgen in Kürze' },
    ],
    features: [
      'E-Scooter Verkauf',
      'Reparaturen',
      'Ersatzteile & Zubehör',
      'Beratung Seniorenmobile',
      'Private Teststrecke',
    ],
    phone: '+49 2362 9747100',
    email: 'info@voltvibes-dorsten.de',
    maps: null,
    dark: false,
  },
];

export default function FilialenPage() {
  return (
    <main className="flex flex-col flex-1">
      <PageHero
        eyebrow="Unsere Standorte"
        title="Filialen &"
        titleAccent="Standorte"
        subtitle="VoltVibes ist in Dorsten und Göttingen für dich da — besuche uns und lass dich persönlich beraten."
      />

      <section style={{ width: '100%', background: '#fff', padding: '6rem 2rem', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '16px', alignItems: 'start' }}>
            {filialen.map(({ city, status, statusColor, address, zip, hours, features, phone, email, maps, dark }) => (
              <div
                key={city}
                style={{
                  background: dark ? '#0C1523' : '#f5f5f5',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h2
                      style={{
                        fontFamily: 'var(--font-bebas), sans-serif',
                        fontSize: '2.4rem',
                        color: dark ? '#fff' : '#0e0e0e',
                        margin: '0 0 0.2rem',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {city}
                    </h2>
                    <p style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.9rem', color: dark ? 'rgba(255,255,255,0.5)' : '#999', margin: 0 }}>
                      {address}, {zip}
                    </p>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-geist-sans), sans-serif',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: statusColor,
                      background: `${statusColor}18`,
                      borderRadius: '999px',
                      padding: '0.3rem 0.85rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {status}
                  </span>
                </div>

                {/* Hours */}
                <div
                  style={{
                    borderTop: `1px solid ${dark ? 'rgba(255,255,255,0.1)' : '#e8e8e8'}`,
                    borderBottom: `1px solid ${dark ? 'rgba(255,255,255,0.1)' : '#e8e8e8'}`,
                    padding: '1.5rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: dark ? 'rgba(255,255,255,0.3)' : '#bbb', display: 'block', marginBottom: '0.25rem' }}>
                    Öffnungszeiten
                  </span>
                  {hours.map(({ days, time }) => (
                    <div key={days} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                      <span style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.85rem', color: dark ? 'rgba(255,255,255,0.45)' : '#999' }}>
                        {days}
                      </span>
                      <span style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.85rem', fontWeight: 600, color: dark ? '#fff' : '#0e0e0e' }}>
                        {time}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: dark ? 'rgba(255,255,255,0.3)' : '#bbb', display: 'block', marginBottom: '0.25rem' }}>
                    Angebot
                  </span>
                  {features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <div
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: '#8BBDE8',
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.85rem', color: dark ? 'rgba(255,255,255,0.7)' : '#555' }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Contact */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    style={{
                      fontFamily: 'var(--font-geist-sans), sans-serif',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: dark ? '#8BBDE8' : '#0C1523',
                      textDecoration: 'none',
                    }}
                  >
                    {phone}
                  </a>
                  <a
                    href={`mailto:${email}`}
                    style={{
                      fontFamily: 'var(--font-geist-sans), sans-serif',
                      fontSize: '0.85rem',
                      color: dark ? 'rgba(255,255,255,0.45)' : '#999',
                      textDecoration: 'none',
                    }}
                  >
                    {email}
                  </a>
                </div>

                {maps && (
                  <a
                    href={maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: dark ? 'rgba(255,255,255,0.08)' : '#e8e8e8',
                      color: dark ? '#fff' : '#0e0e0e',
                      borderRadius: '999px',
                      padding: '0.7rem 1.5rem',
                      fontFamily: 'var(--font-geist-sans), sans-serif',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    In Google Maps öffnen
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Repair pickup note */}
          <div
            style={{
              background: '#f5f5f5',
              borderRadius: '16px',
              padding: '2rem 2.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.5rem',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#0C1523',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8BBDE8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="1"/>
                <path d="M16 8h4l3 6v3h-7V8z"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '1rem', fontWeight: 700, color: '#0e0e0e', margin: '0 0 0.4rem' }}>
                Reparatur-Abholservice
              </h3>
              <p style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.875rem', color: '#777', margin: 0, lineHeight: 1.65 }}>
                Du kannst deinen Scooter auch bei unseren Annahmestellen in{' '}
                <strong style={{ color: '#0e0e0e' }}>Bottrop</strong> (AWK Smart Repair, Boschstraße 9) und{' '}
                <strong style={{ color: '#0e0e0e' }}>Recklinghausen</strong> (Automanufaktur 57, Westring 57) abgeben.
                Unser Servicemobil holt ihn ab und bringt ihn nach der Reparatur zurück.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
