# xp-org1

**Agentic Organizer based on GitHub Platform**

[![Documentation](https://img.shields.io/badge/docs-imranypatel.github.io%2Fxp--org1-blue?style=flat-square)](https://imranypatel.github.io/xp-org1/)

An issue-driven, AI-agent-orchestrated organizer that handles work across multiple business
and technical domains using GitHub as the backbone for tracking, versioning, and collaboration.

---

## Foundational Approach: Systems Thinking

All work in `xp-org1` is analyzed through a **Systems Thinking (ST)** lens before interventions are designed. ST is the analytical epistemology that underlies all 21+ domains — the same structural thinking applies whether the issue concerns HR policies, payment flows, or infrastructure reliability.

Key ST elements applied to every significant issue:
- **Stocks & Flows** — what accumulates, what rate changes it
- **Feedback Loops** — Reinforcing (R: amplifying) and Balancing (B: stabilizing)
- **Delays** — time lags that cause counterintuitive behavior
- **Archetypes** — recognizing recurring system patterns
- **Leverage Points** — intervening where impact is highest (Meadows' 12 levels)

→ See [docs/standards/systems-thinking.md](docs/standards/systems-thinking.md) for the complete reference.

---

## Governance

All work is driven by GitHub Issues. Every change flows through a Pull Request. No direct commits to `main`.

| Standard | Document |
|----------|----------|
| **Systems Thinking** | [docs/standards/systems-thinking.md](docs/standards/systems-thinking.md) |
| Versioning scheme | [docs/standards/versioning.md](docs/standards/versioning.md) |
| Branching rules | [docs/standards/branching.md](docs/standards/branching.md) |
| Issue lifecycle | [docs/standards/issue-workflow.md](docs/standards/issue-workflow.md) |
| Domain label taxonomy | [docs/standards/domain-labels.md](docs/standards/domain-labels.md) |
| Agent orchestration | [docs/standards/agent-orchestration.md](docs/standards/agent-orchestration.md) |

## Quick Reference

- **Every change** starts with a GitHub Issue
- **Every issue** gets its own branch (`feature/N-slug`, `fix/N-slug`, `docs/N-slug`)
- **Every merge** to `main` is via Pull Request with `Closes #N`
- **Every release** is tagged `vMAJOR.MINOR.PATCH` and pushed to origin
- **Every plan** lives at `docs/plans/issue-N/{slug}-vX.Y.Z.md`
- **Every significant issue** is analyzed through the Systems Thinking lens first

## Domains

Operations · Marketing · Sales · Billing · Procurement · Payments · HR · CRM ·
Finance/Accounts · Legal · Production · Project Management · Workflow · IT ·
Infrastructure · Architecture · Versioning · Branching · Workspace · DevOps · Governance

## Current Release

**v0.2.0** — Systems Thinking integration ([Issue #3](https://github.com/imranypatel/xp-org1/issues/3))  
**v0.1.0** — Governance bootstrap ([Issue #1](https://github.com/imranypatel/xp-org1/issues/1))
