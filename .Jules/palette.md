## 2024-05-15 - Compound Interactive Elements for Large Tasks

**Learning:** Large list items using an entire `div` as a click target must be converted into accessible interactive elements using `role="button"`, `tabIndex={0}`, and appropriate ARIA attributes like `aria-pressed`. When doing this, inner visual controls (like checkmarks) must be hidden from screen readers using `aria-hidden="true"` to prevent nested interactive element confusion. Any distinct inner buttons (like a secondary action button) must explicitly call `e.stopPropagation()` on both click and keydown events to prevent triggering the parent container.

**Action:** Whenever converting a layout block (like a task list item or card) into an interactive clickable container, immediately assess and convert any nested interactive elements to visual-only indicators where appropriate, and ensure distinct inner buttons handle event propagation explicitly.
