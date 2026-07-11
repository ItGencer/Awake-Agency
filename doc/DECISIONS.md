# Decisions

Date: 2026-07-11
Decision: Use Webpack with JavaScript, SCSS, BEM class naming, semantic HTML, and source files in `src/`.
Rationale: The requested project is a static one-page agency website, so JavaScript keeps the Webpack scaffold lighter than TypeScript while still supporting the required interactions.
Trade-offs: JavaScript has less compile-time safety than TypeScript. Script typing should be confirmed if the project is expected to grow into a larger application.

Date: 2026-07-11
Decision: Build the Awake site as one semantic page with anchor navigation.
Rationale: The user requested a premium one-page website with all major sections in a continuous Webflow-style layout.
Trade-offs: A one-page site keeps navigation simple, but deeper case studies or service pages would need additional routing or separate HTML pages later.

Date: 2026-07-11
Decision: Use remote editorial imagery for portfolio, team, avatars, and testimonials.
Rationale: The requested design depends on realistic premium visual assets and the project does not include local brand photography.
Trade-offs: Remote images require network access and should be replaced with licensed production assets before launch.
