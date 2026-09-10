# HabitLab

HabitLab is a modern habit-tracking application built with React 19, TypeScript, and Vite.

## Architecture

This project follows a strict feature-based architecture to scale efficiently.

### Folder Structure
- `src/components/`: Genuinely reusable UI components across features (e.g., buttons, form inputs, charts).
- `src/features/`: Feature-specific UI and business logic (e.g., dashboard, habits, goals).

## Development

1. Run `npm ci` to install dependencies.
2. Copy `.env.example` to `.env`.
3. Run `npm run dev` to start the development server.

## Scripts
- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run lint` - Run linter
- `npm run test` - Run tests

## CI/CD
All PRs must pass the GitHub Actions CI pipeline, which includes type checking, linting, tests, and a production build.
