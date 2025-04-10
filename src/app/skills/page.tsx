import { SkillIcons } from "@/components/icon/skill";
import { skillCategories } from "@/lib/data";

export default function SkillsPage() {
  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`h-2 w-10 rounded-full ${
              i <= level ? "bg-spotify-green" : "bg-neutral-700"
            }`}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-10 pb-10 rounded-xl bg-spotify-dark p-4">
      <div className="relative pt-10 md:pt-16 pb-12 p-2">
        <div className="absolute inset-0 bg-gradient-to-b from-spotify-purple/70 to-transparent opacity-30 rounded-xl"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h1>
          <p className="text-neutral-400 text-lg max-w-3xl">
            A comprehensive overview of my technical skills, expertise, and
            proficiency levels.
          </p>
        </div>
      </div>

      <section className="bg-spotify-dark-elevated p-6 rounded-lg mb-8">
        <p className="text-neutral-300">
          I continuously strive to expand my skill set and stay up-to-date with
          the latest technologies and best practices. Here&apos;s a breakdown of
          my technical skills and expertise across different categories.
        </p>
      </section>

      <div className="space-y-12">
        {skillCategories.map((category, index) => (
          <section key={index}>
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-3 h-3 bg-spotify-green rounded-full mr-2"></span>
              <span className="mr-2 text-neutral-300">
                <SkillIcons categoryName={category.name} />
              </span>
              {category.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="bg-spotify-dark-elevated hover:bg-spotify-dark-highlight p-5 rounded-lg transition-colors"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">{skill.name}</h3>
                    {renderSkillLevel(skill.level)}
                  </div>
                  <p className="text-sm text-neutral-400">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section>
        <h2 className="text-xl font-bold mb-6 flex items-center">
          <span className="w-3 h-3 bg-spotify-green rounded-full mr-2"></span>
          Technologies & Tools
        </h2>

        <div className="bg-spotify-dark-elevated p-6 rounded-lg">
          <div className="mb-6">
            <h3 className="font-medium mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "TypeScript", "HTML", "CSS"].map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 rounded-full bg-spotify-dark text-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-3">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "Express",
                "Prisma ORM",
                "Leaflet Map",
                "Tailwind CSS",
                "Shadcn UI",
                "React Query",
                "Framer Motion",
              ].map((framework) => (
                <span
                  key={framework}
                  className="px-3 py-1 rounded-full bg-spotify-dark text-sm"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-3">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Git",
                "GitHub",
                "VS Code",
                "Docker",
                "Postman",
                "Vercel",
                "Netlify",
                "Figma",
                "Canva",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-full bg-spotify-dark text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {["PostgreSQL", "MySQL", "Supabase", "NoSQL"].map((db) => (
                <span
                  key={db}
                  className="px-3 py-1 rounded-full bg-spotify-dark text-sm"
                >
                  {db}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-spotify-dark to-spotify-purple/20 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Currently Learning</h2>
        <p className="text-neutral-300 mb-4">
          I believe in continuous learning and growth. Here are some
          technologies and skills I&apos;m currently focusing on:
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {["Vue.js", "MonggoDB", "WordPress", "Laravel"].map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-full bg-black/30 text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="text-sm text-neutral-400">
          Do you have a project that requires any of these skills or
          technologies? I&apos;d love to hear about it!
        </p>
      </section>
    </div>
  );
}
