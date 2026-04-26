# Issue Workflow Standard

**Version**: v0.1.0  
**Issue**: [#1 — Governance: Issue-driven workflow standards](https://github.com/imranypatel/xp-org1/issues/1)  
**Status**: Active

---

## Overview

All work in `xp-org1` is driven by GitHub Issues. No branch, no commit, no document, no plan
is created without a corresponding issue (or comment under one) in the origin repository.

This applies across all domains: Operations, Marketing, Sales, Billing, Procurement, Payments,
HR, CRM, Finance/Accounts, Legal, Production, Project Management, Workflow, IT, Infrastructure,
Architecture, Versioning, Branching, Workspace, DevOps, and Governance.

---

## Issue Lifecycle

```
┌─────────────────────────────────────────────────────────────────┐
│  1. Issue Created                                               │
│     • Title: Domain: Short description                          │
│     • Body: verbatim CLI session (if from session) + context   │
│     • Labels: domain/X, type/Y, status/in-planning             │
│     • Note: for the governance bootstrap issue, labels may be  │
│       applied immediately after the taxonomy is created         │
│     • Assigned to: imranypatel (default)                        │
└───────────────────────┬─────────────────────────────────────────┘
                        │
┌───────────────────────▼─────────────────────────────────────────┐
│  2. Agent Assessment (comment on issue)                         │
│     • Principal agent assesses domain and risk level            │
│     • Recommends expert agents if cross-domain                  │
│     • Recommends tools/services                                 │
│     • Posts assessment as comment on the issue                  │
└───────────────────────┬─────────────────────────────────────────┘
                        │
┌───────────────────────▼─────────────────────────────────────────┐
│  3. Plan Created                                                │
│     • Branch: feature/N-slug (or fix/N-slug, docs/N-slug)      │
│     • Plan file: docs/plans/issue-N/{slug}-vX.Y.Z.md           │
│     • Plan references the issue number                          │
│     • Label updated: status/in-planning                         │
└───────────────────────┬─────────────────────────────────────────┘
                        │
┌───────────────────────▼─────────────────────────────────────────┐
│  4. Work Executed on Branch                                     │
│     • All commits on feature/N-slug                             │
│     • Label updated: status/in-progress                         │
│     • Progress updates posted as comments on the issue          │
└───────────────────────┬─────────────────────────────────────────┘
                        │
┌───────────────────────▼─────────────────────────────────────────┐
│  5. Pull Request Raised                                         │
│     • Title: [vX.Y.Z] Short description (#N)                   │
│     • Body contains "Closes #N"                                 │
│     • Label updated: status/in-review                           │
│     • Squash merge preferred                                     │
└───────────────────────┬─────────────────────────────────────────┘
                        │
┌───────────────────────▼─────────────────────────────────────────┐
│  6. Merge and Tag                                               │
│     • PR merged to main                                         │
│     • Issue auto-closed by "Closes #N" (GitHub does not apply  │
│       labels on auto-close — apply status/done manually)        │
│     • Tag: git tag -a vX.Y.Z -m "vX.Y.Z: Description — #N"    │
│       git push origin vX.Y.Z    (push the specific tag only)   │
│     • Label updated manually: status/done                       │
└──────────────────────────────────────────────────────────────────┘

### Cancelled / Won't-Fix Path

When an issue is closed without a PR (duplicate, out of scope, decided against):

1. Post a comment on the issue explaining the reason
2. Apply `status/cancelled` or `status/wontfix` label
3. Delete the feature branch if one was created: `git push origin --delete feature/N-slug`
4. If a plan doc was created, add a header note to it: `> **Status: Cancelled** — see issue for reason`
5. Close the issue
```

---

## Verbatim CLI Session Capture

When a new issue originates from a CLI session with the principal agent:

1. The full prompt text is included verbatim in the issue body
2. It is clearly identified with the `type/verbatim-cli` label
3. The issue body begins with a standard header:

```markdown
## Verbatim CLI Session — Issue #N

> **Source**: Verbatim prompt entered in GitHub Copilot CLI session
> **Date**: YYYY-MM-DD
> **User**: imranypatel
> **Type**: `type/verbatim-cli` (auxiliary) + `type/governance` (primary)
> **Domain**: `domain/X`

---

<verbatim text here>

---

## Agent Assessment
...
```

---

## Issue Title Format

```
Domain: Short description
```

Examples:
- `Governance: Issue-driven workflow standards`
- `Payments: Integrate Stripe billing API`
- `HR: Onboarding workflow automation`

> **Note:** The version is **not** included in the issue title — scope often changes between opening and completion, making a version assigned at creation unreliable. The version is assigned at **PR-raise time** and appears in the PR title only (see PR Rules in `branching.md`).

---

## Revision Triggers

An existing issue is revised (new plan version) when:
1. A **new comment** is added to the issue requesting a change in scope or approach
2. A **new linked issue** is created referencing the original

In both cases:
1. A new branch is created (see `branching.md`)
2. A new plan version is created: `{slug}-vX.Y.Z.md` (incrementing from last version)
3. The process restarts from step 3 (Plan Created)

---

## Domain Identification

Every issue must have exactly one `domain/` label. If an issue spans multiple domains,
assign the **primary** domain label and add a comment listing secondary domains.

For cross-domain issues, the principal agent will recommend a team of agents.

See `domain-labels.md` for the full label taxonomy.
