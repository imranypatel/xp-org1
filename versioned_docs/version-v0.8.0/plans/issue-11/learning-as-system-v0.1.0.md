---
title: "LaaS Training — v0.1.0"
sidebar_label: "v0.1.0 — Initial Plan"
---

# Learning as a System Training Plan

**Plan Version**: v0.1.0  
**Issue**: [#11 — HR Training: Learning as a System](https://github.com/imranypatel/xp-org1/issues/11)  
**Branch**: `feature/11-learning-as-system`  
**Version Bump**: v0.4.0 → v0.5.0 (MINOR — new training program)  
**Domain**: `domain/hr` → `subdomain/training`  
**Created**: 2025  
**Status**: Implementation

---

## Issue Verbatim

```
Introduce another training, which covers how ST helps analyzing and understanding Learning
as a System. This training would help team members to see learning through the lense of ST
in hope that if a member can become more efficient and effective in their learning, it would
be valuable for growth of both the member and the organization.
```

*Source: GitHub Copilot CLI session — user: imranypatel*

---

## Problem Statement

Team members now have ST foundations (v0.4.0), but the application of ST to their own
learning processes is unexplored. Learning itself is a system — with stocks (accumulated
knowledge, skills, motivation, confidence), flows (study rate, practice, forgetting decay),
reinforcing loops (competence → confidence → motivation → effort → competence), balancing
loops (knowledge gap → effort → gap reduction), and delays (effort before mastery). Without
seeing these structures, team members treat learning as a linear transaction ("study more →
know more") and miss high-leverage interventions like spaced practice, reducing forgetting
outflows, and protecting the competence reinforcing loop.

At the organizational level, the team's collective knowledge stock has concentration risks
(bus factor), diffusion dynamics (documentation, mentoring), and cultural reinforcing loops
that determine whether learning becomes self-sustaining or stalls.

This plan delivers the second entry in the `docs/training/` catalog.

---

## Systems Analysis

**Affected Stocks**: Individual competency stock, organizational knowledge stock,
team learning culture

**Affected Flows**:
- Inflow: deliberate practice rate, knowledge transfer rate
- Outflow: forgetting decay rate, staff attrition (knowledge lost when people leave)

**Feedback Loops**:
- R1 Competence Loop: skill → success → confidence → motivation → effort → skill
- R1 Reversed (Vicious): failure → doubt → avoidance → skill decay → more failure
- B1 Gap-Closing: knowledge gap → learning effort → reduced gap → reduced effort
- R2 Learning Culture: team learning → visible shared value → culture reinforcement → more learning

**Delays**: Effort-to-mastery (weeks to months); confidence recovery after setbacks

**Archetype**: Limits to Growth (time/cognitive load ceiling on learning rate) + Shifting the
Burden (over-reliance on external help instead of building internal capability)

**Leverage Point**: Meadows Level 2 — paradigm shift from "learning is effort" to
"learning is system design"

**ST Labels**: `st/reinforcing-loop`, `st/delay`, `st/leverage-point`, `st/archetype`

---

## Training Structure

### Prerequisite

ST Foundations L1 (Module 1 passed). Team members must understand stocks, flows, CLDs, and
basic feedback loop types before applying those tools to the learning domain.

### Three Levels

| Level | Name | Duration | Prerequisite |
|-------|------|----------|-------------|
| L1 | The Learning System | ~3–4 hrs | ST Foundations L1 |
| L2 | Learning System Design | ~6–8 hrs | L1 quiz ≥ 70% |
| L3 | Organizational Learning | ~10–12 hrs + portfolio | L2 pass + ≥ 2 applied analyses |

### Assessment Design

| Component | Description |
|-----------|-------------|
| Module 1 Quiz | 8 scenario questions + 2 short answer; passing threshold 70% |
| Module 2 Quiz | 8 scenario questions + 2 practical exercises (CLD + ST Analysis) |
| Module 3 Portfolio | 4 evidence items: ≥2 GitHub issues, ≥1 CLD, ≥1 facilitation, ≥1 peer coaching |
| Competency Rubric | Observable behavior descriptors per level — used by team leads for real-world assessment |
| Progress Tracker | Markdown table with prerequisite gate (ST Foundations L1 required) |

---

## File Map

| File | Action | Status |
|------|--------|--------|
| `docs/training/learning-as-a-system/_category_.json` | New | ✅ Done |
| `docs/training/learning-as-a-system/overview.md` | New | ✅ Done |
| `docs/training/learning-as-a-system/module-1-introduction.md` | New | ✅ Done |
| `docs/training/learning-as-a-system/module-2-practitioner.md` | New | ✅ Done |
| `docs/training/learning-as-a-system/module-3-mastery.md` | New | ✅ Done |
| `docs/training/learning-as-a-system/assessments/_category_.json` | New | ✅ Done |
| `docs/training/learning-as-a-system/assessments/competency-rubric.md` | New | ✅ Done |
| `docs/training/learning-as-a-system/assessments/progress-tracker.md` | New | ✅ Done |
| `docs/training/learning-as-a-system/assessments/module-1-quiz.md` | New | ✅ Done |
| `docs/training/learning-as-a-system/assessments/module-2-quiz.md` | New | ✅ Done |
| `docs/training/learning-as-a-system/assessments/module-3-quiz.md` | New | ✅ Done |
| `docs/plans/issue-11/_category_.json` | New | ✅ Done |
| `docs/plans/issue-11/learning-as-system-v0.1.0.md` | New | ✅ Done |
| `docs/training/README.md` | Update — add to Active table | Pending |
| `sidebars.js` | Update — add LaaS section + issue-11 plan | Pending |
| `docusaurus.config.js` | Update — `lastVersion: 'v0.5.0'` | Pending |
| `versioned_docs/version-v0.5.0/` | Auto (docs:version) | Pending |

---

## Version Rationale

MINOR bump (v0.4.0 → v0.5.0): Adds a new training program under `docs/training/`. No
existing documents modified beyond catalog index and sidebar config. Backward-compatible
additive change. New branch `feature/11-learning-as-system` per branching standard
(MINOR scope).

---

## Agent Orchestration Notes

- **Principal Advisor (Anvil)**: Orchestrating implementation
- **Domain**: HR / Training — same domain as Issue #9
- **ST lens applied**: Yes — full ST analysis above
- **Prerequisite chain**: ST Foundations (Issue #9, v0.4.0) → Learning as a System (Issue #11, v0.5.0)
- **Assessment mechanism**: Inherits and extends the pattern established in ST Foundations assessments
