# Modal Dialog

## Purpose
Provides an accessible dialog for important tasks, confirmations, and interruptions that require focused user attention.

## Interaction Summary
The dialog opens from a trigger, moves focus into the dialog, traps focus while open, and restores focus to the trigger when closed.

## Accessibility Notes
- Uses dialog semantics
- Moves focus into the modal when opened
- Traps focus while open
- Restores focus to the previously focused trigger when closed
- Supports closing with Escape, backdrop click, and action buttons

## Keyboard Support
- `Tab`: moves forward through focusable elements in the dialog
- `Shift + Tab`: moves backward through focusable elements in the dialog
- `Escape`: closes the dialog
- `Enter` / `Space`: activates focused buttons

## ARIA / Semantic Structure
- `role="dialog"`
- `aria-modal="true"`
- Dialog title is associated with `aria-labelledby`
- Optional description is associated with `aria-describedby`

## WCAG Criteria
- 2.1.1 Keyboard
- 2.1.2 No Keyboard Trap
- 2.4.3 Focus Order
- 2.4.7 Focus Visible
- 4.1.2 Name, Role, Value

## Testing Notes
- Verify focus moves into the dialog on open
- Verify focus cannot leave the dialog with Tab while open
- Verify Escape closes the dialog
- Verify focus returns to the opening button
- Test dialog title and description announcement with a screen reader
