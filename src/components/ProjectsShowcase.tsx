import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Layers,
  Sparkles,
  ArrowUpRight,
  Zap,
  CheckCircle2,
  Eye,
  Laptop,
  Tablet,
  Smartphone,
  ShieldCheck
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsShowcaseProps {
  onSelectProject: (projectId: string) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [devicePreviewMode, setDevicePreviewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const categories = [
    'All',
    'WordPress & Elementor',
    'WooCommerce',
    'LMS & Portals',
    'Landing Pages',
    'Website Redesign',
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const featuredSpotlightProject = PROJECTS[0]; // Commercial cleaning / booking platform

  return (
    <section id="work" className="relative py-24 lg:py-32 bg-[#090a0f] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Real Client Deployments</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Selected{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Work.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            A selection of websites designed, developed, redesigned, and speed-optimized for businesses across the globe.
          </p>
        </div>

        {/* ==================================================== */}
        {/* DRAMATIC FEATURED PROJECT SPOTLIGHT WITH DEVICE SWITCH */}
        {/* ==================================================== */}
        <div className="mb-20">
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/40 via-slate-800/30 to-slate-900 border border-cyan-500/30 shadow-2xl overflow-hidden">
            <div className="bg-[#0e1017] rounded-[22px] p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left: Project Narrative */}
                <div className="lg:col-span-5 flex flex-col items-start">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold">
                      Featured Spotlight
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {featuredSpotlightProject.clientIndustry}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-snug mb-3">
                    {featuredSpotlightProject.title}
                  </h3>

                  <p className="text-cyan-300/90 font-mono text-xs mb-4">
                    {featuredSpotlightProject.tagline}
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {featuredSpotlightProject.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2 mb-6 w-full">
                    {featuredSpotlightProject.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {featuredSpotlightProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                    <button
                      id="spotlight-case-study-btn"
                      onClick={() => onSelectProject(featuredSpotlightProject.id)}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all cursor-pointer"
                    >
                      <span>Explore Full Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <a
                      href={featuredSpotlightProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white text-sm font-medium flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Right: Interactive Device Viewport Simulator */}
                <div className="lg:col-span-7 flex flex-col items-center">
                  {/* Device Mode Switcher */}
                  <div className="flex items-center gap-2 p-1 bg-slate-900/90 border border-slate-800 rounded-xl mb-4 text-xs font-mono">
                    <button
                      onClick={() => setDevicePreviewMode('desktop')}
                      className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                        devicePreviewMode === 'desktop'
                          ? 'bg-cyan-500 text-slate-950 font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Laptop className="w-3.5 h-3.5" />
                      <span>Desktop</span>
                    </button>
                    <button
                      onClick={() => setDevicePreviewMode('tablet')}
                      className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                        devicePreviewMode === 'tablet'
                          ? 'bg-cyan-500 text-slate-950 font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Tablet className="w-3.5 h-3.5" />
                      <span>Tablet</span>
                    </button>
                    <button
                      onClick={() => setDevicePreviewMode('mobile')}
                      className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                        devicePreviewMode === 'mobile'
                          ? 'bg-cyan-500 text-slate-950 font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Mobile</span>
                    </button>
                  </div>

                  {/* Device Container Frame */}
                  <div
                    className={`transition-all duration-500 mx-auto rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl relative group ${
                      devicePreviewMode === 'desktop'
                        ? 'w-full aspect-[16/10]'
                        : devicePreviewMode === 'tablet'
                        ? 'w-[75%] aspect-[4/3]'
                        : 'w-[280px] aspect-[9/16]'
                    }`}
                  >
                    {/* Top bar */}
                    <div className="bg-[#151722] px-3 py-2 border-b border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                      </div>
                      <div className="truncate px-2 bg-slate-900 rounded border border-slate-800 text-slate-300">
                        {featuredSpotlightProject.title.slice(0, 24)}...
                      </div>
                      <div className="text-emerald-400 font-bold">98/100</div>
                    </div>

                    <div className="relative w-full h-[calc(100%-30px)] overflow-hidden">
                      <img
                        src={featuredSpotlightProject.image}
                        alt={featuredSpotlightProject.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Interactive click overlay */}
                      <div
                        onClick={() => onSelectProject(featuredSpotlightProject.id)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 cursor-pointer"
                      >
                        <div className="p-3 rounded-full bg-cyan-500 text-slate-950 shadow-xl font-bold">
                          <Eye className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                          Click To View Full Case Study
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* CATEGORY FILTER TABS */}
        {/* ==================================================== */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.2)] font-semibold'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ==================================================== */}
        {/* PROJECT SHOWCASE GRID */}
        {/* ==================================================== */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative rounded-2xl bg-gradient-to-b from-[#11131c] to-[#0c0d14] border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden flex flex-col hover:shadow-[0_10px_35px_rgba(6,182,212,0.12)]"
              >
                {/* Project Image Viewport */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d14] via-transparent to-transparent opacity-80" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-cyan-300 text-[11px] font-mono font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Performance Score Pill */}
                  {project.performanceScore && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-2 py-0.5 rounded-md bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono font-bold">
                        {project.performanceScore}/100 Speed
                      </span>
                    </div>
                  )}

                  {/* Hover Quick View Trigger */}
                  <div
                    onClick={() => onSelectProject(project.id)}
                    className="absolute inset-0 bg-black/50 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                  >
                    <span className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors line-clamp-1 mb-1.5">
                      {project.title}
                    </h4>
                    <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-500">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Bottom Action Row */}
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <button
                        onClick={() => onSelectProject(project.id)}
                        className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                      >
                        <span>Case Study Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <span>Live Preview</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
