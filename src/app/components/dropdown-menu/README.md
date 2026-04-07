# Dropdown Menu

## Purpose
Provides accessible single-select and multi-select dropdown patterns for choosing one or more options from a compact menu.

## Interaction Summary
The component contains a single-select dropdown and a multi-select dropdown. Both support opening, navigating options, and selecting values with keyboard or pointer input.

## Accessibility Notes
- Trigger buttons expose popup and expanded state
- Listbox semantics are used for options
- Selected options expose selected state
- Multi-select menu indicates multiple selected values
- Menus close when focus leaves or when clicking outside

## Keyboard Support
- `Tab`: moves to trigger buttons and leaves the menu
- `Enter` / `Space`: opens the menu or selects the active option
- `ArrowDown` / `ArrowUp`: moves between options
- `Home` / `End`: jumps to first or last option
- `Escape`: closes the menu and returns focus to the trigger

## ARIA / Semantic Structure
- Trigger buttons use `aria-haspopup="listbox"`
- Trigger buttons use `aria-expanded`
- Menus use `role="listbox"`
- Options use `role="option"`
- Multi-select menu uses `aria-multiselectable="true"`
- Selected state uses `aria-selected`

## WCAG Criteria
- 1.3.1 Info and Relationships
- 2.1.1 Keyboard
- 2.1.2 No Keyboard Trap
- 2.4.3 Focus Order
- 4.1.2 Name, Role, Value

## Testing Notes
- Verify both single-select and multi-select behavior
- Verify keyboard navigation loops correctly
- Verify selected state is announced
- Verify clicking outside closes the menu
- Test with screen reader announcement of trigger, expanded state, and options
