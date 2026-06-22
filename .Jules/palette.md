
## 2024-06-22 - Accessible Custom List Items
**Learning:** When making large container items interactive, they must receive role="button", tabIndex={0}, and keyboard handlers. Nested visually-only interactive elements (like icon buttons) must be converted to generic elements with aria-hidden="true" to prevent nested interactive element issues.
**Action:** Apply this pattern, along with stopPropagation() for valid nested interactive elements, to all custom selectable list items.
