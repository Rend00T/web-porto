import { useState } from 'react';
import { SmoothScrollProvider, useSmoothScroll } from './context/SmoothScrollContext';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundGrid } from './components/BackgroundGrid';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { TechnicalProfile } from './components/TechnicalProfile';
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
      <BackgroundGrid />
      <Navbar />

      <main className="flex-1 relative z-10">
        <Hero />
        <About />
        <Experience />
        <ProjectShowcase onSelectProject={handleOpenProject} />
        <TechnicalProfile />
        <Contact />
      </main>

      <Footer />

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
