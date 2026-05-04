# ST Competency Rubric

**Purpose**: Observable behavior descriptors that team leads use to assess where each team member sits on the L1/L2/L3 scale — in the context of their actual daily work, not in a test setting.

**How to use**: For each domain row, read across L1, L2, L3. Mark the highest level where the team member's *observed behavior* consistently matches the descriptor. Consistent means ≥ 3 instances in the last 90 days unless otherwise noted.

This rubric complements module quiz scores. A team member can pass the L1 quiz but still be rated L1 on the rubric if they haven't transferred the knowledge into practice — and vice versa.

---

## Rubric Table

| Domain / Context | L1 — Awareness | L2 — Practitioner | L3 — Mastery |
|---|---|---|---|
| **Issue Writing** | Uses the word "system" or "feedback" in issue descriptions. Can identify one stock or flow when prompted. | Routinely includes a `## Systems Analysis` section in issue descriptions. Identifies stocks, flows, and at least one loop without prompting. Uses `st/` labels correctly. | ST analysis in issues is detailed and accurate: multiple loops named, archetype identified, leverage point cited. Analysis influences solution design, not just description. |
| **Root Cause Analysis** | Asks "what is causing this?" and generates multiple causes. Recognizes that their first answer might be a symptom, not a root cause. | Traces root causes through at least two causal links. Can draw a simple CLD when explaining a problem. Identifies the nearest feedback loop. | Conducts formal multi-loop analysis. Draws CLDs committed to `docs/models/`. Identifies stacked archetypes. Argues for leverage-point-based interventions rather than symptomatic fixes. |
| **Decision Making** | Acknowledges that their decision has downstream effects. Checks "will this create a new problem later?" before deciding. | Explicitly identifies delays before deciding. Can name the archetype pattern a proposed fix might trigger. Adjusts the decision when they identify a likely side effect. | Assesses multiple leverage points before recommending an action. Argues against symptomatic fixes using CLD evidence. Can articulate the second- and third-order effects of a decision. |
| **Meetings / Discussions** | Listens for feedback loops in discussions. Can ask "is this a reinforcing or balancing dynamic?" when colleagues describe a recurring problem. | Raises archetype patterns in meetings: "This sounds like Fixes that Fail — are we making the original problem worse?" Draws a quick sketch CLD on a whiteboard or shared doc during a meeting. | Facilitates a full ST analysis session for the team. Guides others to identify loops, archetypes, and leverage points. Documents the session output as a CLD or written analysis. |
| **Planning** | Includes at least one "what could go wrong at scale?" consideration in plans. Recognizes that a reinforcing loop could cause a growth scenario to overshoot. | Plans include an explicit delay analysis: "This intervention will take N weeks to show effect." Plans reference the ST analysis from the triggering issue. Considers balancing constraints before setting targets. | Plans include a full ST analysis. Multiple scenarios modeled (base case, reinforcing dominance, balancing constraint). Leverage point justification included. Growth ceilings and limiting conditions explicitly identified. |
| **Operations / HR** | Notices when a workload problem keeps recurring and asks "why does this keep coming back?" | Can identify the Tragedy of the Commons or Success to the Successful archetype in resource allocation conflicts. Suggests structural governance as a fix rather than one-off mediation. | Designs governance mechanisms with the feedback structure in mind. Can model an HR or operations system as a CLD with multiple loops. Facilitates cross-team ST sessions on recurring conflicts. |
| **Finance / Billing** | Recognizes that a budget overrun might have systemic causes rather than just bad forecasting. Can identify the stock of "committed spend" vs the flow of "new approvals." | Can draw the cash flow system (inflows/outflows, delay between contract signature and payment). Identifies an Eroding Goals pattern when financial targets are repeatedly revised. | Models financial dynamics with multiple reinforcing and balancing loops. Identifies leverage points for cost reduction that avoid symptomatic fixes. Facilitates ST sessions on financial sustainability. |
| **Marketing / Sales** | Recognizes that customer acquisition creates both positive (word of mouth) and negative (churn from poor fit customers) dynamics. | Identifies the Escalation archetype in competitive positioning. Can draw a CLD for a customer acquisition funnel including word-of-mouth reinforcing loops and churn balancing loops. | Designs marketing strategy using multi-loop analysis. Models the interaction between brand stock, customer satisfaction stock, and market share stock. Identifies the leverage point that maximizes long-term growth. |
| **IT / Infrastructure** | Can identify technical debt as a stock that accumulates and drains. Recognizes that infrastructure investments can have long delays before impact. | Applies Limits to Growth to capacity planning: identifies the constraint that will limit growth before it becomes a crisis. Commits infrastructure CLDs to `docs/models/`. | Models the interaction between capacity, demand, technical debt, and development velocity as a multi-loop system. Identifies the highest-leverage intervention for a given infrastructure problem. |
| **Cross-Domain Thinking** | Recognizes that a problem in one domain (e.g., HR burnout) might be caused by dynamics in another (e.g., IT delivery pressure). | Can draw a CLD that spans two domains. Identifies the causal link that crosses domain boundaries. Tags issues with labels from both domains. | Designs interventions that act on the cross-domain causal link rather than each domain separately. Facilitates cross-domain ST sessions. Documents the shared system model in `docs/models/`. |
| **Mentoring / Training** | Explains what a stock, flow, or feedback loop is when asked by a colleague. Recommends the training modules. | Gives substantive feedback on a colleague's ST analysis: identifies specific improvements in loop labeling, archetype assignment, or leverage point selection. | Acts as a trainer for L1 onboarding. Runs practice sessions for L2 candidates. Reviews and approves L3 portfolios. Raises issues when training materials need updating. |

---

## Assessment Notes

- **Minimum evidence**: ≥ 3 observed instances in 90 days for L1/L2; ≥ 2 portfolio items for L3
- **Self-assessment**: Team members may self-assess using this rubric as a growth guide; team lead assessment is authoritative for the progress tracker
- **Domain weighting**: Assess primarily in the team member's own domain; cross-domain rows are aspirational for L2, expected for L3
- **Level ceiling**: A team member is at the highest level where they meet the criteria *consistently* — not where they've achieved it once

---

## Updating This Rubric

This rubric should be revised when:
- New domains are added to the governance framework
- Training module content significantly changes
- The ST label taxonomy changes
- Observed gaps between rubric descriptors and actual practice are identified

Raise a GitHub issue under `domain/hr` + `subdomain/training` to propose revisions.
