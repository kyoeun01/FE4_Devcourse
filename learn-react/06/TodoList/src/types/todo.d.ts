interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

// 일반 객체는 interface -> 자동으로 병합, 확장 가능
// 타입별칭 type -> 자동으로 병합되진않음
type TodoItem = { id: number; text: string; done: boolean };
