import { ActionDispatch } from "react";
import TodoListItem from "./TodoListItem";

// 할일목록출력
export default function TodoList({
  todos, // 할일 리스트
  dispatch,
}: {
  todos: TodoItem[];
  dispatch: ActionDispatch<[action: TodoReducerAction]>;
}) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos &&
        todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
    </ul>
  );
}
