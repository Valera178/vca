## 2025-02-14 - Accessible Interactive List Containers
**Learning:** Using `div`s with `onClick` for list items causes them to be inaccessible to keyboard/screen reader users, and nested action buttons cause event bubbling bugs where clicking an action toggles the entire list item.
**Action:** Converted list containers to use `role="button"`, `tabIndex={0}`, and `onKeyDown`. Added `e.stopPropagation()` to nested buttons, and changed visual-only internal buttons to `<div aria-hidden="true">`.
