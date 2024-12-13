import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import SEO from './components/seo/SEO';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Initiatives from './components/initiatives/Initiatives';
import Members from './components/members/Members';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <SEO />
        <div className="min-h-screen bg-background dark:bg-background-dark">
          <Header />
          <main>
            <Hero />
            <Initiatives />
            <Members />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}