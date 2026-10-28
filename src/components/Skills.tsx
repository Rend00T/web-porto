import React from 'react';
import { Code2, Database, Sparkles, Shield, Terminal, Cpu } from 'lucide-react';
import { skillCategories } from '../data/skills';

interface SkillsProps {
  compact?: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ compact = false }) => {
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

  const content = (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
        {skillCategories.map((group) => {
          const Icon = getCategoryIcon(group.category);
          return (
            <div
              key={group.category}
              className="p-5 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#262626] hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#F2F2F2] dark:bg-[#1E1E1E] text-[#171717] dark:text-white border border-[#E5E5E5] dark:border-[#2E2E2E]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-[#171717] dark:text-white text-base">
                    {group.category}
                  </h3>
                </div>

                <p className="text-xs text-[#666666] dark:text-[#A3A3A3] mb-5 leading-relaxed">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E5E5E5] dark:border-[#242424]">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-[#F2F2F2] dark:bg-[#1C1C1C] hover:bg-[#EBEBEB] dark:hover:bg-[#252525] text-[#171717] dark:text-neutral-200 text-xs font-mono border border-[#E5E5E5] dark:border-[#2E2E2E] transition-colors"
                  >
                    <span>{skill.name}</span>
                    {skill.highlightProject && (
                      <span className="text-[9px] font-sans font-medium text-[#666666] dark:text-neutral-300 bg-white dark:bg-[#282828] px-1 rounded border border-[#E5E5E5] dark:border-[#383838]">
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

      <div className="mt-8 p-4 rounded-xl bg-neutral-100 dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#262626] text-xs text-[#666666] dark:text-[#A3A3A3] flex items-center justify-between flex-wrap gap-2 font-mono">
        <span>*Skills reflect hands-on coursework &amp; practical projects; no synthetic percentage ratings.</span>
        <span className="text-[#858585] dark:text-[#737373]">ITS FTEIC • 2024–Present</span>
      </div>
    </>
  );

  if (compact) {
    return <div className="space-y-4">{content}</div>;
  }

  return (
    <section id="skills" className="py-20 sm:py-28 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#858585] dark:text-[#737373]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#171717] dark:bg-white"></span>
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#171717] dark:text-white">
            Skills &amp; Technologies.
          </h2>
          <p className="text-sm sm:text-base text-[#666666] dark:text-[#A3A3A3] max-w-xl">
            Technologies practiced through university coursework, engineering internships, and applied project implementations.
          </p>
        </div>

        {content}
      </div>
    </section>
  );
};
