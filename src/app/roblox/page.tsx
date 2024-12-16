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
import { motion, useScroll, useTransform } from "framer-motion";
import { getBasePath, getImagePath } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

export default function RobloxPage() {
  const handleReturn = (e: React.MouseEvent) => {
    e.preventDefault();
    const basePath = getBasePath();
    window.location.href = `${basePath}/`;
  };

  const cardHoverVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const textHoverVariants = {
    initial: { y: 0 },
    hover: { 
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  const glowVariants = {
    initial: { 
      boxShadow: "0 0 0 rgba(255, 255, 255, 0)" 
    },
    hover: { 
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  const ExperienceHighlight = () => {
    return (
      <motion.span 
        className="inline-flex items-baseline gap-1 relative group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <motion.span
          className="font-semibold text-primary relative"
          animate={{ 
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          12+
        </motion.span>
        <motion.span 
          className="text-sm text-primary/70"
          animate={{ 
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          years
        </motion.span>
        <motion.div
          className="absolute -inset-1 rounded-lg bg-primary/5 -z-10 opacity-0 transition-opacity duration-300"
          initial={false}
          whileHover={{ opacity: 1 }}
        />
      </motion.span>
    );
  };

  return (
    <section className="space-y-12 pt-1">
      <BlurFade delay={BLUR_FADE_DELAY * 0.5}>
        <motion.button 
          onClick={handleReturn}
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary group"
          whileHover={{ x: -4 }}
          transition={{ duration: 0.2 }}
        >
          <motion.span
            animate={{ x: 0 }}
            whileHover={{ x: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
          </motion.span>
          Return to Main Site
        </motion.button>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY}>
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          variants={cardHoverVariants}
          initial="initial"
          whileHover="hover"
        >
          <div>
            <motion.div 
              className="mb-4"
              variants={textHoverVariants}
            >
              <h1 className="font-medium text-2xl tracking-tighter">boshy</h1>
              <div className="flex items-center gap-3">
                <Link 
                  href="https://www.roblox.com/users/114586446/profile"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  target="_blank"
                >
                  @BoshyDx
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link 
                  href="https://discord.com/users/104850262845313024"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1"
                  target="_blank"
                >
                  <Icons.discord className="size-3.5" />
                  boshyz
                </Link>
              </div>
            </motion.div>
            <div className="prose dark:prose-invert">
              <motion.p 
                className="text-muted-foreground space-y-1"
                variants={textHoverVariants}
              >
                Third-year Computer Science student and experienced{" "}
                <span className="text-primary font-medium bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat bg-bottom hover:bg-[length:100%_2px] transition-all duration-500">
                  Roblox Scripter
                </span>{" "}
                with <ExperienceHighlight /> of Lua expertise.
              </motion.p>
              <p className="text-muted-foreground mt-3">
                Lead Developer of Liberty Heights NYC (660k+ visits), building scalable systems and crafting immersive player experiences.
              </p>
            </div>
          </div>
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Avatar className="size-32 border md:size-48 transition-transform duration-300 hover:rotate-6">
              <AvatarImage 
                alt="boshy's Roblox Avatar" 
                src={getImagePath('robloxavatar.png')}
                className="object-cover"
              />
              <AvatarFallback>BX</AvatarFallback>
            </Avatar>
            <motion.div
              className="absolute -inset-2 rounded-full blur-xl bg-primary/20 -z-10"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </motion.div>
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
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge 
                className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 hover:border-primary/30 transition-colors duration-300 cursor-default"
                variant="secondary"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-semibold mb-4">Frameworks & Libraries</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <Card className="p-4 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group-hover:ring-1 group-hover:ring-primary/50">
              <h3 className="font-medium mb-2">Architecture & State</h3>
              <div className="flex flex-wrap gap-2">
                {["Knit", "Rodux", "Matter", "ProfileService", "ReplicaService", "DataStore2"].map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge 
                      className="bg-accent hover:bg-accent/80 text-accent-foreground border-accent-foreground/20 hover:border-accent-foreground/30 transition-all duration-300 cursor-default shadow-sm hover:shadow"
                      variant="secondary"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <Card className="p-4 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group-hover:ring-1 group-hover:ring-primary/50">
              <h3 className="font-medium mb-2">Core Systems</h3>
              <div className="flex flex-wrap gap-2">
                {["ByteNet", "NetworkOwnership", "Trove", "Janitor", "Promise", "PID Controllers"].map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge 
                      className="bg-accent hover:bg-accent/80 text-accent-foreground border-accent-foreground/20 hover:border-accent-foreground/30 transition-all duration-300 cursor-default shadow-sm hover:shadow"
                      variant="secondary"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <ProjectCard
              title="Liberty Heights NYC"
              description="A thriving NYC-based roleplay experience with over 660,000 visits and 100+ concurrent users. Features detailed city environments, comprehensive roleplay systems, and persistent player progression."
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
              className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group-hover:ring-2 group-hover:ring-primary/50 group-hover:-translate-y-1"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group"
          >
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
              className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group-hover:ring-2 group-hover:ring-primary/50 group-hover:-translate-y-1"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group"
          >
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
              className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group-hover:ring-2 group-hover:ring-primary/50 group-hover:-translate-y-1"
            />
          </motion.div>
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
              • Liberty Heights NYC: 660k+ visits<br />
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="https://discord.com/users/104850262845313024"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 gap-2 transition-colors duration-300"
              target="_blank"
            >
              <Icons.discord className="size-4" />
              Contact Me
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="https://www.roblox.com/users/114586446/profile" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              target="_blank"
            >
              @BoshyDx
            </Link>
          </motion.div>
        </div>
      </BlurFade>
    </section>
  );
} 