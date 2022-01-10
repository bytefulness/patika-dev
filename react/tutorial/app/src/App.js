// Import Components
import User from "./components/User";

function App() {
  return (
    // Use fragment to create parent without creating element.
    <>
      <User name="Erhan" age={24} field="Front-end" devTeam={true} />
    </>
  );
}

export default App;
