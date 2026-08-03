# BT Enterprise UI Lab

A modern, enterprise-grade Customer Dashboard built with React, TypeScript, and SCSS. This project serves as a UI laboratory for building and validating reusable enterprise dashboard components, design tokens, and layout patterns.

## Project Overview

BT Enterprise UI Lab provides a production-ready dashboard foundation featuring:

- **Customer Dashboard** — A comprehensive admin view with key performance metrics
- **Stat Cards** — Real-time business KPIs (total customers, pending orders, open tickets, revenue) with trend indicators
- **Recent Customers Table** — Sortable data grid with customer details, status badges, and row actions
- **Enterprise Navigation** — Sticky sidebar with role-based menu, badges, and topbar with breadcrumbs, search, and notifications
- **Design Token System** — Centralized SCSS variables for colors, spacing, radii, and shadows ensuring visual consistency

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI component library |
| **TypeScript 6** | Static type checking & developer experience |
| **Vite 8** | Fast development server & build tooling |
| **SCSS (Sass)** | Advanced styling with variables & modular partials |
| **React Router 7** | Client-side routing |
| **Axios** | HTTP client for API integration |
| **ESLint** | Code quality & linting |

## Folder Structure

```
bt-enterprise-ui-lab/
├── public/                  # Static assets served at root
│   ├── favicon.svg          # App favicon
│   └── icons.svg            # Shared SVG sprite
├── src/
│   ├── api/                 # API client configuration
│   ├── assets/              # Images, fonts, icons
│   ├── components/
│   │   ├── common/          # Shared/reusable components
│   │   ├── dashboard/       # Dashboard-specific components
│   │   │   ├── StatCards.tsx       # KPI stat card grid
│   │   │   └── CustomersTable.tsx  # Recent customers data table
│   │   ├── layout/          # Layout components
│   │   │   ├── Sidebar.tsx         # Navigation sidebar
│   │   │   └── Topbar.tsx          # Header with breadcrumb & search
│   │   └── ui/              # Low-level UI primitives
│   ├── constants/           # App-wide constants
│   ├── context/             # React context providers
│   ├── hooks/               # Custom React hooks
│   ├── layouts/
│   │   └── MainLayout.tsx   # App shell (sidebar + topbar + content)
│   ├── pages/
│   │   └── Dashboard/
│   │       └── Dashboard.tsx # Customer dashboard page
│   ├── routes/
│   │   └── AppRoutes.tsx    # Route definitions
│   ├── services/            # Business logic / API services
│   ├── styles/
│   │   ├── global.scss      # Reset, design tokens, style imports
│   │   ├── layout.scss      # Sidebar, topbar, layout styles
│   │   └── dashboard.scss   # Stat cards, table, pagination styles
│   ├── types/               # Shared TypeScript type definitions
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Root app component
│   └── main.tsx             # Application entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Installation

### Prerequisites

- **Node.js** 18+ (or 20+ recommended)
- **npm** 9+ (comes with Node.js)

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-username/bt-enterprise-ui-lab.git
cd bt-enterprise-ui-lab

# 2. Install dependencies
npm install
```

## Running Locally

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The app will be available at **http://localhost:5173** (or the next available port if 5173 is in use).

## Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Type-check with TypeScript + create production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the codebase |

### Production Build

```bash
# Type-check & build
npm run build

# Preview the production bundle
npm run preview
```

The optimized production files are output to the `dist/` directory.

## Design System

The design tokens are centralized in `src/styles/global.scss`:

- **Colors** — Primary `#2563EB`, Secondary `#7C3AED`, semantic success/warning/danger palettes, and a dark navy sidebar `#04133B`
- **Spacing** — 8px-based scale (4px → 48px)
- **Radii** — SM `6px`, MD `8px`, LG `12px`, Full `999px`
- **Shadows** — SM/MD/LG elevation levels for cards and overlays

## License

This project is for educational and demonstration purposes.