// import Button from "./components/html/Button";

// export default function App() {
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center min-h-screen gap-4">
//         <Button type="button" className="bg-[#4f4f4f]">
//           Add
//         </Button>
//         <Button type="button" className="bg-[#ed4848]">
//           Cancel
//         </Button>
//         <Button type="button" className="bg-[#7d48ed]" disabled>
//           Success
//         </Button>
//       </div>
//     </>
//   );
// }

import Input from "./components/html/Input";

export default function App() {
  return (
    <>
      <div className="item-middle">
        <Input type="text" className="input-style" />
        <Input type="password" className="input-style" />
        <Input className="input-style" disabled />
      </div>
    </>
  );
}
