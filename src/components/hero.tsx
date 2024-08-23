import React from 'react';
import BlurFadeText from "@/components/magicui/blur-fade-text";
import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex flex-col text-left">
        <div className="flex items-center">
          <BlurFadeText
            delay={BLUR_FADE_DELAY * 2}
            className="text-5xl md:text-5xl font-bold tracking-tight"
            text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
          />
          <span className="wave text-5xl ml-2 mb-4">👋</span>
        </div>
        <BlurFadeText
          className="text-xl text-foreground max-w-2xl"
          delay={BLUR_FADE_DELAY * 3}
          text={DATA.description}
        />
      </div>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Avatar className="size-32 md:size-48 border">
          <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
          <AvatarFallback>{DATA.initials}</AvatarFallback>
        </Avatar>
      </BlurFade>
    </section>
  );
}