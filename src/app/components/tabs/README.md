# Tabs

## Purpose
Provides an accessible tabbed interface for switching between related sections of content within the same page region.

## Interaction Summary
Users can move between tabs with arrow keys and activate them to reveal the associated tab panel.

## Accessibility Notes
- Only one tab is selected at a time
- The selected tab is included in normal tab order
- Each tab is linked to its panel
- Tab panels expose the current content region clearly

## Keyboard Support
- `Tab`: moves into the active tab and then to the panel
- `ArrowRight`: moves focus to the next tab
- `ArrowLeft`: moves focus to the previous tab
- `Home`: moves focus to the first tab
- `End`: moves focus to the last tab
- `Enter` / `Space`: activates the focused tab

## ARIA / Semantic Structure
- `role="tablist"`
- `role="tab"`
- `role="tabpanel"`
- Active tab uses `aria-selected`
- Tabs and panels are linked with `aria-controls` and `aria-labelledby`

## WCAG Criteria
- 1.3.1 Info and Relationships
- 2.1.1 Keyboard
- 2.4.3 Focus Order
- 4.1.2 Name, Role, Value

## Testing Notes
- Verify only one tab is active at a time
- Verify keyboard navigation between tabs
- Verify correct panel updates on activation
- Verify active tab state is announced by screen readers
