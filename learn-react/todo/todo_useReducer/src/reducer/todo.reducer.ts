export const todoReducer = (todos: TodoItem[], action: TodoReducerAction) => {
  // todos: TodoItem[] 초깃값, action: TodoReducerAction 외부 참조 데이터  = todoReducer
  // 참조하는 데이터를 action
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...todos,
        {
          id: Math.random(), // 고유값을 주기 위해 -> uuid 씀
          text: action.payload,
          done: false,
        },
      ];

    case "TOGGLE_TODO": // 완료 여부
      return todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      ); //todos를 순회해서 action.payload가 id와 같은 값이면 done값을 바꿈. 기본 false인데 -> true 나머진 유지

    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.payload);
    // 일치하지 않는 항목들만 남김

    default:
      return todos; // 어떤 case도 해당되지 않으면 유지
  }
};
