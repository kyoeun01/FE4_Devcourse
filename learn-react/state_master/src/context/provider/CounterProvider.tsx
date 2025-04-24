import { useMemo, useState } from "react";
import { CounterContext, CounterActionContext } from "../CounterContext";

export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);

  // 객체라는 값을 useMemo -> 겉 껍데기
  const memoization = useMemo(() => ({ increment, decrement, reset }), []);

  // CounterContext 객체에 데이터 공급
  return (
    <CounterActionContext value={memoization}>
      <CounterContext value={{ count }}>{children}</CounterContext>
    </CounterActionContext>
  );
}
