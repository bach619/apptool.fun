import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found - AppTool.fun',
  description: 'The page you requested could not be found. Check the URL or return to our homepage for useful web tools.',
  openGraph: {
    title: 'Page Not Found - AppTool.fun',
    description: 'The page you requested could not be found. Return to our homepage for useful web tools.',
    url: 'https://apptool.fun',
    images: [
      {
        url: 'https://apptool.fun/logo.png',
        width: 512,
        height: 512,
        alt: 'AppTool.fun Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Not Found - AppTool.fun',
    description: 'The page you requested could not be found. Return to our homepage for useful web tools.',
    images: ['https://apptool.fun/logo.png'],
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <article className="max-w-md w-full bg-white p-8 rounded-lg shadow-md" aria-labelledby="not-found-title">
        <h1 id="not-found-title" className="text-2xl font-bold text-red-500 mb-4">Page not found</h1>
        <p className="text-gray-700 mb-4">
          Looks like you’ve followed a broken link or entered a URL that doesn’t exist on this site.
        </p>
        <p className="text-gray-700 mb-6">
          If this is your site, and you weren’t expecting a 404 for this path, please visit 
          <a 
            href="https://docs.netlify.com/routing/redirects/redirect-options/#custom-404-page" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
            aria-label="Learn more about Netlify's page not found support"
          >
            Netlify’s “page not found” support guide
          </a> 
          for troubleshooting tips.
        </p>
        <Link 
          href="/" 
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          aria-label="Return to homepage"
        >
          Go back to homepage
        </Link>
      </article>
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Page Not Found",
            "description": "The page you requested could not be found on AppTool.fun",
            "url": "https://apptool.fun",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://apptool.fun?q={search_term}",
              "query-input": "required name=search_term"
            }
          })
        }}
      />
    </main>
  );
}
