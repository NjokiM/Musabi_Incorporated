# Musabi_Incorporated

The website of Musabi Incorporated — a multidisciplinary African design, research, development and innovation institution. One institution, six capabilities: Architecture Studio, Creative, Urban Lab, Development, Foundation and Ventures.

> Building a Resilient Future — *the parts make the whole.*

musabi-incorporated/
│
├── README.md
├── index.html / /home
│
├── /about
│   ├── /our-story
│   ├── /our-belief
│   ├── /our-vision
│   ├── /our-mission
│   ├── /our-values
│   ├── /how-we-work
│   └── /our-people
│
├── /entities
│   │
│   ├── /architecture-studio
│   │   ├── /overview
│   │   ├── /services
│   │   ├── /projects
│   │   ├── /research
│   │   └── /contact
│   │
│   ├── /creative
│   │   ├── /overview
│   │   ├── /services
│   │   ├── /work
│   │   └── /contact
│   │
│   ├── /urban-lab
│   │   ├── /overview
│   │   ├── /research
│   │   ├── /urban-projects
│   │   ├── /publications
│   │   └── /insights
│   │
│   ├── /development
│   │   ├── /overview
│   │   ├── /projects
│   │   ├── /opportunities
│   │   └── /partnerships
│   │
│   ├── /foundation
│   │   ├── /overview
│   │   ├── /programmes
│   │   ├── /community
│   │   ├── /impact
│   │   └── /get-involved
│   │
│   └── /ventures
│       ├── /overview
│       ├── /portfolio
│       ├── /opportunities
│       └── /partnerships
│
├── /projects
│   ├── /architecture
│   ├── /creative
│   ├── /urban
│   ├── /development
│   ├── /foundation
│   └── /ventures
│
├── /journal
│   ├── /ideas
│   ├── /research
│   ├── /projects
│   ├── /cities
│   ├── /design
│   ├── /sustainability
│   └── /community
│
├── /moses-musabi
│   ├──/profile
│   ├──/architecture
│   ├──/urban-policy
│   ├── /research
│   ├── /writing
│   ├── /projects
│   ├── /speaking
│   └── /cv
│
├── /careers
│
└── /contact


## Technology

- **Next.js 15** (App Router, fully static) + **TypeScript**
- **Tailwind CSS v4** with brand tokens (Brand Bible v1.0 colour system)
- Barlow + Cormorant Garamond, self-hosted via `next/font`
- No CMS yet: content lives in `lib/site.ts` (pages) and `content/` (projects, articles) — routes generate from data

## Getting started

```bash
npm install --include=dev
npm run dev      # local development
npm run build    # production build (must pass before merge)
npm start        # serve the production build
```

## Repository structure

```
app/           # routes (App Router) + sitemap.ts, layout, styles
components/    # shared component library (Navbar, Motif, PageShell, cards…)
content/       # project and article databases (content model in lib/content-model.ts)
lib/           # site structure + page copy (lib/site.ts), content schemas
documentation/ # masterplan, sitemap + content architecture, cost plan, design system
public/        # static assets
```

## Documentation

- `documentation/01-WEBSITE-MASTERPLAN.md` — strategy, technology, security, operations, growth
- `documentation/02-SITEMAP-CONTENT-ARCHITECTURE.md` — URL map, content model, user journeys
- `documentation/03-INFRASTRUCTURE-COST-PLAN.md` — domains, hosting, email, recurring costs
- `documentation/DESIGN-SYSTEM.md` — the digital translation of the Brand Bible

## Publishing workflow

Adding a project: append a `Project` entry to `content/projects.ts` (schema per blueprint §7). Adding an article: append an `Article` entry to `content/articles.ts`. Archive and detail pages generate automatically. Page copy edits go through `lib/site.ts`.

Environments: feature branches get Vercel preview deployments (staging); `main` deploys to production. Never experiment directly on production.

---

© Musabi Incorporated. All rights reserved. Brand identity, motif system and site content are the property of Musabi Incorporated.
