export interface Project {
  id: number;
  title: string;
  href: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  status: "in-progress" | "completed" | "maintenance";
  githubUrl: string;
}
