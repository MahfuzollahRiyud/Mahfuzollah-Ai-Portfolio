import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Building2,
  Globe
} from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-[#090a0f] border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
              <Star className="w-3.5 h-3.5 fill-cyan-400" />
              <span>Verified Client Reviews</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Client Feedback &{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Endorsements.
              </span>
            </h2>
          </div>

          {/* Carousel Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-400 transition-all cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-slate-400">
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-400 transition-all cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Review Spotlight */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/30 via-slate-800/30 to-slate-900 border border-cyan-500/20 shadow-2xl mb-12">
          <div className="bg-[#0e1017] rounded-[22px] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-20 h-20 text-slate-800/40 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {/* 5-Star Row + Platform Pill */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-1.5">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                    <span className="text-xs font-mono text-slate-400 ml-2">5.0 Star Rating</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-mono flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{current.platform} Verified Order</span>
                    </span>
                  </div>
                </div>

                {/* Testimonial Quote Text */}
                <blockquote className="text-lg sm:text-2xl text-slate-100 font-display font-medium leading-relaxed mb-8">
                  "{current.feedback}"
                </blockquote>

                {/* Client Info & Project Tag */}
                <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold text-base font-display">
                      {current.clientName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-base">
                        {current.clientName}
                      </h4>
                      <p className="text-xs text-slate-400 flex items-center gap-1">
                        <span>{current.role}</span>
                        <span>•</span>
                        <span className="text-cyan-300">{current.companyOrCountry}</span>
                      </p>
                    </div>
                  </div>

                  <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                    <strong className="text-slate-400">Project:</strong> {current.projectType}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* All Reviews Quick Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-4 rounded-xl border transition-all cursor-pointer text-xs ${
                currentIndex === idx
                  ? 'bg-[#141724] border-cyan-500/50 shadow-md shadow-cyan-500/10'
                  : 'bg-[#0c0d14] border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white font-display">{t.clientName}</span>
                <span className="text-[10px] font-mono text-emerald-400">5.0 ★</span>
              </div>
              <p className="text-slate-400 line-clamp-2 leading-relaxed">
                "{t.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
