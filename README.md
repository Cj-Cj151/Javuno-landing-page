# JAVUNO — Connected Work Management Landing Page

A complete, working implementation of the JAVUNO landing page: React + Vite + Tailwind CSS,
with Lucide React icons. Built from the JAVUNO design system (deep navy + indigo + violet)
and content brief.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
javuno-app/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx                # Wires every section together, in order
    ├── index.css               # Tailwind directives + a few global utilities
    ├── hooks/
    │   └── useReveal.js        # Scroll-reveal animation hook (IntersectionObserver)
    ├── data/
    │   └── siteData.js         # All prototype/demo content: projects, users, teams,
    │                            #   pricing, FAQ, testimonials, comparison table, etc.
    └── components/
        ├── ui/                  # Shared primitives: Button, Container, Eyebrow, SectionHeading
        ├── AnnouncementBar.jsx
        ├── Navbar.jsx           # Sticky dark nav + mobile menu
        ├── Hero.jsx
        ├── SocialProof.jsx
        ├── ProblemSection.jsx
        ├── JavunoDifference.jsx
        ├── ConnectedWorkflow.jsx  # Interactive Idea→Learn lifecycle picker
        ├── ProductDemo.jsx        # Interactive Dashboard/Board/List/Calendar/Timeline/Workload/Reports tabs
        ├── WorkViews.jsx
        ├── FeatureSection.jsx
        ├── AutomationSection.jsx  # Interactive WHEN/IF/THEN workflow builder
        ├── AISection.jsx          # Clickable AI prompts with demo responses
        ├── TeamSolutions.jsx      # Tabbed workflow per team
        ├── BenefitsSection.jsx
        ├── WhyJavuno.jsx
        ├── ComparisonSection.jsx
        ├── MetricsSection.jsx
        ├── CustomerStories.jsx
        ├── Testimonials.jsx
        ├── Integrations.jsx
        ├── ClientPortal.jsx
        ├── Security.jsx
        ├── Pricing.jsx
        ├── FAQ.jsx                 # Accordion
        ├── Newsletter.jsx          # Client-side email validation
        ├── FinalCTA.jsx
        └── Footer.jsx
```

## Notes

- All company names, testimonials, metrics, and the customer story are clearly labeled
  prototype/demo content — replace with verified data before launch.
- Integrations are shown as visual/demo badges, not functional connections.
- Colors and typography live in `tailwind.config.js` (`brand`, `accent`, `navy`, `midnight`,
  `graycool`, `canvas`, etc.) — change them there to re-theme the whole site.
- Respects `prefers-reduced-motion` globally via `src/index.css`.
- No backend calls are made anywhere; interactive elements (demo tabs, FAQ accordion,
  lifecycle picker, AI prompts, automation run button, newsletter form) are all local
  React state with no network requests.
