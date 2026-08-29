import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Zap,
  Target,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Award,
  Sparkles
} from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: (projectType?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onOpenContact }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        id="case-study-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="case-study-modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e1017] border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 p-6 sm:p-8 lg:p-10 text-slate-200 tech-grid-bg"
        >
          {/* Close button */}
          <button
            id="close-case-study-modal"
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header metadata */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono">
              {project.clientIndustry}
            </span>
            {project.performanceScore && (
              <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" />
                <span>PageSpeed {project.performanceScore}/100</span>
              </span>
            )}
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-2">
            {project.title}
          </h2>

          <p className="text-cyan-300 text-sm sm:text-base font-mono mb-6">
            {project.tagline}
          </p>

          {/* Large Project Visual Viewport */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 mb-8 aspect-[16/9] shadow-xl">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Overview, Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-wider mb-2 font-bold">
                <Target className="w-4 h-4" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-cyan-500/20">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2 font-bold">
                <Sparkles className="w-4 h-4" />
                <span>The Engineering Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features & Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-slate-800">
            <div>
              <h4 className="font-display font-bold text-white text-base mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Key Engineered Features</span>
              </h4>
              <ul className="space-y-2">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-white text-base mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Technologies & Stack</span>
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="text-xs text-slate-400 space-y-1">
                <div><strong className="text-slate-200">Role:</strong> {project.role}</div>
                <div><strong className="text-slate-200">Deliverables:</strong> {project.deliverables.join(', ')}</div>
              </div>
            </div>
          </div>

          {/* Bottom Action Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-4 h-4 text-cyan-400" />
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenContact(`Similar to ${project.title}`);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all cursor-pointer"
            >
              <span>Build Something Similar</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
