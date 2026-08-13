# Development Guidelines

## 1. Purpose

This document defines the development workflow and conventions for the BT Enterprise UI Lab.

The goal is to keep development consistent, traceable, reviewable, and aligned with the existing project architecture.

---

## 2. Development Workflow

Every feature should follow this general workflow:

1. Understand the requirement.
2. Review the acceptance criteria.
3. Review the relevant Figma/design scope.
4. Inspect the existing code before making changes.
5. Identify reusable components and existing patterns.
6. Create a feature branch.
7. Implement only the defined scope.
8. Run local validation.
9. Commit the changes.
10. Push the branch.
11. Create a Pull Request.
12. Address review comments.
13. Complete QA validation.
14. Merge only after required approvals.

---

## 3. Branching Strategy

The project currently uses the following main branches:

- `main` - production branch
- `develop` - development integration branch
- `uat` - UAT/staging branch

Feature and technical work should be developed in separate branches.

### Branch naming convention

Use:

`<type>/<jira-id>-<short-description>`

Examples:

- `feature/BT-001-customer-search`
- `feature/BT-002-customer-details`
- `fix/BT-003-mobile-layout`
- `chore/TECH-001-project-foundation`

---

## 4. Development Scope

Developers should implement only what is defined in the assigned requirement.

Do not introduce additional functionality without a requirement or explicit approval.

Examples:

- A UI-only story should not automatically include API integration.
- An API story should not automatically include unrelated UI redesign.
- A bug fix should not include unrelated refactoring.
- A Figma page should be divided into smaller deliverable stories when the scope is too large.

---

## 5. Existing Codebase First

Before creating new components or files:

1. Search for existing reusable components.
2. Review existing styling patterns.
3. Review existing naming conventions.
4. Check whether similar functionality already exists.
5. Extend the existing architecture when appropriate.

Avoid creating duplicate components or introducing new patterns without a clear reason.

---

## 6. UI Development

For UI stories:

- Follow the approved Figma/design.
- Match layout, spacing, typography, colors, and states.
- Preserve existing responsive behavior.
- Follow the existing styling approach.
- Reuse existing UI components where applicable.
- Implement responsive behavior required by the acceptance criteria.

Do not redesign the UI based on personal preference unless the requirement explicitly allows it.

---

## 7. React and TypeScript

Follow the existing project conventions.

Prefer:

- Functional React components
- TypeScript types/interfaces where appropriate
- Reusable components
- Clear component responsibilities
- Meaningful naming
- Small and maintainable components

Avoid:

- Unnecessary `any`
- Unnecessary duplication
- Unnecessary state
- Large components with unrelated responsibilities
- Unused imports or variables
- Unnecessary dependencies

---

## 8. Local Validation

Before creating a Pull Request, run the project's available validation commands.

At minimum:

```text
npm run lint
npm run build

---

## 9. Commit Convention

Commits should clearly describe the change.

Examples:

- `feat: add customer search UI`
- `fix: correct mobile sidebar behavior`
- `refactor: extract customer table actions`
- `test: add customer table tests`
- `chore: update project documentation`

Keep commits focused and avoid mixing unrelated changes.

---

## 10. Pull Request

Every feature or significant technical change should be submitted through a Pull Request.

A PR should include:

- Jira/story reference
- Summary of changes
- Testing performed
- Relevant screenshots for UI changes
- Known limitations or follow-up work
- Confirmation that acceptance criteria were addressed

Do not include unrelated changes in the PR.

---

## 11. Code Review

Code review is required before merging protected branches.

Reviewers may evaluate:

- Requirement compliance
- Acceptance criteria
- Architecture
- Reusability
- TypeScript quality
- UI accuracy
- Responsive behavior
- Maintainability
- Error handling
- Testing
- Unnecessary changes

Review outcomes may be:

- Approved
- Changes requested
- Rejected

All requested changes should be addressed before final approval.

---

## 12. QA

After development and code review, the feature must be validated against its acceptance criteria.

QA should verify:

- Functional behavior
- UI behavior
- Responsive behavior
- Positive scenarios
- Negative scenarios where applicable
- Regression impact

Defects should be documented and returned to development for correction.

---

## 13. Definition of Done

A story is considered complete when:

- The requirement is implemented.
- Acceptance criteria are satisfied.
- Code follows project conventions.
- Local validation passes.
- Required review is approved.
- QA validation passes.
- Required documentation is updated.
- The approved changes are merged into the appropriate branch.

---

## 14. Development Principle

The objective is not simply to write code.

The objective is to deliver a complete, reviewable, testable, maintainable solution that satisfies the business requirement.