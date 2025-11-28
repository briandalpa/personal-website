import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-linear-to-br from-primary to-pastel-green overflow-hidden border-4 border-background shadow-xl">
            <img
              src="src/assets/avatar.png"
              alt="Professional Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Briand Alpa
        </h1>
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-balance">
          Software Engineer
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto animate-fade-in-delay">
          Fullstack web development student learning to build scalable and high
          performance applications
        </p>
        <div className="flex gap-4 justify-center pt-4 animate-fade-in-delay">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("projects");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300"
          >
            View Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contact");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full hover:bg-accent transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById("about");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="absolute bottom-8 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </a>
    </section>
  );
}
