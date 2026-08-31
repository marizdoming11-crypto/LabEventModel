import { useState } from "react";

export function CounterPanel() {
  const [count, setCount] = useState<number>(0);

  return (
    <section>
      <h2>Counter</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </section>
  );
}