"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { CodeSampleCard } from "@/components/code-sample-card";
import { npcDialogueCode } from "@/data/code-samples/npc-dialogue";
import { chainReactionCode } from "@/data/code-samples/chain-reaction";
import { doorServiceCode } from "@/data/code-samples/door-service";
import { getImagePath } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

export default function RobloxPage() {
  const handleReturn = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = './';
  };

  return (
    <section className="space-y-12 pt-1">
      <BlurFade delay={BLUR_FADE_DELAY * 0.5}>
        <button 
          onClick={handleReturn}
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Return to Main Site
        </button>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="mb-4">
              <h1 className="font-medium text-2xl tracking-tighter">boshy</h1>
              <div className="flex items-center gap-3">
                <Link 
                  href="https://www.roblox.com/users/114586446/profile"
                  className="text-sm text-muted-foreground hover:text-primary"
                  target="_blank"
                >
                  @BoshyDx
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link 
                  href="https://discord.com/users/104850262845313024"
                  className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
                  target="_blank"
                >
                  <Icons.discord className="size-3.5" />
                  boshyz
                </Link>
              </div>
            </div>
            <div className="prose dark:prose-invert">
              <p className="text-muted-foreground space-y-1">
                Third-year Computer Science student and experienced <span className="text-primary font-medium">Roblox Scripter</span> with 12+ years of Lua expertise. Specializing in <span className="text-primary font-medium">systems architecture</span>, <span className="text-primary font-medium">UI/UX design</span>, and <span className="text-primary font-medium">gameplay development</span>.
              </p>
              <p className="text-muted-foreground mt-3">
                Lead Developer of Liberty Heights NYC (560k+ visits), building scalable systems and crafting immersive player experiences.
              </p>
            </div>
          </div>
          <Avatar className="size-32 border md:size-48">
            <AvatarImage 
              alt="boshy's Roblox Avatar" 
              src={getImagePath('/robloxavatar.png')}
              className="object-cover"
            />
            <AvatarFallback>BX</AvatarFallback>
          </Avatar>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <h2 className="text-xl font-semibold mb-4">Technical Expertise</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            "Systems Architecture",
            "OOP Design Patterns",
            "Full-stack Development",
            "TypeScript",
            "Roblox-TS",
            "Performance Optimization",
            "Memory Management"
          ].map((skill) => (
            <Badge key={skill} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-semibold mb-4">Frameworks & Libraries</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card className="p-4">
            <h3 className="font-medium mb-2">Architecture & State</h3>
            <div className="flex flex-wrap gap-2">
              {["Knit", "Rodux", "Matter", "ProfileService", "ReplicaService", "DataStore2"].map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </Card>
          <Card className="p-4">
            <h3 className="font-medium mb-2">Core Systems</h3>
            <div className="flex flex-wrap gap-2">
              {["ByteNet", "NetworkOwnership", "Trove", "Janitor", "Promise", "PID Controllers"].map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </Card>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <ProjectCard
            title="Liberty Heights NYC"
            description="A thriving NYC-based roleplay experience with over 560,000 visits and 100+ concurrent users. Features detailed city environments, comprehensive roleplay systems, and persistent player progression."
            dates="2024"
            tags={["Roleplay", "City Life", "Persistent Data", "Social Systems", "Economy"]}
            image="/liberty-heights.png"
            links={[
              {
                icon: <Icons.globe className="size-3" />,
                title: "Play",
                href: "https://www.roblox.com/games/121863468506169/Soon-Big-Update-Liberty-Heights-NYC-Alpha"
              }
            ]}
          />

          <ProjectCard
            title="TENEMENT TERROR"
            description="A PS1-style survival horror game featuring sophisticated AI pathfinding, atmospheric lighting, and environmental storytelling. Includes custom character mechanics, inventory system, and cinematic elements for an immersive horror experience."
            dates="2024"
            tags={[
              "Horror",
              "AI Systems",
              "Character Controllers",
              "Dynamic Lighting",
              "Environmental Puzzles"
            ]}
            image="/horror-system.png"
            links={[
              {
                icon: <Icons.globe className="size-3" />,
                title: "Play",
                href: "https://www.roblox.com/games/140237510287564/TENEMENT-TERROR-HORROR"
              }
            ]}
          />

          <ProjectCard
            title="Puzzle Collection"
            description="A collection of UI-based puzzles implemented using React-Lua, demonstrating modern web development practices in Roblox. Features multiple puzzle types with progressive difficulty scaling."
            dates="2024"
            tags={["React-Lua", "UI/UX", "State Management", "Puzzle Design"]}
            image="/puzzle-collection.png"
            links={[
              {
                icon: <Icons.globe className="size-3" />,
                title: "Play",
                href: "https://www.roblox.com/games/116940253489320/Puzzle-Collection"
              }
            ]}
          />
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <h2 className="text-xl font-semibold mb-4">Code Samples</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <CodeSampleCard
            title="NPC Dialogue System"
            description="A sophisticated dialogue system with branching conversations, state management, and interactive UI."
            code={npcDialogueCode}
          />

          <CodeSampleCard
            title="Chain Reaction Puzzle"
            description="A React-Lua implementation of a 'Lights Out' style puzzle game with progressive difficulty."
            code={chainReactionCode}
          />

          <CodeSampleCard
            title="Door Service (Knit)"
            description="A Knit service managing door interactions, animations, and state synchronization."
            code={doorServiceCode}
          />
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <h2 className="text-xl font-semibold mb-4">Experience Highlights</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="p-4">
            <h3 className="font-medium">Project Scale</h3>
            <p className="text-muted-foreground">
              • Liberty Heights NYC: 560k+ visits<br />
              • 100+ concurrent users<br />
              • Active community management
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="font-medium">Team Experience</h3>
            <p className="text-muted-foreground">
              • Lead Developer<br />
              • Systems Architecture<br />
              • Community Management
            </p>
          </Card>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <h2 className="text-xl font-semibold mb-4">Work With Me</h2>
        <p className="text-muted-foreground mb-4">
          Available for Roblox development projects. Experienced in rapid adaptation to existing codebases and team workflows. Strong focus on code quality, performance optimization, and scalable architecture.
        </p>
        <div className="flex gap-4">
          <Link 
            href="https://discord.com/users/104850262845313024"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 gap-2"
            target="_blank"
          >
            <Icons.discord className="size-4" />
            Contact Me
          </Link>
          <Link 
            href="https://www.roblox.com/users/114586446/profile" 
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            target="_blank"
          >
            @BoshyDx
          </Link>
        </div>
      </BlurFade>
    </section>
  );
} 