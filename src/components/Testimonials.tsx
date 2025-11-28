import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Nicole Tan",
      role: "Product Manager, BrightApps",
      content:
        "Briand delivered a clean, scalable codebase for our internal dashboard and impressed the team with his proactive problem solving and attention to detail. His background in design gives him a unique eye for user experience.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nicole",
    },
    {
      name: "Kevin Ng",
      role: "Software Engineer, TechNova",
      content:
        "Working with Briand was seamless. He took complex requirements and translated them into functional, elegant web applications. His fullstack skills combined with creativity make him an exceptional developer.",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Kevin",
    },
    {
      name: "Adriana Ong",
      role: "Senior Developer, CloudShift",
      content:
        "Briand quickly became a key contributor, writing maintainable code and integrating features that exceeded expectations. His ability to balance frontend polish with backend reliability is rare and highly valuable.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adriana",
    },
  ];

  return (
    <section className="py-20 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-12 tracking-tight">
          Testimonials
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonials, index) => (
            <div
              key={testimonials.name}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                "{testimonials.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-chart-4 overflow-hidden">
                  <img
                    src={testimonials.avatar}
                    alt={testimonials.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials.name}
                  </p>
                  <p className="text-sm text-muted-foreground font-light">
                    {testimonials.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
