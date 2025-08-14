'use client';

export default function ErrorFallback() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
      <p className="text-gray-700 text-center mb-6">
        We're sorry, but an unexpected error occurred. Please try again later.
      </p>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => window.location.reload()}
      >
        Reload Page
      </button>
    </div>
  );
}
