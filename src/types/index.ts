export type ProjectCategory = 
  | 'All'
  | 'Web Development'
  | 'Data Engineering'
  | 'AI / Machine Learning'
  | 'Cybersecurity'
  | 'IoT / Systems';

export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  categoryDisplay: string;
  featured: boolean;
  priorityOrder: number;
  status: string;
  statusType: 'academic' | 'internship' | 'simulation' | 'research';
  context: string;
  description: string;
  technologies: string[];
  metrics?: ProjectMetric[];
  highlights: string[];
  architecture?: {
    nodes: string[];
    description: string;
  };
  details: {
    overview: string;
    problem: string;
    objectives: string[];
    myRole: string;
    architecture: string;
    implementation: string[];
    challengesAndLessons: string[];
    currentStatus: string;
    caveatOrNote?: string;
    githubUrl?: string;
    demoUrl?: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  category: 'work' | 'organization' | 'education';
  description?: string;
  highlights: string[];
  technologies?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  currentStatusNote: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    highlightProject?: string;
  }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  platform: string;
  date: string;
  skillsAcquired: string[];
  type: 'course' | 'achievement';
  verificationNote: string;
}
