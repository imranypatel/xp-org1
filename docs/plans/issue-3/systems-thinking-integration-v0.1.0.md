# Systems Thinking Integration — Versioned Plan

**Version**: v0.1.0  
**Issue**: [#3 — Governance: Integrate Systems Thinking as foundational cross-cutting approach](https://github.com/imranypatel/xp-org1/issues/3)  
**Branch**: `feature/3-systems-thinking-integration`  
**Release Tag**: `v0.2.0`  
**Parent**: Amends governance bootstrap (Issue #1, v0.1.0)  
**Status**: In progress

---

## Problem Statement

The governance system established in v0.1.0 treats issues as task units organized by domain. The foundational intent, identified in the verbatim CLI session that constitutes Issue #3, is that all domains should be analyzed through a **Systems Thinking (ST)** lens. ST is not a domain — it is the epistemological framework within which all domains operate.

The same structural analysis applies whether the issue concerns HR capacity, cash flow, brand equity, infrastructure reliability, or legal compliance. ST reveals the stocks, flows, feedback loops, delays, archetypes, and leverage points that determine how interventions will actually behave in the system — as opposed to how they appear to behave in isolation.

### Why this matters (ST analysis of the governance system itself)

**Stocks affected**: Organizational clarity, governance knowledge base  
**Flows affected**: Issue resolution rate, knowledge accumulation rate  
**Reinforcing loop (R1)**: Governance clarity → faster issue resolution → more issues documented → richer knowledge → better governance  
**Balancing loop (B1)**: Growing complexity → overhead per issue → resolution slowdown → pressure to simplify  
**Delay**: Benefits of ST investment are felt weeks/months later — risk of premature abandonment if results aren't visible immediately  
**Archetype**: *Shifting the Burden* risk — if ST is treated as overhead rather than essential analysis, teams will shift burden to quick-fix interventions and bypass structural insight  
**Leverage Point**: This intervention is **Meadows level 2** (paradigm/mindset) — near-highest leverage. Changing *how problems are seen* affects every subsequent decision.

---

## Scope of Changes

### New Files

| File | Purpose |
|------|---------|
| `docs/standards/systems-thinking.md` | Canonical ST/SD reference: stocks, flows, loops, delays, archetypes, leverage points, CLD format |
| `docs/models/README.md` | Guide to model directory: CLDs, SFDs, naming conventions |
| `docs/plans/issue-3/systems-thinking-integration-v0.1.0.md` | This document |

### Modified Files

| File | Change | New Version |
|------|--------|------------|
| `docs/standards/domain-labels.md` | Add `st/` label category (7 labels) | v0.2.0 |
| `docs/standards/issue-workflow.md` | Add ST Analysis section + template | v0.2.0 |
| `docs/standards/agent-orchestration.md` | Add ST as cross-cutting layer; update domain→agent table | v0.2.0 |
| `README.md` | Add Foundational Approach section; link ST standard | v0.2.0 |

### GitHub Changes

| Action | Detail |
|--------|--------|
| Issue #3 created | Verbatim CLI session + agent assessment |
| 7 `st/` labels created | `st/reinforcing-loop`, `st/balancing-loop`, `st/delay`, `st/archetype`, `st/leverage-point`, `st/stock`, `st/flow` |
| `st/leverage-point` assigned to Issue #3 | ST integration is itself a leverage-point intervention |

---

## Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| ST vs SD scope | ST (qualitative) only in v0.2.0 | Accessible to all without specialist software; SD simulation deferred |
| ST labels — required vs optional | Optional auxiliary | Not every issue has a clear ST angle; forcing it adds noise on simple tasks |
| ST Analysis in assessment | Required for 🔴-risk; recommended for 🟡; optional for 🟢 | Proportional effort |
| CLD format | Mermaid in markdown | GitHub renders natively; zero tooling overhead |
| `docs/models/` directory | Separate from `docs/standards/` and `docs/plans/` | Models are analytical artifacts, not standards or plans |
| Retroactive ST on Issue #1 | Not in scope | Issue closed; low value |
| SD simulation tools (Vensim, Stella) | Deferred | Future issue when quantitative modeling needed |

---

## Acceptance Criteria

- [x] `docs/standards/systems-thinking.md` created — stocks, flows, loops, delays, archetypes, leverage points, CLD guide
- [x] `docs/models/README.md` created — naming, format, when to model
- [x] 7 `st/` labels created in GitHub repo
- [x] `st/leverage-point` assigned to Issue #3
- [x] `domain-labels.md` updated with `st/` section (→ v0.2.0)
- [x] `issue-workflow.md` updated with ST Analysis template (→ v0.2.0)
- [x] `agent-orchestration.md` updated with ST cross-cutting layer + updated domain table (→ v0.2.0)
- [x] `README.md` updated with Foundational Approach section
- [ ] PR raised: `feature/3-systems-thinking-integration` → `main`, `Closes #3`
- [ ] PR merged
- [ ] Tagged `v0.2.0`
- [ ] `status/done` applied to Issue #3

---

## Deferred Items

| Item | Suggested Issue |
|------|----------------|
| Quantitative SD simulation models (Vensim, AnyLogic, Stella) | Issue #4+ |
| Formal CLD review process and notation standard | Future governance issue |
| ST onboarding guide for new team members | HR domain issue |
| Retroactive ST analysis of closed issues | Low priority, future issue |
| Archetype library: documented instances per domain | Future issue |

---

## Related Standards

- [docs/standards/systems-thinking.md](../../../docs/standards/systems-thinking.md) — Full ST reference
- [docs/models/README.md](../../../docs/models/README.md) — Model directory guide
- [docs/standards/domain-labels.md](../../../docs/standards/domain-labels.md) — Label taxonomy including `st/`
- [docs/standards/issue-workflow.md](../../../docs/standards/issue-workflow.md) — ST Analysis section in assessment template
- [docs/standards/agent-orchestration.md](../../../docs/standards/agent-orchestration.md) — ST cross-cutting layer
