import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 bg-[#08090e] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Journey</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Professional{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Experience.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            6+ years of dedicated WordPress, Elementor Pro, and WooCommerce development delivering high-impact websites for international clients.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-800 pl-6 sm:pl-8 ml-3 sm:ml-6 space-y-12 max-w-4xl">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline beacon dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#08090e] border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#11131c] to-[#0c0d14] border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 shadow-xl">
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold">
                    {exp.period}
                  </span>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                    <span>•</span>
                    <span className="text-slate-300">{exp.type}</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-1">
                  {exp.role}
                </h3>

                <div className="text-cyan-400 text-sm font-medium mb-4">
                  {exp.company}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                    Key Highlights & Impact:
                  </div>
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                    >
                      {skill}
                    </span>
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
