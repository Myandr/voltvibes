import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import Image from 'next/image';

const values = [
  {
    title: 'Schnelligkeit',
    desc: 'Wir wissen, wie wichtig dein Scooter für dich ist. Deshalb reparieren wir so schnell wie möglich — ohne Kompromisse bei der Qualität.',
  },
  {
    title: 'Fachwissen',
    desc: 'Unser Team kennt E-Scooter und Stunt Scooter in- und auswendig. Von der kleinen Reparatur bis zur komplexen Diagnose.',
  },
  {
    title: 'Persönlichkeit',
    desc: 'Kein anonymer Großkonzern — bei uns wirst du persönlich beraten, direkt in der Dorstener Innenstadt.',
  },
  {
    title: 'Leidenschaft',
    desc: 'Wir leben das, was wir tun. Die Begeisterung für Scooter steckt in jeder Reparatur und jeder Beratung.',
  },
];

export default function DasTeamPage() {
  return (
    <main className="flex flex-col flex-1">
      <PageHero
        eyebrow="Menschen hinter VoltVibes"
        title="Das"
        titleAccent="Team"
        subtitle="Ein junges, dynamisches Team — vereint durch die Leidenschaft für Scooter und die Vision, die erste Anlaufstelle für E-Mobilität in Dorsten zu sein."
      />

      <section style={{ width: '100%', background: '#fff', padding: '6rem 2rem', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '5rem' }}>

          {/* Founder */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div style={{ position: 'relative', height: '480px', borderRadius: '20px', overflow: 'hidden', background: '#f5f5f5' }}>
              <Image
                src="/images/gallery-4.jpg"
                alt="Markus — Gründer VoltVibes"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,21,35,0.6) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: '1.75rem', left: '1.75rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-geist-sans), sans-serif',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#8BBDE8',
                    background: 'rgba(12,21,35,0.7)',
                    borderRadius: '999px',
                    padding: '0.3rem 0.85rem',
                    display: 'block',
                    width: 'fit-content',
                    marginBottom: '0.4rem',
                  }}
                >
                  Gründer
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-bebas), sans-serif',
                    fontSize: '2.4rem',
                    color: '#fff',
                    margin: 0,
                    letterSpacing: '0.02em',
                  }}
                >
                  Markus
                </h2>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-bebas), sans-serif',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  color: '#0e0e0e',
                  margin: 0,
                  letterSpacing: '0.02em',
                  lineHeight: 1.05,
                }}
              >
                Eine Idee,{' '}
                <em style={{ fontFamily: 'Georgia, serif', color: '#8BBDE8', fontStyle: 'italic', fontWeight: 400 }}>
                  ein Team
                </em>
              </h2>
              <p style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '1rem', color: '#555', lineHeight: 1.75, margin: 0, fontWeight: 300 }}>
                Markus und sein dynamisches, junges Team haben sich zusammengeschlossen, um die Idee von VoltVibes
                Dorsten voranzubringen — die zentrale Anlaufstelle für E-Scooter-Reparaturen und Scooter-Verkauf
                mitten in der Dorstener Innenstadt.
              </p>
              <p style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '1rem', color: '#555', lineHeight: 1.75, margin: 0, fontWeight: 300 }}>
                Das gemeinsame Ziel: erstklassigen Service bieten und dafür sorgen, dass jeder Scooter
                schnell und zuverlässig wieder einsatzbereit ist — persönlich, kompetent, leidenschaftlich.
              </p>
              <div style={{ display: 'flex', gap: '1rem', paddingTop: '0.5rem' }}>
                <a
                  href="/kontakt"
                  style={{
                    background: '#0C1523',
                    color: '#fff',
                    borderRadius: '999px',
                    padding: '0.75rem 1.75rem',
                    fontFamily: 'var(--font-geist-sans), sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  Uns kontaktieren
                </a>
                <a
                  href="https://instagram.com/voltvibes_dorsten"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#f5f5f5',
                    color: '#0e0e0e',
                    borderRadius: '999px',
                    padding: '0.75rem 1.75rem',
                    fontFamily: 'var(--font-geist-sans), sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  Instagram →
                </a>
              </div>
            </div>
          </div>

          {/* Values */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#0e0e0e',
                margin: 0,
                letterSpacing: '0.02em',
              }}
            >
              Was uns{' '}
              <em style={{ fontFamily: 'Georgia, serif', color: '#8BBDE8', fontStyle: 'italic', fontWeight: 400 }}>
                antreibt
              </em>
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: '1px',
                background: '#e8e8e8',
                border: '1px solid #e8e8e8',
                borderRadius: '16px',
                overflow: 'hidden',
              }}
            >
              {values.map(({ title, desc }, i) => (
                <div
                  key={title}
                  style={{
                    background: '#fff',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-bebas), sans-serif',
                      fontSize: '2.8rem',
                      color: '#f0f0f0',
                      lineHeight: 1,
                      letterSpacing: '0.02em',
                    }}
                  >
                    0{i + 1}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '1rem', fontWeight: 700, color: '#0e0e0e', margin: 0 }}>
                    {title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.84rem', color: '#888', margin: 0, lineHeight: 1.6 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team CTA */}
          <div
            style={{
              background: '#0C1523',
              borderRadius: '20px',
              padding: '3rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'flex-start',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#fff',
                margin: 0,
                letterSpacing: '0.02em',
                lineHeight: 1.05,
              }}
            >
              Werde Teil von{' '}
              <em style={{ fontFamily: 'Georgia, serif', color: '#8BBDE8', fontStyle: 'italic', fontWeight: 400 }}>
                VoltVibes
              </em>
            </h2>
            <p style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, margin: 0, maxWidth: '480px' }}>
              Wir wachsen — und suchen leidenschaftliche Menschen, die mit uns die Zukunft der Mikromobilität in Dorsten gestalten wollen.
            </p>
            <a
              href="mailto:info@voltvibes-dorsten.de"
              style={{
                marginTop: '0.5rem',
                background: '#8BBDE8',
                color: '#0C1523',
                borderRadius: '999px',
                padding: '0.75rem 1.75rem',
                fontFamily: 'var(--font-geist-sans), sans-serif',
                fontSize: '0.875rem',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              Initiativbewerbung senden
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
