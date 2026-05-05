---
title: "Human Emotions ST Training — v0.1.0"
sidebar_label: "v0.1.0 — Initial Plan"
---

# Mastering Human Emotions through Systems Thinking — Training Plan

**Plan Version**: v0.1.0  
**Issue**: [#27 — HR Training: Mastering Human Emotions through Systems Thinking](https://github.com/imranypatel/xp-org1/issues/27)  
**Branch**: `feature/27-emotions-st-training`  
**Version Bump**: v0.7.0 → v0.8.0 (MINOR — new training program)  
**Domain**: `domain/hr` → `subdomain/training`  
**Created**: 2026  
**Status**: Implementation

---

## Issue Verbatim

```
Want to introduce another training for mastering Human Emotions i.e. relationships of
various emotions using ST. This training would help team members perform better while
learning and fulfilling roles and responsibilities.
```

*Source: GitHub Copilot CLI session — user: imranypatel (2026-05-05)*

---

## Problem Statement

Team members operate in a complex environment of roles, relationships, and pressures.
Emotions are not noise — they are signals from the system. Yet most professional
environments treat emotions as things to suppress rather than structures to understand.

Without a systemic model of emotional dynamics, team members may:
- Misread emotional signals as character flaws rather than system outputs
- Inadvertently escalate conflicts that feedback loops would otherwise resolve
- Unknowingly reinforce vicious cycles (fear → avoidance → isolation → more fear)
- Treat psychological safety as a "soft" aspiration rather than a structural stock to invest in

This training gives team members a Systems Thinking framework to understand how emotions
behave as stocks and flows, how feedback loops govern emotional states over time, and how
to identify leverage points for healthier dynamics at the individual, team, and
organisational level — directly improving performance in learning and role fulfilment.

---

## Systems Analysis

**Emotions as Stocks**

Emotions are not momentary events — they are *levels* that accumulate and drain over time.
Key stocks include:

| Stock | Fills when… | Drains when… |
|-------|-------------|--------------|
| Trust | Commitments kept, transparency, recognition | Betrayal, broken promises, micro-management |
| Psychological Safety | Mistakes handled with curiosity, dissent welcomed | Blame, ridicule, silence after speaking up |
| Anxiety | Ambiguity, overload, lack of control | Clarity, autonomy, competence |
| Enthusiasm | Progress, meaning, contribution | Tedium, invisibility, futility |
| Frustration | Blocked goals, repeated obstacles | Goal achieved, reframed expectations |

**Flows**

- **Trust inflows**: positive interactions, successful collaboration, transparency, recognition
- **Trust outflows**: perceived betrayal, criticism without safety, broken commitments
- **Anxiety inflows**: role ambiguity, excessive demand, unpredictability
- **Anxiety outflows**: clear communication, support, evidence of competence

**Feedback Loops**

```
R1 — Trust Spiral (Reinforcing, Virtuous)
  Trust → Openness → Collaboration → Shared Success → More Trust

R2 — Fear Spiral (Reinforcing, Vicious)
  Perceived Threat → Defensiveness → Reduced Communication
  → Misunderstanding → More Perceived Threat

B1 — Emotional Regulation (Balancing)
  Gap between desired and actual emotional state
  → Regulation effort (reframing, rest, support-seeking)
  → Reduced gap

B2 — Social Mirror (Balancing)
  Expressed emotion → Social response (mirroring, soothing, confrontation)
  → Adjusted expression
```

**Delays**

Trust takes months to build and seconds to damage. Emotional recovery from setbacks has
significant delays — teams often re-enter conflict before the previous episode has cleared.
This delay is the source of "why is everyone still tense? — that was weeks ago" in teams.

**Archetypes**

| Archetype | Emotional Manifestation |
|-----------|------------------------|
| Escalation | Mutual defensive actions each perceived as aggression → emotional arms race |
| Shifting the Burden | Avoiding difficult conversations (symptomatic) instead of building trust structures (fundamental fix) |
| Tragedy of the Commons | Emotional bandwidth is a shared resource — overloading one person/team depletes collective capacity |
| Success to the Successful | High-trust team members get more collaboration opportunities → trust compounds; low-trust members excluded → trust decays |

**Leverage Points**

| Level (Meadows) | Intervention |
|-----------------|-------------|
| L5 — Rules | Establish explicit norms for psychological safety (blameless post-mortems, appreciation practices) |
| L4 — Self-organisation | Build team capability to surface and resolve emotional blockages without escalation |
| L2 — Paradigm | Shift from "emotions are personal weakness" to "emotions are system signals" |

**ST Labels**: `st/reinforcing-loop`, `st/balancing-loop`, `st/delay`, `st/archetype`, `st/leverage-point`, `st/stock`

---

## Training Structure

### Prerequisite

ST Foundations L1 (Module 1 passed). Team members must understand stocks, flows, CLDs,
and basic feedback loop types before applying those tools to the emotional domain.

### Three Levels

| Level | Name | Duration | Prerequisite |
|-------|------|----------|-------------|
| L1 | Emotions as a System | ~3–4 hrs | ST Foundations L1 |
| L2 | Emotional Dynamics in Practice | ~6–8 hrs | L1 quiz ≥ 70% |
| L3 | Emotional Intelligence as Systems Leadership | ~10–12 hrs + portfolio | L2 pass + ≥ 2 applied analyses |

### Assessment Design

| Component | Description |
|-----------|-------------|
| Module 1 Quiz | 8 scenario questions + 2 short answer; passing threshold 70% |
| Module 2 Quiz | 8 scenario questions + 2 practical exercises (CLD drawing + archetype identification) |
| Module 3 Portfolio | 4 evidence items: ≥2 real-world ST analyses, ≥1 CLD of a team dynamic, ≥1 facilitation, ≥1 coaching conversation |
| Competency Rubric | Observable behaviour descriptors per level — used by team leads for real-world assessment |
| Progress Tracker | Markdown table with prerequisite gate (ST Foundations L1 required) |

---

## File Map

| File | Action | Status |
|------|--------|--------|
| `docs/training/human-emotions/_category_.json` | New | Pending |
| `docs/training/human-emotions/overview.md` | New | Pending |
| `docs/training/human-emotions/module-1-introduction.md` | New | Pending |
| `docs/training/human-emotions/module-2-practitioner.md` | New | Pending |
| `docs/training/human-emotions/module-3-mastery.md` | New | Pending |
| `docs/training/human-emotions/assessments/_category_.json` | New | Pending |
| `docs/training/human-emotions/assessments/competency-rubric.md` | New | Pending |
| `docs/training/human-emotions/assessments/progress-tracker.md` | New | Pending |
| `docs/training/human-emotions/assessments/module-1-quiz.md` | New | Pending |
| `docs/training/human-emotions/assessments/module-2-quiz.md` | New | Pending |
| `docs/training/human-emotions/assessments/module-3-quiz.md` | New | Pending |
| `docs/plans/issue-27/_category_.json` | New | ✅ Done |
| `docs/plans/issue-27/emotions-st-training-v0.1.0.md` | New | ✅ Done |
| `docs/training/README.md` | Update — add to Active table | Pending |

---

## Version Rationale

MINOR bump (v0.7.0 → v0.8.0): Adds a new training program under `docs/training/`. No
existing documents modified beyond catalog index. Backward-compatible additive change.
New branch `feature/27-emotions-st-training` per branching standard (MINOR scope).

---

## Agent Orchestration Notes

- **Principal Advisor (Anvil)**: Orchestrating implementation
- **Domain**: HR / Training — consistent with Issue #9 (ST Foundations) and Issue #11 (LaaS)
- **Expert Domain Reference**: Daniel Goleman (Emotional Intelligence), Paul Ekman (emotion taxonomy),
  Peter Senge (organisational learning and emotional climate as system)
