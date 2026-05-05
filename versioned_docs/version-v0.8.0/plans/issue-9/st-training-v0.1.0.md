# ST Building Blocks Training Program

**Plan Version**: v0.1.0  
**Issue**: [#9 — HR Training: Systems Thinking Foundations](https://github.com/imranypatel/xp-org1/issues/9)  
**Branch**: `feature/9-st-training`  
**Version Bump**: v0.3.1 → v0.4.0 (MINOR — new training domain + content)  
**Domain**: `domain/hr` → `subdomain/training`  
**Status**: Implementation

---

## Issue Verbatim

> *Source*: GitHub Copilot CLI session  
> *User*: imranypatel  
> *Date*: 2025 (session context)

```
Under HR->Training, want to introduce first training, there will be more, to ensure that every
team member must understand ST Building Blocks and/or Elements to put ST in practice i.e. while
fulfilling their roles and responsibilities.. Prepare training material from introduction to
mastery level with a mechanism of assessment or evaluation of progress of each team member.
```

---

## Problem Statement

All governance standards and issue analyses reference Systems Thinking but assume the reader
already understands its building blocks. No structured training exists. Team members who have
not internalized stocks, flows, loops, delays, archetypes, and leverage points will struggle to
perform ST analyses on their domain issues — meaning the ST lens remains a documentation
convention rather than a living analytical practice.

This plan delivers the first entry in the `docs/training/` catalog: a three-level ST training
program with full module content and an assessment mechanism to verify and track each team
member's progress from awareness to mastery.

---

## Systems Analysis

**Affected Stocks**: Organizational ST competency, quality of issue analyses, leverage-point
identification rate

**Affected Flows**:
- Inflow: Training completion rate × competency per module
- Outflow: Skill decay (without practice reinforcement)

**Feedback Loops**:
- R1: More competent practitioners → richer ST analyses → more visible value → more motivation
  to complete training → more competent practitioners
- B1 (limiting): Training time required → opportunity cost → resistance → slower completion rate

**Delay**: Competency acquired in training does not improve issue quality until team members
apply it in real issues — typically 2–4 weeks after module completion.

**Archetype**: Limits to Growth — training adoption is limited by time available per person.
Without protected time allocation, B1 (time pressure) will dominate and completion rates stall.

**Leverage Point**: Meadows Level 2 — changing paradigms and mindsets across the entire team.
Second-highest leverage intervention in the system.

**ST Labels**: `st/leverage-point`, `st/reinforcing-loop`, `st/delay`

---

## Approach

### Training Structure

Three progressive levels. Each level has full module content, a scenario-based assessment,
and a prerequisite gate before progression.

| Level | Name | Duration | Prerequisite |
|-------|------|----------|-------------|
| L1 | Introduction | ~3–4 hrs | None (mandatory for all) |
| L2 | Practitioner | ~6–8 hrs | L1 quiz ≥ 70% |
| L3 | Mastery | ~10–12 hrs + portfolio | L2 pass + ≥ 2 real ST analyses in repo |

### Assessment Mechanism

| Component | Description |
|-----------|-------------|
| Module 1 quiz | 10 scenario questions (MCQ + short answer), passing ≥ 70% |
| Module 2 quiz | 8 scenario questions + 2 practical exercises (CLD + ST analysis) |
| Module 3 portfolio | 4 evidence items: ≥2 real issue analyses, ≥1 CLD in docs/models/, ≥1 facilitation session, ≥1 peer review |
| Competency rubric | Observable behavior descriptors per level for team leads |
| Progress tracker | Markdown table: Name × Module × Date × Score × Evidence |
| GitHub Projects (follow-up) | Visual Kanban board — out of scope, tracked as Issue #10 |

---

## File Map

| File | Action |
|------|--------|
| `docs/training/README.md` | New — training catalog index |
| `docs/training/_category_.json` | New — Docusaurus sidebar config |
| `docs/training/systems-thinking/overview.md` | New — program overview + level map |
| `docs/training/systems-thinking/_category_.json` | New |
| `docs/training/systems-thinking/module-1-introduction.md` | New — full L1 content (~13.9KB) |
| `docs/training/systems-thinking/module-2-practitioner.md` | New — full L2 content (~21.5KB) |
| `docs/training/systems-thinking/module-3-mastery.md` | New — full L3 content (~16.7KB) |
| `docs/training/systems-thinking/assessments/_category_.json` | New |
| `docs/training/systems-thinking/assessments/competency-rubric.md` | New |
| `docs/training/systems-thinking/assessments/progress-tracker.md` | New |
| `docs/training/systems-thinking/assessments/module-1-quiz.md` | New |
| `docs/training/systems-thinking/assessments/module-2-quiz.md` | New |
| `docs/training/systems-thinking/assessments/module-3-quiz.md` | New — portfolio checklist |
| `docs/plans/issue-9/_category_.json` | New |
| `docs/plans/issue-9/st-training-v0.1.0.md` | This file |
| `sidebars.js` | Update — add Training section + issue-9 plan entry |
| `docusaurus.config.js` | Update — `lastVersion: 'v0.4.0'` |
| `versions.json` + `versioned_docs/version-v0.4.0/` | Auto-generated by `docs:version` |

All files are risk **Green** — new documentation, no breaking changes.

---

## Version Rationale

MINOR bump (v0.3.1 → v0.4.0): Adds a new documentation domain (`docs/training/`) and 13 new
files. No existing documents are modified. Backward-compatible additive change per semantic
versioning standard.
