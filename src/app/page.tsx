"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { projects, skillCategories } from "@/lib/data";
import { useEffect, useRef } from "react";
import { IoPlaySharp } from "react-icons/io5";

export default function Home() {
  const featuredProjects = projects.filter((projects) => projects.featured);
  const displayedSkillCategories = skillCategories.slice(0, 3);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="space-y-10 bg-spotify-dark">
      {/* Hero section */}
      <section>
        {/* Hero with video background */}
        <div className="relative aspect-3/2 w-full overflow-hidden">
          {/* Video background */}
          <div className="h-96 opacity-50">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-fill brightness-75"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={process.env.NEXT_PUBLIC_HERO} type="video/mp4" />
            </video>
          </div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-spotify-dark via-spotify-purple/10 to-spotify-purple/30"></div>

          {/* Hero content - Improved for responsiveness */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 flex flex-col md:flex-row md:items-end justify-center md:justify-start">
            {/* Profile Image - Fixed size for mobile and desktop */}
            <div className="w-32 h-32 md:w-48 md:h-48 relative rounded-full overflow-hidden border-2 border-zinc-900 flex-shrink-0 z-10 mx-auto md:mx-0 md:mb-0">
              <Image
                src="https://res.cloudinary.com/ddzq2jzva/image/upload/v1742497087/556B67FD-2092-460D-97A1-7B0CC90D2E74_id8jps.jpg"
                alt="Hashfi Mawarid"
                layout="fill"
                objectFit="cover"
                className="bg-neutral-800"
              />
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left md:ml-8 z-10 md:mb-2 mt-4 md:mt-0">
              <p className="text-sm md:text-lg font-medium text-neutral-200 mb-1">
                Frontend Developer | Full Stack Developer
              </p>
              <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-3">
                Hashfi Mawarid
              </h1>
              <p className="text-neutral-400 text-xs md:text-sm max-w-2xl mx-auto md:mx-0">
                Building beautiful, responsive, and user-friendly web
                applications with modern technologies. Passionate about creating
                seamless user experiences and solving complex problems.
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center md:justify-start mt-4 space-x-3">
                <a
                  href="https://github.com/hashfimw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
                >
                  <Github className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/hashfimawarid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
                >
                  <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <Link
                  href="/projects"
                  className="flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-full bg-green-500 hover:bg-green-400 text-black font-medium transition-colors text-sm"
                >
                  <IoPlaySharp className="h-6 w-6 md:h-8 md:w-8 text-spotify-dark text-center items-center mx-auto pl-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the components remain the same */}
      {/* Featured Projects */}
      <section>
        <div className="flex items-center justify-between mb-4 p-4">
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
      <section className="p-4">
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
      <section className="bg-gradient-to-b from-spotify-dark/90 to-spotify-purple/20 p-6 rounded-lg">
        <div className="max-w-3xl text-center mx-auto">
          <h2 className="text-xl font-bold mb-2">Let&apos;s Work Together</h2>
          <p className="text-neutral-300 mb-4">
            I&apos;m currently available for freelance work and open to new
            opportunities. If you have a project that needs my expertise,
            let&apos;s talk about how I can help.
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-spotify-dark-elevated hover:bg-spotify-dark-highlight text-neutral-300 font-medium rounded-full transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact Me
            </Link>
            <a
              href="https://drive.google.com/file/d/1f7tXrloPfaENNW3KS4rpegsnDWzYYZDS/view?usp=sharing"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-spotify-dark-elevated hover:bg-spotify-dark-highlight text-neutral-300 font-medium rounded-full transition-colors"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
