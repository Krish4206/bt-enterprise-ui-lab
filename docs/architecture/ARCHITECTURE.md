# Application Architecture

## 1. Overview

BT Enterprise UI Lab is a React + TypeScript frontend application built with Vite.

The current application provides a customer dashboard UI and follows a layered frontend structure separating application entry, routing, layout, pages, and reusable components.

The current dashboard implementation is UI-focused and uses static/mock data. API integration and backend functionality are outside the scope of the current implementation.

---

## 2. Application Flow

The current application flow is:

main.tsx
  |
  v
App.tsx
  |
  v
BrowserRouter
  |
  v
AppRoutes.tsx
  |
  v
MainLayout.tsx
  |
  v
Dashboard.tsx
  |
  v
Dashboard Components

---

## 3. Application Entry

### `src/main.tsx`

Responsibilities:

- Application bootstrap
- React root creation
- StrictMode configuration
- Global stylesheet loading
- Rendering the root `App` component

---

## 4. Application Root

### `src/App.tsx`

Responsibilities:

- Provides the application-level `BrowserRouter`
- Loads the centralized route configuration through `AppRoutes`

---

## 5. Routing

### `src/routes/AppRoutes.tsx`

Responsibilities:

- Defines application routes
- Connects routes with page components
- Applies `MainLayout` to the dashboard route

Current route:

- `/` -> `Dashboard` rendered inside `MainLayout`
---

## 6. Layout Layer

### `src/layouts/MainLayout.tsx`

Responsibilities:

- Provides the main application shell
- Renders the sidebar
- Renders the top navigation
- Manages responsive sidebar open/close state
- Provides the page content area

Layout components:

- `src/components/layout/Sidebar.tsx`
- `src/components/layout/Topbar.tsx`

---

## 7. Page Layer

### `src/pages/Dashboard/Dashboard.tsx`

Responsibilities:

- Composes the Customer Dashboard page
- Renders the page header
- Renders the Add Customer UI control
- Composes dashboard-specific components

Current dashboard components:

- `StatCards`
- `CustomersTable`

---

## 8. Dashboard Components

### `src/components/dashboard/StatCards.tsx`

Responsibilities:

- Displays customer dashboard statistics
- Uses static/mock statistics
- Renders reusable statistic card UI

### `src/components/dashboard/CustomersTable.tsx`

Responsibilities:

- Displays recent customer information
- Uses static/mock customer data
- Displays customer status
- Displays table actions
- Displays pagination UI

---

## 9. Current Data Strategy

The current dashboard is intentionally implemented with static/mock data.

Current scope does not include:

- API integration
- Backend services
- Database integration
- Authentication
- CRUD operations
- Server-side pagination

Dynamic functionality will be introduced through separate requirements/stories when explicitly requested.

---

## 10. Architecture Principles

The project follows these principles:

1. Reuse the existing project structure before introducing new architectural patterns.
2. Keep page composition separate from reusable UI components.
3. Keep application layout responsibilities separate from page-specific responsibilities.
4. Avoid unnecessary refactoring when the existing implementation satisfies the requirement.
5. Implement only the scope defined by the requirement.
6. Do not introduce API or backend functionality unless explicitly required.
7. New features should follow existing project conventions.
8. Large UI requirements should be divided into small, independently deliverable stories.

---

## 11. Feature Development Principle

A complete Figma page should not automatically be treated as one development story.

Large requirements should be divided into smaller stories with:

- Clear scope
- Acceptance criteria
- Defined dependencies
- Independently testable outcomes
- Separate development branches
- Code review
- QA validation

This allows features to be developed, reviewed, tested, and delivered incrementally.