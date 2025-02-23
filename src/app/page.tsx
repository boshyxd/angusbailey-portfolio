import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA, Project } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import NavBar from "@/components/navbar";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/components/theme-provider";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { FaFigma } from "react-icons/fa";

const BLUR_FADE_DELAY = 0.04;

const DynamicHero = dynamic(() => import("@/components/hero"), { ssr: false });

export default function Page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <NavBar />
      <main className="flex flex-col min-h-[100dvh] space-y-8 max-w-4xl mx-auto px-4 pt-0 pb-20">
        <div className="-mt-12">
          <DynamicHero />
        </div>
        <About />
        <Skills />
        <Education />
        <WorkExperience />
        <Projects />
        <Hackathons />
        <Contact />

        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <div className="text-center pt-8 border-t border-border">
            <Link
              href="/roblox"
              className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1.5"
            >
              View Roblox Portfolio
              <Icons.chevronRight className="size-3" />
            </Link>
          </div>
        </BlurFade>
      </main>
    </ThemeProvider>
  );
}

function About() {
  return (
    <section id="about" className="space-y-4">
      <SectionHeader title="About" delay={BLUR_FADE_DELAY * 4} />
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <Markdown className="prose max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert prose-p:my-0 prose-p:leading-snug [&>p]:mb-3">
          {DATA.summary}
        </Markdown>
      </BlurFade>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="space-y-4">
      <SectionHeader title="Education" delay={BLUR_FADE_DELAY * 6} />
      {DATA.education.map((education, id) => (
        <BlurFade
          key={education.school}
          delay={BLUR_FADE_DELAY * 7 + id * 0.05}
        >
          <ResumeCard
            href={education.href}
            logoUrl={education.logoUrl}
            altText={education.school}
            title={education.school}
            subtitle={education.degree}
            period={`${education.start} - ${education.end}`}
          />
        </BlurFade>
      ))}
    </section>
  );
}

