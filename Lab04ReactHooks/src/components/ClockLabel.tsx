import { useEffect, useState } from "react";

export function ClockLabel() {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section>
      <h2>Current Time</h2>
      <p>{now.toLocaleTimeString()}</p>
    </section>
  );
}