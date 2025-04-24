// UseDeferredValue 훅
// React 18에서 도입된 UseDeferredValue 훅은 상태 업데이트를 지연시켜 UI의 반응성을 높이는 데 사용됩니다.
// 특정 값의 변경 사항에 대한 우선순위를 낮춰주기 위해서 사용하는 훅입니다.
// 우선 순위를 낮춤으로써 연산 비용이 높은 작업을 백그라운드에서 처리할 수 있게 해주기 때문에
// 단, 절대적으로 부드럽게 해주는 것은 아니며, 상대적인 부드러움을 제공합니다.

// 우선순위 낮춘다는게 무슨말.?*** -> 나중에 해도된다 비교적
// 랜더링 속도는 저하

import { useDeferredValue, useState } from "react";
const generateItems = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
    description: `Description for Item ${i}`,
  }));
};
const items = generateItems(5000);

export default function UseDeferredValue() {
  //1
  //11
  //111
  //1111
  const [input, setInput] = useState("");

  //1
  //11
  //1111  -> 그때그때 알아서 리액트가 조절함.
  const deferredValue = useDeferredValue(input);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(deferredValue.toLowerCase())
  );

  return (
    <>
      <h1>UseDeferredValue</h1>
      <input type="text" value={input} onChange={onChange} />
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
