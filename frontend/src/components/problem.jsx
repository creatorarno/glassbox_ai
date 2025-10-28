import React from 'react';
import { Shield, Brain, FileText } from 'lucide-react';

export default function Problem() {
  return (
    <section className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your AI Makes Decisions. <span className="text-amber-400">Can You Explain Them?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Opaque AI systems expose your organization to regulatory fines, public distrust, operational challenges, and hidden biases. One biased hiring algorithm or unfair loan denial can cost millions in damages and reputation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: Shield, title: 'Regulatory Risk', desc: 'Face severe penalties under EU AI Act, GDPR, and financial regulations' },
            { icon: Brain, title: 'Hidden Biases', desc: 'Discriminatory patterns lurking in models can destroy trust and brand value' },
            { icon: FileText, title: 'Audit Failures', desc: 'Unable to provide evidence or documentation when regulators come knocking' }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-amber-400/50 transition-all">
              <item.icon className="text-amber-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}