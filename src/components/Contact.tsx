import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z.email("Invalid email address"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(1000, "Message must be less than 1000 characters"),
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      const validated = contactSchema.parse(formData);

      const response = await fetch("https://formspree.io/f/mqavqnen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validated),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast("Message sent!", {
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors as Record<
          string,
          string[]
        >;
        const formattedErrors: Record<string, string> = {};

        Object.entries(fieldErrors).forEach(([field, messages]) => {
          formattedErrors[field] = messages?.[0] || "Invalid field";
        });

        setErrors(formattedErrors);
      } else {
        toast("Error sending message", {
          description: "Please try again later.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:briand.devs@gmail.com",
      label: "briand.devs@gmail.com",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/briandalpa",
      label: "github.com/briandalpa",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/briandalpa",
      label: "linkedin.com/in/briandalpa",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-4 py-20 bg-surface"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight">
          Get in Touch
        </h2>
        <p className="text-xl text-muted-foreground font-light mb-12 leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out
          through the form below or connect via social media.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form
              action="https://formspree.io/f/mqavqnen"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`min-h-[150px] ${
                    errors.message ? "border-destructive" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:bg-surface-elevated transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <div className="font-medium">{link.name}</div>
                    <div className="text-sm text-muted-foreground font-light">
                      {link.label}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center text-muted-foreground font-light">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
