# PRIVACYOS

**The intelligence layer for digital privacy.**

PRIVACYOS is a modular privacy-intelligence SaaS foundation built with Next.js, React, TypeScript and Tailwind CSS. This repository contains **Phase 1 — Foundation** only.

## Phase 1 scope

- Premium responsive landing page
- Mock authentication UI
- Application shell and responsive navigation
- Dashboard with centralized demo data
- Scanner configuration UI and demo scanning experience
- Demo analysis result
- Risks, regulatory intelligence, privacy rights, profile and settings pages
- Dark/light theme
- Reusable UI and domain components
- Loading, empty and error states

## Not implemented yet

No real authentication, database, Prisma, scanner, AI engine, regulatory rules engine, risk engine or production Privacy Score calculation are active in this phase. Demo values are clearly labeled as demo content.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production build:

```bash
npm run build
npm run start
```

## Main routes

- `/`
- `/login`
- `/register`
- `/dashboard`
- `/dashboard/scanner`
- `/dashboard/scanner/progress`
- `/dashboard/analyses`
- `/dashboard/analyses/demo-001`
- `/dashboard/risks`
- `/dashboard/regulations`
- `/dashboard/rights`
- `/dashboard/profile`
- `/dashboard/settings`

## Demo behavior

Login/register forms use mock client-side navigation only. The scanner launches a controlled demo flow and the analysis page reads centralized demo data. No external website is actually scanned.

## Architecture direction

The UI is intentionally separated from future modules for Scanner, AI, Regulatory Engine, Risk Engine and Scoring. Phase 2 can replace the demo data and mock auth without redesigning the product shell.

## Hito 1 — Documentation técnica

La documentación técnica disponible en este repositorio se encuentra en `docs/`:

- [`docs/architecture-foundation.md`](docs/architecture-foundation.md): arquitectura lógica de la fase Foundation.
- [`docs/audit-hito1-foundation.md`](docs/audit-hito1-foundation.md): auditoría inicial, evidencias y pendientes verificables.

Los documentos académicos que se estén preparando por separado se incorporarán y revisarán posteriormente, sin presentarlos como finalizados antes de recibirlos.
