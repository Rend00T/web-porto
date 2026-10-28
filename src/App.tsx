import { useState } from 'react';
import { SmoothScrollProvider, useSmoothScroll } from './context/SmoothScrollContext';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundGrid } from './components/BackgroundGrid';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Project } from './types';

function PortfolioContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { stop, start } = useSmoothScroll();

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    stop();
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    start();
  };

  return (
    <div className="min-h-screen relative flex flex-col bg-[#FAFAFA] dark:bg-[#0B0B0B] text-[#171717] dark:text-[#F5F5F5] font-sans transition-colors duration-200">
      {/* Global Subtle Background Grid */}
      <BackgroundGrid />

      {/* Floating Pill Top Navigation */}
      <Navbar />

      {/* Main Single-Page Content Stream */}
      <main className="flex-1 relative z-10">
        <Hero />
        <ProjectShowcase onSelectProject={handleOpenProject} />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Detailed Case-Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={handleCloseProject}
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        <PortfolioContent />
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}

export default App;
