import { useState } from "react";

function BasicCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ width: "50%", marginInline: "auto", textAlign: "center" }}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          if (count >= 1) return setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default BasicCounter;
