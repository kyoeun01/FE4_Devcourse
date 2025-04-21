// props 객체
// export default function User(props: { name: string; age: string }) {
//   console.log(props);
//   return (
//     <h1>
//       User:{props.name} / {props.age}
//     </h1>
//   );
// }

// 관례적으로 props

// 구조 분해 할당
export default function User({ name, age }: { name: string; age: number }) {
  return (
    <h1>
      User:{name} / {age}
    </h1>
    //  <h1>
    //   {`User: ${name} / ${age}`}
    //  </h1>
    // 템플릿 리터럴 방식
  );
}

// 자바스크립트 구조분해할당 복습
// 보통 실무에서 사용 -> props 반복이 안되니까
