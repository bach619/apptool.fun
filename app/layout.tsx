import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';

const DynamicToaster = dynamic(() => import('sonner').then((mod) => mod.Toaster), { ssr: false });

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'I have Tools - Free Online Tools for Instant Conversions & Calculations',
  description: '100% free online tools: currency converter, unit converter, time zone converter, calculator, wheel of names, and data storage converter. Fast, accurate conversions with no signup required. Perfect for students, professionals, and everyday use.',
  metadataBase: new URL('https://apphave.fun'),
  keywords: 'free online tools, currency converter, unit converter, calculator, time zone converter, wheel of names, data storage converter, conversion tools, calculate units, convert currencies, online calculator, random name picker, measurement converter',
  authors: [{ name: 'I have Tools' }],
  creator: 'I have Tools',
  publisher: 'I have Tools',
  robots: 'index, follow',
  openGraph: {
    title: 'I have Tools - Free Online Multi-Tool App',
    description: 'Free online tools including currency converter, unit converter, time zone converter, calculator, wheel of names, and data storage converter. No installation required.',
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
    description: 'Free online tools including currency converter, unit converter, time zone converter, calculator, wheel of names, and data storage converter.',
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

        {/* Structured Data for WebSite and Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://apphave.fun/#website",
                  "url": "https://apphave.fun",
                  "name": "I have Tools",
                  "description": "Free online tools for instant conversions and calculations",
                  "publisher": {
                    "@id": "https://apphave.fun/#organization"
                  },
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://apphave.fun/?tool={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ],
                  "inLanguage": "en-US"
                },
                {
                  "@type": "Organization",
                  "@id": "https://apphave.fun/#organization",
                  "name": "I have Tools",
                  "url": "https://apphave.fun",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://apphave.fun/logo.png",
                    "width": 800,
                    "height": 600,
                    "caption": "I have Tools Logo"
                  },
                  "description": "Providing free online tools for conversions and calculations",
                  "sameAs": [
                    "https://twitter.com/ihavetools"
                  ]
                }
              ]
            }),
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
