export const todoReducer = (todos: TodoItem[], action: TodoReducerAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...todos,
        {
          id: Math.random(),
          text: action.payload,
          done: false,
        },
      ];
    case "TOGGLE_TODO":
      return todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.payload);
    default:
      return todos;
  }
};
