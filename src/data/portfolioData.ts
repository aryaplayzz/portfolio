import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  name: "Arya Amiri",
  title: "Software Engineer",
  about: "I am a passionate software developer with expertise in building modern web applications. I love creating elegant solutions to complex problems and am always eager to learn new technologies.",
  email: "amiriary@msu.edu",
  github: "https://github.com/aryaplayzz",
  linkedin: "https://www.linkedin.com/in/arya-amiri-45ab52298/",
  profileImage: "/images/profile/aryapic.png",
  projects: [
    {
      title: "Project 1",
      description: "Student Trading Group Website - Landing Page for the Student Trading Group at Michigan State University",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageUrl: "/images/projects/logo.png",
      githubUrl: "https://github.com/aryaplayzz",
      liveUrl: "https://msustg.org"
    },
    {
      title: "Project 2",
      description: "Portfolio Website",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      imageUrl: "/images/projects/portfolio_temp.png",
      githubUrl: "https://github.com/aryaplayzz",
      liveUrl: "put live url here"
    }
  ],
  experience: [
    {
      company: "Michigan State University",
      position: "Software Developer",
      duration: "2025 - Present",
      description: "Student Intern at Michigan State University building an IOS app for New Student Orientation",
      technologies: ["React Native", "Firebase", "Git"]
    },
    
  ],
  education: [
    {
      school: "Michigan State University",
      degree: "Bachelor of Science",
      field: "Computer Science",
      duration: "2022 - 2026",
      gpa: "3.4"
    }
  ],
  skills: [
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "C++",
    "ARM Assembly",
    "HTML",
    "CSS",
    "JSON",
    "XML",
    "SQL",
    "Git",
    "Docker",
    "AWS"
  ]
}; 