import React, { ActionDispatch, useState } from "react";

export default function TodoEditor({
  dispatch,
}: {
  dispatch: ActionDispatch<[action: TodoReducerAction]>;
}) {
  // 사용자가 무엇을 입력했는지
  const [text, setText] = useState(""); // text: 현재 input 입력된 문자열, setText: input 내용 업데이트 함수

  // 입력 이벤트 핸들러
  const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }; // input 값이 바뀔 때마다 상태를 업데이트

  // 폼 제출 핸들러
  // form 태그 사용하면 enter로 새로고침 가능
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 새로고침 방지
    dispatch({ type: "ADD_TODO", payload: text }); // 폼을 제출하면 dispatch를 통해 ADD_TODO 액션을 보냄
    setText(""); // 입력창 초기화
  };
  return (
    <form className="flex p-4" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none"
        value={text}
        onChange={textChangeHandler}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      >
        Add
      </button>
    </form>
  );
}
