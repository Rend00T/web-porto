import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData, educationData } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 relative z-10 border-y border-[#E5E5E5] dark:border-[#222222]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#858585] dark:text-[#737373]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#171717] dark:bg-white"></span>
            <span>Career &amp; Academic Timeline</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#171717] dark:text-white">
            Experience &amp; Education.
          </h2>
          <p className="text-sm sm:text-base text-[#666666] dark:text-[#A3A3A3] max-w-xl">
            Documented internships, university responsibilities, and formal academic foundation.
          </p>
        </div>

        {/* Dual Timelines Grid: Experience Left, Education Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Professional & Organizational Experience */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center space-x-2.5 pb-2 border-b border-[#E5E5E5] dark:border-[#262626]">
              <Briefcase className="w-4 h-4 text-[#171717] dark:text-white" />
              <h3 className="text-base font-bold text-[#171717] dark:text-white tracking-tight">
                Professional &amp; Organizational Roles
              </h3>
            </div>

            <div className="relative border-l border-[#E5E5E5] dark:border-[#262626] pl-6 sm:pl-8 space-y-8 ml-2">
              {experienceData.map((item) => (
                <div key={item.id} className="relative group">
                  {/* Monochrome timeline marker */}
                  <div className="absolute -left-[29px] sm:-left-[37px] top-1.5 w-3 h-3 rounded-full bg-white dark:bg-[#0B0B0B] border-2 border-[#171717] dark:border-white group-hover:bg-[#171717] dark:group-hover:bg-white transition-colors"></div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#262626] hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors shadow-xs">
                    {/* Period & Tag */}
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                      <span className="text-xs font-mono font-semibold text-[#171717] dark:text-white flex items-center space-x-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#858585] dark:text-[#737373]" />
                        <span>{item.period}</span>
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#858585] dark:text-[#737373] bg-[#F2F2F2] dark:bg-[#1E1E1E] px-2 py-0.5 rounded border border-[#E5E5E5] dark:border-[#2E2E2E]">
                        {item.category === 'work' ? 'Internship' : 'Organization'}
                      </span>
                    </div>

                    {/* Role & Company */}
                    <h4 className="font-display text-base sm:text-lg font-bold text-[#171717] dark:text-white mt-1">
                      {item.role}
                    </h4>
                    <div className="text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] flex items-center space-x-2 mt-0.5">
                      <span className="font-medium text-[#171717] dark:text-neutral-200">{item.organization}</span>
                      <span className="text-neutral-400 dark:text-neutral-700">•</span>
                      <span className="text-[#858585] dark:text-[#737373] font-mono text-xs flex items-center">
                        <MapPin className="w-3 h-3 mr-0.5 text-[#858585] dark:text-[#737373]" />
                        {item.location}
                      </span>
                    </div>

                    {/* Bullet Highlights */}
                    <ul className="mt-3 space-y-1.5 text-xs text-[#666666] dark:text-[#A3A3A3]">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#858585] dark:text-[#737373] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    {item.technologies && (
                      <div className="mt-3 pt-3 border-t border-[#E5E5E5] dark:border-[#242424] flex flex-wrap gap-1.5">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F2F2F2] dark:bg-[#1C1C1C] text-[#171717] dark:text-neutral-300 border border-[#E5E5E5] dark:border-[#2A2A2A]"
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
            <div className="flex items-center space-x-2.5 pb-2 border-b border-[#E5E5E5] dark:border-[#262626]">
              <GraduationCap className="w-4 h-4 text-[#171717] dark:text-white" />
              <h3 className="text-base font-bold text-[#171717] dark:text-white tracking-tight">
                Education
              </h3>
            </div>

            <div className="relative border-l border-[#E5E5E5] dark:border-[#262626] pl-6 space-y-8 ml-2">
              {educationData.map((edu) => (
                <div key={edu.id} className="relative group">
                  <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-white dark:bg-[#0B0B0B] border-2 border-[#171717] dark:border-white group-hover:bg-[#171717] dark:group-hover:bg-white transition-colors"></div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#262626] hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors space-y-2 shadow-xs">
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <span className="text-xs font-mono font-semibold text-[#171717] dark:text-white flex items-center space-x-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#858585] dark:text-[#737373]" />
                        <span>{edu.period}</span>
                      </span>
                      <span className="text-[10px] font-mono bg-[#F2F2F2] dark:bg-[#1E1E1E] text-[#666666] dark:text-neutral-300 px-2 py-0.5 rounded border border-[#E5E5E5] dark:border-[#2E2E2E]">
                        {edu.currentStatusNote}
                      </span>
                    </div>

                    <h4 className="font-display text-base font-bold text-[#171717] dark:text-white">
                      {edu.degree}
                    </h4>

                    <div className="text-xs font-medium text-[#666666] dark:text-[#A3A3A3]">
                      {edu.institution}
                    </div>

                    <div className="text-xs font-mono text-[#858585] dark:text-[#737373] flex items-center">
                      <MapPin className="w-3 h-3 mr-1 text-[#858585] dark:text-[#737373]" />
                      <span>{edu.location}</span>
                    </div>

                    <p className="text-xs text-[#666666] dark:text-[#A3A3A3] pt-1 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Credential Note */}
            <div className="p-4 rounded-xl bg-neutral-100 dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#262626] text-xs text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
              <span className="font-semibold text-[#171717] dark:text-white">Academic Status:</span> 5th semester undergraduate in Information Technology at ITS Surabaya. Coursework emphasizes distributed systems, cloud computing, big data architecture, and applied cryptography.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
