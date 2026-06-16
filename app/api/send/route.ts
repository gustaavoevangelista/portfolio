import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations';
import { Resend } from 'resend';
import EmailTemplate from '@/app/_components/EmailTemplate';

// Rate-limit: simple in-memory store (replace with Redis in production)
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
	const now = Date.now();
	const window = 60 * 60 * 1000; // 1 hour
	const maxRequests = 5;

	const entry = rateLimit.get(ip);
	if (!entry || now > entry.resetAt) {
		rateLimit.set(ip, { count: 1, resetAt: now + window });
		return true;
	}
	if (entry.count >= maxRequests) return false;
	entry.count++;
	return true;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
	// ── Rate limit ────────────────────────────────────────────────────────
	const ip =
		req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

	if (!checkRateLimit(ip)) {
		return NextResponse.json(
			{ error: 'Too many requests. Please try again later.' },
			{ status: 429 },
		);
	}

	// ── Parse body ────────────────────────────────────────────────────────
	let body: unknown;
	try {
		body = await req.json();
	} catch {
		return NextResponse.json(
			{ error: 'Invalid request body.' },
			{ status: 400 },
		);
	}

	// ── Server-side validation (Zod) ──────────────────────────────────────
	const result = contactSchema.safeParse(body);
	if (!result.success) {
		const fieldErrors = result.error.flatten().fieldErrors;
		return NextResponse.json(
			{ error: 'Validation failed.', fieldErrors },
			{ status: 422 },
		);
	}

	const { name, email, subject, message } = result.data;

	try {
		await resend.emails.send({
			from: `Portfolio contact <${process.env.RESEND_DEV_EMAIL_TESTING}>`,
			to: `${process.env.CONTACT_TO}`,
			subject: subject,
			react: EmailTemplate({ name, email, subject, message }),
		});
	} catch (error) {
		return NextResponse.json({ success: false, error: 'Failed to send email. Please try again later.' }, { status: 500 });
	}

	return NextResponse.json({ success: true });
}
