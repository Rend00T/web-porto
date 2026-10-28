import React from 'react';
import { ShieldCheck, CheckCircle2, Trophy, Calendar } from 'lucide-react';
import { certificationsData } from '../data/certifications';

export const Certifications: React.FC = () => {
  const courses = certificationsData.filter((c) => c.type === 'course');
  const achievements = certificationsData.filter((c) => c.type === 'achievement');

  return (
    <section id="certifications" className="py-20 sm:py-28 relative z-10 border-b border-[#E5E5E5] dark:border-[#222222]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#858585] dark:text-[#737373]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#171717] dark:bg-white"></span>
            <span>Verified Credentials &amp; Honors</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#171717] dark:text-white">
            Certifications &amp; Achievements.
          </h2>
          <p className="text-sm sm:text-base text-[#666666] dark:text-[#A3A3A3] max-w-xl">
            Google Cybersecurity specialized course completions and competitive CTF security achievements.
          </p>
        </div>

        {/* Highlighted Competition Finalist Achievement Card (Monochrome Editorial) */}
        {achievements.map((item) => (
          <div
            key={item.id}
            className="mb-10 p-6 sm:p-7 rounded-2xl bg-neutral-900 dark:bg-[#141414] text-white border border-neutral-700 dark:border-[#2E2E2E] shadow-lg"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-md bg-[#242424] text-neutral-300 border border-[#333333]">
                    <Trophy className="w-4 h-4 text-neutral-300" />
                  </span>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400">
                    National Cybersecurity Competition
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm font-mono text-neutral-400">
                  {item.issuer} • {item.platform}
                </p>

                <p className="text-sm text-neutral-300 pt-1 leading-relaxed">
                  {item.verificationNote}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.skillsAcquired.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded bg-[#242424] text-neutral-200 text-xs font-mono border border-[#383838]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="sm:text-right shrink-0">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#262626] text-white border border-[#404040]">
                  Finalist Stage
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Google Cybersecurity Courses Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#171717] dark:text-white flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#171717] dark:text-white" />
              <span>Google Cybersecurity Certificate Coursework</span>
            </h3>
            <span className="text-xs font-mono text-[#858585] dark:text-[#737373]">Google • Coursera (October 2026)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {courses.map((course) => (
              <div
                key={course.id}
                className="p-5 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#262626] hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#858585] dark:text-[#737373] mb-2">
                    <span className="font-semibold text-[#171717] dark:text-white">{course.issuer}</span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-[#858585] dark:text-[#737373]" />
                      <span>{course.date}</span>
                    </span>
                  </div>

                  <h4 className="font-display text-base font-bold text-[#171717] dark:text-white leading-snug">
                    {course.title}
                  </h4>

                  <ul className="mt-3 space-y-1.5 text-xs text-[#666666] dark:text-[#A3A3A3]">
                    {course.skillsAcquired.map((s, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#858585] dark:text-[#737373] shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E5E5E5] dark:border-[#242424] text-[11px] font-mono text-[#858585] dark:text-[#737373]">
                  Platform: {course.platform}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs font-mono text-[#858585] dark:text-[#737373] pt-1">
            *Verified individual coursework credentials as documented on CV.
          </p>
        </div>

      </div>
    </section>
  );
};
