# Governance: Issue-Driven Workflow, Versioning, Branching, and Agent Orchestration

**Plan Version**: v0.1.0  
**Issue**: [#1 ΓÇö Governance: Issue-driven workflow standards](https://github.com/imranypatel/xp-org1/issues/1)  
**Branch**: `feature/1-governance-workflow`  
**Status**: In Progress  
**Principal Agent**: Anvil  
**Risk**: ≡ƒö┤ (establishes standards affecting all future work)

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
- [x] `docs/standards/versioning.md` ΓÇö versioning scheme and tagging rules
- [x] `docs/standards/branching.md` ΓÇö branch naming, scope, PR policy
- [x] `docs/standards/issue-workflow.md` ΓÇö full issue lifecycle
- [x] `docs/standards/domain-labels.md` ΓÇö label taxonomy reference
- [x] `docs/standards/agent-orchestration.md` ΓÇö principal agent role and domainΓåÆagent map
- [x] `docs/plans/issue-1/governance-workflow-v0.1.0.md` ΓÇö this plan
- [x] `README.md` updated with governance overview
- [ ] PR `feature/1-governance-workflow` ΓåÆ `main` raised (`Closes #1`)
- [ ] PR merged
- [ ] Release tagged `v0.1.0` and pushed to origin

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
**Rationale**: Full traceability ΓÇö anyone can reconstruct why a decision was made

---

## Implementation Summary

| # | Action | Status |
|---|--------|--------|
| 1 | Create GitHub Issue #1 with verbatim text | Γ£à Done |
| 2 | Create branch `feature/1-governance-workflow` | Γ£à Done |
| 3 | Create 34 GitHub labels (domain + type + status) ΓÇö created via GitHub API separately from the staged diff | Γ£à Done |
| 4 | Create 2 additional labels: `status/cancelled`, `status/wontfix` (added after review) | Γ£à Done |
| 5 | Assign labels to Issue #1 | Γ£à Done |
| 5 | Create `docs/standards/versioning.md` | Γ£à Done |
| 6 | Create `docs/standards/branching.md` | Γ£à Done |
| 7 | Create `docs/standards/issue-workflow.md` | Γ£à Done |
| 8 | Create `docs/standards/domain-labels.md` | Γ£à Done |
| 9 | Create `docs/standards/agent-orchestration.md` | Γ£à Done |
| 10 | Create this plan document | Γ£à Done |
| 11 | Update `README.md` | Γ£à Done |
| 12 | Raise PR | ΓÅ│ Pending |
| 13 | Merge and tag `v0.1.0` | ΓÅ│ Pending |

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

The following concerns were raised during adversarial review and are intentionally deferred to future governance issues. They are too complex to address in this bootstrap release without destabilizing the initial standard.

| # | Concern | Deferred to |
|---|---------|------------|
| 1 | Formal agent-to-agent handoff protocol (beyond minimal template in `agent-orchestration.md`) | Issue #2 |
| 2 | Version collision procedure for concurrent PRs targeting same version | Issue #2 |
| 3 | Governance amendment procedure (self-referential change to `issue-workflow.md` itself) | Issue #2 |
| 4 | GitHub branch protection rules and required reviewers | Issue #2 |
| 5 | GitHub Actions workflow to auto-apply `status/done` on issue close | Issue #3 |

---

## Related Documents

- `docs/standards/versioning.md` ΓÇö versioning scheme
- `docs/standards/branching.md` ΓÇö branching rules
- `docs/standards/issue-workflow.md` ΓÇö full issue lifecycle
- `docs/standards/domain-labels.md` ΓÇö label taxonomy
- `docs/standards/agent-orchestration.md` ΓÇö agent orchestration
