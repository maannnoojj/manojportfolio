export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  category: 'AI & ML' | 'Web Apps' | 'IoT / Sensors';
  tags: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  image: string;
  metrics?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  type: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  category: 'Certification' | 'Hackathon' | 'Coursework';
  description: string;
  credentialUrl?: string;
  badgeColor?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    icon?: string;
    description?: string;
  }[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  details?: string;
}
