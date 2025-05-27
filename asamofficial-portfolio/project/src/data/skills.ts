export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Python", level: 75, category: "backend" },
  { name: "Java", level: 70, category: "backend" },
  { name: "C#", level: 65, category: "backend" },
  
  // Database
  { name: "SQL", level: 85, category: "database" },
  { name: "MongoDB", level: 80, category: "database" },
  { name: "Redis", level: 75, category: "database" },
  
  // DevOps
  { name: "Docker", level: 85, category: "devops" },
  { name: "Kubernetes", level: 75, category: "devops" },
  { name: "AWS", level: 80, category: "devops" },
  { name: "CI/CD", level: 85, category: "devops" },
  
  // Other
  { name: "Git", level: 90, category: "other" },
  { name: "Agile/Scrum", level: 85, category: "other" },
  { name: "System Design", level: 80, category: "other" },
];