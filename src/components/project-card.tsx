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
        "flex flex-col overflow-visible border transition-all duration-300 h-full relative",
        "bg-gradient-to-br from-background to-muted/50",
        "backdrop-blur-[2px]",
        "group-hover:bg-gradient-to-br group-hover:from-background/80 group-hover:to-muted/30",
        "group-hover:z-10",
        className
      )}
    >
      <div className="relative">
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
          <div className="relative overflow-hidden h-48">
            <Image
              src={getImagePath(image)}
              alt={title}
              width={500}
              height={281}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ) : (
          <div className="relative overflow-hidden h-48 bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">No image available</span>
          </div>
        )}
        <Link
          href={primaryLink}
          className="absolute inset-0 z-10"
          target="_blank"
          aria-label={`View ${title} project`}
        />
      </div>
      <div className="flex flex-col flex-1">
        <CardHeader className="px-4 py-3 space-y-2">
          <CardTitle className="text-lg font-poppins font-semibold">
            <Link
              href={href || "#"}
              className="hover:text-primary transition-colors duration-300"
              target="_blank"
            >
              {title}
            </Link>
          </CardTitle>
          <time className="font-inter text-sm text-muted-foreground">
            {dates}
          </time>
          <div className="hidden font-inter text-sm underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <div className="h-[140px] overflow-hidden">
            <Markdown className="prose max-w-full text-pretty font-inter text-sm text-muted-foreground dark:prose-invert leading-relaxed line-clamp-6">
              {description}
            </Markdown>
          </div>
        </CardHeader>
        <div className="mt-auto flex flex-col px-4 py-2">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1 min-h-[40px]">
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
        <CardFooter className="px-4 py-2 relative z-20">
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-2 min-h-[30px]">
              {links?.map((link, idx) => (
                <Link href={link?.href} key={idx} target="_blank">
                  <Badge
                    key={idx}
                    className="flex gap-1 px-1.5 py-0.5 text-[10px] hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  >
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
