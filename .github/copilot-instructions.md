# Agent Instructions — Link Shortener Project

This file is the entry point for all LLM agent instructions. Read this file first, then consult the referenced docs for the specific area you are working in. ALWAYS refer to the relevant .md file BEFORE generating any code:

---

## Project Summary

A full-stack link shortener web application built with Next.js (App Router), TypeScript, Clerk authentication, Drizzle ORM, and a Neon serverless Postgres database. The UI is composed with shadcn/ui components styled via Tailwind CSS v4.

---

## Non-Negotiable Rules

1. **App Router only.** All routes live under `app/`. Never create a `pages/` directory.
2. **Server Components by default.** Only add `"use client"` when browser APIs or React hooks are required.
3. **No `any`.** Use `unknown` and narrow the type if truly unknown.
4. **Tailwind for all styles.** No CSS modules, styled-components, or inline `style` props for layout/theming.
5. **`cn()` for all dynamic class names.** Import from `@/lib/utils`.
6. **Path aliases over deep relative imports.** Use `@/` aliases defined in `tsconfig.json`.
7. **Drizzle ORM for all database access.** No raw SQL strings; no other ORM or query builder.
8. **Clerk for all authentication.** No custom auth logic, sessions, or password handling.
9. **Never commit secrets.** Environment variables go in `.env.local` only.
10. **Run `npm run lint` before finalizing any change.** Fix all ESLint errors.

---

## Docs

| Doc            | Topic                                          |
| -------------- | ---------------------------------------------- |
| `docs/auth.md` | Clerk authentication, route protection, modals |
| `docs/ui.md`   | shadcn/ui component standards and usage        |

---

## Quick-Reference: Key Files

| File                | Purpose                                                |
| ------------------- | ------------------------------------------------------ |
| `app/layout.tsx`    | Root layout — `ClerkProvider`, fonts, global styles    |
| `app/page.tsx`      | Home page                                              |
| `db/index.ts`       | Drizzle client (`export { db }`)                       |
| `db/schema.ts`      | All table definitions                                  |
| `lib/utils.ts`      | `cn()` utility                                         |
| `drizzle.config.ts` | Drizzle Kit config (dialect, schema path, output path) |
| `components.json`   | shadcn/ui config (style, aliases, icon library)        |
