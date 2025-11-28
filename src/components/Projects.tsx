import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Realtime Point of Sales",
      shortDescription:
        "Built a realtime Point of Sales application using Next.js and Supabase, designed for fast product management and live order updates.",
      tech: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Supabase",
        "Vercel",
      ],
      github: "https://github.com/briandalpa/realtime-point-of-sales",
      live: "https://binarycoffee.vercel.app",
      situation:
        "I wanted to build a project that felt closer to real business use, not just another simple practice app. A Point of Sales system with realtime updates gave me a practical challenge that matched how modern stores operate.",
      task: "The goal was to create a POS where users can manage products, track orders, handle carts, and see updates instantly without refreshing the page.",
      action:
        "I built the app using Next.js and Supabase. Products, orders, and carts use Supabase tables, and I set up realtime subscriptions so changes appear right away for every connected user. I added simple authentication, clean product management, and a straightforward interface so the workflow feels natural.",
      result:
        "The app now updates in realtime, handles product and order changes smoothly, and feels close to an actual POS system. It taught me how to combine serverless databases with modern frontend tools, and it became one of the strongest projects in my portfolio.",
    },
    {
      title: "Pig Game",
      shortDescription:
        "A browser based dice game that demonstrates DOM manipulation and game logic fundamentals.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/briandalpa/pig-game",
      live: "https://briandalpa.github.io/pig-game",
      situation:
        "I needed a project to strengthen my understanding of core JavaScript. Especially how to manage game state, update the UI dynamically, and handle user interactions without relying on frameworks.",
      task: "The goal was to build a complete mini game from scratch, applying clean logic, and DOM manipulation while keeping the experience smooth and bug free.",
      action:
        "I implemented the full game rules using vanilla JavaScript, structured the logic so every state change instantly reflects on the UI, and added features like active player switching, score tracking, win detection, and a reset system. I also styled the interface to make gameplay intuitive and visually clear.",
      result:
        "The final product is a fully functional. It reinforced my fundamentals in JavaScript, improved my ability to structure interactive logic, and became a strong showcase piece for my portfolio.",
    },
    {
      title: "Bag It Now",
      shortDescription:
        "A Minecraft inspired shopping list app with bold, blocky UI elements and straightforward item management.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Vite", "Vercel"],
      github: "https://github.com/briandalpa/bag-it-now",
      live: "https://bag-it-now.vercel.app/",
      situation:
        "I wanted to build a React project with more personality than a standard todo or shopping list app. The goal was to create something genuinely useful, designed with a Minecraft inspired visual style featuring square edges, chunky shapes, and a playful blocky interface.",
      task: "The goal was to design a shopping list tool where users can add, edit, toggle, and delete items easily, while keeping the experience visually bold and intentionally blocky.",
      action:
        "I built the interface with Tailwind CSS and kept the components boxy and straightforward, giving the app a fun, slightly blocky feel. On the logic side, I used clean React state to handle adding, editing, toggling, and deleting items. I also added sorting options for name, created time, and checked status, along with a small progress indicator that shows how many items are checked. Everything stays intentionally simple so the app feels easy to use and easy to understand.",
      result:
        "The final app has a playful look and works smoothly. The Minecraft style gives it a bit of personality without getting in the way, and the code stays clear and easy to follow. It turned into a small project I am proud to include in my portfolio.",
    },
  ];

  return (
    <>
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 tracking-tight">
            Portfolio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(index)}
              >
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-light mb-4 leading-relaxed">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-chart-2 rounded-full text-sm text-foreground font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View on GitHub"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View Live Demo"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm">Demo</span>
                  </a>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-auto text-primary rounded-full hover:text-primary/80"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(index);
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <Dialog
          open={selectedProject !== null}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl font-semibold mb-4">
                {projects[selectedProject].title}
              </DialogTitle>
              <DialogDescription asChild>
                <div className="space-y-6 text-base">
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-chart-2 rounded-full text-sm text-foreground font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Situation
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {projects[selectedProject].situation}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Task
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {projects[selectedProject].task}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Action
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {projects[selectedProject].action}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Result
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {projects[selectedProject].result}
                    </p>
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-border">
                    <a
                      href={projects[selectedProject].github}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                    <a
                      href={projects[selectedProject].live}
                      className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-accent transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
