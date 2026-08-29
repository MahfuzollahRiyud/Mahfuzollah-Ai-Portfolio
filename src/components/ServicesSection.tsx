import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code,
  Layout,
  Sparkles,
  ShoppingBag,
  Target,
  Zap,
  Search,
  GraduationCap,
  ArrowUpRight,
  Check,
  Plus,
  Minus
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { Service } from '../types';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForInquiry }) => {
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(SERVICES[0].id);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code': return <Code className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
      case 'Target': return <Target className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Search': return <Search className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#090a0f] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack WordPress Capabilities</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              From First Click to <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Final Conversion.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Custom engineering, responsive architecture, speed optimization, and e-commerce solutions crafted to scale your business.
          </p>
        </div>

        {/* Desktop List / Interactive Service Blocks */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Typography Service List */}
          <div className="col-span-6 space-y-2">
            {SERVICES.map((service) => {
              const isHovered = hoveredServiceId === service.id;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredServiceId(service.id)}
                  onClick={() => onSelectServiceForInquiry(service.title)}
                  className={`group relative p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isHovered
                      ? 'bg-gradient-to-r from-[#121624] to-[#0e1017] border-cyan-500/50 shadow-[0_4px_25px_rgba(6,182,212,0.15)]'
                      : 'bg-[#0c0e15]/60 border-slate-800/80 hover:border-slate-700 hover:bg-[#0f121b]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Animated Service Number */}
                      <span
                        className={`font-mono text-xs font-bold px-2 py-1 rounded transition-all duration-300 ${
                          isHovered
                            ? 'bg-cyan-500 text-slate-950 translate-x-1'
                            : 'bg-slate-900 text-slate-500'
                        }`}
                      >
                        {service.number}
                      </span>

                      {/* Icon */}
                      <span
                        className={`transition-colors ${
                          isHovered ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'
                        }`}
                      >
                        {getIcon(service.iconName)}
                      </span>

                      {/* Title */}
                      <h3
                        className={`font-display font-bold text-lg transition-colors ${
                          isHovered ? 'text-white' : 'text-slate-300 group-hover:text-white'
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800 hidden sm:inline-block">
                        {service.badge}
                      </span>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform ${
                          isHovered
                            ? 'text-cyan-400 translate-x-0.5 -translate-y-0.5'
                            : 'text-slate-600 group-hover:text-slate-400'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Service Detail Pane */}
          <div className="col-span-6 sticky top-28">
            {hoveredServiceId && (() => {
              const current = SERVICES.find(s => s.id === hoveredServiceId) || SERVICES[0];
              return (
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 rounded-3xl bg-gradient-to-b from-[#131624] via-[#0f111a] to-[#0b0c12] border border-cyan-500/30 shadow-2xl shadow-cyan-950/20"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                        {getIcon(current.iconName)}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                          Service {current.number}
                        </span>
                        <h4 className="font-display font-bold text-white text-xl">
                          {current.title}
                        </h4>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
                      {current.badge}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-cyan-300/90 mb-3 font-mono">
                    {current.subtitle}
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {current.description}
                  </p>

                  <div className="pt-4 border-t border-slate-800">
                    <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                      What's Included:
                    </h5>
                    <div className="grid grid-cols-1 gap-2.5 mb-8">
                      {current.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <span className="w-4 h-4 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectServiceForInquiry(current.title)}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all cursor-pointer"
                    >
                      <span>Inquire for {current.title}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })()}
          </div>
        </div>

        {/* Mobile Accordion View for Small Screens */}
        <div className="lg:hidden space-y-3">
          {SERVICES.map((service) => {
            const isExpanded = expandedMobileId === service.id;
            return (
              <div
                key={service.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isExpanded
                    ? 'bg-[#121624] border-cyan-500/50'
                    : 'bg-[#0c0e15] border-slate-800'
                }`}
              >
                <button
                  onClick={() => setExpandedMobileId(isExpanded ? null : service.id)}
                  className="w-full p-4 flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold px-2 py-1 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                      {service.number}
                    </span>
                    <span className="font-display font-bold text-white text-base">
                      {service.title}
                    </span>
                  </div>
                  {isExpanded ? <Minus className="w-4 h-4 text-cyan-400" /> : <Plus className="w-4 h-4 text-slate-400" />}
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4 pb-5 pt-1 text-xs border-t border-slate-800/80"
                    >
                      <p className="text-cyan-300 font-mono mb-2">{service.subtitle}</p>
                      <p className="text-slate-300 leading-relaxed mb-4">{service.description}</p>
                      <div className="space-y-1.5 mb-5">
                        {service.deliverables.map((deliv, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-300">
                            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => onSelectServiceForInquiry(service.title)}
                        className="w-full py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5"
                      >
                        <span>Start Project with {service.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
