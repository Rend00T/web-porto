import React from 'react';
import { Terminal, CheckCircle2, Shield, Database, Code, BookOpen, GraduationCap, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-blue-600">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Engineering Background &amp; Mindset.
          </h2>
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Biography Text */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p>
              I'm <strong className="text-slate-900 font-semibold">Raihan Fahri Ghazali</strong>, a fifth-semester Information Technology student at{' '}
              <strong className="text-slate-900 font-semibold">Institut Teknologi Sepuluh Nopember (ITS)</strong>, Surabaya. I'm interested in building software that solves practical problems, from full-stack web applications and data engineering workflows to machine learning experiments and cybersecurity projects.
            </p>

            <p>
              Through academic projects and internship experiences, I've explored application development, data processing, system integration, and security fundamentals. I'm particularly interested in learning how software systems can become more useful, maintainable, and reliable.
            </p>

            <p>
              I am currently looking for opportunities to grow as an engineer, collaborate with technical teams, and contribute to meaningful technology projects.
            </p>

            {/* Principles / Core Beliefs */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-900 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Practical Engineering</span>
                </div>
                <p className="text-xs text-slate-600">
                  Focusing on clean logic, maintainable types, and solving tangible workflow bottlenecks over needless complexity.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-900 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Security &amp; Integrity</span>
                </div>
                <p className="text-xs text-slate-600">
                  Valuing first-principles comprehension of cryptographic primitives, threat modeling, and defensive architecture.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Context Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-lg tracking-tight">
                  RFG
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Raihan Fahri Ghazali</h3>
                  <p className="text-xs font-mono text-slate-500">ITS Surabaya • FTEIC</p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500 font-mono">Current Status</span>
                  <span className="font-semibold text-slate-800">5th Semester Undergraduate</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500 font-mono">Major</span>
                  <span className="font-semibold text-slate-800">Information Technology</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500 font-mono">Location</span>
                  <span className="font-semibold text-slate-800">Surabaya, Indonesia</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500 font-mono">Availability</span>
                  <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                    Internship Roles
                  </span>
                </div>
              </div>

              <div className="pt-2 text-slate-500 text-xs italic bg-slate-50 p-3 rounded-lg border border-slate-100 leading-normal">
                "Learning to bridge full-stack web software with reliable data pipelines and security principles."
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
