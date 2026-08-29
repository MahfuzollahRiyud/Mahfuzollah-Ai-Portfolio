import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code,
  Layers,
  Sparkles,
  Zap,
  Cpu,
  CheckCircle2,
  Terminal,
  Search,
  Layout,
  GraduationCap,
  Database,
  Smartphone
} from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

export const SkillsConstellation: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'plugins' | 'code' | 'optimization' | 'design'>('all');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Technologies', count: SKILLS.length },
    { id: 'core', label: 'Core CMS & Builders', count: SKILLS.filter(s => s.category === 'core').length },
    { id: 'plugins', label: 'Plugins & LMS', count: SKILLS.filter(s => s.category === 'plugins').length },
    { id: 'code', label: 'Code & Backend', count: SKILLS.filter(s => s.category === 'code').length },
    { id: 'optimization', label: 'Speed & SEO', count: SKILLS.filter(s => s.category === 'optimization').length },
    { id: 'design', label: 'UI/UX & Responsive', count: SKILLS.filter(s => s.category === 'design').length },
  ];

  const filteredSkills = activeCategory === 'all'
    ? SKILLS
    : SKILLS.filter(s => s.category === activeCategory);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'core': return 'text-sky-400 border-sky-500/30 bg-sky-950/30 group-hover:border-sky-400';
      case 'plugins': return 'text-rose-400 border-rose-500/30 bg-rose-950/30 group-hover:border-rose-400';
      case 'code': return 'text-amber-400 border-amber-500/30 bg-amber-950/30 group-hover:border-amber-400';
      case 'optimization': return 'text-emerald-400 border-emerald-500/30 bg-emerald-950/30 group-hover:border-emerald-400';
      case 'design': return 'text-purple-400 border-purple-500/30 bg-purple-950/30 group-hover:border-purple-400';
      default: return 'text-cyan-400 border-cyan-500/30 bg-cyan-950/30 group-hover:border-cyan-400';
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-[#08090e] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Arsenal</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Skills &{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Expertise.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Interactive breakdown of verified toolsets, frameworks, plugins, and performance stacks utilized across 300+ successful deployments.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id as any);
                setSelectedSkill(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.15)] font-semibold'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800/80 hover:text-white hover:border-slate-700'
              }`}
            >
              <span>{cat.label}</span>
              <span className="px-1.5 py-0.2 rounded-full bg-slate-800 text-[10px] font-mono text-slate-400">
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Interactive Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill === skill.name;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  key={skill.name}
                  onClick={() => setSelectedSkill(isSelected ? null : skill.name)}
                  className={`relative p-5 rounded-2xl bg-gradient-to-b from-[#10121a] to-[#0d0e14] border transition-all duration-300 cursor-pointer group ${
                    isSelected
                      ? 'border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.2)] bg-[#141724]'
                      : 'border-slate-800/90 hover:border-slate-700 hover:bg-[#121520]'
                  }`}
                >
                  {/* Top Line: Badge + Experience Years */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-1 rounded-lg border text-xs font-mono font-medium ${getCategoryColor(skill.category)}`}>
                      {skill.name}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {skill.experienceYears}+ yrs
                    </span>
                  </div>

                  {/* Skill Description */}
                  <p className="text-xs text-slate-300 leading-relaxed min-h-[38px] line-clamp-2 group-hover:text-white transition-colors">
                    {skill.description}
                  </p>

                  {/* Interactive Status Indicator */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <div className="flex items-center gap-1.5 text-cyan-400/80 group-hover:text-cyan-300">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Production Ready</span>
                    </div>
                    {skill.featured && (
                      <span className="px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono">
                        Core Focus
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Constellation Bottom Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-base">
                Have a custom plugin or API requirement?
              </h4>
              <p className="text-xs text-slate-400">
                Extensive experience integrating third-party APIs, custom webhooks, Stripe/PayPal checkouts, and custom ACF templates.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs border border-slate-700 hover:border-cyan-500/40 transition-all shrink-0 cursor-pointer"
          >
            Ask About Specific Tech
          </a>
        </div>
      </div>
    </section>
  );
};
