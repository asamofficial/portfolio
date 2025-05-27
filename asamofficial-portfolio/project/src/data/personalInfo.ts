export interface PersonalInfo {
  name: string;
  title: string;
  photo: string;
  shortBio: string;
  email: string;
  phone: string;
  location: string;
  socialLinks: {
    linkedin: string;
    github: string;
    twitter: string;
  };
  resumes: {
    primary: string;
    secondary: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: "Mohamed Asam",
  title: "IT Professional | Software Engineer | Web Developer",
  photo: "https://avatars.githubusercontent.com/u/213398562?s=400&u=674b7f3f525e1ca898745ec4b072ecc3697c2686&v=4",
  shortBio: "I'm a Full Stack Developer with 2 years of freelance experience, currently following BSc in Software Engineering at KAATSU INTERNATIONAL UNIVERSITY. On the front-end, I've mastered React.js and CSS, creating responsive and dynamic user interfaces. As I continue my journey, I'm diving deeper into back-end technologies to build comprehensive, full-stack applications. Stay tuned as I continue to expand my skill set and bring innovative ideas to life!",
  email: "asamofficial16@gmail.com",
  phone: "+94 762 484 983",
  location: "Colombo, Sri Lanka",
  socialLinks: {
    linkedin: "https://linkedin.com/in/mohamed-asam-674319364",
    github: "https://github.com/asamofficial",
    twitter: "https://twitter.com/asamofficial16"
  },
  resumes: {
    primary: "/resumes/fullstack-internship-resume.pdf",
    secondary: "/resumes/web-developer-cv.pdf"
  }
};