## 2026-04-27 - Interactive List Item Accessibility
**Learning:** Found a pattern in the app where large container `div`s act as click targets (e.g., task list toggles) but lack keyboard and screen reader support, creating invalid nested interactive elements when they contain inner buttons.
**Action:** Applied `role="button"`, `tabIndex={0}`, `aria-pressed`, and `onKeyDown` to the container, changed visual-only toggles to `div aria-hidden="true"`, and used `e.stopPropagation()` on genuinely separate inner interactive buttons to ensure accessibility without breaking the large click target UX.
