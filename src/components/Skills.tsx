export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["Javascript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "PostgreSQL", "REST APIs"],
    },
    {
      title: "Tools & Others",
      skills: ["Git & GitHub", "Vite", "Vercel", "Postman"],
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-12 tracking-tight">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl p-8 border border-border hover:bg-surface-elevated transition-all duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground font-light text-lg"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
