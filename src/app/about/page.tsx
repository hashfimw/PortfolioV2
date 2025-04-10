"use client";

import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";

export default function AboutPage() {
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
    <div className="space-y-10 rounded-xl bg-spotify-dark p-4">
      {/* Header with background gradient */}
      <div className="relative pt-10 md:pt-16 pb-12 p-2">
        <div className="absolute inset-0 bg-gradient-to-b from-spotify-purple/70 to-transparent opacity-30 rounded-xl"></div>
        <div className="relative z-10 ml-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
          <p className="text-neutral-400 text-lg max-w-3xl">
            Full Stack Developer passionate about creating beautiful,
            functional, and user-friendly web applications.
          </p>
        </div>
      </div>

      {/* Personal Info Section */}
      <section className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Profile Picture */}
        <div className="md:col-span-2 mx-auto">
          <div className="relative aspect-square w-full max-w-md mx-auto md:mx-0 rounded-lg overflow-hidden spotify-card-hover">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none opacity-100"
            >
              <source src={process.env.NEXT_PUBLIC_PLAYER} type="video/webm" />
            </video>
          </div>

          <div className="mt-6 flex flex-wrap justify-center md:justify-center gap-4">
            <a
              href="https://github.com/hashfimw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-spotify-dark-elevated hover:bg-spotify-dark-highlight rounded-full transition-colors"
            >
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/hashfimawarid"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-spotify-dark-elevated hover:bg-spotify-dark-highlight rounded-full transition-colors"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bio and Info */}
        <div className="md:col-span-3 space-y-6">
          <div className="bg-spotify-dark-elevated p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <span className="w-3 h-3 bg-spotify-green rounded-full mr-2"></span>
              Hello, I&apos;m Hashfi Mawarid
            </h2>
            <div className="space-y-4 text-neutral-300">
              <p>
                I am a Fullstack Developer with a strong interest in Frontend
                development. While I have experience working on both frontend
                and backend projects, I am more passionate about building
                intuitive, responsive, and visually appealing user interfaces.
              </p>
              <p>
                I specialize in creating seamless Frontend experiences using
                React, Next.js, TypeScript, and Tailwind CSS. Additionally, I
                have the capability to work on the backend using Node.js,
                Express, Prisma ORM, and PostgreSQL when needed. My goal is to
                bridge functionality with great design, ensuring that
                applications are not only efficient but also engaging for users.
              </p>
              <p>
                I am highly motivated to learn and stay updated with the latest
                technologies and best practices. Whether working on Frontend or
                Fullstack projects, I strive to deliver high-quality solutions
                that enhance user experience, performance, and scalability.
              </p>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-spotify-dark-elevated p-5 rounded-lg">
              <h3 className="font-medium mb-3">Education</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="font-medium">
                    Bachelor of degree in Communication Science
                  </p>
                  <p className="text-neutral-400">
                    University Pasundan, 2017-2023
                  </p>
                </div>
                <div>
                  <p className="font-medium">Full Stack Web Development</p>
                  <p className="text-neutral-400">
                    Purwadhika Digital Technology School, 2024
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-spotify-dark-elevated p-5 rounded-lg">
              <h3 className="font-medium mb-3">Languages</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>English</span>
                  <span className="text-spotify-green">Intermediate</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Indonesia</span>
                  <span className="text-spotify-green">Native</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section>
        <h2 className="text-xl font-bold mb-6 flex items-center">
          <span className="w-3 h-3 bg-spotify-green rounded-full mr-2"></span>
          What I Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Frontend Development",
              description:
                "Creating responsive, interactive, and visually appealing user interfaces using modern frontend technologies.",
              skills: [
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Responsive Design",
              ],
            },
            {
              title: "Backend Development",
              description:
                "Building robust server-side applications, APIs, and database systems that power web applications.",
              skills: [
                "Node.js",
                "Express",
                "Prisma ORM",
                "RESTful APIs",
                "Supabase(PostgreSQL)",
                "Database Design",
              ],
            },
            {
              title: "Full Stack Solutions",
              description:
                "Developing end-to-end web applications from concept to deployment with focus on user experience, performance and scalability.",
              skills: [
                "System Architecture",
                "Performance Optimization",
                "CI/CD",
                "Testing",
              ],
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-spotify-dark-elevated hover:bg-spotify-dark-highlight p-6 rounded-lg transition-colors"
            >
              <h3 className="font-medium text-lg mb-3">{service.title}</h3>
              <p className="text-neutral-400 text-sm mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-2 py-1 text-xs bg-spotify-dark rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* My Journey Section */}
      <section className="bg-spotify-dark-elevated p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-6 flex items-center">
          <span className="w-3 h-3 bg-spotify-green rounded-full mr-2"></span>
          My Journey
        </h2>

        <div className="relative border-l-2 border-spotify-dark-highlight pl-6 ml-3 space-y-6">
          {[
            {
              year: "2023",
              title: "Graduated from Universitas Pasundan",
              description:
                "Completed my studies and earned a Bachelor's degree in Communication Science from Universitas Pasundan.",
            },
            {
              year: "2024",
              title: "Started Learning Fullstack Development",
              description:
                "Enrolled in Purwadhika Digital Technology School to study Fullstack Web Development, covering both Frontend and Backend technologies.",
            },
            {
              year: "2025",
              title: "Continuous Learning and Growth",
              description:
                "Continuing to refine my skills, explore new technologies, and build real-world projects to enhance my expertise in web development.",
            },
          ].map((milestone, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-9 h-6 w-6 rounded-full bg-spotify-green flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-black"></div>
              </div>
              <div>
                <span className="text-spotify-green font-medium">
                  {milestone.year}
                </span>
                <h3 className="font-medium mt-1">{milestone.title}</h3>
                <p className="text-neutral-400 text-sm mt-1">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Interests */}
      <section>
        <h2 className="text-xl font-bold mb-6 flex items-center">
          <span className="w-3 h-3 bg-spotify-green rounded-full mr-2"></span>
          Beyond Coding
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              title: "Music",
              description: "A passionate music lover and dedicated listener.",
            },
            {
              title: "Travel",
              description:
                "Enjoy exploring new cultures, places, and nature destinations.",
            },
            {
              title: "Gaming",
              description:
                "Enthusiastic gamer with a love for FPS and MMORPG titles.",
            },
            {
              title: "Film",
              description: "Big fan of action, thriller, and horror movies.",
            },
          ].map((interest, index) => (
            <div
              key={index}
              className="bg-spotify-dark-elevated hover:bg-spotify-dark-highlight p-4 rounded-lg transition-colors"
            >
              <h3 className="font-medium mb-2">{interest.title}</h3>
              <p className="text-neutral-400 text-sm">{interest.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-spotify-dark to-spotify-purple/20 p-6 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-3">Let&apos;s Connect!</h2>
          <p className="text-neutral-300 mb-6">
            I&apos;m always interested in new projects, collaborations, or just
            chatting about technology. Feel free to reach out if you&apos;d like
            to work together or have any questions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-spotify-dark-elevated hover:bg-spotify-dark-highlight text-neutral-300 font-medium rounded-full transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact Me
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-spotify-dark-elevated hover:bg-spotify-dark-highlight  text-neutral-300 rounded-full transition-colors"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
