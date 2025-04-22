import travel from "./assets/images/travel.png";
import seoul from "./assets/images/seoul.jpg";
import london from "./assets/images/london.jpg";
import paris from "./assets/images/paris.jpg";
import newyork from "./assets/images/newyork.jpg";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
export default function App() {
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
            <li
              className={twMerge(City === "Seoul" && "font-bold")}
              onClick={() => cityChangeHandler("Seoul")}
            >
              <a href="#">Seoul</a>
            </li>
            <li
              className={twMerge(City === "London" && "font-bold")}
              onClick={() => cityChangeHandler("London")}
            >
              <a href="#">London</a>
            </li>
            <li
              className={twMerge(City === "Paris" && "font-bold")}
              onClick={() => cityChangeHandler("Paris")}
            >
              <a href="#">Paris</a>
            </li>
            <li
              className={twMerge(City === "NewYork" && "font-bold")}
              onClick={() => cityChangeHandler("NewYork")}
            >
              <a href="#">NewYork</a>
            </li>
          </ul>
          <div>
            {City === "Seoul" && <img src={seoul} alt={"서울"} />}
            {City === "London" && <img src={london} alt={"런던"} />}
            {City === "Paris" && <img src={paris} alt={"파리"} />}
            {City === "NewYork" && <img src={newyork} alt={"뉴욕"} />}
          </div>
        </div>
      </div>
    </>
  );
}
