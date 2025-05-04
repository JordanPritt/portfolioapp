// app/layout.tsx
import './globals.css';
import {Outfit, Ovo} from 'next/font/google';

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-outfit',
});

const ovo = Ovo({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-ovo',
});

export const metadata = {
    title: "Jordan Pritt",
    description: "A Software Generalist's portfolio website and blog.",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${outfit.variable} ${ovo.variable}`}>
        <body className="font-[var(--font-outfit)] antialiased">{children}</body>
        </html>
    );
}
