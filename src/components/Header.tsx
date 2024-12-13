import React from 'react';
import { Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Shield className="h-8 w-8 text-indigo-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">MEACS</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#mission" className="text-gray-700 hover:text-indigo-600">Mission</a>
          <a href="#initiatives" className="text-gray-700 hover:text-indigo-600">Initiatives</a>
          <a href="#members" className="text-gray-700 hover:text-indigo-600">Members</a>
          <a href="#join" className="text-gray-700 hover:text-indigo-600">Join Us</a>
        </div>
      </nav>
    </header>
  );
}