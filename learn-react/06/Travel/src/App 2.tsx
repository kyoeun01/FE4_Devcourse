import travel from "./assets/images/travel.png";
import seoul from "./assets/images/seoul.jpg";
import london from "./assets/images/london.jpg";
import paris from "./assets/images/paris.jpg";
import newyork from "./assets/images/newyork.jpg";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
export default function App() {
  /* 반복문 */
  const areas = ["Seoul", "London", "Paris", "NewYork"];
  // 타입 인덱스 시그니처
  const images: { [key: string]: string } = {
    seoul,
    london,
    paris,
    newyork,
  };

  const [City, setCity] = useState("Seoul"); // 초기값: 서울
  const cityChangeHandler = (city: string) => {
    setCity(city);
  };
  return (
    <>
      <div className="absolute top-10 left-10 text-3xl cursor-pointer">
        <div className="light-icon fa-regular fa-sun"></div>
        <div className="dark-icon fa-regular fa-moon hidden"></div>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center gap-4  max-w-[500px]">
          <img src={travel} alt={"로고"} width={80} />
          <ul className="flex items-center antialiased justify-around w-full">
            {/* li 태그 반복 */}
            {areas.map((area) => (
              <li
                className={twMerge(City === area && "font-bold")}
                onClick={() => cityChangeHandler(area)}
              >
                <a href="#">{area}</a>
              </li>
            ))}
          </ul>
          <div>
            {areas.map((area) => {
              return (
                City === area && (
                  <img src={images[area.toLocaleLowerCase()]} alt={area} />
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
