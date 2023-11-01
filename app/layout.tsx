import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cls } from './_libs/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Carrot Market App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cls(inter.className, 'w-full max-w-lg mx-auto')}>
        {children}
      </body>
    </html>
  );
}
