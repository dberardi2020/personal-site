# Personal Site

Astro v5 static site. Tailwind CSS v4 via `@tailwindcss/vite` (no config file).

## Stack

- `src/skins/` - pure skin templates (one per visual theme)
- `src/config/skins.ts` - skin registry and `DEFAULT_SKIN`
- `src/pages/index.astro` - thin wrapper importing the default skin
- `src/pages/preview/<id>.astro` - thin wrappers for each skin (one file each)
- `src/components/` - shared components (SkinDrawer, etc.)
- `src/layouts/Layout.astro` - base HTML shell (no skin-specific styling)

## Dev Server

```bash
npm run dev -- --host
```

Dev toolbar is disabled. To re-enable: `npx astro preferences enable devToolbar`

## Development Workflow

- `master` is stable and deployable
- Feature branches required for non-trivial changes (new skins, refactors, bug fixes)
- PRs required before merge - self-review expected
- GitHub Issues for bugs and future features
- Testing: visual check in browser across affected skins
- No CI/CD currently

## Key Conventions

- Skin `<style>` tags must use `is:global` - Astro scopes component styles by default, which breaks `body {}` and pseudo-element rules
- Do not add background or text color classes to `Layout.astro` body - skins own those styles
- Adding a skin requires: new `src/skins/<Name>.astro`, new `src/pages/preview/<id>.astro`, entry in `src/config/skins.ts`
- Changing the default skin: update `DEFAULT_SKIN` in `skins.ts` AND the import in `src/pages/index.astro`
