# Accordion

## Purpose
Provides expandable content sections that allow users to reveal or hide related information without leaving the current page.

## Interaction Summary
Each section has a button that toggles visibility of its associated content panel. Multiple sections may remain open at the same time in this implementation.

## Accessibility Notes
- Uses native button elements for each trigger
- Expanded state is exposed for each section
- Each panel is associated with its controlling button
- Structure remains understandable to screen reader users

## Keyboard Support
- `Tab`: moves between accordion trigger buttons
- `Enter` / `Space`: expands or collapses the focused section

## ARIA / Semantic Structure
- Triggers use native `button`
- Trigger state uses `aria-expanded`
- Trigger relationship uses `aria-controls`
- Panels use `role="region"`
- Panels use `aria-labelledby`

## WCAG Criteria
- 1.3.1 Info and Relationships
- 2.1.1 Keyboard
- 2.4.3 Focus Order
- 4.1.2 Name, Role, Value

## Testing Notes
- Verify expand and collapse behavior
- Verify `aria-expanded` changes correctly
- Verify button-to-panel relationships
- Verify keyboard-only access to every section
