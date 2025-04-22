export function counterReducer(state: { value: number }, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + action.payload };
    case "DECREMENT":
      return { value: state.value - action.payload };
    case "RESET":
      return { value: 0 };
    default:
      return state;
  }
}
