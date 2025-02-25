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
import { aiPathfindingCode } from "@/data/code-samples/ai-pathfinding";
import { motion, useScroll, useTransform } from "framer-motion";
import { getBasePath, getImagePath } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function RobloxPage() {
  // Client-side only state to prevent hydration mismatch
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleReturn = (e: React.MouseEvent) => {
    e.preventDefault();
    const basePath = getBasePath();
    window.location.href = `${basePath}/`;
  };

  const cardHoverVariants = {
    initial: { scale: 1, zIndex: 1 },
    hover: {
      scale: 1.02,
      zIndex: 10,
      transition: { duration: 0.2 },
    },
  };

  const textHoverVariants = {
    initial: { y: 0 },
    hover: {
      y: -2,
      transition: { duration: 0.2 },
    },
  };

  const glowVariants = {
    initial: {
      boxShadow: "0 0 0 rgba(255, 255, 255, 0)",
    },
    hover: {
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  const ExperienceHighlight = () => {
    if (!isClient) {
      return (
        <span className="inline-flex items-baseline gap-1 relative">
          12+ years
        </span>
      );
    }

    return (
      <motion.span
        className="inline-flex items-baseline gap-1 relative group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <motion.span
          className="font-semibold text-primary relative bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat bg-bottom group-hover:bg-[length:100%_2px] transition-all duration-500"
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          12+
        </motion.span>
        <motion.span
          className="text-sm text-primary/70 bg-gradient-to-r from-primary/70 to-primary/70 bg-[length:0%_2px] bg-no-repeat bg-bottom group-hover:bg-[length:100%_2px] transition-all duration-500"
          animate={{
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          years
        </motion.span>
        <motion.span
          className="absolute -inset-1 rounded-lg bg-primary/5 -z-10 opacity-0 transition-opacity duration-300"
          initial={false}
          whileHover={{ opacity: 1 }}
        />
      </motion.span>
    );
  };

  return (
    <section className="relative space-y-12 pt-1 overflow-visible px-4">
      {/* Background Elements */}
      <div className="absolute top-0 -right-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl -z-10 opacity-30" />
      <div className="absolute bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl -z-10 opacity-30" />

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
          className="flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-visible py-2"
          variants={cardHoverVariants}
          initial="initial"
          whileHover="hover"
        >
          {/* Decorative circles */}
          <div className="absolute -z-10 w-full h-full">
            <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-primary/10 blur-sm" />
            <div className="absolute left-20 bottom-4 w-4 h-4 rounded-full bg-primary/20 blur-sm" />
            <div className="absolute right-10 top-8 w-6 h-6 rounded-full bg-primary/15 blur-sm" />
          </div>

          <div className="md:max-w-[60%]">
            <motion.div className="mb-4" variants={textHoverVariants}>
              <h1 className="font-medium text-3xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                boshy
              </h1>
              <div className="flex items-center gap-3 mt-1">
                <Link
                  href="https://www.roblox.com/users/114586446/profile"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1"
                  target="_blank"
                >
                  <Icons.roblox className="size-3.5" />
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
              <p className="text-muted-foreground space-y-1 text-lg leading-relaxed">
                Third-year Computer Science student and experienced{" "}
                <span className="text-primary font-medium bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat bg-bottom hover:bg-[length:100%_2px] transition-all duration-500">
                  Roblox Scripter
                </span>{" "}
                with <ExperienceHighlight /> of Lua expertise, specializing in
                creating immersive game experiences with advanced systems
                architecture.
              </p>
            </div>
          </div>
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.2 }}
          >
            <Avatar className="size-36 border-2 border-primary/20 md:size-48 transition-transform duration-300 hover:rotate-6 shadow-xl">
              <AvatarImage
                alt="boshy's Roblox Avatar"
                src={getImagePath("robloxavatar.png")}
                className="object-cover"
              />
              <AvatarFallback>BX</AvatarFallback>
            </Avatar>
            <motion.div
              className="absolute -inset-3 rounded-full blur-xl bg-primary/20 -z-10"
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
            <div className="absolute -top-3 -right-3 bg-primary/20 backdrop-blur-md rounded-full p-1.5 shadow-lg border border-primary/30">
              <Icons.code className="size-5 text-primary" />
            </div>
          </motion.div>
        </motion.div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="relative overflow-visible py-2">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="text-xl font-semibold mb-6 pt-6 inline-block relative">
            Technical Expertise
            <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            "Systems Architecture",
            "OOP Design Patterns",
            "Full-stack Development",
            "TypeScript",
            "Roblox-TS",
            "Performance Optimization",
            "Memory Management",
          ].map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 hover:border-primary/30 transition-colors duration-300 cursor-default py-1.5 text-sm"
                variant="secondary"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className="relative overflow-visible py-2">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="text-xl font-semibold mb-6 pt-6 inline-block relative">
            Frameworks & Libraries
            <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 overflow-visible p-2">
          <motion.div
            whileHover={{ scale: 1.02, zIndex: 10 }}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group-hover:ring-1 group-hover:ring-primary/50 border-primary/10 bg-gradient-to-br from-background/80 to-background relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 right-0 size-20 bg-primary/5 rounded-full blur-xl opacity-30" />
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <Icons.layoutGrid className="size-5 text-primary" />
                Architecture & State
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Knit",
                  "Rodux",
                  "Matter",
                  "ProfileService",
                  "ReplicaService",
                  "DataStore2",
                  "Fusion",
                  "Roact-Rodux",
                  "ReactRoblox",
                  "Hooks",
                ].map((tech) => (
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
            whileHover={{ scale: 1.02, zIndex: 10 }}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group-hover:ring-1 group-hover:ring-primary/50 border-primary/10 bg-gradient-to-br from-background/80 to-background relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 right-0 size-20 bg-primary/5 rounded-full blur-xl opacity-30" />
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <Icons.layers className="size-5 text-primary" />
                Core Systems
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "ByteNet",
                  "NetworkOwnership",
                  "Trove",
                  "Janitor",
                  "Promise",
                  "PID Controllers",
                  "FastCast",
                  "Raycasting Utils",
                  "Iris UI",
                  "GenECS",
                ].map((tech) => (
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

      <BlurFade delay={BLUR_FADE_DELAY * 3.5}>
        <div className="relative overflow-visible py-2">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="text-xl font-semibold mb-6 pt-6 inline-block relative">
            Development Standards
            <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </h2>
        </div>
        {isClient && (
          <div className="grid gap-6 sm:grid-cols-3 overflow-visible p-2">
            <motion.div
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group-hover:ring-1 group-hover:ring-primary/50 border-primary/10 bg-gradient-to-br from-background/80 to-background relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 size-20 bg-primary/5 rounded-full blur-xl opacity-30" />
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Icons.code className="size-5 text-primary" />
                  Code Quality
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "SonarLint",
                    "Selene",
                    "Luau Typechecking",
                    "Roblox-TS Strict",
                    "Unit Testing",
                    "Format-on-Save",
                  ].map((tech) => (
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
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group-hover:ring-1 group-hover:ring-primary/50 border-primary/10 bg-gradient-to-br from-background/80 to-background relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 size-20 bg-primary/5 rounded-full blur-xl opacity-30" />
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Icons.git className="size-5 text-primary" />
                  Version Control
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Git Flow",
                    "Conventional Commits",
                    "PR Reviews",
                    "Rojo",
                    "GitHub Actions",
                    "Wally Pkg Manager",
                  ].map((tech) => (
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
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group-hover:ring-1 group-hover:ring-primary/50 border-primary/10 bg-gradient-to-br from-background/80 to-background relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 size-20 bg-primary/5 rounded-full blur-xl opacity-30" />
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Icons.gauge className="size-5 text-primary" />
                  Performance
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "FPS Optimization",
                    "Memory Profiling",
                    "Network Analysis",
                    "LOD Implementation",
                    "Parallel Lua",
                    "Task Scheduling",
                  ].map((tech) => (
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
        )}
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="relative overflow-visible py-2">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="text-xl font-semibold mb-6 pt-6 inline-block relative">
            Featured Projects
            <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 overflow-visible p-2">
          <motion.div
            whileHover={{ scale: 1.02, zIndex: 10 }}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectCard
              title="Liberty Heights NYC"
              description="A thriving NYC-based roleplay experience with over 1,000,000+ visits and 100+ concurrent users. Features detailed city environments, comprehensive roleplay systems, and persistent player progression."
              dates="2025"
              tags={[
                "Roleplay",
                "City Life",
                "Persistent Data",
                "Social Systems",
                "Economy",
              ]}
              image="/liberty-heights.png"
              links={[
                {
                  icon: <Icons.globe className="size-3" />,
                  title: "Play",
                  href: "https://www.roblox.com/games/121863468506169/Soon-Big-Update-Liberty-Heights-NYC-Alpha",
                },
              ]}
              className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group-hover:ring-2 group-hover:ring-primary/50 group-hover:-translate-y-1 border-primary/10"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, zIndex: 10 }}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
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
                "Environmental Puzzles",
              ]}
              image="/horror-system.png"
              links={[
                {
                  icon: <Icons.globe className="size-3" />,
                  title: "Play",
                  href: "https://www.roblox.com/games/140237510287564/TENEMENT-TERROR-HORROR",
                },
              ]}
              className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group-hover:ring-2 group-hover:ring-primary/50 group-hover:-translate-y-1 border-primary/10"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, zIndex: 10 }}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
                  href: "https://www.roblox.com/games/116940253489320/Puzzle-Collection",
                },
              ]}
              className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group-hover:ring-2 group-hover:ring-primary/50 group-hover:-translate-y-1 border-primary/10"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, zIndex: 10 }}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ProjectCard
              title="MINGLE! Squid Game 2"
              description="Roblox version of Mingle from Squid Game 2. Features a unique puzzle game with a focus on teamwork and strategy along with atmospheric lighting and a creepy atmosphere. Includes a custom character controller and inventory system."
              dates="2025"
              tags={[
                "Puzzle Game",
                "Custom Character Controller",
                "Inventory System",
                "Dynamic Lighting",
              ]}
              image="/mingle.png"
              links={[
                {
                  icon: <Icons.globe className="size-3" />,
                  title: "Play",
                  href: "https://www.roblox.com/games/75788836280342/MINGLE-Squid-Game-2-FRONTMAN",
                },
              ]}
              className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group-hover:ring-2 group-hover:ring-primary/50 group-hover:-translate-y-1 border-primary/10"
            />
          </motion.div>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <div className="relative overflow-visible py-2">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="text-xl font-semibold mb-6 pt-6 inline-block relative">
            Code Samples
            <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 overflow-visible p-2">
          <CodeSampleCard
            title="AI Pathfinding System"
            description="Sophisticated enemy AI with state machine-driven behavior, A* pathfinding, and sensory perception systems."
            code={aiPathfindingCode}
          />

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
        <div className="relative overflow-visible py-2">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="text-xl font-semibold mb-6 pt-6 inline-block relative">
            Experience Highlights
            <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </h2>
        </div>
        {isClient ? (
          <div className="grid gap-6 sm:grid-cols-2 overflow-visible p-2">
            <motion.div
              className="group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="p-6 border-primary/10 bg-gradient-to-br from-background/80 to-background relative overflow-hidden group-hover:shadow-lg group-hover:shadow-primary/5 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -top-5 -right-5 size-20 bg-primary/5 rounded-full blur-xl opacity-30" />
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Icons.barChart className="size-5 text-primary" />
                  Project Scale
                </h3>
                <p className="text-muted-foreground space-y-1">
                  <ul className="space-y-2 list-none pl-0">
                    <li className="flex items-start gap-2">
                      <Icons.check className="size-4 text-primary flex-shrink-0 mt-0.5" />
                      Liberty Heights NYC: 1,000,000+ visits
                    </li>
                    <li className="flex items-start gap-2">
                      <Icons.check className="size-4 text-primary flex-shrink-0 mt-0.5" />
                      100+ concurrent users
                    </li>
                    <li className="flex items-start gap-2">
                      <Icons.check className="size-4 text-primary flex-shrink-0 mt-0.5" />
                      Active community management
                    </li>
                    <li className="flex items-start gap-2">
                      <Icons.check className="size-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">60 FPS</span> maintained
                        on mobile devices
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icons.check className="size-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">47%</span> reduction in
                        memory usage
                      </span>
                    </li>
                  </ul>
                </p>
              </Card>
            </motion.div>

            <motion.div
              className="group"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="p-6 border-primary/10 bg-gradient-to-br from-background/80 to-background relative overflow-hidden group-hover:shadow-lg group-hover:shadow-primary/5 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -top-5 -right-5 size-20 bg-primary/5 rounded-full blur-xl opacity-30" />
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Icons.users className="size-5 text-primary" />
                  Team Experience
                </h3>
                <p className="text-muted-foreground space-y-1">
                  <ul className="space-y-2 list-none pl-0">
                    <li className="flex items-start gap-2">
                      <Icons.check className="size-4 text-primary flex-shrink-0 mt-0.5" />
                      Lead Developer
                    </li>
                    <li className="flex items-start gap-2">
                      <Icons.check className="size-4 text-primary flex-shrink-0 mt-0.5" />
                      Systems Architecture
                    </li>
                    <li className="flex items-start gap-2">
                      <Icons.check className="size-4 text-primary flex-shrink-0 mt-0.5" />
                      Community Management
                    </li>
                    <li className="flex items-start gap-2">
                      <Icons.check className="size-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">5-person</span>{" "}
                        development team leadership
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icons.check className="size-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">Agile</span> development
                        methodology
                      </span>
                    </li>
                  </ul>
                </p>
              </Card>
            </motion.div>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 overflow-visible p-2">
            <div className="p-6 border border-primary/10 rounded-lg">
              <h3 className="font-medium mb-3">Project Scale</h3>
              <p className="text-muted-foreground">
                Liberty Heights NYC: 1,000,000+ visits, 100+ concurrent users,
                60 FPS on mobile, 47% memory reduction
              </p>
            </div>
            <div className="p-6 border border-primary/10 rounded-lg">
              <h3 className="font-medium mb-3">Team Experience</h3>
              <p className="text-muted-foreground">
                Lead Developer, Systems Architecture, 5-person team leadership,
                Agile methodology
              </p>
            </div>
          </div>
        )}
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 6.5}>
        <div className="relative overflow-visible py-2">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="text-xl font-semibold mb-6 pt-6 inline-block relative">
            Advanced Implementations
            <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </h2>
        </div>
        {isClient && (
          <div className="grid gap-6 sm:grid-cols-2 overflow-visible p-2">
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
            >
              <Card className="p-6 border-primary/10 bg-gradient-to-br from-background/80 to-background relative overflow-hidden group-hover:shadow-lg group-hover:shadow-primary/5 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -top-5 -right-5 size-20 bg-primary/5 rounded-full blur-xl opacity-30" />
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Icons.brain className="size-5 text-primary" />
                  Advanced AI Systems
                </h3>
                <p className="text-muted-foreground space-y-4 text-sm leading-relaxed">
                  Implemented sophisticated entity intelligence systems with
                  multi-layered behavior trees and decision making:
                </p>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex gap-2 items-center mb-1.5">
                    <Badge className="bg-primary/20 text-primary border-none py-0.5 px-1.5">
                      99.4%
                    </Badge>
                    <span className="text-xs">
                      Pathfinding success rate in complex environments
                    </span>
                  </div>
                  <div className="flex gap-2 items-center mb-1.5">
                    <Badge className="bg-primary/20 text-primary border-none py-0.5 px-1.5">
                      12ms
                    </Badge>
                    <span className="text-xs">
                      Average decision-making compute time
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Badge className="bg-primary/20 text-primary border-none py-0.5 px-1.5">
                      FSM+BT
                    </Badge>
                    <span className="text-xs">
                      Hybrid state machine & behavior tree architecture
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
            >
              <Card className="p-6 border-primary/10 bg-gradient-to-br from-background/80 to-background relative overflow-hidden group-hover:shadow-lg group-hover:shadow-primary/5 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -top-5 -right-5 size-20 bg-primary/5 rounded-full blur-xl opacity-30" />
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Icons.network className="size-5 text-primary" />
                  Network Architecture
                </h3>
                <p className="text-muted-foreground space-y-4 text-sm leading-relaxed">
                  Engineered optimized replication systems for seamless
                  multi-user experiences:
                </p>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex gap-2 items-center mb-1.5">
                    <Badge className="bg-primary/20 text-primary border-none py-0.5 px-1.5">
                      68%
                    </Badge>
                    <span className="text-xs">
                      Reduction in network bandwidth usage
                    </span>
                  </div>
                  <div className="flex gap-2 items-center mb-1.5">
                    <Badge className="bg-primary/20 text-primary border-none py-0.5 px-1.5">
                      Custom
                    </Badge>
                    <span className="text-xs">
                      Relevancy-based replication system
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Badge className="bg-primary/20 text-primary border-none py-0.5 px-1.5">
                      Priority
                    </Badge>
                    <span className="text-xs">
                      Intelligent message queuing and throttling
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        )}
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <div className="relative overflow-visible py-2">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="text-xl font-semibold mb-6 pt-6 inline-block relative">
            Work With Me
            <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </h2>
        </div>
        <motion.div
          className="relative p-6 border border-primary/10 rounded-lg bg-gradient-to-br from-primary/5 to-transparent mb-6 overflow-visible"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 right-0 size-40 bg-primary/5 rounded-full blur-3xl opacity-70" />
          <p className="text-muted-foreground mb-4 relative z-10 text-lg leading-relaxed">
            Available for Roblox development projects. Experienced in rapid
            adaptation to existing codebases and team workflows. Strong focus on
            code quality, performance optimization, and scalable architecture.
          </p>
          <div className="flex gap-4 flex-wrap relative z-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://discord.com/users/104850262845313024"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 gap-2 transition-colors duration-300 shadow-lg shadow-primary/20"
                target="_blank"
              >
                <Icons.discord className="size-4" />
                Contact Me
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://www.roblox.com/users/114586446/profile"
                className="inline-flex items-center justify-center rounded-md border border-primary/30 bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-lg shadow-primary/5"
                target="_blank"
              >
                <Icons.roblox className="size-4 mr-2" />
                @BoshyDx
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </BlurFade>

      {/* Footer section with light gradient */}
      <div className="pt-12 pb-6 opacity-70">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-6" />
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2025 boshy | Roblox Development Portfolio</p>
        </div>
      </div>
    </section>
  );
}
