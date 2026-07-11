# Awake Agency

## Overview

Awake Agency is a Webflow-based creative agency website template for startups and bold brands. The site presents a design and strategy agency with a polished landing page, service overview, portfolio work, team profiles, testimonials, pricing plans, FAQs, awards, and a dedicated contact form.

- **Analyzed URL**: https://awakeagency.webflow.io/
- **Page title**: Awake - Webflow HTML website template
- **Site type**: agency landing page with a separate contact page
- **Primary audience**: startups, small businesses, and brands looking for design, strategy, web, and marketing support
- **Primary goal**: drive visitors toward collaboration inquiries through "Get Started", "Let's Collaborate", and contact-form CTAs

## Architecture

The public experience is mostly a single-page scrolling homepage supported by a separate contact page and template utility pages.

### Main Routes

- `/` - homepage with all primary marketing sections
- `/contact` - contact form page
- `/404` - error page linked from the footer
- `/style-guide` - Webflow template style guide
- `/licenses` - asset/license information
- `/changelog` - template update notes

### Homepage Anchors

- `#home` - hero and trust indicators
- `#about-us` - agency positioning and metrics
- `#services` - service categories
- `#work` - portfolio/project cards
- `#team` - team member profiles
- `#pricing` - service plans and FAQ
- `#award` - awards/accolades section

## Technologies Identified

- **Webflow**: visible "Made in Webflow" badge, footer attribution, hosted `webflow.io` domain, and Webflow template utility pages.
- **Static marketing frontend**: image-led landing page with anchor navigation and a separate contact route.
- **Forms**: contact form fields are visible, but submission behavior and integrations are `[NEEDS CONFIRMATION]`.
- **Backend/CMS**: no backend, CMS collection, or external CRM integration was confirmed from the visual inspection.

## Site Structure

### Header

The header stays visible while scrolling and includes:

- Awake logo
- pill-style navigation: Home, About us, Services, Work, Team, Pricing, Awards
- black "Let's Collaborate" CTA button linking to `/contact`

### Hero

The hero headline reads "Building bold brands with thoughtful design". Supporting copy says Awake helps small startups tackle large challenges with tailored solutions, guiding them from strategy to success.

Visible CTAs and proof points:

- "Get Started"
- "Trusted by 200+ clients"
- "Loved by 100,00+ big and small brands around the worlds" as displayed on the template

### About

The about section positions the agency around creativity, innovation, and strategy. Visible metrics include:

- 40+ total projects completed
- 15+ years of experience
- 12+ design awards

### Services

The service section is introduced with "Where innovation meets aesthetics" and displays five service cards:

- Brand Strategy
- Web Development
- Digital Marketing
- UI/UX Designing
- Analytics & Reporting

### Work

The portfolio section uses large visual project cards under the heading "How we transformed a small business's online presence".

Visible projects include:

- FlowBank - UX Research, Interface Design
- Academy.co - Product Design, Interaction Design
- Genome - Brand identity design, UX Research
- Hotto - Visual Story telling, Web & Mobile Design

### Team

The team section introduces "the creative minds behind our success" with colorful portrait cards.

Visible team members:

- Logan Dang - Wordpress Developer
- Ana Belic - Social Media Specialist
- Brian Hanley - Product Designer
- Darko Stankovic - UI Designer

### Testimonials

The testimonial area highlights customer stories and social proof, including:

- "Awake's expertise transformed my vision into success..."
- "Their creativity and attention to detail transformed our brand completely!"
- "Awake Design Agency brought our ideas to life..."
- 91% clients recommend the agency's design services

### Pricing

The pricing section is titled "Pick the plan that fits your start-up" and shows two plans:

| Plan | Price | Positioning | Visible Features |
|------|-------|-------------|------------------|
| Starter | `$2500/month` | For companies needing design support, one request at a time | Design updates every 2 days, mid-level designer, SEO optimization, monthly analytics, 2x calls per month, license-free assets |
| Pro | `$3500/month` | Faster support for an MVP, web app, or complex problem | Daily design updates, senior-level designer, AI advisory framework, full-service creative team, 4x calls per month, license-free assets |

### FAQ

Visible FAQ prompts:

- What services does Awake Agency offer?
- How long does a typical project take?
- How is pricing structured at Awake Agency?
- Do you offer ongoing support after project completion?
- How often will I receive updates on my project?
- How do I get started with Awake Agency?

### Awards

The awards section is titled "Accolades and achievements celebration our design excellence" and includes:

- Webflow Awards - 2025
- Dribbble Awards - 2024
- awwwards Awards - 2023

### Contact Page

The contact page headline reads "Love to hear from you, Get in touch". The form includes:

- First name
- Last name
- Phone number
- Email address
- Message
- Send Message button

### Footer

The footer includes a large collaboration CTA, sitemap, utility links, social icons, and contact details.

Visible contact details:

- **Address**: 81 Rivington Street London EC2A 3AY
- **Email**: hello@awake.agnecy
- **Phone**: 0105 192 3556

The displayed email appears to contain a typo (`agnecy` instead of `agency`) and should be checked before production use.

## Visual Style

- Light pastel gradient backgrounds, especially in hero and CTA areas
- Rounded pill navigation and rounded card shapes
- Strong black typography mixed with pale gray and italic display text
- Bright accent colors: purple, yellow, blue, orange, green, and soft pink
- Large whitespace and centered editorial headings
- Bold black CTA buttons with arrow icons
- Colorful service cards, pricing cards, and team portraits
- Webflow badge visible in the lower-right corner on the inspected template

## Production Notes

- Replace template/demo copy where needed before using this as a real agency site.
- Confirm and correct the visible email address if `hello@awake.agnecy` is not intentional.
- Connect the contact form to the intended email, CRM, automation, or Webflow form backend `[NEEDS CONFIRMATION]`.
- Decide whether to keep or remove Webflow template utility pages (`/style-guide`, `/licenses`, `/changelog`) from public navigation.
- Add real portfolio case studies and verified awards before launch.
- Verify mobile/tablet breakpoints and form validation before publishing.

