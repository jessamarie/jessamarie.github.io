import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import Navbar from './components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Jessica Marie's portfolio",
  description: 'A portfolio for Jessica Marie'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
      <footer>
        Made with &hearts; with Next.js by Jessa @{new Date().getFullYear()}
      </footer>
    </html>
  );
}
