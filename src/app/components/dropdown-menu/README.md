# Dropdown Menu

## Purpose
Provides accessible single-select and multi-select dropdown menu patterns.

## Accessibility Notes
- Trigger buttons expose `aria-haspopup` and `aria-expanded`
- Menus use `role="listbox"` and options use `role="option"`
- Multi-select uses `aria-multiselectable="true"`
- Supports ArrowUp, ArrowDown, Home, End, Enter, Space, Escape, and Tab behavior
- Selected state is exposed with `aria-selected`

## WCAG Criteria
- 1.3.1 Info and Relationships
- 2.1.1 Keyboard
- 2.1.2 No Keyboard Trap
- 2.4.3 Focus Order
- 4.1.2 Name, Role, Value
