# System Models

**Directory**: `docs/models/`  
**Version**: v0.2.0  
**Issue**: [#3 ΓÇö Governance: Integrate Systems Thinking as foundational cross-cutting approach](https://github.com/imranypatel/xp-org1/issues/3)

---

## Purpose

This directory stores **system model artifacts** produced during issue analysis. Models capture the structural dynamics of a domain or problem using Systems Thinking (ST) notation.

Every model file is linked from the corresponding GitHub Issue's **≡ƒöä Systems Analysis** section in the Agent Assessment comment.

---

## Model Types

| Type | Filename suffix | Description |
|------|----------------|-------------|
| Causal Loop Diagram | `-cld.md` | Shows causal relationships and feedback loops (Mermaid) |
| Stock-and-Flow Diagram | `-sfd.md` | Shows stocks, flows, and auxiliaries (text or Mermaid) |
| Archetype Analysis | `-archetype.md` | Documents which archetype applies and why |
| Leverage Point Map | `-leverage.md` | Maps intervention options across Meadows' 12 levels |

---

## Directory Structure

```
docs/models/
  README.md                          ΓåÉ This file
  issue-N/
    {slug}-cld.md                   ΓåÉ Causal Loop Diagram
    {slug}-sfd.md                   ΓåÉ Stock-and-Flow Diagram (if needed)
    {slug}-archetype.md             ΓåÉ Archetype analysis (if applicable)
    {slug}-leverage.md              ΓåÉ Leverage point analysis (if applicable)
```

---

## Naming Convention

| Element | Convention | Example |
|---------|-----------|---------|
| Directory | `issue-{N}/` | `issue-3/` |
| Slug | kebab-case of issue title (abbreviated) | `st-integration` |
| Filename | `{slug}-{type}.md` | `st-integration-cld.md` |

---

## CLD Format (Mermaid)

GitHub renders Mermaid natively in markdown. Use `graph LR` (left-to-right) for readability.

**Link notation:**
- `A -->|increases| B` ΓÇö A positively influences B (same direction)
- `A -->|reduces| B` ΓÇö A negatively influences B (opposite direction)
- `A -->|slows| B` ΓÇö A creates a delay or friction on B

**Loop annotation:** Label each loop above the diagram:
```
<!-- R1: Governance Clarity loop -->
<!-- B1: Complexity Overhead loop -->
```

**Minimal CLD template:**

```markdown
# {Issue Title} ΓÇö Causal Loop Diagram

**Issue**: #N  
**Version**: v0.1.0  
**Type**: CLD

<!-- R1: {Loop name} -->
<!-- B1: {Loop name} -->

\`\`\`mermaid
graph LR
    A[Stock: X] -->|increases| B[Flow: Y]
    B -->|builds| C[Stock: Z]
    C -->|reinforces| A
\`\`\`

## Loop Descriptions

**R1 ΓÇö {Name}**: [Describe the reinforcing dynamic]
**B1 ΓÇö {Name}**: [Describe the balancing dynamic]

## Key Insights

- [What does this diagram reveal that wasn't obvious?]
- [Which delays are most dangerous?]
- [What leverage point does this suggest?]
```

---

## When to Create a Model

| Condition | Action |
|-----------|--------|
| Issue labeled `st/archetype` | Create `-archetype.md` |
| Issue labeled `st/leverage-point` | Create `-leverage.md` |
| Issue labeled `st/reinforcing-loop` or `st/balancing-loop` | Create `-cld.md` |
| ≡ƒö┤-risk issue | Create CLD at minimum |
| Multiple ST labels | One model file per type needed |
| Simple ≡ƒƒó issues | No model required |

---

## Linking Models to Issues

In the **≡ƒöä Systems Analysis** section of the Agent Assessment comment on the GitHub issue:

```
**Model**: [ST Integration CLD](issue-3/st-integration-cld.md)
```

Or if no model: `**Model**: Not modeled`
