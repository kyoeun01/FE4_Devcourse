// 사이드 이펙트(side effect)
// useEffect 훅
// 컴포넌트가 생성될 때 (마운트)
// 컴포넌트의 상태 값이 변경될 때 (업데이트)
// 컴포넌트가 해제될 때 (언마운트)

import { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // 마운트
  useEffect(() => {
    console.log("Count Mounted");

    // 언마운트
    // 콜백함수 메모리가 없어지기 직전에 딱 한번만 실행
    return () => {
      console.log("Count unMounted");
    };
  }, []);

  useEffect(() => {
    console.log("count change:" + count);
  }, [count, name]);

  useEffect(() => {
    console.log("name change:" + name);
  }, [name]); // 감시하고 싶은 데이터 (count)

  return (
    <>
      <h1>Count; {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <button onClick={() => setName("susususususu")}>이름변경</button>
    </>
  );
}

// 의존성 배열?****
// 의존성 배열에 여러개 가능
// useEffect 몇개든 얼마든지 써도 됨.
