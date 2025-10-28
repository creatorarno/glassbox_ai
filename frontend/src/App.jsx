import React, { useState, useEffect } from 'react';

// Import Components
import Navigation from './components/navigation';
import Hero from './components/hero';
import Problem from './components/problem';
import Features from './components/features';
import UseCases from './components/use_cases';
import Architecture from './components/architecture';
import FinalCTA from './components/final_cta';
import Footer from './components/footer';

// Import Data
import { useCases } from './data/content';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('finance');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
      />
      <Hero />
      <Problem />
      <Features />
      <UseCases
        useCases={useCases}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Architecture />
      <FinalCTA />
      <Footer />
    </div>
  );
}