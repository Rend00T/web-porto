import React, { KeyboardEvent, useRef, useState } from 'react';
import { Code2, ShieldCheck } from 'lucide-react';
import { Skills } from './Skills';
import { Certifications } from './Certifications';

type TabKey = 'tech-stack' | 'certifications';

const tabs: Array<{ key: TabKey; label: string; Icon: React.ComponentType<{ className?: string }> }> = [
  { key: 'tech-stack', label: 'Tech Stack', Icon: Code2 },
  { key: 'certifications', label: 'Certifications', Icon: ShieldCheck },
];

export const TechnicalProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('tech-stack');
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusTab = (index: number) => {
    const tab = tabRefs.current[index];
    if (tab) {
      tab.focus();
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const lastIndex = tabs.length - 1;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      focusTab(index === lastIndex ? 0 : index + 1);
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      focusTab(index === 0 ? lastIndex : index - 1);
    }

    if (event.key === 'Home') {
      event.preventDefault();
      focusTab(0);
    }

    if (event.key === 'End') {
      event.preventDefault();
      focusTab(lastIndex);
    }
  };

  return (
    <section id="technical-profile" className="py-20 sm:py-28 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#858585] dark:text-[#737373]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#171717] dark:bg-white"></span>
            <span>Technical Profile</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#171717] dark:text-white mt-3">
            Technical Profile.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#666666] dark:text-[#A3A3A3]">
            Explore my technical skills, technologies, and certifications.
          </p>
        </div>

        <div className="mx-auto max-w-5xl rounded-[28px] border border-[#E5E5E5] dark:border-[#282828] bg-white/80 dark:bg-[#121212]/80 backdrop-blur-sm p-2 shadow-[0_12px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
          <div
            role="tablist"
            aria-label="Technical profile tabs"
            className="flex flex-col sm:flex-row gap-2 rounded-2xl bg-[#F6F6F6] dark:bg-[#171717] p-1.5"
          >
            {tabs.map((tab, index) => {
              const Icon = tab.Icon;
              const isSelected = activeTab === tab.key;

              return (
                <button
                  key={tab.key}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  id={`tab-${tab.key}`}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${tab.key}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setActiveTab(tab.key)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={`group inline-flex items-center justify-center gap-2 rounded-[18px] px-4 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] dark:focus-visible:ring-white ${
                    isSelected
                      ? 'bg-[#171717] dark:bg-white text-white dark:text-[#171717] shadow-sm'
                      : 'text-[#666666] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 min-h-[320px]">
            {activeTab === 'tech-stack' ? (
              <div id="panel-tech-stack" role="tabpanel" aria-labelledby="tab-tech-stack">
                <Skills compact />
              </div>
            ) : (
              <div id="panel-certifications" role="tabpanel" aria-labelledby="tab-certifications">
                <Certifications compact />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
