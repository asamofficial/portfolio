export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Bus Booking System",
    description: "Developed a comprehensive bus booking system with real-time seat availability, secure payment integration, and booking management.",
    image: "https://images.pexels.com/photos/7956704/pexels-photo-7956704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    link: "https://bus-booking-system.vercel.app",
    github: "https://github.com/asamofficial/bus-booking",
    featured: true
  },
  {
    id: 2,
    title: "ElectoVote - Event Voting System",
    description: "Created a secure and user-friendly event voting platform with real-time results, authentication, and admin dashboard.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    link: "https://eventvotingsystem.vercel.app",
    github: "https://github.com/asamofficial/electovote",
    featured: true
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern portfolio website built with React and Tailwind CSS, featuring a glassmorphic design and dark mode support.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    link: "https://asamofficial.netlify.app",
    github: "https://github.com/asamofficial/portfolio",
    featured: true
  }
];