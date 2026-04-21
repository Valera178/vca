## 2026-04-21 - Accessible Interactive Containers
**Learning:** When making complex div containers interactive (like task lists with their own buttons inside), using just onClick breaks keyboard accessibility. Wrapping it in a button causes nested interactive element issues if it contains other buttons.
**Action:** Use role="button", tabIndex={0}, and onKeyDown on the main container div. Convert inner visual-only buttons (like checkmarks) to divs with aria-hidden="true". Use e.stopPropagation() on any inner actionable buttons to prevent triggering the parent container.
