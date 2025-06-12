import React from 'react';

export const ServerErrorPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-50">
      <h1 className="text-6xl font-extrabold text-red-600 mb-4 tablet:text-8xl">
        500
      </h1>
      <p className="text-xl tablet:text-2xl text-gray-700 mb-6">
        Sorry, something went wrong on our end.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
      >
        Reload Page
      </button>
    </div>
  );
};
