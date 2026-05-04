# Governance: Issue-Driven Workflow, Versioning, Branching, and Agent Orchestration

**Plan Version**: v0.1.1  
**Issue**: [#1 — Governance: Issue-driven workflow standards](https://github.com/imranypatel/xp-org1/issues/1)  
**Branch**: `feature/1-governance-workflow`  
**Status**: Done  
**Principal Agent**: Anvil  
**Risk**: 🔴 (establishes standards affecting all future work)  
**Amends**: [v0.1.0](governance-workflow-v0.1.0.md) — adds Issue Verbatim section (Issue #7, v0.3.1)

---

## Issue Verbatim

> **Source**: Verbatim prompt entered in GitHub Copilot CLI session
> **User**: imranypatel
> **Type**: `type/verbatim-cli` (auxiliary) + `type/governance` (primary)
> **Domain**: `domain/governance`

---

```
Want to make issue driven progress so this should be considered issue# 1 auto created as an issue in the repo.
I will mostly remain in plan mode recursively discussing issues of various domains e.g. Operations, Marketing, Sales, Billing, Procurement, Payments, HR, CRM, Finance/Accounts, Legal, Marketing, Production Requirements, Project management, Workflow, IT, Infrastructure, Architecture, Versioning, Branching, Workspace, Dev/Ops Environments etc.
Identify and categorize the domain of each issue and see if it is useful creating a corresponding issue or comments therein the repo to keep history and track progress.
Remember to keep complete verbatim with identification of it as verbatim entered in a cli session at a level apt as an issue or comment of an issue.
Introduce basic versioning system for any revision for the issue and its related  docs and/or code.
Standardize whether to create a separate branch for the revision based on its scope.
Standardize whether to keep using the current branch or create a new branch after first creating and merging pull requests for changes so far in the current branch.
Each revision must be triggered based on an issue or comment under it created at origin repo.
All commits must be tagged with version number based on the versioning scheme and replicated when pushed to origin.
Never directly commit and use pull request mechanism to commit changes to the main branch.
Structure documents always in apt subfolders of the docs folder.
Once an issue is created in the repo, I would like to create a versioned plan to resolve the issue in the docs/plans folder of the repo.
Save plans created in plan mode to docs/plans folder with version based on versioning system.
The plan must include the reference to the issue it is related to.
Until revised, use imranypatel github user for all github actions.
You will be acting as a principal or main expert advisor agent to orchestrate handling of issues in a professional manner.
You may advise for including other domain expert agents to form a team of agents when feasible.
You may advise for including appropriate tools or services to address the issue in a productive manner.
```

*(Note: message was entered twice in the same CLI session — reproduced once here.)*

---

## Problem Statement

The repository `xp-org1` (Agentic Organizer based on GitHub Platform) requires a governance
foundation before any domain-specific work can begin. Without this foundation:

- Issues lack domain context and are untrackable
- Commits to `main` are uncontrolled (no PR gate)
- There is no versioning convention for docs or releases
- There is no standard for when to create branches vs. reuse them
- AI agent activity is undocumented and unreproducible

This plan bootstraps that governance foundation.

---

## Acceptance Criteria

- [x] GitHub Issue #1 created with verbatim CLI session text
- [x] Branch `feature/1-governance-workflow` created
- [x] Label taxonomy created in repo (21 domain + 8 type + 5 status = 34 labels)
- [x] `docs/standards/versioning.md` — versioning scheme and tagging rules
- [x] `docs/standards/branching.md` — branch naming, scope, PR policy
- [x] `docs/standards/issue-workflow.md` — full issue lifecycle
- [x] `docs/standards/domain-labels.md` — label taxonomy reference
- [x] `docs/standards/agent-orchestration.md` — principal agent role and domain→agent map
- [x] `docs/plans/issue-1/governance-workflow-v0.1.0.md` — initial plan
- [x] `README.md` updated with governance overview
- [x] PR `feature/1-governance-workflow` → `main` raised and merged (`Closes #1`)
- [x] Release tagged `v0.1.0` and pushed to origin

---

## Decisions Made

### Versioning Scheme
**Decision**: `vMAJOR.MINOR.PATCH` (SemVer)  
**Rationale**: Industry standard, well-understood, scales from patch fixes to major changes  
**Starting version**: `v0.1.0` (MAJOR=0 = pre-stable governance)

### Branch Scope Rule
**Decision**: Every issue always gets its own branch  
**Rationale**: Prevents mixed history, makes rollback clean, enforces the issue-driven principle

### PR Strategy
**Decision**: Squash merge, always target `main`, `Closes #N` in body  
**Rationale**: Keeps `main` history linear and readable

### Document Storage
**Decision**: Plans in `docs/plans/issue-N/{slug}-vX.Y.Z.md`, standards in `docs/standards/`  
**Rationale**: Plans are discrete deliverables (versioned filename); standards evolve in-place

### Self-Merge Policy
**Decision**: Self-merge allowed for now (no required reviewer)  
**Rationale**: Single-contributor repo at bootstrap phase; branch protection can be added via Issue #2

### Verbatim Capture
**Decision**: CLI session prompts captured verbatim in issue body, labeled `type/verbatim-cli`  
**Rationale**: Full traceability — anyone can reconstruct why a decision was made

---

## Implementation Summary

| # | Action | Status |
|---|--------|--------|
| 1 | Create GitHub Issue #1 with verbatim text | ✅ Done |
| 2 | Create branch `feature/1-governance-workflow` | ✅ Done |
| 3 | Create 34 GitHub labels (domain + type + status) | ✅ Done |
| 4 | Create 2 additional labels: `status/cancelled`, `status/wontfix` | ✅ Done |
| 5 | Assign labels to Issue #1 | ✅ Done |
| 6 | Create `docs/standards/versioning.md` | ✅ Done |
| 7 | Create `docs/standards/branching.md` | ✅ Done |
| 8 | Create `docs/standards/issue-workflow.md` | ✅ Done |
| 9 | Create `docs/standards/domain-labels.md` | ✅ Done |
| 10 | Create `docs/standards/agent-orchestration.md` | ✅ Done |
| 11 | Create initial plan document (v0.1.0) | ✅ Done |
| 12 | Update `README.md` | ✅ Done |
| 13 | Raise PR and merge | ✅ Done |
| 14 | Tag `v0.1.0` | ✅ Done |

---

## Assumptions and Open Questions

| # | Assumption | Status | Revisable Via |
|---|------------|--------|---------------|
| 1 | SemVer `vMAJOR.MINOR.PATCH` format | Accepted | New governance issue |
| 2 | One branch per issue always | Accepted | New governance issue |
| 3 | Self-merge allowed (no required reviewer) | Accepted until revised | New issue for branch protection |
| 4 | `imranypatel` GitHub user for all actions | Accepted until revised | New governance issue |
| 5 | Squash merge preferred | Accepted | New governance issue |

---

## Deferred Items (Future Issues)

| # | Concern | Deferred to |
|---|---------|------------|
| 1 | Formal agent-to-agent handoff protocol | Issue #2 |
| 2 | Version collision procedure for concurrent PRs | Issue #2 |
| 3 | Governance amendment procedure (self-referential changes) | Issue #2 |
| 4 | GitHub branch protection rules and required reviewers | Issue #2 |
| 5 | GitHub Actions workflow to auto-apply `status/done` on issue close | Issue #3 |

---

## Related Documents

- `docs/standards/versioning.md` — versioning scheme
- `docs/standards/branching.md` — branching rules
- `docs/standards/issue-workflow.md` — full issue lifecycle
- `docs/standards/domain-labels.md` — label taxonomy
- `docs/standards/agent-orchestration.md` — agent orchestration
