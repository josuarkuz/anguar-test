# Tabs

## Purpose
Provides an accessible tabbed interface for switching between related content sections.

## Accessibility Notes
- Uses `role="tablist"`, `role="tab"`, and `role="tabpanel"`
- Active tab exposes `aria-selected="true"`
- Each tab is associated to its panel with `aria-controls` and `aria-labelledby`
- Supports ArrowLeft, ArrowRight, Home, End, Enter, and Space keyboard behavior

## WCAG Criteria
- 1.3.1 Info and Relationships
- 2.1.1 Keyboard
- 2.4.3 Focus Order
- 4.1.2 Name, Role, Value
