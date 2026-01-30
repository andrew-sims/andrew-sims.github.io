# CLAUDE.md - AI Assistant Guide

## Project Overview

This is Andrew Sims' personal portfolio website - a static single-page application showcasing his work as a Lead Product Designer. The site is hosted on GitHub Pages with a custom domain (andrewsims.co).

**Tech Stack:** HTML5 + SCSS + jQuery (no backend/framework)

## Directory Structure

```
/
├── index.html              # Main application (single page)
├── CNAME                   # GitHub Pages custom domain config
├── css/
│   ├── normalize.css       # Browser reset
│   ├── style.scss          # Source stylesheet (edit this)
│   ├── style.css           # Compiled CSS (auto-generated)
│   └── style.css.map       # Source map
├── js/
│   ├── jquery-3.1.1.min.js # jQuery library
│   ├── jquery-ui.min.js    # jQuery UI
│   ├── glfx.js             # WebGL effects
│   ├── jquery.unveil.js    # Lazy-loading images
│   └── next-section.js     # Custom scroll navigation
└── images/
    ├── work/               # Portfolio case study images
    └── (icons, backgrounds)
```

## Key Files

| File | Purpose | Notes |
|------|---------|-------|
| `index.html` | Complete site structure | Single-page with full-viewport sections |
| `css/style.scss` | Source styles | **Always edit this, not style.css** |
| `css/style.css` | Compiled CSS | Generated from SCSS |
| `js/next-section.js` | Scroll navigation | Custom jQuery plugin |
| `CNAME` | Domain config | Points to andrewsims.co |

## Development Workflow

### Building CSS

The project uses SCSS. When modifying styles:

1. Edit `css/style.scss` (never edit style.css directly)
2. Compile SCSS to CSS (generates style.css and style.css.map)
3. Test changes locally

### Deployment

- Push to `main` branch deploys automatically via GitHub Pages
- No build step required on GitHub - static files served directly
- Custom domain configured via CNAME file

### Local Development

Open `index.html` in a browser. No server required for basic testing.

## Code Conventions

### HTML

- BEM-inspired class naming: `.section--intro`, `.work-container`
- Semantic section elements for each viewport-sized area
- Data attributes for lazy-loading: `data-src`, `data-src-retina`
- No inline styles

### SCSS Variables (in style.scss)

```scss
$font-baseline: 8px;
$primary-color: #2a4fd1;      // Blue
$secondary-color: #5CB246;    // Green
$blocky-font: 'Bowlby One', serif;
$copy-font: 'Libre Franklin', sans-serif;
```

### Breakpoints

- Small: 768px+
- Medium: 992px+
- Large: 1200px+

### Design System

- **Primary Blue** (#2a4fd1) - Headers, primary sections
- **Secondary Green** (#5CB246) - Work section, accents
- **Light Gray** (#f3f3f3) - Alternate sections
- Full-viewport sections (100vh height)
- 7vw padding on sections
- 1100px max-width for content

## Content Sections (in index.html)

1. **Intro** - Personal introduction, social links
2. **Philosophy sections** (8 total) - Design principles
3. **Portfolio** - Case studies with Goal/Work/Outcome format
4. **Competencies** - 12 skill areas
5. **Past Roles** - Professional history

## JavaScript

- jQuery-based (v3.1.1)
- Custom scroll navigation via `next-section.js`
- Lazy-loading images via `jquery.unveil.js`
- WebGL effects available via `glfx.js`

## Important Notes

- **Always edit style.scss**, not style.css
- Test responsive layouts at all breakpoints
- Images in `/images/work/` are portfolio assets
- Lazy-loading uses `data-src` attributes
- Smooth scrolling between sections via .next-section/.prev-section classes

## Git Practices

- Descriptive commit messages focused on what changed
- Content and styling updates are typical commits
- Deploy by pushing to main branch
