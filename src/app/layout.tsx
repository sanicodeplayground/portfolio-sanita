import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sanita Gailuma - Frontend Developer - Portfolio 2024',
  description:
    'Explore the portfolio of Sanita. Discover projects showcasing expertise in front-end development, including responsive designs, user-centric interfaces, and modern web technologies.',
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
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
