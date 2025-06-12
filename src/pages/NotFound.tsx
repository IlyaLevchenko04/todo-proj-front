import { Link } from '@tanstack/react-router';
import React from 'react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-50">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4 tablet:text-8xl">
        404
      </h1>
      <p className="text-xl tablet:text-2xl text-gray-600 mb-6">
        Oops! Page not found.
      </p>
      <Link
        to="/todo"
        className="px-6 py-3 bg-blue-600 !text-white rounded-md hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};
