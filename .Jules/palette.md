## 2024-05-24 - Missing Input Labels
**Learning:** Several form inputs (e.g., in `Syllabus.tsx`, `LichessIntegration.tsx`) rely exclusively on placeholders without explicit `<label>` tags or `aria-label` attributes. This breaks screen reader accessibility, as placeholders are not reliable replacements for labels.
**Action:** Always add explicit `aria-label` attributes (in Russian, matching the UI language) to inputs when visual `<label>` tags are omitted for layout compactness.