function WorkExperience() {
  return (
    <section id="work" className="space-y-4">
      <SectionHeader title="Work Experience" delay={BLUR_FADE_DELAY * 8} />
      {DATA.work.map((work, id) => (
        <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 9 + id * 0.05}>
          <ResumeCard
            logoUrl={work.logoUrl}
            altText={work.company}
            title={work.company}
            subtitle={work.title}
            href={work.href}
            badges={work.badges}
            period={`${work.start} - ${work.end ?? "Present"}`}
            achievements={work.achievements}
          />
        </BlurFade>
      ))}
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="space-y-4">
      <SectionHeader title="Skills" delay={BLUR_FADE_DELAY * 10} />
      <div className="flex flex-wrap gap-2">
        {DATA.skills.map((skill, id) => (
          <BlurFade key={skill} delay={BLUR_FADE_DELAY * 11 + id * 0.05}>
            <Badge>{skill}</Badge>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="space-y-8 py-12">
      <SectionHeader title="Projects" delay={BLUR_FADE_DELAY * 12} />
      <div className="grid gap-8 sm:grid-cols-2">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <ProjectCard
            href="https://carletonai.github.io/cais-web/"
            title="Carleton AI Society Website"
            description="A website for the Carleton AI Society, built with React, Next.js, and Tailwind CSS."
            dates="2025"
            tags={["React", "Next.js", "Tailwind CSS", "Jest"]}
            links={[
              {
                icon: <Icons.github className="size-3 link-icon" />,
                title: "Source",
                href: "https://github.com/carletonai/cais-web",
              },
              {
                icon: <Icons.globe className="size-3 link-icon" />,
                title: "Website",
                href: "https://carletonai.github.io/cais-web/",
              },
            ]}
            image="/cais.png"
            className="project-card group"
          />
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 13.5}>
          <ProjectCard
            href="https://github.com/boshyxd/SecureVision"
            title="SecureVision"
            description="A scalable security analysis platform that enriches threat data using distributed worker nodes, Solace event broker, and AI-powered insights. Built with FastAPI, Docker, Terraform, and groq for comprehensive security scoring and recommendations."
            dates="2025"
            tags={[
              "React",
              "Shadcn",
              "Tailwind CSS",
              "Python",
              "FastAPI",
              "Docker",
              "Terraform",
              "Solace PubSub+",
              "Groq API",
            ]}
            links={[
              {
                icon: <Icons.github className="size-3 link-icon" />,
                title: "Source",
                href: "https://github.com/boshyxd/SecureVision",
              },
              {
                icon: <Icons.devpost className="size-3 link-icon" />,
                title: "Dorahacks",
                href: "https://dorahacks.io/buidl/21611",
              },
            ]}
            image="/securevision.png"
            className="project-card group"
          />
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <ProjectCard
            href="https://github.com/MxvsAtv321/ED-Patient-Flow-System/tree/main"
            title="WaitWell"
            description="Patients scan a QR code on their wristband to access their estimated wait time and a variety of other statistics."
            dates="2025"
            tags={[
              "React",
              "Shadcn",
              "Tailwind CSS",
              "Python",
              "Flask",
              "OpenAI API",
              "MySQL",
              "Sli.dev",
            ]}
            links={[
              {
                icon: <Icons.github className="size-3 link-icon" />,
                title: "Source",
                href: "https://github.com/MxvsAtv321/ED-Patient-Flow-System/tree/main",
              },
              {
                icon: <Icons.devpost className="size-3 link-icon" />,
                title: "Devpost",
                href: "https://devpost.com/software/waitwell",
              },
            ]}
            image="/waitwell.png"
            className="project-card group"
          />
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 14.5}>
          <ProjectCard
            href="https://github.com/boshyxd/SkillBoost"
            title="SkillBoost"
            description="An AI-powered learning companion that transforms interests into tailored skills with personalized, AI-generated learning paths and adaptive, context-aware lessons. Built with React, Next.js, and Claude AI."
            dates="2024"
            tags={[
              "React",
              "Next.js",
              "Firebase",
              "Claude API",
              "JavaScript",
              "CSS",
            ]}
            links={[
              {
                icon: <Icons.github className="size-3 link-icon" />,
                title: "Source",
                href: "https://github.com/boshyxd/SkillBoost",
              },
              {
                icon: <Icons.globe className="size-3 link-icon" />,
                title: "Website",
                href: "https://skill--boost.vercel.app/",
              },
              {
                icon: <Icons.devpost className="size-3 link-icon" />,
                title: "Devpost",
                href: "https://devpost.com/software/skillboost-d1trk7",
              },
            ]}
            image="/skillboost.png"
            className="project-card group"
          />
        </BlurFade>
      </div>
    </section>
  );
}

