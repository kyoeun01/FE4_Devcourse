import { useState } from "react";

export default function App() {
  //  useState<number> 초기값과 현재값 타입이 같으면 생략가능
  const [count, setCount] = useState(0);
  const [name, setName] = useState<null | string>(null);
  const increment = () => {
    // 상태업데이트함수(값)
    // 상태업데이트함수(콜백함수)
    // setCount(10);
    // setCount(count + 1); -> X , 언제 잘못될지 모름
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const changeName = () => {
    setName("홍길동");
  };
  return (
    <>
      <h1 className="text-3xl underline">Count: {count}</h1>
      <button onClick={increment}>증가</button>

      <button onClick={decrement}>감소</button>

      <button onClick={reset}>0 (리셋)</button>

      <h1>name: {name}</h1>
      <button onClick={changeName}>이름 변경</button>
    </>
  );
}
/*
 import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="text-3xl underline">Count: {count}</h1>
      <button onClick={() => setCount((count) => count - 1)}>감소</button>
      <button onClick={() => setCount(0)}>0(리셋)</button>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
    </>
  );
}
*/
// 이렇게 해도 되지만 함수로 빼야 넘겨줄 때 편함
