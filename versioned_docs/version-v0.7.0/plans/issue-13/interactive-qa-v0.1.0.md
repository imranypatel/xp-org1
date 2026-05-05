---
id: interactive-qa-v0.1.0
title: "Interactive Q&A — v0.1.0"
sidebar_label: "Interactive Q&A v0.1.0"
---

# Plan: Interactive Q&A on Training Pages

**Plan Version**: v0.1.0  
**Issue**: [#13 — IT/HR: Interactive Q&A on Training Pages](https://github.com/imranypatel/xp-org1/issues/13)  
**Branch**: `feature/13-interactive-qa`  
**Version Bump**: v0.5.0 → v0.6.0 (MINOR — new interactive feature)  
**Domain**: `domain/hr` → `subdomain/training` + `domain/it` → `subdomain/infrastructure`  
**Status**: In Progress

---

## Issue Verbatim

```
While going through the training material, can we make the experience of learning more
interactive? Can we add a feature that enables a learner to ask questions about the
content and copilot in the background answers to the question only if it is relevant
to content or context. This helps learner to improve understanding. Q&A may be recorded
and could be used as feedback to improve training content. To access Q&A feature, a
learner must be the registered user/member of the doc site. Only Github account holders
are allowed to become registered user of the doc site.
```

*Source: GitHub Copilot CLI session — user: imranypatel*

---

## Problem Statement

Training content in Docusaurus is currently read-only. Learners who encounter confusing
concepts, want clarification, or need application guidance have no in-context mechanism
to get help. They must leave the page, search externally, or ask colleagues manually —
breaking the learning flow (interrupting the R1 Competence Loop at the Effort inflow).

Additionally, there is no feedback loop from learners back to content authors. Questions
that reveal gaps in the training material are invisible to the content team.

This plan delivers a GitHub-native, asynchronous Q&A system embedded in the Docusaurus
training pages — powered by GitHub Discussions (storage + auth) and GitHub Models API
(AI answering), with no additional infrastructure beyond the existing GitHub Pages
deployment.

---

## ST Analysis

**Affected Stocks**: Learner knowledge stock, training content quality stock,
team learning culture stock

**Affected Flows**:
- New inflow: AI-answered Q&A → increases learner knowledge stock at the moment of confusion
- New inflow: Q&A → content feedback → improvements → better training quality stock
- Potential outflow reduction: fewer learners abandoning the R1 loop due to unanswered confusion

**Feedback Loops**:
- New R: Q&A reduces confusion → competence grows → confidence → more questions asked → richer Q&A → better content → more confidence
- Existing R1 (Competence Loop) strengthened by reducing the delay between confusion and resolution

**Delays**:
- AI answering is asynchronous (~1–5 minutes) — not a real-time chat
- Content improvements triggered by Q&A feedback require a human review step

**Archetype**: Limits to Growth — the R1 learning loop hits a constraint when learners
encounter concepts without a feedback mechanism. This feature removes that constraint.

**Leverage Point**: Meadows Level 6 — structure of information flows (making it easy to ask
and receive answers in-context changes the information available to the learner at the
moment it's needed)

**ST Labels**: `st/feedback-loop`, `st/delay`, `st/leverage-point`, `st/archetype`

---

## Architecture

### Chosen Approach: GitHub-Native (no additional servers)

```
Learner (GitHub user)
  ↓ authenticates via Giscus GitHub App (GitHub OAuth)
  ↓ types question in Giscus widget on training page
  ↓ question posted as GitHub Discussion comment (Q&A category)
                        ↓
        GitHub Actions (ai-qa-responder.yml)
          - triggers on discussion_comment.created
          - filters: Q&A category only, not-bot comments
          - reads parent discussion URL → maps to docs/ file
          - reads training content from repo
          - calls GitHub Models API (gpt-4o)
          - posts AI answer as reply comment
                        ↓
        Learner receives GitHub notification
        Answer visible in Giscus widget on page
```

### Technology Stack

| Component | Technology | Notes |
|-----------|-----------|-------|
| Auth | Giscus GitHub App | No server needed; handles GitHub OAuth |
| Q&A UI | `@giscus/react` component | Injected into training pages via swizzled DocItem footer |
| Storage | GitHub Discussions (Q&A category) | Native GitHub; searchable; learners get notifications |
| AI Answering | GitHub Actions + GitHub Models API | Async; ~1–5 min response time |
| Relevance gate | AI system prompt | Instructs model to decline off-topic questions |

---

## Manual Setup Required (Repository Owner)

Before the Q&A feature works for learners, the following one-time steps must be completed manually (cannot be automated):

| Step | Action | Location |
|------|--------|----------|
| 1 | Enable GitHub Discussions | `github.com/imranypatel/xp-org1/settings` → Features |
| 2 | Create "Training Q&A" discussion category (Q&A format) | `github.com/imranypatel/xp-org1/discussions` |
| 3 | Get Giscus config values (`data-category-id`) | `giscus.app` |
| 4 | Update `src/theme/DocItem/Footer/index.jsx` with `categoryId` | Local file edit + PR |
| 5 | Create fine-grained PAT (Discussions R/W on this repo) | `github.com/settings/tokens?type=beta` |
| 6 | Store PAT as GitHub Actions Secret `GH_MODELS_PAT` | `github.com/imranypatel/xp-org1/settings/secrets/actions` |
| 7 | Install Giscus GitHub App on this repo | `github.com/apps/giscus` |

Full details: [Q&A System Standard](../../standards/qa-system.md)

---

## Files Delivered

| File | Action | Risk |
|------|--------|------|
| `src/theme/DocItem/Footer/index.jsx` | New — Docusaurus swizzle: injects Giscus on training pages | 🟢 |
| `.github/workflows/ai-qa-responder.yml` | New — async AI answering via GitHub Actions | 🟢 |
| `docs/standards/qa-system.md` | New — full system documentation + admin setup guide | 🟢 |
| `docs/plans/issue-13/_category_.json` | New | 🟢 |
| `docs/plans/issue-13/interactive-qa-v0.1.0.md` | New — this document | 🟢 |
| `package.json` | Updated — added `@giscus/react` dependency | 🟡 |
| `sidebars.js` | Updated — qa-system in Standards; issue-13 plan in Plans | 🟡 |
| `docusaurus.config.js` | Updated — `lastVersion: 'v0.6.0'` | 🟡 |
| `versioned_docs/version-v0.6.0/` | Auto-generated by `npx docusaurus docs:version v0.6.0` | 🟢 |

---

## Version Rationale

MINOR bump (v0.5.0 → v0.6.0): Adds a new interactive feature with new npm dependency
(`@giscus/react`) and a new GitHub Actions workflow. No breaking changes to existing
training content. Additive change.

---

## Known Limitations

1. **Async only**: AI answers appear after ~1–5 minutes, not in real-time
2. **GitHub account required**: By design — only GitHub users can access Q&A
3. **`categoryId` placeholder**: Must be updated after Giscus setup (Step 3 above) before going live
4. **GitHub Models rate limits**: Free tier limits apply; high volume may cause skipped replies
5. **Phase 2 deferred**: Q&A analytics, weekly digest, admin dashboard are out of scope

---

## Future Phases

| Phase | Scope |
|-------|-------|
| Phase 2 | Weekly GitHub Actions digest: summarize Q&A → auto-draft content improvement issues |
| Phase 3 | Reaction feedback (👍/👎) feeds into model prompting |
| Phase 4 | Admin analytics dashboard |
