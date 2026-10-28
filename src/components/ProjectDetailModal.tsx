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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col focus:outline-none"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-start justify-between bg-slate-50/70 sticky top-0 z-10 backdrop-blur-md">
          <div>
            <div className="flex items-center space-x-2.5 mb-1.5 flex-wrap gap-y-1">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
                {project.categoryDisplay}
              </span>
              <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                {project.status}
              </span>
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-mono">
              {project.context}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto px-6 py-6 space-y-8 divide-y divide-slate-100">
          
          {/* Visual Preview / Architecture Representation */}
          <section className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Interactive System Representation
            </h3>
            <div className="rounded-xl overflow-hidden border border-slate-200/80 shadow-sm bg-slate-900">
              <ProjectVisualPreview projectId={project.id} isCompact={false} />
            </div>
            {project.details.caveatOrNote && (
              <div className="p-3 bg-amber-50/80 rounded-lg border border-amber-200/80 text-xs text-amber-900 flex items-start space-x-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{project.details.caveatOrNote}</span>
              </div>
            )}
          </section>

          {/* Section: Overview & Problem */}
          <section className="pt-6 space-y-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 font-mono mb-2">
                Project Overview
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {project.details.overview}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-mono mb-1.5">
                Problem & Motivation
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {project.details.problem}
              </p>
            </div>
          </section>

          {/* Section: Objectives & Role */}
          <section className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 font-mono mb-3">
                Key Objectives
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {project.details.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 font-mono mb-3">
                My Role & Contribution
              </h3>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed">
                {project.details.myRole}
              </div>
            </div>
          </section>

          {/* Section: Tech Stack */}
          <section className="pt-6 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 font-mono">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-100 hover:bg-slate-200/80 text-slate-800 text-xs font-medium rounded-md border border-slate-200 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Section: Architecture & Key Implementation */}
          <section className="pt-6 space-y-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 font-mono mb-2">
                Technical Architecture
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {project.details.architecture}
              </p>
            </div>

            {project.architecture && (
              <div className="p-3.5 bg-slate-900 text-slate-200 rounded-xl font-mono text-xs overflow-x-auto border border-slate-800">
                <div className="text-[11px] text-slate-400 mb-2">Architectural Nodes:</div>
                <div className="flex items-center space-x-2 whitespace-nowrap">
                  {project.architecture.nodes.map((node, i) => (
                    <React.Fragment key={node}>
                      <span className="px-2 py-1 bg-slate-800 text-slate-200 rounded border border-slate-700">
                        {node}
                      </span>
                      {i < project.architecture!.nodes.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-mono mb-2">
                Implementation Details
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                {project.details.implementation.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section: Challenges & Lessons Learned */}
          <section className="pt-6 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 font-mono">
              Engineering Challenges & Lessons Learned
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {project.details.challengesAndLessons.map((lesson, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2"></span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section: Results & Current Status */}
          <section className="pt-6 pb-2 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 font-mono">
              Results & Current Status
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
              {project.details.currentStatus}
            </p>
          </section>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <div className="text-xs font-mono text-slate-400">
            Case study for {project.title}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
