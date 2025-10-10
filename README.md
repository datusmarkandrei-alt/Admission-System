# Admission Portal (Static Frontend)

A responsive, static frontend for the PLP Admission Portal. It includes a multi-step form (Profile, Requirements, Application Details), a mobile-friendly navigation, and reusable input/dropdown components styled with modern CSS.

## Quick Start

- Open `index.html` directly in your browser, or
- Use a lightweight dev server (recommended for asset paths and caching):
  - VS Code: install "Live Server", then right‑click `index.html` → Open with Live Server
  - Node: `npx serve` then visit the served URL

No build step is required.

## Project Structure

```
Admission-System-main/
  About.html
  contactus.html
  form_student.html        # Main multi-step admission form UI
  forms.html
  index.html               # Landing page
  sample.html
  typeofapplicant.html
  src/
    css/
      global_styling.css   # Variables, tokens, utilities
      reviseformStudent.css# Form + sections styling (primary stylesheet)
      form_student.css     # Legacy styles (some components also referenced)
      *.css                # Page-specific styles
    html/
      contactus.html       # Additional content snippets
    images/                # Static assets
    Javascript/
      Navbar.js            # Mobile/desktop navbar behavior
      button_forms_navigator.js # Step navigation wiring
```

## Key Files

- `form_student.html`: Markup for the steps and sections (Profile → Requirements → Application Details).
- `src/css/reviseformStudent.css`: Current, readable styles for the form, grids, and responsiveness.
- `src/css/form_student.css`: Earlier/legacy styles still used by some shared components.

## Editing the Application Details Layout

The Application Details section is designed mobile‑first (single column) and expands to multiple columns on desktop.

- Container classes in `src/css/reviseformStudent.css`:
  - `.school_description_container`: 1 column on mobile, 3 columns at ≥1024px
  - `.school_avrg_details_container`: 1 column on mobile, 4 columns at ≥1024px
  - `.overallAvg_container`: spans full width of the grid row
  - `.Program_Choice_Information`: 1 column on mobile, 2 columns at ≥1024px

To change desktop columns, adjust the media query at the bottom of that section:

```css
@media (min-width: 1024px){
  .school_description_container{ grid-template-columns: repeat(3, 1fr); }
  .school_avrg_details_container{ grid-template-columns: repeat(4, 1fr); }
  .Program_Choice_Information{ grid-template-columns: repeat(2, 1fr); }
}
```

## Styling Conventions

- Mobile‑first CSS with progressive enhancement via media queries.
- Spacing scales and colors pulled from CSS custom properties in `global_styling.css`.
- Inputs follow a consistent pattern using `.input_group`, `.form_input`, `.form_label`, and `.select_input`.
- Avoid inline styles; prefer editing the sectioned blocks in `reviseformStudent.css`.

## Scripts

- `src/Javascript/Navbar.js`: Toggles the hamburger menu and responsive nav.
- `src/Javascript/button_forms_navigator.js`: Shows/hides step containers (`forms_container`, `requirements_container`, `application_details_container`).

## Accessibility Notes

- Buttons and links include accessible labels where relevant.
- Maintain visible focus states; do not remove `:focus-visible` styles.

## Contributing

1. Create a new branch for your change.
2. Keep CSS organized by section; prefer mobile‑first edits.
3. Test on mobile widths (≤640px) and desktop (≥1024px).
4. Open a PR with a short description and screenshots of the changes.

## License

This project is provided for educational and internal use. Update this section with your preferred license if distributing publicly.


