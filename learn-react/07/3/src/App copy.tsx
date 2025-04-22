/* 강사님 보충 강의 useEffect */

// useEffect(사이드이펙트) -> 랜더링을 제외한 부가적인 코드 작성할 때 사용
// 컴포넌트 생성, 업데이트, 삭제 특정 시점에서 코드를 작성할 때 사용할 수 있는 리액트 훅
// 컴포넌트의 목적 : 화면을 랜더링하기 위해서

// import { useState } from "react";
// import Count from "./components/2Count2";

// // 생성, 업데이트, 삭제
// export default function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       {show && <Count />}
//       <button onClick={() => setShow((show) => !show)}>토글</button>
//     </>
//   );
// }

import { useEffect, useState } from "react";

export default function App() {
  // API
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") //
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });

    // 반드시 변수에 담고
    const interval = setInterval(() => {}, 1000);
    const timeout = setTimeout(() => {}, 1000);

    // clear 해줘야함 -> 왜? 안하면 메모리 누수 발생
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <h1>App Component</h1>
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
