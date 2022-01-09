// Import Components
import Header from "./components/Header";

const greeting = (name) => {
  return `Hello ${name}`;
};
const isLoggedIn = true;

function App() {
  return (
    // Use fragment to create parent without creating element.
    <>
      <Header />
      <h2>{isLoggedIn ? greeting("Erhan") : "Please log in."}</h2>
    </>
  );
}

export default App;
