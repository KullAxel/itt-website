# IT Technicians (ITT) Website - Project Context

This document provides essential context for the Cursor AI developer agent working on the IT Technicians (ITT) website. It will be updated as the project progresses.

## Project Overview

* **Project Name:** IT Technicians (ITT) Website
* **GitHub Repository URL:** `[To be filled in once created by Facilitator/User after Task 0.1]`
* **Local Setup Commands:**
    * `git clone [URL_FROM_ABOVE]`
    * `npm install` (or equivalent based on Astrowind documentation)
    * `npm run dev` (or equivalent based on Astrowind documentation)
* **Core Technologies:**
    * Astro (Framework)
    * Tailwind CSS (Styling)
    * Markdown (Content, potentially MDX for blog if supported/used by Astrowind)
* **Primary Goal:** Build a professional, conversion-focused website based on the Astrowind template, accurately reflecting ITT's business and marketing goals as outlined in the "ITT Website Development Plan" and "itt_brief.md".
* **Base Template:** Astrowind (GitHub: https://github.com/onwidget/astrowind)

## Astrowind Template Structure & Conventions

*   **Key Astrowind Directories & Files (assuming project root is `itt-website/`):**
    *   **Pages:** `itt-website/src/pages/` - Files (e.g., `.astro`, `.md`, `.mdx`) in this directory automatically become routes.
    *   **Reusable Components:** `itt-website/src/components/` - Contains `.astro` components for use in pages and layouts.
    *   **Layouts:** `itt-website/src/layouts/` - Contains `.astro` files that define the overall structure for different types of pages.
    *   **Static Assets (source, processed by build):** `itt-website/src/assets/`
        *   **Global Styles:** `itt-website/src/assets/styles/tailwind.css` (includes Tailwind directives, custom utilities, and component styles using CSS variables).
    *   **Static Assets (public, copied as-is):** `itt-website/public/` - For files like `favicon.ico`, `robots.txt`.
    *   **Content Collections:** `itt-website/src/content/` - Used by Astro's content collections API (e.g., for blog posts).
    *   **Data Files:** `itt-website/src/data/` - For storing global or shared data (e.g., JSON, YAML).
    *   **Main Astro Configuration:** `itt-website/astro.config.ts`
    *   **Astrowind Theme Configuration:** `itt-website/src/config.yaml` - Central configuration for the `astrowind` theme integration.
    *   **Tailwind CSS Configuration:** `itt-website/tailwind.config.js`
*   **Page Creation Process:** New pages are created by adding `.astro`, `.md`, or `.mdx` files within `itt-website/src/pages/`. The file system structure directly maps to URL routes. Pages typically import layouts and components.
*   **Component Usage:** `.astro` components in `itt-website/src/components/` are imported (e.g., `import MyComponent from '~/components/MyComponent.astro';` where `~` is an alias for `itt-website/src/`) and used with JSX-like syntax in pages, layouts, or other components.
*   **Styling Approach:**
    *   Primarily **Tailwind CSS** utility classes applied directly in markup.
    *   `itt-website/tailwind.config.js` customizes Tailwind, extends its theme using CSS variables (e.g., `primary: 'var(--aw-color-primary)'`) for theming.
    *   Actual values for CSS variables are likely driven by `itt-website/src/config.yaml` via the `astrowind` integration.
    *   `itt-website/src/assets/styles/tailwind.css` includes Tailwind directives and custom styles using `@apply` and CSS variables.
    *   Dark mode is class-based.

## Key Project Documents for Reference:

* `itt_brief.md`: Contains core business information, services, target audience, etc.
* `ITT Website Development Plan.txt`: Outlines all phases and tasks for website development.
* `IT Technicians Business Plan Long.pdf`: Provides in-depth business details.

## Key Website Pages

*   `/` (Homepage)
*   `/about` (About Us)
*   `/services` (Services Overview)
*   `/services/dedicated-technicians` (Dedicated Technicians Service Page)
*   `/services/hourly-technician-hire` (Hourly Technician Hire Service Page)
*   `/services/emergency-it-support` (Emergency IT Support Service Page)
*   `/services/it-project-management` (IT Project Management Service Page)
*   `/industries` (Industries Served - Overview)
*   `/industries/multi-location-retail` (Multi-Location Retail Industry Page)
*   `/industries/healthcare-clinics` (Healthcare Clinics Industry Page)
*   `/industries/professional-services` (Professional Services Industry Page)
*   `/industries/manufacturing-logistics` (Manufacturing & Logistics Industry Page)
*   `/case-studies` (Case Studies/Success Stories)
*   `/blog` (Blog Main Page)
*   `/blog/[slug]` (Individual Blog Posts, e.g., `/blog/proactive-it-maintenance-benefits`)
*   `/contact` (Contact Us)
*   `/privacy-policy` (Privacy Policy)
*   `/terms-of-service` (Terms of Service - placeholder for future)
*   `/careers` (Careers Page - placeholder for future)
*   `/faq` (FAQ Page - placeholder for future)
*   `/client-portal` (Client Portal Login - placeholder for future)

## Development Principles (from "ITT Website Development Plan")

* **Small, Atomic Tasks:** Each prompt will focus on the smallest logical coding task.
* **Clear Context:** Prompts will provide relevant excerpts and references.
* **Specific Instructions:** Desired outcomes, files, components, and content will be clearly stated.
* **Iterative Refinement:** Be prepared for feedback and revisions on your output.
