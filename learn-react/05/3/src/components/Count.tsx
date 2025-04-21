// 상태 -> 시간이 지남에 따라 변할 수 있는 데이터를 의미
// useState, useRender -> 리액트 훅
// 상태 변수(리액트 변수)

// const [state, setState] = useState<Type>(초기값)
// state -> 상태 변수
// setState -> 상태 업데이트 함수 (1번 인덱스)

import { useState } from "react";

export default function Count() {
  //   console.log("Count component"); // 하위컴포넌트만 랜더링

  // 리-랜더링(re-rendering)
  // 제네릭 생략 가능 -> 초기값이랑 변경되는 값이 데이터 파일이 같을 때 -> 타입추론
  // 제네릭 생략 불가능 -> 초기값과 변경되는 값이 데이터 파일이 다를 때
  //   const [count, setCount] = useState(0); // [현재 상태 값, 상태 값 업데이트 함수]
  const [count, setCount] = useState<null | number>(null);
  const [name, setName] = useState("");

  const clickHandler = () => {
    // setCount(count + 1); // 비동기 -> 상태업데이트를 기다려주지 않음
    // console.log(count); // 화면보다 콘솔이 1 적음 -> 비동기라서 ****질문
    //⭐ 1. 상태업데이트함수(값) -> 상태 변수는 '값'으로 업데이트된다.
    //-> 현재상태값이 필요없음, 관련없음
    // setCount(100);
    //⭐ 2. 상태업데이트함수(콜백함수) -> 콜백함수에서 반환한 값을 최신상태로 만듦
    //-> 현재상태값을 참조해야 함
    // setCount((count) => count + 1); // 0+1 항상 최신 상태를 반영
    // setCount((count) => count + 1); // 1+1
    // setCount((count) => count + 1); // 2+1
    setCount(10);
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={clickHandler}>증가</button>
    </>
  );
}
/*
useState
현재 상태 값, 상태 값 업데이트 함수
직접이 아니라 상태함수를 사용해서 변경
상태함수는 비동기
*/
