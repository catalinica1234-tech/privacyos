# PRIVACYOS

**The intelligence layer for digital privacy.**

PRIVACYOS is a modular privacy-intelligence SaaS foundation built with **Next.js, React, TypeScript and Tailwind CSS**. This repository contains **Phase 1 — Foundation**, focused on the interface, navigation and controlled demonstration flows.

## Published application

- **Production preview:** https://privacyos-59ot.vercel.app/
- **Repository:** https://github.com/catalinica1234-tech/privacyos
- **Branch:** `main`
- **Current phase:** Foundation / Demo

## Team

| Integrante | Responsabilidad |
|---|---|
| Catalina Romero | Frontend, integración y revisión |
| Melisa Ibáñez | Documentación, investigación y propuesta |
| Simón Salgado | Presentación, arquitectura y carta Gantt |

> Los nombres de usuario de GitHub deben agregarse cuando el equipo los confirme. No se inventan identificadores.

## Phase 1 scope

- Premium responsive landing page.
- Mock authentication UI.
- Application shell and responsive navigation.
- Dashboard with centralized demo data.
- Scanner configuration UI and controlled demo scanning flow.
- Demo analysis result.
- Risks, regulatory intelligence, privacy rights, profile and settings pages.
- Dark/light theme.
- Reusable UI and domain components.
- Loading, empty and error states.

## Current limitations

The following capabilities are **not active in Foundation**:

- Real authentication and session management.
- Database persistence and Prisma integration.
- Live website scanning.
- AI analysis engine.
- Production regulatory and risk engines.
- Production Privacy Score calculation.

The dashboard and scanner use controlled demo values. Entering a URL in the scanner does not request or inspect the external website.

## Technology stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts
- Lucide React
- Zod

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

For static type validation:

```bash
npm run typecheck
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

Login and registration forms provide mock client-side navigation. The scanner launches a controlled demo flow, while the analysis page reads centralized demo data. No external website is actually scanned in this phase.

## Documentation

Technical documentation is located in `docs/`:

- [`docs/architecture-foundation.md`](docs/architecture-foundation.md) — logical architecture of Foundation.
- [`docs/audit-hito1-foundation.md`](docs/audit-hito1-foundation.md) — initial audit and verified evidence.
- [`docs/requirements-traceability.md`](docs/requirements-traceability.md) — initial requirement traceability matrix.
- [`docs/manual-validation-checklist.md`](docs/manual-validation-checklist.md) — manual browser validation checklist.
- [`docs/deployment.md`](docs/deployment.md) — published environment and deployment evidence requirements.

Academic deliverables such as the report, presentation, team contract and Gantt chart will be incorporated after the team provides their final versions.

## Quality checks

GitHub Actions is configured to run on pushes and pull requests to `main`:

- `npm install`
- `npm run lint`
- `npm run typecheck`
- `npm run build`

The repository must not describe these checks as successful until an actual workflow run confirms the result.

## Architecture direction

The UI is separated from future modules for Scanner, AI, Regulatory Engine, Risk Engine and Scoring. Later phases can replace demo data and mock authentication without redesigning the product shell.
