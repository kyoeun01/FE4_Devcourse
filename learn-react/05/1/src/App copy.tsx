// import User from "./components/User";

// export default function App() {
//   const user = {
//     id: 1,
//     name: "kyo",
//     age: 20,
//   };

//   return (
//     <>
//       {/* <User user={user} /> */}
//       {/* <User id={user.id} name={user.name} age={user.age} /> */}
//       <User {...user} clickHandler={() => alert("click")} />
//     </>
//   );
// }
// 스프레드 연산자는 객체에서만 사용가능 -> 속성과 값이 명확해서
// 객체가 많을 경우에 좋음
// 타입검사를 빡세게 하지 않음. -> id 하나만 받아도 됨.

/* 조건부 랜더링 */
// 조건에 따라서 컴포넌트를 랜더링하는 기법
//null,undefined 해도 오류는 안나는데 랜더링은 안됨.
// 1. if
// 2. 삼항연산자
// 3. 논리 && 연산자
// 3.1 expr1 && expr2 -> true

// import LoggdeIn from "./components/LoggdeIn";
// import NotLoggdeIn from "./components/NotLoggdeIn";

// export default function App() {
//   const isLogin = true;

//   /* if */
//   // if (isLogin) {
//   //   return <LoggdeIn />;
//   // }

//   // return <NotLoggdeIn />;

//   /* 삼함연산자 */
//   // return <>{isLogin ? <h1>User Is Login!</h1> : <h1>User Is Not Login!</h1>}</>;
//   // return <>{isLogin ? <h1>User Is Login!</h1> : <h1>User Is Not Login!</h1>}</>;

//   /* 논리 연산자 */
//   return (
//     <>
//       {isLogin && <h1>User Is Login!</h1>}
//       {!isLogin && <h1>User Is Not Login!</h1>}
//     </>
//   );
// }

/* 반복 랜더링 */
// 반복문을 활용해서 반복 랜더링을 수행하는 기법
// for -> 안씀
// [].map()
// key 속성의 값을 유니크하게 해줘야함.
// import User from "./components/User";
// export default function App() {
//   const renderItems = [];
//   const items = ["apple", "banana", "orange", "orange"];
//   const users = [
//     {
//       id: 1,
//       name: "kyo",
//       age: 20,
//     },
//     {
//       id: 2,
//       name: "eun",
//       age: 30,
//     },
//   ];

//   for (let i = 0; i < items.length; i++) {
//     renderItems.push(<li>{items[i]}</li>);
//   }

//   return (
//     <>
//       {/* if */}
//       <ul>{renderItems}</ul>

//       {/* map() */}
//       <ul>
//         {items.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ul>

//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.name} - {user.age}
//           </li>
//         ))}
//       </ul>

//       <ul>
//         {users.map((user) => (
//           <User key={user.id} {...user} />
//         ))}
//       </ul>

//       <ul>
//         {users.map((user) => (
//           <User key={user.id} id={user.id} name={user.name} age={user.age} />
//         ))}
//       </ul>
//     </>
//   );
// }

// // key는 컴포넌트에 전달되지 않는다.
