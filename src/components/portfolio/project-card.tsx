import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export default function ProjectCard({
  id,
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  featured = false,
}: ProjectCardProps) {
  if (featured) {
    return (
      <div className="bg-spotify-dark-elevated hover:bg-spotify-dark-highlight rounded-lg overflow-hidden transition-colors group">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-5">
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-neutral-400 text-sm mb-4">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs bg-spotify-dark rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-spotify-dark hover:bg-spotify-dark-highlight transition-colors"
                aria-label={`GitHub repository for ${title}`}
              >
                <Github className="h-5 w-5" />
              </a>
            )}

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-spotify-dark hover:bg-spotify-dark-highlight transition-colors"
                aria-label={`Live demo for ${title}`}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}

            <Link
              href={`/projects/${id}`}
              className="ml-auto inline-flex items-center px-4 py-2 rounded-full bg-spotify-green hover:bg-spotify-green-bright text-black font-medium text-sm transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-spotify-dark-elevated hover:bg-spotify-dark-highlight rounded-lg overflow-hidden p-4 transition-colors">
      <div className="aspect-video relative mb-3 rounded overflow-hidden bg-spotify-dark">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>

      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-sm text-neutral-400 mb-3 line-clamp-2">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-3">
        {technologies.slice(0, 3).map((tech, index) => (
          <span
            key={index}
            className="inline-block px-2 py-1 text-xs bg-spotify-dark rounded-full"
          >
            {tech}
          </span>
        ))}
        {technologies.length > 3 && (
          <span className="inline-block px-2 py-1 text-xs bg-spotify-dark rounded-full">
            +{technologies.length - 3}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded-full bg-spotify-dark hover:bg-spotify-dark-highlight transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded-full bg-spotify-dark hover:bg-spotify-dark-highlight transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        <Link
          href={`/projects/${id}`}
          className="text-xs font-medium text-spotify-green hover:text-spotify-green-bright transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
