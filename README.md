# Briand Alpa – Personal Website

A modern, responsive personal portfolio built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## Features

- ⚡ Fast and lightweight (Vite + React 19)
- 🎨 Custom design with Tailwind CSS
- 🧩 Modular components: Hero, About, Skills, Projects, Experience, Testimonials, Contact
- 📬 Contact form with validation (Zod) and toast notifications (Sonner)
- 🧭 Routing with React Router
- 🖼️ SVG icons via Lucide
- ✨ Animations with tw-animate-css

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation & Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/briandalpa/personal-website.git
   cd personal-website
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  App.tsx
  pages/
    Index.tsx
    NotFound.tsx
  components/
    Hero.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    Experience.tsx
    Testimonials.tsx
    Contact.tsx
    ui/
      button.tsx
      input.tsx
      textarea.tsx
      dialog.tsx
      sonner.tsx
  hooks/
    use-mobile.tsx
  lib/
    utils.ts
public/
  assets/
    avatar.png
```

## Contact Form

- Validates input with Zod
- Shows toast notifications with Sonner
- (Optional) Integrate with Formspree, Resend, or your own backend for email delivery

## License

MIT
