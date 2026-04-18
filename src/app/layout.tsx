import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { Providers } from './providers';
import Navbar from './components/navbar';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', weight: ['300', '400', '500'] });

export const metadata: Metadata = {
  title: "Jessica Marie's portfolio",
  description: 'Full stack developer building web applications with JavaScript, TypeScript, React, and Next.js.',
  openGraph: {
    title: "Jessica Marie's portfolio",
    description: 'Full stack developer building web applications with JavaScript, TypeScript, React, and Next.js.',
    url: 'https://jessamarie.github.io',
    siteName: "Jessica Marie's portfolio",
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👩‍💻</text></svg>',
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={dmSans.variable}>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <footer>
          Made with &hearts; with Next.js by Jessa @{new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
