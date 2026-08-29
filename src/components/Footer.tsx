import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Sparkles, Mail, Globe, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in Dhaka GMT+6
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setLocalTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative bg-[#05060a] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-display font-bold text-lg">
                {PERSONAL_INFO.monogram}
              </div>
              <div>
                <div className="font-display font-bold text-white text-base">
                  {PERSONAL_INFO.name}
                </div>
                <div className="text-slate-400 font-mono text-[11px]">
                  WordPress Developer & Elementor Expert
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Engineering high-converting, performance-driven WordPress and WooCommerce web experiences for international clients since 2018.
            </p>

            {/* Live Time Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Local Time (GMT+6):</span>
              <span className="text-cyan-400 font-bold">{localTime || 'Loading...'}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <div className="text-white font-mono text-xs uppercase tracking-wider font-semibold mb-3">
                Navigation
              </div>
              <ul className="space-y-2">
                {['About', 'Services', 'Work', 'Skills'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-cyan-300 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-white font-mono text-xs uppercase tracking-wider font-semibold mb-3">
                Connect
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-300 transition-colors flex items-center gap-1"
                  >
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="hover:text-cyan-300 transition-colors"
                  >
                    <span>Direct Email</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-cyan-300 transition-colors"
                  >
                    <span>Client Reviews</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#process"
                    className="hover:text-cyan-300 transition-colors"
                  >
                    <span>Development Process</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Back to top & availability */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <button
              id="footer-back-to-top"
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white flex items-center gap-2 transition-all cursor-pointer group"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
            </button>

            <div className="mt-6 md:mt-0 text-left md:text-right">
              <div className="text-slate-300 text-xs font-mono font-medium">
                {PERSONAL_INFO.availability}
              </div>
              <div className="text-slate-400 text-[11px]">
                {PERSONAL_INFO.email}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Built with precision for WordPress & Elementor Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
