# jessamarie.github.io

Personal portfolio site for Jessica Marie — built with Next.js, React, and Chakra UI.

## Tech Stack

- **Next.js 16** — App Router
- **React 19**
- **Chakra UI 3** — component library
- **TypeScript 5**
- **ESLint 9** — flat config

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/app/
  components/     # Shared components (Navbar, GithubCard)
  projects/       # Projects page
  globals.css     # Global styles
  layout.tsx      # Root layout
  page.tsx        # Home page
  providers.tsx   # Chakra UI + emotion SSR provider
```
