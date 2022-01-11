import { useState, useEffect } from "react";

function UseEffect() {
  const [state, setState] = useState(true);

  // Run every component render or re-render
  useEffect(() => {
    console.log("Component re-render");
  });

  // Run just once when component render
  useEffect(() => {
    console.log("Component render first time.");
  }, []);

  return (
    <>
      <h1>State: {state ? "true" : "false"}</h1>
      <button onClick={() => setState(!state)}> Change State</button>
    </>
  );
}

export default UseEffect;
