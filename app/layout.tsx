import Image from 'next/image';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import './globals.css';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Demo Calendar Application',
  title: 'Demo Calendar Application',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <main className="h-screen flex items-center justify-center">
          <section>
            <Image
              alt="Codelitt Logo"
              className="mb-11"
              height={43}
              priority
              src="/codelitt.svg"
              width={266}
            />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
