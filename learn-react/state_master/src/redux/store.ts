// 하나의 중앙 스토어에서 여러 슬라이스를 가지고 공유
// 리덕스 스토어 만드는 코드 - 공식사이트 quick start

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    // todo: todoSlice,
    // setting: setttingSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
