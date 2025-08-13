import { Suspense } from 'react';
import Image from 'next/image';
import HomeContent from './HomeContent';

export default function Home() {
  return (
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

      <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
        <HomeContent />
      </Suspense>
    </div>
  );
}
