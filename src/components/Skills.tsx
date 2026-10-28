import React from 'react';
import { Code2, Database, Sparkles, Shield, Terminal, Cpu } from 'lucide-react';
import { skillCategories } from '../data/skills';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Development':
        return Code2;
      case 'Databases & Data Engineering':
        return Database;
      case 'Machine Learning & AI':
        return Sparkles;
      case 'Cybersecurity & Networking':
        return Shield;
      case 'Programming Languages':
        return Terminal;
      default:
        return Cpu;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-blue-600">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Skills &amp; Technologies.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl">
            Technologies practiced through university coursework, engineering internships, and applied project implementations.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group) => {
            const Icon = getCategoryIcon(group.category);
            return (
              <div
                key={group.category}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 rounded-lg bg-slate-100 text-slate-800">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {group.category}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/chip inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-xs font-mono border border-slate-200/80 hover:border-blue-200 transition-colors"
                    >
                      <span>{skill.name}</span>
                      {skill.highlightProject && (
                        <span className="text-[9px] font-sans font-semibold text-blue-500 bg-blue-100/70 px-1 rounded">
                          {skill.highlightProject}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Honesty Note */}
        <div className="mt-8 p-4 rounded-xl bg-slate-100/70 border border-slate-200/80 text-xs text-slate-500 flex items-center justify-between flex-wrap gap-2 font-mono">
          <span>*Skills reflect hands-on coursework &amp; practical projects; no synthetic percentage ratings.</span>
          <span className="text-slate-400">ITS FTEIC • 2024–Present</span>
        </div>

      </div>
    </section>
  );
};
