# Navigation Bar

## Purpose
Provides a responsive primary navigation pattern with desktop and mobile behavior, including a dropdown menu for grouped links.

## Interaction Summary
The component supports standard navigation links, a mobile menu toggle, and a dropdown submenu under the Components section.

## Accessibility Notes
- Uses semantic `nav` landmark for primary navigation
- Mobile menu toggle exposes expanded state
- Dropdown trigger exposes expanded state and popup relationship
- Dropdown items are keyboard reachable
- All interactive controls meet minimum touch target sizing

## Keyboard Support
- `Tab`: moves through navigation links and controls
- `Enter` / `Space`: activates links or opens the dropdown
- `ArrowDown`: opens the dropdown and moves into items
- `ArrowUp` / `ArrowDown`: moves between dropdown items
- `Home` / `End`: jumps to first or last dropdown item
- `Escape`: closes the dropdown
- `Tab`: closes the dropdown when leaving it

## ARIA / Semantic Structure
- `nav` landmark with `aria-label`
- Dropdown trigger uses `aria-haspopup="true"`
- Dropdown trigger uses `aria-expanded`
- Trigger and menu are associated with `aria-controls`

## WCAG Criteria
- 1.3.1 Info and Relationships
- 2.1.1 Keyboard
- 2.1.2 No Keyboard Trap
- 2.4.3 Focus Order
- 2.4.7 Focus Visible
- 4.1.2 Name, Role, Value

## Testing Notes
- Verify desktop and mobile states
- Verify dropdown opens and closes correctly
- Verify keyboard navigation within the dropdown
- Verify focus remains visible at all times
- Test with screen reader landmark navigation
