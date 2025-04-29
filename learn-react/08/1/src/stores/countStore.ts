import { create } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type CountStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

// persist
// subscribeWithSelector
// immer 불변성을 해줌
export const useCountStore = create(
  subscribeWithSelector(
    persist(
      immer<CountStore>((set) => ({
        count: 0,
        increment: () => set((state) => state.count + 1),
        decrement: () => set((state) => state.count - 1),
        reset: () => set({ count: 0 }),
      })),
      {
        name: "counter",
      }
    )
  )
);

// 리덕스튤킷, 주스탄드 모두  새로고침하면 다 날라감
// 주스탄드는 유지하는 기능을 제공함.
