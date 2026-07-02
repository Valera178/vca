## 2024-07-02 - Accessible Interactive List Items
**Learning:** When making large container items interactive in React, having nested buttons (like an explicit "action" button) breaks accessibility.
**Action:** Make the parent a `div` with `role="button"`, `tabIndex={0}`, and `onKeyDown`. Change inner visual icons to non-interactive `div aria-hidden="true"`, and use `e.stopPropagation()` on any actual nested buttons.
