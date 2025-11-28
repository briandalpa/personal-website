# Briand Alpa – Personal Website

A modern, responsive personal portfolio built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and and a customized **shadcn UI** component system.

## Features

- ⚡ Fast and lightweight (Vite + React 19)
- 🎨 Custom design with Tailwind CSS
- 🧩 Modular components: Hero, About, Skills, Projects, Experience, Testimonials, Contact
- 📬 Contact form with validation (Zod), toast notifications (Sonner), and Formspree integration for secure, serverless email handling

## UI & Component System

This project uses shadcn/ui as the component foundation, then applies additional stylistic refinements using TweakCN to create a consistent, polished design without heavy custom CSS.

- shadcn UI for accessible, flexible components
- TweakCN for fine-tuning Tailwind utility combinations

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
- Integrated Formspree to handle secure, serverless email submissions for the contact form

## License

MIT
