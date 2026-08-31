# Laboratory Activity 4: React Hooks

## Description

This laboratory demonstrates the use of React hooks in a React + TypeScript application. The activity uses `useState`, `useReducer`, and `useEffect` to manage state, process actions, and handle an external timer.

## 1. useState - CounterPanel

The `useState` hook is used in `CounterPanel.tsx` to store and update the counter value.

The counter starts at 0 and can be changed using the Increment, Decrement, and Reset buttons.

## 2. useReducer - FilterList

The `useReducer` hook is used in `FilterList.tsx` to manage a list of tasks.

The reducer processes different actions:

- `add` - adds a new task
- `toggle` - changes a task between completed and incomplete
- `setFilter` - changes the displayed task filter

The filter can display all tasks, open tasks, or completed tasks.

## 3. useEffect - ClockLabel

The `useEffect` hook is used in `ClockLabel.tsx` to create a timer that updates the current time every second.

The effect uses `setInterval()` to update the time and `clearInterval()` in the cleanup function to stop the timer when the component is removed.

## Component Composition

The components are imported and rendered in `App.tsx`:

- `CounterPanel`
- `FilterList`
- `ClockLabel`

This demonstrates how multiple functional components can be combined to create a React user interface.