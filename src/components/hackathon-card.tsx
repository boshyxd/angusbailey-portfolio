import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getImagePath } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  links,
}: Props) {
  return (
    <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm">
      <Avatar className="border-2 border-background size-16 shadow-sm mb-4">
        {image ? (
          <AvatarImage src={getImagePath(image)} alt={title} className="object-cover" />
        ) : (
          <AvatarFallback>{title[0]}</AvatarFallback>
        )}
      </Avatar>
      <div className="flex flex-col items-center gap-2">
        {dates && (
          <time className="text-sm font-medium text-muted-foreground font-inter">{dates}</time>
        )}
        <h2 className="text-xl font-poppins font-semibold leading-tight">{title}</h2>
        {location && (
          <p className="text-sm text-muted-foreground font-inter">{location}</p>
        )}
        {description && (
          <p className="prose dark:prose-invert text-base text-muted-foreground mt-1 font-inter">
            {description}
          </p>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-4 flex flex-row flex-wrap justify-center gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge variant="secondary" className="flex items-center gap-1.5 px-2 py-1 text-xs">
                {link.icon}
                <span>{link.title}</span>
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}