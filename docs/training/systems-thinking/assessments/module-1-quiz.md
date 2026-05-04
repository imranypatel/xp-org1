# Module 1 Quiz — Introduction Assessment

**Level**: L1 — Introduction  
**Passing threshold**: 70% (7 of 10 questions correct)  
**Format**: 8 scenario questions + 2 short-answer  
**Prerequisite**: Complete [Module 1](../module-1-introduction.md) before attempting  
**After passing**: Begin [Module 2 — Practitioner](../module-2-practitioner.md)

Record your score and completion date in the [Progress Tracker](./progress-tracker.md).

> Answer key is at the bottom of this document in a collapsible section. Attempt all questions honestly before revealing answers.

---

## Section A: Scenario Questions (1 point each)

**Q1.** A company implements a new customer loyalty program. Customer satisfaction scores rise immediately. Six months later, however, operational costs have increased significantly and customer service response times have worsened. Which concept best explains why the improvement appeared to work at first but revealed problems later?

- A) A reinforcing loop reversed direction
- B) A delay between action and effect — the costs and service degradation were always coming but arrived after the visible improvement
- C) The program was poorly designed and failed on first contact with reality
- D) A stock ran out

---

**Q2.** A finance team is tracking its monthly report backlog. They know the following:
- Current backlog: 120 reports
- Reports being completed per week: 15
- New reports arriving per week: 22

Without intervention, what will the backlog be in 4 weeks?

- A) 92 reports
- B) 148 reports
- C) 120 reports (unchanged)
- D) 148 reports initially, then stable

---

**Q3.** Which of the following is a **stock**?

- A) The rate at which new developers are being hired per month
- B) The total number of open issues in the backlog right now
- C) The speed at which customer complaints are being resolved
- D) The frequency of deployment releases

---

**Q4.** Look at this causal link:

`Customer Complaints` →[increases]→ `Support Team Workload`

When customer complaints decrease, what happens to support team workload?

- A) It increases — negative link
- B) It decreases — positive link (same direction)
- C) It stays the same — no relationship
- D) It oscillates

---

**Q5.** A team is growing its technical debt stock. Which of the following is an **outflow** of the technical debt stock?

- A) Code written without tests (this adds debt)
- B) Bugs introduced by rushed development (this adds debt)
- C) Refactoring sprints that clean up existing code (this drains debt)
- D) New features added to complex existing code (this adds debt)

---

**Q6.** A manager notices that a key performance metric has been declining slowly for 3 months. She increases the corrective intervention. Four weeks later, the metric worsens sharply. She concludes the intervention made things worse and reverses it. Two weeks later, the metric improves rapidly.

Which explanation best fits this pattern?

- A) The intervention was wrong and she was right to reverse it
- B) A delay caused the intervention's positive effect to arrive after she reversed it — she was oscillating due to delay
- C) The metric is not affected by the intervention
- D) A reinforcing loop reversed direction

---

**Q7.** In the following CLD, what type of loop is shown?

```
Technical Debt → [reduces] → Delivery Rate → [reduces] → Code Review Time → [increases] → Technical Debt
```

- A) Reinforcing loop (R)
- B) Balancing loop (B)
- C) Not a loop — the causal chain doesn't close
- D) Cannot determine without more information

---

**Q8.** An operations team has been working excessive overtime for 6 months to clear a process backlog. The backlog keeps growing anyway. What is the most likely systemic explanation?

- A) The team is not working hard enough
- B) Overtime increases errors, which reenter the backlog — the fix is self-defeating
- C) The backlog target is set incorrectly
- D) The process was never well-designed

---

## Section B: Short Answer (1 point each)

**Q9.** Name **two different domains** from the xp-org1 governance framework (e.g., HR, Finance, IT, Marketing, Legal, Operations) and write **one stock** for each domain. For each stock, name one inflow and one outflow.

*Format:*
```
Domain 1: [name]
Stock: [name]
Inflow: [name]
Outflow: [name]

Domain 2: [name]
Stock: [name]
Inflow: [name]
Outflow: [name]
```

**Q10.** A delay in your domain has caused an unexpected outcome in the past (or could in the future). Describe it in 3–5 sentences:
- What was the action taken?
- What was the delay?
- What outcome arrived after the delay — and how did it differ from what was expected?

---

## Answer Key

<details>
<summary>Click to reveal answers (attempt all questions first)</summary>

**Q1. Correct: B**  
The loyalty program's operational costs and service degradation were delayed effects of the implementation — the stock of operational complexity increased gradually, and the effect on service times arrived with a multi-month delay. The initial improvement was real; the problem was that the costs were also real but arrived later.

**Q2. Correct: B — 148 reports**  
Net inflow per week = 22 − 15 = 7 reports/week  
After 4 weeks: 120 + (7 × 4) = 120 + 28 = 148 reports

**Q3. Correct: B**  
The total number of open issues *right now* is a stock — a quantity measurable at a point in time. A, C, and D are all **rates** (flows), not stocks.

**Q4. Correct: B**  
A positive causal link (A → [increases] → B) means A and B move in the *same direction*. When customer complaints decrease, support team workload also decreases.

**Q5. Correct: C**  
An outflow *drains* the stock. Refactoring sprints remove technical debt from the system. A, B, and D all *add* to the stock (inflows).

**Q6. Correct: B**  
Classic delay-induced oscillation. The intervention was working, but its positive effect arrived after she reversed it. By reversing the intervention, she removed the corrective action just as it was taking effect — producing the rapid improvement she then observed. The lesson: wait out the delay before concluding an intervention failed.

**Q7. Correct: A — Reinforcing loop**  
Count the negative links: there are two (`[reduces] Delivery Rate`, `[reduces] Code Review Time`). Even number of negative links = reinforcing loop. The loop amplifies technical debt accumulation (in the negative direction — this is a collapse spiral).

**Q8. Correct: B**  
Overtime under time pressure typically increases error rates. Errors produce rework, which enters the backlog. The more the team rushes to clear the backlog, the more new errors they introduce — the fix is self-defeating. This is the *Fixes that Fail* archetype. The real fix is addressing the error-introduction rate (improve process quality or reduce rush), not working harder.

**Q9.** Full credit requires:
- Two distinct named domains
- A credible stock in each (not a rate or a flow)
- A plausible inflow and outflow for each stock

Example acceptable answer:
```
Domain 1: Finance
Stock: Cash reserves
Inflow: Revenue intake (daily/weekly cash receipts)
Outflow: Operational expenses (payroll, vendor payments)

Domain 2: HR
Stock: Organizational skill level
Inflow: Training completion rate (skills added per period)
Outflow: Employee departure rate (skills lost when people leave)
```

**Q10.** Full credit requires:
- A specific action (not generic)
- A plausible delay described in terms of time
- An outcome that differs from what was expected, explained through the delay mechanism

Example acceptable answer:
> "We launched a new customer referral program expecting immediate sign-ups. After 3 weeks nothing happened, so we cancelled it and tried a paid ad campaign. 6 weeks after the referral program launched (i.e., 3 weeks after we cancelled it), referrals started arriving — word-of-mouth had been spreading the whole time. By then our focus had shifted. The effect arrived after we'd abandoned the cause."

</details>

---

## After the Quiz

- **Passed (≥ 70%)**: Update your row in the [Progress Tracker](./progress-tracker.md) with your score and date. Begin [Module 2](../module-2-practitioner.md).
- **Did not pass**: Review the sections corresponding to the questions you missed. The question numbers correspond to module sections. Re-attempt the quiz after 24 hours.
