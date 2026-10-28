import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#858585] dark:text-[#737373]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#171717] dark:bg-white"></span>
            <span>About Me</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#171717] dark:text-white">
            Engineering Background &amp; Mindset.
          </h2>
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Biography Text */}
          <div className="lg:col-span-7 space-y-5 text-[#666666] dark:text-[#A3A3A3] leading-relaxed text-sm sm:text-base">
            <p>
              I'm <strong className="text-[#171717] dark:text-white font-semibold">Raihan Fahri Ghazali</strong>, a fifth-semester Information Technology student at{' '}
              <strong className="text-[#171717] dark:text-white font-semibold">Institut Teknologi Sepuluh Nopember (ITS)</strong>, Surabaya. I'm interested in building software that solves practical problems, from full-stack web applications and data engineering workflows to machine learning experiments and cybersecurity projects.
            </p>

            <p>
              Through academic projects and internship experiences, I've explored application development, data processing, system integration, and security fundamentals. I'm particularly interested in learning how software systems can become more useful, maintainable, and reliable.
            </p>

            <p>
              I am currently looking for opportunities to grow as an engineer, collaborate with technical teams, and contribute to meaningful technology projects.
            </p>

            {/* Principles / Core Beliefs */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-white dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#242424] shadow-xs">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#171717] dark:text-white mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#171717] dark:text-white" />
                  <span>Practical Engineering</span>
                </div>
                <p className="text-xs text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                  Focusing on clean logic, maintainable types, and solving tangible workflow bottlenecks over needless complexity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#242424] shadow-xs">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#171717] dark:text-white mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#171717] dark:text-white" />
                  <span>Security &amp; Reliability</span>
                </div>
                <p className="text-xs text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                  Valuing first-principles comprehension of cryptographic primitives, threat modeling, and defensive architecture.
                </p>
              </div>
            </div>
          </div>

          {/* Clean Simplified Information Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#242424] shadow-xs space-y-4">
              <div className="flex items-center space-x-3 pb-4 border-b border-[#E5E5E5] dark:border-[#242424]">
                <div className="w-10 h-10 rounded-xl bg-[#171717] dark:bg-white text-white dark:text-[#171717] flex items-center justify-center font-bold text-sm tracking-tight">
                  RFG
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#171717] dark:text-white">Raihan Fahri Ghazali</h3>
                  <p className="text-xs font-mono text-[#858585] dark:text-[#737373]">ITS Surabaya • FTEIC</p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-[#F2F2F2] dark:border-[#1E1E1E]">
                  <span className="text-[#858585] dark:text-[#737373] font-mono">Current Status</span>
                  <span className="font-medium text-[#171717] dark:text-neutral-200">5th Semester Undergraduate</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#F2F2F2] dark:border-[#1E1E1E]">
                  <span className="text-[#858585] dark:text-[#737373] font-mono">Major</span>
                  <span className="font-medium text-[#171717] dark:text-neutral-200">Information Technology</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#F2F2F2] dark:border-[#1E1E1E]">
                  <span className="text-[#858585] dark:text-[#737373] font-mono">Location</span>
                  <span className="font-medium text-[#171717] dark:text-neutral-200">Surabaya, Indonesia</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#858585] dark:text-[#737373] font-mono">Availability</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#F2F2F2] dark:bg-[#202020] text-[#171717] dark:text-neutral-200 border border-[#E5E5E5] dark:border-[#333333]">
                    Internship Roles
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
