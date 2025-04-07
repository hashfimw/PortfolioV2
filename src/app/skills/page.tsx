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
    <div className="space-y-10 pb-10">
      <div className="relative pt-10 md:pt-16 pb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-transparent opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
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
          the latest technologies and best practices. Here's a breakdown of my
          technical skills and expertise across different categories.
        </p>
      </section>

      <div className="space-y-12">
        {skillCategories.map((category, index) => (
          <section key={index}>
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-3 h-3 bg-spotify-green rounded-full mr-2"></span>
              <span className="mr-2">{category.icon}</span>
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
              {[
                "JavaScript",
                "TypeScript",
                "HTML",
                "CSS",
                "Python",
                "SQL",
                "Bash",
              ].map((lang) => (
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
                "Django",
                "Tailwind CSS",
                "Material UI",
                "Redux",
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
                "Webpack",
                "Vercel",
                "AWS",
                "Firebase",
                "Netlify",
                "Figma",
                "Adobe XD",
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
              {[
                "MongoDB",
                "PostgreSQL",
                "MySQL",
                "Redis",
                "Firebase",
                "Supabase",
              ].map((db) => (
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

      <section className="bg-gradient-to-r from-spotify-green/20 to-spotify-blue/20 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Currently Learning</h2>
        <p className="text-neutral-300 mb-4">
          I believe in continuous learning and growth. Here are some
          technologies and skills I'm currently focusing on:
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
          technologies? I'd love to hear about it!
        </p>
      </section>
    </div>
  );
}
