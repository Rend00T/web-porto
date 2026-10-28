import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Web Development',
    description: 'Building responsive full-stack applications with modern component architectures and typed backend APIs.',
    skills: [
      { name: 'React', highlightProject: 'SIAW' },
      { name: 'TypeScript', highlightProject: 'SIAW' },
      { name: 'JavaScript' },
      { name: 'Express.js', highlightProject: 'SIAW' },
      { name: 'Tailwind CSS' },
      { name: 'Vite' },
      { name: 'REST APIs' },
      { name: 'Flask' },
      { name: 'FastAPI' },
      { name: 'Streamlit' }
    ]
  },
  {
    category: 'Databases & Data Engineering',
    description: 'Managing structured databases, distributed processing engines, and tiered lakehouse pipelines.',
    skills: [
      { name: 'PostgreSQL', highlightProject: 'SIAW' },
      { name: 'Prisma ORM', highlightProject: 'SIAW' },
      { name: 'Apache Spark', highlightProject: 'Lakehouse' },
      { name: 'PySpark', highlightProject: 'Lakehouse' },
      { name: 'ETL Pipelines', highlightProject: 'WeatherPulse' },
      { name: 'Hadoop' },
      { name: 'HDFS' }
    ]
  },
  {
    category: 'Machine Learning & AI',
    description: 'Training, fine-tuning, and evaluating classical and transformer models on text and tabular data.',
    skills: [
      { name: 'PyTorch', highlightProject: 'NLP Review' },
      { name: 'Hugging Face Transformers', highlightProject: 'NLP Review' },
      { name: 'scikit-learn' },
      { name: 'CatBoost', highlightProject: 'Billing ML' },
      { name: 'LightGBM', highlightProject: 'Billing ML' },
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Sentence Transformers' }
    ]
  },
  {
    category: 'Cybersecurity & Networking',
    description: 'Understanding security fundamentals, threat analysis, network protocols, and cryptographic mathematics.',
    skills: [
      { name: 'Cryptography Fundamentals', highlightProject: 'RSA Verify' },
      { name: 'Linux' },
      { name: 'Kali Linux' },
      { name: 'Bash' },
      { name: 'Web Security Testing' },
      { name: 'Burp Suite' },
      { name: 'CyberChef' }
    ]
  },
  {
    category: 'Programming Languages',
    description: 'Core languages utilized across software engineering, systems simulation, and data science coursework.',
    skills: [
      { name: 'Python' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'SQL' },
      { name: 'Java' },
      { name: 'C' },
      { name: 'C++' }
    ]
  },
  {
    category: 'Tools & Simulation Platforms',
    description: 'Developer environments, containerization, and specialized academic simulation suites.',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Docker' },
      { name: 'Docker Compose' },
      { name: 'VS Code' },
      { name: 'Google Colab' },
      { name: 'Kaggle' },
      { name: 'Tinkercad', highlightProject: 'Traffic IoT' },
      { name: 'CloudSim 4.0', highlightProject: 'CloudSim' },
      { name: 'GNS3' },
      { name: 'Android Studio' }
    ]
  }
];
