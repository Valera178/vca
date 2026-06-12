## 2024-06-12 - Interactive Container Patterns
**Learning:** Making large container items interactive while maintaining accessibility requires specific ARIA roles (button, aria-pressed), keyboard handlers (onKeyDown), and ensuring nested interactive elements stop event propagation to avoid triggering the parent container. Visual controls inside should be hidden from screen readers to prevent nested element confusion.
**Action:** Always apply `role="button"`, `tabIndex={0}`, and `aria-pressed` for selectable list items, and use `e.stopPropagation()` on independent nested actions.
