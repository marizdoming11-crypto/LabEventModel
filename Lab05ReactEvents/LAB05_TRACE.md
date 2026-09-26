# Laboratory Activity 5 Trace

## Typed Event Handlers and Propagation Workshop

### 1. Nested Child Click

When the Child Surface was clicked with "Stop child bubble" disabled,
the event log showed:

1. Child clicked: Child
2. Parent clicked: Parent

This demonstrates event bubbling. The event starts at the child and
then propagates to the parent.

### 2. Nested Button Click

When the Nested Button was clicked with event propagation enabled,
the event log showed:

1. Button clicked: Nested Button
2. Child clicked: Child
3. Parent clicked: Parent

This demonstrates that the click event bubbles from the button to the
child and then to the parent.

### 3. Stop Child Bubble

When "Stop child bubble" was enabled and the Nested Button was clicked,
the event log showed:

1. Button clicked: Nested Button
2. Child clicked: Child
3. Child bubble stopped

The Parent clicked event did not appear because stopPropagation()
stopped the event from continuing to the parent.

### 4. Keyboard Handling

Text was entered into the input and the Escape key was pressed.

The input was cleared and the event log showed:

1. Escape pressed: input cleared

The keyboard handler uses:

React.KeyboardEvent<HTMLInputElement>

### 5. Prevent Link Default

When "Prevent link default" was enabled, clicking the Test Link
showed:

1. Link clicked
2. Link default prevented

The preventDefault() method prevented the browser's normal link action.

## Event Propagation Summary

The nested button demonstrated the following propagation order:

Button → Child → Parent

When stopPropagation() was enabled, the event stopped before reaching
the parent.

## Conclusion

The laboratory activity demonstrated typed React mouse and keyboard
event handlers, event bubbling, currentTarget, stopPropagation(),
preventDefault(), and propagation controls.