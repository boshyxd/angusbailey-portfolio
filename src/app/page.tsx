"use client";

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
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";

const BLUR_FADE_DELAY = 0.04;

const DynamicHero = dynamic(() => import("@/components/hero"), { ssr: false });

export default function Page() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col min-h-[100dvh] space-y-8 max-w-4xl mx-auto px-4 pt-0 pb-20 relative overflow-visible">
        {/* Decorative background elements */}
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl -z-10 opacity-30" />
        <div className="absolute top-[40%] -left-40 w-96 h-96 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl -z-10 opacity-30" />
        <div className="absolute bottom-40 -right-40 w-96 h-96 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-3xl -z-10 opacity-30" />

        <div className="-mt-12">
          <DynamicHero />
        </div>

        {/* Social Icons at top right */}
        <BlurFade delay={BLUR_FADE_DELAY * 3.5}>
          <div className="flex justify-start space-x-4 -mt-6 mb-4 ml-4">
            {Object.entries(DATA.contact.social)
              .filter(([_, social]) => social.navbar)
              .map(([name, social]) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    aria-label={name}
                  >
                    <social.icon className="size-5" />
                  </Link>
                </motion.div>
              ))}
          </div>
        </BlurFade>

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
              className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1.5 group transition-all duration-300"
            >
              <span className="group-hover:underline">
                View Roblox Portfolio
              </span>
              <motion.span
                animate={{ x: 0 }}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <Icons.chevronRight className="size-3" />
              </motion.span>
            </Link>
          </div>
        </BlurFade>
      </main>
    </>
  );
}

function About() {
  return (
    <section id="about" className="space-y-4 relative">
      <SectionHeader title="About" delay={BLUR_FADE_DELAY * 4} />
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <div className="relative overflow-hidden rounded-lg p-6 border border-primary/10 bg-gradient-to-br from-background/80 to-background group transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-0 right-0 size-40 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          <Markdown className="prose max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert prose-p:my-0 prose-p:leading-snug [&>p]:mb-3 relative z-10">
            {DATA.summary}
          </Markdown>
        </div>
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
          <motion.div
            whileHover={{ scale: 1.01, y: -2 }}
            transition={{ duration: 0.2 }}
            className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border border-primary/10 hover:border-primary/30 rounded-lg bg-gradient-to-br from-background/80 to-background overflow-hidden"
          >
            <ResumeCard
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
            />
          </motion.div>
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
          <motion.div
            whileHover={{ scale: 1.01, y: -2 }}
            transition={{ duration: 0.2 }}
            className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border border-primary/10 hover:border-primary/30 rounded-lg bg-gradient-to-br from-background/80 to-background overflow-hidden"
          >
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
          </motion.div>
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
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 hover:border-primary/30 transition-colors duration-300 cursor-default py-1.5 text-sm shadow-sm">
                {skill}
              </Badge>
            </motion.div>
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
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.2 }}
            className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border border-primary/10 hover:border-primary/30 rounded-lg bg-gradient-to-br from-background/80 to-background overflow-hidden"
          >
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
          </motion.div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 13.5}>
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.2 }}
            className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border border-primary/10 hover:border-primary/30 rounded-lg bg-gradient-to-br from-background/80 to-background overflow-hidden"
          >
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
          </motion.div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.2 }}
            className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border border-primary/10 hover:border-primary/30 rounded-lg bg-gradient-to-br from-background/80 to-background overflow-hidden"
          >
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
          </motion.div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 14.5}>
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.2 }}
            className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border border-primary/10 hover:border-primary/30 rounded-lg bg-gradient-to-br from-background/80 to-background overflow-hidden"
          >
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
          </motion.div>
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
          <motion.div
            whileHover={{ scale: 1.01, y: -2 }}
            transition={{ duration: 0.2 }}
            className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border border-primary/10 hover:border-primary/30 rounded-lg bg-gradient-to-br from-background/80 to-background overflow-hidden"
          >
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
                "Game Development",
              ]}
            />
          </motion.div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <motion.div
            whileHover={{ scale: 1.01, y: -2 }}
            transition={{ duration: 0.2 }}
            className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border border-primary/10 hover:border-primary/30 rounded-lg bg-gradient-to-br from-background/80 to-background overflow-hidden"
          >
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
          </motion.div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 20}>
          <motion.div
            whileHover={{ scale: 1.01, y: -2 }}
            transition={{ duration: 0.2 }}
            className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border border-primary/10 hover:border-primary/30 rounded-lg bg-gradient-to-br from-background/80 to-background overflow-hidden"
          >
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
          </motion.div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 22}>
          <motion.div
            whileHover={{ scale: 1.01, y: -2 }}
            transition={{ duration: 0.2 }}
            className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border border-primary/10 hover:border-primary/30 rounded-lg bg-gradient-to-br from-background/80 to-background overflow-hidden"
          >
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
          </motion.div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 24}>
          <motion.div
            whileHover={{ scale: 1.01, y: -2 }}
            transition={{ duration: 0.2 }}
            className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border border-primary/10 hover:border-primary/30 rounded-lg bg-gradient-to-br from-background/80 to-background overflow-hidden"
          >
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
          </motion.div>
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
        <div className="p-6 border border-primary/10 rounded-lg bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
          <div className="absolute top-0 right-0 size-40 bg-primary/5 rounded-full blur-xl opacity-30" />
          <p className="text-muted-foreground mb-6 relative z-10">
            Want to chat? Feel free to{" "}
            <Link
              href={`mailto:${DATA.contact.email}`}
              className="text-primary hover:underline font-medium"
            >
              send me an email
            </Link>{" "}
            and I&apos;ll respond as soon as I can. Please note that I&apos;ll
            ignore all soliciting.
          </p>
          <div className="flex justify-center space-x-6 relative z-10">
            {Object.entries(DATA.contact.social).map(([name, social]) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={social.url}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <social.icon className="size-7" />
                </Link>
              </motion.div>
            ))}
          </div>
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
      <div className="mb-6 relative overflow-visible">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-primary/30 to-transparent -z-10" />
        <h2
          className={cn(
            "text-2xl font-bold inline-block relative bg-background pr-4",
            className
          )}
        >
          {title}
        </h2>
      </div>
    </BlurFade>
  );
}
