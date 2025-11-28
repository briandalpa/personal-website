export default function About() {
  const coreSkills = [
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "Node.js",
    "Next.js",
    "RESTful APIs",
    "PostgreSQL",
    "Git & GitHub",
  ];
  const keyValues = [
    {
      title: "Timeliness",
      description: "Delivering projects on schedule with clear milestones",
    },
    {
      title: "Attention to Detail",
      description:
        "Writing clean, maintainable code with comprehensive testing",
    },
    {
      title: "Clear Communication",
      description:
        "Keeping stakeholders informed throughout the development process",
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-12 tracking-tight">
          About Me
        </h2>

        <div className="space-y-8">
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            <p>
              I'm a career switcher moving from video editing and motion
              graphics into software development. Currently, I'm studying
              Fullstack Software Development at Purwadhika Digital Technology
              School, where I'm learning everything from programming
              fundamentals and web development (JavaScript, React, Node.js) to
              databases, cloud deployment, DevOps practices, and AI integration
              in modern applications. My goal is to combine technical problem
              solving with creative thinking to build software that is both
              functional and impactful.
            </p>
            <p>
              In my previous career, one of my proudest projects was animating a
              motion graphics video for Kok Bisa's YouTube channel, which
              reached over 1.7M views. Working with such a talented and creative
              team was an amazing experience, and it showed me the impact of
              creating something that connects with people. Now I'm excited to
              bring that same mindset into software development.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-chart-2 rounded-full text-base font-medium text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Key Values
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {keyValues.map((value, idx) => (
                <div
                  key={value.title}
                  className="bg-card rounded-2xl p-6 border border-border"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <h4 className="text-xl font-semibold mb-3 text-primary">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
