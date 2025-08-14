import React from 'react';

export const SkeletonLoader = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center space-y-4">
        <div className="bg-gray-200 rounded-full w-16 h-16"></div>
        <div className="text-2xl font-bold text-gray-700">Loading Tools...</div>
        <div className="w-64 h-4 bg-gray-200 rounded"></div>
        <div className="w-48 h-4 bg-gray-200 rounded"></div>
        <div className="flex space-x-2 mt-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-gray-200 rounded-lg w-20 h-10"></div>
          ))}
        </div>
      </div>
    </div>
  );
};
