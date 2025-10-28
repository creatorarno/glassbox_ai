import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation({ isMenuOpen, setIsMenuOpen, scrolled }) {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            Glass<span className="text-amber-400">Box</span> AI
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#use-cases" className="text-slate-300 hover:text-white transition-colors">Use Cases</a>
            <a href="#architecture" className="text-slate-300 hover:text-white transition-colors">Architecture</a>
            <button className="px-6 py-2.5 bg-amber-400 text-slate-950 rounded-lg font-semibold hover:bg-amber-300 transition-all hover:shadow-lg hover:shadow-amber-400/20">
              Request Demo
            </button>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-6 py-4 space-y-4">
            <a href="#features" className="block text-slate-300 hover:text-white">Features</a>
            <a href="#use-cases" className="block text-slate-300 hover:text-white">Use Cases</a>
            <a href="#architecture" className="block text-slate-300 hover:text-white">Architecture</a>
            <button className="w-full px-6 py-2.5 bg-amber-400 text-slate-950 rounded-lg font-semibold">
              Request Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}