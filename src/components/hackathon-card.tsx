import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getImagePath } from "@/lib/utils";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  award?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
  technologies?: readonly string[];
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  award,
  links,
  technologies,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4 border rounded-lg shadow-sm">
      <div className="w-24 h-24 flex-shrink-0">
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border">
          {image ? (
            <Image
              src={getImagePath(image)}
              alt={title}
              width={100}
              height={100}
              className="object-cover"
              unoptimized
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-full">
              <span className="text-muted-foreground">{title[0]}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 gap-1.5">
        <div className="flex items-center gap-2">
          <time className="text-xs font-medium text-muted-foreground font-inter">{dates}</time>
          {award && (
            <Badge 
              variant="secondary" 
              className="bg-gradient-to-r from-zinc-300 via-zinc-100 to-zinc-300 text-zinc-800 dark:text-zinc-900 font-medium text-[10px] px-2 py-0.5 shadow-sm border border-zinc-200/50"
            >
              🏆 {award}
            </Badge>
          )}
        </div>
        <h2 className="text-lg font-poppins font-semibold leading-tight">{title}</h2>
        <p className="text-xs text-muted-foreground font-inter">{location}</p>
        <p className="prose dark:prose-invert text-sm text-muted-foreground font-inter">
          {description}
        </p>
        {technologies && technologies.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {technologies.map((tech, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="text-[10px] px-1.5 py-0.5"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="mt-2 flex flex-row flex-wrap gap-1.5">
            {links.map((link, idx) => (
              <Link href={link.href} key={idx}>
                <Badge variant="secondary" className="flex items-center gap-1 px-1.5 py-0.5 text-[10px]">
                  {link.icon}
                  <span>{link.title}</span>
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}