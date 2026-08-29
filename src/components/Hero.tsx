import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Sparkles,
  Zap,
  Layers,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Laptop
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onSelectProject: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'metrics'>('overview');
  const featuredHeroProject = PROJECTS[0];

  const floatingBadges = [
    { label: 'WordPress Core', icon: Code2, color: 'text-sky-400 bg-sky-950/40 border-sky-500/30' },
    { label: 'Elementor Pro', icon: Layers, color: 'text-rose-400 bg-rose-950/40 border-rose-500/30' },
    { label: 'WooCommerce', icon: Zap, color: 'text-purple-400 bg-purple-950/40 border-purple-500/30' },
    { label: '99/100 Core Web Vitals', icon: Zap, color: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30' },
    { label: '100% Mobile Fluid', icon: Smartphone, color: 'text-amber-400 bg-amber-950/40 border-amber-500/30' },
  ];

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden tech-grid-bg"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] tech-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Narrative & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-mono mb-6 shadow-inner"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-400 font-semibold">Available for selected projects</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">300+ Deployments</span>
            </motion.div>

            {/* Main Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white tracking-tight leading-[1.08] mb-6"
            >
              Building Digital <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                Experiences
              </span>{' '}
              That Move <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent underline decoration-cyan-500/30 decoration-wavy underline-offset-8">
                Businesses Forward.
              </span>
            </motion.h1>

            {/* Subheading with Key Role Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 space-y-2"
            >
              <p>
                <span className="font-semibold text-white">
                  WordPress Developer
                </span>{' '}
                &{' '}
                <span className="font-semibold text-cyan-300">
                  Elementor Expert
                </span>{' '}
                creating fast, modern, and conversion-focused websites for businesses, brands, and entrepreneurs worldwide.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono text-slate-400">
                <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300">⚡ 6+ Yrs Exp</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300">🚀 300+ Projects</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300">🌐 Global Clients</span>
                <span className="px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-500/30 text-cyan-300">🎯 Zero Bloat</span>
              </div>
            </motion.div>

            {/* Primary & Secondary Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                id="hero-view-work-btn"
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(6,182,212,0.35)] hover:shadow-[0_0_40px_rgba(6,182,212,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <button
                id="hero-contact-btn"
                onClick={onOpenContact}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-cyan-400/60 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-slate-800/70 transition-all cursor-pointer group"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </motion.div>

            {/* Quick Micro-Assurance Trust Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-6 mt-10 pt-6 border-t border-slate-800/80 text-xs text-slate-400"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Pixel-Perfect Responsiveness</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Sub-Second Page Load</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Clean, Maintainable Elementor</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Agency-Grade Floating Browser Mockup */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl p-1 bg-gradient-to-b from-slate-700/50 via-slate-800/20 to-cyan-500/20 shadow-2xl shadow-cyan-950/40"
            >
              {/* Floating tech badge top right */}
              <div className="absolute -top-3 -right-3 z-20 px-3 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-400/50 text-cyan-300 text-[11px] font-mono flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>Live Project Showcase</span>
              </div>

              {/* Browser Window Chrome */}
              <div className="bg-[#0f111a] rounded-xl overflow-hidden border border-slate-800">
                {/* Browser Top Bar */}
                <div className="bg-[#161926] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>

                  {/* Mock URL Bar */}
                  <div className="flex items-center gap-2 bg-[#090a0f] px-3 py-1 rounded-lg text-xs font-mono text-slate-400 border border-slate-800/80 max-w-[200px] truncate">
                    <span className="text-emerald-400">https://</span>
                    <span className="text-slate-300">client-live.com</span>
                  </div>

                  <div className="text-xs text-slate-500 font-mono flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>SSL</span>
                  </div>
                </div>

                {/* Interactive Preview Container */}
                <div className="relative group overflow-hidden bg-slate-950">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={featuredHeroProject.image}
                      alt={featuredHeroProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c12] via-[#0b0c12]/40 to-transparent"></div>

                    {/* Interactive Overlay Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-xs">
                      <button
                        onClick={() => onSelectProject(featuredHeroProject.id)}
                        className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-xl hover:bg-cyan-400 transition-all cursor-pointer"
                      >
                        <span>Inspect Case Study</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Browser Content Card Body */}
                  <div className="p-4 bg-[#0e1017] border-t border-slate-800/80">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                        {featuredHeroProject.category}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                        <span>Speed 98/100</span>
                      </div>
                    </div>

                    <h4 className="font-display font-bold text-white text-base leading-snug line-clamp-1 mb-2">
                      {featuredHeroProject.title}
                    </h4>

                    {/* Interactive Tab Switcher in Browser */}
                    <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono mb-3">
                      <button
                        onClick={() => setActiveTab('overview')}
                        className={`flex-1 py-1 rounded text-center transition-all cursor-pointer ${
                          activeTab === 'overview'
                            ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Stack
                      </button>
                      <button
                        onClick={() => setActiveTab('features')}
                        className={`flex-1 py-1 rounded text-center transition-all cursor-pointer ${
                          activeTab === 'features'
                            ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Features
                      </button>
                      <button
                        onClick={() => setActiveTab('metrics')}
                        className={`flex-1 py-1 rounded text-center transition-all cursor-pointer ${
                          activeTab === 'metrics'
                            ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Performance
                      </button>
                    </div>

                    {/* Tab Dynamic Content */}
                    <div className="min-h-[60px] text-xs">
                      {activeTab === 'overview' && (
                        <div className="flex flex-wrap gap-1.5">
                          {featuredHeroProject.technologies.slice(0, 5).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono text-[10px]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {activeTab === 'features' && (
                        <ul className="space-y-1 text-slate-300">
                          {featuredHeroProject.features.slice(0, 2).map((feat, idx) => (
                            <li key={idx} className="flex items-center gap-1.5 text-[11px] truncate">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                              <span className="truncate">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {activeTab === 'metrics' && (
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="bg-slate-900/80 p-1.5 rounded border border-slate-800">
                            <div className="text-emerald-400 font-bold text-xs font-mono">0.6s</div>
                            <div className="text-[9px] text-slate-400">LCP Time</div>
                          </div>
                          <div className="bg-slate-900/80 p-1.5 rounded border border-slate-800">
                            <div className="text-emerald-400 font-bold text-xs font-mono">0.00</div>
                            <div className="text-[9px] text-slate-400">CLS Score</div>
                          </div>
                          <div className="bg-slate-900/80 p-1.5 rounded border border-slate-800">
                            <div className="text-cyan-400 font-bold text-xs font-mono">100%</div>
                            <div className="text-[9px] text-slate-400">Responsive</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Pills around right preview */}
            <div className="hidden sm:flex flex-wrap gap-2 mt-4 justify-center">
              {floatingBadges.slice(0, 3).map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono border backdrop-blur-md ${badge.color}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
