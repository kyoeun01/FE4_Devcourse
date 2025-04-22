import { ActionDispatch, useId } from "react";
import { twMerge } from "tailwind-merge";

export default function TodoListItem({
  todo,
  dispatch,
}: {
  todo: TodoItem;
  dispatch: ActionDispatch<[action: TodoReducerAction]>;
}) {
  // useId()는 React 18부터 도입된 훅
  // 서버와 클라이언트(웹 브라우저)에서 동일한 고유 id 값을 생성할 수 있도록 도와줍니다.
  // 주로 <label>과 <input> 같이 연결이 필요한 요소에서 사용합니다.

  // 왜 필요? 	<input>과 <label>을 안전하게 연결하기 위해
  // TodoListItem 컴포넌트가 여러 번 렌더링될 경우 id가 중복될 수 있음 ❌
  // useId()는 각 컴포넌트마다 안전하고 유일한 id를 자동으로 생성함 ⭕️
  const uuid = useId();

  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          // <label>을 클릭했을 때 해당 <input>이 자동으로 포커스를 받는다.
          id={uuid}
          type="checkbox"
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
          checked={todo.done}
          onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
        />
        <label htmlFor={uuid} className={twMerge(todo.done && "line-through")}>
          {todo.text}
        </label>
      </div>
      <button
        className="text-red-500 hover:text-red-700 ml-4"
        onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
      >
        Delete
      </button>
    </li>
  );
}
// TodoList 컴포넌트가 TodoListItem을 여러 번 반복해서 렌더링한다고 할 때,
// 각 TodoListItem은 개별적으로 렌더링
// 그래서  그에 따른 useId()를 호출할 때 각 항목이 고유한 id를 가지기위해 uuid 사용
