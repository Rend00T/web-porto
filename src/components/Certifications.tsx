import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Trophy, ExternalLink, Calendar } from 'lucide-react';
import { certificationsData } from '../data/certifications';

export const Certifications: React.FC = () => {
  const courses = certificationsData.filter((c) => c.type === 'course');
  const achievements = certificationsData.filter((c) => c.type === 'achievement');

  return (
    <section id="certifications" className="py-20 sm:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-blue-600">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Verified Credentials &amp; Honors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Certifications &amp; Achievements.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl">
            Google Cybersecurity specialized course completions and competitive CTF security achievements.
          </p>
        </div>

        {/* Highlighted Competition Finalist Achievement Card */}
        {achievements.map((item) => (
          <div
            key={item.id}
            className="mb-10 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-md border border-slate-800 relative overflow-hidden"
          >
            <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    <Trophy className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-300">
                    National Cybersecurity Competition
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm font-mono text-slate-300">
                  {item.issuer} • {item.platform}
                </p>

                <p className="text-sm text-slate-300 pt-1 leading-relaxed">
                  {item.verificationNote}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.skillsAcquired.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded bg-slate-800/80 text-slate-200 text-xs font-mono border border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="sm:text-right shrink-0">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  Finalist Stage
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Google Cybersecurity Courses Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span>Google Cybersecurity Certificate Coursework</span>
            </h3>
            <span className="text-xs font-mono text-slate-500">Google • Coursera (October 2026)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {courses.map((course) => (
              <div
                key={course.id}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-colors shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                    <span className="font-semibold text-blue-600">{course.issuer}</span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{course.date}</span>
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 leading-snug">
                    {course.title}
                  </h4>

                  <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                    {course.skillsAcquired.map((s, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-mono text-slate-400">
                  Platform: {course.platform}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs font-mono text-slate-400 pt-1">
            *Verified individual coursework credentials as documented on CV.
          </p>
        </div>

      </div>
    </section>
  );
};
