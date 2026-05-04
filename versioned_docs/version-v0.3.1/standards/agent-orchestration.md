# Agent Orchestration Standard

**Version**: v0.2.0  
**Issue**: [#3 — Governance: Integrate Systems Thinking as foundational cross-cutting approach](https://github.com/imranypatel/xp-org1/issues/3)  
**Amends**: [#1 — Governance: Issue-driven workflow standards](https://github.com/imranypatel/xp-org1/issues/1) (v0.1.0)
**Status**: Active

---

## Principal Agent Role

The **Principal Agent** (Anvil) acts as the main expert advisor and orchestrator for all issues
in `xp-org1`. Its responsibilities are:

1. **Domain Assessment** — Identify and categorize the domain of each issue
2. **Risk Classification** — Assign risk level (🟢/🟡/🔴) based on impact
3. **Agent Team Formation** — Recommend expert agents for cross-domain issues
4. **Tool & Service Recommendations** — Suggest tools/services appropriate to the domain
5. **Plan Coordination** — Ensure each issue has a versioned plan in `docs/plans/issue-N/`
6. **Progress Tracking** — Monitor and comment on issue progress
7. **Standards Enforcement** — Ensure branching, versioning, and workflow rules are followed

---

## Assessment Comment Template

When a new issue is opened, the principal agent posts an assessment comment:

```markdown
## 🤖 Agent Assessment

**Domain**: `domain/X`
**Risk**: 🟢 Low / 🟡 Medium / 🔴 High
**Type**: feature / bug / docs / governance

### Summary
<1-2 sentence description of what this issue is asking for>

### Recommended Team
| Role | Agent | Justification |
|------|-------|---------------|
| Principal | Anvil | Orchestration and architecture |
| [Domain Expert] | [Agent name] | [Why this domain needs this agent] |

### Recommended Tools / Services
- [Tool/service name]: [Why it's appropriate]

### 🔄 Systems Analysis
*(Required for 🔴-risk issues and issues labeled `st/archetype` or `st/leverage-point`. Recommended for 🟡. Optional for 🟢.)*

**Affected Stocks**: [What accumulates? e.g., team capacity, technical debt, customer trust]
**Affected Flows**: [What rates change? e.g., deployment frequency, churn rate, hiring rate]
**Feedback Loops**:
  - R (Reinforcing): [Loop description — or "None identified"]
  - B (Balancing): [Loop description — or "None identified"]
**Delays**: [Time lags with counterintuitive potential — or "None identified"]
**Archetype**: [Matching archetype — or "None identified"]
**Leverage Point**: [Meadows level 1–12 and justification]
**ST Labels**: [Which `st/` labels apply]
**Model**: [Link to docs/models/issue-N/ — or "Not modeled"]

### Plan
Will be created at `docs/plans/issue-N/{slug}-v0.1.0.md` on branch `feature/N-slug`.

### Open Questions
- [ ] [Any ambiguities that need user input before planning]
```

---

## Domain → Agent Mapping

| Domain | Principal Agent | Supporting Agents | Risk Floor |
|--------|----------------|-------------------|-----------|
| Governance / Architecture | Anvil | — | 🟡 |
| Infrastructure / DevOps | Anvil | DevOps agent | 🟡 |
| IT / Workspace | Anvil | IT support agent | 🟢 |
| Branching / Versioning | Anvil | — | 🟢 |
| Finance / Accounts | Anvil (coordinator) | Finance modeling agent + human review | 🔴 |
| Billing | Anvil (coordinator) | Billing agent + human review | 🔴 |
| Payments | Anvil (coordinator) | Payments agent + human review | 🔴 |
| Legal / Compliance | Anvil (coordinator) | Legal review agent + human review | 🔴 |
| HR | Anvil (coordinator) | HR/business process agent | 🟡 |
| CRM / Sales | Anvil (coordinator) | CRM agent | 🟡 |
| Marketing | Anvil (coordinator) | Marketing/growth agent | 🟢–🟡 |
| Procurement | Anvil (coordinator) | Procurement agent | 🟡 |
| Production / Project Mgmt | Anvil (coordinator) | PM orchestration agent | 🟡 |
| Workflow Automation | Anvil | Workflow agent | 🟡 |

> 🔴 **High-risk domains** (Payments, Finance, Legal) always require a human review step
> before any change is merged to `main`, regardless of agent confidence.

---

## Tool & Service Recommendations by Domain

| Domain | Recommended Tools / Services |
|--------|------------------------------|
| Governance / Workflow | GitHub Issues, GitHub Projects, this repo |
| Infrastructure | Terraform, Pulumi, GitHub Actions |
| DevOps | GitHub Actions, Docker, cloud provider CLI |
| Payments | Stripe (test mode first), manual PCI review |
| Finance / Billing | Accounting software API, spreadsheet validation |
| Legal | Document management system, legal counsel |
| HR | HRIS integration, compliance checklist |
| CRM / Sales | CRM API, data migration tooling |
| Marketing | Analytics platform, A/B testing tools |
| Project Mgmt | GitHub Projects, milestone tracking |

---

## Escalation Rules

1. **Cross-domain issues** (>1 domain): Principal agent coordinates, each domain agent owns its slice
2. **🔴 risk issues**: Principal agent must explicitly flag for human review before merge. For single-contributor operation, "human review" means: post a checklist comment on the issue with `[ ] Reviewed-by: <name> on <date>` and get it checked before merging.
3. **Ambiguous scope**: Principal agent uses `ask_user` to clarify before planning
4. **Conflicting standards**: Principal agent opens a governance issue to resolve

---

## Agent Handoff Protocol

When the principal agent delegates to a domain expert agent, the following must be posted as a comment on the GitHub Issue:

### Delegation comment (posted by principal agent)

```markdown
## 🤖 Delegating to [Agent Name]

**Issue**: #N
**Domain**: domain/X
**Risk**: 🔴/🟡/🟢
**Questions for this agent**:
1. [Specific question 1]
2. [Specific question 2]

**Expected output**: A comment on this issue containing findings and recommended approach.
```

### Response comment (posted by domain agent)

```markdown
## 🤖 [Agent Name] — Assessment

**Questions addressed**:
1. [Answer to question 1]
2. [Answer to question 2]

**Findings**: [Any additional issues discovered]
**Recommended approach**: [Specific recommendation]
**Handoff back to**: Principal agent (Anvil)
```

If the principal agent and domain agent reach different conclusions, the principal agent must post a reconciliation comment and the issue must wait for human input before proceeding.

---

## Agent Communication

All inter-agent communication is recorded as **comments on the GitHub Issue**.
No agent decision is made silently — every assessment, question, recommendation,
and status update is posted to the issue for full traceability.

---

## Systems Thinking as Cross-Cutting Layer

**Systems Thinking (ST) is the analytical lens for every domain.** Before proposing solutions, the principal agent analyzes the structural dynamics of the issue — what stocks are affected, what flows change, which feedback loops operate, and where the highest-leverage intervention lies.

This analysis is **not optional for 🔴-risk issues**. It is recommended for all 🟡 issues and optional for 🟢.

See [docs/standards/systems-thinking.md](systems-thinking.md) for the full ST reference.

### ST step in the Assessment Comment

The Assessment Comment template now includes a **🔄 Systems Analysis** section after **Recommended Tools / Services**:

```markdown
## 🔄 Systems Analysis

**Affected Stocks**: [What accumulates? e.g., team capacity, technical debt, customer trust]
**Affected Flows**: [What rates change? e.g., deployment frequency, churn rate, hiring rate]
**Feedback Loops**:
  - R (Reinforcing): [Loop description — or "None identified"]
  - B (Balancing): [Loop description — or "None identified"]
**Delays**: [Time lags with counterintuitive potential — or "None identified"]
**Archetype**: [Matching archetype — or "None identified"]
**Leverage Point**: [Meadows level 1–12 and justification]
**ST Labels**: [Which `st/` labels apply]
**Model**: [Link to docs/models/issue-N/ — or "Not modeled"]
```

### Updated Domain → Agent Mapping (v0.2.0)

All domain agent engagements now include an ST analysis step. The column **ST Layer** notes the expected ST work for that domain's issues.

| Domain | Principal Agent | Supporting Agents | Risk Floor | ST Layer |
|--------|----------------|-------------------|-----------|----------|
| Governance / Architecture | Anvil | — | 🟡 | Full analysis required |
| Infrastructure / DevOps | Anvil | DevOps agent | 🟡 | Stocks: reliability, tech debt |
| IT / Workspace | Anvil | IT support agent | 🟢 | Optional |
| Branching / Versioning | Anvil | — | 🟢 | Optional |
| Finance / Accounts | Anvil (coordinator) | Finance modeling agent + human review | 🔴 | Required — cash stocks, flows |
| Billing | Anvil (coordinator) | Billing agent + human review | 🔴 | Required — revenue flows |
| Payments | Anvil (coordinator) | Payments agent + human review | 🔴 | Required — transaction stocks |
| Legal / Compliance | Anvil (coordinator) | Legal review agent + human review | 🔴 | Required — risk stocks |
| HR | Anvil (coordinator) | HR/business process agent | 🟡 | Recommended — capacity stocks |
| CRM / Sales | Anvil (coordinator) | CRM agent | 🟡 | Recommended — trust, pipeline stocks |
| Marketing | Anvil (coordinator) | Marketing/growth agent | 🟢–🟡 | Recommended — brand equity stock |
| Procurement | Anvil (coordinator) | Procurement agent | 🟡 | Recommended — supply stocks |
| Production / Project Mgmt | Anvil (coordinator) | PM orchestration agent | 🟡 | Recommended — backlog stocks |
| Workflow Automation | Anvil | Workflow agent | 🟡 | Recommended — throughput flows |
