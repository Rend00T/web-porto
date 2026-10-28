import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData, educationData } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-white border-y border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-blue-600">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Career &amp; Academic Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Experience &amp; Education.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl">
            Documented internships, university responsibilities, and formal academic foundation.
          </p>
        </div>

        {/* Dual Timelines Grid: Experience Left, Education Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Professional & Organizational Experience */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center space-x-2.5 pb-2 border-b border-slate-200">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Professional &amp; Organizational Roles
              </h3>
            </div>

            <div className="relative border-l-2 border-slate-200 pl-6 sm:pl-8 space-y-10 ml-2">
              {experienceData.map((item) => (
                <div key={item.id} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-blue-600 group-hover:scale-125 transition-transform shadow-xs"></div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors shadow-xs">
                    {/* Period & Tag */}
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                      <span className="text-xs font-mono font-semibold text-blue-600 flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                        {item.category === 'work' ? 'Internship' : 'Organization'}
                      </span>
                    </div>

                    {/* Role & Company */}
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                      {item.role}
                    </h4>
                    <div className="text-xs sm:text-sm font-medium text-slate-700 flex items-center space-x-2 mt-0.5">
                      <span>{item.organization}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500 font-mono text-xs flex items-center">
                        <MapPin className="w-3 h-3 mr-0.5 text-slate-400" />
                        {item.location}
                      </span>
                    </div>

                    {/* Bullet Highlights */}
                    <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-600">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    {item.technologies && (
                      <div className="mt-3 pt-3 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center space-x-2.5 pb-2 border-b border-slate-200">
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Education
              </h3>
            </div>

            <div className="relative border-l-2 border-slate-200 pl-6 space-y-8 ml-2">
              {educationData.map((edu) => (
                <div key={edu.id} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-indigo-600 group-hover:scale-125 transition-transform shadow-xs"></div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <span className="text-xs font-mono font-semibold text-indigo-600 flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{edu.period}</span>
                      </span>
                      <span className="text-[10px] font-mono bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-200/60 font-semibold">
                        {edu.currentStatusNote}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900">
                      {edu.degree}
                    </h4>

                    <div className="text-xs font-medium text-slate-700">
                      {edu.institution}
                    </div>

                    <div className="text-xs font-mono text-slate-500 flex items-center">
                      <MapPin className="w-3 h-3 mr-1 text-slate-400" />
                      <span>{edu.location}</span>
                    </div>

                    <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Credential Note */}
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/60 text-xs text-blue-900 leading-relaxed">
              <span className="font-semibold">Note on Academic Status:</span> As of October 2026, enrolled in the 5th semester of undergraduate Information Technology studies at ITS Surabaya. Coursework emphasizes distributed systems, cloud computing, big data architecture, and applied cryptography.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
