// Import Components
import Header from "./components/Header";

const greeting = (name) => {
  return `Hello ${name}`;
};

function App() {
  return (
    // Use fragment to create parent without creating element.
    <>
      <Header />
      <h2>Greeting: {greeting("Erhan")}</h2>
    </>
  );
}

export default App;
