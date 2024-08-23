import React from 'react';
import BlurFadeText from "@/components/magicui/blur-fade-text";
import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { getImagePath } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-between gap-8 px-4 py-8 md:flex-row md:items-start md:px-0 md:py-16">
      <div className="flex flex-col text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start">
          <BlurFadeText
            delay={BLUR_FADE_DELAY * 2}
            className="text-3xl font-bold tracking-tight md:text-5xl"
            text={`Hi! I'm ${DATA.name.split(" ")[0]}`}
          />
          <span className="wave ml-2 mb-4 text-3xl md:text-5xl">👋</span>
        </div>
        <BlurFadeText
          className="mt-4 text-base text-foreground md:text-xl md:max-w-2xl"
          delay={BLUR_FADE_DELAY * 3}
          text={DATA.description}
        />
      </div>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Avatar className="size-32 border md:size-48">
          <AvatarImage alt={DATA.name} src={getImagePath(DATA.avatarUrl)} />
          <AvatarFallback>{DATA.initials}</AvatarFallback>
        </Avatar>
      </BlurFade>
    </section>
  );
}