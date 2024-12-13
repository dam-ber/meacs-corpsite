import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import JoinModal from '../join/JoinModal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? 'bg-white/80 dark:bg-panel-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800' : 'bg-transparent border-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-primary dark:text-accent" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">MEACS</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#mission" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent">Mission</a>
              <a href="#initiatives" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent">Initiatives</a>
              <a href="#members" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent">Members</a>
              <ThemeToggle />
              <button onClick={() => setIsJoinModalOpen(true)} className="btn-primary">Join Us</button>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 dark:text-gray-200"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-panel-dark border-t border-gray-200 dark:border-gray-800">
            <div className="space-y-1 px-4 pb-3 pt-2">
              <a href="#mission" className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent">Mission</a>
              <a href="#initiatives" className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent">Initiatives</a>
              <a href="#members" className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent">Members</a>
              <button 
                onClick={() => {
                  setIsJoinModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-primary dark:text-accent font-medium"
              >
                Join Us
              </button>
            </div>
          </div>
        )}
      </header>

      <JoinModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
    </>
  );
}