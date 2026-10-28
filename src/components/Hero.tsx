import React from 'react';
import { ArrowDown, ArrowUpRight, FileDown, MapPin, Code2, Database, Shield } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-100/40 via-indigo-50/30 to-transparent blur-3xl -z-10 rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Availability Badge & Location */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8 animate-fadeIn">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-medium shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>IT Student · Open to Internship Opportunities</span>
          </div>

          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200 text-slate-600 text-xs font-mono">
            <MapPin className="w-3 h-3 text-slate-400" />
            <span>Surabaya, Indonesia</span>
          </div>
        </div>

        {/* Oversized Headline */}
        <div className="space-y-3 sm:space-y-4 max-w-4xl">
          <div className="text-sm sm:text-base font-mono uppercase tracking-widest text-slate-500 font-semibold">
            Hello, I'm Raihan Fahri Ghazali
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
            Software Developer <br className="hidden sm:inline" />
            <span className="text-slate-400 font-normal">&amp;</span> Data Enthusiast.
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-2xl leading-relaxed pt-2">
            I'm a fifth-semester Information Technology student at{' '}
            <span className="font-semibold text-slate-900">Institut Teknologi Sepuluh Nopember (ITS)</span>, 
            interested in building useful web applications, exploring data and AI, and solving technical problems through software engineering.
          </p>
        </div>

        {/* Primary Focus Pillars Badges */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 my-8 pt-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200/90 text-xs font-medium text-slate-800 shadow-xs">
            <Code2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Full-Stack Development</span>
          </div>
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200/90 text-xs font-medium text-slate-800 shadow-xs">
            <Database className="w-3.5 h-3.5 text-amber-600" />
            <span>Data Engineering &amp; ML</span>
          </div>
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200/90 text-xs font-medium text-slate-800 shadow-xs">
            <Shield className="w-3.5 h-3.5 text-emerald-600" />
            <span>Cybersecurity Learner</span>
          </div>
        </div>

        {/* Action Buttons & Social CTAs */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
          <a
            href="#work"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold border border-slate-200 shadow-xs transition-all hover:border-slate-300 hover:-translate-y-0.5"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4 text-slate-500" />
          </a>

          <a
            href="/CV_Raihan_Fahri_Ghazali.pdf"
            download="CV_Raihan_Fahri_Ghazali.pdf"
            className="inline-flex items-center space-x-2 px-4 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-sm font-medium border border-slate-200 transition-colors"
          >
            <FileDown className="w-4 h-4 text-slate-500" />
            <span>Download CV</span>
          </a>

          <a
            href="https://www.linkedin.com/in/raihan-fahri-841376323/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3.5 rounded-xl bg-white hover:bg-blue-50 text-slate-600 hover:text-blue-600 border border-slate-200 transition-colors shadow-xs"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Editorial Scroll Cue */}
        <div className="pt-16 sm:pt-24 flex items-center space-x-3 text-slate-400">
          <div className="w-8 h-px bg-slate-200"></div>
          <span className="text-xs font-mono tracking-wider uppercase">Selected Engineering Work</span>
        </div>

      </div>
    </section>
  );
};
