# Coding Rules

## JavaScript

- Scripts use ES modules in `src/index.js`.
- Keep stateful UI behavior in small classes or modules.
- Use `data-*` hooks for JavaScript behavior instead of visual-only classes.
- Current interactive behaviors: mobile menu, smooth scrolling, active nav state, FAQ accordion, and current year.

## HTML And BEM

- Use semantic elements: `header`, `nav`, `main`, `section`, `article`, `figure`, `address`, and `footer`.
- Keep one clear `h1` on the page.
- Use BEM names: `block`, `block__element`, and `block--modifier`.
- Do not introduce utility-heavy class names unless a design system is added.

## SCSS

- Store styles in `src/style/`.
- Use `@use` instead of legacy `@import`.
- Keep tokens in `_variables.scss`, reusable helpers in `_mixins.scss`, global rules in `_base.scss`, shell layout in `_layout.scss`, reusable patterns in `_components.scss`, and page sections in `_sections.scss`.
- Keep nesting shallow and remove unused selectors during refactors.

## SEO And Accessibility

- Maintain title, meta description, keywords, Open Graph, and Twitter metadata when page copy changes.
- Use descriptive `alt` text for meaningful images and empty `alt=""` for decorative images.
- Preserve visible focus states and keyboard-operable controls.
- Keep accordion buttons connected to answer panels with `aria-controls` and `aria-expanded`.
