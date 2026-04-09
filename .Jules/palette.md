## 2024-04-09 - Accessible Large Interactive List Items
**Learning:** When creating large clickable list items, screen readers handle them poorly if they contain nested interactive elements without clear roles.
**Action:** The best approach discovered is to make the outer container `role="button"` with `tabIndex={0}`, use `aria-pressed`, convert inner visual toggles to `aria-hidden="true"`, and use `e.stopPropagation()` for explicit nested action buttons.
