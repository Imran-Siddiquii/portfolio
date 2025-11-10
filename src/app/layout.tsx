import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Imran Siddiqui — Frontend Developer | React, Next.js',
  description:
    'Portfolio of Imran Siddiqui, a Frontend Developer specializing in React and TypeScript.',
  openGraph: {
    title: 'Imran Siddiqui — Frontend Developer',
    description: 'Explore my portfolio, skills, and professional projects.',
    url: 'https://imransiddiqui.info',
    images: [
      {
        url: 'https://imransiddiqui.info/og-image.jpeg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imran Siddiqui — Frontend Developer',
    description: 'Explore my portfolio, skills, and professional projects.',
    images: ['https://imransiddiqui.info/og-image.jpeg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children} <SpeedInsights />
      </body>
    </html>
  );
}
