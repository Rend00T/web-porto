import { ExperienceItem, EducationItem } from '../types';

export const educationData: EducationItem[] = [
  {
    id: 'its',
    degree: 'Bachelor Degree in Information Technology',
    institution: 'Institut Teknologi Sepuluh Nopember (ITS)',
    location: 'Surabaya, Indonesia',
    period: 'August 2024 – Present',
    currentStatusNote: 'Fifth Semester Undergraduate (as of October 2026)',
    description: 'Undergraduate study in the Faculty of Intelligent Electrical and Informatics Technology (FTEIC), specializing in software development, data engineering, cloud systems, and applied cybersecurity.'
  },
  {
    id: 'sman5-bogor',
    degree: 'High School Diploma (Science & Mathematics)',
    institution: 'SMAN 5 Bogor',
    location: 'Bogor, Indonesia',
    period: 'July 2021 – June 2024',
    currentStatusNote: 'Graduated',
    description: 'Focused on foundational sciences, mathematics, logic, and early programming interest.'
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'manulife-2026',
    role: 'IT Support Intern',
    organization: 'PT Manulife, Agency Borobudur',
    location: 'Jakarta, Indonesia',
    period: 'July 2026 – August 2026',
    category: 'work',
    description: 'Focused on developer-led operational enablement, technical onboarding, and full-stack internal tool engineering.',
    highlights: [
      'Educated and onboarded new sales agents on the Manulife digital application ecosystem and productivity tools.',
      'Designed and engineered the Smart Insurance Agent Workspace (SIAW) web platform to streamline prospect tracking and follow-up management.',
      'Developed responsive full-stack features utilizing React, TypeScript, Express.js, Prisma ORM, and PostgreSQL.'
    ],
    technologies: ['React', 'TypeScript', 'Express.js', 'Prisma ORM', 'PostgreSQL', 'Tailwind CSS']
  },
  {
    id: 'manulife-2025',
    role: 'Intern',
    organization: 'PT Manulife, Agency Borobudur',
    location: 'Jakarta, Indonesia',
    period: 'July 2025 – August 2025',
    category: 'work',
    description: 'Supported agency administrative digitalization, performance reporting, and inter-team workflow coordination.',
    highlights: [
      'Assisted in the digital transformation of manual administrative and reporting workflows across agency desks.',
      'Engineered structured weekly and monthly online reports to enhance performance tracking and operational transparency.',
      'Coordinated internal meetings, operational documentation, and inter-agent task delegation.'
    ],
    technologies: ['Google Workspace', 'Data Reporting', 'Digital Workflows', 'Documentation']
  },
  {
    id: 'hmit-psdm-2025',
    role: 'Staff Internship — PSDM HMIT ITS',
    organization: 'Himpunan Mahasiswa Teknologi Informasi (HMIT ITS), Kabinet Tuah Prakarsa',
    location: 'Surabaya, Indonesia',
    period: 'October 2025 – December 2025',
    category: 'organization',
    description: 'Active departmental human resources and organizational development contributor.',
    highlights: [
      'Served as Master of Ceremony (MC) for IT Boost, coordinating agenda delivery and participant engagement.',
      'Contributed analytical insights and student data synthesis for the Pemetaan dan Pemantauan student development program.',
      'Collaborated with organizational leadership on internal member engagement initiatives.'
    ],
    technologies: ['Public Speaking', 'Event Coordination', 'Data Mapping', 'Team Collaboration']
  },
  {
    id: 'ilits-2024',
    role: 'Staff Finance — ILITS Jakarta 2024',
    organization: 'Ini Lho ITS! (ILITS) Regional Jakarta',
    location: 'Jakarta, Indonesia',
    period: 'December 2024 – January 2025',
    category: 'organization',
    description: 'Supported budgeting, sales campaigns, and financial stewardship for university outreach in Jakarta.',
    highlights: [
      'Executed merchandise sales drives and fundraising campaigns to support event operational financing.',
      'Ensured financial accountability and transparent transaction records for campus outreach activities.',
      'Facilitated orientation and information sessions introducing ITS academic programs to high school students in Jakarta.'
    ],
    technologies: ['Financial Planning', 'Merchandise Sales', 'Budget Tracking', 'Event Outreach']
  }
];
