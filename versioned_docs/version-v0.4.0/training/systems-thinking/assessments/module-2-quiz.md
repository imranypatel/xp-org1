# Module 2 Quiz — Practitioner Assessment

**Level**: L2 — Practitioner  
**Passing threshold**: Scenario questions ≥ 70% AND both practical exercises submitted  
**Format**: 8 scenario questions + 2 practical exercises  
**Prerequisite**: [Module 1 Quiz](./module-1-quiz.md) passed  
**After passing**: Complete ≥ 2 real ST analyses in GitHub issues, then begin [Module 3](../module-3-mastery.md)

Record your score and completion in the [Progress Tracker](./progress-tracker.md).

> Answer key for scenario questions is at the bottom. Attempt all questions first.

---

## Section A: Scenario Questions (1 point each)

**Q1.** A software team has both a delivery reinforcing loop (better tooling → faster releases → more customer feedback → better tooling) and a constraint balancing loop (technical debt → slower delivery → pressure to fix debt). Growth has recently stalled. Which loop is currently dominant?

- A) The reinforcing loop — growth always dominates
- B) The balancing loop — it is currently constraining delivery speed
- C) Neither — they cancel each other out exactly
- D) Cannot determine without knowing the delay durations

---

**Q2.** Which of the 7 system archetypes is described here?

> "We launched a competitor monitoring process to defend our market position. Our competitor launched a similar process. We increased our intelligence gathering. They increased theirs. Both companies now spend heavily on competitive intelligence that neither actually uses in product decisions."

- A) Limits to Growth
- B) Fixes that Fail
- C) Escalation
- D) Tragedy of the Commons

---

**Q3.** A team lead decides to solve a deadline crisis by approving weekend overtime for 6 weeks. Delivery improves in weeks 1–3. In weeks 4–6, delivery slows and error rates rise. Which archetype is most active?

- A) Limits to Growth
- B) Fixes that Fail
- C) Shifting the Burden
- D) Success to the Successful

---

**Q4.** A growing organization has multiple teams that each request as much shared infrastructure as they can justify, knowing that what they don't request will go to other teams. Total infrastructure costs are 3× the actual usage. Which archetype is this?

- A) Escalation
- B) Tragedy of the Commons
- C) Eroding Goals
- D) Success to the Successful

---

**Q5.** An organization responds to every SLA compliance failure by adjusting the SLA definition so that the failure no longer counts. Performance stays the same; compliance numbers improve. This is an example of:

- A) Limits to Growth
- B) Shifting the Burden
- C) Eroding Goals
- D) Success to the Successful

---

**Q6.** At which Meadows leverage point would you classify this intervention: "Make all current technical debt metrics visible on a public team dashboard updated daily"?

- A) Level 12 — parameters
- B) Level 9 — lengths of delays
- C) Level 6 — structure of information flows
- D) Level 3 — goals of the system

---

**Q7.** A balancing loop has a long delay in it. Which behavior would you expect?

- A) Rapid convergence to the goal state
- B) Exponential growth away from equilibrium
- C) Oscillation around the goal state
- D) Steady linear decline

---

**Q8.** Which of the following correctly identifies a reinforcing loop?

- A) A → [increases] → B → [reduces] → C → [increases] → A (one negative link = odd = balancing)
- B) A → [increases] → B → [increases] → C → [increases] → A (zero negative links = even = reinforcing)
- C) A → [reduces] → B → [reduces] → C → [reduces] → A (three negative links = odd = balancing)
- D) A → [reduces] → B → [increases] → A (one negative link = odd = balancing)

---

## Section B: Practical Exercises

### Exercise A — Draw a CLD (Required for passing)

**Task**: Choose a recurring problem in your domain. Draw a Causal Loop Diagram that:

1. Contains at least **4 nodes** (variables)
2. Has at least **one closed loop** (the chain must return to the starting node)
3. Uses **correct Mermaid syntax** (every link is labeled)
4. Labels the loop as `%% R1:` or `%% B1:` with a descriptive name
5. Identifies any delays with a comment on the relevant arc

**Submission**: Commit the CLD to `docs/models/issue-N/cld-{slug}.md` in your working branch. Link the file here:

```
CLD committed at: docs/models/issue-N/cld-{slug}.md
Problem described: [one sentence]
Loop type: R / B
Key insight: [one sentence — what does this CLD reveal that wasn't obvious?]
```

