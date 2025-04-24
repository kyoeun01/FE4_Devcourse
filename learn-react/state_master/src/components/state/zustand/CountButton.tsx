import { useCounterStore } from "../../../store/CounterStore";

export default function CountButton() {
  console.log("Count Button");
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  return (
    <>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>0</button>
      <button onClick={increment}>+</button>
    </>
  );
}
