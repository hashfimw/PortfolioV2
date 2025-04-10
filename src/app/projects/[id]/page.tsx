"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  Tag,
  X,
} from "lucide-react";
import { projects } from "@/lib/data";
import { useState } from "react";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    notFound();
  }

  const openModal = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  return (
    <div className="space-y-6 sm:space-y-10 pb-6 sm:pb-10 rounded-xl bg-spotify-dark p-3 sm:p-4">
      {/* Project Header */}
      <div className="relative">
        {/* Back button */}
        <div className="md:absolute md:top-5 md:left-5 md:z-10 relative md:pb-0 md:pt-0 pb-4 pt-2 z-10">
          <Link
            href="/projects"
            className="flex items-center px-2 sm:px-3 py-1.5 sm:py-2 bg-spotify-dark-highlight w-[130px] md:w-full backdrop-blur-sm rounded-full text-xs sm:text-sm hover:bg-spotify-dark-elevated/70 transition-colors md:bg-spotify-dark-highlight/40"
          >
            <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Back to Projects
          </Link>
        </div>

        {/* Hero image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={project.image || "/project-placeholder.jpg"}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="brightness-75"
          />

          {/* Overlay content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10">
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
              {project.technologies.slice(0, 4).map((tech, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-0.5 sm:py-1 bg-spotify-dark/75 backdrop-blur-sm rounded-full text-[10px] sm:text-xs hidden md:block botton-0"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-spotify-dark/75 backdrop-blur-sm rounded-full text-[10px] sm:text-xs hidden md:block">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-1 sm:mb-2">
              {project.title}
            </h1>
            <p className="text-xs sm:text-base text-neutral-300 md:text-lg max-w-3xl md:line-clamp-none line-clamp-1">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Project details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-8">
          {/* Overview */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 flex items-center">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-spotify-green rounded-full mr-2"></span>
              Project Overview
            </h2>
            <div className="bg-spotify-dark-elevated p-4 sm:p-6 rounded-lg">
              <p className="text-sm sm:text-base text-neutral-300 whitespace-pre-line">
                {project.longDescription || project.description}
              </p>
            </div>
          </section>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <section>
              <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 flex items-center">
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-spotify-green rounded-full mr-2"></span>
                Key Features
              </h2>
              <div className="bg-spotify-dark-elevated p-4 sm:p-6 rounded-lg">
                <ul className="space-y-2 sm:space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-spotify-green rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                      <span className="text-sm sm:text-base text-neutral-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Gallery */}
          {project.images && project.images.length > 0 && (
            <section>
              <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 flex items-center">
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-spotify-green rounded-full mr-2"></span>
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-video rounded-lg overflow-hidden bg-spotify-dark group cursor-pointer"
                    onClick={() => openModal(image)}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <div className="bg-black/60 rounded-full p-2 sm:p-3">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="sm:w-6 sm:h-6"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technologies Used */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 flex items-center">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-spotify-green rounded-full mr-2"></span>
              Technologies Used
            </h2>
            <div className="bg-spotify-dark-elevated p-4 sm:p-6 rounded-lg">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-spotify-dark rounded-full text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-4 sm:space-y-6">
          {/* Project Links */}
          <div className="bg-spotify-dark-elevated p-4 sm:p-6 rounded-lg">
            <h3 className="font-medium text-sm sm:text-base mb-3 sm:mb-4">
              Project Links
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-3 sm:px-4 py-2 sm:py-3 bg-spotify-dark rounded-md hover:bg-spotify-dark-highlight transition-colors"
                >
                  <span className="flex items-center">
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3" />
                    <span className="text-sm">Live Demo</span>
                  </span>
                  <span className="text-spotify-green">→</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-3 sm:px-4 py-2 sm:py-3 bg-spotify-dark rounded-md hover:bg-spotify-dark-highlight transition-colors"
                >
                  <span className="flex items-center">
                    <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3" />
                    <span className="text-sm">Source Code</span>
                  </span>
                  <span className="text-spotify-green">→</span>
                </a>
              )}
            </div>
          </div>

          {/* Project Info */}
          <div className="bg-spotify-dark-elevated p-4 sm:p-6 rounded-lg">
            <h3 className="font-medium text-sm sm:text-base mb-3 sm:mb-4">
              Project Info
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-neutral-400 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm font-medium">Year</p>
                  <p className="text-neutral-400 text-xs sm:text-sm">
                    {project.year}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Tag className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-neutral-400 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm font-medium">Category</p>
                  <p className="text-neutral-400 text-xs sm:text-sm">
                    {project.category}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-spotify-green/20 to-spotify-blue/20 p-4 sm:p-6 rounded-lg">
            <h3 className="font-medium text-sm sm:text-base mb-1 sm:mb-2">
              Interested in similar projects?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mb-3 sm:mb-4">
              Let&apos;s discuss how I can help bring your ideas to life with
              custom web applications.
            </p>
            <Link
              href="/contact"
              className="flex items-center justify-center w-full px-3 sm:px-4 py-1.5 sm:py-2 bg-spotify-green hover:bg-spotify-green-bright text-black font-medium rounded-full transition-colors text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <section>
        <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-6 flex items-center">
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-spotify-green rounded-full mr-2"></span>
          You Might Also Like
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {projects
            .filter((p) => p.id !== project.id)
            .slice(0, 3)
            .map((relatedProject) => (
              <Link
                key={relatedProject.id}
                href={`/projects/${relatedProject.id}`}
                className="bg-spotify-dark-elevated hover:bg-spotify-dark-highlight rounded-lg overflow-hidden p-3 sm:p-4 transition-colors"
              >
                <div className="aspect-video relative mb-2 sm:mb-3 rounded overflow-hidden bg-spotify-dark">
                  <Image
                    src={relatedProject.image}
                    alt={relatedProject.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <h3 className="font-medium text-sm sm:text-base mb-1">
                  {relatedProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mb-2 sm:mb-3 line-clamp-2">
                  {relatedProject.description}
                </p>

                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {relatedProject.technologies
                    .slice(0, 3)
                    .map((tech, index) => (
                      <span
                        key={index}
                        className="inline-block px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-spotify-dark rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute -top-8 sm:-top-12 right-0 bg-spotify-dark rounded-full p-1.5 sm:p-2 hover:bg-spotify-dark-highlight transition-colors"
            >
              <X className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>
            <div className="relative aspect-video max-h-[80vh] w-full">
              <Image
                src={selectedImage}
                alt="Project image"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
