import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Bangladesh Blockchain Association',
	description: 'This is the official website of Bangladesh Blockchain Association',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<header>
					<Navbar />
				</header>
				<div className="mt-[52px] lg:mt-[80px] min-h-screen">{children}</div>
				<footer className="relative bottom-0 w-full">
					<Footer />
				</footer>
			</body>
		</html>
	);
}
