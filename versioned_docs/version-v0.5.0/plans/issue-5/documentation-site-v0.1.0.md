# Documentation Site — Implementation Plan

**Version**: v0.1.0  
**Issue**: [#5 — Documentation Site: Docusaurus v3 on GitHub Pages](https://github.com/imranypatel/xp-org1/issues/5)  
**Branch**: `feature/5-documentation-site`  
**Version Bump**: v0.2.0 → v0.3.0  
**Domain**: IT / Documentation / Infrastructure  
**Status**: In Progress

---

## Problem Statement

All governance standards, ST models, domain plans, and reference documents live in the GitHub repository as Markdown files. While the repo structure is logical for contributors, it requires navigating folders and raw files — a poor experience for anyone consuming the documentation as a reader rather than an editor.

This issue delivers a **Docusaurus v3** site deployed to **GitHub Pages** at `https://imranypatel.github.io/xp-org1/`. The site transforms the `docs/` tree into a searchable, navigable, versioned web book that mirrors each release tag.

---

## 🔄 Systems Analysis

**Affected Stocks**: Documentation accessibility (discoverability, readability), Organizational knowledge (visible outside repo), User comprehension rate

**Affected Flows**:
- Inflow: Content publication rate (each PR adds new docs to the live site)
- Outflow: Documentation debt (content that exists but cannot be found)

**Feedback Loops**:
- **R1 (Adoption reinforcement)**: Better docs → more stakeholders read them → more feedback → better docs
- **B1 (Maintenance overhead)**: More doc infrastructure → more maintenance burden → less time for content creation

**Delays**: Awareness delay — users won't find the live site immediately after launch; requires announcement via README badge

**Archetype**: *Shifting the Burden* risk — the site must complement in-repo doc quality, not substitute for it. If the site makes docs feel "done", the reinforcing loop stops improving source files.

**Leverage Point**: Meadows Level 5 — **Information flows**: making existing information visible and navigable multiplies the impact of all existing content without requiring new content to be written.

**ST Labels**: `st/leverage-point`, `st/reinforcing-loop`

**Model**: Not modeled — information flow improvement is structurally straightforward; a CLD would add no insight beyond the above.

---

## Technology Decision

**Docusaurus v3** selected (user choice, confirmed over MkDocs Material and VitePress) for:
- Built-in versioned docs that map directly to SemVer release tags
- `@docusaurus/theme-mermaid` for native CLD rendering (no external tool needed)
- GitHub Actions deployment to GitHub Pages
- React-based — extensible for future interactive domain visualizations

---

## Scope

### New Infrastructure (repo root)

| File | Purpose |
|------|---------|
| `package.json` | Docusaurus v3 + Mermaid plugin dependencies |
| `docusaurus.config.js` | Site config: URL, GitHub Pages, Mermaid, versioning, no blog |
| `sidebars.js` | Explicit sidebar ordering: Standards → Models → Plans |
| `src/pages/index.jsx` | Custom React homepage with hero and feature grid |
| `src/pages/index.module.css` | Homepage CSS module |
| `src/css/custom.css` | Global theme token overrides |
| `.gitignore` | `node_modules/`, `.docusaurus/`, `build/` |

### GitHub Actions

| File | Purpose |
|------|---------|
| `.github/workflows/docs.yml` | Build + deploy to Pages on every push to `main` |

### New Docs Files

| File | Purpose |
|------|---------|
| `docs/index.md` | Documentation landing page (intro, section links) |
| `versions.json` | Docusaurus versions registry: `["v0.2.0", "v0.1.0"]` |
| `versioned_docs/version-v0.1.0/` | Snapshot of docs at git tag `v0.1.0` |
| `versioned_docs/version-v0.2.0/` | Snapshot of docs at git tag `v0.2.0` |
| `versioned_sidebars/version-v0.1.0-sidebars.json` | v0.1.0 sidebar |
| `versioned_sidebars/version-v0.2.0-sidebars.json` | v0.2.0 sidebar |

### Updated Files

| File | Change |
|------|--------|
| `docs/standards/versioning.md` | Added Docusaurus snapshot step to release process → v0.3.0 |
| `README.md` | Added live site badge/link |

---

## Site Architecture

### URL
```
https://imranypatel.github.io/xp-org1/
```

### Navigation
```
/ (Homepage — src/pages/index.jsx)
/docs/intro             ← Documentation landing page
/docs/standards/systems-thinking
/docs/standards/versioning
/docs/standards/branching
/docs/standards/issue-workflow
/docs/standards/domain-labels
/docs/standards/agent-orchestration
/docs/models/README
/docs/plans/issue-1/governance-workflow-v0.1.0
/docs/plans/issue-3/systems-thinking-integration-v0.1.0
/docs/plans/issue-5/documentation-site-v0.1.0    ← this document
```

### Versioning Behaviour

| Label | Serves at | Content |
|-------|-----------|---------|
| v0.2.0 (latest) | `/docs/` (default) | ST integration docs |
| v0.1.0 | `/docs/v0.1.0/` | Governance bootstrap docs only |
| next (v0.3.0) | `/docs/next/` | Current branch docs (in development) |

Future releases: run `npm run docusaurus docs:version vX.Y.Z` before raising PR (see `docs/standards/versioning.md`).

---

## Key Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Site root | Repo root | `docs/` folder used directly; no path remapping |
| `routeBasePath` | `docs` (default) | Docs at `/docs/`; custom homepage at `/`; no routing conflict |
| Blog | Disabled | Not needed; governance is issue-driven |
| Mermaid | `@docusaurus/theme-mermaid` | Official plugin; CLDs render without external tools |
| Versioned snapshots | Committed to repo | Simpler than CI-based creation; auditabl in git history |
| Version creation | Manual pre-PR step | Developer runs `npm run docusaurus docs:version vX.Y.Z` before raising PR |
| `lastVersion` | `v0.2.0` | Current stable; `docs/` = "next" until v0.3.0 is tagged |
| GitHub Pages | GitHub Actions workflow | Modern approach; no `gh-pages` branch needed |
| Node.js in CI | v20 LTS | Stable, widely supported |

---

## Prerequisites

GitHub Pages must be configured to deploy via **GitHub Actions** in repo Settings → Pages (Source: GitHub Actions).
