# Developer Portfolio

A modern React portfolio website built with Vite. The app showcases a developer's skills, experience, projects, certifications, education, achievements, blog, and contact details in an animated, responsive single-page layout.

## Overview

This project is a personal portfolio site built with React and Vite. It includes:

- Animated hero and landing sections
- Custom cursor and mouse gradient effects
- Particle background animation
- Smooth fade-in loading screen
- Section-based portfolio layout with responsive design

## Features

- Mobile-friendly responsive layout
- Animated page transitions with Framer Motion
- Custom cursor and mouse-gradient interaction
- Particle background using `tsparticles`
- Animated counters and section reveals
- Portfolio sections for Skills, Experience, Projects, Certifications, Education, Achievements, Blog, and Contact
- Navbar navigation and footer

## Tech Stack

- React 19
- Vite
- Framer Motion
- React Icons
- React Type Animation
- React CountUp
- React Intersection Observer
- tsparticles
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Scripts

- `npm run dev` - start Vite development server
- `npm run build` - build production bundle
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint

## Project Structure

- `src/App.jsx` - application entry point and section layout
- `src/index.css` - global styles
- `src/components/` - reusable UI components and portfolio sections
  - `Navbar.jsx`
  - `LoadingScreen.jsx`
  - `CustomCursor.jsx`
  - `ParticleBackground.jsx`
  - `Hero.jsx`
  - `About.jsx`
  - `Skills.jsx`
  - `Experience.jsx`
  - `Projects.jsx`
  - `Certifications.jsx`
  - `Education.jsx`
  - `Achievements.jsx`
  - `Blog.jsx`
  - `Contact.jsx`
  - `Footer.jsx`
  - `MouseGradient.jsx`

## Notes

This repository is intended as a developer portfolio showcase with animation effects, clean section layout, and modern frontend interactions.
