# Nova Sites Web App

## Project Overview

Nova Sites is a web development agency based in Musrata, Libya, founded by Yousef Arebi and Mustafa. This is their marketing website built with Next.js.

## Tech Stack

- **Framework:** Next.js 16.2.4 (App Router)
- **React:** 19.2.4
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript

## Project Structure

```
projects/my-web-app/
├── app/
│   ├── globals.css      # Global styles with gradient theme
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Homepage (single-page marketing site)
│   ├── privacy/
│   │   └── page.tsx     # Privacy Policy page
│   └── terms/
│       └── page.tsx     # Terms of Conditions page
├── public/
│   └── logo.jpeg        # Nova Sites logo
├── package.json
└── tsconfig.json
```

## Key Features

- Single-page marketing site with smooth scroll navigation
- Sections: Hero, Services, Stats, About, Process, Testimonial, Contact
- Responsive design with mobile menu
- Gradient-based visual theme (indigo → cyan → amber)
- Contact email: yousef.hsarebi@gmail.com

## Development

```bash
npm run dev    # Start development server on http://localhost:3000
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```

## Important Notes

- This uses Next.js 16 which may have breaking changes from earlier versions
- Always refer to `node_modules/next/dist/docs/` for current API documentation
- See AGENTS.md for version-specific guidance
