import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

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
      description: "Awarded entrance scholarship for academic excellence. Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Software Engineering, Cloud Computing, Artificial Intelligence. Co-op Program: Summer 2025 semester.",
    },
  ],

  work: [
    {
      company: "CompuFix",
      href: "https://compufixkingston.com/",
      badges: [],
      location: "Kingston, ON",
      title: "Computer Repair Technician",
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

  projects: [
    {
      title: "AestheticAxis",
      href: "https://aestheticaxis.com",
      dates: "2024",
      active: true,
      description:
        "A full-stack interactive quiz application using React and Next.js, implementing custom dark mode theming and achieving a perfect Lighthouse score for SEO and performance.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Chakra UI",
        "Tailwind CSS",
        "Framer Motion",
      ],
      image: "/aestheticaxis.png",
      links: [
        {
          type: "Website",
          href: "https://boshyxd.github.io/aesthetic-axis/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/boshyxd/AestheticAxis",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "DiscordLLM",
      href: "https://github.com/boshyxd/DiscordLLM",
      dates: "2024",
      active: true,
      description:
        "A modular Discord bot using Python and Discord.py, integrating Ollama for local language model processing and implementing advanced slash commands for AI-driven conversations.",
      technologies: [
        "Python",
        "Discord.py",
        "Ollama",
        "Docker",
        "Pandas",
        "Matplotlib",
        "pytest",
      ],
      image: "/discordllm.png",
      links: [
        {
          type: "Source",
          href: "https://github.com/boshyxd/DiscordLLM",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "HWIDInspector",
      href: "https://github.com/boshyxd/HWIDInspector",
      dates: "2024",
      active: true,
      description:
        "A Python tool with PySide6 GUI for inspecting and modifying system Hardware ID (HWID) and related components. Features include random HWID generation, secure system information modification, and SQLite integration for efficient data management.",
      technologies: [
        "Python",
        "PySide6",
        "WMI",
        "SQLite",
        "Bleak",
      ],
      image: "/hwidinspector.png",
      links: [
        {
          type: "Source",
          href: "https://github.com/boshyxd/HWIDInspector",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "RSSICheck",
      href: "https://github.com/boshyxd/RSSICheck",
      dates: "2024",
      active: true,
      description:
        "A Python-based tool using Bleak library to scan and classify RSSI of nearby Bluetooth devices in real-time. Utilizes Matplotlib and Pandas for data visualization and analysis, providing detailed reports on Bluetooth signal quality.",
      technologies: [
        "Python",
        "Bleak",
        "Matplotlib",
        "Pandas",
      ],
      image: "/rssicheck.png",
      links: [
        {
          type: "Source",
          href: "https://github.com/boshyxd/RSSICheck",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
  hackathons: [
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Recipic, a mobile app that uses ClarifAI image recognition to identify ingredients from photos and suggest recipes. Won 1st place for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/example/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/example/recipic-rails",
        },
      ],
    },
    {
      title: "HackTheNorth 2023",
      dates: "September 15th - 17th, 2023",
      location: "Waterloo, Ontario",
      description:
        "Created EcoTrack, an AI-powered mobile app that helps users reduce their carbon footprint by providing personalized sustainability recommendations based on daily activities.",
      image: "/hackathon-logo.png",
      win: "Sustainability Innovation Award",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg",
      links: [
        {
          title: "GitHub Repo",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/example/ecotrack",
        },
        {
          title: "Demo",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
      ],
    },
    {
      title: "CUHacking 2024",
      dates: "January 26th - 28th, 2024",
      location: "Ottawa, Ontario",
      description:
        "Developed HealthHub, a blockchain-based health data management system that allows secure sharing of medical records between patients and healthcare providers while ensuring data privacy and integrity.",
      image: "/cuhacking-logo.png",
      win: "Best Use of Blockchain Technology",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg",
      links: [
        {
          title: "GitHub Repo",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/example/healthhub",
        },
      ],
    },
  ],
} as const;

export type Project = typeof DATA.projects[number];