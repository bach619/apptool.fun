import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';

const DynamicToaster = dynamic(() => import('sonner').then((mod) => mod.Toaster), { ssr: false });

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'I have Tools - Free Online Tools for Instant Conversions & Calculations',
  description: '100% free online tools: currency converter, unit converter, time zone converter, calculator, and wheel of names. Fast, accurate conversions with no signup required. Perfect for students, professionals, and everyday use.',
  metadataBase: new URL('https://apphave.fun'),
  keywords: 'free online tools, currency converter, unit converter, calculator, time zone converter, wheel of names, conversion tools, calculate units, convert currencies',
  authors: [{ name: 'I have Tools' }],
  creator: 'I have Tools',
  publisher: 'I have Tools',
  robots: 'index, follow',
  openGraph: {
    title: 'I have Tools - Free Online Multi-Tool App',
    description: 'Free online tools including currency converter, unit converter, time zone converter, calculator, and wheel of names. No installation required.',
    url: 'https://apphave.fun',
    siteName: 'I have Tools',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://apphave.fun/logo.png',
        width: 800,
        height: 600,
        alt: 'I have Tools - Free Online Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'I have Tools - Free Online Multi-Tool App',
    description: 'Free online tools including currency converter, unit converter, time zone converter, calculator, and wheel of names.',
    creator: '@ihavetools',
    images: ['https://apphave.fun/logo.png'],
  },
  alternates: {
    canonical: 'https://apphave.fun',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-adsense-account" content="ca-pub-6435811821902528" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6435811821902528" crossOrigin="anonymous"></script>
        
        {/* Favicon */}
        <link rel="icon" href="/icon.ico" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CMNMHEDM4B"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CMNMHEDM4B');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <DynamicToaster position="bottom-right" />
      </body>
    </html>
  );
}
