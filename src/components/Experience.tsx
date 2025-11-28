export default function Experience() {
  const experiences = [
    {
      title: "Video Editor",
      company: "Teamjetpilot",
      timeline: "Sep 2022 - Dec 2023",
      responsibilities: [
        "Edited YouTube vlogs and short form content for TikTok and Reels, focusing on an engaging educational and comedic storytelling style",
        "Designed eye catching thumbnails to maximize click-through rates and audience retention",
        "Planned content ideas and managed the YouTube channel to maintain a consistent publishing schedule and optimize performance",
      ],
    },
    {
      title: "Creative Force",
      company: "Kok Bisa",
      timeline: "Dec 2021 - Dec 2023",
      responsibilities: [
        "Joined Kok Bisa's freelance creative network after completing the Creator Camp program. Although I didn’t take on projects due to focusing on university and full-time work, this experience allowed me to stay connected with the creative community and continue developing my skills",
      ],
    },
    {
      title: "Animator",
      company: "Kok Bisa",
      timeline: "Feb 2021 - Jun 2021",
      responsibilities: [
        "Selected as an animator for Kok Bisa Creator Camp, supported by Kok Bisa and Australia Global Alumni",
        "Learned how to develop ideas and write scripts for educational videos",
        "Studied animation fundamentals and visual storytelling techniques",
        "Produced an animation video about electric aircraft as the final project, published on YouTube and reached 1.7 million views",
      ],
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-12 tracking-tight">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-primary font-medium mt-1">
                    {exp.company}
                  </p>
                </div>
                <span className="text-muted-foreground font-light mt-2 md:mt-0">
                  {exp.timeline}
                </span>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.responsibilities.map((responsibility, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground font-light leading-relaxed flex items-start"
                  >
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>{responsibility}</span>
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
