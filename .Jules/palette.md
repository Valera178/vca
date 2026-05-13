## 2026-05-13 - [Task Card Accessibility]
**Learning:** Creating accessible large clickable cards with inner actions requires converting the outer container to `role="button"`, managing `aria-pressed`, adding `onKeyDown` for Space/Enter, and explicitly adding `stopPropagation` to nested buttons.
**Action:** Always strip interactive semantics from inner decorative toggles (e.g. `div aria-hidden="true"`) and provide full keyboard support to the outer container when implementing clickable list items.
