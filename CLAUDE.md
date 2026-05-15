# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vue CLI dev server (`vue-cli-service serve`).
- `npm run build` — production build via `vue-cli-service build`.
- `npm run lint` — ESLint via `vue-cli-service lint` (config is inline in `package.json`: `plugin:vue/essential` + `eslint:recommended`, parser `babel-eslint`).

There is no test runner configured.

## Stack

Vue 2.6 SPA built with Vue CLI 4 (Webpack under the hood), styled with SCSS (`sass-loader`). Runtime deps of note: `vuelidate` (form validation), `emailjs-com` (contact form delivery), `vue-typed-js` (typing animation in the hello section). Formatting is governed by `.prettierrc.js` (4-space indent, single quotes, semicolons, no trailing commas, LF line endings) — match it when editing.

## Architecture

This is a single-page portfolio site. The "routing" is a hand-rolled, non-reactive pattern in `src/main.js`: a `routes` map keyed by `window.location.pathname` resolves to either `App.vue` (the full portfolio at `/`) or `PageNotFound.vue` (at `/404`). There is no Vue Router. `currentRoute` is read once at boot from `window.location.pathname` and never updated, so anchor links (`#about-section`, `#projects-section`, etc.) are how all in-page navigation works — these IDs are defined inside the section components and targeted from `Navbar.vue`.

`App.vue` composes the page as a flat list of section components (`Navbar`, `HelloComponent`, `Projects`, `Skills`, `ContactForm`, `Footer`), all loaded as async chunks via dynamic `import()` for code-splitting. Each section owns its own state; there is no Vuex/Pinia store and no cross-component event bus.

`Projects.vue` and `Skills.vue` are data-driven: project/skill entries (logo filename, title, HTML content string, optional link) live as arrays inside each component's `data()`, and a child component (`Project.vue`, `Skill.vue`) renders one card. To add an entry, edit the array — note that `content` is rendered with `v-html`, so any markup added there is injected as-is.

Images are looked up by filename via `require(\`@/assets/images/${logoLink}\`)` in `Project.vue`, so referenced image files must exist under `src/assets/images/` at build time (Webpack resolves them statically).

`ContactForm.vue` validates with Vuelidate (`required`, `email`, `minLength`, `maxLength`) and submits through EmailJS. It reads three `VUE_APP_EMAILJS_*` env vars (see `.env.example`) — Vue CLI only exposes vars prefixed with `VUE_APP_` to client code. Without these set, the form will fail at runtime.

## Styles

All SCSS partials live in `src/assets/styles/` and are aggregated by `main.scss`, which is imported once from `App.vue`. The convention is one partial per component plus a separate `_<component>_media.scss` for breakpoints and sometimes `_<component>_animations.scss` for keyframes. When adding a new component's styles, follow this split and add the imports to `main.scss` (it does not auto-discover).
