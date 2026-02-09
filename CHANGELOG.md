# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- **Dark Mode Support**: Full implementation using `next-themes` and Tailwind CSS theme variables.
- **Theme Toggle**: Added `ModeToggle` component to the Navbar for easy switching between light and dark modes.
- **Accent Button Variant**: New `accent` variant for `Button` component with a gradient from `brand-orange` to `brand-coral`.
- **System Pages**: Initial design for custom `loading.tsx`, `not-found.tsx`, and `error.tsx` pages.

### Changed

- **Branding**: Updated color palette to a warmer aesthetic, using `brand-coral` for primary accents and logos.
- **Navbar**: Refactored to be theme-aware with glassmorphism effects and updated mobile menu.
- **Hero Section**: Modified background particles and gradients to match the new warm color scheme.
- **Services Section**: Updated cards to use `bg-card` and `text-card-foreground` for dark mode compatibility.
- **Process Section**: Standardized the timeline view with theme variables and improved readability.
- **Case Studies Section**: Updated tabbed interface and result cards for better dark mode appearance.
- **Contact Section**: Refactored the form and background gradients to support dark mode.
- **Footer Section**: Updated layout and colors to match the refined design system.
- **UI System**: Base components (`Card`, `Input`, `SectionHeader`, `Button`) now use standard theme variables (`background`, `foreground`, `muted`, `accent`, etc.).

### Fixed

- **Dark Mode Visibility**: Resolved issues where hardcoded white backgrounds (`bg-white`) and dark text colors prevented components from adapting to dark mode.
- **Layout Consistency**: Fixed background color leakage in `app/page.tsx` and system pages.

## [0.1.0] - 2026-02-08

- Initial project setup with Next.js, TypeScript, and Tailwind CSS.
- Basic landing page structure and components.
