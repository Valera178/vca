## 2024-06-17 - Student Cabinet Task List Interactive Elements Accessibility
**Learning:** Found nested interactive element pattern inside a clickable container (`<div onClick="...">`) which isn't keyboard accessible. Clickable divs lacking `role="button"` and `tabIndex` make it impossible to use the UI with a keyboard.
**Action:** Always make interactive UI list items keyboard-accessible by adding `role="button"`, `tabIndex={0}`, `onKeyDown` and using `e.stopPropagation()` when there are nested interactive elements.
