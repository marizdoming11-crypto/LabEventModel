import { useState } from "react";

function EventPlayground() {
  const [logs, setLogs] = useState<string[]>([]);
  const [stopChildBubble, setStopChildBubble] = useState(false);
  const [preventLinkDefault, setPreventLinkDefault] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const addLog = (message: string) => {
    setLogs((previousLogs) => [...previousLogs, message]);
  };

  // Parent click handler
  const handleParentClick = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    addLog(
      `Parent clicked: ${event.currentTarget.dataset.label}`
    );
  };

  // Child click handler
  const handleChildClick = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    addLog(
      `Child clicked: ${event.currentTarget.dataset.label}`
    );

    if (stopChildBubble) {
      event.stopPropagation();
      addLog("Child bubble stopped");
    }
  };

  // Button click handler
  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    addLog(
      `Button clicked: ${event.currentTarget.dataset.label}`
    );
  };

  // Keyboard handler
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Escape") {
      setInputValue("");
      addLog("Escape pressed: input cleared");
    }
  };

  // Link handler
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    addLog("Link clicked");

    if (preventLinkDefault) {
      event.preventDefault();
      addLog("Link default prevented");
    }
  };

  // Clear event log
  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Laboratory Activity 5</h1>

      <p>
        Typed Event Handlers and Propagation Workshop
      </p>

      <hr />

      {/* Nested Click Surfaces */}
      <h2>1. Nested Click Surfaces</h2>

      <div
        data-label="Parent"
        onClick={handleParentClick}
        style={{
          padding: "30px",
          border: "3px solid black",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        <strong>Parent Surface</strong>

        <div
          data-label="Child"
          onClick={handleChildClick}
          style={{
            marginTop: "20px",
            padding: "25px",
            border: "3px solid blue",
            borderRadius: "10px",
          }}
        >
          <strong>Child Surface</strong>

          <br />
          <br />

          <button
            data-label="Nested Button"
            onClick={handleButtonClick}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Nested Button
          </button>
        </div>
      </div>

      {/* Keyboard Handling */}
      <h2>2. Keyboard Handling</h2>

      <input
        type="text"
        value={inputValue}
        placeholder="Type something, then press Escape"
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleKeyDown}
        style={{
          padding: "10px",
          width: "350px",
          maxWidth: "100%",
        }}
      />

      {/* Propagation Controls */}
      <h2>3. Propagation Controls</h2>

      <label>
        <input
          type="checkbox"
          checked={stopChildBubble}
          onChange={(event) =>
            setStopChildBubble(event.target.checked)
          }
        />{" "}
        Stop child bubble
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={preventLinkDefault}
          onChange={(event) =>
            setPreventLinkDefault(event.target.checked)
          }
        />{" "}
        Prevent link default
      </label>

      <br />
      <br />

      <a
        href="#"
        onClick={handleLinkClick}
      >
        Test Link
      </a>

      {/* Event Log */}
      <h2>Event Log</h2>

      <button
        onClick={clearLogs}
        style={{
          padding: "8px 15px",
          marginBottom: "10px",
          cursor: "pointer",
        }}
      >
        Clear Logs
      </button>

      <div
        style={{
          minHeight: "180px",
          padding: "15px",
          border: "1px solid gray",
          borderRadius: "5px",
          backgroundColor: "#f5f5f5",
        }}
      >
        {logs.length === 0 ? (
          <p>No events yet.</p>
        ) : (
          logs.map((log, index) => (
            <div key={index}>
              {index + 1}. {log}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default EventPlayground;