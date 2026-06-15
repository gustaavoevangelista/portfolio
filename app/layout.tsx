import type { Metadata } from 'next';
import './globals.css';
import { PERSON } from '@/lib/data';

export const metadata: Metadata = {
	title: `${PERSON.name} — Frontend Engineer`,
	description: PERSON.tagline,
	openGraph: {
		title: `${PERSON.name} — Frontend Engineer`,
		description: PERSON.tagline,
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body className='overflow-x-hidden bg-[var(--ink)] font-[var(--font-body)] text-[var(--text)] antialiased'>
				{children}
			</body>
		</html>
	);
}
