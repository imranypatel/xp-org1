# Branching Standard

**Version**: v0.1.0  
**Issue**: [#1 ΓÇö Governance: Issue-driven workflow standards](https://github.com/imranypatel/xp-org1/issues/1)  
**Status**: Active

---

## Branch Naming

Every branch is tied to a GitHub Issue number.

| Type | Pattern | Example |
|------|---------|---------|
| Feature / new capability | `feature/{N}-{slug}` | `feature/1-governance-workflow` |
| Bug fix | `fix/{N}-{slug}` | `fix/7-pr-tag-missing` |
| Documentation only | `docs/{N}-{slug}` | `docs/3-add-hr-standards` |
| Chore / maintenance | `chore/{N}-{slug}` | `chore/5-rename-labels` |

- `{N}` is the GitHub Issue number
- `{slug}` is a short kebab-case description of the work
- Slugs must be lowercase, no spaces, no special characters

---

## Scope Rules

### Always create a new branch
Every issue gets its own branch. There are no exceptions.

| Scenario | Action |
|----------|--------|
| New issue created | Create `feature/N-slug` (or appropriate type prefix) |
| Doc-only change | Create `docs/N-slug` |
| Work spans multiple issues | Each issue still gets its own branch |
| Existing branch merged | Never reuse it ΓÇö create a fresh branch for the next issue |

### Never commit directly to `main`
All changes to `main` go through a Pull Request. This applies to:
- Code
- Documentation  
- Configuration
- README updates
- Any file in the repository

---

## Pull Request Rules

| Field | Rule |
|-------|------|
| **Title** | `[vX.Y.Z] Domain: Short description (#N)` ΓÇö version assigned here, not in issue title |
| **Body** | Must contain `Closes #N` to auto-close the issue on merge |
| **Target** | Always `main` |
| **Merge strategy** | Squash merge preferred (clean `main` history) |
| **Reviewer** | **Mandatory for ≡ƒö┤-domain issues** (payments, finance, legal, billing) ΓÇö explicit human sign-off required before merge. Optional for ≡ƒƒó/≡ƒƒí issues until branch protection is added via governance issue. |

### PR body template

```markdown
## Summary
<brief description of what changed>

## Changes
- docs/standards/foo.md ΓÇö added
- README.md ΓÇö updated with governance links

## Version
This PR represents release `vX.Y.Z`.

Closes #N
```

---

## Branch Lifecycle

```
main                           (protected ΓÇö PRs only)
  ΓööΓöÇΓöÇ feature/1-governance-workflow   (created from main)
        ΓööΓöÇΓöÇ commits...
        ΓööΓöÇΓöÇ PR raised ΓåÆ reviewed ΓåÆ merged to main
        ΓööΓöÇΓöÇ Tagged v0.1.0
        ΓööΓöÇΓöÇ Branch deleted (never reused)
  ΓööΓöÇΓöÇ feature/2-next-issue           (fresh branch for next issue)
```

---

## After Merge

1. Tag `main` with the version: `git tag -a vX.Y.Z -m "vX.Y.Z: <description> ΓÇö Issue #N"` (see `versioning.md`)
2. Push the specific tag: `git push origin vX.Y.Z` (not `--tags` ΓÇö push only the intended tag to avoid publishing unintended local tags)
3. Apply `status/done` label to the issue manually (GitHub auto-close does not update labels)
4. Delete the merged branch (optional but recommended for hygiene)
