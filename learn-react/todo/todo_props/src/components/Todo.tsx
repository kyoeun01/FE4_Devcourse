import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  // 상태 정리
  const [todos, setTodos] = useState<TodoItem[]>([]);
  // 함수의 캡슐화
  const addTodos = (text: string) => {
    // 상태 업데이트 -> 삭제, 추가, 수정 등
    setTodos((todos) => [
      ...todos,
      {
        id: Math.random(),
        text,
        done: false, // 처음엔 할일만 있으니까
      },
    ]);
  };
  // id를 매개변수로 받아서
  const toggleTodo = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        // 같은 id의 done (전개, 원래 done의 반대)
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="w-[350px] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      <TodoHeader />
      <TodoEditor addTodos={addTodos} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
