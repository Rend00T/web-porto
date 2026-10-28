import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, FileDown, Code2, Database, Shield } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { useSmoothScroll } from '../context/SmoothScrollContext';

const professionTitles = ['Software Developer', 'Data Engineer'];

export const Hero: React.FC = () => {
  const { scrollTo } = useSmoothScroll();
  const [activeTitle, setActiveTitle] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setTypedText(professionTitles[activeTitle]);
      setIsDeleting(false);
      return undefined;
    }

    const fullText = professionTitles[activeTitle];
    let timeoutId: number | undefined;

    if (!isDeleting && typedText === fullText) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), 1200);
      return () => {
        if (timeoutId) window.clearTimeout(timeoutId);
      };
    }

    if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setActiveTitle((current) => (current + 1) % professionTitles.length);
      return undefined;
    }

    timeoutId = window.setTimeout(() => {
      if (!isDeleting) {
        const nextText = fullText.slice(0, typedText.length + 1);
        setTypedText(nextText);
      } else {
        const nextText = fullText.slice(0, typedText.length - 1);
        setTypedText(nextText);
      }
    }, isDeleting ? 45 : 90);

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [activeTitle, isDeleting, typedText]);

  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section id="home" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#2C2C2C] text-[#171717] dark:text-[#E0E0E0] text-[11px] font-mono tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>AVAILABLE FOR INTERNSHIP OPPORTUNITIES</span>
            </div>

            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono uppercase tracking-[0.2em] text-[#666666] dark:text-[#A3A3A3]">
                Hello! I'm Raihan Fahri Ghazali.
              </p>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#171717] dark:text-white leading-[1.02]">
                <span className="block text-2xl sm:text-4xl lg:text-5xl font-medium text-[#666666] dark:text-[#A3A3A3] mb-2">
                  I'm a
                </span>
                <span className="relative block min-h-[1.2em]">
                  <span
                    className={`${prefersReducedMotion ? '' : 'hero-title-rotator'} text-[#171717] dark:text-white`}
                  >
                    {prefersReducedMotion ? professionTitles[activeTitle] : typedText}
                  </span>
                </span>
              </h1>
            </div>

            <p className="text-sm sm:text-base text-[#666666] dark:text-[#A3A3A3] max-w-xl leading-relaxed pt-1">
              I'm a fifth-semester Information Technology student at{' '}
              <strong className="text-[#171717] dark:text-white font-medium">
                Institut Teknologi Sepuluh Nopember (ITS)
              </strong>
              , interested in building useful web applications, developing data pipelines, and exploring
              machine learning and cybersecurity through practical projects.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-white dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#282828] text-xs font-mono text-[#666666] dark:text-[#A3A3A3]">
                <Code2 className="w-3.5 h-3.5 text-[#858585] dark:text-[#737373]" />
                <span>Full-Stack Development</span>
              </div>
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-white dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#282828] text-xs font-mono text-[#666666] dark:text-[#A3A3A3]">
                <Database className="w-3.5 h-3.5 text-[#858585] dark:text-[#737373]" />
                <span>Data Engineering &amp; ML</span>
              </div>
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-white dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#282828] text-xs font-mono text-[#666666] dark:text-[#A3A3A3]">
                <Shield className="w-3.5 h-3.5 text-[#858585] dark:text-[#737373]" />
                <span>Cybersecurity Learner</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => scrollTo('#work')}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#171717] hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 text-xs font-semibold tracking-wide transition-colors shadow-sm"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-white dark:bg-[#141414] hover:bg-[#F2F2F2] dark:hover:bg-[#202020] text-[#171717] dark:text-neutral-200 text-xs font-semibold border border-[#E5E5E5] dark:border-[#2E2E2E] transition-colors"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#858585]" />
              </button>

              <a
                href="/CV_Raihan_Fahri_Ghazali.pdf"
                download="CV_Raihan_Fahri_Ghazali.pdf"
                className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-lg bg-[#F2F2F2] dark:bg-[#171717] hover:bg-[#EBEBEB] dark:hover:bg-[#222222] text-[#171717] dark:text-neutral-300 text-xs font-mono border border-[#E5E5E5] dark:border-[#2E2E2E] transition-colors"
              >
                <FileDown className="w-3.5 h-3.5 text-[#858585]" />
                <span>Download CV</span>
              </a>

              <a
                href="https://www.linkedin.com/in/raihan-fahri-841376323/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg bg-white dark:bg-[#141414] hover:bg-[#F2F2F2] dark:hover:bg-[#202020] text-[#171717] dark:text-neutral-300 border border-[#E5E5E5] dark:border-[#2E2E2E] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-4 flex items-center space-x-3 text-xs font-mono text-[#858585] dark:text-[#737373]">
              <div className="w-6 h-px bg-[#E5E5E5] dark:bg-[#2E2E2E]"></div>
              <span>SURABAYA, ID • 5TH SEMESTER IT UNDERGRADUATE</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="hidden sm:flex flex-col items-center mb-[-12px] relative z-20">
                <div className="w-8 h-8 bg-neutral-800 dark:bg-neutral-900 border-x border-[#333333] shadow-inner"></div>
                <div className="w-12 h-3.5 rounded-t-sm bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-500 border border-neutral-600 shadow-md"></div>
                <div className="w-4 h-3 bg-neutral-600 rounded-b border border-neutral-700"></div>
              </div>

              <div className="relative rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#2E2E2E] shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.7)] p-5 sm:p-6 transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600">
                <div className="w-12 h-2.5 mx-auto mb-4 rounded-full bg-neutral-200 dark:bg-[#0B0B0B] border border-neutral-300 dark:border-[#262626]"></div>

                <div className="flex items-start justify-between pb-4 border-b border-[#E5E5E5] dark:border-[#262626] mb-4">
                  <div>
                    <div className="text-[10px] font-mono tracking-widest text-[#858585] dark:text-[#737373] uppercase">
                      INSTITUT TEKNOLOGI SEPULUH NOPEMBER
                    </div>
                    <div className="text-xs font-bold tracking-tight text-[#171717] dark:text-white uppercase mt-0.5">
                      FTEIC • INFORMATION TECHNOLOGY
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-md bg-[#171717] dark:bg-white text-white dark:text-[#171717] flex items-center justify-center font-bold text-[10px] tracking-tight">
                    ITS
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#E5E5E5] dark:border-[#262626] pb-3">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#858585] dark:text-[#737373]">
                        Student Profile
                      </div>
                      <div className="text-lg font-display font-bold text-[#171717] dark:text-white mt-1">
                        Raihan Fahri Ghazali
                      </div>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-[#171717] dark:bg-white text-white dark:text-[#171717] flex items-center justify-center font-bold text-sm">
                      RFG
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-[#666666] dark:text-[#A3A3A3]">
                    <div className="flex items-center justify-between py-1.5 border-b border-[#F3F3F3] dark:border-[#1F1F1F]">
                      <span className="font-mono text-[#858585] dark:text-[#737373]">Semester</span>
                      <span className="font-medium text-[#171717] dark:text-white">5th Semester</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-[#F3F3F3] dark:border-[#1F1F1F]">
                      <span className="font-mono text-[#858585] dark:text-[#737373]">Focus</span>
                      <span className="font-medium text-[#171717] dark:text-white">Software • Data • AI</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="font-mono text-[#858585] dark:text-[#737373]">Status</span>
                      <span className="font-medium text-[#171717] dark:text-white">Open to Internship</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
