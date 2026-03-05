## 2024-05-16 - Accessible Accordion Toggles
**Learning:** Using generic `div` elements for interactive UI components like accordions excludes keyboard users. Even with `onClick` handlers, `div`s lack native focus management and keyboard event bindings (like Enter/Space).
**Action:** Always use semantic `<button>` elements for interactive toggles. Add `w-full text-left` to maintain layout when replacing `div`s, and include `aria-expanded` and `aria-controls` to communicate state to screen readers.
