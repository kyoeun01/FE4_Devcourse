import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);
  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋0</button>
      <button onClick={increment}>증가</button>
    </>
  );
}
