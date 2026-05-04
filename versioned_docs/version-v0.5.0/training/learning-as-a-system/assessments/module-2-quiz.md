# Module 2 Quiz — Learning System Design

**Level**: L2  
**Passing threshold**: Scenario questions ≥ 70% AND both practical exercises submitted  
**Format**: 8 scenario questions + 2 practical exercises  
**Prerequisite**: [Module 1 Quiz](./module-1-quiz.md) passed  
**After passing**: Complete ≥ 2 real learning challenge ST analyses in GitHub issues, then begin [Module 3](../module-3-mastery.md)

Record your score and completion in the [Progress Tracker](./progress-tracker.md).

> Answer key for scenario questions is at the bottom. Attempt all questions first.

---

## Section A: Scenario Questions (1 point each)

**Q1.** A developer has been improving rapidly — her skills are growing, her confidence is high, and she is taking on increasingly complex tasks. Then her organization mandates a 3-month crunch with 60-hour weeks. Her learning rate drops to near zero. Which archetype is most accurately describing her situation?

- A) Fixes that Fail
- B) Shifting the Burden
- C) Limits to Growth — the reinforcing competence loop is being constrained by the time pressure limit
- D) Escalation

---

**Q2.** A team has solved its recurring deployment failure problem three times in two years:
- Year 1: Added more pre-deployment testing
- Year 2: Extended the testing window
- Year 3: Added a dedicated QA reviewer

Failures continue to recur at the same rate each time a fix is "settled." Which archetype is operating, and what is the structural fix?

- A) Eroding Goals — the quality target keeps changing
- B) Fixes that Fail — each intervention relieves the symptom without addressing the root cause (ask: why are failures occurring in the first place, not just how to catch them)
- C) Limits to Growth — the testing infrastructure has hit a ceiling
- D) Tragedy of the Commons — multiple teams share the deployment pipeline

---

**Q3.** A data analyst always uses AI tools to generate her SQL queries. She is fast and her output is accurate. After 18 months, she is asked to write SQL without AI access during a critical outage. She cannot. Which archetype is this?

- A) Eroding Goals
- B) Limits to Growth
- C) Shifting the Burden — external tool dependency has replaced internal capability development; her skill stock has been drained (or never built) because the burden of SQL writing was shifted to the tool
- D) Fixes that Fail

---

**Q4.** An organization's learning goals were initially: "All engineers achieve L2 on three core technologies within 12 months." By month 6, under project pressure, the goal was revised to "L1 on three technologies." By month 10: "L1 on one technology." Actual engineer competency has not changed throughout. Which archetype is this?

- A) Fixes that Fail
- B) Eroding Goals — the performance gap has been closed by lowering the standard, not improving the stock
- C) Shifting the Burden
- D) Limits to Growth

---

**Q5.** According to Argyris, double-loop learning differs from single-loop learning in that:

- A) Double-loop takes longer and is therefore less useful in time-pressured environments
- B) Double-loop questions the underlying goals, rules, or assumptions — not just the action taken to meet them
- C) Double-loop involves more people and therefore requires more coordination
- D) Double-loop is used for strategic decisions; single-loop for operational decisions

---

**Q6.** Which of Meadows' leverage points would you classify this intervention: "Create a team wiki where every team member documents one new thing they learned per week, visible to all"?

- A) Level 12 — parameters (adjusting documentation frequency)
- B) Level 6 — structure of information flows (making learning visible changes behavior through the R1 competence loop)
- C) Level 4 — rules (mandating documentation)
- D) Level 2 — paradigms

---

**Q7.** A manager increases training investment during a busy quarter. Six months later, domain quality has improved significantly, errors have dropped, and team members report having more time. What structural dynamic explains this improvement coming after the investment, not during it?

- A) The training was only applied once the busy quarter was over
- B) The delay between training investment (inflow to competency stock) and quality improvement (outflow reduction) — the benefit was always coming; it arrived after the delay
- C) The competency loop activated during the training itself
- D) Team members chose to apply their new skills only after the quarter

---

**Q8.** A team's Personal Mastery stock (individual competency) is high but their Team Learning stock (collective capability greater than individual sum) is low. What is the most likely structural gap?

- A) Training programs need more content
- B) Knowledge transfer flows are weak — individuals are not sharing what they know with the team; documentation, pairing, and mentoring flows are insufficient despite high individual stocks
- C) Mental model quality is too low for shared learning
- D) Systems Thinking capacity is insufficient

---

## Section B: Practical Exercises

### Exercise A — CLD of Your Personal Learning System (Required for passing)

**Task**: Choose a skill you are currently developing or recently developed. Draw a Causal Loop Diagram of your **personal learning system** for that skill.

Requirements:
1. At least **5 variables** (e.g., skill stock, practice frequency, confidence, motivation, forgetting rate, etc.)
2. At least **2 closed loops** (one R, one B)
3. At least **one delay** marked
4. Mermaid syntax that renders correctly
5. A brief Reading Guide (2–4 sentences: where does the loop start, what is the key structural insight?)

**Submission**: Commit the CLD to `docs/models/issue-11/cld-{your-name}-learning.md`. Link the file:

```
CLD committed at: docs/models/issue-11/cld-{slug}.md
Skill analyzed: [name]
Key structural insight: [one sentence — what does the CLD reveal that wasn't obvious?]
```

