# Admission System


## shift + Alt + F prettier

## Overview
This is a **Student Services Admission System** project.  
The system is built using:
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** PHP  
- **Deployment:** Cloud-ready (lightweight and optimized for fast reloads)

The system already has an established **layout**.  
⚠️ **Do not change or modify the existing layout structure.**

---

## Design Guidelines
- Always keep the **existing layout** intact.  
- Use **lightweight CSS styling** (small, optimized, fast to load).  
- Keep styling **consistent** with the current layout and color scheme.  
- Only apply improvements, fixes, or new features when explicitly instructed.  

---

## Development Rules
1. **Do not alter the existing layout.**  
2. **Always read this README first before making any code changes.**  
3. **Only update or create files if explicitly instructed.**  
4. Code must remain **modular and cloud-ready**.  
5. Prioritize **performance and fast reload times**.  

---

## Instructions for AI Assistants (e.g., Cursor, ChatGPT, Copilot)
- You must **read and follow this README first** before doing anything.  
- Do **not modify existing files or layout** unless the user clearly asks.  
- If unclear, **ask for confirmation** instead of assuming changes.  
- Your role is to **assist and adjust according to these rules**, not to override them.  

---

## Purpose
This README is the **master reference file** for the Admission System project.  
Anyone (including AI assistants) must rely on this file before making modifications.  

---

## Recent Changes (Frontend standardization)

Files updated:
- `src/html/landingpage.css` (design tokens, buttons, about/contact/footer styles)
- `src/html/Landiingpage.html` (ARIA attributes, About/Contact/Footer sections, links)

CSS variables added/extended in `:root` (selected):
- Colors: `--color-gray`, `--color-gray-50`, `--ring-color`
- Spacing: `--space-4`, `--space-8`, `--space-16`, `--space-24`
- Motion: `--transition-fast`, `--transition-base`
- Shadows updated: `--shadow-sm`, `--shadow-md`, `--shadow-dark`

Reusable components:
- `.btn`, `.btn--primary`, `.btn--ghost` for consistent buttons

Accessibility:
- Added ARIA roles/labels to nav, contact form, footer; focus-visible outlines

How to test locally:
1. Open `src/html/Landiingpage.html` in a browser.
2. Verify section order: Hero → Services → About → Contact → Footer.
3. Click navbar “ABOUT” and “CONTACTS” to scroll to `#about` and `#contact`.
4. Resize between 320px–768px and confirm responsive layout.
5. Tab through interactive controls to see visible focus rings.

Changelog (proposed commit messages):
- `style(css): unify button styles`
- `feat(about): align about section design`
- `feat(contact): add contact form and info card`
- `feat(footer): add responsive footer with links and socials`
- `docs(readme): update instructions and changelog`