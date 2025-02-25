import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  dates: string;
  tags: string[];
  links: {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
  image: string;
}

export const DATA = {
  name: "Angus Bailey",
  initials: "AB",
  url: "https://angusbailey.com",
  location: "Ottawa, ON",
  locationLink: "https://www.google.com/maps/place/ottawa",
  description:
    "Computer Science student passionate about <u>full-stack development</u>, responsive web design, and building efficient, user-friendly applications.",
  summary:
    "I'm a passionate 3rd-year Computer Science student at [Carleton University](https://carleton.ca/), with a lifelong love for technology and innovation. I blend academic excellence with practical experience in software development. My journey in programming began early with Lua scripting, evolving into a comprehensive skill set encompassing [full-stack web development](#skills), cloud computing, and AI integration. My [project portfolio](#projects) demonstrates proficiency in technologies such as React, Next.js, Node.js, and Python. I'm eager to contribute my [skills](#skills) to cutting-edge projects in the tech industry.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "SQL",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Git",
    "Docker",
    "AWS",
    "SQLite",
    "MongoDB",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "AngusB@techie.com",
    tel: "+13434223212",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/boshyxd",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/angus-bailey-793123317",
        icon: Icons.linkedin,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@HaxorStrr",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  education: [
    {
      school: "Carleton University",
      href: "https://carleton.ca",
      degree: "Bachelor of Computer Science (BCS)",
      logoUrl: "/carleton.png",
      start: "2022",
      end: "2027",
      description:
        "Awarded entrance scholarship for academic excellence. Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Software Engineering, Cloud Computing, Artificial Intelligence. Co-op Program: Summer 2025 semester.",
    },
  ],

  work: [
    {
      company: "Carleton Blueprint",
      href: "https://carletonblueprint.com/",
      badges: [],
      location: "Ottawa, ON",
      title: "Software Developer",
      logoUrl: "/carletonblueprint.png",
      start: "December 2024",
      end: "Present",
      achievements: [
        "Led frontend development of a modern club website using React, Next.js, and TailwindCSS, integrating Mantine UI components and Sanity CMS for content management",
        "Collaborated closely with a cross-functional team of developers to implement responsive designs and interactive features that enhanced user engagement",
        "Established comprehensive Jest testing protocols and documentation practices to ensure code quality and facilitate smooth project handoff",
        "Developed dynamic content management workflows using Sanity CMS, enabling efficient content updates for events, resources, and team information",
        "Implemented responsive layouts and optimized performance across all device types, ensuring accessibility and optimal user experience",
      ],
    },
    {
      company: "CompuFix",
      href: "https://compufixkingston.com/",
      badges: [],
      location: "Kingston, ON",
      title: "Software Developer",
      logoUrl: "/compufix.png",
      start: "September 2022",
      end: "September 2023",
      achievements: [
        "Executed advanced hardware repairs and software re-installations, specializing in Windows operating systems",
        "Developed and deployed Python automation scripts for system diagnostics and driver updates, improving repair efficiency by 20%",
        "Designed and implemented a robust SQL database system to manage order backlogs and track parts inventory, streamlining the ordering process",
        "Created a custom software tool for inventory management using C# and SQLite, enhancing parts tracking and ordering processes",
        "Collaborated with the IT team to design and maintain an internal knowledge base using HTML and CSS, facilitating faster issue resolution",
      ],
    },
  ],
} as const;

export type Resume = typeof DATA;
