import { useState } from "react";
import b_off from "./assets/images/b_off.png";
import b_on from "./assets/images/b_on.png";

export default function App() {
  const [lamp, setlamp] = useState(false);

  const toggleLamp = () => {
    setlamp((lamp) => !lamp);
  };

  return (
    <>
      <h1>램프 켜기</h1>
      <img
        src={lamp ? b_on : b_off}
        alt={lamp ? "전구 on" : "전구 off"}
        onClick={toggleLamp}
      />
    </>
  );
}
