// Import Components
import User from "./components/User";

const friends = ["Dilara", "Gamze", "Mehmet", "Cansu"];

function App() {
  return (
    // Use fragment to create parent without creating element.
    <>
      <User
        name="Erhan"
        age={24}
        field="Front-end"
        friends={friends}
        devTeam={true}
      />
    </>
  );
}

export default App;
