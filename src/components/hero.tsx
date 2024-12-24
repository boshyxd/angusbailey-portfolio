'use client';

import React from 'react';
import BlurFadeText from "@/components/magicui/blur-fade-text";
import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { getImagePath } from "@/lib/utils";
import { MotionDiv, MotionSpan } from "@/components/motion";

const BLUR_FADE_DELAY = 0.04;

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-between gap-8 px-4 py-8 md:flex-row md:items-start md:px-0 md:py-16">
      <div className="flex flex-col text-center md:text-left">
        <MotionDiv 
          className="flex items-center justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <BlurFadeText
              delay={BLUR_FADE_DELAY * 2}
              className="font-title text-3xl font-bold tracking-normal md:text-5xl"
              text={`Hi! I'm ${DATA.name.split(" ")[0]}`}
            />
          </MotionDiv>
          <MotionSpan 
            className="wave ml-2 mb-4 text-3xl md:text-5xl"
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.4,
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >
            👋
          </MotionSpan>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <BlurFadeText
            className="mt-4 text-base text-muted-foreground md:text-xl md:max-w-2xl"
            delay={BLUR_FADE_DELAY * 3}
            text={DATA.description}
          />
        </MotionDiv>
      </div>
      <MotionDiv
        initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.2,
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
        whileHover={{ 
          scale: 1.05,
          rotate: 5,
          transition: { duration: 0.3 }
        }}
      >
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Avatar className="size-32 border md:size-48 transition-all duration-300">
            <AvatarImage 
              alt={DATA.name} 
              src={getImagePath(DATA.avatarUrl)}
              className="object-cover transform transition-transform duration-300"
            />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
        </BlurFade>
      </MotionDiv>
    </section>
  );
}