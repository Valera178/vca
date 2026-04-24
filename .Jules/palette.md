## 2024-04-24 - Preserving Large Click Targets in Interactive Lists
**Learning:** When making large list items (like task cards) clickable for better UX, simply wrapping the content in a `<div onClick={...}>` creates accessibility issues. Adding `role="button"` and `tabIndex={0}` is necessary for keyboard navigation, but it can lead to nested interactive element issues if there are internal controls (like checkboxes or inner buttons).
**Action:** When creating interactive list item containers:
1. Make the container fully accessible (`role="button"`, `tabIndex={0}`, `aria-pressed`, `onKeyDown` for Space/Enter).
2. Convert inner visual-only controls (like mock checkboxes) to non-interactive elements (`<div aria-hidden="true">`) to prevent nested button issues.
3. If genuine interactive elements are nested (like a "Solve" button inside a task), explicitly add `e.stopPropagation()` for both `onClick` and `onKeyDown` to prevent triggering the parent container's action.
