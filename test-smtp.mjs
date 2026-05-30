import nodemailer from 'nodemailer';
import { readFileSync } from 'fs';

// Read .env.local
const env = Object.fromEntries(
  readFileSync('.env.local', 'utf8')
    .split('\n')
    .filter(l => l.includes('=') && !l.startsWith('#'))
    .map(l => l.split('=').map(s => s.trim()))
    .filter(([k]) => k.startsWith('SMTP') || k.startsWith('CONTACT'))
);

const port = Number(env.SMTP_PORT ?? 587);
const config = {
  host: env.SMTP_HOST,
  port,
  secure: port === 465,
  auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
};

console.log('Config:', { ...config, auth: { user: config.auth.user, pass: '***' } });

const transporter = nodemailer.createTransport(config);

try {
  await transporter.verify();
  console.log('✓ Verbindung + Login OK!');
  await transporter.sendMail({
    from: `"VoltVibes Test" <${env.SMTP_USER}>`,
    to: env.CONTACT_EMAIL,
    subject: 'SMTP Test',
    text: 'Wenn du das siehst, funktioniert der E-Mail-Versand.',
  });
  console.log('✓ Test-E-Mail an', env.CONTACT_EMAIL, 'gesendet!');
} catch (err) {
  console.error('✗ Fehler:', err.message);
  console.error('  Code:', err.code ?? '–');
  console.error('  Details:', err.response ?? '–');
}
