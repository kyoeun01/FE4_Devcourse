import { createSlice } from "@reduxjs/toolkit";

// 리듀서 함수
// useReducer()
// state, action
const counterSlice = createSlice({
  name: "counterSlice", // 슬라이스를 고유하게 구별하기 위해 이름 사용
  initialState: {
    value: 0,
  },
  // 상태 값을 업데이트 할 수 있는 로직
  reducers: {
    increment(state) {
      state.value += 1;
    },

    decrement(state) {
      state.value -= 1;
    },

    reset(state) {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer; // 슬라이스에 리듀서 객체를 등록*****
