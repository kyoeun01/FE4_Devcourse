// 체크박스
// 다중선택

// 라디오
// 단일 선택

import { useState } from "react";
// 상태를 업데이트 시킬 때는 새로운 껍데기가 필요
export default function App() {
  // []
  // ["apple"]
  // ["apple", "banana"]
  // 새로운 껍데기 제공 [배열] -> map, filter

  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
  const changeSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedFruits((selectedFruits) =>
      selectedFruits.includes(value)
        ? selectedFruits.filter((fruit) => fruit !== value)
        : [...selectedFruits, value]
    );
  };
  const [radio, setRadio] = useState("");
  const radioChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);
  };
  return (
    <>
      <p>선택된 과일: {selectedFruits.join(",")}</p>
      <label style={{ display: "block" }}>
        <input
          type="checkbox"
          value="apple"
          checked={selectedFruits.includes("apple")}
          onChange={changeSelectHandler}
        />
        apple
      </label>
      <label style={{ display: "block" }}>
        <input
          type="checkbox"
          value={"banana"}
          checked={selectedFruits.includes("banana")}
          onChange={changeSelectHandler}
        />
        banana
      </label>
      <label style={{ display: "block" }}>
        <input
          type="checkbox"
          value={"orange"}
          checked={selectedFruits.includes("orange")}
          onChange={changeSelectHandler}
        />
        orange
      </label>
      <hr />
      <h1>radio: {radio}</h1>
      <input
        type="radio"
        name="gender"
        value="male"
        checked={radio === "male"}
        onChange={radioChangeHandler}
      />
      male
      <br />
      <input
        type="radio"
        name="gender"
        value="female"
        checked={radio === "female"}
        onChange={radioChangeHandler}
      />
      female
    </>
  );
}
//
//
//
//
//
/* 쉬운 버전 */

// 불변성 -> 지켜주면서 코딩해야 함
// 한번 정의된 데이터가 변하지 않는 특징
// export default function App() {
//   const [values, setValues] = useState<string[]>([]);
//   const clickHandler = () => {
//     // setValues(["apple"]);
//     setValues((values) => [...values, "apple"]);
//   };
//   const [user, setUser] = useState<{ name: string; age: number }>({
//     name: "kyo",
//     age: 20,
//   });
//   const clickHandler2 = () => {
//     setUser((user) => ({ ...user, age: 30 }));
//   };
//   return (
//     <>
//       <h1>{values.join(",")}</h1>
//       <button onClick={clickHandler}>추가 </button>

//       <h1>{JSON.stringify(user, null, 2)}</h1>
//       <button onClick={clickHandler2}>추가 </button>
//     </>
//   );
// }
