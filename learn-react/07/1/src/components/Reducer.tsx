import { useReducer } from "react";
import { counterReducer } from "../reducer/counter.reducer";

// state -> 상태 값
// action -> 함수 내부에서 상태를 변경하기 위해서 참조할 수 있는 데이터
// 반드시 무엇인가를 return 해야함 (그러지 않을거면 에러를 던져야함)
export default function Reducer() {
  // count -> 상태 값
  // dispatch -> 액션 발생 함수 : 새로운 로직을 생성할 순 없다. 이미 정해져있음.
  const [count, dispatch] = useReducer(counterReducer, { value: 0 });
  return (
    <>
      <h1>count: {count.value}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => dispatch({ type: "RESET" })}>0</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
    </>
  );
}

// useReducer

// import { useReducer } from "react";
// // import { counterReducer } from "../reducer/counter.reducer";

// //       reducer(현재 상태 값, reducer함수 내부에서 참조할 수 있는 어떤 데이터 값)
// // action: {type, payload}
// function counterReducer(state:number, action ) {

// }

// export default function Reducer() {
//   // 두개의 매개변수를 전달받음 -> 리듀서함수, 초깃값
//   // 내부적으로 배열로된 데이터를 리턴
//   // const [count, counterReducer함수를 호출할수있는 함수] = useReducer(리듀서함수, 초깃값); // [상태값, 액션발생함수] dispatch
//   const [count, dispatch] = useReducer(counterReducer, { value: 0 });
//   return (
//     <>
//       <h1>count: {count.value}</h1>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
//       <button onClick={() => dispatch({ type: "RESET" })}>0</button>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
//     </>
//   );
// }
