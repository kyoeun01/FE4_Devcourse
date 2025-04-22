import { useState } from "react";
export default function Key() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Mike",
    },
    {
      id: 3,
      name: "Anna",
    },
  ]);
  const clickHandler = () => {
    setUsers((users) => [{ id: users.length + 1, name: "kyo" }, ...users]);
  };
  return (
    <>
      <h1>Key Component</h1>
      {users &&
        users.map((user, index) => (
          <input
            key={user.id}
            className="border border-black block mb-4"
            placeholder={user.name}
          />
        ))}

      <button onClick={clickHandler}>추가</button>
    </>
  );
}

// 인덱스 번호에 키 값을 주면 안됨.
