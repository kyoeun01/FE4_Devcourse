export function counterReducer(
  state: { value: number },
  action: { type: string }
) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    case "RESET":
      return { value: 0 };
    default:
      // 원래 상태 값을 그대로 반환
      return state;
  }
}
