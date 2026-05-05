# Systems Thinking Foundations — Training Overview

**Program Version**: v0.4.0  
**Issue**: [#9 — HR Training: Systems Thinking Foundations](https://github.com/imranypatel/xp-org1/issues/9)  
**Domain**: Cross-cutting (HR delivery)  
**Audience**: All team members, all domains  
**Format**: Self-paced reading + exercises  
**Status**: Active

---

## Why This Training Exists

Every governance standard, issue analysis, and agent assessment in `xp-org1` is written through a Systems Thinking (ST) lens. ST is not an optional analytical add-on — it is the foundational framework within which all domain work (HR, Finance, Operations, IT, Legal, Marketing, etc.) is analyzed and acted upon.

Team members who have not internalized ST building blocks will read issue analyses as jargon and miss the structural insight that drives better decisions. This program builds the competency that makes the entire governance framework effective.

> **The core insight of ST**: Most persistent problems are not caused by bad intentions or inadequate effort. They are caused by the *structure of the system* — the stocks, flows, feedback loops, and delays that shape what happens over time. Changing behavior without changing structure produces temporary improvement at best.

---

## Program Structure

Three progressive levels. Each builds on the previous. Level-up requires both a quiz pass **and** practical application evidence.

```
L1 Introduction    →    L2 Practitioner    →    L3 Mastery
 (3–4 hours)             (6–8 hours)          (10–12 hrs + portfolio)
 No prerequisite      L1 quiz ≥ 70%          L2 + 2 real ST analyses
```

### Level 1 — Introduction

**Goal**: Build the mental model shift from linear thinking to systems thinking. Understand the core vocabulary well enough to read and interpret ST analyses in GitHub issues.

**Who needs it**: Every team member. No exceptions. L1 is the foundation for all subsequent work.

**Learning outcomes**:
- Explain the difference between linear and systems thinking
- Identify stocks and flows in a domain scenario
- Read a simple Causal Loop Diagram (CLD)
- Recognize when a delay is causing counterintuitive behavior
- Use the ST vocabulary reference card independently

**Duration**: ~3–4 hours self-paced

**Content**: [Module 1 — Introduction](./module-1-introduction.md)

**Assessment**: [Module 1 Quiz](./assessments/module-1-quiz.md) — 10 scenario questions, passing threshold 70%

---

### Level 2 — Practitioner

**Goal**: Perform a full ST analysis on a real GitHub issue. Draw a Causal Loop Diagram in Mermaid. Identify system archetypes. Propose leverage-point interventions.

**Who needs it**: Anyone who contributes to issue analysis — developers, leads, domain experts, agents.

**Prerequisites**: Module 1 quiz ≥ 70%

**Learning outcomes**:
- Distinguish reinforcing from balancing feedback loops and predict their behavior
- Recognize all 7 system archetypes from a description of a situation
- Draw a CLD in Mermaid syntax and commit it to `docs/models/`
- Complete the ST Analysis template for a real GitHub issue
- Identify Meadows leverage points 6–9 in a given scenario

**Duration**: ~6–8 hours self-paced

**Content**: [Module 2 — Practitioner](./module-2-practitioner.md)

**Assessment**: [Module 2 Quiz](./assessments/module-2-quiz.md) — 8 scenario questions + 2 practical exercises (draw a CLD, write ST analysis)

---

### Level 3 — Mastery

**Goal**: Lead ST analysis sessions, mentor others, model complex multi-loop systems, and identify high-leverage interventions in systems you have not previously analyzed.

**Who needs it**: Team leads, senior contributors, agents coordinating multi-domain work.

**Prerequisites**: Module 2 pass + ≥2 real ST analyses contributed to GitHub issues (linked evidence)

**Learning outcomes**:
- Analyze a multi-loop system and identify the dominant structure
- Identify stacked or interacting archetypes in a complex scenario
- Map cross-domain system interactions (e.g., how HR capacity affects Operations quality)
- Facilitate a structured ST analysis session with a team
- Mentor an L1 or L2 learner through their first real ST analysis

**Duration**: ~10–12 hours self-paced + portfolio assembly

**Content**: [Module 3 — Mastery](./module-3-mastery.md)

**Assessment**: [Module 3 Portfolio Assessment](./assessments/module-3-quiz.md) — evidence checklist, no timed quiz

---

## Completion Criteria Summary

| Level | Quiz / Assessment | Practical Evidence | Completion Record |
|-------|------------------|--------------------|-------------------|
| L1 | Module 1 Quiz ≥ 70% | None required | Team lead updates progress tracker |
| L2 | Module 2 Quiz pass + practical exercises | None additional (exercises ARE the evidence) | Team lead updates progress tracker |
| L3 | Portfolio checklist complete | ≥2 linked GitHub issues + facilitation session + peer review | Team lead updates progress tracker + links evidence |

---

## Resources and References

| Resource | Link |
|----------|------|
| ST Standard (core reference) | [docs/standards/systems-thinking.md](../../standards/systems-thinking.md) |
| ST Labels taxonomy | [docs/standards/domain-labels.md](../../standards/domain-labels.md) |
| ST Analysis template | [docs/standards/issue-workflow.md](../../standards/issue-workflow.md) |
| CLD models directory | [docs/models/README.md](../../models/README.md) |
| Progress Tracker | [assessments/progress-tracker.md](./assessments/progress-tracker.md) |
| Competency Rubric | [assessments/competency-rubric.md](./assessments/competency-rubric.md) |

### Canonical texts

- Donella Meadows, *Thinking in Systems* (Chelsea Green, 2008) — the primary reference
- Peter Senge, *The Fifth Discipline* (Doubleday, 1990) — organizational systems thinking
- Donella Meadows, *Leverage Points: Places to Intervene in a System* (1999) — free online
