import { useDispatch } from "react-redux";
import { decrement, reset, increment } from "../../../redux/slice/counterSlice";

export default function CountButton() {
  console.log("Count Button"); // 리덕스툴킷은 버튼 리랜더링 안함. contextapi와 다르게
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>0</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
}
