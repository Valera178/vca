
## $(date +%Y-%m-%d) - Interactive Container and Nested Buttons
**Learning:** Found a pattern where large clickable container `div`s lacked keyboard support, and they encapsulated visual-only buttons (like a circle outline vs checkmark) without semantics, creating unnecessary and confusing tab stops or interactive elements for screen readers. Also found an icon-only submit button missing an aria-label.
**Action:** Always add `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers to interactive containers. Convert visual-only inner controls to `div`s with `aria-hidden="true"`. Ensure nested distinct actions (like "Решить" buttons) have event propagation explicitly stopped for both `click` and `keydown` events. Always add `aria-label` to icon-only buttons.
