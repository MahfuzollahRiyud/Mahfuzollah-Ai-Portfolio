import React from 'react';
import { motion } from 'motion/react';
import {
  Code,
  Layers,
  Sparkles,
  Zap,
  Target,
  ArrowUpRight,
  CheckCircle,
  FileCode,
  Gauge,
  Workflow
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const corePillars = [
    {
      title: 'Precision Elementor Architecture',
      desc: 'Building modular, component-driven layouts with zero messy code or third-party addon bloat.',
      icon: Layers,
    },
    {
      title: 'Conversion-First Strategy',
      desc: 'Structuring every page, button, and lead form to systematically convert casual traffic into paying clients.',
      icon: Target,
    },
    {
      title: 'Performance & 90+ PageSpeed',
      desc: 'Tuning databases, server caching, asset minification, and responsive image sizing for instant load times.',
      icon: Gauge,
    },
    {
      title: 'Client Empowerment & Ease',
      desc: 'Delivering intuitive, self-manageable backend setups so you can edit text and products with zero coding.',
      icon: Workflow,
    },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#090a0f] overflow-hidden">
      {/* Background Decorative Tech Accents */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About The Developer</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-3xl">
            More Than Just a <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Website Developer.
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Floating Badge Treatment */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer Glow & Border */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-slate-700/50 via-slate-800/30 to-cyan-500/30 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[3/4]">
                  <img
                    src={PERSONAL_INFO.portrait}
                    alt={PERSONAL_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter grayscale-[10%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />

                  {/* Gradient bottom shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-80" />

                  {/* Floating badge top-left */}
                  <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-xl flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span>Mahfuzollah Riyud</span>
                  </div>

                  {/* Floating badges on portrait */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2">
                    <div className="px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white text-xs font-medium flex items-center gap-1.5 shadow-lg">
                      <Code className="w-3.5 h-3.5 text-cyan-400" />
                      <span>WordPress Specialist</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white text-xs font-medium flex items-center gap-1.5 shadow-lg">
                      <Layers className="w-3.5 h-3.5 text-rose-400" />
                      <span>Elementor Expert</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Pill Underneath */}
              <div className="absolute -bottom-6 -right-4 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-slate-900/95 border border-cyan-500/30 backdrop-blur-md shadow-2xl z-30">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold font-mono">
                  6+
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Years Experience</div>
                  <div className="text-[11px] text-slate-400">300+ Verified Projects</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative Story & Core Philosophy */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-white text-lg sm:text-xl">
                I'm <span className="text-cyan-300 font-bold">Mahfuzollah Riyud</span>, a WordPress developer and Elementor expert focused on building modern websites that combine clean design, strong performance, and real business goals.
              </p>
              <p>
                Over the past 6+ years, I've engineered and optimized websites across diverse global industries—from commercial home service booking systems and e-learning LMS academies to custom WooCommerce storefronts and enterprise real estate portals.
              </p>
              <p>
                Too many WordPress sites suffer from bloated pre-made templates, sluggish page loads, and fragile code that breaks on updates. My approach is entirely different: I architect bespoke, scalable, and lightweight websites using Elementor Pro, Crocoblock, and custom PHP/CSS snippets that look stunning, load in sub-seconds, and are a breeze to maintain.
              </p>
            </div>

            {/* Key Skill Highlights Pills */}
            <div className="pt-2">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Core Specialization Matrix
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'WordPress Development',
                  'Elementor Pro',
                  'WooCommerce',
                  'Website Redesign',
                  'Speed & Core Web Vitals',
                  'Tutor LMS & LearnPress',
                  'Crocoblock JetEngine',
                  'Technical SEO',
                  'Responsive Web Design',
                  'Conversion Optimization',
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {corePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all group"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="p-1.5 rounded-lg bg-slate-800 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-display font-semibold text-white text-sm">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick CTA */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-700 hover:border-cyan-500/50 flex items-center gap-2 transition-all cursor-pointer group"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1 underline underline-offset-4"
              >
                <span>View LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
