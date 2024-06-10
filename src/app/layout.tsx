import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from '../components/nav';

export const metadata: Metadata = {
  title: 'Sanita Gailuma - Frontend Developer - Portfolio 2024',
  description:
    'Explore the portfolio of Sanita. Discover projects showcasing expertise in front-end development, including responsive designs, user-centric interfaces, and modern web teclassName={inter.className}chnologies.',
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
      <body className="antialiased flex flex-col mb-40 max-w-2xl md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex flex-col flex-auto min-w-0 mt-6 px-2 md:px-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
