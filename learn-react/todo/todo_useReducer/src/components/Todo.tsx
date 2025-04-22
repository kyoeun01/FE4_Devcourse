import { useReducer } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { todoReducer } from "../reducer/todo.reducer";

// 일반 객체는 interface
// 타입별칭 type
export default function Todo() {
  const [todos, dispatch] = useReducer(todoReducer, []); // todos는 상태값 [],  dispatch는 todoReducer 함수 실행

  return (
    <div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      <TodoHeader />
      <TodoEditor dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}
