# ADR-005: Personal Site Skin Consolidation Strategy

**Status**: Active
**Date**: 2026-03-31

## Context

The personal site launched with 8 distinct skins (Light, Dark, Aurora, Bold, Brutalist, Matrix, Motion, Retro) to explore different visual directions quickly. This was valuable for early experimentation, but the multi-skin architecture has a compounding maintenance cost: every structural change to the experience layer has to be replicated across all 8 templates.

Issue #2 (promotion styling) made this concrete — a single data model change and shared component still required touching 8 skin files. As the site grows more sophisticated (richer components, more data, motion/animation work), this cost only increases.

The site also lacks a clear identity. Eight skins in flight means no single one is polished enough to represent the brand. Matrix is the clear direction: it has the strongest personality, the most interesting aesthetic, and the most room for creative development.

## Decision

**Designate Matrix as the sole active skin.** All other skins are parked.

- Matrix is set as the default skin and the only fully rendered preview
- Non-Matrix preview routes serve a themed "coming soon" placeholder page — styled in the spirit of each skin, but not a full render
- The skin drawer visually distinguishes active from parked skins (e.g. an "under construction" or "upcoming" treatment)
- All 8 skin templates remain in the codebase — nothing is deleted yet

## Skin Fate (Current Thinking)

| Skin | Status | Notes |
|------|--------|-------|
| Matrix | **Active** | The focus. Being polished and extended. |
| Motion | Parked - likely merge | Motion effects and animations to be pulled into Matrix when the time is right |
| Light | Parked - undecided | Clean and professional; could be revived as a light-mode variant |
| Dark | Parked - undecided | Similar to Light — possible light/dark toggle pairing |
| Aurora | Parked - undecided | Strong aesthetic; low priority |
| Bold | Parked - undecided | Too loud; uncertain value |
| Retro | Parked - undecided | Fun but niche |
| Brutalist | Parked - likely drop | Doesn't represent the brand; unlikely to be revived |

These are directional, not final. Decisions will be made when Matrix reaches a stable baseline.

## Consequences

- Skin-level maintenance burden drops from 8x to 1x immediately
- Matrix polish work can begin without the overhead of keeping other skins in sync
- Other skins accumulate drift while parked — a future "revive" effort will require reconciling changes, or rebuilding from scratch using Matrix as the new baseline
- The site gains a clear visual identity in the near term

## When to Revisit

Once Matrix is considered "done" (stable layout, polished components, motion/animation integrated), evaluate:
- Which parked skins are worth reviving, if any
- Whether a light/dark toggle within Matrix makes more sense than a separate Light/Dark skin
- Whether the multi-skin concept is worth maintaining at all, or if Matrix simply becomes the site
