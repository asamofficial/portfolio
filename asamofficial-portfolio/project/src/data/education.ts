export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number | string;
  description?: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  expires?: string;
  credentialId?: string;
  credentialURL?: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Engineering",
    institution: "Kaatsu International University",
    location: "Colombo, Sri Lanka",
    startYear: 2022,
    endYear: 2026,
    description: "Currently pursuing a degree in Computer Engineering with a focus on Software Engineering."
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2024",
    credentialURL: "#"
  }
];