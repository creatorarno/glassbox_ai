import React from 'react';
import { Check } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Three Pillars of Trust</h2>
          <p className="text-xl text-slate-300">Explain, Audit, and Report with industry-leading technology</p>
        </div>
        {/* Feature 1: EXPLAIN */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-400 text-sm font-semibold mb-4">
                EXPLAIN
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                From "Why?" to <span className="text-amber-400">"Here's Why"</span>
              </h3>
              <p className="text-lg text-slate-300 mb-6">
                Integrate state-of-the-art Explainable AI techniques to translate any model's prediction into human-readable explanations. Model-agnostic support for deep neural networks to tree-based models.
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="bg-amber-400/10 rounded-lg p-2 mr-4">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">LIME - Local Interpretable Model-agnostic Explanations</h4>
                      <p className="text-sm text-slate-400">A magnifying glass for individual predictions. Creates simple local approximations ideal for rapid debugging and specific "why" questions.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="bg-amber-400/10 rounded-lg p-2 mr-4">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">SHAP - SHapley Additive exPlanations</h4>
                      <p className="text-sm text-slate-400">A blueprint for your model. Game theory-based robust measure of feature contributions, essential for formal audits.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6">
              <img src="/images/image.png" alt="SHAP Dashboard" className="w-full rounded-lg" />
            </div>
          </div>
        </div>
        {/* Feature 2: AUDIT */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6">
              <img src="/images/image.png" alt="Fairness Dashboard" className="w-full rounded-lg" />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-1 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-400 text-sm font-semibold mb-4">
                AUDIT
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Automate Fairness. <span className="text-amber-400">Eliminate Bias</span>
              </h3>
              <p className="text-lg text-slate-300 mb-6">
                Move beyond explanations to accountability. Programmatic framework to audit models for fairness and bias across demographic groups.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Check className="text-amber-400 mr-3 flex-shrink-0" size={20} />
                  <span><strong>Demographic Parity:</strong> Equal positive outcome rates across groups</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-amber-400 mr-3 flex-shrink-0" size={20} />
                  <span><strong>Equalized Odds:</strong> Equal accuracy metrics across groups</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-amber-400 mr-3 flex-shrink-0" size={20} />
                  <span><strong>Equal Opportunity:</strong> Fair chance for qualified individuals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature 3: REPORT */}
        <div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-400 text-sm font-semibold mb-4">
                REPORT
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Compliance, <span className="text-amber-400">Certified and Delivered</span>
              </h3>
              <p className="text-lg text-slate-300 mb-6">
                Generate comprehensive, auditable reports with one click. Provide evidence for internal stakeholders and external regulators.</p>
              <img src="/images/image.png" alt="Compliance Report" className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}