# Form Inputs

## Purpose
Provides accessible examples of common form controls including text input, select, radio group, checkbox, and textarea with validation messaging.

## Interaction Summary
The component demonstrates a small form with required fields, optional fields, helper text, and validation errors shown after submit.

## Accessibility Notes
- Every control has a visible label
- Required fields communicate their required status
- Helper text is associated with controls
- Validation messages are associated with controls
- Invalid controls expose invalid state
- Radio inputs are grouped with `fieldset` and `legend`

## Keyboard Support
- `Tab`: moves through all controls in logical order
- `Shift + Tab`: moves backward through controls
- `Space`: toggles checkbox and radio selections
- `Arrow keys`: may be used by the browser for radio movement depending on platform
- `Enter`: submits the form when focused on the submit button

## ARIA / Semantic Structure
- Labels use explicit `for` / `id` relationships
- Hints and errors use `aria-describedby`
- Invalid controls use `aria-invalid`
- Radio group uses `fieldset` and `legend`

## WCAG Criteria
- 1.3.1 Info and Relationships
- 2.1.1 Keyboard
- 2.4.3 Focus Order
- 3.3.1 Error Identification
- 3.3.2 Labels or Instructions
- 4.1.2 Name, Role, Value

## Testing Notes
- Verify all labels are announced correctly
- Verify required errors appear after submit
- Verify `aria-describedby` changes correctly when errors appear
- Verify keyboard-only completion of the form
- Test with screen reader announcement of labels, hints, required state, and errors
