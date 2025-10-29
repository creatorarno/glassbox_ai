import React from 'react';
import { Shield } from 'lucide-react';

export default function Architecture() {
  return (
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
  );
}