import { ActionDispatch } from "react";
import { twMerge } from "tailwind-merge";

// 하나의 할일목록
export default function TodoListItem({
  todo, // 개별 할일 객체
  dispatch,
}: {
  todo: TodoItem;
  dispatch: ActionDispatch<[action: TodoReducerAction]>;
}) {
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox" // 완료 체크 박스
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
          checked={todo.done} // 할일이 체크 되었는지
          onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
          // 체크하면 TOGGLE_TODO 액션 -> done:true 로 바뀜
        />
        <span
          className={twMerge(todo.done && "line-through")}
          // done:true이고 취소선 생성
        >
          {todo.text}
        </span>
      </div>
      <button
        // delete 버튼
        className="text-red-500 hover:text-red-700 ml-4"
        onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
      >
        Delete
      </button>
    </li>
  );
}
