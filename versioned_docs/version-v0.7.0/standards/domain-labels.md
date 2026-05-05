# Domain Labels Standard

**Version**: v0.2.0  
**Issue**: [#3 — Governance: Integrate Systems Thinking as foundational cross-cutting approach](https://github.com/imranypatel/xp-org1/issues/3)  
**Amends**: [#1 — Governance: Issue-driven workflow standards](https://github.com/imranypatel/xp-org1/issues/1) (v0.1.0)
**Status**: Active

---

## Overview

Every GitHub Issue in `imranypatel/xp-org1` is tagged with:
- Exactly **one** `domain/` label (primary domain)
- Exactly **one** primary `type/` label (e.g., `type/feature`, `type/bug`)
- Optionally **one** auxiliary `type/verbatim-cli` label alongside the primary type (when the issue originates from a verbatim CLI session)
- Exactly **one** `status/` label at any given time

---

## Domain Labels

| Label | Color | Description |
|-------|-------|-------------|
| `domain/governance` | `#0075ca` | Workflow, standards, process |
| `domain/operations` | `#e4e669` | Operational management |
| `domain/marketing` | `#d876e3` | Marketing activities |
| `domain/sales` | `#f9d0c4` | Sales pipeline |
| `domain/billing` | `#fef2c0` | Billing management |
| `domain/procurement` | `#bfd4f2` | Procurement and vendor management |
| `domain/payments` | `#ee0701` | Payment processing (🔴 high risk — always involves human review) |
| `domain/hr` | `#c5def5` | Human resources |
| `domain/crm` | `#fbca04` | Customer relationship management |
| `domain/finance-accounts` | `#e11d48` | Finance and accounting |
| `domain/legal` | `#7057ff` | Legal and compliance |
| `domain/production` | `#006b75` | Production requirements |
| `domain/project-management` | `#0052cc` | Project tracking |
| `domain/workflow` | `#1d76db` | Workflow automation |
| `domain/it` | `#ededed` | IT support and tooling |
| `domain/infrastructure` | `#84b6eb` | Infrastructure and cloud |
| `domain/architecture` | `#5319e7` | System architecture |
| `domain/versioning` | `#0e8a16` | Version management |
| `domain/branching` | `#b60205` | Branch strategy |
| `domain/workspace` | `#e4e669` | Dev workspace setup |
| `domain/devops` | `#c2e0c6` | CI/CD and DevOps environments |

---

## Type Labels

| Label | Color | Description |
|-------|-------|-------------|
| `type/governance` | `#0075ca` | Governance and standards work |
| `type/feature` | `#a2eeef` | New capability or feature |
| `type/bug` | `#ee0701` | Bug fix |
| `type/docs` | `#0075ca` | Documentation only |
| `type/chore` | `#ededed` | Maintenance, refactoring |
| `type/question` | `#d876e3` | Question or clarification needed |
| `type/plan` | `#c5def5` | Plan document creation/revision |
| `type/verbatim-cli` | `#fef2c0` | Verbatim CLI session capture (auxiliary — used alongside a primary type label) |

---

## Status Labels

Status labels track where an issue is in its lifecycle. Only one status label at a time.

| Label | Color | Description | Set When |
|-------|-------|-------------|----------|
| `status/in-planning` | `#fbca04` | Being planned | Issue opened, plan not yet started |
| `status/in-progress` | `#0e8a16` | Work in progress | Branch created, work underway |
| `status/in-review` | `#1d76db` | Under review | PR raised |
| `status/blocked` | `#ee0701` | Blocked | Work cannot proceed, waiting |
| `status/done` | `#0e8a16` | Completed | PR merged, issue closed (must be applied manually — GitHub auto-close does not apply labels) |
| `status/cancelled` | `#b60205` | Cancelled — no PR will be raised | Issue decided against, duplicated, or out of scope |
| `status/wontfix` | `#ededed` | Will not be addressed | Issue acknowledged but explicitly deferred indefinitely |

---

## Cross-Domain Issues

When an issue spans multiple domains:
1. Assign the **primary** domain label
2. Add a comment on the issue listing secondary domains: `Also affects: domain/billing, domain/legal`
3. The principal agent will recommend agents for each domain

---

## Adding New Domains

To add a new domain label:
1. Create a GitHub Issue with `domain/governance` + `type/governance`
2. The issue proposes the new label with name, color, and description
3. Work through the standard issue lifecycle
4. The new label is created in this release and documented here in a PATCH revision

---

## Systems Thinking Labels

The `st/` category provides Systems Thinking metadata. These are **optional auxiliary labels** — they augment the existing `domain/`, `type/`, and `status/` labels but never replace them.

See [docs/standards/systems-thinking.md](systems-thinking.md) for full ST reference.

| Label | Color | Description |
|-------|-------|-------------|
| `st/reinforcing-loop` | `#2ea44f` | Issue involves or targets a reinforcing (R) feedback loop |
| `st/balancing-loop` | `#0075ca` | Issue involves or targets a balancing (B) feedback loop |
| `st/delay` | `#e4e669` | Issue involves a system delay causing counterintuitive behavior |
| `st/archetype` | `#d876e3` | Issue matches a known SD archetype (Limits to Growth, Shifting the Burden, etc.) |
| `st/leverage-point` | `#b60205` | Issue represents a high-leverage system intervention (Meadows' 12 levels) |
| `st/stock` | `#c5def5` | Issue primarily affects a system stock (accumulation) |
| `st/flow` | `#fef2c0` | Issue primarily affects a system flow (rate of change) |

### When to apply `st/` labels

| Condition | Labels to apply |
|-----------|----------------|
| Issue modifies a reinforcing dynamic | `st/reinforcing-loop` |
| Issue targets a balancing constraint | `st/balancing-loop` |
| Time delays are a key factor | `st/delay` |
| Issue matches a named SD archetype | `st/archetype` |
| Intervention is at a high Meadows leverage level (1–6) | `st/leverage-point` |
| Change primarily grows or depletes an accumulation | `st/stock` |
| Change alters a rate of inflow or outflow | `st/flow` |

Multiple `st/` labels may be applied to the same issue. They are always used alongside (never instead of) `domain/`, `type/`, and `status/` labels.
