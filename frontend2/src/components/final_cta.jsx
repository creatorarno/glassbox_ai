import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-amber-400/10 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Open the Black Box?</h2>
        <p className="text-xl text-slate-300 mb-8">Join leading organizations building transparent, accountable AI systems</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="px-8 py-4 bg-amber-400 text-slate-950 rounded-lg font-semibold text-lg hover:bg-amber-300 transition-all hover:shadow-xl hover:shadow-amber-400/30 flex items-center justify-center group">
            Request a Live Demo
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button className="px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-700">
            Explore API Docs
          </button>
        </div>
        <button className="text-slate-400 hover:text-amber-400 transition-colors">
          Download Sample Compliance Report
        </button>
      </div>
    </section>
  );
}