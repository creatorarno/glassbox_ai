import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Brain, FileText, ChevronRight, Menu, X, Check } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const useCases = {
    finance: {
      title: 'Finance',
      content: 'Explain credit scoring decisions, ensure fair lending practices, and justify AML alerts with comprehensive audit trails.',
      metrics: ['Credit Scoring', 'Fair Lending', 'AML Compliance']
    },
    hr: {
      title: 'HR & Recruitment',
      content: 'Prevent discriminatory hiring practices and audit applicant screening tools. Avoid costly mistakes like biased AI systems.',
      metrics: ['Hiring Fairness', 'Applicant Screening', 'Bias Prevention']
    },
    healthcare: {
      title: 'Healthcare',
      content: 'Validate diagnostic models, explain patient risk scores, and build clinician trust with transparent AI decision-making.',
      metrics: ['Diagnostic Models', 'Risk Scoring', 'Clinical Trust']
    }
  };

  // 2. CREATE A TYPE from the keys of useCases
  type UseCaseKey = keyof typeof useCases;

  // 3. APPLY THAT TYPE to your useState
  const [activeTab, setActiveTab] = useState<UseCaseKey>('finance');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white font-['Inter',_sans-serif]">
      {/* Navigation */}
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

      {/* Hero Section */}
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
              <img src="https://placehold.co/1200x600/1e293b/94a3b8?text=Dashboard+Placeholder" alt="GlassBox Platform" className="w-full rounded-lg opacity-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
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

      {/* Features Section */}
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
                <img src="https://placehold.co/1200x600/1e293b/94a3b8?text=SHAP+Dashboard" alt="SHAP Dashboard" className="w-full rounded-lg" />
              </div>
            </div>
          </div>

          {/* Feature 2: AUDIT */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6">
                <img src="https://placehold.co/1200x600/1e293b/94a3b8?text=Fairness+Dashboard" alt="Fairness Dashboard" className="w-full rounded-lg" />
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
                  Generate comprehensive, auditable reports with one click. Provide evidence for internal stakeholders and external regulators.
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {['EU AI Act', 'GDPR', 'ECOA', 'SR 11-7', 'NYC Bias Audit', 'Financial Regs'].map((reg, idx) => (
                    <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg px-3 py-2 text-sm text-center">
                      {reg}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6">
                <img src="https://placehold.co/1200x600/1e293b/94a3b8?text=Compliance+Report" alt="Compliance Report" className="w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
                onClick={() => setActiveTab(key as UseCaseKey)} // <-- THIS IS THE FIX
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

      {/* Architecture Section */}
      <section id="architecture" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Enterprise-Grade and <span className="text-amber-400">Secure by Design</span></h2>
            <p className="text-xl text-slate-300">Built on modern infrastructure for reliability and security</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-amber-400/50 transition-all">
              <div className="w-12 h-12 bg-amber-400/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 border-2 border-amber-400 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cloud-Native SaaS</h3>
              <p className="text-slate-400">Scalable multi-tenant microservices architecture with single-tenant options for stringent security requirements.</p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-amber-400/50 transition-all">
              <div className="w-12 h-12 bg-amber-400/10 rounded-lg flex items-center justify-center mb-4">
                <div className="text-amber-400 font-mono font-bold">API</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">API-First</h3>
              <p className="text-slate-400">Comprehensive API for seamless integration into any CI/CD or MLOps pipeline. Build custom workflows effortlessly.</p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-amber-400/50 transition-all">
              <div className="w-12 h-12 bg-amber-400/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-amber-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Zero-Trust Security</h3>
              <p className="text-slate-400">Robust access controls, multi-factor authentication, and end-to-end data encryption. Your data stays secure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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

      {/* Footer */}
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
    </div>
  );
}
