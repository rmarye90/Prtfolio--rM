export interface Project {
  id: number;
  title: string;
  href: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  status: "in-progress" | "completed" | "maintenance";
  githubUrl: string;
  longDescription?: string;
  features?: string[];
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools" | "other";
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillsData {
  frontend: Skill[]
  tools: Skill[]
}
