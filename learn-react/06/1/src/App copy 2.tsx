// import CountDisplay from "./components/CountDisplay";
// import CountButton from "./components/CountButton";
// import { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const increment = () => setCount((count) => count + 1);
//   const decrement = () => setCount((count) => count - 1);
//   const reset = () => setCount(0);
//   return (
//     <>
//       <CountDisplay count={count} />
//       <CountButton increment={increment} decrement={decrement} reset={reset} />
//     </>
//   );
// }

/*
// 제어 컨트롤러 방식
// 폼(요소) 제어
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const [text2, setText2] = useState("");
  const changeHandler2 = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText2(e.target.value);
  };
  const resetHandler = () => {
    //
    setText("");
  };
  return (
    <>
      <h1>input: {text}</h1>
      <input type="text" value={text} onChange={changeHandler} maxLength={4} />
      {text.length >= 4 && <p>4글자 이상은 작성할 수 없음.</p>}
      <button onClick={resetHandler}>입력값리셋</button>

      <pre>{text2}</pre>
      <textarea value={text2} onChange={changeHandler2}></textarea>
    </>
  );
}
// value={text} 없으면 초기값을 알 수 없음.
*/

import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("orange");
  const HandlerSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInput(e.target.value);
  };

  const [checked, setChecked] = useState(false);
  const HandlerCheckbox = () => {
    setChecked((checked) => !checked);
  };

  return (
    <>
      <p>selected: {input}</p>
      <select value={input} onChange={HandlerSelect}>
        <option value="apple">apple</option>
        <option value="banana">banana</option>
        <option value="orange">orange</option>
      </select>
      <input type="checkbox" checked={checked} onChange={HandlerCheckbox} />
      {checked && <h1>선택됨</h1>}
    </>
  );
}
