## 2024-05-15 - Making Interactive List Items Accessible

**Learning:** When making large container items (like task lists) interactive to provide a large click area, standard `<button>` or nested interactive elements cause a11y conflicts (like nested buttons). Screen readers require list items to clearly denote their interactivity and state without causing focus confusion.

**Action:** Add `role="button"`, `tabIndex={0}`, keyboard handlers (for Enter/Space), and state attributes (e.g., `aria-pressed`) directly to the container `div`. Convert purely visual "controls" (like checkboxes inside the container) to non-interactive elements (e.g., `<div aria-hidden="true">`). If there are genuinely separate nested interactive actions (like a "Solve" button), ensure their handlers use `e.stopPropagation()` for both click and keydown events so they do not accidentally trigger the parent container's action.
