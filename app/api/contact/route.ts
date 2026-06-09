import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// In-memory rate limiter: max 3 requests per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

const port = Number(process.env.SMTP_PORT ?? 587);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port,
  secure: port === 465, // true für SSL (465), false für STARTTLS (587)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  // Rate limit check
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Zu viele Anfragen. Bitte warte ein paar Minuten.' },
      { status: 429 }
    );
  }

  const body = await req.json();
  const { name, email, betreff, nachricht, source, _hp, _t } = body;

  // Honeypot: bots fill the hidden field, humans don't
  if (_hp) {
    return NextResponse.json({ ok: true }); // Silent reject
  }

  // Time check: reject if form was submitted in under 3 seconds
  if (!_t || Date.now() - _t < 3000) {
    return NextResponse.json({ ok: true }); // Silent reject
  }

  // Required fields
  if (!nachricht?.trim()) {
    return NextResponse.json({ error: 'Nachricht fehlt' }, { status: 400 });
  }

  const isRepair = source === 'reparatur';

  const subject = isRepair
    ? `Reparaturanfrage von der Website`
    : `Kontaktanfrage: ${betreff || 'Kein Betreff'}`;

  const html = isRepair
    ? `
      <h2 style="font-family:sans-serif;color:#0C1523;">Neue Reparaturanfrage</h2>
      <p style="font-family:sans-serif;color:#555;">Eine neue Anfrage über das Reparaturformular auf der Website:</p>
      <div style="background:#f5f5f5;padding:1rem 1.5rem;border-radius:8px;font-family:sans-serif;color:#333;">
        <p><strong>Nachricht:</strong></p>
        <p style="white-space:pre-line;">${nachricht}</p>
      </div>
    `
    : `
      <h2 style="font-family:sans-serif;color:#0C1523;">Neue Kontaktanfrage</h2>
      <div style="background:#f5f5f5;padding:1rem 1.5rem;border-radius:8px;font-family:sans-serif;color:#333;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        ${betreff ? `<p><strong>Betreff:</strong> ${betreff}</p>` : ''}
        <p><strong>Nachricht:</strong></p>
        <p style="white-space:pre-line;">${nachricht}</p>
      </div>
      ${email ? `<p style="font-family:sans-serif;font-size:0.85rem;color:#888;">Antwort direkt an: <a href="mailto:${email}">${email}</a></p>` : ''}
    `;

  try {
    await transporter.sendMail({
      from: `"VoltVibes Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email || undefined,
      subject,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] SMTP Fehler:', err);
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
