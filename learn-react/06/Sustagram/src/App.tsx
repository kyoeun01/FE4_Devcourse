// import { useState, useRef } from "react";

// export default function App() {
//   const [picture, setPicture] = useState([
//     // 순서대로 삭제하기 위해서 하나의 객체로 만듦.
//     {
//       index: 0,
//       src: "https://cdn.pixabay.com/photo/2013/08/26/09/40/silhouette-175970_1280.jpg",
//     },
//     {
//       index: 1,
//       src: "https://cdn.pixabay.com/photo/2015/11/25/09/42/rocks-1061540_1280.jpg",
//     },
//     {
//       index: 2,
//       src: "https://cdn.pixabay.com/photo/2018/09/23/12/33/building-3697342_1280.jpg",
//     },
//     {
//       index: 3,
//       src: "https://cdn.pixabay.com/photo/2014/05/02/12/43/clouds-335969_1280.jpg",
//     },
//     {
//       index: 4,
//       src: "https://cdn.pixabay.com/photo/2022/12/28/21/10/streets-7683842_1280.jpg",
//     },
//     {
//       index: 5,
//       src: "https://cdn.pixabay.com/photo/2023/01/08/05/45/mountain-7704584_1280.jpg",
//     },
//   ]);

//   // 객체의 배열을 넣겠다. 여기로 기록이 됨.
//   const deletePictures = useRef<{ index: number; src: string }[]>([]);

//   /* 삭제 */
//   const deletePictureHandler = (index: number) => {
//     // 새로운 배열 껍데기안에 삭제에 해당하는 데이터를 넣고, 지금 삭제할 객체 형식도 저장
//     deletePictures.current = [...deletePictures.current, picture[index]];
//     // 불변성을 위해 새로운 껍데기 -> 배열을 삭제할 때는 거의 filter 사용
//     // 하나의 요소를 순회하면서 삭제하려고 넘긴 인덱스 번호를 제외하고 새로운 배열을 반환함
//     setPicture((picture) => picture.filter((_, i) => i !== index));
//   };

//   /* 복구 */
//   const recoveryPictureHandler = () => {
//     // 삭제된 이미지가 없다면 return 아무것도
//     if (deletePictures.current.length === 0) return;
//     //배열비구조할당 , recoveryPic이거만 꺼내고 나머지는 하나로 다시 뭉침
//     const [recoveryPic, ...remainPic] = deletePictures.current;
//     // 남은 이미지를 다시  ********?
//     deletePictures.current = remainPic;
//     // 순서없이 복구, 정렬(객체)
//     setPicture((picture) =>
//       [...picture, recoveryPic].sort((a, b) => a.index - b.index)
//     );
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto py-6 px-4">
//       <header className="flex items-center justify-between mb-6">
//         <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
//         {/* More Buttons */}
//         <div className="flex items-center gap-2">
//           <button
//             className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
//             onClick={recoveryPictureHandler} // 복구
//           >
//             <img src="/undo.svg" alt="Moon icon" className="h-5 w-5" />
//             <span className="sr-only">Toggle dark mode</span>
//           </button>
//         </div>
//       </header>
//       <div className="grid grid-cols-3 gap-4">
//         {picture.map((value, index) => (
//           <div className="group relative" key={value.index}>
//             <a className="group" href="#">
//               <img
//                 // src 속성에 접근
//                 src={value.src}
//                 width="400"
//                 height="400"
//                 alt={`Photo ${index + 1}`}
//                 className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
//                 style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
//               />
//             </a>
//             <button
//               className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 h-10 w-10 absolute top-2 right-2 rounded-full"
//               onClick={() => deletePictureHandler(index)} // 삭제(인덱스 번호)
//             >
//               <img src="/delete.svg" alt="Delete icon" className="h-4 w-4" />
//               <span className="sr-only">Delete</span>
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import Key from "./components/Key";
export default function App() {
  return (
    <>
      <Key />
    </>
  );
}
