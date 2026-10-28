import React, { useState, useMemo } from 'react';
import { 
  Layers, Database, Shield, Cpu, Code2, 
  Sparkles, CheckCircle2, ChevronRight
} from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { projectsData } from '../data/projects';
import { ProjectVisualPreview } from './ProjectVisualPreview';

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const categories: { label: ProjectCategory; icon: React.FC<{ className?: string }> }[] = [
    { label: 'All', icon: Layers },
    { label: 'Web Development', icon: Code2 },
    { label: 'Data Engineering', icon: Database },
    { label: 'AI / Machine Learning', icon: Sparkles },
    { label: 'Cybersecurity', icon: Shield },
    { label: 'IoT / Systems', icon: Cpu },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return [...projectsData].sort((a, b) => a.priorityOrder - b.priorityOrder);
    }
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="work" className="py-20 sm:py-28 relative z-10 border-y border-[#E5E5E5] dark:border-[#222222]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#858585] dark:text-[#737373]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#171717] dark:bg-white"></span>
              <span>Project Showcase</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] dark:text-white">
              Selected Works &amp; Systems.
            </h2>
            <p className="text-sm sm:text-base text-[#666666] dark:text-[#A3A3A3] max-w-xl">
              Authentic engineering projects across full-stack applications, distributed data lakehouses, NLP research, and cryptographic security.
            </p>
          </div>

          <div className="text-xs font-mono text-[#858585] dark:text-[#A3A3A3] bg-[#F2F2F2] dark:bg-[#141414] px-3 py-1.5 rounded-md border border-[#E5E5E5] dark:border-[#282828] self-start md:self-auto">
            Showing {filteredProjects.length} of {projectsData.length} projects
          </div>
        </div>

        {/* Functional Category Filter Pills (Monochrome) */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium whitespace-nowrap transition-all duration-150 ${
                  isSelected
                    ? 'bg-[#171717] dark:bg-white text-white dark:text-[#171717] font-semibold shadow-xs'
                    : 'bg-[#F2F2F2] dark:bg-[#141414] hover:bg-[#EBEBEB] dark:hover:bg-[#202020] text-[#666666] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-white border border-[#E5E5E5] dark:border-[#282828]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white dark:text-[#171717]' : 'text-[#858585] dark:text-[#737373]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Bento Grid / Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            // Prioritize top 5 projects
            const isPrimary = project.featured && (selectedCategory === 'All' ? project.priorityOrder <= 5 : true);

            return (
              <div
                key={project.id}
                className={`group rounded-2xl bg-white dark:bg-[#121212] border border-[#E5E5E5] dark:border-[#222222] hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-200 flex flex-col overflow-hidden shadow-xs hover:shadow-lg ${
                  isPrimary
                    ? 'md:col-span-12 lg:col-span-6'
                    : 'md:col-span-6 lg:col-span-4'
                }`}
              >
                {/* Visual Preview Container */}
                <div className="p-4 sm:p-5 bg-neutral-900 border-b border-[#E5E5E5] dark:border-[#222222] overflow-hidden">
                  <ProjectVisualPreview projectId={project.id} isCompact={!isPrimary} />
                </div>

                {/* Card Content Area */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Category & Status */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-[#171717] dark:text-[#E0E0E0] bg-[#F2F2F2] dark:bg-[#1A1A1A] px-2.5 py-0.5 rounded border border-[#E5E5E5] dark:border-[#2A2A2A]">
                        {project.categoryDisplay}
                      </span>
                      <span className="text-[10px] font-mono text-[#858585] dark:text-[#737373] bg-neutral-100 dark:bg-[#141414] px-2 py-0.5 rounded border border-[#E5E5E5] dark:border-[#262626]">
                        {project.status}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[#171717] dark:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] mt-1 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Documented Highlights */}
                    <ul className="space-y-1.5 pt-1 text-xs text-[#666666] dark:text-[#A3A3A3]">
                      {project.highlights.slice(0, isPrimary ? 2 : 1).map((h, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#858585] dark:text-[#737373] shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, isPrimary ? 5 : 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#F2F2F2] dark:bg-[#1A1A1A] text-[#171717] dark:text-[#D4D4D4] border border-[#E5E5E5] dark:border-[#2A2A2A]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > (isPrimary ? 5 : 4) && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#858585] dark:text-[#737373]">
                          +{project.technologies.length - (isPrimary ? 5 : 4)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Action */}
                  <div className="mt-5 pt-4 border-t border-[#E5E5E5] dark:border-[#222222] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#858585] dark:text-[#737373] truncate max-w-[200px]">
                      {project.context.split(',')[0]}
                    </span>
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#171717] dark:text-white hover:underline transition-colors"
                    >
                      <span>View Case Study</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#858585] group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
