# Skip Navigation

## Purpose
Provides keyboard users a fast way to bypass repeated page content and move directly to important landmarks such as navigation or main content.

## Interaction Summary
The component renders skip links that become visible when focused. When activated, each link moves focus to its target region.

## Accessibility Notes
- Skip links are hidden visually until focused
- Links point to real page targets by id
- Focus is moved to the selected target region
- Intended for use near the top of the page

## Keyboard Support
- `Tab`: moves focus to the skip links
- `Enter`: activates the selected skip link
- `Shift + Tab`: moves back through previous focusable elements

## ARIA / Semantic Structure
- Uses semantic links inside a navigation landmark
- Targets should be valid landmarks or meaningful content containers

## WCAG Criteria
- 2.1.1 Keyboard
- 2.4.1 Bypass Blocks
- 2.4.3 Focus Order
- 2.4.7 Focus Visible

## Testing Notes
- Verify skip links are the first interactive elements in the page flow
- Verify focus moves to the intended target
- Verify links are visible when focused
- Test with keyboard only and with a screen reader
