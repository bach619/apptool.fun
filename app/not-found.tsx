import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Page not found</h1>
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
          >
            Netlify’s “page not found” support guide
          </a> 
          for troubleshooting tips.
        </p>
        <Link 
          href="/" 
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Go back to homepage
        </Link>
      </div>
    </div>
  );
}
