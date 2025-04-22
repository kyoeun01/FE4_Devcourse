// 일반 객체는 interface -> 자동으로 병합, 확장 가능
// 타입별칭 type -> 자동으로 병합되진않음
type TodoItem = { id: number; text: string; done: boolean };

// 구별된 유니온 타입
type TodoReducerAction =
  | {
      type: "ADD_TODO";
      payload: string;
    }
  | {
      type: "TOGGLE_TODO";
      payload: number;
    }
  | {
      type: "DELETE_TODO";
      payload: number;
    };
