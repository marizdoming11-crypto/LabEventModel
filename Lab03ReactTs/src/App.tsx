import { Badge } from "./components/Badge";
import { Panel } from "./components/Panel";

function App() {
  return (
    <main>
      <h1>Laboratory Activity 3</h1>

      <Panel title="React + TypeScript">
        <p>This is a typed React component.</p>
        <Badge label="Ready" tone="success" />
      </Panel>

      <Panel title="Event-Driven UI">
        <p>These components are ready for later event wiring.</p>
        <Badge label="In Progress" tone="info" />
      </Panel>

      <Panel title="Practice">
        <p>TypeScript helps make component props safer.</p>
        <Badge label="Review" tone="warning" />
      </Panel>
    </main>
  );
}

export default App;