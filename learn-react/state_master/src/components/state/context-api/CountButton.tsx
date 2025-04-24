import { useContext } from "react";
import { CounterActionContext } from "../../../context/CounterContext";

export default function CountButton() {
  console.log("Count Button");
  const { increment, decrement, reset } = useContext(CounterActionContext)!;
  return (
    <>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>0</button>
      <button onClick={increment}>+</button>
    </>
  );
}
