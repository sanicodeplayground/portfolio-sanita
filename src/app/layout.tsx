import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from '../components/Nav';

export const metadata: Metadata = {
  metadataBase: new URL('https://sanicodeplayground.com'),
  title: {
    default: 'Sanita Gailuma - Frontend Developer - Portfolio 2024',
    template: '%s | Sanita Gailuma',
  },
  description: 'Frontend Developer',
  openGraph: {
    title: 'Sanita Gailuma',
    description: 'Frontend Developer',
    url: 'https://sanicodeplayground.com',
    siteName: 'Sanita Gailuma',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      {/* <body className="antialiased flex flex-col mb-40 max-w-2xl md:flex-row mx-4 mt-8 lg:mx-auto"> */}
      <body className="absolute top-0 -z-10 h-full w-full">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.4)] opacity-50 blur-[80px]"></div>
        <div className="antialiased flex flex-col mb-40 max-w-2xl md:flex-row mx-4 mt-8 lg:mx-auto">
          <main className="flex flex-col flex-auto min-w-0 mt-6 px-2 md:px-0">
            <Navbar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
