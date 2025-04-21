import { useState } from "react";

// useRef 훅
// - 값이 변경되도 리렌더링이 발생하지 않는 변수 (리랜더링이 발생해도 값이 유지)
// - JSX 요소를 참조하는 경우

// 컴포넌트가 다시 그려진다? (리-랜더링)
// 함수가 다시 실행되는 것

// 리액트가 관리하는 변수
// 실시간성이 보장됨.

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="text-3xl underline">count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
    </>
  );
}
