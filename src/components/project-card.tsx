import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn, getImagePath } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
  className?: string;
  githubUrl?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  githubUrl,
}: Props) {
  const primaryLink = links?.[0]?.href || href || "#";

  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border transition-all duration-300 h-full",
        "bg-gradient-to-br from-background to-muted/50",
        "backdrop-blur-[2px]",
        "group-hover:bg-gradient-to-br group-hover:from-background/80 group-hover:to-muted/30",
        className
      )}
    >
      <Link
        href={primaryLink}
        className="block cursor-pointer overflow-hidden"
      >
        {video && (
          <div className="relative overflow-hidden h-40">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        )}
        {image ? (
          <div className="relative overflow-hidden h-40">
            <Image
              src={getImagePath(image)}
              alt={title}
              width={500}
              height={300}
              className="w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ) : (
          <div className="h-40 w-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">No image available</span>
          </div>
        )}
      </Link>
      <div className="flex flex-col flex-1">
        <CardHeader className="px-4 py-3 space-y-2">
          <CardTitle className="text-lg font-poppins font-semibold">
            {githubUrl ? (
              <Link href={githubUrl} className="hover:underline" target="_blank">
                {title}
              </Link>
            ) : (
              title
            )}
          </CardTitle>
          <time className="font-inter text-sm text-muted-foreground">{dates}</time>
          <div className="hidden font-inter text-sm underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-inter text-sm text-muted-foreground dark:prose-invert leading-relaxed">
            {description}
          </Markdown>
        </CardHeader>
        <div className="mt-auto flex flex-col px-4 py-2">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags?.map((tag) => (
                <Badge
                  className="px-1.5 py-0.5 text-[10px]"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
        <CardFooter className="px-4 py-2">
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-2">
              {links?.map((link, idx) => (
                <Link href={link?.href} key={idx} target="_blank">
                  <Badge key={idx} className="flex gap-1 px-1.5 py-0.5 text-[10px] hover:bg-primary hover:text-primary-foreground transition-colors">
                    {link.icon}
                    {link.title}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>
      </div>
    </Card>
  );
}