import { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0); // undefined -> 0으로 초기화 되는 순간에 출력
  useEffect(() => {
    console.log("Count Mounted!");

    // 삭제될때 리턴에서 반환하고 있는 콜백함수를 한번만 호출
    return () => {
      // ...
      console.log("Count Unmounted!");
    };
  }, []);

  useEffect(() => {
    console.log("count values: " + count);
  }, [count]); // count가 변경될때만 이펙트 호출
  // + 버튼을 누르지않았는데 왜 values:0 이 출력되는 건가요? -> useState

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
    </>
  );
}
/*
  useEffect(() => {}, [])
  () => {} 이펙트함수, [] 의존성 배열
   
  : 의존성 배열을 참조해서 이펙트 함수를 실행

  1. 의존성 배열 [] : 컴포넌트가 생성될 때 단 한번만 실행되는 로직
  
*/
