export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  duration: string;
  gpa?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  about: string;
  email: string;
  github: string;
  linkedin: string;
  profileImage?: string;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  skills: string[];
} 