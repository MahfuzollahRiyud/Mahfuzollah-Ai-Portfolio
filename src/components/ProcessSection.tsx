import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, Palette, Code2, Rocket, CheckCircle } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Compass className="w-5 h-5" />;
      case 1: return <Palette className="w-5 h-5" />;
      case 2: return <Code2 className="w-5 h-5" />;
      case 3: return <Rocket className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="relative py-24 lg:py-32 bg-[#08090e] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Workflow & Methodology</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              How I Turn Ideas Into <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                High-Performance Websites.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            A battle-tested 4-step engineering and deployment process refined over 300+ successful projects.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative p-6 rounded-2xl bg-gradient-to-b from-[#11131c] to-[#0c0d14] border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)]"
            >
              {/* Step Top Line */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xl font-black text-cyan-400/80 group-hover:text-cyan-300">
                    {step.number}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
                    {getStepIcon(idx)}
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {step.title}
                </h3>

                <p className="text-xs font-mono text-cyan-400/80 mb-3">
                  {step.subtitle}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Step Checklist */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                  Deliverables & Action:
                </div>
                <div className="space-y-1.5">
                  {step.keyActivities.map((act, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5"></span>
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
