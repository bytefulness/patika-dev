import { useState } from "react";

function States() {
  // Define state for the component
  const [name, setName] = useState("");
  return (
    <>
      <h1>Name: {name}</h1>
      <button onClick={() => setName(prompt("What's your name?"))}>
        Change Name
      </button>
    </>
  );
}

export default States;
