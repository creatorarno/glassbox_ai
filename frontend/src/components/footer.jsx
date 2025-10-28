import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">
            Glass<span className="text-amber-400">Box</span> AI
          </div>
          <div className="flex gap-8 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="text-center text-slate-500 text-sm mt-8">
          2025 GlassBox AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}