function Hackathons() {
  return (
    <section id="hackathons" className="space-y-6">
      <SectionHeader title="Hackathons" delay={BLUR_FADE_DELAY * 14} />
      <div className="flex flex-col gap-6">
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <HackathonCard
            title="SCANANA - Battle Royale XVI"
            description="A LIDAR-based scanning game where your scanner has a peculiar malfunction - it's allergic to bananas! Created for the Battle Royale Game Jam Ottawa with the theme 'Malfunction'."
            location="Ottawa"
            dates="2024"
            image="battle-royale.png"
            award="Winner"
            links={[
              {
                icon: <Icons.github className="size-3 link-icon" />,
                title: "Source",
                href: "https://github.com/boshyxd/SCANANA",
              },
              {
                icon: <Icons.globe className="size-3 link-icon" />,
                title: "itch.io",
                href: "https://boshyxd.itch.io/scanana",
              },
            ]}
            technologies={[
              "Godot Engine",
              "GDScript",
              "LIDAR",
              "Shaders",
              "3D Graphics",
              "Game Development"
            ]}
          />
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <HackathonCard
            title="WaitWell - McHacks 12"
            description="Patients scan a QR code on their wristband to access their estimated wait time and a variety of other statistics."
            location="McGill University"
            dates="2025"
            image="/mchacks.png"
            links={[
              {
                icon: <Icons.github className="size-3 link-icon" />,
                title: "Source",
                href: "https://github.com/MxvsAtv321/ED-Patient-Flow-System/tree/main",
              },
              {
                icon: <Icons.devpost className="size-3 link-icon" />,
                title: "Devpost",
                href: "https://devpost.com/software/waitwell",
              },
              {
                icon: <FaFigma className="size-3 link-icon" />,
                title: "Figma",
                href: "https://www.figma.com/design/rgkiZXwYWrRom2Jx40xZV7/WaitWell-UI%2FUX?node-id=0-1&t=G7Ato37ZnUvauHEP-1",
              },
            ]}
            technologies={[
              "React",
              "Shadcn",
              "Tailwind CSS",
              "Python",
              "Flask",
              "OpenAI API",
              "MySQL",
              "Sli.dev",
            ]}
          />
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 20}>
          <HackathonCard
            title="SecureVision - uOttaHack 7"
            description="A Multimodal Breach Analysis Platform"
            location="University of Ottawa"
            dates="2025"
            image="/uOttaHack.png"
            award="Winner"
            links={[
              {
                icon: <Icons.github className="size-3 link-icon" />,
                title: "Source",
                href: "https://github.com/StephenRebel/CU-Computer-Vision",
              },
              {
                icon: <Icons.devpost className="size-3 link-icon" />,
                title: "Dorahacks",
                href: "https://dorahacks.io/buidl/21611",
              },
            ]}
            technologies={[
              "React",
              "Shadcn",
              "Tailwind CSS",
              "Python",
              "FastAPI",
              "Terraform",
              "Solace PubSub+",
              "Groq API",
              "Docker",
              "Shodan API",
            ]}
          />
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 22}>
          <HackathonCard
            title="ThreatAnalyzer v2.0 - cuHacking"
            description="A web app that uses AI to detect threats in real-time through your webcam."
            location="Carleton University"
            dates="2024"
            image="/threatanalyzer-hackathon.png"
            award="Winner"
            links={[
              {
                icon: <Icons.github className="size-3 link-icon" />,
                title: "Source",
                href: "https://github.com/StephenRebel/CU-Computer-Vision",
              },
              {
                icon: <Icons.devpost className="size-3 link-icon" />,
                title: "Devpost",
                href: "https://devpost.com/software/threatanalyzer-v2-0",
              },
            ]}
            technologies={[
              "Python",
              "Flask",
              "PyTorch",
              "HTML",
              "CSS",
              "JavaScript",
            ]}
          />
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 24}>
          <HackathonCard
            title="SkillBoost - HackTheHill 2"
            description="An AI-powered learning companion that transforms interests into tailored skills with personalized, AI-generated learning paths and adaptive, context-aware lessons."
            location="University of Ottawa"
            dates="2024"
            image="/skillboost-hackathon.png"
            links={[
              {
                icon: <Icons.github className="size-3 link-icon" />,
                title: "Source",
                href: "https://github.com/boshyxd/SkillBoost",
              },
              {
                icon: <Icons.devpost className="size-3 link-icon" />,
                title: "Devpost",
                href: "https://devpost.com/software/skillboost-d1trk7",
              },
            ]}
            technologies={[
              "React",
              "Next.js",
              "Firebase",
              "Claude API",
              "JavaScript",
              "CSS",
            ]}
          />
        </BlurFade>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="text-center space-y-4">
      <SectionHeader title="Get in Touch" delay={BLUR_FADE_DELAY * 17} />
      <BlurFade delay={BLUR_FADE_DELAY * 18}>
        <p className="text-muted-foreground mb-4">
          Want to chat? Feel free to{" "}
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="text-primary hover:underline"
          >
            send me an email
          </Link>{" "}
          and I&apos;ll respond as soon as I can. Please note that I&apos;ll
          ignore all soliciting.
        </p>
        <div className="flex justify-center space-x-4">
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <Link
              key={name}
              href={social.url}
              className="text-muted-foreground hover:text-primary"
            >
              <social.icon className="size-6" />
            </Link>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}

function SectionHeader({
  title,
  delay,
  className,
}: {
  title: string;
  delay: number;
  className?: string;
}) {
  return (
    <BlurFade delay={delay}>
      <h2 className={cn("text-2xl font-bold", className)}>{title}</h2>
    </BlurFade>
  );
}
