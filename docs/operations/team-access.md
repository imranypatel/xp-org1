---
title: Team Member Registry — AI Q&A Access Control
sidebar_label: Team Member Registry
sidebar_position: 1
---

# Team Member Registry — AI Q&A Access Control

**Related Issue**: [#24 — Restrict AI Q&A to registered team members](https://github.com/imranypatel/xp-org1/issues/24)
**Version**: v0.7.0

## Overview

The AI Q&A feature on training pages is restricted to registered team members. When a learner
posts a question on a training page, the AI responder workflow checks whether their GitHub
username appears in the **team member registry** before calling the AI model.

- **Registered team members** receive an AI-generated answer within a few minutes.
- **Non-members** receive a polite rejection message with instructions for requesting access.

## Registry File

The team member list is maintained in:

```
.github/team-members.yml
```

This file is version-controlled. All changes go through a Pull Request and require
approval from a team admin before merging.

### Format

```yaml
members:
  - github-username-1
  - github-username-2
```

GitHub usernames are **matched case-insensitively**. All entries should be lowercase
by convention.

## Current Team Members

| GitHub Username | Added | Removed |
|----------------|-------|---------|
| `imranypatel` | v0.7.0 | — |
| `atiq-orbitdev` | v0.7.0 | — |
| `patelyousuf` | v0.7.0 | — |
| `hmjk-2025` | v0.7.0 | — |
| `patelyahya` | v0.7.0 | v0.8.1 |

## Adding a Team Member

1. Open a Pull Request that adds the GitHub username to `.github/team-members.yml`
2. Get approval from a team admin
3. Merge the PR — the new member can immediately use the Q&A feature

**Example PR change:**

```yaml
members:
  - imranypatel
  - atiq-orbitdev
  + - newteammember   # ← add the new username here
```

## Removing a Team Member

1. Open a Pull Request that removes the GitHub username from `.github/team-members.yml`
2. Get approval from a team admin
3. Merge the PR — the removed member will receive rejection messages on future questions

## How the Check Works

The `ai-qa-responder` GitHub Actions workflow:

1. Receives a `discussion_comment.created` event (when someone posts in Giscus)
2. Checks if the discussion is in the **Training Q&A** category
3. **Normalises the commenter's username to lowercase** and looks for it in `.github/team-members.yml` using a case-insensitive grep
4. If found → proceeds to fetch training content and call the AI model
5. If not found → posts a rejection message via GitHub GraphQL API and exits

## Admin Responsibilities

Team admins are responsible for:

- Reviewing and approving membership addition/removal PRs
- Keeping the registry accurate as team membership changes
- Updating this document when members are added or removed

:::info
This restriction applies **only to the AI assistant response** — it does not prevent anyone
with a GitHub account from viewing the training content or posting a comment via Giscus.
The AI simply will not reply to comments from non-members.
:::
