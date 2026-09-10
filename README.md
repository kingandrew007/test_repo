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

## Team Git Workflow

We follow a strict hierarchical branching strategy to prevent conflicts and maintain clear code ownership.

### Branch Structure
- `main`: Production-ready branch. Only merges via release PRs.
- `develop`: Main integration branch.
- `feature/*`: **Shared integration branches** for major features (e.g., `feature/habits`, `feature/dashboard`). Do **NOT** push directly to these branches.
- `dev/*`: **Developer feature branches** created by individuals from a `feature/*` branch (e.g., `dev/habit-card`).

### PR Flow
```text
dev/* (e.g., dev/habit-card)
  ↓ PR
feature/* (e.g., feature/habits)
  ↓ PR
develop
  ↓ Release PR
main
```

### Example Developer Workflow
1. Fetch the latest branches: `git fetch --all`
2. Check out the shared feature branch you are working on: `git checkout feature/habits`
3. Pull latest changes: `git pull origin feature/habits`
4. Create your personal dev branch for your specific task: `git checkout -b dev/habit-card`
5. Do your work, commit, and push: `git push origin dev/habit-card`
6. Open a Pull Request from `dev/habit-card` into `feature/habits`.
