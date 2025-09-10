import { Suspense } from 'react';
import Image from 'next/image';
import HomeContent from './HomeContent';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { SkeletonLoader } from '@/components/SkeletonLoader';
import ErrorFallback from '@/components/ErrorFallback';

export const metadata = {
  title: 'Free Online Tools for Instant Conversions & Calculations',
  description: 'Currency converter, unit converter, time zone converter, calculator, and random name picker. 100% free, no registration required. Fast, accurate, and privacy-focused.',
  keywords: [
    'currency converter', 
    'unit converter', 
    'time zone converter', 
    'calculator', 
    'wheel of names',
    'free online tools',
    'instant calculations',
    'no registration tools'
  ],
  openGraph: {
    title: 'Free Online Tools for Instant Conversions & Calculations',
    description: 'Your one-stop solution for all conversion and calculation needs. No downloads or registration required.',
    url: 'https://apphave.fun',
    siteName: 'I have Tools',
    images: [
      {
        url: 'https://apphave.fun/logo.png',
        width: 800,
        height: 600,
        alt: 'I have Tools Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Tools for Instant Conversions & Calculations',
    description: 'Your one-stop solution for all conversion and calculation needs.',
    images: ['https://apphave.fun/logo.png'],
  },
};

export default function Home() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-16">
              <div className="flex items-center space-x-4">
                <Image
                  src="/logo.png"
                  alt="I have Tools Logo"
                  width={50}
                  height={50}
                  className="w-8 h-8"
                />
                <h1 className="text-xl font-bold text-gray-900">I have Tools</h1>
              </div>
            </div>
          </div>
        </header>

        <Suspense fallback={<SkeletonLoader />}>
          <HomeContent />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}
