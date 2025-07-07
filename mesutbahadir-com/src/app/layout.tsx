// app/[lng]/layout.tsx

import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { dir } from 'i18next';
import { languages } from '../i18n/settings';

// Font definitions
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Muhammed Mesut Bahadır| Backend Developer",
  description: "Personal portfolio showcasing my work and experience as a game developer.",
  keywords: "developer, backend development, .NET, C#",
  icons: {
    icon: [
      {
        url: '/mb-logo.ico',
        sizes: 'any',
      },
      {
        url: '/mb-logo.jpg',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/mb-logo.jpg',
        type: 'image/jpg',
        sizes: '180x180',
      },
    ],
    apple: [
      {
        url: '/mb-logo.jpg',
        type: 'image/jpg',
        sizes: '180x180',
      },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#000000',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)} className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} bg-neutral-900 text-white`}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
