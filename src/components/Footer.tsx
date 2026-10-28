import React from 'react';
import { ArrowUp, FileDown } from 'lucide-react';
import { useSmoothScroll } from '../context/SmoothScrollContext';

export const Footer: React.FC = () => {
  const { scrollTo } = useSmoothScroll();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href);
    window.history.pushState(null, '', href);
  };

  return (
    <footer className="relative z-10 py-12 border-t border-[#E5E5E5] dark:border-[#222222] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E5E5E5] dark:border-[#222222]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#171717] flex items-center justify-center font-bold text-xs tracking-tight">
              RF
            </div>
            <div>
              <div className="font-display font-bold text-[#171717] dark:text-white text-sm">
                Raihan Fahri Ghazali
              </div>
              <div className="text-[11px] font-mono text-[#858585] dark:text-[#737373]">
                IT Undergraduate • Institut Teknologi Sepuluh Nopember (ITS)
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-5 text-xs font-mono">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-[#666666] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-white transition-colors">Home</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="text-[#666666] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-white transition-colors">About</a>
            <a href="#experience" onClick={(e) => handleLinkClick(e, '#experience')} className="text-[#666666] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-white transition-colors">Experience</a>
            <a href="#work" onClick={(e) => handleLinkClick(e, '#work')} className="text-[#666666] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-white transition-colors">Portfolio</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="text-[#666666] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-white transition-colors">Contact</a>
            <a
              href="/CV_Raihan_Fahri_Ghazali.pdf"
              download="CV_Raihan_Fahri_Ghazali.pdf"
              className="text-[#171717] dark:text-white font-medium hover:underline transition-all flex items-center space-x-1"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
          </div>

          <button
            onClick={() => scrollTo(0)}
            aria-label="Back to top"
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#F2F2F2] dark:bg-[#1A1A1A] hover:bg-[#EBEBEB] dark:hover:bg-[#252525] text-[#171717] dark:text-neutral-200 transition-colors font-mono text-xs border border-[#E5E5E5] dark:border-[#2C2C2C]"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#858585] dark:text-[#666666]">
          <div>
            &copy; {new Date().getFullYear()} Raihan Fahri Ghazali. All rights reserved.
          </div>
          <div>
            Built with React, TypeScript &amp; Tailwind CSS • Dark/Light Mode • Lenis Smooth Scroll
          </div>
        </div>
      </div>
    </footer>
  );
};
