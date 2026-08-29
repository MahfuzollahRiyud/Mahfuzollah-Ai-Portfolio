import React from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Smartphone,
  Gauge,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { WHY_WORK_POINTS } from '../data/portfolioData';

interface WhyWorkWithMeProps {
  onOpenContact: () => void;
}

export const WhyWorkWithMe: React.FC<WhyWorkWithMeProps> = ({ onOpenContact }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'Gauge': return <Gauge className="w-5 h-5" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="why-me" className="relative py-24 lg:py-32 bg-[#090a0f] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Value & Standards</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4">
            Built With Purpose. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Delivered With Precision.
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Why international businesses, digital agencies, and entrepreneurs trust me as their dedicated WordPress & Elementor partner.
          </p>
        </div>

        {/* Asymmetric Bento-Inspired Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_WORK_POINTS.map((point, idx) => {
            const isHighlighted = idx === 0 || idx === 2; // Business focused & Performance
            return (
              <motion.div
                key={point.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between group ${
                  isHighlighted
                    ? 'bg-gradient-to-b from-[#131625] to-[#0c0e17] border-cyan-500/40 shadow-[0_10px_35px_rgba(6,182,212,0.12)]'
                    : 'bg-[#0c0d14] border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-400">
                      {point.number}
                    </span>
                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                      {getIcon(point.iconName)}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {point.title}
                  </h3>

                  <div className="text-xs font-mono text-cyan-400/90 mb-3">
                    {point.tagline}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {point.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Standard 0{idx + 1}</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Guaranteed
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Value CTA Bar */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-white font-medium text-xs sm:text-sm transition-all cursor-pointer group"
          >
            <span>Have a specific project in mind? Let's discuss requirements</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
