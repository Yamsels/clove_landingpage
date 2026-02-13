# Clove Automations - Landing Page

![Project Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Framework](https://img.shields.io/badge/Framework-Next.js_15-black)
![Language](https://img.shields.io/badge/Language-TypeScript-blue)
![Styling](https://img.shields.io/badge/Styling-Tailwind_CSS_4-38bdf8)

A high-performance, modern landing page for an automation agency, built with state-of-the-art web technologies. This project showcases a sleek, dark-mode-first design with complex animations and interactive components.

## 🚀 About the Project

This landing page was developed to serve as the main entry point for **Clove Automations**, highlighting services such as workflow automation, AI agents, and CRM integration. The design follows a heavy "bento-grid" aesthetic with glassmorphism effects and smooth, scroll-triggered animations.

## ✨ Key Features

- **Modern UI/UX**:
  - **Dynamic Bento Grid Layouts** for services and features.
  - **Dark Mode Support**: Fully integrated theme switching (system/dark/light) using `next-themes`.
  - **Glassmorphism**: Elegant blur effects on navigation and cards.
  - **Responsive Design**: Mobile-first architecture ensuring perfect rendering on all devices.

- **Advanced Interactivity**:
  - **Framer Motion Animations**: Scroll-triggered fade-ins, slide-ups, and staggered element reveals.
  - **Infinite Marquee**: Smooth auto-scrolling tech stack showcase.
  - **Interactive Timelines**: Vertical process visualization.
  - **Tabbed Interfaces**: Filterable case study showcase.

- **Robust Functional Components**:
  - **Smart Contact Form**: Multi-step validation using `zod` and `react-hook-form`.
  - **Backend Integration**: Secure server-side API route forwarding submissions to an **n8n webhook**.
  - **Toast Notifications**: Real-time user feedback via `sonner`.
  - **SEO Optimized**: Metadata API integration, OpenGraph images, and semantic HTML structure.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Core**: React 19, TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/), `clsx`, `tailwind-merge`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: React Hook Form, Zod
- **UI Components**: Radix UI primitives (via `shadcn/ui` patterns)

## ⚡ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/clove_landingpage.git
   cd clove_landingpage
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Rename `.env.example` to `.env` and update the values:

   ```bash
   cp .env.example .env
   ```

   _Required variables:_
   - `N8N_WEBHOOK_URL`: The webhook URL where contact form data is sent.
   - `NEXT_PUBLIC_SITE_URL`: The canonical URL of the site (for SEO/OG).

4. **Run the development server:**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
clove_landingpage/
├── app/                  # App Router pages and global layouts
│   ├── api/              # Server-side API routes (Contact form handler)
│   ├── globals.css       # Tailwind 4 CSS config and global variables
│   ├── layout.tsx        # Root layout with ThemeProvider and Font config
│   └── page.tsx          # Main landing page assembling all sections
├── components/
│   ├── ui/               # Reusable base components (Button, Card, Input...)
│   ├── sections/         # Page sections (Hero, Services, Contact, etc.)
│   └── navbar.tsx        # Responsive navigation bar
├── public/               # Static assets (images, videos, icons)
├── lib/                  # Utility functions (cn helper)
└── ...
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for **Clove Automations**.
