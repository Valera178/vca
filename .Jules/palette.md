## 2024-06-16 - Accessible Interactive List Items with Nested Actions
**Learning:** Making large container components interactive requires specific a11y scaffolding (`role="button"`, `tabIndex`, `onKeyDown`) while ensuring inner visually-only controls are hidden from screen readers to prevent nested element issues.
**Action:** When converting `div`s to buttons, always convert inner icons/toggles to `aria-hidden="true"` and apply `e.stopPropagation()` to genuine nested buttons to prevent event bubbling.
