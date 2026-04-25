## 2024-04-25 - Interactive List Items

**Learning:** When creating large interactive list items (like task cards that toggle completion), it is a common anti-pattern to use nested interactive elements (like an inner visual-only `<button>` for the checkmark) inside a clickable `div`. This can cause confusion for screen readers. Furthermore, real functional buttons inside these areas need event propagation handled carefully to prevent the parent container from triggering its default action.

**Action:**
1. Use `role="button"`, `tabIndex={0}`, and `aria-pressed` on the main clickable container.
2. Add an `onKeyDown` handler (Enter/Space) on the container to ensure keyboard accessibility.
3. Change inner visual-only controls from `<button>` to `<div aria-hidden="true">`.
4. Apply `e.stopPropagation()` on both `onClick` and `onKeyDown` for inner functional buttons (e.g., "Решить") so their actions don't bubble up to the parent.
