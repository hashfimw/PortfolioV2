import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="space-y-10 pb-10">
      {/* Header */}
      <div className="relative pt-8 md:pt-12 pb-6">
        <div className="absolute inset-0 bg-gradient-to-b from-spotify-green/20 to-transparent opacity-30"></div>
        <h1 className="text-3xl md:text-4xl font-bold relative z-10">
          My Projects
        </h1>
        <p className="text-neutral-400 mt-2 max-w-3xl relative z-10">
          A collection of my recent work spanning web applications, mobile apps,
          and design projects. Each project showcases different aspects of my
          skills and experience.
        </p>
      </div>

      {/* Featured Projects */}
      <section>
        <h2 className="text-xl font-bold mb-6 flex items-center">
          <span className="w-3 h-3 bg-spotify-green rounded-full mr-2"></span>
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-spotify-dark-elevated hover:bg-spotify-dark-highlight rounded-lg overflow-hidden transition-colors group"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-neutral-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-block px-2 py-1 text-xs bg-spotify-dark rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-spotify-dark hover:bg-spotify-dark-highlight transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-spotify-dark hover:bg-spotify-dark-highlight transition-colors"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}

                  <Link
                    href={`/projects/${project.id}`}
                    className="ml-auto inline-flex items-center px-4 py-2 rounded-full bg-spotify-green hover:bg-spotify-green-bright text-black font-medium text-sm transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Projects */}
      <section>
        <h2 className="text-xl font-bold mb-6 flex items-center">
          <span className="w-3 h-3 bg-spotify-green rounded-full mr-2"></span>
          All Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="bg-spotify-dark-elevated hover:bg-spotify-dark-highlight rounded-lg overflow-hidden p-4 transition-colors"
            >
              <div className="aspect-video relative mb-3 rounded overflow-hidden bg-spotify-dark">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <h3 className="font-medium mb-1">{project.title}</h3>
              <p className="text-sm text-neutral-400 mb-3 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block px-2 py-1 text-xs bg-spotify-dark rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="inline-block px-2 py-1 text-xs bg-spotify-dark rounded-full">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-full bg-spotify-dark hover:bg-spotify-dark-highlight transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-full bg-spotify-dark hover:bg-spotify-dark-highlight transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <Link
                  href={`/projects/${project.id}`}
                  className="text-xs font-medium text-spotify-green hover:text-spotify-green-bright transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
