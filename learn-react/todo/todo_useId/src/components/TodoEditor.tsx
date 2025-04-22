import { ActionDispatch, useState } from "react";

export default function TodoEditor({
  dispatch,
}: {
  dispatch: ActionDispatch<[action: TodoReducerAction]>;
}) {
  const [text, setText] = useState("");
  const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
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
