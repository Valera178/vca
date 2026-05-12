## 2026-05-12 - Keyboard Accessibility for Complex Interactive Containers
**Learning:** When making large container components interactive (like a selectable task item), screen readers and keyboard navigation can break if there are nested interactive elements (like a visually identical inner `<button>` or checkbox).
**Action:** Use `role="button"`, `tabIndex={0}`, and `aria-pressed` on the parent container. Convert purely visual inner interactive elements to `<div aria-hidden="true">`. Add `e.stopPropagation()` on any genuinely separate interactive children (like action buttons).
