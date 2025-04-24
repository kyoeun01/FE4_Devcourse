// useTransition 훅
// React 18에서 도입된 useTransition 훅은 상태 업데이트를 지연시켜 UI의 반응성을 높이는 데 사용됩니다.
// 이 훅은 비동기적으로 상태를 업데이트할 수 있는 기능을 제공하여, 사용자가 입력하는 동안 UI가 부드럽게 유지되도록 도와줍니다.
// 단, 절대적으로 부드럽게 해주는 것은 아니며, 상대적인 부드러움을 제공합니다.

// 작업 단위로 우선순위를 낮춤
// 렉걸리는 상황을 알고
// 로딩이 걸리는 중이다 라는 것을 UI로 알려줄 수 있다.

// useTransition 훅은 두 가지 값을 반환합니다:
// 1. isPending: 현재 상태 업데이트가 지연되고 있는지 여부를 나타내는 불리언 값입니다.
// 2. startTransition: 상태 업데이트를 지연시키는 함수입니다.
//
// 사용 예시:
// 1. 사용자가 입력하는 동안 UI가 부드럽게 유지되도록 하는 검색 기능 구현
// 2. 대량의 데이터를 처리하는 동안 UI가 멈추지 않도록 하는 경우
// 3. 비동기 작업을 수행하는 동안 로딩 상태를 표시하는 경우
import { useState, useTransition } from "react";
const generateItems = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
    description: `Description for Item ${i}`,
  }));
};
const items = generateItems(5000);

export default function UseTransition() {
  const [input, setInput] = useState("");
  const [isPending, startTransition] = useTransition();

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(input.toLowerCase())
  );
  //
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      // 모든 코드를 우선순위를 낮춤
      setInput(e.target.value);
    });
  };
  return (
    <>
      <h1>UseTranstion</h1>
      <input type="text" value={input} onChange={onChange} />
      {isPending && <p>Loding...</p>}
      <ul>
        {filteredItems.map((d) => (
          <li key={d.id}>
            {d.name} - {d.description}
          </li>
        ))}
      </ul>
    </>
  );
}

/*
흐름 정리
1. 사용자가 글자 입력 → onChange 함수 호출됨

2. setInput(...)으로 state 변경됨

3. 컴포넌트 리렌더링

4. value={input}이 새 값으로 반영됨 → 화면에 보임

*/