**Rubric**:

| Criterion | Full credit | Partial credit | No credit |
|-----------|------------|----------------|-----------|
| ≥ 5 variables | All 5 present | 3-4 present | Fewer than 3 |
| ≥ 2 closed loops (R + B) | Both present, correctly labeled | One loop present | No closed loop |
| Delay marked | Present with description | Present, unlabeled | Absent |
| Mermaid renders | Renders correctly | Minor errors, intent clear | Does not render |
| Reading Guide | 2+ sentences, non-obvious insight | 1 sentence | Absent |

---

### Exercise B — ST Analysis of a Team Learning Failure (Required for passing)

**Task**: Complete the ST Analysis template for a real or realistic team learning failure — a situation where knowledge or skills were expected but absent, or where a team repeatedly made the same mistakes.

```markdown
## 🔄 Systems Analysis

**Issue**: [Describe the learning failure or link to a GitHub issue if real]
**Domain**: [domain/] + hr/training

**Affected Stocks**: 
**Affected Flows**:
  - Inflow: 
  - Outflow: 
**Feedback Loops**:
  - R (Reinforcing): 
  - B (Balancing): 
**Delays**: 
**Archetype**: 
**Leverage Point**: [Meadows level N — justification]
**ST Labels**: [st/ labels]
**Structural Fix**: [One specific structural change that addresses the root cause, not the symptom]
```

**Rubric**:

| Criterion | Full credit | Partial credit | No credit |
|-----------|------------|----------------|-----------|
| Stocks | ≥ 2 credible stocks named | 1 stock | None or flows mislabeled |
| Flows | Both inflow and outflow named | Only one direction | None |
| Loop | At least one loop described | Loop mentioned, vague | Absent |
| Archetype | Named + justified in the learning context | Named only | Wrong or absent |
| Leverage point | Meadows level cited + justified | Level only | Absent |
| Structural fix | Specifically addresses root cause identified | Symptomatic fix only | Absent |

---

## Answer Key — Section A

<details>
<summary>Click to reveal answers (attempt all questions first)</summary>

**Q1. Correct: C — Limits to Growth**  
The reinforcing loop (competence → confidence → motivation → learning) is running, but the limiting condition (available time) is now constraining the learning rate inflow. Pushing harder on the learning effort (more study despite 60-hour weeks) hits the constraint harder. The leverage: reduce the constraint (protect learning time even during crunch), not increase effort on the growth side.

**Q2. Correct: B — Fixes that Fail**  
Each intervention (more testing, longer window, QA reviewer) catches more failures — temporarily. But none addresses the structural cause of the failures. The testing process is the symptomatic fix; the root cause (whatever structural condition is producing deployment failures) is untouched. The structural fix requires asking: what is causing the failures in the first place? (likely: insufficient review of change impacts, no automated tests for integration, etc.)

**Q3. Correct: C — Shifting the Burden**  
The burden of SQL generation has been shifted to the AI tool. Her internal skill stock was never built (or atrophied). The symptomatic fix (tool use) worked so reliably that the fundamental fix (building internal capability through practice) was never invested in. The structural fix: deliberate practice without the tool for learning-critical skills.

**Q4. Correct: B — Eroding Goals**  
The actual competency stock of the engineers has not changed — the goal moved to meet it. Each time performance did not match the goal, the goal was revised downward. The underlying gap remains. The fix: maintain the original goal, diagnose *why* the gap exists, and address the structural cause (too little learning time? wrong training design? wrong prerequisite skill level?).

**Q5. Correct: B**  
Single-loop learning detects and corrects error within existing goals/rules/assumptions ("we're missing the target, change the action"). Double-loop questions the goal itself ("is this the right target? are our assumptions correct?"). Double-loop is higher-leverage because it changes the rules or goals — Meadows Levels 4–5, versus single-loop which operates at Level 12 (parameters) or Level 11 (buffer sizes).

**Q6. Correct: B — Level 6 (information flows)**  
Making learning visible changes what information flows through the team. When learning is invisible, the R1 loop has no signal to amplify. When it is visible, team members see that learning is happening, valued, and safe — the psychological safety stock builds, which enables more learning. This is exactly Level 6: "the structure of who does and does not have access to information."

**Q7. Correct: B**  
This is the delay between the training inflow (building competency stock) and the visible effect on domain quality (which requires the competency stock to first reach application threshold). The improvement was always coming — it was building in the competency stock throughout the quarter. It became visible only after the delay elapsed and the higher competency stock started reducing error rates. This is why training ROI looks slow: the stock takes time to build above the threshold where behavior changes.

**Q8. Correct: B**  
High individual stocks with low team learning stock = knowledge is being held individually, not transferred. The structural gap is in the knowledge transfer flows: documentation, pairing, regular knowledge-sharing sessions, and mentoring. Individuals know a lot; the team doesn't benefit from it collectively because the flows between individual and organizational knowledge stock are weak.

</details>

---

## After the Assessment

- **Passed**: Section A ≥ 70% AND both practical exercises submitted → Team lead records in [Progress Tracker](./progress-tracker.md).
- **Exercises pending**: You can submit exercises separately after the quiz.
- **Next**: Complete ≥ 2 real learning challenge ST analyses in GitHub issues (linked in progress tracker), then begin [Module 3 — Organizational Learning](../module-3-mastery.md).
