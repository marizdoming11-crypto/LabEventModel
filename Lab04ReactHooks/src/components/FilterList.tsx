import { useReducer } from "react";

type Item = {
  id: string;
  text: string;
  done: boolean;
};

type State = {
  items: Item[];
  filter: "all" | "open" | "done";
};

type Action =
  | { type: "add"; text: string }
  | { type: "toggle"; id: string }
  | { type: "setFilter"; filter: State["filter"] };

const initialState: State = {
  items: [
    { id: "1", text: "Learn useState", done: true },
    { id: "2", text: "Learn useReducer", done: false },
    { id: "3", text: "Learn useEffect", done: false },
  ],
  filter: "all",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add":
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: String(Date.now()),
            text: action.text,
            done: false,
          },
        ],
      };

    case "toggle":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id
            ? { ...item, done: !item.done }
            : item
        ),
      };

    case "setFilter":
      return {
        ...state,
        filter: action.filter,
      };
  }
}

export function FilterList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filteredItems = state.items.filter((item) => {
    if (state.filter === "open") return !item.done;
    if (state.filter === "done") return item.done;
    return true;
  });

  return (
    <section>
      <h2>Task List</h2>

      <div>
        <button onClick={() => dispatch({ type: "setFilter", filter: "all" })}>
          All
        </button>

        <button onClick={() => dispatch({ type: "setFilter", filter: "open" })}>
          Open
        </button>

        <button onClick={() => dispatch({ type: "setFilter", filter: "done" })}>
          Done
        </button>
      </div>

      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            <button onClick={() => dispatch({ type: "toggle", id: item.id })}>
              {item.done ? "✓" : "○"}
            </button>{" "}
            {item.text}
          </li>
        ))}
      </ul>

      <button
        onClick={() =>
          dispatch({
            type: "add",
            text: `New task ${state.items.length + 1}`,
          })
        }
      >
        Add Task
      </button>
    </section>
  );
}