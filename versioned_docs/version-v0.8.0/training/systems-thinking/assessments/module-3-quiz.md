# Module 3 Portfolio Assessment

**Level**: L3 — Mastery  
**Format**: Portfolio of evidence (no timed quiz)  
**Prerequisite**: Module 2 passed + ≥ 2 real GitHub issue ST analyses completed  
**Completion**: Team lead reviews portfolio and signs off in [Progress Tracker](./progress-tracker.md)

---

## Overview

The Mastery portfolio is not a test of knowledge recall — it is evidence of application. Every item in the portfolio must reference real, verifiable work: actual GitHub issues, committed CLDs, and documented sessions. No hypothetical scenarios count at this level.

---

## Portfolio Checklist

Submit the following to your team lead for review. Provide links or documentation for each item.

### 1. ST Analyses in Real Issues (Required: ≥ 2)

Each analysis must:
- Be published as a comment or section in an actual GitHub issue in `imranypatel/xp-org1`
- Use the full ST Analysis template (all 8 fields populated)
- Include at least one identified loop and one identified delay
- Assign an archetype with justification
- Assign a Meadows leverage point with justification

**Submission format**:
```
Issue link 1: https://github.com/imranypatel/xp-org1/issues/N
  - Loop(s) identified: [names]
  - Archetype: [name]
  - Leverage point: Meadows Level N
  - Reviewer comment (if any): 

Issue link 2: https://github.com/imranypatel/xp-org1/issues/N
  - Loop(s) identified: [names]
  - Archetype: [name]
  - Leverage point: Meadows Level N
  - Reviewer comment (if any): 
```

**Rubric**:

| Criterion | Full credit | Partial credit | No credit |
|-----------|------------|----------------|-----------|
| Real issue | Published in actual GitHub issue | Draft or hypothetical | Absent |
| All template fields | All 8 fields populated with substance | Most fields present | Template skeleton only |
| Loop quality | Loops closed, labeled R/B, named | Loop described but not formally labeled | Absent or incorrect |
| Archetype | Named + justified in context | Named only | Wrong or absent |
| Leverage point | Meadows level cited + justified | Level cited | Absent |

---

### 2. Causal Loop Diagram in docs/models/ (Required: ≥ 1)

The CLD must:
- Be committed to `docs/models/issue-N/cld-{slug}.md` in the main branch
- Use Mermaid syntax that renders correctly
- Contain ≥ 4 nodes and ≥ 1 closed loop
- Include a Reading Guide section explaining the key insight

**Submission format**:
```
CLD file: docs/models/issue-N/cld-{slug}.md
GitHub link: https://github.com/imranypatel/xp-org1/blob/main/docs/models/...
Loop(s) modeled: [names]
Key structural insight revealed:
```

**Rubric**:

| Criterion | Full credit | Partial credit | No credit |
|-----------|------------|----------------|-----------|
| Committed to main | In main branch, renders | In branch only | Not committed |
| Mermaid renders | Renders correctly in GitHub | Minor errors | Does not render |
| Loop closure | ≥ 1 loop closes | Loop nearly closes | No closed loop |
| Reading Guide | Explains starting point and key insight | Present but superficial | Absent |

---

### 3. Facilitation Session (Required: ≥ 1)

Must be a real session with at least one other team member. Self-facilitation does not count.

The session must:
- Follow the 60–90 minute structure from Module 3, Part 5
- Address a real organizational issue or problem (not a textbook exercise)
- Produce a documented output: a CLD or written ST analysis of the problem discussed

**Submission format**:
```
Session date: YYYY-MM-DD
Participants: [names/roles — no personal details required]
Problem analyzed: [one-sentence description]
Output produced: [link to CLD or ST analysis]
What surprised the team: [brief note]
What you would do differently: [brief note]
```

**Rubric**:

| Criterion | Full credit | Partial credit | No credit |
|-----------|------------|----------------|-----------|
| Real session | With ≥ 1 other team member | Solo practice | Not conducted |
| Real problem | Actual organizational issue | Textbook scenario | Hypothetical |
| Documented output | CLD or written ST analysis produced | Session notes only | No documentation |
| Reflection | Both fields completed with substance | Minimal | Absent |

---

### 4. Peer Review of a Colleague's ST Analysis (Required: ≥ 1)

Review an ST analysis written by a colleague at L1 or L2. The review must:
- Be published as a comment on the GitHub issue containing the analysis
- Address at minimum: loop identification, archetype, and leverage point
- Be constructive — point to specific improvements, not just errors
- Conclude with a 1-sentence overall assessment

**Submission format**:
```
Issue reviewed: https://github.com/imranypatel/xp-org1/issues/N
Colleague's level: L1 / L2
Review comment link: https://github.com/.../issues/N#issuecomment-...
Key improvement suggested:
```

**Rubric**:

| Criterion | Full credit | Partial credit | No credit |
|-----------|------------|----------------|-----------|
| Published as GitHub comment | On the issue, visible | Shared privately | Not published |
| Addresses loop + archetype + leverage | All three addressed | Two addressed | One or none |
| Constructive | Suggests specific improvements | Identifies errors without guidance | Only praise or only criticism |
| Overall assessment | One-sentence summary present | Implied | Absent |

---

## Team Lead Review

The team lead reviews all four portfolio items against the rubrics above. Approval requires:

- Items 1–4 all present
- No "No credit" ratings in any criterion
- ≥ 50% "Full credit" ratings across all criteria

If any item receives "No credit", it must be resubmitted before the portfolio is approved.

**Team lead signs off** by updating the [Progress Tracker](./progress-tracker.md) with:
- L3 completion date
- Portfolio link (GitHub issue, document, or folder)
- Any notes on exceptional work or areas to develop further

---

## After Completing Level 3

L3 mastery is not a finish line. It is the beginning of ongoing contribution:

1. **Contribute CLDs** to `docs/models/` for complex issues
2. **Facilitate ST sessions** for new issues as they arise
3. **Mentor L1 and L2 learners** through their assessments
4. **Refine training materials** — raise issues when module content needs updating
5. **Identify next training needs** — what other domains would benefit from dedicated training programs?
