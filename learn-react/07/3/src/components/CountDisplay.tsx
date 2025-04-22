import { useState } from "react";
export default function CountDisplay() {
  console.log("count");
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}></button>
    </>
  );
}
