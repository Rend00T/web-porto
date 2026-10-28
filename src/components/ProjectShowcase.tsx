import React, { useState, useMemo } from 'react';
import { 
  ArrowUpRight, Filter, Layers, Database, Shield, 
  Cpu, Code2, Sparkles, CheckCircle2, ChevronRight, Info
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
    <section id="work" className="py-20 sm:py-28 bg-white border-y border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-blue-600">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>Project Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Selected Works &amp; Systems.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl">
              Authentic engineering projects across full-stack applications, distributed data lakehouses, NLP research, and cryptographic security.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 self-start md:self-auto">
            Showing {filteredProjects.length} of {projectsData.length} projects
          </div>
        </div>

        {/* Functional Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                className={`inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm ring-2 ring-slate-900/10'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-600 hover:text-slate-900 border border-slate-200/70'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-400' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Bento Grid / Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const isPrimary = project.featured && (selectedCategory === 'All' ? project.priorityOrder <= 4 : true);

            return (
              <div
                key={project.id}
                className={`group rounded-2xl bg-slate-50/60 hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col overflow-hidden ${
                  isPrimary
                    ? 'md:col-span-12 lg:col-span-6'
                    : 'md:col-span-6 lg:col-span-4'
                }`}
              >
                {/* Visual Preview Container */}
                <div className="p-4 sm:p-5 bg-slate-100/50 border-b border-slate-200/80 overflow-hidden">
                  <ProjectVisualPreview projectId={project.id} isCompact={!isPrimary} />
                </div>

                {/* Card Content Area */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Category & Status */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
                        {project.categoryDisplay}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                        {project.status}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Documented Highlights */}
                    <ul className="space-y-1.5 pt-1 text-xs text-slate-600">
                      {project.highlights.slice(0, isPrimary ? 2 : 1).map((h, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, isPrimary ? 5 : 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-white text-slate-700 border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > (isPrimary ? 5 : 4) && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
                          +{project.technologies.length - (isPrimary ? 5 : 4)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Action */}
                  <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400 truncate max-w-[200px]">
                      {project.context.split(',')[0]}
                    </span>
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-900 group-hover:text-blue-600 hover:underline transition-colors"
                    >
                      <span>View Case Study</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
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
