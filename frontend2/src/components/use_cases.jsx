import React from 'react';

export default function UseCases({ useCases, activeTab, setActiveTab }) {
  return (
    <section id="use-cases" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted AI for High-Stakes Industries</h2>
          <p className="text-xl text-slate-300">Built for industries where decisions matter most</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(useCases).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === key
                  ? 'bg-amber-400 text-slate-950'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {value.title}
            </button>
          ))}
        </div>
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">{useCases[activeTab].title}</h3>
          <p className="text-lg text-slate-300 mb-6">{useCases[activeTab].content}</p>
          <div className="flex flex-wrap gap-3">
            {useCases[activeTab].metrics.map((metric, idx) => (
              <span key={idx} className="px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-lg text-amber-400 text-sm">
                {metric}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}