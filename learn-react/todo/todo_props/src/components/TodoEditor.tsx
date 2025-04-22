import React, { useState } from "react";

export default function TodoEditor({
  addTodos,
}: {
  addTodos: (text: string) => void;
}) {
  // 사용자가 무엇을 입력했는지
  const [text, setText] = useState("");
  const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  // form 태그 사용하면 enter로 새로고침 가능
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodos(text);
    setText("");
  };
  return (
    <form className="flex p-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none"
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
