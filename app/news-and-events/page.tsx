import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import Image from 'next/image';

const news = [
  {
    id: 1,
    date: '15. November 2025',
    tag: 'Event',
    title: 'VoltVibes beim Dorstener Nachhaltigkeitstag',
    desc: 'Wir nehmen am Dorstener Nachhaltigkeitstag teil und laden euch zu einem inspirierenden Tag voller Workshops, Vorträge und spannender Veranstaltungen ein. Treffpunkt: VHS Dorsten, Im Werth 6. Kommt vorbei und lasst uns gemeinsam über nachhaltige Mobilität sprechen.',
    location: 'VHS Dorsten, Im Werth 6',
    img: '/images/gallery-1.jpg',
    imgPos: 'center center',
  },
  {
    id: 2,
    date: '2025',
    tag: 'Sortiment',
    title: 'Neu im Sortiment: Stunt Scooter für Kinder',
    desc: 'Wir erweitern unser Angebot um hochwertige Stunt Scooter speziell für Kinder — mit stabiler Bauweise, hoher Sicherheit und modernem Design. Geeignet für Einsteiger und erfahrenere junge Fahrer. Komm vorbei und lass dich beraten.',
    location: 'VoltVibes Dorsten, Lippestraße 34',
    img: '/images/1779538765056-image_generation-google.png',
    imgPos: 'center top',
  },
];

export default function NewsPage() {
  return (
    <main className="flex flex-col flex-1">
      <PageHero
        eyebrow="Aktuell"
        title="News &"
        titleAccent="Events"
        subtitle="Neuigkeiten, Aktionen und Veranstaltungen rund um VoltVibes Dorsten."
      />

      <section style={{ width: '100%', background: '#fff', padding: '6rem 2rem', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

          {/* News cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', background: '#e8e8e8', border: '1px solid #e8e8e8', borderRadius: '20px', overflow: 'hidden' }}>
            {news.map(({ id, date, tag, title, desc, location, img, imgPos }) => (
              <article
                key={id}
                style={{
                  background: '#fff',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  minHeight: '360px',
                  gap: 0,
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden', minHeight: '280px' }}>
                  <Image
                    src={img}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover', objectPosition: imgPos }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.25) 0%, transparent 100%)' }} />
                  <span
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      left: '1.25rem',
                      fontFamily: 'var(--font-geist-sans), sans-serif',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: '#111',
                      background: '#fff',
                      borderRadius: '999px',
                      padding: '0.3rem 0.85rem',
                    }}
                  >
                    {tag}
                  </span>
                </div>

                <div
                  style={{
                    padding: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1.5rem',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-geist-sans), sans-serif',
                        fontSize: '0.8rem',
                        color: '#aaa',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {date}
                    </span>
                    <h2
                      style={{
                        fontFamily: 'var(--font-bebas), sans-serif',
                        fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                        color: '#0e0e0e',
                        margin: 0,
                        letterSpacing: '0.02em',
                        lineHeight: 1.1,
                      }}
                    >
                      {title}
                    </h2>
                    <p
                      style={{
                        fontFamily: 'var(--font-geist-sans), sans-serif',
                        fontSize: '0.875rem',
                        color: '#666',
                        margin: 0,
                        lineHeight: 1.7,
                      }}
                    >
                      {desc}
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid #f0f0f0',
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.8rem', color: '#aaa' }}>
                      {location}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Stay updated */}
          <div
            style={{
              background: '#f5f5f5',
              borderRadius: '16px',
              padding: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-bebas), sans-serif',
                  fontSize: '1.8rem',
                  color: '#0e0e0e',
                  margin: '0 0 0.4rem',
                  letterSpacing: '0.02em',
                }}
              >
                Immer auf dem Laufenden bleiben
              </h3>
              <p style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.875rem', color: '#888', margin: 0 }}>
                Folge uns auf Instagram für tägliche Updates, Angebote und News aus dem Shop.
              </p>
            </div>
            <a
              href="https://instagram.com/voltvibes_dorsten"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#0C1523',
                color: '#fff',
                borderRadius: '999px',
                padding: '0.75rem 1.75rem',
                fontFamily: 'var(--font-geist-sans), sans-serif',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="1.8"/>
                <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8"/>
                <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor"/>
              </svg>
              @voltvibes_dorsten
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
