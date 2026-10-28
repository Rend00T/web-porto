import React from 'react';
import { ArrowDown, ArrowUpRight, FileDown, Code2, Database, Shield, Cpu, QrCode } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { useSmoothScroll } from '../context/SmoothScrollContext';

export const Hero: React.FC = () => {
  const { scrollTo } = useSmoothScroll();

  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Grid: Left Content, Right ID Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Monospace Availability Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#2C2C2C] text-[#171717] dark:text-[#E0E0E0] text-[11px] font-mono tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>AVAILABLE FOR INTERNSHIP OPPORTUNITIES</span>
            </div>

            {/* Oversized Two-Line Display Headline */}
            <div className="space-y-1">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#171717] dark:text-white leading-[1.02]">
                Software <br />
                Developer
              </h1>
              <div className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#737373] dark:text-[#888888]">
                &amp; Data Enthusiast.
              </div>
            </div>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-[#666666] dark:text-[#A3A3A3] max-w-xl leading-relaxed pt-1">
              I'm a fifth-semester Information Technology student at{' '}
              <strong className="text-[#171717] dark:text-white font-medium">Institut Teknologi Sepuluh Nopember (ITS)</strong>, 
              interested in building useful web applications, exploring data and AI, and solving technical problems through software engineering.
            </p>

            {/* Specialty Outlined Chips */}
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

            {/* Hero Action Buttons */}
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
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#858585]" />
              </button>

              <a
                href="/CV_Raihan_Fahri_Ghazali.pdf"
                download="CV_Raihan_Fahri_Ghazali.pdf"
                className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-lg bg-[#F2F2F2] dark:bg-[#171717] hover:bg-[#EBEBEB] dark:hover:bg-[#222222] text-[#171717] dark:text-neutral-300 text-xs font-mono border border-[#E5E5E5] dark:border-[#2E2E2E] transition-colors"
              >
                <FileDown className="w-3.5 h-3.5 text-[#858585]" />
                <span>CV</span>
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

            {/* Metadata Footer Cue */}
            <div className="pt-4 flex items-center space-x-3 text-xs font-mono text-[#858585] dark:text-[#737373]">
              <div className="w-6 h-px bg-[#E5E5E5] dark:bg-[#2E2E2E]"></div>
              <span>SURABAYA, ID • 5TH SEMESTER IT UNDERGRADUATE</span>
            </div>

          </div>

          {/* Right Column: Framed ID-Card / Portrait Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              
              {/* Lanyard Top Attachment Detail */}
              <div className="hidden sm:flex flex-col items-center mb-[-12px] relative z-20">
                {/* Woven Strap */}
                <div className="w-8 h-8 bg-neutral-800 dark:bg-neutral-900 border-x border-[#333333] shadow-inner"></div>
                {/* Metallic Clip */}
                <div className="w-12 h-3.5 rounded-t-sm bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-500 border border-neutral-600 shadow-md"></div>
                <div className="w-4 h-3 bg-neutral-600 rounded-b border border-neutral-700"></div>
              </div>

              {/* ID Card Holder */}
              <div className="relative rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#2E2E2E] shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.7)] p-5 sm:p-6 transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600">
                
                {/* Lanyard Punch Hole */}
                <div className="w-12 h-2.5 mx-auto mb-4 rounded-full bg-neutral-200 dark:bg-[#0B0B0B] border border-neutral-300 dark:border-[#262626]"></div>

                {/* Card Top Header */}
                <div className="flex items-start justify-between pb-4 border-b border-[#E5E5E5] dark:border-[#262626] mb-4">
                  <div>
                    <div className="text-[10px] font-mono tracking-widest text-[#858585] dark:text-[#737373] uppercase">
                      INSTITUT TEKNOLOGI SEPULUH NOPEMBER
                    </div>
                    <div className="text-xs font-bold tracking-tight text-[#171717] dark:text-white uppercase mt-0.5">
                      FTEIC • INFORMATION TECHNOLOGY
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-md bg-[#171717] dark:bg-white text-white dark:text-[#171717] flex items-center justify-center font-bold text-xs">
                    RF
                  </div>
                </div>

                {/* Portrait Slot */}
                <div className="relative aspect-4/4.5 sm:aspect-4/4.2 rounded-xl bg-neutral-100 dark:bg-[#0D0D0D] border border-[#E5E5E5] dark:border-[#2A2A2A] overflow-hidden flex flex-col items-center justify-center group mb-4">
                  {/* Subtle Grid in Portrait Placeholder */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:16px_16px]" />

                  {/* High-Contrast Stylized Monogram Portrait Visual */}
                  <div className="relative z-10 flex flex-col items-center text-center p-4">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white dark:bg-[#1A1A1A] border-2 border-neutral-300 dark:border-[#333333] flex items-center justify-center shadow-md mb-3">
                      <span className="font-display font-bold text-3xl sm:text-4xl text-[#171717] dark:text-white tracking-tighter">
                        RFG
                      </span>
                    </div>
                    <span className="text-xs font-mono font-semibold tracking-wider text-[#171717] dark:text-neutral-200 uppercase">
                      Raihan Fahri Ghazali
                    </span>
                    <span className="text-[10px] font-mono text-[#858585] dark:text-[#737373] mt-0.5">
                      Student ID: 50272210 • ITS Surabaya
                    </span>
                  </div>

                  {/* Corner Target Markers */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-neutral-400 dark:border-neutral-600"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-neutral-400 dark:border-neutral-600"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-neutral-400 dark:border-neutral-600"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-neutral-400 dark:border-neutral-600"></div>
                </div>

                {/* Card Data Grid */}
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between py-1 border-b border-[#F2F2F2] dark:border-[#222222]">
                    <span className="text-[#858585] dark:text-[#737373]">POSITION</span>
                    <span className="font-semibold text-[#171717] dark:text-neutral-200">Software Developer</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-[#F2F2F2] dark:border-[#222222]">
                    <span className="text-[#858585] dark:text-[#737373]">STATUS</span>
                    <span className="font-semibold text-[#171717] dark:text-neutral-200">Semester 5 Undergraduate</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-[#858585] dark:text-[#737373]">CREDENTIAL</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-[#202020] text-[#171717] dark:text-neutral-300 border border-neutral-200 dark:border-[#333333]">
                      VERIFIED ACADEMIC
                    </span>
                  </div>
                </div>

                {/* Card Barcode Footer */}
                <div className="mt-4 pt-3 border-t border-[#E5E5E5] dark:border-[#262626] flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {/* Simulated SVG Barcode */}
                    <div className="flex items-end space-x-0.5 h-6">
                      <div className="w-1 h-full bg-neutral-800 dark:bg-neutral-300"></div>
                      <div className="w-0.5 h-full bg-neutral-800 dark:bg-neutral-300"></div>
                      <div className="w-1.5 h-full bg-neutral-800 dark:bg-neutral-300"></div>
                      <div className="w-0.5 h-full bg-neutral-800 dark:bg-neutral-300"></div>
                      <div className="w-1 h-full bg-neutral-800 dark:bg-neutral-300"></div>
                      <div className="w-2 h-full bg-neutral-800 dark:bg-neutral-300"></div>
                      <div className="w-0.5 h-full bg-neutral-800 dark:bg-neutral-300"></div>
                      <div className="w-1 h-full bg-neutral-800 dark:bg-neutral-300"></div>
                      <div className="w-1.5 h-full bg-neutral-800 dark:bg-neutral-300"></div>
                      <div className="w-0.5 h-full bg-neutral-800 dark:bg-neutral-300"></div>
                      <div className="w-1 h-full bg-neutral-800 dark:bg-neutral-300"></div>
                    </div>
                    <span className="text-[9px] font-mono text-[#858585] dark:text-[#666666] pl-1.5">
                      RFG-2026-DEV
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-[#858585] dark:text-[#737373]">
                    OCT 2026
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
