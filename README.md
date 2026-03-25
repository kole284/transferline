# Transferline Website

Modern, responsive multi-page website for a transport service business, built with React, TypeScript, and Vite.

## Overview

This project is a frontend web application for **Transferline**, featuring:

- A landing/home experience with animated hero sections
- Dedicated pages for About and Services
- Responsive desktop and mobile navigation
- Reusable UI sections and cards
- SCSS Modules for component-scoped styling

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router DOM
- SCSS Modules
- ESLint

## Features

- Route-based page structure:
  - `/` Home
  - `/about` About
  - `/services` Services
- Scroll-based UI behavior:
  - Navbar show/hide based on scroll direction
  - Parallax-like motion effects in hero sections
- Responsive navigation:
  - Desktop navbar
  - Mobile burger menu
- Reusable component architecture for sections, cards, and layout parts

## Project Structure

```text
src/
  components/
    burgermenu/
    card/
    card2/
    footer/
    hero/
    hero2/
    hero3/
    hero4/
    hero5/
    hero6/
    navbar/
  constants/
    routes.ts
  pages/
    home/
    about/
    services/
  utils/
    colors.scss
    mediaqueries.scss
  App.tsx
  main.tsx
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available on the local network because Vite is started with `--host`.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Run TypeScript build and Vite production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks

## Notes

- Text content in the UI is currently in Serbian.
- Static image assets are located under `public/assets`.

## License

No license specified yet. Add a `LICENSE` file if you plan to open-source this project.
