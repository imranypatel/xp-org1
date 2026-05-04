# Training Catalog

**Version**: v0.5.0  
**Issue**: [#11 — HR Training: Learning as a System](https://github.com/imranypatel/xp-org1/issues/11)  
**Domain**: `domain/hr` → `subdomain/training`  
**Status**: Active

---

## Overview

This catalog is the entry point for all training programs in `xp-org1`. Training is organized by domain and level — each program builds a specific capability that team members apply directly to their daily work within the issue-driven, Systems Thinking-based governance framework.

Training is an HR domain responsibility but the content is cross-cutting: every team member completes the Systems Thinking Foundations program regardless of their primary domain (Operations, Finance, Marketing, IT, Legal, etc.).

---

## Active Training Programs

| Program | Domain | Levels | Status |
|---------|--------|--------|--------|
| [Systems Thinking Foundations](./systems-thinking/overview.md) | Cross-cutting (HR delivery) | L1 Introduction → L2 Practitioner → L3 Mastery | ✅ Active (v0.4.0) |
| [Learning as a System](./learning-as-a-system/overview.md) | HR / Cross-cutting | L1 The Learning System → L2 Learning System Design → L3 Organizational Learning | ✅ Active (v0.5.0) |

---

## Planned Programs

The following training areas are identified but not yet scoped (future issues):

| Program | Domain | Notes |
|---------|--------|-------|
| Issue-Driven Governance Workflow | Governance | How to create, triage, and resolve issues using the ST lens |
| GitHub Platform Fundamentals | IT | Git, Issues, Pull Requests, GitHub Actions for non-engineers |
| Causal Loop Diagramming Workshop | Systems Thinking | Hands-on CLD creation in Mermaid (prerequisite: ST L2) |
| Domain-Specific ST Application | Per domain | HR, Finance, Marketing, Operations — applied ST in each domain |
| Agent Orchestration Basics | IT / Governance | Working with AI agents in the Copilot CLI governance workflow |

---

## How Training Works

1. **Identify program** — Use this catalog to find relevant training.
2. **Complete modules** — Self-paced. Use the module documents, exercises, and linked references.
3. **Take the assessment** — Each level has a scenario-based quiz. Pass threshold and practical evidence required for level-up.
4. **Record progress** — Team lead updates the [progress tracker](./systems-thinking/assessments/progress-tracker.md).
5. **Apply in real work** — L2 and L3 require demonstrated application in at least one real GitHub issue before progressing.

---

## Progress Tracking

- **Individual tracking**: [ST Training Progress Tracker](./systems-thinking/assessments/progress-tracker.md) · [LaaS Progress Tracker](./learning-as-a-system/assessments/progress-tracker.md)
- **Visual board**: GitHub Projects Kanban (Issue #10 — planned)

---

## Adding a New Training Program

1. Create a GitHub issue with domain `domain/hr`, type `type/training`.
2. Add a folder under `docs/training/{program-slug}/`.
3. Add the program to this catalog table.
4. Create an issue plan in `docs/plans/issue-N/`.
5. Follow the standard release process (branch, PR, version snapshot).
