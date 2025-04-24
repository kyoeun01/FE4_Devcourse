// UseLayoutEffect 훅
// useEffect 훅과 99% 동일한데, 실행 시점에 차이가 있다.
// useEffect -> 컴포넌트가 랜더링 된 후 실행
// UseLayoutEffect -> 컴포넌트가 랜더링 되기 전 동기적으로 실행

import { useLayoutEffect, useState } from "react";

export default function UseLayoutEffect() {
  const [count, setCount] = useState(0);
  const now = performance.now();
  while (performance.now() - now < 200) {
    // Artificial delay -- do nothing
  }

  // useEffect(() => {
  //   if (count === 10) setCount(0);
  // }, [count]);

  useLayoutEffect(() => {
    if (count === 10) setCount(0);
  }, [count]);

  return (
    <>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount(10)}>클릭</button>
    </>
  );
}
