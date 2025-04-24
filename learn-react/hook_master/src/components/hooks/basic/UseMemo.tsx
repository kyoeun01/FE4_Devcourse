import { useMemo, useState } from "react";

const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    selected: i === 29_999_998,
  };
});
// useMemo(콜백함수, 의존성배열)
export default function UseMemo() {
  const [count, setCount] = useState(0);

  // 불필요한 연산을 만들어준 것
  // 3000만개의 배열 데이터를 렌더링 마다 재생성하고 있음
  const [items] = useState(initialItems);

  // useMemo(콜백함수, 의존성배열) 콜백함수에서 리턴하는 것을 메모이제이션 함
  const selectItems = useMemo(
    () => items.find((item) => item.selected),
    [items]
  );
  // const selectItems = items.find((item) => item.selected);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        증가
      </button>
      <p>{selectItems?.id}</p>
    </>
  );
}

// Reactmemo의 차이
// 컴포넌트를 메모이제이션

// useMemo
// 값을 메모이제이션

// useCallback
// 함수를 메모이제이션
