// export default function User({
//   user,
// }: {
//   user: { id: number; name: string; age: number };
// }) {
//   return (
//     <>
//       <pre>{JSON.stringify(user, null, 2)}</pre>
//     </>
//   );
// }
export default function User({
  id,
  name,
  age,
  clickHandler,
}: {
  id: number;
  name: string;
  age: number;
  clickHandler?: () => void;
}) {
  return (
    <>
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{age}</h1>
      {clickHandler && <button onClick={clickHandler}>클릭</button>}
    </>
  );
}
