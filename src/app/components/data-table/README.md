# Data Table

## Purpose
Provides a semantic data table with sortable columns and pagination controls.

## Interaction Summary
Users can sort by column and move through paginated data using previous and next controls. Sort state and result range are communicated programmatically.

## Accessibility Notes
- Uses native table markup for strong semantic structure
- Sortable headers are interactive buttons
- Sort state is exposed at the column header level
- Pagination updates are announced politely
- Row headers help screen reader users track context

## Keyboard Support
- `Tab`: moves to sortable headers and pagination controls
- `Enter` / `Space`: activates sort buttons and pagination buttons

## ARIA / Semantic Structure
- Native `table`, `thead`, `tbody`, `th`, `td`
- Table includes a caption for screen readers
- Sortable columns expose `aria-sort`
- Result and page updates use `aria-live`

## WCAG Criteria
- 1.3.1 Info and Relationships
- 2.1.1 Keyboard
- 2.4.3 Focus Order
- 4.1.2 Name, Role, Value
- 4.1.3 Status Messages

## Testing Notes
- Verify sort state updates correctly
- Verify screen reader announcement of headers and row values
- Verify pagination buttons work by keyboard
- Verify current result range is announced after page change
- Test horizontal overflow behavior at smaller widths
