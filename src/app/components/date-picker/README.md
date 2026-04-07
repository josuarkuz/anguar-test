# Date Picker

## Purpose
Provides an accessible calendar-based date selection pattern with keyboard navigation and grid-style interaction.

## Interaction Summary
Users open the calendar from a trigger button, move through days with keyboard commands, change months, and select a date.

## Accessibility Notes
- Trigger exposes popup state
- Calendar uses a grid-like structure with weekday headers
- Focused day and selected day are differentiated
- Users can navigate by day, week, and month
- The component supports selecting today quickly

## Keyboard Support
- `Enter` / `Space` on trigger: opens the calendar
- `Escape`: closes the calendar
- `ArrowLeft` / `ArrowRight`: move one day
- `ArrowUp` / `ArrowDown`: move one week
- `Home`: move to start of week
- `End`: move to end of week
- `PageUp`: move to previous month
- `PageDown`: move to next month
- `Enter` / `Space` on a day: selects the focused date

## ARIA / Semantic Structure
- Trigger uses `aria-haspopup="dialog"`
- Trigger uses `aria-expanded`
- Popup uses `role="dialog"`
- Calendar uses a grid interaction model
- Days expose selected state with `aria-selected`

## WCAG Criteria
- 1.3.1 Info and Relationships
- 2.1.1 Keyboard
- 2.1.2 No Keyboard Trap
- 2.4.3 Focus Order
- 4.1.2 Name, Role, Value

## Testing Notes
- Verify full keyboard navigation through the calendar
- Verify month navigation updates correctly
- Verify selected date is announced correctly
- Verify Escape closes the popup
- Verify today and selected states remain visually distinct
