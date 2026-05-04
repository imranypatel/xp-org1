# Versioning Standard

**Version**: v0.1.0  
**Issue**: [#1 — Governance: Issue-driven workflow standards](https://github.com/imranypatel/xp-org1/issues/1)  
**Status**: Active

---

## Scheme

All releases, documents, and revisions follow **Semantic Versioning** (`vMAJOR.MINOR.PATCH`).

| Component | When to Increment | Reset on Increment |
|-----------|------------------|--------------------|
| **MAJOR** | Breaking workflow change, repo restructure, incompatible standard change | MINOR and PATCH → 0 |
| **MINOR** | New domain support, new standard document, new feature addition | PATCH → 0 |
| **PATCH** | Doc revision, clarification, small fix, typo, comment | — |

- **Initial version**: `v0.1.0` (pre-stable governance bootstrap)
- MAJOR = 0 means the governance standards are still being established

---

## Git Tags

Every merge to `main` is tagged with the version that the PR represents:

```bash
# After PR merge, from main:
git fetch origin
git checkout main
git pull origin main
git tag -a v0.1.0 -m "v0.1.0: Governance bootstrap — Issue #1"
git push origin v0.1.0    # push the specific tag only (not --tags)
```

- Tags are **annotated** (`-a`) with a `-m` message — never lightweight, never omit `-m`
- Tag message format: `vX.Y.Z: <short description> — Issue #N`
- Push **only the specific tag**: `git push origin vX.Y.Z` (not `git push origin --tags`, which publishes all local tags including accidental or experimental ones)

---

## Document Versioning

Documents include the version in their **filename**:

```
docs/plans/issue-1/governance-workflow-v0.1.0.md
docs/standards/versioning.md          ← standards documents omit version in name
                                         (they evolve in-place; use git history)
```

**Plans** (`docs/plans/`) are versioned in filename because each version is a discrete deliverable.  
**Standards** (`docs/standards/`) evolve in-place; their version is tracked via git tags and the header metadata.

### Plan revision example

When Issue #1 is revised (triggered by a new issue or comment):

1. A new issue or comment on #1 is created in the repo
2. A new branch is created: `docs/1-governance-workflow-revision`
3. A new file is created: `docs/plans/issue-1/governance-workflow-v0.1.1.md`
4. PR is raised, merged, and tagged `v0.1.1`

The previous version file is kept for history.

---

## Revision Trigger Rule

> Every revision MUST be triggered by a GitHub Issue or a comment under an existing issue.

No branch, no commit, no version bump without a corresponding issue/comment in the origin repo.

---

## Rollback Procedure

When a merged change needs to be reversed:

### Standard rollback (any domain)

```bash
# Create a new issue documenting the reason for the revert
# Create a revert branch from main
git checkout main && git pull origin main
git checkout -b fix/N-revert-vX-Y-Z

# Revert the squash-merge commit
git revert <squash-merge-sha>
git push origin fix/N-revert-vX-Y-Z

# Raise a PR: "[vX.Y.Z+1] Revert: <description> (#N)"
# After merge, tag the new version
```

### Retracting a pushed tag

```bash
git push origin --delete vX.Y.Z    # remove from origin
git tag --delete vX.Y.Z            # remove locally
```

Tag deletion should be documented as a comment on the original issue.

### 🔴-domain emergency

If a Payments / Finance / Legal change is critically wrong and cannot wait for a PR cycle, a direct-to-main push is permitted **only** when all of the following are true:
1. The principal agent explicitly documents the emergency in the relevant issue
2. The `imranypatel` account performs the push
3. A new issue is opened immediately to formalize the emergency commit via normal PR process

This exception exists to prevent a broken billing or payment state from persisting. It must never be used for convenience.

## Version Lifecycle

```
v0.1.0  ← Governance bootstrap (this release)
v0.1.1  ← Patch: doc fix or clarification
v0.2.0  ← Minor: new domain or standard added
v1.0.0  ← Major: governance standards declared stable
```
