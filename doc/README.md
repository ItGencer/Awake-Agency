# Awake Project Documentation

This folder stores project instructions for the Awake one-page agency website.

## Stack

- Build tool: Webpack
- Script typing: JavaScript `[NEEDS CONFIRMATION]`
- Styling: SCSS partials compiled by Webpack
- Markup: semantic HTML in `src/index.html`
- Source folder: `src/`
- Build output: `dist/`

## Local Commands

- `npm install` - install dependencies.
- `npm run dev` - start the Webpack dev server on port `3000`.
- `npm run build` - create a production build in `dist/`.

## Project Rules

- Keep website source in `src/`.
- Keep generated documentation and project instructions in `doc/`.
- Use semantic HTML landmarks and one `h1`.
- Use BEM class names for authored CSS.
- Use SCSS with `@use`, variables, mixins, and focused partials.
- Keep SEO metadata aligned with page content.
- Test desktop, tablet, and mobile layouts before handing off UI changes.
