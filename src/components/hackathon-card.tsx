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
    <div className="group flex flex-col md:flex-row items-center gap-3 p-3 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/50 hover:-translate-y-1 h-full">
      <div className="w-20 h-20 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border transition-colors duration-300 group-hover:border-primary/50">
          {image ? (
            <Image
              src={getImagePath(image)}
              alt={title}
              width={100}
              height={100}
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              unoptimized
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-full">
              <span className="text-muted-foreground">{title[0]}</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 gap-1">
        <div className="flex items-center gap-2">
          <time className="text-xs font-medium text-muted-foreground font-inter">
            {dates}
          </time>
          {award && (
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-zinc-300 via-zinc-100 to-zinc-300 text-zinc-800 dark:text-zinc-900 font-medium text-[10px] px-2 py-0.5 shadow-sm border border-zinc-200/50 transition-all duration-300 group-hover:shadow-md group-hover:scale-105"
            >
              🏆 {award}
            </Badge>
          )}
        </div>
        <h2 className="text-lg font-poppins font-semibold leading-tight transition-colors duration-300 group-hover:text-primary">
          {title}
        </h2>
        <p className="text-xs text-muted-foreground font-inter mb-1">
          {location}
        </p>
        <p className="prose dark:prose-invert text-sm text-muted-foreground font-inter line-clamp-4 mb-2">
          {description}
        </p>
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-1 min-h-[30px]">
            {technologies.map((tech, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="text-[10px] px-1.5 py-0.5 transition-all duration-300 hover:scale-105 hover:bg-primary/10 hover:text-primary"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap gap-1 min-h-[25px]">
            {links.map((link, idx) => (
              <Link href={link.href} key={idx}>
                <Badge
                  variant="secondary"
                  className="flex items-center gap-1 px-1.5 py-0.5 text-[10px] transition-all duration-300 hover:scale-105 hover:bg-primary/10 hover:text-primary"
                >
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
