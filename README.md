# xp-org1

**Agentic Organizer based on GitHub Platform**

An issue-driven, AI-agent-orchestrated organizer that handles work across multiple business
and technical domains using GitHub as the backbone for tracking, versioning, and collaboration.

---

## Governance

All work is driven by GitHub Issues. Every change flows through a Pull Request. No direct commits to `main`.

| Standard | Document |
|----------|----------|
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

## Domains

Operations · Marketing · Sales · Billing · Procurement · Payments · HR · CRM ·
Finance/Accounts · Legal · Production · Project Management · Workflow · IT ·
Infrastructure · Architecture · Versioning · Branching · Workspace · DevOps · Governance

## Current Release

**v0.1.0** — Governance bootstrap ([Issue #1](https://github.com/imranypatel/xp-org1/issues/1))
