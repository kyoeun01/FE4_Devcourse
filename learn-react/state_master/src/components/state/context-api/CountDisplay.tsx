import { useContext } from "react";
import { CounterContext } from "../../../context/CounterContext";

export default function CountDisplay() {
  const { count } = useContext(CounterContext)!;
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}

// CounterContext가 공급하는 value 데이터를 꺼내쓸 수 있음.
