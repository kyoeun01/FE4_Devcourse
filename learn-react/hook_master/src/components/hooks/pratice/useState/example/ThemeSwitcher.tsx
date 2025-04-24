import { useState } from "react";

const themes = [
  { name: "Light", bg: "bg-gray-100", text: "text-gray-800" },
  { name: "Dark", bg: "bg-gray-800", text: "text-white" },
  { name: "Blue", bg: "bg-blue-500", text: "text-white" },
  { name: "Green", bg: "bg-green-500", text: "text-white" },
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [message, setMessage] = useState("Hello, World!"); // 입력한 값이 아래에 바로 보이게
  // const [theme, setTheme] = useState(themes[currentTheme]);
  const theme = themes[currentTheme];

  const nextTheme = () => {
    setCurrentTheme((currentTheme) => (currentTheme + 1) % themes.length); //0 -> 1, 1 -> 2 % themes.length 만큼만 증가
  };

  // useEffect(() => {
  //   setTheme(themes[currentTheme]); // 변경을 감지해서 바꿈
  // }, [currentTheme]);

  // 중요🌟🌈💚✨📌💛
  // const theme = themes[currentTheme];
  // const nextTheme = () => {
  //   setCurrentTheme((currentTheme) => currentTheme + 1);
  // }; // 상태업데이트함수는 순수?해야함 -> 최소 로직

  return (
    <div
      className={`${theme.bg} ${theme.text} p-4 rounded-lg transition-colors duration-200`}
    >
      <div className="space-y-4">
        <input
          type="text"
          className="w-full px-3 py-2 rounded border text-gray-800 bg-white"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="text-center text-xl font-semibold">{message}</div>

        <button
          className="w-full px-4 py-2 bg-white text-gray-800 rounded hover:bg-gray-100 transition-colors"
          onClick={nextTheme}
        >
          Switch Theme
        </button>
      </div>
    </div>
  );
}
