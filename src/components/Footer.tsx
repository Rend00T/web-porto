import React from 'react';
import { ArrowUp, Heart, FileDown } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1120] text-slate-400 py-12 border-t border-slate-850 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand info */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-slate-800 text-white flex items-center justify-center font-bold text-xs tracking-tight">
              RFG
            </div>
            <div>
              <div className="font-bold text-white text-sm">Raihan Fahri Ghazali</div>
              <div className="text-[11px] font-mono text-slate-500">
                IT Undergraduate • Institut Teknologi Sepuluh Nopember (ITS)
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex items-center space-x-6 text-xs font-mono">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a
              href="/CV_Raihan_Fahri_Ghazali.pdf"
              download="CV_Raihan_Fahri_Ghazali.pdf"
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors font-mono text-xs"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Raihan Fahri Ghazali. All rights reserved.
          </div>
          <div>
            Built with React, TypeScript &amp; Tailwind CSS • Hosted on Vercel
          </div>
        </div>

      </div>
    </footer>
  );
};
