# Portfolio Website

## Overview

This is a personal portfolio website for Rupali Kakadia, a data scientist with experience at companies like Tesla and Microsoft. The application has been converted to a static site built with React, designed to showcase professional experience, skills, projects, and contact information with optimal performance and deployment flexibility.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom theme configuration
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Animations**: Framer Motion for smooth animations and transitions
- **Theme**: Custom dark/light theme system with portfolio-specific colors (navy, yellow accents)

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js 20
- **Database**: PostgreSQL (configured via Drizzle ORM)
- **ORM**: Drizzle ORM for type-safe database operations
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for backend bundling

## Key Components

### Frontend Structure
- **Pages**: Home page with portfolio sections, 404 error page
- **Components**: Modular sections including:
  - Hero section with animated typing effect
  - About section with professional/personal tabs
  - Skills and certifications showcase
  - Work experience timeline
  - Featured projects gallery
  - Education history
  - Contact information with social links
  - Custom cursor and navigation components

### Backend Structure
- **Routes**: Centralized route registration system (currently minimal)
- **Storage**: Abstract storage interface with in-memory implementation
- **Database Schema**: User management schema with authentication structure
- **Development Tools**: Hot reload with Vite integration

## Data Flow

1. **Frontend Rendering**: React components render portfolio sections with static content
2. **Theme Management**: Context-based theme provider manages dark/light mode
3. **Navigation**: Smooth scrolling navigation between sections
4. **Animations**: Framer Motion handles page transitions and scroll-triggered animations
5. **Backend API**: Express server serves static assets and API endpoints (extensible)
6. **Database Operations**: Drizzle ORM provides type-safe database interactions

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Components**: Radix UI primitives, shadcn/ui components
- **Animation**: Framer Motion
- **Routing**: Wouter
- **Data Fetching**: TanStack Query
- **Form Handling**: React Hook Form with Zod validation
- **Date Utilities**: date-fns
- **Utilities**: clsx, class-variance-authority for styling

### Backend Dependencies
- **Server**: Express.js
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM with Zod schema validation
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx, esbuild for building
- **Environment**: dotenv for configuration

### Development Tools
- **Build**: Vite, esbuild
- **TypeScript**: Full type safety across frontend and backend
- **Linting**: ESLint configuration
- **Database**: Drizzle Kit for migrations and schema management

## Deployment Strategy

- **Platform**: Replit with autoscale deployment
- **Build Process**: 
  - Frontend: Vite builds optimized production bundle
  - Backend: esbuild bundles Node.js server
- **Environment**: 
  - Development: tsx with hot reload
  - Production: Node.js with built assets
- **Database**: PostgreSQL 16 with Neon serverless integration
- **Static Assets**: Served from Express with Vite integration in development

## Changelog

```
Changelog:
- June 25, 2025: Successfully converted portfolio to static site while preserving all visual features, animations, and content. Created optimized build output (405KB JS, 62KB CSS) ready for static deployment.
- June 25, 2025: Applied deployment fixes including production environment configuration, session management, health check endpoints, error handling, and production startup script
- June 24, 2025: Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```