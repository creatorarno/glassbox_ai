import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            AI That <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Explains Itself</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Transform your black box models into transparent, auditable, and compliant systems. Trust is not optional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-amber-400 text-slate-950 rounded-lg font-semibold text-lg hover:bg-amber-300 transition-all hover:shadow-xl hover:shadow-amber-400/30 flex items-center justify-center group">
              Request a Demo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-700">
              Explore API Docs
            </button>
          </div>
        </div>
        <div className="mt-16 relative">
          <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8 shadow-2xl">
            {/* Note the corrected image path */}
            <img src="/images/image.png" alt="GlassBox Platform" className="w-full rounded-lg opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
}