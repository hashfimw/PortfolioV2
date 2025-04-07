import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, ExternalLink } from "lucide-react";
import { projects, skillCategories } from "@/lib/data";

export default function Home() {
  const featuredProjects = projects.filter((projects) => projects.featured);

  const displayedSkillCategories = skillCategories.slice(0, 3);

  return (
    <div className="space-y-10 pb-10">
      {/* Hero section */}
      <section className="pt-10 md:pt-16 pb-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
          <div className="w-40 h-40 md:w-52 md:h-52 relative rounded-full overflow-hidden border-2 border-zinc-900 flex-shrink-0">
            <Image
              src="https://res.cloudinary.com/ddzq2jzva/image/upload/v1742497087/556B67FD-2092-460D-97A1-7B0CC90D2E74_id8jps.jpg"
              alt="Hashfi Mawarid"
              layout="fill"
              objectFit="cover"
              className="bg-neutral-800"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-green-500 mb-1">
              Frontend Developer | Full Stack Developer
            </p>
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              Hashfi Mawarid
            </h1>
            <p className="text-neutral-400 text-sm md:text-base max-w-2xl">
              Building beautiful, responsive, and user-friendly web applications
              with modern technologies. Passionate about creating seamless user
              experiences and solving complex problems.
            </p>

            <div className="flex items-center justify-center md:justify-start mt-6 space-x-4">
              <a
                href="https://github.com/hashfimw"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/hashfimawarid"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <Link
                href="/contact"
                className="flex items-center px-4 py-2 rounded-full bg-green-500 hover:bg-green-400 text-black font-medium transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Featured Projects</h2>
          <Link
            href="/projects"
            className="flex items-center text-sm text-neutral-400 hover:text-white"
          >
            View all <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProjects.map((project) => (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              className="group bg-neutral-900 hover:bg-neutral-800 rounded-md p-4 transition-colors"
            >
              <div className="w-full aspect-video relative mb-4 rounded-md overflow-hidden bg-neutral-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium mb-1">{project.title}</h3>
              <p className="text-sm text-neutral-400 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-2 py-1 text-xs bg-neutral-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Skills - Updated to use data from skillCategories */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Skills & Technologies</h2>
          <Link
            href="/skills"
            className="flex items-center text-sm text-neutral-400 hover:text-white"
          >
            View all <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {displayedSkillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-neutral-900 hover:bg-neutral-800 p-4 rounded-md transition-colors"
            >
              <h3 className="font-medium mb-3">
                {category.icon} {category.name}
              </h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                {category.skills.slice(0, 3).map((skill) => (
                  <li key={skill.name} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Let's Work Together</h2>
        <p className="text-neutral-300 mb-4 max-w-2xl">
          I'm currently available for freelance work and open to new
          opportunities. If you have a project that needs my expertise, let's
          talk about how I can help.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-400 text-black font-medium rounded-full transition-colors"
          >
            Contact Me
          </Link>
          <a
            href="https://drive.google.com/file/d/1f7tXrloPfaENNW3KS4rpegsnDWzYYZDS/view?usp=sharing"
            target="_blank"
            className="inline-flex items-center px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-full transition-colors"
          >
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
}
