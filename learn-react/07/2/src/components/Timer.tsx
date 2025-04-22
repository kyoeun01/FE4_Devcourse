import { useEffect, useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("timer");
      // setTimer(timer + 1);
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1>Timer: {timer}</h1>
    </>
  );
}
