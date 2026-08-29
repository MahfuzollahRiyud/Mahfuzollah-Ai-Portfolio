import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, CheckCircle2, Globe, Zap, Users, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface StatItemProps {
  label: string;
  targetValue: number;
  suffix: string;
  highlight: string;
  icon: React.ReactNode;
}

const AnimatedStatItem: React.FC<StatItemProps> = ({ label, targetValue, suffix, highlight, icon }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1600; // ms
    const increment = targetValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, targetValue]);

  return (
    <div
      ref={ref}
      className="relative p-6 rounded-2xl bg-gradient-to-b from-[#11131c] to-[#0c0d14] border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)]"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors">
          {icon}
        </span>
        <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase px-2 py-0.5 rounded bg-slate-900/60 border border-slate-800">
          {highlight}
        </span>
      </div>

      <div className="flex items-baseline gap-1 mb-1">
        <span className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          {count}
        </span>
        <span className="font-display font-bold text-2xl text-cyan-400">
          {suffix}
        </span>
      </div>

      <p className="text-sm font-medium text-slate-300">
        {label}
      </p>
    </div>
  );
};

export const TrustStats: React.FC = () => {
  return (
    <section id="trust-strip" className="relative py-12 border-y border-slate-800/80 bg-[#08090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <AnimatedStatItem
            label="Years of Industry Experience"
            targetValue={6}
            suffix="+"
            highlight="Senior Level"
            icon={<Award className="w-5 h-5" />}
          />
          <AnimatedStatItem
            label="Completed Client Projects"
            targetValue={300}
            suffix="+"
            highlight="Proven Track Record"
            icon={<CheckCircle2 className="w-5 h-5" />}
          />
          <AnimatedStatItem
            label="Client Satisfaction Rating"
            targetValue={100}
            suffix="%"
            highlight="5-Star Verified"
            icon={<Users className="w-5 h-5" />}
          />
          <AnimatedStatItem
            label="Average Google PageSpeed"
            targetValue={96}
            suffix="/100"
            highlight="Core Web Vitals"
            icon={<Zap className="w-5 h-5" />}
          />
        </div>

        {/* Supporting Credibility Ticker */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-cyan-400" />
            <span>Serving Global Clients across USA, UK, Canada, Australia & Europe</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-300">WordPress Core</span>
            <span>•</span>
            <span className="text-slate-300">Elementor Pro</span>
            <span>•</span>
            <span className="text-slate-300">WooCommerce</span>
            <span>•</span>
            <span className="text-slate-300">Tutor LMS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
