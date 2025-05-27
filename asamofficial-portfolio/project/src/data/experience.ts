export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Freelance",
    location: "Remote",
    startDate: "2022-01",
    endDate: null,
    description: [
      "Developed and deployed 10+ full-stack web applications for various clients",
      "Implemented responsive designs and modern UI/UX practices using React and Tailwind CSS",
      "Built RESTful APIs and managed database operations using Node.js and MongoDB",
      "Integrated third-party services and APIs for payment processing and authentication",
      "Achieved 40% faster load times through performance optimization techniques"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "Web Developer Intern",
    company: "TechLabs Lanka",
    location: "Colombo, Sri Lanka",
    startDate: "2021-06",
    endDate: "2021-12",
    description: [
      "Collaborated with senior developers on front-end development tasks",
      "Assisted in implementing UI components using React and styled-components",
      "Participated in code reviews and agile development processes",
      "Contributed to the development of internal tools and documentation"
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "Git"]
  }
];