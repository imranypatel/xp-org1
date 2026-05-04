---
id: qa-system
title: Interactive Q&A System
sidebar_label: Q&A System
---

# Interactive Q&A System

**Standard Version**: v0.1.0  
**Related Issue**: [#13 — Interactive Q&A on Training Pages](https://github.com/imranypatel/xp-org1/issues/13)  
**Introduced in**: v0.6.0  
**Domain**: `domain/it` + `domain/hr`

---

## Overview

Every training page on this documentation site includes an embedded Q&A widget at the bottom. Learners can ask questions about the training content and receive AI-assisted answers within a few minutes.

The system is entirely GitHub-native — no external servers, no separate databases, no third-party accounts beyond GitHub.

```
Learner (GitHub user)
  ↓ signs in via Giscus (GitHub OAuth — no new account needed)
  ↓ types a question in the Q&A widget on the training page
  ↓ question is stored as a GitHub Discussion comment (Training Q&A category)
                         ↓
       GitHub Actions: ai-qa-responder workflow
         — triggered by discussion_comment.created event
         — reads training content from the repo
         — calls GitHub Models API (gpt-4o)
         — posts AI-generated answer as a reply
                         ↓
       Learner receives a GitHub notification
       Answer is visible in the Giscus widget on the page
```

---

## Components

| Component | Technology | Purpose |
|-----------|-----------|---------|
| Authentication | Giscus GitHub App (OAuth) | No separate account needed; GitHub identity only |
| Q&A UI widget | `@giscus/react` | Embedded in every training page footer |
| Storage | GitHub Discussions ("Training Q&A" category) | Persistent; searchable; learners get GitHub notifications |
| AI answering | GitHub Actions + GitHub Models API (gpt-4o) | Async; ~1–5 minute response time |
| Relevance gate | AI system prompt | Model is instructed to decline off-topic questions |
| Page mapping | Discussion URL → repo file path | Workflow resolves URL to actual `.md` file |

---

## How It Works for Learners

1. Scroll to the bottom of any training page.
2. Click **"Sign in with GitHub"** in the Q&A widget.
3. You will be asked to authorize the **Giscus** GitHub App — this is the only permission needed.
4. Type your question and submit.
5. Within a few minutes, an AI-generated reply will appear in the widget.
6. You can also visit the corresponding [GitHub Discussion](https://github.com/imranypatel/xp-org1/discussions) directly.

### What kinds of questions get answered?

The AI assistant answers questions **relevant to the content on the current training page only**. Off-topic questions receive a polite redirection.

> ✅ "Can you explain the difference between a reinforcing and balancing loop with an example from HR?"  
> ✅ "In Module 2, what does the Limits to Growth archetype look like in a learning context?"  
> ❌ "What is the weather in London?" (off-topic — not related to training)  
> ❌ "Write me a Python script" (off-topic)

### Disclaimer

AI-generated answers may be imperfect or incomplete. Always apply your own judgement. If an answer seems wrong, react with 👎 or raise it as a GitHub Issue for the training team.

---

## ST Lens: Q&A as a Feedback Loop

This system strengthens the **R1 Competence Reinforcing Loop** identified in the Learning as a System training:

```
Confusion encountered → question asked (in-context) → AI answer received →
confusion resolved → understanding deepens → competence grows →
confidence → motivation → more engagement → more questions asked →
richer Q&A feedback → content improves → better training →
less confusion at the outset
```

**Leverage Point (Meadows Level 6)**: Making information available at the moment it's needed — right on the training page — changes the information available to the learner without requiring them to leave the learning context.

**Delay reduced**: From "confusion lingers until next team meeting or forgotten" (~days) to "answer within minutes".

---

## Setup Guide (Repository Owner / Admin)

The following steps must be completed **once** before the Q&A feature works for learners. They cannot be automated.

### Step 1 — Enable GitHub Discussions

1. Go to `https://github.com/imranypatel/xp-org1/settings`
2. Scroll to **Features**
3. Check ✅ **Discussions**
4. Click **Save**

### Step 2 — Create the "Training Q&A" Discussion Category

1. Go to `https://github.com/imranypatel/xp-org1/discussions`
2. Click **Categories** (left panel) → **New category**
3. **Name**: `Training Q&A`
4. **Description**: `Ask questions about training content. AI-assisted answers via GitHub Models.`
5. **Discussion Format**: **Question & Answer** ← important (enables "Mark as Answered")
6. Click **Create**

### Step 3 — Get Giscus Configuration Values

1. Go to `https://giscus.app`
2. Enter repository: `imranypatel/xp-org1`
3. Select mapping: **pathname**
4. Select category: `Training Q&A`
5. Note the values shown for `data-repo-id` and `data-category-id`
6. Open `src/theme/DocItem/Footer/index.jsx` and replace `REPLACE_WITH_CATEGORY_ID` with the `data-category-id` value

> The `repoId` value in the file (`R_kgDOI2qNng`) is already set correctly for this repository.

### Step 4 — Create a GitHub PAT for GitHub Models API

1. Go to `https://github.com/settings/tokens?type=beta` (your personal account settings)
2. Click **Generate new token (fine-grained)**
3. Configure:
   - **Name**: `xp-org1-models-api`
   - **Expiration**: 1 year (recommended)
   - **Repository access**: Only `imranypatel/xp-org1`
   - **Repository Permissions**: `Discussions: Read and write`
4. Click **Generate token** and **copy the value immediately** (it is shown only once)

> GitHub Models API access requires a valid GitHub PAT. No special Models permission scope is needed — access is tied to your GitHub account's access level.

### Step 5 — Store PAT as GitHub Actions Secret

> **What is a GitHub Actions Secret?** Encrypted storage built into GitHub. The token is never written to any file or committed to the repo. Only GitHub Actions workflows can read it at runtime, and it is masked in all logs.

1. Go to `https://github.com/imranypatel/xp-org1/settings/secrets/actions`
2. Click **New repository secret**
3. **Name**: `GH_MODELS_PAT`
4. **Secret**: paste the PAT token value from Step 4
5. Click **Add secret**

The token is now encrypted at rest in GitHub's infrastructure. It is referenced in the workflow as `${{ secrets.GH_MODELS_PAT }}` — GitHub substitutes the actual value at runtime.

### Step 6 — Install the Giscus GitHub App

1. Go to `https://github.com/apps/giscus`
2. Click **Install**
3. Select repository: `imranypatel/xp-org1`
4. Click **Install**

Once Steps 1–6 are complete, the Q&A feature is live for all learners with GitHub accounts.

---

## AI Responder Workflow

**File**: `.github/workflows/ai-qa-responder.yml`

### Triggers and Guards

| Check | Condition | Action if failed |
|-------|-----------|-----------------|
| Trigger | `discussion_comment.created` | n/a (not triggered) |
| Author guard | Comment author ≠ `github-actions[bot]` | Skip (prevents infinite loop) |
| Category guard | Discussion category = `Training Q&A` | Skip (only Q&A category processed) |

### File Resolution

The workflow maps the Giscus discussion title (page URL) to a docs file:

| URL | Resolved file |
|-----|--------------|
| `https://imranypatel.github.io/xp-org1/training/learning-as-a-system/module-1-introduction` | `docs/training/learning-as-a-system/module-1-introduction.md` |
| `https://imranypatel.github.io/xp-org1/training/systems-thinking/module-2-practitioner` | `docs/training/systems-thinking/module-2-practitioner.md` |

### AI System Prompt (Relevance Gate)

The model is instructed to respond `OUT_OF_SCOPE:` for off-topic questions. The workflow detects this prefix and substitutes a polite redirection message rather than posting the raw model output.

### Rate Limits

GitHub Models API free tier has rate limits. For exact limits, check: `https://docs.github.com/en/github-models/prototyping-with-ai-models#rate-limits`

If limits are hit, the workflow will fail silently (exit 0, no reply posted). Monitor via the Actions tab.

---

## Q&A Moderation and Feedback Loop

### Reviewing Q&A as Content Feedback

Q&A discussions accumulate organically over time. The training team should:

1. **Monthly**: Browse [Training Q&A discussions](https://github.com/imranypatel/xp-org1/discussions/categories/training-q-a) and look for patterns — recurring questions indicate gaps in the training content
2. **Create GitHub Issues**: For any identified gap, create a GitHub Issue under the relevant training module with label `type/content-improvement`
3. **Mark answered**: Use the GitHub Discussions "Mark as answered" feature on Q&A discussions where the AI response was correct and complete

### Reactions as Signals

Learners can react to AI answers with 👍 (helpful) or 👎 (unhelpful/incorrect). These reactions are visible in the GitHub Discussion and can be used as quick indicators of answer quality.

---

## Known Limitations

| Limitation | Detail |
|-----------|--------|
| Async only | AI answers appear after ~1–5 minutes, not in real time |
| GitHub account required | Learners must have a GitHub account |
| `categoryId` placeholder | Must be updated after Step 3 (manual setup) before going live |
| Models rate limits | Free tier; very high volume may hit limits |
| AI answer quality | Model sees only the current page content; unusually-phrased questions may get false OUT_OF_SCOPE responses |

---

## Future Phases

| Phase | Scope |
|-------|-------|
| Phase 2 | Weekly GitHub Actions digest: summarize Q&A topics → auto-draft content improvement issues |
| Phase 3 | "Mark as helpful" / "Incorrect" reactions feed into model prompting improvements |
| Phase 4 | Admin dashboard: Q&A analytics, per-module question heatmap |
