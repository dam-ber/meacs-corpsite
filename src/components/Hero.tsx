import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-indigo-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1557853197-aefb550b6fdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          alt="Cybersecurity"
        />
        <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Middle Easterners and Africans in Cybersecurity
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          Empowering cybersecurity professionals of Middle Eastern and African heritage through community, education, and mentorship.
        </p>
        <div className="mt-10">
          <a
            href="#join"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50"
          >
            Join Our Community
          </a>
        </div>
      </div>
    </div>
  );
}