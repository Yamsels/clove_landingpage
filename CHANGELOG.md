# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-02-12

### Added

#### Core & Architecture

- **Framework Initialization**: Setup generic Next.js 15 project with React 19, TypeScript, and Tailwind CSS v4.
- **Design System**:
  - Defined custom color palette (`brand-coral`, `brand-orange`) in `globals.css`.
  - Implemented CSS variables for semantic sizing and colors.
  - configured `next-themes` for system-aware Dark Mode support.
  - Added custom fonts (Inter/Plus Jakarta Sans) via `next/font`.

#### Components

- **Navigation**:
  - `Navbar`: Responsive header with glassmorphism effect, scroll-aware background, and mobile menu drawer (Sheet).
  - `Footer`: Comprehensive site footer with navigation links, social icons, and copyright info.
  - `ThemeToggle`: Interactive button to switch between Light, Dark, and System themes.
- **Sections**:
  - `Hero`: High-impact landing area featuring an **autoplay video logo** (`logo_animated_png.mp4`) with looped playback and particle effects.
  - `Services`: Bento-grid style layout showcasing core offerings with hover effects.
  - `Process`: Step-by-step vertical timeline vizualizing the client workflow.
  - `CaseStudies`: Interactive tabbed interface filtering projects by category (Automations, CRM, AI Agents).
  - `TechStack`: Infinite scrolling marquee displaying used technologies and partner logos.
  - `FAQ`: Accordion-based frequently asked questions section.
  - `Contact`: Functional contact form.

#### Features & Interactivity

- **Animations**: integrated `framer-motion` for scroll-triggered reveal animations (fade-in, slide-up) on all sections.
- **Form Handling**:
  - Created multistep contact form using `react-hook-form` and `zod` for validation.
  - Integrated `sonner` for toast notifications (success/error feedback).
- **Backend Integration**:
  - Developed `api/contact` API route to securely forward form submissions to an **n8n webhook**.
- **SEO & Optimization**:
  - configured Metadata API for dynamic titles and descriptions.
  - Added `sitemap.xml` and `robots.txt` for search engine indexing.
  - Implemented OpenGraph (OG) image generation for social sharing.
  - Created custom `loading.tsx`, `error.tsx`, and `not-found.tsx` systems pages.

### Changed

- Refactored monolithic page structure into modular components under `components/sections/`.
- Updated global typography and button variants (solid, outline, accent, ghost).
- Optimized asset loading by moving large media files (`logo_animated_png.mp4`, `logo_fhd_png.png`) to `public/` and cleaning up source directories.

### Fixed

- Resolved hydration issues with the Theme Toggle on initial load.
- Fixed constraints on the Video Logo to ensuring it plays inline on mobile devices (`playsInline`).
- Adjusted z-index stacking in `Hero` section to prevent video overlaying text.
- Corrected layout shifts in `CaseStudies` tabs when switching categories.

## [0.1.0] - 2026-02-08

### Added

- Initial project scaffolding.
- Basic routing and layout structure.
- Installation of core dependencies (`lucide-react`, `clsx`, `tailwind-merge`).
