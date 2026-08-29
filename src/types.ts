export interface Project {
  id: string;
  title: string;
  category: 'WordPress & Elementor' | 'WooCommerce' | 'LMS & Portals' | 'Landing Pages' | 'Website Redesign';
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  features: string[];
  image: string;
  featured?: boolean;
  performanceScore?: number;
  liveUrl?: string;
  role: string;
  deliverables: string[];
  clientIndustry: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  iconName: string;
  badge: string;
}

export interface SkillItem {
  name: string;
  category: 'core' | 'plugins' | 'code' | 'optimization' | 'design';
  experienceYears: number;
  featured: boolean;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  companyOrCountry: string;
  rating: number;
  feedback: string;
  projectType: string;
  platform: 'Fiverr' | 'Direct Client' | 'Upwork';
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyActivities: string[];
}

export interface WhyChoosePoint {
  number: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}
