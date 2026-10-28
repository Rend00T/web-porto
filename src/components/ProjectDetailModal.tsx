import React, { useEffect } from 'react';
import { X, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { ProjectVisualPreview } from './ProjectVisualPreview';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 dark:bg-black/80 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#141414] text-[#171717] dark:text-[#EDEDED] rounded-2xl shadow-2xl border border-[#E5E5E5] dark:border-[#282828] overflow-hidden flex flex-col focus:outline-none"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[#E5E5E5] dark:border-[#262626] flex items-start justify-between bg-[#FAFAFA] dark:bg-[#171717] sticky top-0 z-10">
          <div>
            <div className="flex items-center space-x-2.5 mb-1.5 flex-wrap gap-y-1">
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#171717] dark:text-[#EDEDED] bg-[#EBEBEB] dark:bg-[#222222] px-2.5 py-0.5 rounded border border-[#D4D4D4] dark:border-[#333333]">
                {project.categoryDisplay}
              </span>
              <span className="text-xs font-mono text-[#858585] dark:text-[#737373] bg-white dark:bg-[#141414] px-2.5 py-0.5 rounded border border-[#E5E5E5] dark:border-[#2A2A2A]">
                {project.status}
              </span>
            </div>
            <h2 id="modal-title" className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#171717] dark:text-white">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#858585] dark:text-[#737373] mt-0.5 font-mono">
              {project.context}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 text-[#858585] hover:text-[#171717] dark:hover:text-white hover:bg-[#EBEBEB] dark:hover:bg-[#242424] rounded-md transition-colors ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body with data-lenis-prevent */}
        <div 
          data-lenis-prevent
          className="overflow-y-auto px-6 py-6 space-y-8 divide-y divide-[#E5E5E5] dark:divide-[#262626]"
        >
          
          {/* Visual Preview / Architecture Representation */}
          <section className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#858585] dark:text-[#737373] font-semibold">
              Interactive System Representation
            </h3>
            <div className="rounded-xl overflow-hidden border border-[#2E2E2E] shadow-xs bg-[#171717]">
              <ProjectVisualPreview projectId={project.id} isCompact={false} />
            </div>
            {project.details.caveatOrNote && (
              <div className="p-3 bg-[#F2F2F2] dark:bg-[#1C1C1C] rounded-md border border-[#E5E5E5] dark:border-[#2E2E2E] text-xs text-[#666666] dark:text-[#A3A3A3] flex items-start space-x-2">
                <AlertTriangle className="w-4 h-4 text-[#858585] shrink-0 mt-0.5" />
                <span>{project.details.caveatOrNote}</span>
              </div>
            )}
          </section>

          {/* Section: Overview & Problem */}
          <section className="pt-6 space-y-4">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#171717] dark:text-white font-semibold mb-2">
                Project Overview
              </h3>
              <p className="text-sm sm:text-base text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                {project.details.overview}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#858585] dark:text-[#737373] font-semibold mb-1.5">
                Problem &amp; Motivation
              </h4>
              <p className="text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                {project.details.problem}
              </p>
            </div>
          </section>

          {/* Section: Objectives & Role */}
          <section className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#171717] dark:text-white font-semibold mb-3">
                Key Objectives
              </h3>
              <ul className="space-y-2 text-sm text-[#666666] dark:text-[#A3A3A3]">
                {project.details.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#171717] dark:text-white shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#171717] dark:text-white font-semibold mb-3">
                My Role &amp; Contribution
              </h3>
              <div className="p-4 rounded-md bg-[#FAFAFA] dark:bg-[#181818] border border-[#E5E5E5] dark:border-[#282828] text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                {project.details.myRole}
              </div>
            </div>
          </section>

          {/* Section: Tech Stack */}
          <section className="pt-6 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#171717] dark:text-white font-semibold">
              Technologies &amp; Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-[#F2F2F2] dark:bg-[#1F1F1F] text-[#171717] dark:text-[#CCCCCC] text-xs font-mono rounded-md border border-[#E5E5E5] dark:border-[#333333]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Section: Architecture & Key Implementation */}
          <section className="pt-6 space-y-4">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#171717] dark:text-white font-semibold mb-2">
                Technical Architecture
              </h3>
              <p className="text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                {project.details.architecture}
              </p>
            </div>

            {project.architecture && (
              <div className="p-3.5 bg-[#171717] text-[#EDEDED] rounded-lg font-mono text-xs overflow-x-auto border border-[#2E2E2E]">
                <div className="text-[11px] text-[#888888] mb-2">Architectural Nodes:</div>
                <div className="flex items-center space-x-2 whitespace-nowrap">
                  {project.architecture.nodes.map((node, i) => (
                    <React.Fragment key={node}>
                      <span className="px-2 py-1 bg-[#242424] text-white rounded border border-[#383838]">
                        {node}
                      </span>
                      {i < project.architecture!.nodes.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-[#888888] shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#858585] dark:text-[#737373] font-semibold mb-2">
                Implementation Details
              </h4>
              <ul className="space-y-2 text-sm text-[#666666] dark:text-[#A3A3A3]">
                {project.details.implementation.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#171717] dark:bg-white shrink-0 mt-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section: Challenges & Lessons Learned */}
          <section className="pt-6 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#171717] dark:text-white font-semibold">
              Engineering Challenges &amp; Lessons Learned
            </h3>
            <ul className="space-y-2 text-sm text-[#666666] dark:text-[#A3A3A3]">
              {project.details.challengesAndLessons.map((lesson, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#858585] shrink-0 mt-2"></span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section: Results & Current Status */}
          <section className="pt-6 pb-2 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#171717] dark:text-white font-semibold">
              Results &amp; Current Status
            </h3>
            <p className="text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed bg-[#FAFAFA] dark:bg-[#181818] p-4 rounded-md border border-[#E5E5E5] dark:border-[#282828]">
              {project.details.currentStatus}
            </p>
          </section>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#FAFAFA] dark:bg-[#171717] border-t border-[#E5E5E5] dark:border-[#262626] flex items-center justify-between">
          <div className="text-xs font-mono text-[#858585] dark:text-[#737373]">
            Case study for {project.title}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#171717] hover:bg-[#333333] dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-[#171717] text-xs font-semibold rounded-md transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
