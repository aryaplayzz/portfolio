import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  name: "Arya Amiri",
  title: "Software Engineer & Project Lead",
  about: "I am a passionate software engineer and project leader with experience building modern web applications and coordinating cross-functional teams. I enjoy creating elegant technical solutions while also applying project management frameworks like Agile and Scrum to deliver impactful results. With a strong foundation in computer science and hands-on leadership, I bridge the gap between development and management.",
  email: "amiriary@msu.edu",
  github: "https://github.com/aryaplayzz",
  linkedin: "https://www.linkedin.com/in/arya-amiri-45ab52298/",
  profileImage: "/images/profile/aryapic.png",

  projects: [
    {
      title: "Student Trading Group Website",
      description: "Developed and managed the landing page for the Student Trading Group at Michigan State University. Oversaw design and performance improvements while ensuring compatibility across multiple devices.",
      technologies: ["HTML", "CSS", "JavaScript", "Leadership"],
      imageUrl: "/images/projects/logo.png",
      githubUrl: "https://github.com/aryaplayzz",
      liveUrl: "https://msustg.org"
    },
    {
      title: "Portfolio Website",
      description: "Directed project lifecycle for a responsive personal portfolio site. Designed with clean aesthetics, subtle animations, and scalability in mind to highlight both technical and PM experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      imageUrl: "/images/projects/project2.png",
      githubUrl: "https://github.com/aryaplayzz",
      liveUrl: "https://aryaamiri.com"
    },
    {
      title: "Sparty Jack-In-The-Box",
      description: "Scoped requirements and managed project planning for an extensible animation simulation using modular C++ architecture. Applied project management frameworks to ensure scalability across future features.",
      technologies: ["C++", "wxWidgets", "Project Management"],
      imageUrl: "/images/projects/sparty.png",
      githubUrl: "https://github.com/aryaplayzz"
    },
    {
      title: "Aquarium Simulation",
      description: "Planned milestones and delegated tasks for a desktop simulation project, ensuring adherence to object-oriented principles. Monitored metrics to achieve 60+ FPS animation.",
      technologies: ["C++", "wxWidgets", "Agile"],
      imageUrl: "/images/projects/aquarium.png",
      githubUrl: "https://github.com/aryaplayzz"
    },
    {
      title: "Arduino-Powered LED Phone Case",
      description: "Organized design and prototyping phases for an Arduino-based LED phone case. Facilitated collaboration between hardware and software teams to reach a working demo.",
      technologies: ["Embedded C", "Arduino IDE", "Team Management"],
      imageUrl: "/images/projects/arduino.png",
      githubUrl: "https://github.com/aryaplayzz"
    }
  ],

  experience: [
    {
      company: "Student Trading Group",
      position: "Co-Founder & Project Lead",
      duration: "2023 - Present",
      description: "Founded and grew the organization to 200+ members with 85% retention. Managed a 5-person technical team to create educational resources and led the development of the responsive website. Designed structured curriculum and facilitated engaging weekly workshops.",
      technologies: ["HTML", "CSS", "JavaScript", "Leadership", "JIRA", "Trello"]
    },
    {
      company: "Michigan State University",
      position: "Mobile App Developer – Orientation Intern",
      duration: "2025 - Present",
      description: "Coordinated a cross-functional team to deliver a React Native and Firebase mobile app for 10,000+ incoming students. Directed implementation of a digital check-in system, reducing event wait times by 25%. Managed stakeholder feedback and onboarding workflows for 500+ students weekly.",
      technologies: ["React Native", "Firebase", "Agile", "Team Management"]
    }
  ],

  education: [
    {
      school: "Michigan State University",
      degree: "Bachelor of Science",
      field: "Computer Science (Minor in Business)",
      duration: "2022 - 2026",
      gpa: "3.4",
      
    }
  ],

  skills: [
    // Programming & Technical
    "React", "TypeScript", "JavaScript", "Node.js", "Python", "C++", "ARM Assembly",
    "HTML", "CSS", "SQL", "Firebase", "Docker", "AWS", "JSON", "XML", "Git",

    // Project Management
    "Agile", "Scrum", "Waterfall", "JIRA", "Trello", "Microsoft Project",

    // Collaboration & Design
    "Figma", "Slack", "Microsoft Teams", "Google Workspace", "Google Cloud Platform"
  ]
};
