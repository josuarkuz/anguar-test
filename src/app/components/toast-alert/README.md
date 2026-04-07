# Toast Alert

## Purpose
Provides accessible status and alert notifications for success, information, warning, and error messages.

## Interaction Summary
Users can trigger different message types. Some messages auto-dismiss after a delay, while more important alerts remain visible until dismissed manually.

## Accessibility Notes
- Informational updates are announced politely
- Warning and error updates are announced assertively
- Notifications do not steal focus
- Each notification includes a dismiss button
- Auto-dismiss is limited to lower-risk messages

## Keyboard Support
- `Tab`: moves to dismiss buttons
- `Enter` / `Space`: dismisses the focused notification

## ARIA / Semantic Structure
- Success and info messages use `role="status"`
- Warning and error messages use `role="alert"`
- Live region behavior is configured per message importance

## WCAG Criteria
- 2.1.1 Keyboard
- 2.4.3 Focus Order
- 4.1.2 Name, Role, Value
- 4.1.3 Status Messages

## Testing Notes
- Verify polite vs assertive announcement behavior
- Verify dismiss buttons work by keyboard
- Verify notifications do not move focus unexpectedly
- Verify auto-dismiss only applies to lower-priority messages
