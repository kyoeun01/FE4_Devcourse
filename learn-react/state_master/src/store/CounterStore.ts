import { create } from "zustand";

// use***Store

// useState 상태 업데이트 함수랑 같음

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 50,
  increment: () => set({ count: 10 }),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