**Rubric**:

| Criterion | Full credit | Partial credit | No credit |
|-----------|------------|----------------|-----------|
| Loop closure | Loop closes back on itself | Loop nearly closes but misses one link | No closed loop |
| Link labeling | Every link labeled directionally | Most links labeled | Labels absent or uninformative |
| Mermaid syntax | Renders correctly | Minor syntax error but intent clear | Does not render |
| Loop label | Loop named with `%% R1:` or `%% B1:` | Present but unlabeled | Absent |
| Insight | Key insight stated clearly | Insight implied but not stated | Absent |

---

### Exercise B — ST Analysis (Required for passing)

**Task**: Complete the ST Analysis template below for a real or realistic GitHub issue from your domain. The issue can be real (link it) or a scenario you construct.

```markdown
## 🔄 Systems Analysis

**Issue**: [Link or scenario description]
**Domain**: [domain/]

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
**Model**: [Link to CLD or "Not modeled"]
```

**Rubric**:

| Criterion | Full credit | Partial credit | No credit |
|-----------|------------|----------------|-----------|
| Stocks identified | ≥ 2 credible stocks | 1 stock | None / flows mislabeled as stocks |
| Flows identified | ≥ 1 inflow + 1 outflow | Only one direction | None |
| At least one loop | Loop described with both variables and direction | Loop mentioned but vague | Absent |
| Archetype | Named correctly with brief justification | Named without justification | Wrong or absent |
| Leverage point | Meadows level cited + justified | Level cited without justification | Absent or wrong |
| ST labels | ≥ 2 appropriate `st/` labels | 1 label | None or inapplicable |

---

## Answer Key — Section A

<details>
<summary>Click to reveal answers (attempt all questions first)</summary>

**Q1. Correct: B — The balancing loop is currently dominant**  
When growth stalls, it means the constraining loop has grown strong enough to counter the reinforcing loop's growth push. The balancing loop (technical debt → delivery constraint) is now setting the pace, not the reinforcing loop. Correct diagnosis is: address the technical debt stock to weaken the balancing constraint, allowing the reinforcing loop to dominate again.

**Q2. Correct: C — Escalation**  
Each actor responds to the other's action by increasing their own. Both escalate without either gaining a strategic advantage. The activity becomes self-perpetuating. The fix is unilateral restraint or a mutual de-escalation agreement.

**Q3. Correct: B — Fixes that Fail**  
Overtime is the quick fix. It works short-term (delivery improves) but creates the side effect of fatigue and rising error rates. The error rate increase becomes the new constraint on delivery. The original problem (delivery pressure) worsens because the fix (overtime) depleted the team capacity stock.

**Q4. Correct: B — Tragedy of the Commons**  
Each team is acting rationally given the rules (request as much as you can justify). The shared resource is depleted beyond actual need by the aggregate of individually rational actions. The fix is governance of the shared resource — central allocation with usage-based quotas.

**Q5. Correct: C — Eroding Goals**  
The performance gap is closed by lowering the standard, not by improving performance. The actual SLA failure rate is unchanged; only the definition of "failure" has changed. The goal has eroded.

**Q6. Correct: C — Level 6 (structure of information flows)**  
Making a hidden metric visible is a classic Level 6 intervention. It doesn't change any parameter directly, but changes what information is available — and behavior changes as a result. Higher leverage than adjusting a parameter (Level 12) but lower than changing rules (Level 5).

**Q7. Correct: C — Oscillation**  
A balancing loop with a long delay overshoots its target. The correction arrives after the system has moved too far, requiring a correction in the other direction, which also overshoots. The result is oscillation around the target.

**Q8. Correct: B**  
A loop with zero negative links (all positive) is reinforcing — even number (0) of negative links. Option A has one negative link (odd = balancing). Option C has three negative links (odd = balancing). Option D has one negative link (odd = balancing).

</details>

---

## After the Assessment

- **Passed**: Section A ≥ 70% AND both practical exercises submitted → Team lead records in [Progress Tracker](./progress-tracker.md).
- **Exercises pending**: You can submit exercises separately after the quiz if you need more time to commit the CLD.
- **Next**: Complete ≥ 2 real ST analyses in GitHub issues (linked in progress tracker), then begin [Module 3 — Mastery](../module-3-mastery.md).
