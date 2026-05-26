import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import Image from 'next/image';

const services = [
  {
    num: '01',
    title: 'Reifenpannen-Service',
    desc: 'Platter Reifen? Unser erfahrenes Team tauscht deinen Reifen schnell und zuverlässig aus — damit du so schnell wie möglich wieder fahren kannst.',
    img: '/images/gallery-3.jpg',
    imgPos: 'center center',
  },
  {
    num: '02',
    title: 'Bremsen & Akkus',
    desc: 'Ob nachlassende Bremsleistung oder schwacher Akku — wir prüfen, reparieren und tauschen alle gängigen Komponenten deines E-Scooters.',
    img: '/images/gallery-1.jpg',
    imgPos: 'center center',
  },
  {
    num: '03',
    title: 'Ersatzteile & Zubehör',
    desc: 'Neue Reifen, Bremsen, Akkus oder praktisches Zubehör — wir führen alles, was du für deinen Scooter brauchst, direkt vor Ort.',
    img: '/images/gallery-2.jpg',
    imgPos: 'center center',
  },
  {
    num: '04',
    title: 'Stunt Scooter Verkauf & Beratung',
    desc: 'Hochwertige Stunt Scooter von Core, Type-R, Panda und weiteren Top-Marken — inklusive Helme und Schutzausrüstung. Lass dich von uns kompetent beraten.',
    img: '/images/1779538765056-image_generation-google.png',
    imgPos: 'center top',
  },
  {
    num: '05',
    title: 'E-Scooter Verkauf',
    desc: 'Neu und gebraucht — eine große Auswahl zugelassener E-Scooter für die Stadt. Probefahrten sind jederzeit möglich.',
    img: '/images/gallery-4.jpg',
    imgPos: 'center top',
  },
  {
    num: '06',
    title: 'Seniorenmobilität',
    desc: 'Komfortable und sichere Elektromobile für Senioren — für mehr Bewegungsfreiheit im Alltag. Wir beraten dich oder deine Angehörigen gerne persönlich.',
    img: '/images/gallery-4.jpg',
    imgPos: 'center center',
  },
];

export default function DienstleistungenPage() {
  return (
    <main className="flex flex-col flex-1">
      <PageHero
        eyebrow="Was wir bieten"
        title="Unsere"
        titleAccent="Dienstleistungen"
        subtitle="Von der Reifenreparatur über Stunt Scooter bis zum Elektromobil — alles aus einer Hand in der Dorstener Innenstadt."
      />

      <section style={{ width: '100%', background: '#fff', padding: '6rem 2rem', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

          {/* Intro */}
          <p style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: '#444', lineHeight: 1.65, maxWidth: '680px', margin: 0, fontWeight: 300 }}>
            Bei VoltVibes Dorsten bekommst du alles rund um deinen Scooter — schnell, fair und persönlich.
            Unser junges, enthusiastisches Team steht dir mit Rat und Tat zur Seite.
          </p>

          {/* Service cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '16px',
            }}
          >
            {services.map(({ num, title, desc, img, imgPos }) => (
              <div
                key={num}
                style={{
                  background: '#f5f5f5',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                  <Image src={img} alt={title} fill style={{ objectFit: 'cover', objectPosition: imgPos }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)' }} />
                  <span
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      fontFamily: 'var(--font-geist-sans), sans-serif',
                      fontSize: '0.72rem',
                      fontWeight: 500,
                      color: '#888',
                      background: 'rgba(255,255,255,0.9)',
                      borderRadius: '999px',
                      padding: '0.25rem 0.75rem',
                    }}
                  >
                    {num}
                  </span>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-bebas), sans-serif',
                      fontSize: '1.6rem',
                      color: '#0e0e0e',
                      margin: 0,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.84rem', color: '#777', margin: 0, lineHeight: 1.6 }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
              borderTop: '1px solid #e8e8e8',
              paddingTop: '3rem',
            }}
          >
            <div style={{ flex: 1, minWidth: '260px' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-bebas), sans-serif',
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  color: '#0e0e0e',
                  margin: '0 0 0.5rem',
                  letterSpacing: '0.02em',
                }}
              >
                Fragen?{' '}
                <em style={{ fontFamily: 'Georgia, serif', color: '#8BBDE8', fontStyle: 'italic', fontWeight: 400 }}>
                  Ruf uns an.
                </em>
              </h2>
              <p style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.9rem', color: '#888', margin: 0, lineHeight: 1.6 }}>
                Wir sind Mo–Fr 12–18 Uhr und Sa 10:30–14 Uhr erreichbar.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="tel:+4923629747100"
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
                }}
              >
                +49 2362 9747100
              </a>
              <a
                href="/reparaturen"
                style={{
                  background: '#f5f5f5',
                  color: '#0e0e0e',
                  borderRadius: '999px',
                  padding: '0.75rem 1.75rem',
                  fontFamily: 'var(--font-geist-sans), sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                Zur Reparatur-Seite →
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
